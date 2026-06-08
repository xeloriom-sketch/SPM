"use server";

import { supabaseAdmin } from "@/lib/supabase";
import { getServerSession } from "next-auth";
import { authOptions } from "@/lib/auth";

export async function saveSetting(key: string, value: string) {
  const session = await getServerSession(authOptions);
  if (!session) throw new Error("Non autorisé");

  const { error } = await supabaseAdmin
    .from("settings")
    .upsert({ key, value, updated_at: new Date().toISOString() }, { onConflict: "key" });

  if (error) throw new Error("Erreur de sauvegarde.");
}
