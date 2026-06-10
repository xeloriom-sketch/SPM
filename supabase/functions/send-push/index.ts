import { createClient } from "https://esm.sh/@supabase/supabase-js@2";

const VAPID_PUBLIC  = "BNhN-0-XNO3NNeVMnBtWUofYSvWbpErTQd_su-VUBQVFhrReYU8_Sp2slEty0Zq4rg0DqKaj9PeRL1siPz70cnY";
const VAPID_PRIVATE = "-AHR3-6XTV47MOTSC3mYyCiL3vPGiU41vow_qY6kC3o";
const VAPID_EMAIL   = "mailto:contact@taxispm.fr";

const supabase = createClient(
  Deno.env.get("SUPABASE_URL")!,
  Deno.env.get("SUPABASE_SERVICE_ROLE_KEY")!
);

// Signature VAPID pour l'en-tête Authorization
async function vapidHeaders(endpoint: string) {
  const url = new URL(endpoint);
  const audience = `${url.protocol}//${url.host}`;
  const now = Math.floor(Date.now() / 1000);

  const header = btoa(JSON.stringify({ alg: "ES256", typ: "JWT" })).replace(/=/g, "").replace(/\+/g, "-").replace(/\//g, "_");
  const payload = btoa(JSON.stringify({ aud: audience, exp: now + 43200, sub: VAPID_EMAIL })).replace(/=/g, "").replace(/\+/g, "-").replace(/\//g, "_");

  const privateKeyBytes = Uint8Array.from(atob(VAPID_PRIVATE.replace(/-/g, "+").replace(/_/g, "/")), c => c.charCodeAt(0));
  const privateKey = await crypto.subtle.importKey(
    "pkcs8",
    toPkcs8(privateKeyBytes),
    { name: "ECDSA", namedCurve: "P-256" },
    false,
    ["sign"]
  );

  const data = new TextEncoder().encode(`${header}.${payload}`);
  const sig = await crypto.subtle.sign({ name: "ECDSA", hash: "SHA-256" }, privateKey, data);
  const sigB64 = btoa(String.fromCharCode(...new Uint8Array(sig))).replace(/=/g, "").replace(/\+/g, "-").replace(/\//g, "_");
  const jwt = `${header}.${payload}.${sigB64}`;

  return {
    Authorization: `vapid t=${jwt},k=${VAPID_PUBLIC}`,
    "Content-Type": "application/octet-stream",
    TTL: "86400",
  };
}

// Convertit une clé brute P-256 en PKCS#8
function toPkcs8(raw: Uint8Array): ArrayBuffer {
  const prefix = new Uint8Array([
    0x30, 0x41, 0x02, 0x01, 0x00, 0x30, 0x13, 0x06,
    0x07, 0x2a, 0x86, 0x48, 0xce, 0x3d, 0x02, 0x01,
    0x06, 0x08, 0x2a, 0x86, 0x48, 0xce, 0x3d, 0x03,
    0x01, 0x07, 0x04, 0x27, 0x30, 0x25, 0x02, 0x01,
    0x01, 0x04, 0x20,
  ]);
  const out = new Uint8Array(prefix.length + raw.length);
  out.set(prefix);
  out.set(raw, prefix.length);
  return out.buffer;
}

Deno.serve(async (req) => {
  if (req.method === "OPTIONS") return new Response(null, { headers: { "Access-Control-Allow-Origin": "*", "Access-Control-Allow-Headers": "content-type" } });

  let body: { name?: string; service?: string; phone?: string };
  try { body = await req.json(); } catch { body = {}; }

  const { data: subs } = await supabase.from("push_subscriptions").select("*");
  if (!subs?.length) return new Response("no subscribers", { status: 200 });

  const notification = JSON.stringify({
    title: "Nouveau client 🚕",
    body: `${body.name ?? "Client"} — ${body.service ?? "Demande"}`,
    url: "/admin/messages",
  });

  const dead: string[] = [];

  await Promise.allSettled(subs.map(async (sub) => {
    try {
      const headers = await vapidHeaders(sub.endpoint);
      const res = await fetch(sub.endpoint, {
        method: "POST",
        headers,
        body: new TextEncoder().encode(notification),
      });
      if (res.status === 404 || res.status === 410) dead.push(sub.endpoint);
    } catch { /* ignore */ }
  }));

  if (dead.length) await supabase.from("push_subscriptions").delete().in("endpoint", dead);

  return new Response("ok", { status: 200, headers: { "Access-Control-Allow-Origin": "*" } });
});
