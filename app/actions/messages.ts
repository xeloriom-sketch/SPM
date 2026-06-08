"use server";

import { supabaseAdmin } from "@/lib/supabase";
import { getServerSession } from "next-auth";
import { authOptions } from "@/lib/auth";
import { revalidatePath } from "next/cache";

export async function markAsRead(id: string) {
  const session = await getServerSession(authOptions);
  if (!session) throw new Error("Non autorisé");

  await supabaseAdmin
    .from("contact_messages")
    .update({ read: true })
    .eq("id", id);
}

export async function deleteMessage(id: string) {
  const session = await getServerSession(authOptions);
  if (!session) throw new Error("Non autorisé");

  await supabaseAdmin
    .from("contact_messages")
    .delete()
    .eq("id", id);

  revalidatePath("/admin/dashboard");
  revalidatePath("/admin/messages");
}
