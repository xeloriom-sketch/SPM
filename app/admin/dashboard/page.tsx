import { getServerSession } from "next-auth";
import { redirect } from "next/navigation";
import { authOptions } from "@/lib/auth";
import { supabase } from "@/lib/supabase";
import AdminShell from "@/components/admin/AdminShell";
import { MessageSquare, CheckCircle2, Clock, Mail } from "lucide-react";

export default async function DashboardPage() {
  const session = await getServerSession(authOptions);
  if (!session) redirect("/admin/login");

  const { data: all } = await supabase.from("contact_messages").select("id, read, created_at, service");
  const messages = all ?? [];

  const total = messages.length;
  const unread = messages.filter((m) => !m.read).length;
  const today = messages.filter((m) => {
    const d = new Date(m.created_at);
    const n = new Date();
    return d.toDateString() === n.toDateString();
  }).length;

  const byService = messages.reduce<Record<string, number>>((acc, m) => {
    acc[m.service] = (acc[m.service] ?? 0) + 1;
    return acc;
  }, {});

  const { data: recent } = await supabase
    .from("contact_messages")
    .select("*")
    .order("created_at", { ascending: false })
    .limit(5);

  const stats = [
    { icon: MessageSquare, label: "Total messages", value: total, color: "text-blue-400" },
    { icon: Mail, label: "Non lus", value: unread, color: "text-lime" },
    { icon: Clock, label: "Aujourd'hui", value: today, color: "text-orange-400" },
    { icon: CheckCircle2, label: "Lus", value: total - unread, color: "text-mutedc" },
  ];

  return (
    <AdminShell unread={unread}>
      <div className="p-6 max-w-5xl mx-auto">
        <div className="mb-8">
          <h1 className="font-display text-2xl font-bold">Tableau de bord</h1>
          <p className="text-sm text-mutedc mt-1">Bienvenue dans votre espace administration.</p>
        </div>

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
              <a href="/admin/messages" className="text-xs text-lime hover:underline">Voir tout →</a>
            </div>
            <div className="flex flex-col gap-3">
              {(recent ?? []).length === 0 && (
                <p className="text-sm text-mutedc text-center py-6">Aucun message pour le moment.</p>
              )}
              {(recent ?? []).map((m: { id: string; name: string; service: string; phone: string; read: boolean; created_at: string }) => (
                <a
                  key={m.id}
                  href="/admin/messages"
                  className="flex items-center gap-3 rounded-xl border border-borderc/50 bg-surface2 px-4 py-3 transition-colors hover:border-borderc"
                >
                  <div className="grid h-8 w-8 shrink-0 place-items-center rounded-full bg-lime text-xs font-bold text-black">
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
                    {!m.read && (
                      <span className="h-2 w-2 rounded-full bg-lime" />
                    )}
                  </div>
                </a>
              ))}
            </div>
          </div>

          {/* Services breakdown */}
          <div className="rounded-2xl border border-borderc bg-surface p-5">
            <h2 className="text-sm font-semibold mb-4">Services demandés</h2>
            <div className="flex flex-col gap-3">
              {Object.entries(byService)
                .sort(([, a], [, b]) => b - a)
                .map(([service, count]) => (
                  <div key={service}>
                    <div className="flex items-center justify-between mb-1">
                      <p className="text-xs text-mutedc truncate max-w-[160px]">{service}</p>
                      <p className="text-xs font-semibold">{count}</p>
                    </div>
                    <div className="h-1.5 rounded-full bg-borderc overflow-hidden">
                      <div
                        className="h-full rounded-full bg-lime"
                        style={{ width: `${Math.round((count / total) * 100)}%` }}
                      />
                    </div>
                  </div>
                ))}
              {Object.keys(byService).length === 0 && (
                <p className="text-sm text-mutedc text-center py-4">Aucune donnée</p>
              )}
            </div>
          </div>
        </div>
      </div>
    </AdminShell>
  );
}
