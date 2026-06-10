"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { getSupabase } from "@/lib/supabase-browser";
import AdminShell from "@/components/admin/AdminShell";
import { sitePath } from "@/lib/site-path";
import { MessageSquare, CheckCircle2, Clock, Mail } from "lucide-react";
import { usePushStatus } from "@/components/admin/PushNotificationManager";

type MsgRow = { id: string; name: string; service: string; phone: string; read: boolean; created_at: string };

type DashData = {
  total: number;
  unread: number;
  today: number;
  recent: MsgRow[];
  byService: Record<string, number>;
};

function PushBanner() {
  const { status, subscribe, unsubscribe } = usePushStatus();
  if (status === "subscribed") return (
    <div className="mb-6 flex items-center justify-between gap-3 rounded-2xl border border-emerald-200 bg-emerald-50 px-4 py-3">
      <p className="text-sm text-emerald-700 font-medium">Notifications activées — vous recevrez une alerte dès qu'un client envoie un message.</p>
      <button onClick={unsubscribe} className="text-xs text-emerald-600 underline shrink-0">Désactiver</button>
    </div>
  );
  if (status === "denied") return (
    <div className="mb-6 rounded-2xl border border-red-200 bg-red-50 px-4 py-3">
      <p className="text-sm text-red-700">Notifications bloquées. Allez dans Réglages → Safari → Notifications du site web → autorisez ce site.</p>
    </div>
  );
  if (status === "unsupported" || status === "loading") return null;
  return (
    <button
      onClick={subscribe}
      className="mb-6 w-full flex items-center justify-between gap-3 rounded-2xl border border-borderc bg-surface px-4 py-4 hover:border-black/20 transition-all"
    >
      <div className="text-left">
        <p className="text-sm font-semibold">Activer les notifications</p>
        <p className="text-xs text-mutedc mt-0.5">Recevez une alerte dès qu'un client vous contacte</p>
      </div>
      <span className="rounded-full bg-black px-4 py-2 text-xs font-semibold text-white shrink-0">Activer</span>
    </button>
  );
}

export default function DashboardPage() {
  const router = useRouter();
  const [data, setData] = useState<DashData | null>(null);

  useEffect(() => {
    async function load() {
      const { data: { user } } = await getSupabase().auth.getUser();
      if (!user) { router.push("/admin/login"); return; }

      const { data: all } = await getSupabase()
        .from("contact_messages")
        .select("id, name, service, phone, read, created_at")
        .order("created_at", { ascending: false });

      const messages: MsgRow[] = all ?? [];
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
  }, [router]);

  const unread = data?.unread ?? 0;

  const stats = data ? [
    { icon: MessageSquare, label: "Total messages", value: data.total, color: "text-black" },
    { icon: Mail, label: "Non lus", value: data.unread, color: "text-black" },
    { icon: Clock, label: "Aujourd'hui", value: data.today, color: "text-black" },
    { icon: CheckCircle2, label: "Lus", value: data.total - data.unread, color: "text-mutedc" },
  ] : [];

  return (
    <AdminShell unread={unread}>
      <div className="p-6 max-w-5xl mx-auto">
        <div className="mb-6">
          <h1 className="font-display text-2xl font-bold">Tableau de bord</h1>
          <p className="text-sm text-mutedc mt-1">Bienvenue dans votre espace administration.</p>
        </div>

        <PushBanner />



        {!data ? (
          <div className="flex items-center justify-center py-20 text-sm text-mutedc">Chargement…</div>
        ) : (
          <>
            {/* Stats */}
            <div className="grid grid-cols-2 gap-4 lg:grid-cols-4 mb-8">
              {stats.map(({ icon: Icon, label, value, color }) => (
                <div key={label} className="rounded-2xl border border-borderc bg-surface p-5">
                  <div className={`mb-3 ${color}`}>
                    <Icon className="h-5 w-5" />
                  </div>
                  <p className="font-display text-3xl font-bold">{value}</p>
                  <p className="text-xs text-mutedc mt-1">{label}</p>
                </div>
              ))}
            </div>

            <div className="grid grid-cols-1 gap-6 lg:grid-cols-[1fr_0.6fr]">
              {/* Recent messages */}
              <div className="rounded-2xl border border-borderc bg-surface p-5">
                <div className="flex items-center justify-between mb-4">
                  <h2 className="text-sm font-semibold">Derniers messages</h2>
                  <a href={sitePath("/admin/messages")} className="text-xs text-black hover:underline">Voir tout →</a>
                </div>
                <div className="flex flex-col gap-3">
                  {data.recent.length === 0 && (
                    <p className="text-sm text-mutedc text-center py-6">Aucun message pour le moment.</p>
                  )}
                  {data.recent.map((m) => (
                    <a
                      key={m.id}
                      href={sitePath("/admin/messages")}
                      className="flex items-center gap-3 rounded-xl border border-borderc/50 bg-surface2 px-4 py-3 transition-colors hover:border-borderc"
                    >
                      <div className="grid h-8 w-8 shrink-0 place-items-center rounded-full bg-black text-xs font-bold text-white">
                        {m.name.charAt(0)}
                      </div>
                      <div className="flex-1 min-w-0">
                        <p className="text-sm font-medium truncate">{m.name}</p>
                        <p className="text-xs text-mutedc truncate">{m.service}</p>
                      </div>
                      <div className="flex flex-col items-end gap-1">
                        <p className="text-xs text-mutedc">
                          {new Date(m.created_at).toLocaleDateString("fr-FR")}
                        </p>
                        {!m.read && <span className="h-2 w-2 rounded-full bg-black" />}
                      </div>
                    </a>
                  ))}
                </div>
              </div>

              {/* Services breakdown */}
              <div className="rounded-2xl border border-borderc bg-surface p-5">
                <h2 className="text-sm font-semibold mb-4">Services demandés</h2>
                <div className="flex flex-col gap-3">
                  {Object.entries(data.byService)
                    .sort(([, a], [, b]) => b - a)
                    .map(([service, count]) => (
                      <div key={service}>
                        <div className="flex items-center justify-between mb-1">
                          <p className="text-xs text-mutedc truncate max-w-[160px]">{service}</p>
                          <p className="text-xs font-semibold">{count}</p>
                        </div>
                        <div className="h-1.5 rounded-full bg-borderc overflow-hidden">
                          <div
                            className="h-full rounded-full bg-black"
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
