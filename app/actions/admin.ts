"use server";

import { getServerSession } from "next-auth";
import { authOptions } from "@/lib/auth";
import { supabase } from "@/lib/supabase";
import { revalidatePath } from "next/cache";

async function requireAdmin() {
  const session = await getServerSession(authOptions);
  if (!session) throw new Error("Unauthorized");
}

export async function markAsRead(id: string) {
  await requireAdmin();
  await supabase.from("contact_messages").update({ read: true }).eq("id", id);
  revalidatePath("/admin/messages");
}

export async function deleteMessage(id: string) {
  await requireAdmin();
  await supabase.from("contact_messages").delete().eq("id", id);
  revalidatePath("/admin/messages");
}

export async function saveSetting(key: string, value: string) {
  await requireAdmin();
  await supabase.from("settings").upsert({ key, value });
  revalidatePath("/");
  revalidatePath("/admin/content");
}
