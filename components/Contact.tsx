"use client";

import { useRef } from "react";
import { useFormState, useFormStatus } from "react-dom";
import { motion, useInView } from "framer-motion";
import { Phone, Mail, MapPin, CheckCircle2, AlertCircle } from "lucide-react";
import { submitContact, type ContactFormState } from "@/app/actions/contact";

const initialState: ContactFormState = { success: false, message: "" };

const serviceOptions = [
  "Transfert aéroport / gare",
  "Transport médical conventionné",
  "Transport de colis urgent",
  "Transport avec remorque",
  "Déplacement longue distance",
  "Autre",
];

function SubmitButton() {
  const { pending } = useFormStatus();
  return (
    <motion.button
      type="submit"
      disabled={pending}
      className="group relative flex w-full items-center justify-center gap-2 overflow-hidden rounded-2xl bg-dark py-4 text-sm font-bold text-white disabled:opacity-60"
      whileHover={{ scale: pending ? 1 : 1.01 }}
      whileTap={{ scale: pending ? 1 : 0.98 }}
      transition={{ type: "spring", stiffness: 400, damping: 25 }}
    >
      <span className="absolute inset-0 translate-y-full bg-lime transition-transform duration-300 ease-out group-hover:translate-y-0" />
      <span className="relative z-10 text-white group-hover:text-dark transition-colors duration-300">
        {pending ? "Envoi…" : "Envoyer ma demande"}
      </span>
    </motion.button>
  );
}

export default function Contact() {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });
  const [state, action] = useFormState(submitContact, initialState);

  return (
    <section id="contact" className="w-full bg-surface py-24 px-6 sm:px-10 lg:px-16">
      <div ref={ref} className="max-w-[1440px] mx-auto">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:gap-16">
          {/* Left */}
          <div>
            <motion.p
              className="text-xs uppercase tracking-[0.2em] text-mutedc mb-3"
              initial={{ opacity: 0 }}
              animate={isInView ? { opacity: 1 } : {}}
              transition={{ duration: 0.5 }}
            >
              Contact
            </motion.p>
            <div className="overflow-hidden mb-5">
              <motion.h2
                className="font-sans text-4xl font-black tracking-tighter text-dark sm:text-5xl"
                initial={{ y: "100%" }}
                animate={isInView ? { y: 0 } : {}}
                transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
              >
                Votre devis<br />
                <span className="text-mutedc">gratuit</span>
              </motion.h2>
            </div>
            <motion.p
              className="text-sm leading-relaxed text-mutedc mb-10 max-w-xs"
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.15 }}
            >
              Disponible 7j/7. Réponse sous 2h. Pour un besoin urgent, préférez l'appel direct.
            </motion.p>

            {/* Contact infos */}
            <div className="flex flex-col gap-3">
              {[
                { icon: Phone, label: "06 XX XX XX XX", href: "tel:0600000000" },
                { icon: Mail, label: "contact@taxi-tignieu.fr", href: "mailto:contact@taxi-tignieu.fr" },
                { icon: MapPin, label: "Tignieu-Jameyzieu, Ain (01)", href: null },
              ].map(({ icon: Icon, label, href }) => (
                <motion.div
                  key={label}
                  initial={{ opacity: 0, x: -20 }}
                  animate={isInView ? { opacity: 1, x: 0 } : {}}
                  transition={{ type: "spring", stiffness: 150, damping: 22, delay: 0.25 }}
                >
                  {href ? (
                    <a href={href} className="group flex items-center gap-3 rounded-xl border border-borderc bg-white p-4 hover:border-dark/20 transition-colors">
                      <Icon className="h-4 w-4 text-mutedc group-hover:text-dark transition-colors" />
                      <span className="text-sm font-medium text-dark">{label}</span>
                    </a>
                  ) : (
                    <div className="flex items-center gap-3 rounded-xl border border-borderc bg-white p-4">
                      <Icon className="h-4 w-4 text-mutedc" />
                      <span className="text-sm text-mutedc">{label}</span>
                    </div>
                  )}
                </motion.div>
              ))}
            </div>

            {/* Phone CTA */}
            <motion.a
              href="tel:0600000000"
              className="group mt-6 flex items-center gap-4 rounded-2xl bg-dark p-5 hover:bg-dark/90 transition-colors"
              whileHover={{ scale: 1.01 }}
              whileTap={{ scale: 0.99 }}
              transition={{ type: "spring", stiffness: 400, damping: 25 }}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
            >
              <div className="grid h-11 w-11 place-items-center rounded-xl bg-lime">
                <Phone className="h-5 w-5 text-dark animate-floaty" />
              </div>
              <div>
                <p className="text-sm font-bold text-white">Appel direct</p>
                <p className="text-xs text-white/40">06 XX XX XX XX — Disponible maintenant</p>
              </div>
            </motion.a>
          </div>

          {/* Right form */}
          <motion.div
            className="rounded-3xl border border-borderc bg-white p-7 sm:p-8"
            initial={{ opacity: 0, y: 40 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ type: "spring", stiffness: 80, damping: 20, delay: 0.15 }}
          >
            {state.success ? (
              <div className="flex flex-col items-center justify-center gap-4 py-12 text-center">
                <motion.div
                  className="grid h-16 w-16 place-items-center rounded-full bg-lime"
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ type: "spring", stiffness: 300, damping: 20 }}
                >
                  <CheckCircle2 className="h-8 w-8 text-dark" />
                </motion.div>
                <div>
                  <p className="font-sans text-xl font-black text-dark">Message envoyé !</p>
                  <p className="mt-2 text-sm text-mutedc max-w-xs">{state.message}</p>
                </div>
              </div>
            ) : (
              <form action={action} className="flex flex-col gap-4">
                <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                  {[
                    { id: "name", label: "Nom complet", placeholder: "Jean Dupont", type: "text" },
                    { id: "phone", label: "Téléphone", placeholder: "06 XX XX XX XX", type: "tel" },
                  ].map((f) => (
                    <div key={f.id}>
                      <label className="mb-1.5 block text-xs font-semibold text-dark/60" htmlFor={f.id}>
                        {f.label} <span className="text-dark">*</span>
                      </label>
                      <input
                        id={f.id}
                        name={f.id}
                        type={f.type}
                        required
                        placeholder={f.placeholder}
                        className="w-full rounded-xl border border-borderc bg-surface px-4 py-3 text-sm outline-none transition placeholder:text-mutedc/50 focus:border-dark/40 focus:ring-2 focus:ring-dark/5"
                      />
                    </div>
                  ))}
                </div>

                <div>
                  <label className="mb-1.5 block text-xs font-semibold text-dark/60" htmlFor="email">
                    Email <span className="text-dark">*</span>
                  </label>
                  <input
                    id="email"
                    name="email"
                    type="email"
                    required
                    placeholder="jean.dupont@email.com"
                    className="w-full rounded-xl border border-borderc bg-surface px-4 py-3 text-sm outline-none transition placeholder:text-mutedc/50 focus:border-dark/40 focus:ring-2 focus:ring-dark/5"
                  />
                </div>

                <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                  <div>
                    <label className="mb-1.5 block text-xs font-semibold text-dark/60" htmlFor="service">
                      Service <span className="text-dark">*</span>
                    </label>
                    <select
                      id="service"
                      name="service"
                      required
                      className="w-full rounded-xl border border-borderc bg-surface px-4 py-3 text-sm outline-none transition focus:border-dark/40 focus:ring-2 focus:ring-dark/5 text-dark"
                    >
                      <option value="">Sélectionner…</option>
                      {serviceOptions.map((o) => <option key={o} value={o}>{o}</option>)}
                    </select>
                  </div>
                  <div>
                    <label className="mb-1.5 block text-xs font-semibold text-dark/60" htmlFor="date">
                      Date souhaitée
                    </label>
                    <input
                      id="date"
                      name="date"
                      type="date"
                      className="w-full rounded-xl border border-borderc bg-surface px-4 py-3 text-sm outline-none transition focus:border-dark/40 focus:ring-2 focus:ring-dark/5 text-dark"
                    />
                  </div>
                </div>

                <div>
                  <label className="mb-1.5 block text-xs font-semibold text-dark/60" htmlFor="message">
                    Détails du trajet
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={3}
                    placeholder="Départ : …  Arrivée : …  Personnes : …"
                    className="w-full rounded-xl border border-borderc bg-surface px-4 py-3 text-sm outline-none transition placeholder:text-mutedc/50 focus:border-dark/40 focus:ring-2 focus:ring-dark/5 resize-none"
                  />
                </div>

                {state.message && !state.success && (
                  <div className="flex items-center gap-2 rounded-xl border border-red-200 bg-red-50 px-4 py-3 text-sm text-red-600">
                    <AlertCircle className="h-4 w-4 shrink-0" />
                    {state.message}
                  </div>
                )}

                <SubmitButton />
              </form>
            )}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
