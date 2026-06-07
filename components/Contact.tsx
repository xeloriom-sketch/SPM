"use client";

import { useRef, useState } from "react";
import { motion, useInView } from "framer-motion";
import { Phone, Mail, MapPin, AlertCircle, ArrowRight } from "lucide-react";
import SplitText from "@/components/ui/SplitText";

const serviceOptions = [
  "Transfert aéroport / gare",
  "Transport médical conventionné",
  "Transport de colis urgent",
  "Transport avec remorque",
  "Déplacement longue distance",
  "Autre",
];

function SubmitButton() {
  return (
    <button
      type="submit"
      className="group inline-flex w-full items-center justify-center gap-4 rounded-full bg-black pl-5 pr-1.5 py-1.5 text-[11px] font-medium tracking-wider text-white transition-all hover:bg-[#111111]"
    >
      <span>Envoyer ma demande</span>
      <div className="flex h-7 w-7 items-center justify-center rounded-full bg-white text-black transition-transform duration-300 group-hover:translate-x-0.5">
        <ArrowRight className="h-3.5 w-3.5 stroke-[2.5]" />
      </div>
    </button>
  );
}

const inputClass =
  "w-full rounded-[12px] border border-black/[0.08] bg-[#f8f9fa] px-4 py-3 text-xs text-black outline-none transition placeholder:text-black/25 focus:border-black/25 focus:bg-white focus:ring-2 focus:ring-black/5";

export default function Contact() {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });
  const [message, setMessage] = useState("");

  return (
    <section id="contact" className="w-full bg-white py-16 sm:py-20 md:py-28 font-sans">
      <div ref={ref} className="max-w-[1440px] mx-auto px-6 sm:px-12 lg:px-20">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <h2 className="text-3xl sm:text-4xl font-medium tracking-tight text-black mb-4">
            <SplitText text="Votre devis gratuit" mode="word" />
          </h2>
          <motion.p
            className="text-xs sm:text-sm text-[#555555] leading-relaxed"
            initial={{ opacity: 0, y: 15 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.15 }}
          >
            Disponible 7j/7. Réponse sous 2h. Pour un besoin urgent, préférez l'appel direct.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 gap-6 sm:gap-8 lg:grid-cols-[1fr_1.4fr] lg:gap-12 items-start">
          <motion.div
            className="flex flex-col gap-4"
            initial={{ opacity: 0, x: -20 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <a
              href="tel:0600000000"
              className="group flex items-center gap-4 rounded-[20px] border border-black/[0.06] bg-[#f8f9fa] p-5 transition-all hover:border-black/15 hover:shadow-[0_4px_20px_rgba(0,0,0,0.05)]"
            >
              <div className="grid h-11 w-11 shrink-0 place-items-center rounded-full bg-black">
                <Phone className="h-4 w-4 text-white" />
              </div>
              <div>
                <p className="text-xs font-bold text-black tracking-tight">Appel direct</p>
                <p className="text-[11px] text-[#888888]">06 XX XX XX XX — Disponible maintenant</p>
              </div>
              <ArrowRight className="ml-auto h-4 w-4 text-black/20 group-hover:text-black transition-colors" />
            </a>

            <a
              href="mailto:contact@taxi-tignieu.fr"
              className="group flex items-center gap-4 rounded-[20px] border border-black/[0.06] bg-[#f8f9fa] p-5 transition-all hover:border-black/15 hover:shadow-[0_4px_20px_rgba(0,0,0,0.05)]"
            >
              <div className="grid h-11 w-11 shrink-0 place-items-center rounded-full border border-black/10">
                <Mail className="h-4 w-4 text-black/50" />
              </div>
              <div>
                <p className="text-xs font-bold text-black tracking-tight">Email</p>
                <p className="text-[11px] text-[#888888]">contact@taxi-tignieu.fr</p>
              </div>
              <ArrowRight className="ml-auto h-4 w-4 text-black/20 group-hover:text-black transition-colors" />
            </a>

            <div className="flex items-center gap-4 rounded-[20px] border border-black/[0.06] bg-[#f8f9fa] p-5">
              <div className="grid h-11 w-11 shrink-0 place-items-center rounded-full border border-black/10">
                <MapPin className="h-4 w-4 text-black/50" />
              </div>
              <div>
                <p className="text-xs font-bold text-black tracking-tight">Localisation</p>
                <p className="text-[11px] text-[#888888]">Tignieu-Jameyzieu, Ain (01)</p>
              </div>
            </div>

            <div className="rounded-[20px] border border-black/[0.06] bg-[#f8f9fa] p-6 mt-1">
              <p className="text-[10px] font-bold tracking-widest uppercase text-black/30 mb-4">Disponibilités</p>
              <div className="flex flex-col gap-2.5">
                {[
                  ["Lundi – Dimanche", "00h00 – 23h59"],
                  ["Aéroport / Gare", "Suivi des vols en temps réel"],
                  ["Réservation", "24h à l'avance recommandée"],
                ].map(([label, value]) => (
                  <div key={label} className="flex items-center justify-between">
                    <span className="text-[11px] text-[#555555]">{label}</span>
                    <span className="text-[11px] font-medium text-black">{value}</span>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>

          <motion.div
            className="rounded-[20px] sm:rounded-[24px] border border-black/[0.06] bg-[#f8f9fa] p-5 sm:p-7 md:p-8"
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.25, ease: [0.16, 1, 0.3, 1] }}
          >
            <form
              className="flex flex-col gap-4"
              onSubmit={(e) => {
                e.preventDefault();
                setMessage("Sur cette version statique, utilisez le téléphone ou l'email ci-contre.");
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
                  <input id="phone" name="phone" type="tel" required placeholder="06 XX XX XX XX" className={inputClass} />
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
                      <option key={o} value={o}>
                        {o}
                      </option>
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
                <label className="mb-1.5 block text-[10px] font-bold tracking-wider uppercase text-black/40" htmlFor="message">
                  Détails du trajet
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={4}
                  placeholder="Départ : …   Arrivée : …   Personnes : …"
                  className={`${inputClass} resize-none`}
                />
              </div>

              {message && (
                <div className="flex items-center gap-2 rounded-[12px] border border-red-100 bg-red-50 px-4 py-3 text-xs text-red-600">
                  <AlertCircle className="h-3.5 w-3.5 shrink-0" />
                  {message}
                </div>
              )}

              <SubmitButton />
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
