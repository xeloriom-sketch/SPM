"use client";

import { useState } from "react";
import { Phone, Mail, MessageSquare, Trash2, Calendar, RefreshCw, ArrowLeft } from "lucide-react";
import type { ContactMessage } from "@/lib/supabase";
import { getSupabase } from "@/lib/supabase-browser";

export default function MessagesClient({ messages: initial }: { messages: ContactMessage[] }) {
  const [messages, setMessages] = useState(initial);
  const [selected, setSelected] = useState<ContactMessage | null>(null);
  const [filter, setFilter] = useState<"all" | "unread" | "read">("all");
  const [deleting, setDeleting] = useState(false);
  const [mobileView, setMobileView] = useState<"list" | "detail">("list");

  const filtered = messages.filter((m) => {
    if (filter === "unread") return !m.read;
    if (filter === "read") return m.read;
    return true;
  });

  function handleSelect(m: ContactMessage) {
    setSelected(m);
    setMobileView("detail");
    if (!m.read) {
      setMessages((prev) => prev.map((msg) => msg.id === m.id ? { ...msg, read: true } : msg));
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      (getSupabase() as any).from("contact_messages").update({ read: true }).eq("id", m.id).then(() => {});
    }
  }

  async function handleDelete(id: string) {
    setDeleting(true);
    setMessages((prev) => prev.filter((m) => m.id !== id));
    if (selected?.id === id) setSelected(null);
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    await (getSupabase() as any).from("contact_messages").delete().eq("id", id);
    setDeleting(false);
  }

  const unread = messages.filter((m) => !m.read).length;

  return (
    <div className="flex h-[calc(100vh-56px)] lg:h-screen overflow-hidden">
      {/* Left: list */}
      <div className={`flex-col border-r border-borderc lg:w-80 shrink-0 ${mobileView === "detail" ? "hidden lg:flex" : "flex w-full"}`}>
        <div className="p-4 border-b border-borderc">
          <div className="flex items-center justify-between mb-3">
            <h1 className="font-display text-lg font-bold">Messages</h1>
            {unread > 0 && (
              <span className="rounded-full bg-black px-2 py-0.5 text-[10px] font-bold text-white">
                {unread} non lus
              </span>
            )}
          </div>
          <div className="flex gap-1">
            {(["all", "unread", "read"] as const).map((f) => (
              <button
                key={f}
                onClick={() => setFilter(f)}
                className={`flex-1 rounded-lg py-1.5 text-xs font-medium transition-colors ${filter === f ? "bg-black/[0.07] text-black" : "text-mutedc hover:text-foreground"}`}
              >
                {f === "all" ? "Tous" : f === "unread" ? "Non lus" : "Lus"}
              </button>
            ))}
          </div>
        </div>

        <div className="overflow-y-auto flex-1">
          {filtered.length === 0 && (
            <p className="p-6 text-center text-sm text-mutedc">Aucun message.</p>
          )}
          {filtered.map((m) => (
            <button
              key={m.id}
              onClick={() => handleSelect(m)}
              className={`w-full flex items-start gap-3 p-4 text-left border-b border-borderc/50 transition-colors hover:bg-surface ${selected?.id === m.id ? "bg-surface" : ""}`}
            >
              <div className="grid h-9 w-9 shrink-0 place-items-center rounded-full bg-black text-sm font-bold text-white">
                {m.name.charAt(0)}
              </div>
              <div className="flex-1 min-w-0">
                <div className="flex items-center gap-2">
                  <p className="text-sm font-medium truncate">{m.name}</p>
                  {!m.read && <span className="h-2 w-2 shrink-0 rounded-full bg-black" />}
                </div>
                <p className="text-xs text-mutedc truncate">{m.service}</p>
                <p className="text-xs text-mutedc mt-0.5">
                  {new Date(m.created_at).toLocaleDateString("fr-FR", { day: "numeric", month: "short", year: "numeric" })}
                </p>
              </div>
            </button>
          ))}
        </div>
      </div>

      {/* Right: detail */}
      <div className={`flex-1 flex-col ${mobileView === "detail" ? "flex" : "hidden lg:flex"}`}>
        {!selected ? (
          <div className="flex flex-1 flex-col items-center justify-center gap-3 text-mutedc">
            <MessageSquare className="h-10 w-10 opacity-30" />
            <p className="text-sm">Sélectionnez un message</p>
          </div>
        ) : (
          <div className="flex flex-col h-full overflow-y-auto">
            {/* Mobile back button */}
            <div className="flex items-center gap-3 px-4 py-3 border-b border-borderc lg:hidden">
              <button
                onClick={() => setMobileView("list")}
                className="flex items-center gap-2 text-sm text-mutedc hover:text-foreground transition-colors"
              >
                <ArrowLeft className="h-4 w-4" />
                Messages
              </button>
            </div>

            {/* Mobile quick actions — visible instantly */}
            <div className="flex gap-3 p-4 border-b border-borderc lg:hidden">
              <a
                href={`tel:${selected.phone}`}
                className="flex flex-1 items-center justify-center gap-2 rounded-full bg-black py-3 text-sm font-semibold text-white"
              >
                <Phone className="h-4 w-4" />
                Appeler
              </a>
              <a
                href={`mailto:${selected.email}?subject=Re: Demande de devis — ${selected.service}`}
                className="flex flex-1 items-center justify-center gap-2 rounded-full border border-borderc py-3 text-sm font-semibold text-foreground"
              >
                <Mail className="h-4 w-4" />
                Email
              </a>
            </div>

            <div className="flex flex-col flex-1 overflow-y-auto p-4 lg:p-6">
            <div className="flex items-start justify-between gap-4 mb-6">
              <div className="flex items-center gap-4">
                <div className="grid h-12 w-12 place-items-center rounded-full bg-black text-lg font-bold text-white">
                  {selected.name.charAt(0)}
                </div>
                <div>
                  <h2 className="font-display text-xl font-bold">{selected.name}</h2>
                  <p className="text-sm text-black/50">{selected.service}</p>
                </div>
              </div>
              <button
                onClick={() => handleDelete(selected.id)}
                disabled={deleting}
                className="grid h-9 w-9 place-items-center rounded-xl border border-borderc text-mutedc hover:border-red-500/30 hover:bg-red-500/10 hover:text-red-400 transition-all"
              >
                <Trash2 className="h-4 w-4" />
              </button>
            </div>

            <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 mb-6">
              <a
                href={`tel:${selected.phone}`}
                className="flex items-center gap-3 rounded-xl border border-borderc bg-surface2 px-4 py-3 hover:border-black/20 transition-colors"
              >
                <Phone className="h-4 w-4 text-black/50 shrink-0" />
                <div>
                  <p className="text-[10px] text-mutedc">Téléphone</p>
                  <p className="text-sm font-semibold">{selected.phone}</p>
                </div>
              </a>
              <a
                href={`mailto:${selected.email}`}
                className="flex items-center gap-3 rounded-xl border border-borderc bg-surface2 px-4 py-3 hover:border-black/20 transition-colors"
              >
                <Mail className="h-4 w-4 text-black/50 shrink-0" />
                <div>
                  <p className="text-[10px] text-mutedc">Email</p>
                  <p className="text-sm font-semibold truncate">{selected.email}</p>
                </div>
              </a>
              {selected.date && (
                <div className="flex items-center gap-3 rounded-xl border border-borderc bg-surface2 px-4 py-3">
                  <Calendar className="h-4 w-4 text-black/50 shrink-0" />
                  <div>
                    <p className="text-[10px] text-mutedc">Date souhaitée</p>
                    <p className="text-sm font-semibold">
                      {new Date(selected.date).toLocaleDateString("fr-FR", { dateStyle: "long" })}
                    </p>
                  </div>
                </div>
              )}
              <div className="flex items-center gap-3 rounded-xl border border-borderc bg-surface2 px-4 py-3">
                <RefreshCw className="h-4 w-4 text-mutedc shrink-0" />
                <div>
                  <p className="text-[10px] text-mutedc">Reçu le</p>
                  <p className="text-sm font-semibold">
                    {new Date(selected.created_at).toLocaleDateString("fr-FR", { dateStyle: "long" })} à {new Date(selected.created_at).toLocaleTimeString("fr-FR", { timeStyle: "short" })}
                  </p>
                </div>
              </div>
            </div>

            {selected.message && (
              <div className="rounded-2xl border border-borderc bg-surface p-5 flex-1">
                <p className="text-xs text-mutedc mb-2 uppercase tracking-wide">Message</p>
                <p className="text-sm leading-relaxed whitespace-pre-wrap">{selected.message}</p>
              </div>
            )}

            <div className="mt-4 hidden lg:flex gap-3">
              <a
                href={`tel:${selected.phone}`}
                className="flex flex-1 items-center justify-center gap-2 rounded-full bg-black py-2.5 text-sm font-semibold text-white transition-all hover:-translate-y-0.5 hover:brightness-105"
              >
                <Phone className="h-4 w-4" />
                Appeler
              </a>
              <a
                href={`mailto:${selected.email}?subject=Re: Demande de devis — ${selected.service}`}
                className="flex flex-1 items-center justify-center gap-2 rounded-full border border-borderc py-2.5 text-sm font-semibold text-foreground transition-all hover:border-black/20 hover:bg-black/[0.03]"
              >
                <Mail className="h-4 w-4" />
                Répondre par email
              </a>
            </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
