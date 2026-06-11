"use server";

import { supabase } from "@/lib/supabase";
import { revalidatePath } from "next/cache";
import { sendPushToAll } from "@/lib/push";

export async function submitContact(formData: FormData) {
  const name    = (formData.get("name")    as string)?.trim();
  const phone   = (formData.get("phone")   as string)?.trim();
  const email   = (formData.get("email")   as string)?.trim();
  const service = (formData.get("service") as string)?.trim();
  const date    = (formData.get("date")    as string) || null;
  const message = (formData.get("message") as string)?.trim() || null;

  if (!name || !phone || !email || !service) {
    throw new Error("Champs obligatoires manquants.");
  }

  const { data, error } = await supabase.from("contact_messages").insert({
    name, phone, email, service, date, message, read: false,
  }).select("id").single();

  if (error) throw new Error("Erreur lors de l'envoi. Veuillez réessayer.");

  revalidatePath("/admin/dashboard");
  revalidatePath("/admin/messages");

  sendPushToAll({
    title: "Nouveau client 🚕",
    body: `${name} — ${service}`,
    url: `/admin/messages?id=${data?.id}`,
  }).catch(() => {});
}
