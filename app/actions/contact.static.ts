export type ContactFormState = {
  success: boolean;
  message: string;
};

export async function submitContact(
  _prev: ContactFormState,
  _formData: FormData
): Promise<ContactFormState> {
  return {
    success: false,
    message: "Le formulaire de contact est désactivé sur la version statique.",
  };
}
