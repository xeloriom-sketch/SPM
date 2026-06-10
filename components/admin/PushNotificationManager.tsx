"use client";

import { useEffect, useState, useCallback } from "react";
import { Bell, BellOff, BellRing } from "lucide-react";
import { getSupabase } from "@/lib/supabase-browser";

type Status = "unsupported" | "denied" | "default" | "subscribed" | "loading";

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
      setStatus("unsupported");
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
    if (!reg) return;
    setStatus("loading");
    try {
      const sub = await reg.pushManager.subscribe({
        userVisibleOnly: true,
        applicationServerKey: urlBase64ToUint8Array(VAPID_PUBLIC),
      });
      const json = sub.toJSON();
      const keys = json.keys as { p256dh: string; auth: string };
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      await (getSupabase() as any).from("push_subscriptions").upsert(
        { endpoint: json.endpoint, p256dh: keys.p256dh, auth: keys.auth },
        { onConflict: "endpoint" }
      );
      setStatus("subscribed");
    } catch {
      setStatus(Notification.permission === "denied" ? "denied" : "default");
    }
  }, [reg]);

  const unsubscribe = useCallback(async () => {
    if (!reg) return;
    setStatus("loading");
    const sub = await reg.pushManager.getSubscription();
    if (sub) {
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      await (getSupabase() as any).from("push_subscriptions").delete().eq("endpoint", sub.endpoint);
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
