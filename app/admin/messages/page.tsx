"use client";

import { Suspense, useEffect, useState } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import { getSupabase } from "@/lib/supabase-browser";
import AdminShell from "@/components/admin/AdminShell";
import MessagesClient from "@/components/admin/MessagesClient";
import type { ContactMessage } from "@/lib/supabase";

function MessagesContent() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const initialId = searchParams.get("id") ?? undefined;
  const [messages, setMessages] = useState<ContactMessage[] | null>(null);
  const [unread, setUnread] = useState(0);

  useEffect(() => {
    async function load() {
      const { data: { session } } = await getSupabase().auth.getSession();
      if (!session) { router.push("/admin/login"); return; }

      const { data } = await getSupabase()
        .from("contact_messages")
        .select("*")
        .order("created_at", { ascending: false });

      const msgs = data ?? [];
      setMessages(msgs);
      setUnread(msgs.filter((m: ContactMessage) => !m.read).length);
    }
    load();
  }, [router]);

  return (
    <AdminShell unread={unread}>
      {messages === null ? (
        <div className="flex items-center justify-center h-[calc(100vh-56px)] lg:h-screen">
          <div className="flex flex-col items-center gap-3 text-mutedc">
            <div className="h-5 w-5 animate-spin rounded-full border-2 border-black/20 border-t-black" />
            <span className="text-sm">Chargement…</span>
          </div>
        </div>
      ) : (
        <MessagesClient messages={messages} initialId={initialId} onUnreadChange={setUnread} />
      )}
    </AdminShell>
  );
}

export default function MessagesPage() {
  return (
    <Suspense>
      <MessagesContent />
    </Suspense>
  );
}
