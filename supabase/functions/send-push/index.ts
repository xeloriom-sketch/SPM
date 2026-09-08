import { createClient } from "https://esm.sh/@supabase/supabase-js@2";

const VAPID_PUBLIC  = "BNhN-0-XNO3NNeVMnBtWUofYSvWbpErTQd_su-VUBQVFhrReYU8_Sp2slEty0Zq4rg0DqKaj9PeRL1siPz70cnY";
const VAPID_PRIVATE = "-AHR3-6XTV47MOTSC3mYyCiL3vPGiU41vow_qY6kC3o";
const VAPID_EMAIL   = "mailto:contact@taxispm.fr";

const supabase = createClient(
  Deno.env.get("SUPABASE_URL")!,
  Deno.env.get("SUPABASE_SERVICE_ROLE_KEY")!
);

// ── Email via Resend API ──────────────────────────────────────────────────────
async function sendEmailNotification(body: { name?: string; service?: string; phone?: string; email?: string; date?: string; message?: string }) {
  const resendKey = Deno.env.get("RESEND_API_KEY");
  if (!resendKey) return; // Resend non configuré — silencieux

  const contactEmail = Deno.env.get("CONTACT_EMAIL") ?? "contact@taxispm.fr";
  const phoneDisplay = body.phone ?? "non renseigné";
  const emailDisplay = body.email ?? "non renseigné";

  const html = `
    <div style="font-family:sans-serif;max-width:600px;margin:auto;background:#0a0a0a;color:#f5f5f5;padding:32px;border-radius:16px;">
      <div style="margin-bottom:24px;">
        <span style="font-size:22px;font-weight:800;color:#b6f000;">SPM Taxi</span>
        <span style="font-size:12px;color:#8a8a8a;margin-left:12px;">Nouvelle demande de course</span>
      </div>
      <h2 style="color:#f5f5f5;margin:0 0 20px;">🚕 Nouveau client — ${body.service ?? "Demande"}</h2>
      <table style="width:100%;border-collapse:collapse;">
        <tr><td style="padding:8px 0;color:#8a8a8a;width:140px;">Nom</td><td style="padding:8px 0;font-weight:600;">${body.name ?? "—"}</td></tr>
        <tr><td style="padding:8px 0;color:#8a8a8a;">Téléphone</td><td style="padding:8px 0;font-weight:600;color:#b6f000;">${phoneDisplay}</td></tr>
        <tr><td style="padding:8px 0;color:#8a8a8a;">Email</td><td style="padding:8px 0;">${emailDisplay}</td></tr>
        <tr><td style="padding:8px 0;color:#8a8a8a;">Service</td><td style="padding:8px 0;color:#b6f000;font-weight:600;">${body.service ?? "—"}</td></tr>
        ${body.date ? `<tr><td style="padding:8px 0;color:#8a8a8a;">Date</td><td style="padding:8px 0;">${body.date}</td></tr>` : ""}
        ${body.message ? `<tr><td style="padding:8px 0;color:#8a8a8a;vertical-align:top;">Message</td><td style="padding:8px 0;">${body.message.replace(/\n/g, "<br>")}</td></tr>` : ""}
      </table>
      <div style="margin-top:24px;padding:16px;background:#141414;border-radius:12px;border:1px solid #262626;">
        <p style="margin:0;font-size:13px;color:#8a8a8a;">Appelez directement : <strong style="color:#f5f5f5;">${phoneDisplay}</strong></p>
      </div>
      <div style="margin-top:24px;">
        <a href="https://taxispm.fr/admin/messages" style="display:inline-block;background:#b6f000;color:#0a0a0a;padding:10px 20px;border-radius:8px;text-decoration:none;font-weight:700;font-size:13px;">Voir dans l'admin →</a>
      </div>
      <div style="margin-top:28px;padding-top:20px;border-top:1px solid #262626;font-size:12px;color:#8a8a8a;">
        Reçu le ${new Date().toLocaleDateString("fr-FR", { dateStyle: "long" })} à ${new Date().toLocaleTimeString("fr-FR", { timeStyle: "short" })}
      </div>
    </div>
  `;

  await fetch("https://api.resend.com/emails", {
    method: "POST",
    headers: {
      Authorization: `Bearer ${resendKey}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      from: "SPM Taxi <noreply@taxispm.fr>",
      to: [contactEmail],
      reply_to: body.email ?? contactEmail,
      subject: `🚕 Nouveau client — ${body.name ?? "Demande"} (${body.service ?? "—"})`,
      html,
    }),
  }).catch(() => {}); // Ne jamais faire planter le push à cause de l'email
}

// ── VAPID helpers ─────────────────────────────────────────────────────────────
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

// ── Handler ───────────────────────────────────────────────────────────────────
Deno.serve(async (req) => {
  if (req.method === "OPTIONS") return new Response(null, { headers: { "Access-Control-Allow-Origin": "*", "Access-Control-Allow-Headers": "content-type,authorization" } });

  let body: { name?: string; service?: string; phone?: string; email?: string; date?: string; message?: string };
  try { body = await req.json(); } catch { body = {}; }

  // Envoi email + push en parallèle
  const [, { data: subs }] = await Promise.all([
    sendEmailNotification(body),
    supabase.from("push_subscriptions").select("*"),
  ]);

  if (!subs?.length) return new Response("no subscribers", { status: 200, headers: { "Access-Control-Allow-Origin": "*" } });

  const notification = JSON.stringify({
    title: "Nouveau client 🚕",
    body: `${body.name ?? "Client"} — ${body.service ?? "Demande"} · ${body.phone ?? ""}`,
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
