"use client";

import { useState, useEffect } from "react";
import { Phone, Mail, MessageSquare, Trash2, Calendar, ArrowLeft, MapPin } from "lucide-react";
import type { ContactMessage } from "@/lib/supabase";
import { getSupabase } from "@/lib/supabase-browser";

const STREET_RE = /\b(\d+[\s,\-]+(?:rue|avenue|av\.?|boulevard|bd\.?|impasse|place|allée|chemin|route|voie|passage|cours|quai|square|cité|ruelle|sente|sentier|domaine|villa|clos|hameau|résidence)\s+[\w\s'\-]{2,50}(?:,?\s*\d{5}(?:\s+[\w\s\-]{2,30})?)?)/gi;

function findAddresses(text: string): string[] {
  const found: string[] = [];
  let m: RegExpExecArray | null;
  STREET_RE.lastIndex = 0;
  while ((m = STREET_RE.exec(text)) !== null) {
    const addr = m[1].trim().replace(/\s+/g, " ");
    if (!found.includes(addr)) found.push(addr);
  }
  return found;
}

function MapButtons({ address }: { address: string }) {
  const q = encodeURIComponent(address);
  return (
    <div className="mt-3 flex flex-wrap gap-2">
      <a href={`https://maps.apple.com/?q=${q}`} target="_blank" rel="noopener noreferrer"
        className="inline-flex items-center gap-1.5 rounded-lg border border-borderc bg-white px-3 py-1.5 text-xs font-medium hover:bg-surface2 transition-colors">
        <MapPin className="h-3 w-3" /> Apple Plans
      </a>
      <a href={`https://www.google.com/maps/search/?api=1&query=${q}`} target="_blank" rel="noopener noreferrer"
        className="inline-flex items-center gap-1.5 rounded-lg border border-borderc bg-white px-3 py-1.5 text-xs font-medium hover:bg-surface2 transition-colors">
        <MapPin className="h-3 w-3" /> Google Maps
      </a>
      <a href={`https://waze.com/ul?q=${q}&navigate=yes`} target="_blank" rel="noopener noreferrer"
        className="inline-flex items-center gap-1.5 rounded-lg border border-borderc bg-white px-3 py-1.5 text-xs font-medium hover:bg-surface2 transition-colors">
        <MapPin className="h-3 w-3" /> Waze
      </a>
    </div>
  );
}

function timeAgo(dateStr: string): string {
  const diff = Date.now() - new Date(dateStr).getTime();
  const mins = Math.floor(diff / 60000);
  if (mins < 1) return "À l'instant";
  if (mins < 60) return `${mins} min`;
  const hours = Math.floor(mins / 60);
  if (hours < 24) return `${hours}h`;
  if (hours < 48) return "Hier";
  return new Date(dateStr).toLocaleDateString("fr-FR", { day: "numeric", month: "short" });
}

export default function MessagesClient({
  messages: initial,
  initialId,
  onUnreadChange,
}: {
  messages: ContactMessage[];
  initialId?: string;
  onUnreadChange?: (n: number) => void;
}) {
  const [messages, setMessages] = useState(initial);
  const [selected, setSelected] = useState<ContactMessage | null>(null);
  const [filter, setFilter] = useState<"all" | "unread" | "read">("all");
  const [deleting, setDeleting] = useState(false);
  const [mobileView, setMobileView] = useState<"list" | "detail">("list");
  const [newIds, setNewIds] = useState<Set<string>>(new Set());

  // Realtime subscription
  useEffect(() => {
    const supabase = getSupabase();
    const channel = supabase
      .channel("messages_realtime")
      .on("postgres_changes", { event: "INSERT", schema: "public", table: "contact_messages" }, (payload) => {
        const msg = payload.new as ContactMessage;
        setMessages((prev) => [msg, ...prev]);
        setNewIds((prev) => new Set(prev).add(msg.id));
        setTimeout(() => {
          setNewIds((prev) => { const s = new Set(prev); s.delete(msg.id); return s; });
        }, 15000);
      })
      .on("postgres_changes", { event: "UPDATE", schema: "public", table: "contact_messages" }, (payload) => {
        setMessages((prev) => prev.map((m) => m.id === (payload.new as ContactMessage).id ? payload.new as ContactMessage : m));
      })
      .on("postgres_changes", { event: "DELETE", schema: "public", table: "contact_messages" }, (payload) => {
        const old = payload.old as { id: string };
        setMessages((prev) => prev.filter((m) => m.id !== old.id));
      })
      .subscribe();

    return () => { supabase.removeChannel(channel); };
  }, []);

  // Auto-select from URL param (?id=)
  useEffect(() => {
    if (!initialId) return;
    const target = messages.find((m) => m.id === initialId);
    if (target) {
      setSelected(target);
      setMobileView("detail");
      if (!target.read) {
        setMessages((prev) => prev.map((m) => m.id === target.id ? { ...m, read: true } : m));
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        (getSupabase() as any).from("contact_messages").update({ read: true }).eq("id", target.id).then(() => {});
      }
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [initialId]);

  // Sync unread count to parent
  useEffect(() => {
    onUnreadChange?.(messages.filter((m) => !m.read).length);
  }, [messages, onUnreadChange]);

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
    if (selected?.id === id) {
      const remaining = filtered.filter((m) => m.id !== id);
      const idx = filtered.findIndex((m) => m.id === id);
      const next = remaining[idx] ?? remaining[idx - 1] ?? null;
      setSelected(next);
      if (!next) setMobileView("list");
    }
    setMessages((prev) => prev.filter((m) => m.id !== id));
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    await (getSupabase() as any).from("contact_messages").delete().eq("id", id);
    setDeleting(false);
  }

  const filtered = messages.filter((m) => {
    if (filter === "unread") return !m.read;
    if (filter === "read") return m.read;
    return true;
  });

  const unread = messages.filter((m) => !m.read).length;

  return (
    <div className="flex h-[calc(100vh-56px)] lg:h-screen overflow-hidden">
      {/* Liste */}
      <div className={`flex-col border-r border-borderc lg:w-80 shrink-0 bg-surface ${mobileView === "detail" ? "hidden lg:flex" : "flex w-full"}`}>
        <div className="p-4 border-b border-borderc">
          <div className="flex items-center gap-2.5 mb-3">
            <h1 className="font-display text-lg font-bold">Messages</h1>
            {unread > 0 && (
              <span className="animate-pulse rounded-full bg-black px-2 py-0.5 text-[10px] font-bold text-white">
                {unread}
              </span>
            )}
          </div>
          <div className="flex gap-1 rounded-xl bg-black/[0.05] p-1">
            {([["all", "Tous"], ["unread", "Non lus"], ["read", "Lus"]] as const).map(([f, label]) => (
              <button
                key={f}
                onClick={() => setFilter(f)}
                className={`flex-1 rounded-lg py-1.5 text-xs font-medium transition-all ${
                  filter === f ? "bg-white text-black shadow-sm" : "text-mutedc hover:text-foreground"
                }`}
              >
                {label}
              </button>
            ))}
          </div>
        </div>

        <div className="overflow-y-auto flex-1">
          {filtered.length === 0 && (
            <div className="flex flex-col items-center justify-center py-16 gap-3 text-mutedc">
              <MessageSquare className="h-8 w-8 opacity-20" />
              <p className="text-sm">Aucun message</p>
            </div>
          )}
          {filtered.map((m) => (
            <button
              key={m.id}
              onClick={() => handleSelect(m)}
              className={`w-full flex items-start gap-3 p-4 text-left border-b border-borderc/40 transition-all hover:bg-surface2 ${
                selected?.id === m.id ? "bg-surface2 border-l-2 border-l-black pl-[14px]" : ""
              } ${newIds.has(m.id) ? "bg-emerald-50/70" : ""}`}
            >
              <div className={`grid h-9 w-9 shrink-0 place-items-center rounded-full text-sm font-bold text-white transition-colors ${
                newIds.has(m.id) ? "bg-emerald-600" : "bg-black"
              }`}>
                {m.name.charAt(0).toUpperCase()}
              </div>
              <div className="flex-1 min-w-0">
                <div className="flex items-center justify-between gap-1 mb-0.5">
                  <p className={`text-sm truncate ${!m.read ? "font-semibold" : "font-normal text-mutedc"}`}>
                    {m.name}
                  </p>
                  <span className="text-[10px] text-mutedc shrink-0">{timeAgo(m.created_at)}</span>
                </div>
                <p className="text-xs text-mutedc truncate">{m.service}</p>
                {!m.read && (
                  <span className="mt-1 inline-flex items-center gap-1 text-[10px] font-semibold text-black">
                    <span className="h-1.5 w-1.5 rounded-full bg-black" />
                    Nouveau
                  </span>
                )}
                {newIds.has(m.id) && (
                  <span className="mt-1 inline-flex items-center gap-1 text-[10px] font-semibold text-emerald-600">
                    <span className="h-1.5 w-1.5 rounded-full bg-emerald-500 animate-pulse" />
                    Vient d&apos;arriver
                  </span>
                )}
              </div>
            </button>
          ))}
        </div>
      </div>

      {/* Détail */}
      <div className={`flex-1 flex-col bg-background ${mobileView === "detail" ? "flex" : "hidden lg:flex"}`}>
        {!selected ? (
          <div className="flex flex-1 flex-col items-center justify-center gap-4 text-mutedc">
            <div className="rounded-3xl border border-borderc bg-surface p-7">
              <MessageSquare className="h-10 w-10 opacity-20" />
            </div>
            <p className="text-sm">Sélectionnez un message</p>
          </div>
        ) : (
          <div className="flex flex-col h-full">
            {/* Mobile : retour + appel rapide */}
            <div className="flex items-center gap-3 px-4 py-3 border-b border-borderc lg:hidden">
              <button
                onClick={() => setMobileView("list")}
                className="flex items-center gap-2 text-sm font-medium text-mutedc"
              >
                <ArrowLeft className="h-4 w-4" />
                Messages
              </button>
              <div className="flex-1" />
              <a
                href={`tel:${selected.phone}`}
                className="flex items-center gap-1.5 rounded-full bg-black px-4 py-2 text-xs font-semibold text-white"
              >
                <Phone className="h-3.5 w-3.5" />
                Appeler
              </a>
              <a
                href={`mailto:${selected.email}?subject=Re: Demande de devis — ${selected.service}`}
                className="flex items-center gap-1.5 rounded-full border border-borderc px-4 py-2 text-xs font-semibold"
              >
                <Mail className="h-3.5 w-3.5" />
                Email
              </a>
            </div>

            <div className="flex-1 overflow-y-auto p-5 lg:p-8">
              {/* En-tête */}
              <div className="flex items-start justify-between gap-4 mb-7">
                <div className="flex items-center gap-4">
                  <div className="grid h-14 w-14 place-items-center rounded-2xl bg-black text-xl font-bold text-white shrink-0">
                    {selected.name.charAt(0).toUpperCase()}
                  </div>
                  <div>
                    <h2 className="font-display text-xl font-bold">{selected.name}</h2>
                    <p className="text-sm text-mutedc">{selected.service}</p>
                    <p className="text-xs text-mutedc mt-0.5">
                      {new Date(selected.created_at).toLocaleDateString("fr-FR", { dateStyle: "long" })} à{" "}
                      {new Date(selected.created_at).toLocaleTimeString("fr-FR", { timeStyle: "short" })}
                    </p>
                  </div>
                </div>
                <button
                  onClick={() => handleDelete(selected.id)}
                  disabled={deleting}
                  className="grid h-9 w-9 place-items-center rounded-xl border border-borderc text-mutedc hover:border-red-300 hover:bg-red-50 hover:text-red-500 transition-all disabled:opacity-40 shrink-0"
                >
                  <Trash2 className="h-4 w-4" />
                </button>
              </div>

              {/* Infos de contact */}
              <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 mb-6">
                <a
                  href={`tel:${selected.phone}`}
                  className="group flex items-center gap-3 rounded-2xl border border-borderc bg-surface px-4 py-4 hover:border-black/20 hover:bg-surface2 transition-all"
                >
                  <div className="grid h-9 w-9 place-items-center rounded-xl bg-black/[0.06] text-black group-hover:bg-black group-hover:text-white transition-all">
                    <Phone className="h-4 w-4" />
                  </div>
                  <div>
                    <p className="text-[10px] font-medium text-mutedc uppercase tracking-wide">Téléphone</p>
                    <p className="text-sm font-semibold mt-0.5">{selected.phone}</p>
                  </div>
                </a>
                <a
                  href={`mailto:${selected.email}?subject=Re: Demande de devis — ${selected.service}`}
                  className="group flex items-center gap-3 rounded-2xl border border-borderc bg-surface px-4 py-4 hover:border-black/20 hover:bg-surface2 transition-all"
                >
                  <div className="grid h-9 w-9 place-items-center rounded-xl bg-black/[0.06] text-black group-hover:bg-black group-hover:text-white transition-all">
                    <Mail className="h-4 w-4" />
                  </div>
                  <div>
                    <p className="text-[10px] font-medium text-mutedc uppercase tracking-wide">Email</p>
                    <p className="text-sm font-semibold mt-0.5 truncate max-w-[150px]">{selected.email}</p>
                  </div>
                </a>
                {selected.date && (
                  <div className="flex items-center gap-3 rounded-2xl border border-borderc bg-surface px-4 py-4">
                    <div className="grid h-9 w-9 place-items-center rounded-xl bg-black/[0.06]">
                      <Calendar className="h-4 w-4" />
                    </div>
                    <div>
                      <p className="text-[10px] font-medium text-mutedc uppercase tracking-wide">Date souhaitée</p>
                      <p className="text-sm font-semibold mt-0.5">
                        {new Date(selected.date).toLocaleDateString("fr-FR", { dateStyle: "long" })}
                      </p>
                    </div>
                  </div>
                )}
              </div>

              {/* Message */}
              {selected.message && (
                <div className="rounded-2xl border border-borderc bg-surface p-5 mb-6">
                  <p className="text-[10px] font-medium text-mutedc uppercase tracking-wide mb-3">Message</p>
                  <p className="text-sm leading-relaxed whitespace-pre-wrap">{selected.message}</p>
                  {findAddresses(selected.message).map((addr) => (
                    <MapButtons key={addr} address={addr} />
                  ))}
                </div>
              )}

              {/* Adresses dans le service */}
              {(() => {
                const addrs = findAddresses(selected.service);
                return addrs.length > 0 ? (
                  <div className="rounded-2xl border border-borderc bg-surface p-5 mb-6">
                    <p className="text-[10px] font-medium text-mutedc uppercase tracking-wide mb-1">Adresse détectée</p>
                    {addrs.map((addr) => (
                      <div key={addr}>
                        <p className="text-xs text-mutedc mb-1">{addr}</p>
                        <MapButtons address={addr} />
                      </div>
                    ))}
                  </div>
                ) : null;
              })()}

              {/* Actions desktop */}
              <div className="hidden lg:flex gap-3">
                <a
                  href={`tel:${selected.phone}`}
                  className="flex flex-1 items-center justify-center gap-2 rounded-full bg-black py-3 text-sm font-semibold text-white hover:opacity-90 transition-opacity"
                >
                  <Phone className="h-4 w-4" />
                  Appeler
                </a>
                <a
                  href={`mailto:${selected.email}?subject=Re: Demande de devis — ${selected.service}`}
                  className="flex flex-1 items-center justify-center gap-2 rounded-full border border-borderc py-3 text-sm font-semibold hover:border-black/30 hover:bg-black/[0.03] transition-all"
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
