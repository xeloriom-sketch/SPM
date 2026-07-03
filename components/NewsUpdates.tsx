"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { ChevronRight, Plane, Heart, Map } from "lucide-react";
import Link from "next/link";

const highlights = [
  {
    icon: Plane,
    label: "Transfert aéroport",
    title: "Lyon Saint-Exupéry, Part-Dieu, Perrache — à l'heure, à chaque fois",
    description:
      "Prise en charge à domicile, suivi des vols en temps réel, aide aux bagages. Disponible 24h/24, tous les jours de l'année, y compris les jours fériés et les vols de nuit.",
    detail: "Dès 65 € depuis Villebois",
    href: "/services",
  },
  {
    icon: Heart,
    label: "Transport médical CPAM",
    title: "Agrément officiel — zéro avance de frais pour vos trajets médicaux",
    description:
      "Chimiothérapie, dialyse, hospitalisation, consultations spécialisées. SPM est agréé par l'Assurance Maladie : la prise en charge est directe, sur prescription médicale.",
    detail: "Prise en charge CPAM",
    href: "/services",
  },
  {
    icon: Map,
    label: "Longue distance",
    title: "Paris, Marseille, Genève, Bordeaux — toute la France sur devis",
    description:
      "Tarif fixe, aucune surprise. Arrêts possibles en route. Aller simple ou aller-retour. Un seul chauffeur pour tout le trajet, confort SUV 7 places pendant tout le voyage.",
    detail: "Devis gratuit sous 2h",
    href: "/tarifs",
  },
];

export default function NewsUpdates() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const isInView   = useInView(sectionRef, { once: true, margin: "-100px" });

  return (
    <section ref={sectionRef} className="w-full bg-white py-20 font-sans">
      <div className="max-w-[1440px] mx-auto px-6 sm:px-12 lg:px-20">

        {/* ── EN-TÊTE ── */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-6 items-start mb-14">
          <div className="md:col-span-6">
            <motion.h2
              className="text-2xl sm:text-3xl font-medium tracking-tight text-black leading-tight max-w-md"
              initial={{ opacity: 0, y: 15 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8 }}
            >
              Nos services<br />les plus demandés
            </motion.h2>
          </div>
          <div className="md:col-span-6 md:justify-self-end">
            <motion.p
              className="text-[11px] text-black/50 leading-relaxed max-w-md font-normal"
              initial={{ opacity: 0, y: 15 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.15 }}
            >
              Transferts aéroport, transport médical ou longue distance —
              SPM Taxi s&apos;adapte à tous vos besoins avec ponctualité et tarif fixe garanti.
            </motion.p>
          </div>
        </div>

        {/* ── GRILLE DE CARTES ── */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          {highlights.map((item, index) => (
            <motion.div
              key={index}
              className="relative bg-black text-white rounded-[28px] p-8 lg:p-9 min-h-[420px] flex flex-col justify-between group hover:-translate-y-1 transition-transform duration-300"
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.2 + index * 0.1 }}
            >
              <div>
                <div className="flex items-center gap-3 mb-6">
                  <div className="grid h-9 w-9 place-items-center rounded-full bg-white/10">
                    <item.icon className="h-4 w-4 text-white/70" strokeWidth={1.6} />
                  </div>
                  <span className="text-[10px] font-bold tracking-[0.25em] uppercase text-white/30">
                    {item.label}
                  </span>
                </div>

                <h3 className="text-lg sm:text-xl font-medium tracking-tight text-white leading-snug mb-4 group-hover:text-white/90 transition-colors">
                  {item.title}
                </h3>
                <p className="text-[11px] text-white/50 leading-relaxed font-normal">
                  {item.description}
                </p>
              </div>

              <div className="flex items-center justify-between mt-8 pt-5 border-t border-white/[0.08]">
                <span className="text-[10px] font-semibold tracking-[0.18em] uppercase text-white/30">
                  {item.detail}
                </span>
                <Link
                  href={item.href}
                  aria-label={`En savoir plus — ${item.title ?? item.label}`}
                  className="flex h-11 w-11 items-center justify-center rounded-full bg-white text-black transition-all duration-300 group-hover:scale-105 group-hover:bg-white/90"
                >
                  <ChevronRight className="h-4 w-4 stroke-[2]" aria-hidden />
                </Link>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
