"use client";

import { useRef } from "react";
import { motion, useInView, useScroll, useTransform } from "framer-motion";
import { Phone, FileText, Car } from "lucide-react";
import SplitText from "@/components/ui/SplitText";
import { revealVariants, revealSubtle, spring } from "@/lib/motion";

const steps = [
  {
    num: "01",
    icon: Phone,
    title: "Contactez-nous",
    desc: "Appelez le 07 67 75 18 98 ou remplissez le formulaire en ligne. Disponible 24h/24, 7j/7 — même la nuit et les jours fériés.",
    detail: "Réponse garantie sous 2h",
  },
  {
    num: "02",
    icon: FileText,
    title: "Recevez votre devis",
    desc: "Devis gratuit et personnalisé selon votre trajet, le type de service et vos besoins spécifiques. Tarif fixe, sans surprise.",
    detail: "Prix bloqué à la confirmation",
  },
  {
    num: "03",
    icon: Car,
    title: "Profitez du trajet",
    desc: "Le chauffeur arrive à l'heure, vous aide avec vos bagages et vous conduit à destination en Volkswagen Tiguan 7 places.",
    detail: "Ponctualité garantie",
  },
];

export default function HowItWorks() {
  const ref    = useRef<HTMLDivElement>(null);
  const isIn   = useInView(ref, { once: true, margin: "-80px" });

  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end start"] });
  const headY = useTransform(scrollYProgress, [0, 0.6], [24, -12]);

  return (
    <section ref={ref} className="w-full bg-[#f8f9fa] py-20 md:py-32 font-sans overflow-hidden border-t border-black/[0.05]">
      <div className="max-w-[1440px] mx-auto px-6 sm:px-12 lg:px-20">

        <div className="mb-16 md:mb-20 flex flex-col md:flex-row md:items-end md:justify-between gap-6">
          <motion.div style={{ y: headY }}>
            <motion.span
              className="text-[10px] font-bold tracking-[0.3em] uppercase text-black/30 mb-4 block"
              variants={revealSubtle} initial="hidden" animate={isIn ? "visible" : "hidden"} custom={0}
            >
              Processus
            </motion.span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-medium tracking-tight text-black leading-tight">
              <SplitText text="Comment ça marche" mode="word" />
            </h2>
          </motion.div>
          <motion.p
            className="text-sm text-black/40 max-w-xs leading-relaxed"
            variants={revealSubtle} initial="hidden" animate={isIn ? "visible" : "hidden"} custom={0.25}
          >
            Trois étapes simples pour un trajet parfait, de la réservation à la destination.
          </motion.p>
        </div>

        {/* Steps */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-px bg-black/[0.06] rounded-[24px] overflow-hidden border border-black/[0.06]">
          {steps.map((s, i) => (
            <motion.div
              key={s.num}
              className="bg-[#f8f9fa] p-8 lg:p-10 flex flex-col gap-6 hover:bg-black/[0.03] transition-colors duration-500 group"
              variants={revealVariants} initial="hidden" animate={isIn ? "visible" : "hidden"} custom={0.1 + i * 0.12}
              whileHover={{ y: -3 }}
              transition={spring}
            >
              <div className="flex items-start justify-between">
                <span className="text-[10px] font-bold tracking-[0.3em] text-black/20 uppercase">{s.num}</span>
                <div className="grid h-10 w-10 place-items-center rounded-full border border-black/10 text-black/30 group-hover:border-black/25 group-hover:text-black/60 group-hover:bg-black group-hover:text-white transition-all duration-400">
                  <s.icon className="h-4 w-4" strokeWidth={1.5} />
                </div>
              </div>

              <div>
                <h3 className="text-lg font-semibold text-black tracking-tight mb-3">{s.title}</h3>
                <p className="text-sm text-black/45 leading-relaxed">{s.desc}</p>
              </div>

              <div className="mt-auto pt-4 border-t border-black/[0.06]">
                <span className="text-[10px] font-semibold tracking-[0.2em] uppercase text-black/25 group-hover:text-black/50 transition-colors duration-500">
                  {s.detail}
                </span>
              </div>
            </motion.div>
          ))}
        </div>

        {/* CTA */}
        <motion.div
          className="mt-12 flex justify-center"
          variants={revealSubtle} initial="hidden" animate={isIn ? "visible" : "hidden"} custom={0.55}
        >
          <motion.a
            href="tel:+33767751898"
            className="inline-flex items-center gap-3 rounded-full border border-black/15 text-black/70 px-7 py-3 text-[11px] font-semibold tracking-[0.18em] uppercase hover:border-black/40 hover:text-black transition-all"
            whileHover={{ scale: 1.04, y: -2 }}
            whileTap={{ scale: 0.96 }}
            transition={spring}
          >
            <Phone className="h-3.5 w-3.5" />
            Réserver maintenant — 07 67 75 18 98
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
}
