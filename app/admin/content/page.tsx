"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { getSupabase } from "@/lib/supabase-browser";
import AdminShell from "@/components/admin/AdminShell";
import ContentEditor from "@/components/admin/ContentEditor";

export default function ContentPage() {
  const router = useRouter();
  const [settings, setSettings] = useState<Record<string, string> | null>(null);
  const [unread, setUnread] = useState(0);

  useEffect(() => {
    async function load() {
      const { data: { user } } = await getSupabase().auth.getUser();
      if (!user) { router.push("/admin/login"); return; }

      const [{ data: settingsArr }, { data: msgs }] = await Promise.all([
        getSupabase().from("settings").select("*"),
        getSupabase().from("contact_messages").select("read"),
      ]);

      const map: Record<string, string> = {};
      (settingsArr ?? []).forEach((s: { key: string; value: string }) => {
        try { map[s.key] = JSON.parse(s.value); } catch { map[s.key] = s.value; }
      });

      setSettings(map);
      setUnread((msgs ?? []).filter((m: { read: boolean }) => !m.read).length);
    }
    load();
  }, [router]);

  return (
    <AdminShell unread={unread}>
      {settings === null ? (
        <div className="flex items-center justify-center py-20 text-sm text-mutedc">Chargement…</div>
      ) : (
        <ContentEditor settings={settings} />
      )}
    </AdminShell>
  );
}
