import { getServerSession } from "next-auth";
import { redirect } from "next/navigation";
import { authOptions } from "@/lib/auth";
import { supabase } from "@/lib/supabase";
import AdminShell from "@/components/admin/AdminShell";
import MessagesClient from "@/components/admin/MessagesClient";
import type { ContactMessage } from "@/lib/supabase";

export default async function MessagesPage() {
  if (process.env.NEXT_PUBLIC_STATIC === "1") {
    return (
      <AdminShell unread={0}>
        <div className="p-6 max-w-3xl mx-auto">
          <div className="rounded-2xl border border-borderc bg-surface p-6">
            <h1 className="font-display text-2xl font-bold">Messages</h1>
            <p className="mt-2 text-sm text-mutedc">
              Les messages entrants ne sont pas disponibles sur la version statique GitHub Pages.
            </p>
          </div>
        </div>
      </AdminShell>
    );
  }

  const session = await getServerSession(authOptions);
  if (!session) redirect("/admin/login");

  const { data } = await supabase
    .from("contact_messages")
    .select("*")
    .order("created_at", { ascending: false });

  const messages: ContactMessage[] = data ?? [];
  const unread = messages.filter((m) => !m.read).length;

  return (
    <AdminShell unread={unread}>
      <MessagesClient messages={messages} />
    </AdminShell>
  );
}
