"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Building2, Hotel, CalendarCheck, Receipt, ArrowRight, Phone } from "lucide-react";
import { revealVariants, revealSubtle, spring } from "@/lib/motion";

const offres = [
  {
    icon: Building2,
    title: "Comptes entreprises",
    desc: "Facturation mensuelle centralisée pour vos équipes. Justificatifs de déplacement conformes, suivi kilométrique, rapport mensuel.",
    details: ["Facturation mensuelle", "Justificatifs TVA", "Rapport de trajets"],
  },
  {
    icon: Hotel,
    title: "Hôtels & conciergeries",
    desc: "Partenariat privilégié pour vos clients et résidents. Prise en charge à l'entrée de l'hôtel, panneau nominatif, réponse garantie.",
    details: ["Panneau nominatif", "Accueil personnalisé", "Priorité de réservation"],
  },
  {
    icon: CalendarCheck,
    title: "Événements professionnels",
    desc: "Séminaires, congrès, transferts de délégations. Navettes programmées, ponctualité assurée, véhicule 7 places disponible.",
    details: ["Navettes planifiées", "7 passagers max", "Devis événementiel"],
  },
  {
    icon: Receipt,
    title: "Transport régulier",
    desc: "Abonnement pour trajets récurrents (cliniques, EHPAD, centres de soins). Tarif préférentiel négocié sur volume.",
    details: ["Tarif dégressif", "Planning fixe", "Contact dédié"],
  },
];

export default function Entreprises() {
  const ref     = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-60px" });

  return (
    <section ref={ref} className="w-full bg-[#f8f9fa] py-20 md:py-28 font-sans border-t border-black/[0.05]">
      <div className="max-w-[1440px] mx-auto px-6 sm:px-12 lg:px-20">

        {/* Header */}
        <div className="mb-14 grid grid-cols-1 md:grid-cols-2 gap-8 items-end">
          <div>
            <motion.span
              className="text-[10px] font-bold tracking-[0.3em] uppercase text-black/30 mb-4 block"
              variants={revealSubtle} initial="hidden" animate={isInView ? "visible" : "hidden"} custom={0}
            >
              Professionnels & entreprises
            </motion.span>
            <h2 className="text-3xl sm:text-4xl font-medium tracking-tight text-black leading-tight">
              Solutions sur-mesure<br />
              <span className="text-black/30">pour vos équipes</span>
            </h2>
          </div>
          <motion.div
            className="flex flex-col gap-3"
            variants={revealSubtle} initial="hidden" animate={isInView ? "visible" : "hidden"} custom={0.2}
          >
            <p className="text-sm text-black/45 leading-relaxed max-w-sm">
              Facturation mensuelle, justificatifs conformes, priorité de réservation.
              Un interlocuteur unique pour tous vos déplacements professionnels.
            </p>
            <div className="flex flex-wrap gap-3 mt-1">
              <motion.a
                href="tel:+33767751898"
                title="Discuter d'un partenariat avec SPM Taxi"
                className="group inline-flex items-center gap-3 rounded-full bg-black pl-4 pr-1.5 py-1.5 text-[11px] font-semibold tracking-wide text-white"
                whileHover={{ scale: 1.04, y: -1 }} whileTap={{ scale: 0.96 }} transition={spring}
              >
                <Phone className="h-3.5 w-3.5" />
                <span>Discuter d&apos;un partenariat</span>
                <div className="flex h-7 w-7 items-center justify-center rounded-full bg-white text-black group-hover:translate-x-0.5 transition-transform">
                  <ArrowRight className="h-3.5 w-3.5 stroke-[2.5]" />
                </div>
              </motion.a>
              <a
                href="mailto:contact@spm-taxi.fr"
                title="Envoyer un email à SPM Taxi"
                className="inline-flex items-center gap-2 rounded-full border border-black/15 text-black/70 px-5 py-2 text-[11px] font-semibold hover:border-black/35 hover:text-black transition-all"
              >
                contact@spm-taxi.fr
              </a>
            </div>
          </motion.div>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {offres.map((o, i) => (
            <motion.div
              key={o.title}
              className="bg-white rounded-2xl p-7 border border-black/[0.05] group"
              variants={revealVariants} initial="hidden" animate={isInView ? "visible" : "hidden"} custom={0.1 + i * 0.09}
              whileHover={{ y: -5, boxShadow: "0 16px 48px rgba(0,0,0,0.08)" }}
              transition={spring}
            >
              <div className="flex items-start gap-4 mb-4">
                <motion.div
                  className="grid h-11 w-11 shrink-0 place-items-center rounded-full bg-black/[0.05] group-hover:bg-black transition-colors duration-300"
                  whileHover={{ rotate: 6 }} transition={spring}
                >
                  <o.icon className="h-4 w-4 text-black group-hover:text-white transition-colors duration-300" strokeWidth={1.8} />
                </motion.div>
                <div>
                  <h3 className="text-sm font-semibold text-black mb-1">{o.title}</h3>
                  <p className="text-xs text-black/50 leading-relaxed">{o.desc}</p>
                </div>
              </div>
              <div className="flex flex-wrap gap-2 mt-4 pt-4 border-t border-black/[0.05]">
                {o.details.map((d) => (
                  <span key={d} className="text-[10px] font-semibold tracking-wide uppercase px-3 py-1.5 rounded-full bg-black/[0.05] text-black/50">
                    {d}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
