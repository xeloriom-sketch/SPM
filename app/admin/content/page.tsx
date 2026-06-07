import { getServerSession } from "next-auth";
import { redirect } from "next/navigation";
import { authOptions } from "@/lib/auth";
import { supabase } from "@/lib/supabase";
import AdminShell from "@/components/admin/AdminShell";
import ContentEditor from "@/components/admin/ContentEditor";

export default async function ContentPage() {
  const session = await getServerSession(authOptions);
  if (!session) redirect("/admin/login");

  const { data: settingsArr } = await supabase.from("settings").select("*");
  const settings: Record<string, string> = {};
  (settingsArr ?? []).forEach((s: { key: string; value: string }) => {
    try { settings[s.key] = JSON.parse(s.value); } catch { settings[s.key] = s.value; }
  });

  const { data: allMessages } = await supabase.from("contact_messages").select("read");
  const unread = (allMessages ?? []).filter((m: { read: boolean }) => !m.read).length;

  return (
    <AdminShell unread={unread}>
      <ContentEditor settings={settings} />
    </AdminShell>
  );
}
