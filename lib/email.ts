import nodemailer from "nodemailer";

function createTransport() {
  return nodemailer.createTransport({
    host: process.env.SMTP_HOST ?? "smtp.gmail.com",
    port: Number(process.env.SMTP_PORT ?? 587),
    secure: false,
    auth: {
      user: process.env.SMTP_USER,
      pass: process.env.SMTP_PASS,
    },
  });
}

export type EmailContactData = {
  name: string;
  phone: string;
  email: string;
  service: string;
  date?: string;
  message?: string;
};

export async function sendContactNotification(data: EmailContactData) {
  if (!process.env.SMTP_USER || !process.env.SMTP_PASS) {
    console.warn("[email] SMTP not configured — skipping email send");
    return;
  }

  const transporter = createTransport();
  const to = process.env.CONTACT_EMAIL ?? process.env.SMTP_USER;
  const from = process.env.SMTP_FROM ?? `Taxi Tignieu <${process.env.SMTP_USER}>`;

  await transporter.sendMail({
    from,
    to,
    subject: `Nouvelle demande de devis — ${data.service}`,
    html: `
      <div style="font-family:sans-serif;max-width:600px;margin:auto;background:#0a0a0a;color:#f5f5f5;padding:32px;border-radius:16px;">
        <div style="display:flex;align-items:center;gap:10px;margin-bottom:24px;">
          <span style="font-size:22px;font-weight:800;color:#b6f000;">Taxi Tignieu</span>
        </div>
        <h2 style="color:#f5f5f5;margin:0 0 20px;">Nouvelle demande de devis</h2>
        <table style="width:100%;border-collapse:collapse;">
          <tr><td style="padding:8px 0;color:#8a8a8a;width:140px;">Nom</td><td style="padding:8px 0;font-weight:600;">${data.name}</td></tr>
          <tr><td style="padding:8px 0;color:#8a8a8a;">Téléphone</td><td style="padding:8px 0;font-weight:600;">${data.phone}</td></tr>
          <tr><td style="padding:8px 0;color:#8a8a8a;">Email</td><td style="padding:8px 0;">${data.email}</td></tr>
          <tr><td style="padding:8px 0;color:#8a8a8a;">Service</td><td style="padding:8px 0;color:#b6f000;font-weight:600;">${data.service}</td></tr>
          ${data.date ? `<tr><td style="padding:8px 0;color:#8a8a8a;">Date</td><td style="padding:8px 0;">${data.date}</td></tr>` : ""}
          ${data.message ? `<tr><td style="padding:8px 0;color:#8a8a8a;vertical-align:top;">Message</td><td style="padding:8px 0;">${data.message.replace(/\n/g, "<br>")}</td></tr>` : ""}
        </table>
        <div style="margin-top:28px;padding-top:20px;border-top:1px solid #262626;font-size:12px;color:#8a8a8a;">
          Demande reçue le ${new Date().toLocaleDateString("fr-FR", { dateStyle: "long" })} à ${new Date().toLocaleTimeString("fr-FR", { timeStyle: "short" })}
        </div>
      </div>
    `,
    replyTo: data.email,
  });

  // Confirmation to client
  await transporter.sendMail({
    from,
    to: data.email,
    subject: "Votre demande a bien été reçue — Taxi Tignieu",
    html: `
      <div style="font-family:sans-serif;max-width:600px;margin:auto;background:#0a0a0a;color:#f5f5f5;padding:32px;border-radius:16px;">
        <div style="margin-bottom:24px;">
          <span style="font-size:22px;font-weight:800;color:#b6f000;">Taxi Tignieu</span>
        </div>
        <h2 style="color:#f5f5f5;margin:0 0 12px;">Demande bien reçue !</h2>
        <p style="color:#8a8a8a;line-height:1.6;">Bonjour ${data.name},<br><br>
        Votre demande de devis a bien été enregistrée. Je vous recontacterai dans les plus brefs délais (généralement sous 2h).</p>
        <div style="margin:24px 0;padding:16px;background:#141414;border-radius:12px;border:1px solid #262626;">
          <p style="margin:0;font-size:13px;color:#8a8a8a;">Service demandé : <strong style="color:#b6f000;">${data.service}</strong></p>
        </div>
        <p style="color:#8a8a8a;">En cas d'urgence, vous pouvez m'appeler directement au <strong style="color:#f5f5f5;">06 XX XX XX XX</strong>.</p>
        <div style="margin-top:28px;padding-top:20px;border-top:1px solid #262626;font-size:12px;color:#8a8a8a;">
          Taxi Tignieu — Tignieu-Jameyzieu (Ain)
        </div>
      </div>
    `,
  });
}
