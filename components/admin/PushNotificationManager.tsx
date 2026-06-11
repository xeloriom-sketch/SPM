"use client";

import { useEffect, useState, useCallback } from "react";
import { Bell, BellOff, BellRing } from "lucide-react";

type Status = "unsupported" | "needs-install" | "denied" | "default" | "subscribed" | "loading";

const VAPID_PUBLIC = "BNhN-0-XNO3NNeVMnBtWUofYSvWbpErTQd_su-VUBQVFhrReYU8_Sp2slEty0Zq4rg0DqKaj9PeRL1siPz70cnY";

function urlBase64ToUint8Array(base64String: string) {
  const padding = "=".repeat((4 - (base64String.length % 4)) % 4);
  const base64 = (base64String + padding).replace(/-/g, "+").replace(/_/g, "/");
  const raw = atob(base64);
  const output = new Uint8Array(raw.length);
  for (let i = 0; i < raw.length; i++) output[i] = raw.charCodeAt(i);
  return output;
}

export function usePushStatus() {
  const [status, setStatus] = useState<Status>("loading");
  const [reg, setReg] = useState<ServiceWorkerRegistration | null>(null);

  useEffect(() => {
    if (!("serviceWorker" in navigator) || !("PushManager" in window)) {
      const isIOS = /iphone|ipad|ipod/i.test(navigator.userAgent);
      const isStandalone = ("standalone" in navigator && (navigator as { standalone?: boolean }).standalone === true)
        || window.matchMedia("(display-mode: standalone)").matches;
      setStatus(isIOS && !isStandalone ? "needs-install" : "unsupported");
      return;
    }
    navigator.serviceWorker.register("/sw.js")
      .then(async (r) => {
        setReg(r);
        if (Notification.permission === "denied") { setStatus("denied"); return; }
        const existing = await r.pushManager.getSubscription();
        setStatus(existing ? "subscribed" : "default");
      })
      .catch(() => setStatus("default"));

    const t = setTimeout(() => setStatus(s => s === "loading" ? "default" : s), 3000);
    return () => clearTimeout(t);
  }, []);

  const subscribe = useCallback(async () => {
    setStatus("loading");
    try {
      // Demande permission explicite (obligatoire sur Safari iOS)
      const permission = await Notification.requestPermission();
      if (permission !== "granted") { setStatus(permission === "denied" ? "denied" : "default"); return; }

      // Enregistre le SW si pas encore fait
      let r = reg;
      if (!r) {
        r = await navigator.serviceWorker.register("/sw.js");
        setReg(r);
      }

      // Attend que le SW soit actif
      await navigator.serviceWorker.ready;

      const sub = await r.pushManager.subscribe({
        userVisibleOnly: true,
        applicationServerKey: urlBase64ToUint8Array(VAPID_PUBLIC),
      });
      const json = sub.toJSON();
      const keys = json.keys as { p256dh: string; auth: string };

      const ANON = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!;
      const URL  = process.env.NEXT_PUBLIC_SUPABASE_URL!;
      const res  = await fetch(`${URL}/rest/v1/push_subscriptions`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "apikey": ANON,
          "Authorization": `Bearer ${ANON}`,
          "Prefer": "resolution=merge-duplicates",
        },
        body: JSON.stringify({ endpoint: json.endpoint, p256dh: keys.p256dh, auth: keys.auth }),
      });

      if (!res.ok) {
        const err = await res.text();
        console.error("Supabase insert error:", res.status, err);
        throw new Error(err);
      }

      setStatus("subscribed");
    } catch (e) {
      console.error("Push subscribe error:", e);
      setStatus(Notification.permission === "denied" ? "denied" : "default");
    }
  }, [reg]);

  const unsubscribe = useCallback(async () => {
    if (!reg) return;
    setStatus("loading");
    const sub = await reg.pushManager.getSubscription();
    if (sub) {
      const ANON = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!;
      const URL  = process.env.NEXT_PUBLIC_SUPABASE_URL!;
      await fetch(`${URL}/rest/v1/push_subscriptions?endpoint=eq.${encodeURIComponent(sub.endpoint)}`, {
        method: "DELETE",
        headers: { "apikey": ANON, "Authorization": `Bearer ${ANON}` },
      });
      await sub.unsubscribe();
    }
    setStatus("default");
  }, [reg]);

  return { status, subscribe, unsubscribe };
}

export default function PushNotificationManager() {
  const { status, subscribe, unsubscribe } = usePushStatus();

  if (status === "unsupported") return null;
  if (status === "loading") return (
    <div className="flex items-center gap-3 rounded-xl px-3 py-2.5 text-sm text-mutedc opacity-50">
      <Bell className="h-4 w-4 shrink-0 animate-pulse" />
      <span className="hidden lg:inline">Notifications…</span>
    </div>
  );

  if (status === "denied") return (
    <div className="flex items-center gap-3 rounded-xl px-3 py-2.5 text-sm text-mutedc" title="Autorisez dans les paramètres du navigateur">
      <BellOff className="h-4 w-4 shrink-0 text-red-400" />
      <span className="hidden lg:inline text-xs">Notifs bloquées</span>
    </div>
  );

  if (status === "subscribed") return (
    <button
      onClick={unsubscribe}
      className="flex items-center gap-3 rounded-xl px-3 py-2.5 text-sm text-emerald-600 hover:bg-emerald-50 transition-all w-full text-left"
    >
      <BellRing className="h-4 w-4 shrink-0" />
      <span className="hidden lg:inline">Notifs activées</span>
    </button>
  );

  return (
    <button
      onClick={subscribe}
      className="flex items-center gap-3 rounded-xl px-3 py-2.5 text-sm text-mutedc hover:bg-surface2 hover:text-foreground transition-all w-full text-left"
    >
      <Bell className="h-4 w-4 shrink-0" />
      <span className="hidden lg:inline">Activer les notifs</span>
    </button>
  );
}
