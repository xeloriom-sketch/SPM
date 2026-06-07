"use client";

import { useRef } from "react";
import { useFormState, useFormStatus } from "react-dom";
import { motion } from "framer-motion";
import { Phone, Mail, MapPin, Send, CheckCircle2, AlertCircle } from "lucide-react";
import { submitContact, type ContactFormState } from "@/app/actions/contact";

const initialState: ContactFormState = { success: false, message: "" };

function SubmitButton() {
  const { pending } = useFormStatus();
  return (
    <button
      type="submit"
      disabled={pending}
      className="flex items-center justify-center gap-2 rounded-full bg-lime py-3 text-sm font-semibold text-black transition-all hover:-translate-y-0.5 hover:brightness-105 hover:shadow-[0_10px_30px_-8px_rgba(182,240,0,0.5)] disabled:opacity-60 disabled:hover:translate-y-0"
    >
      {pending ? (
        <>
          <svg className="h-4 w-4 animate-spin" viewBox="0 0 24 24" fill="none">
            <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"/>
            <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.4 0 0 5.4 0 12h4z"/>
          </svg>
          Envoi en cours…
        </>
      ) : (
        <>
          <Send className="h-4 w-4" />
          Envoyer ma demande
        </>
      )}
    </button>
  );
}

const serviceOptions = [
  "Transfert aéroport / gare",
  "Transport médical conventionné",
  "Transport de colis urgent",
  "Transport avec remorque",
  "Déplacement longue distance",
  "Autre",
];

const contactInfo = [
  { icon: Phone, label: "Téléphone", value: "06 XX XX XX XX", href: "tel:0600000000" },
  { icon: Mail, label: "Email", value: "contact@taxi-tignieu.fr", href: "mailto:contact@taxi-tignieu.fr" },
  { icon: MapPin, label: "Basé à", value: "Tignieu-Jameyzieu, Ain (01)", href: null },
];

export default function Contact() {
  const [state, action] = useFormState(submitContact, initialState);
  const formRef = useRef<HTMLFormElement>(null);

  if (state.success && formRef.current) {
    formRef.current.reset();
  }

  return (
    <section id="contact" className="mt-24 px-4 sm:px-6 max-w-[1240px] mx-auto">
      <div className="grid grid-cols-1 gap-10 lg:grid-cols-[0.9fr_1.1fr]">
        {/* Left info */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6 }}
        >
          <p className="text-xs uppercase tracking-widest text-mutedc mb-2">Contact & Devis</p>
          <h2 className="font-display text-3xl font-bold text-balance sm:text-4xl">
            Demandez votre<br />
            <span className="text-lime">devis gratuit</span>
          </h2>
          <p className="mt-4 text-sm leading-relaxed text-mutedc">
            Disponible 7j/7. Réponse garantie sous 2h pour les demandes de devis.
            Pour un besoin urgent, préférez l'appel direct.
          </p>

          <div className="mt-8 flex flex-col gap-4">
            {contactInfo.map(({ icon: Icon, label, value, href }) => (
              <div key={label} className="flex items-center gap-4">
                <div className="grid h-10 w-10 shrink-0 place-items-center rounded-full border border-borderc bg-surface2 text-lime">
                  <Icon className="h-4 w-4" />
                </div>
                <div>
                  <p className="text-xs text-mutedc">{label}</p>
                  {href ? (
                    <a href={href} className="text-sm font-medium transition-colors hover:text-lime">
                      {value}
                    </a>
                  ) : (
                    <p className="text-sm font-medium">{value}</p>
                  )}
                </div>
              </div>
            ))}
          </div>

          {/* Direct call CTA */}
          <a
            href="tel:0600000000"
            className="mt-8 flex items-center justify-center gap-3 rounded-2xl border border-lime/20 bg-lime/5 p-5 transition-all hover:border-lime/40 hover:bg-lime/10"
          >
            <div className="grid h-11 w-11 place-items-center rounded-full bg-lime text-black animate-floaty">
              <Phone className="h-5 w-5" />
            </div>
            <div>
              <p className="text-sm font-semibold">Appel direct</p>
              <p className="text-xs text-mutedc">06 XX XX XX XX — Disponible maintenant</p>
            </div>
          </a>
        </motion.div>

        {/* Right form */}
        <motion.div
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6, delay: 0.15 }}
        >
          <div className="rounded-3xl border border-borderc bg-surface p-6 sm:p-8">
            {state.success ? (
              <motion.div
                className="flex flex-col items-center justify-center gap-4 py-12 text-center"
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
              >
                <div className="grid h-16 w-16 place-items-center rounded-full bg-lime/15 text-lime">
                  <CheckCircle2 className="h-8 w-8" />
                </div>
                <div>
                  <p className="font-display text-xl font-bold">Message envoyé !</p>
                  <p className="mt-2 text-sm text-mutedc max-w-xs">{state.message}</p>
                </div>
                <button
                  onClick={() => window.location.reload()}
                  className="mt-2 rounded-full border border-borderc px-5 py-2 text-sm text-mutedc transition-colors hover:text-foreground"
                >
                  Nouvelle demande
                </button>
              </motion.div>
            ) : (
              <form ref={formRef} action={action} className="flex flex-col gap-4">
                <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                  <div>
                    <label className="mb-1.5 block text-xs font-medium text-mutedc" htmlFor="name">
                      Nom complet <span className="text-lime">*</span>
                    </label>
                    <input
                      id="name"
                      name="name"
                      type="text"
                      required
                      placeholder="Jean Dupont"
                      className="w-full rounded-xl border border-borderc bg-surface2 px-4 py-2.5 text-sm outline-none transition placeholder:text-mutedc/50 focus:border-lime/50 focus:ring-1 focus:ring-lime/20"
                    />
                  </div>
                  <div>
                    <label className="mb-1.5 block text-xs font-medium text-mutedc" htmlFor="phone">
                      Téléphone <span className="text-lime">*</span>
                    </label>
                    <input
                      id="phone"
                      name="phone"
                      type="tel"
                      required
                      placeholder="06 XX XX XX XX"
                      className="w-full rounded-xl border border-borderc bg-surface2 px-4 py-2.5 text-sm outline-none transition placeholder:text-mutedc/50 focus:border-lime/50 focus:ring-1 focus:ring-lime/20"
                    />
                  </div>
                </div>

                <div>
                  <label className="mb-1.5 block text-xs font-medium text-mutedc" htmlFor="email">
                    Email <span className="text-lime">*</span>
                  </label>
                  <input
                    id="email"
                    name="email"
                    type="email"
                    required
                    placeholder="jean.dupont@email.com"
                    className="w-full rounded-xl border border-borderc bg-surface2 px-4 py-2.5 text-sm outline-none transition placeholder:text-mutedc/50 focus:border-lime/50 focus:ring-1 focus:ring-lime/20"
                  />
                </div>

                <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                  <div>
                    <label className="mb-1.5 block text-xs font-medium text-mutedc" htmlFor="service">
                      Type de service <span className="text-lime">*</span>
                    </label>
                    <select
                      id="service"
                      name="service"
                      required
                      className="w-full rounded-xl border border-borderc bg-surface2 px-4 py-2.5 text-sm outline-none transition focus:border-lime/50 focus:ring-1 focus:ring-lime/20 text-foreground"
                    >
                      <option value="">Sélectionner…</option>
                      {serviceOptions.map((o) => (
                        <option key={o} value={o}>{o}</option>
                      ))}
                    </select>
                  </div>
                  <div>
                    <label className="mb-1.5 block text-xs font-medium text-mutedc" htmlFor="date">
                      Date souhaitée
                    </label>
                    <input
                      id="date"
                      name="date"
                      type="date"
                      className="w-full rounded-xl border border-borderc bg-surface2 px-4 py-2.5 text-sm outline-none transition focus:border-lime/50 focus:ring-1 focus:ring-lime/20 text-foreground [color-scheme:dark]"
                    />
                  </div>
                </div>

                <div>
                  <label className="mb-1.5 block text-xs font-medium text-mutedc" htmlFor="message">
                    Détails du trajet
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={4}
                    placeholder="Départ : …&#10;Arrivée : …&#10;Nombre de personnes : …"
                    className="w-full rounded-xl border border-borderc bg-surface2 px-4 py-2.5 text-sm outline-none transition placeholder:text-mutedc/50 focus:border-lime/50 focus:ring-1 focus:ring-lime/20 resize-none"
                  />
                </div>

                {state.message && !state.success && (
                  <div className="flex items-center gap-2 rounded-xl border border-red-500/20 bg-red-500/10 px-4 py-3 text-sm text-red-400">
                    <AlertCircle className="h-4 w-4 shrink-0" />
                    {state.message}
                  </div>
                )}

                <SubmitButton />
              </form>
            )}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
