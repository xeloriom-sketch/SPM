import { getServerSession } from "next-auth";
import { redirect } from "next/navigation";
import { authOptions } from "@/lib/auth";
import { supabase } from "@/lib/supabase";
import AdminShell from "@/components/admin/AdminShell";
import MessagesClient from "@/components/admin/MessagesClient";
import type { ContactMessage } from "@/lib/supabase";

export default async function MessagesPage() {
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
