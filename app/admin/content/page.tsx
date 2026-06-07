import { getServerSession } from "next-auth";
import { redirect } from "next/navigation";
import { authOptions } from "@/lib/auth";
import { supabase } from "@/lib/supabase";
import AdminShell from "@/components/admin/AdminShell";
import ContentEditor from "@/components/admin/ContentEditor";

export default async function ContentPage() {
  if (process.env.NEXT_PUBLIC_STATIC === "1") {
    return (
      <AdminShell unread={0}>
        <div className="p-6 max-w-2xl mx-auto">
          <div className="rounded-2xl border border-borderc bg-surface p-6">
            <h1 className="font-display text-2xl font-bold">Contenu du site</h1>
            <p className="mt-2 text-sm text-mutedc">
              L'édition de contenu nécessite un backend et n'est pas active sur GitHub Pages.
            </p>
          </div>
        </div>
      </AdminShell>
    );
  }

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
