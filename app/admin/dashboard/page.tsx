"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { getSupabase } from "@/lib/supabase-browser";
import AdminShell from "@/components/admin/AdminShell";
import { sitePath } from "@/lib/site-path";
import { MessageSquare, CheckCircle2, Clock, Mail, ArrowRight } from "lucide-react";
import { usePushStatus } from "@/components/admin/PushNotificationManager";

type MsgRow = { id: string; name: string; service: string; phone: string; read: boolean; created_at: string };

type DashData = {
  total: number;
  unread: number;
  today: number;
  recent: MsgRow[];
  byService: Record<string, number>;
};

function timeAgo(dateStr: string): string {
  const diff = Date.now() - new Date(dateStr).getTime();
  const mins = Math.floor(diff / 60000);
  if (mins < 1) return "À l'instant";
  if (mins < 60) return `Il y a ${mins} min`;
  const hours = Math.floor(mins / 60);
  if (hours < 24) return `Il y a ${hours}h`;
  if (hours < 48) return "Hier";
  return new Date(dateStr).toLocaleDateString("fr-FR", { day: "numeric", month: "short" });
}

function PushBanner() {
  const { status, subscribe, unsubscribe } = usePushStatus();

  if (status === "loading") return (
    <div className="mb-6 h-[68px] rounded-2xl border border-borderc bg-surface animate-pulse" />
  );

  if (status === "subscribed") return (
    <div className="mb-6 flex items-center justify-between gap-3 rounded-2xl border border-emerald-200 bg-emerald-50 px-4 py-3.5">
      <div className="flex items-center gap-2.5">
        <div className="h-2 w-2 rounded-full bg-emerald-500 animate-pulse" />
        <p className="text-sm text-emerald-700 font-medium">Notifications activées — vous serez alerté en temps réel</p>
      </div>
      <button onClick={unsubscribe} className="text-xs text-emerald-600 underline shrink-0">Désactiver</button>
    </div>
  );

  if (status === "denied") return (
    <div className="mb-6 rounded-2xl border border-red-200 bg-red-50 px-4 py-4">
      <p className="text-sm font-semibold text-red-700 mb-1">Notifications bloquées</p>
      <p className="text-xs text-red-600">Réglages iPhone → Safari → Notifications du site web → autorisez taxispm.fr</p>
    </div>
  );

  if (status === "needs-install") return (
    <div className="mb-6 rounded-2xl border border-orange-200 bg-orange-50 px-4 py-4">
      <p className="text-sm font-semibold text-orange-700 mb-1">Installez l&apos;app pour les notifications</p>
      <p className="text-xs text-orange-600">Appuyez sur <strong>Partager</strong> → <strong>Sur l&apos;écran d&apos;accueil</strong>, puis rouvrez depuis votre écran d&apos;accueil.</p>
    </div>
  );

  if (status === "unsupported") return (
    <div className="mb-6 rounded-2xl border border-orange-200 bg-orange-50 px-4 py-4">
      <p className="text-sm font-semibold text-orange-700 mb-1">Navigateur non supporté</p>
      <p className="text-xs text-orange-600">Sur iPhone/iPad, utilisez Safari et mettez à jour iOS vers la version 16.4 minimum.</p>
    </div>
  );

  return (
    <button
      onClick={subscribe}
      className="mb-6 w-full flex items-center justify-between gap-3 rounded-2xl border-2 border-black bg-black px-5 py-4 active:opacity-80 transition-all"
    >
      <div className="text-left">
        <p className="text-sm font-semibold text-white">Activer les notifications push</p>
        <p className="text-xs text-white/50 mt-0.5">Alerte immédiate dès qu&apos;un client vous contacte</p>
      </div>
      <span className="rounded-full bg-white px-4 py-2 text-xs font-bold text-black shrink-0">Activer</span>
    </button>
  );
}

export default function DashboardPage() {
  const router = useRouter();
  const [data, setData] = useState<DashData | null>(null);
  const [newMessage, setNewMessage] = useState(false);

  useEffect(() => {
    async function load() {
      const { data: { user } } = await getSupabase().auth.getUser();
      if (!user) { router.push("/admin/login"); return; }

      const { data: all } = await getSupabase()
        .from("contact_messages")
        .select("id, name, service, phone, read, created_at")
        .order("created_at", { ascending: false });

      const messages: MsgRow[] = all ?? [];
      buildData(messages);
    }

    function buildData(messages: MsgRow[]) {
      const today = new Date().toDateString();
      const byService = messages.reduce<Record<string, number>>((acc, m) => {
        acc[m.service] = (acc[m.service] ?? 0) + 1;
        return acc;
      }, {});
      setData({
        total: messages.length,
        unread: messages.filter((m) => !m.read).length,
        today: messages.filter((m) => new Date(m.created_at).toDateString() === today).length,
        recent: messages.slice(0, 5),
        byService,
      });
    }

    load();

    // Realtime : nouveau message
    const supabase = getSupabase();
    const channel = supabase
      .channel("dashboard_realtime")
      .on("postgres_changes", { event: "INSERT", schema: "public", table: "contact_messages" }, (payload) => {
        const msg = payload.new as MsgRow;
        setNewMessage(true);
        setTimeout(() => setNewMessage(false), 5000);
        setData((prev) => {
          if (!prev) return prev;
          const isToday = new Date(msg.created_at).toDateString() === new Date().toDateString();
          return {
            total: prev.total + 1,
            unread: prev.unread + 1,
            today: isToday ? prev.today + 1 : prev.today,
            recent: [msg, ...prev.recent].slice(0, 5),
            byService: { ...prev.byService, [msg.service]: (prev.byService[msg.service] ?? 0) + 1 },
          };
        });
      })
      .on("postgres_changes", { event: "UPDATE", schema: "public", table: "contact_messages" }, (payload) => {
        const updated = payload.new as MsgRow;
        setData((prev) => {
          if (!prev) return prev;
          const wasUnread = prev.recent.find((m) => m.id === updated.id && !m.read);
          return {
            ...prev,
            unread: wasUnread && updated.read ? prev.unread - 1 : prev.unread,
            recent: prev.recent.map((m) => m.id === updated.id ? { ...m, ...updated } : m),
          };
        });
      })
      .on("postgres_changes", { event: "DELETE", schema: "public", table: "contact_messages" }, (payload) => {
        const deleted = payload.old as { id: string };
        setData((prev) => {
          if (!prev) return prev;
          const msg = prev.recent.find((m) => m.id === deleted.id);
          return {
            ...prev,
            total: prev.total - 1,
            unread: msg && !msg.read ? prev.unread - 1 : prev.unread,
            recent: prev.recent.filter((m) => m.id !== deleted.id),
          };
        });
      })
      .subscribe();

    return () => { supabase.removeChannel(channel); };
  }, [router]);

  const unread = data?.unread ?? 0;

  const stats = data ? [
    {
      icon: Mail,
      label: "Non lus",
      value: data.unread,
      highlight: data.unread > 0,
      pulse: newMessage,
    },
    {
      icon: Clock,
      label: "Aujourd'hui",
      value: data.today,
      highlight: false,
      pulse: false,
    },
    {
      icon: MessageSquare,
      label: "Total messages",
      value: data.total,
      highlight: false,
      pulse: false,
    },
    {
      icon: CheckCircle2,
      label: "Lus",
      value: data.total - data.unread,
      highlight: false,
      pulse: false,
    },
  ] : [];

  return (
    <AdminShell unread={unread}>
      <div className="p-5 lg:p-8 max-w-5xl mx-auto">
        <div className="mb-7">
          <h1 className="font-display text-2xl font-bold">Tableau de bord</h1>
          <p className="text-sm text-mutedc mt-1">Bienvenue dans votre espace administration.</p>
        </div>

        <PushBanner />

        {!data ? (
          <div className="flex items-center justify-center py-24">
            <div className="flex flex-col items-center gap-3 text-mutedc">
              <div className="h-5 w-5 animate-spin rounded-full border-2 border-black/20 border-t-black" />
              <span className="text-sm">Chargement…</span>
            </div>
          </div>
        ) : (
          <>
            {/* Stats */}
            <div className="grid grid-cols-2 gap-3 lg:grid-cols-4 mb-7">
              {stats.map(({ icon: Icon, label, value, highlight, pulse }) => (
                <div
                  key={label}
                  className={`rounded-2xl border p-5 transition-all ${
                    highlight
                      ? "border-black bg-black text-white"
                      : "border-borderc bg-surface"
                  }`}
                >
                  <div className={`mb-3 ${highlight ? "text-white/70" : "text-mutedc"}`}>
                    <Icon className="h-4 w-4" />
                  </div>
                  <div className="flex items-end gap-2">
                    <p className={`font-display text-3xl font-bold leading-none ${pulse ? "animate-pulse" : ""}`}>
                      {value}
                    </p>
                  </div>
                  <p className={`text-xs mt-2 ${highlight ? "text-white/60" : "text-mutedc"}`}>{label}</p>
                </div>
              ))}
            </div>

            <div className="grid grid-cols-1 gap-5 lg:grid-cols-[1fr_0.55fr]">
              {/* Derniers messages */}
              <div className="rounded-2xl border border-borderc bg-surface p-5">
                <div className="flex items-center justify-between mb-4">
                  <h2 className="text-sm font-semibold">Derniers messages</h2>
                  <a
                    href={sitePath("/admin/messages")}
                    className="flex items-center gap-1 text-xs text-mutedc hover:text-black transition-colors"
                  >
                    Voir tout
                    <ArrowRight className="h-3 w-3" />
                  </a>
                </div>
                <div className="flex flex-col gap-2">
                  {data.recent.length === 0 && (
                    <p className="text-sm text-mutedc text-center py-8">Aucun message pour le moment.</p>
                  )}
                  {data.recent.map((m) => (
                    <a
                      key={m.id}
                      href={sitePath(`/admin/messages?id=${m.id}`)}
                      className="flex items-center gap-3 rounded-xl border border-borderc/50 bg-surface2/50 px-4 py-3 transition-all hover:border-borderc hover:bg-surface2"
                    >
                      <div className={`grid h-8 w-8 shrink-0 place-items-center rounded-full text-xs font-bold text-white ${!m.read ? "bg-black" : "bg-black/40"}`}>
                        {m.name.charAt(0)}
                      </div>
                      <div className="flex-1 min-w-0">
                        <p className={`text-sm truncate ${!m.read ? "font-semibold" : "font-normal text-mutedc"}`}>{m.name}</p>
                        <p className="text-xs text-mutedc truncate">{m.service}</p>
                      </div>
                      <div className="flex flex-col items-end gap-1 shrink-0">
                        <p className="text-[10px] text-mutedc">{timeAgo(m.created_at)}</p>
                        {!m.read && <span className="h-2 w-2 rounded-full bg-black" />}
                      </div>
                    </a>
                  ))}
                </div>
              </div>

              {/* Services */}
              <div className="rounded-2xl border border-borderc bg-surface p-5">
                <h2 className="text-sm font-semibold mb-4">Services demandés</h2>
                <div className="flex flex-col gap-3.5">
                  {Object.entries(data.byService)
                    .sort(([, a], [, b]) => b - a)
                    .map(([service, count]) => (
                      <div key={service}>
                        <div className="flex items-center justify-between mb-1.5">
                          <p className="text-xs text-mutedc truncate max-w-[140px]">{service}</p>
                          <p className="text-xs font-semibold">{count}</p>
                        </div>
                        <div className="h-1.5 rounded-full bg-borderc overflow-hidden">
                          <div
                            className="h-full rounded-full bg-black transition-all duration-500"
                            style={{ width: `${Math.round((count / data.total) * 100)}%` }}
                          />
                        </div>
                      </div>
                    ))}
                  {Object.keys(data.byService).length === 0 && (
                    <p className="text-sm text-mutedc text-center py-4">Aucune donnée</p>
                  )}
                </div>
              </div>
            </div>
          </>
        )}
      </div>
    </AdminShell>
  );
}
