"use server";

import { supabase } from "@/lib/supabase";
import { sendContactNotification } from "@/lib/email";

export type ContactFormState = {
  success: boolean;
  message: string;
};

export async function submitContact(
  _prev: ContactFormState,
  formData: FormData
): Promise<ContactFormState> {
  const name = (formData.get("name") as string)?.trim();
  const phone = (formData.get("phone") as string)?.trim();
  const email = (formData.get("email") as string)?.trim();
  const service = formData.get("service") as string;
  const date = (formData.get("date") as string) || null;
  const message = (formData.get("message") as string)?.trim() || null;

  if (!name || !phone || !email || !service) {
    return { success: false, message: "Veuillez remplir tous les champs obligatoires." };
  }

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(email)) {
    return { success: false, message: "Adresse email invalide." };
  }

  try {
    const { error } = await supabase
      .from("contact_messages")
      .insert({ name, phone, email, service, date, message });

    if (error) throw error;

    await sendContactNotification({ name, phone, email, service, date: date ?? undefined, message: message ?? undefined });
  } catch (err) {
    console.error("[contact] Error:", err);
    return {
      success: false,
      message: "Une erreur est survenue. Veuillez réessayer ou appeler directement.",
    };
  }

  return {
    success: true,
    message: "Votre demande a bien été envoyée ! Je vous recontacterai dans les plus brefs délais.",
  };
}
