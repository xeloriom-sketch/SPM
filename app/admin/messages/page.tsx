"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { getSupabase } from "@/lib/supabase-browser";
import AdminShell from "@/components/admin/AdminShell";
import MessagesClient from "@/components/admin/MessagesClient";
import type { ContactMessage } from "@/lib/supabase";

export default function MessagesPage() {
  const router = useRouter();
  const [messages, setMessages] = useState<ContactMessage[] | null>(null);

  useEffect(() => {
    async function load() {
      const { data: { user } } = await getSupabase().auth.getUser();
      if (!user) { router.push("/admin/login"); return; }

      const { data } = await getSupabase()
        .from("contact_messages")
        .select("*")
        .order("created_at", { ascending: false });

      setMessages(data ?? []);
    }
    load();
  }, [router]);

  const unread = (messages ?? []).filter((m) => !m.read).length;

  return (
    <AdminShell unread={unread}>
      {messages === null ? (
        <div className="flex items-center justify-center py-20 text-sm text-mutedc">Chargement…</div>
      ) : (
        <MessagesClient messages={messages} />
      )}
    </AdminShell>
  );
}
