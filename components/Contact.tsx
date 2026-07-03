"use client";

import { useRef, useState } from "react";
import { motion, useInView } from "framer-motion";
import { Phone, Mail, MapPin, AlertCircle, ArrowRight, CheckCircle } from "lucide-react";
import SplitText from "@/components/ui/SplitText";
import { getSupabase } from "@/lib/supabase-browser";
import { spring, springFast, revealVariants, revealSubtle } from "@/lib/motion";
import { useSettings } from "@/lib/settings-context";

const serviceOptions = [
  "Transfert aéroport / gare",
  "Transport médical conventionné",
  "Transport de colis urgent",
  "Transport avec remorque",
  "Déplacement longue distance",
  "Autre",
];

const inputClass =
  "w-full rounded-[12px] border border-black/[0.08] bg-[#f8f9fa] px-4 py-3 text-xs text-black outline-none transition placeholder:text-black/25 focus:border-black/25 focus:bg-white focus:ring-2 focus:ring-black/5";

export default function Contact() {
  const s = useSettings();
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [errorMsg, setErrorMsg] = useState("");

  const infoCards = [
    {
      href: `tel:${s.contact_phone.replace(/[\s.-]/g, "")}`,
      icon: Phone,
      solid: true,
      title: "Appel direct",
      sub: `${s.contact_phone} — Disponible maintenant`,
    },
    {
      href: `mailto:${s.contact_email}`,
      icon: Mail,
      solid: false,
      title: "Email",
      sub: s.contact_email,
    },
  ];

  return (
    <section id="contact" className="w-full bg-white py-16 sm:py-20 md:py-28 font-sans">
      <div ref={ref} className="max-w-[1440px] mx-auto px-6 sm:px-12 lg:px-20">

        <div className="text-center max-w-2xl mx-auto mb-16">
          <h2 className="text-3xl sm:text-4xl font-medium tracking-tight text-black mb-4">
            <SplitText text="Votre devis gratuit" mode="word" />
          </h2>
          <motion.p
            className="text-xs sm:text-sm text-[#555555] leading-relaxed"
            variants={revealSubtle}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            custom={0.15}
          >
            Disponible 7j/7. Réponse sous 2h. Pour un besoin urgent, préférez l&apos;appel direct.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 gap-6 sm:gap-8 lg:grid-cols-[1fr_1.4fr] lg:gap-12 items-start">

          {/* Left: info cards */}
          <div className="flex flex-col gap-4">
            {infoCards.map(({ href, icon: Icon, solid, title, sub }, i) => (
              <motion.a
                key={href}
                href={href}
                className="group flex items-center gap-4 rounded-[20px] border border-black/[0.06] bg-[#f8f9fa] p-5"
                variants={revealVariants}
                initial="hidden"
                animate={isInView ? "visible" : "hidden"}
                custom={0.18 + i * 0.1}
                whileHover={{ y: -4, scale: 1.02, boxShadow: "0 8px 32px rgba(0,0,0,0.07)" }}
                whileTap={{ scale: 0.97 }}
                transition={spring}
              >
                <div className={`grid h-11 w-11 shrink-0 place-items-center rounded-full ${solid ? "bg-black" : "border border-black/10"}`}>
                  <Icon className={`h-4 w-4 ${solid ? "text-white" : "text-black/50"}`} />
                </div>
                <div>
                  <p className="text-xs font-bold text-black tracking-tight">{title}</p>
                  <p className="text-[11px] text-[#767676]">{sub}</p>
                </div>
                <ArrowRight className="ml-auto h-4 w-4 text-black/20 group-hover:text-black transition-colors" />
              </motion.a>
            ))}

            <motion.div
              className="flex items-center gap-4 rounded-[20px] border border-black/[0.06] bg-[#f8f9fa] p-5"
              variants={revealVariants}
              initial="hidden"
              animate={isInView ? "visible" : "hidden"}
              custom={0.38}
            >
              <div className="grid h-11 w-11 shrink-0 place-items-center rounded-full border border-black/10">
                <MapPin className="h-4 w-4 text-black/50" />
              </div>
              <div>
                <p className="text-xs font-bold text-black tracking-tight">Localisation</p>
                <p className="text-[11px] text-[#767676]">{s.contact_address}</p>
              </div>
            </motion.div>

            <motion.div
              className="rounded-[20px] border border-black/[0.06] bg-[#f8f9fa] p-6 mt-1"
              variants={revealVariants}
              initial="hidden"
              animate={isInView ? "visible" : "hidden"}
              custom={0.48}
            >
              <p className="text-[10px] font-bold tracking-widest uppercase text-black/60 mb-4">Disponibilités</p>
              <div className="flex flex-col gap-2.5">
                {[
                  ["Lundi – Dimanche", "00h00 – 23h59"],
                  ["Aéroport / Gare", "Suivi des vols en temps réel"],
                  ["Réservation", "24h à l'avance recommandée"],
                ].map(([label, value], i) => (
                  <motion.div
                    key={label}
                    className="flex items-center justify-between"
                    variants={revealSubtle}
                    initial="hidden"
                    animate={isInView ? "visible" : "hidden"}
                    custom={0.52 + i * 0.07}
                  >
                    <span className="text-[11px] text-[#555555]">{label}</span>
                    <span className="text-[11px] font-medium text-black">{value}</span>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>

          {/* Right: form */}
          <motion.div
            className="rounded-[20px] sm:rounded-[24px] border border-black/[0.06] bg-[#f8f9fa] p-5 sm:p-7 md:p-8"
            variants={revealVariants}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            custom={0.22}
          >
            <form
              className="flex flex-col gap-4"
              onSubmit={async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
                e.preventDefault();
                setStatus("loading");
                setErrorMsg("");
                try {
                  const formData = new FormData(e.currentTarget);
                  // eslint-disable-next-line @typescript-eslint/no-explicit-any
                  const { error } = await (getSupabase() as any).from("contact_messages").insert({
                    name: formData.get("name") as string,
                    phone: formData.get("phone") as string,
                    email: formData.get("email") as string,
                    service: formData.get("service") as string,
                    date: (formData.get("date") as string) || null,
                    message: (formData.get("message") as string) || null,
                    read: false,
                  });
                  if (error) throw new Error("Erreur lors de l'envoi.");
                  setStatus("success");
                  (e.target as HTMLFormElement).reset();
                  fetch(`${process.env.NEXT_PUBLIC_SUPABASE_URL}/functions/v1/send-push`, {
                    method: "POST",
                    headers: {
                      "Content-Type": "application/json",
                      "Authorization": `Bearer ${process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY}`,
                    },
                    body: JSON.stringify({
                      name: formData.get("name"),
                      service: formData.get("service"),
                      phone: formData.get("phone"),
                    }),
                  }).catch(() => {});
                } catch (err) {
                  setStatus("error");
                  setErrorMsg(err instanceof Error ? err.message : "Erreur lors de l'envoi.");
                }
              }}
            >
              <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
                <div>
                  <label className="mb-1.5 block text-[10px] font-bold tracking-wider uppercase text-black/40" htmlFor="name">
                    Nom complet *
                  </label>
                  <input id="name" name="name" type="text" required placeholder="Jean Dupont" className={inputClass} />
                </div>
                <div>
                  <label className="mb-1.5 block text-[10px] font-bold tracking-wider uppercase text-black/40" htmlFor="phone">
                    Téléphone *
                  </label>
                  <input id="phone" name="phone" type="tel" required placeholder="07 XX XX XX XX" className={inputClass} />
                </div>
              </div>

              <div>
                <label className="mb-1.5 block text-[10px] font-bold tracking-wider uppercase text-black/40" htmlFor="email">
                  Email *
                </label>
                <input id="email" name="email" type="email" required placeholder="jean.dupont@email.com" className={inputClass} />
              </div>

              <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
                <div>
                  <label className="mb-1.5 block text-[10px] font-bold tracking-wider uppercase text-black/40" htmlFor="service">
                    Service *
                  </label>
                  <select id="service" name="service" required className={inputClass}>
                    <option value="">Sélectionner…</option>
                    {serviceOptions.map((o) => (
                      <option key={o} value={o}>{o}</option>
                    ))}
                  </select>
                </div>
                <div>
                  <label className="mb-1.5 block text-[10px] font-bold tracking-wider uppercase text-black/40" htmlFor="date">
                    Date souhaitée
                  </label>
                  <input id="date" name="date" type="date" className={inputClass} />
                </div>
              </div>

              <div>
                <label className="mb-1.5 block text-[10px] font-bold tracking-wider uppercase text-black/40" htmlFor="msg">
                  Détails du trajet
                </label>
                <textarea
                  id="msg"
                  name="message"
                  rows={4}
                  placeholder="Départ : …   Arrivée : …   Personnes : …"
                  className={`${inputClass} resize-none`}
                />
              </div>

              {status === "error" && (
                <div className="flex items-center gap-2 rounded-[12px] border border-red-100 bg-red-50 px-4 py-3 text-xs text-red-600">
                  <AlertCircle className="h-3.5 w-3.5 shrink-0" />
                  {errorMsg}
                </div>
              )}
              {status === "success" && (
                <div className="flex items-center gap-2 rounded-[12px] border border-green-100 bg-green-50 px-4 py-3 text-xs text-green-700">
                  <CheckCircle className="h-3.5 w-3.5 shrink-0" />
                  Message envoyé ! Je vous réponds sous 2h.
                </div>
              )}

              <motion.button
                type="submit"
                disabled={status === "loading" || status === "success"}
                className={`group inline-flex w-full items-center justify-center gap-4 rounded-full pl-5 pr-1.5 py-1.5 text-[11px] font-medium tracking-wider transition-all disabled:opacity-70 ${
                  status === "success"
                    ? "bg-green-600 text-white"
                    : "bg-black text-white"
                }`}
                whileHover={status === "idle" ? { scale: 1.02, y: -2 } : {}}
                whileTap={status === "idle" ? { scale: 0.97 } : {}}
                transition={springFast}
              >
                {status === "loading" ? (
                  <>
                    <span>Envoi en cours…</span>
                    <div className="flex h-7 w-7 items-center justify-center rounded-full bg-white/20">
                      <svg className="h-3.5 w-3.5 animate-spin" viewBox="0 0 24 24" fill="none">
                        <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="3" strokeDasharray="30 70" strokeLinecap="round"/>
                      </svg>
                    </div>
                  </>
                ) : status === "success" ? (
                  <>
                    <span>Message envoyé ✓</span>
                    <div className="flex h-7 w-7 items-center justify-center rounded-full bg-white/20">
                      <CheckCircle className="h-3.5 w-3.5 stroke-[2.5]" />
                    </div>
                  </>
                ) : (
                  <>
                    <span>Envoyer ma demande</span>
                    <div className="flex h-7 w-7 items-center justify-center rounded-full bg-white text-black transition-transform duration-300 group-hover:translate-x-0.5">
                      <ArrowRight className="h-3.5 w-3.5 stroke-[2.5]" />
                    </div>
                  </>
                )}
              </motion.button>
            </form>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
