"use client";

import { useRef } from "react";
import { motion, useInView, useScroll, useTransform } from "framer-motion";
import { Shield, Clock, Star, MapPin, CreditCard, Heart } from "lucide-react";
import SplitText from "@/components/ui/SplitText";
import { revealVariants, revealSubtle, spring } from "@/lib/motion";

const commitments = [
  { icon: Clock,      title: "Ponctualité absolue",      desc: "Jamais en retard. Le chauffeur prévoit toujours une marge de sécurité et suit les conditions de trafic en temps réel." },
  { icon: Shield,     title: "Conventionné CPAM",         desc: "Agréé Assurance Maladie. Vos transports médicaux sur prescription peuvent être intégralement pris en charge." },
  { icon: Star,       title: "4,9 / 5 sur Google",       desc: "9 avis vérifiés, tous positifs. La satisfaction client est au cœur de chaque trajet, sans exception." },
  { icon: MapPin,     title: "Ancré localement",          desc: "Basé à Villebois, je connais chaque route de l'Ain, Lyon et l'Isère. Aucune surprise, aucun détour inutile." },
  { icon: CreditCard, title: "Tarifs transparents",       desc: "Devis gratuit, prix fixe confirmé avant le trajet. CB, espèces ou chèque — vous choisissez votre mode de paiement." },
  { icon: Heart,      title: "Accessibilité & bienveillance", desc: "Personnes en situation de handicap, enfants, animaux acceptés. Chaque passager est accueilli avec soin." },
];

const numbers = [
  { value: "4,9★", label: "Note Google" },
  { value: "7j/7", label: "Disponibilité" },
  { value: "24h",  label: "Sur appel" },
  { value: "100%", label: "CPAM agréé" },
];

export default function WhyUs() {
  const ref     = useRef<HTMLDivElement>(null);
  const bannerRef = useRef<HTMLDivElement>(null);
  const isInView  = useInView(ref, { once: true, margin: "-80px" });

  const { scrollYProgress } = useScroll({ target: bannerRef, offset: ["start end", "end start"] });
  const x = useTransform(scrollYProgress, [0, 1], ["0%", "-8%"]);

  return (
    <section ref={ref} className="w-full bg-[#f8f9fa] py-20 md:py-32 font-sans overflow-hidden">
      <div className="max-w-[1440px] mx-auto px-6 sm:px-12 lg:px-20">

        <div className="mb-16 md:mb-20 text-center max-w-2xl mx-auto">
          <motion.span
            className="text-[10px] font-bold tracking-[0.3em] uppercase text-black/35 mb-4 block"
            variants={revealSubtle}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            custom={0}
          >
            Nos engagements
          </motion.span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-medium tracking-tight text-black leading-tight mb-5">
            <SplitText text="Pourquoi choisir SPM ?" mode="word" />
          </h2>
          <motion.p
            className="text-sm text-[#555] leading-relaxed"
            variants={revealSubtle}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            custom={0.2}
          >
            Plus qu&apos;un simple taxi — un service de confiance, ponctuel et professionnel depuis Villebois.
          </motion.p>
        </div>

        {/* Chiffres */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-px bg-black/[0.06] rounded-[20px] overflow-hidden mb-8">
          {numbers.map((n, i) => (
            <motion.div
              key={n.label}
              className="bg-white flex flex-col items-center justify-center py-8 px-4 text-center"
              variants={revealVariants}
              initial="hidden"
              animate={isInView ? "visible" : "hidden"}
              custom={0.1 + i * 0.08}
            >
              <span className="text-3xl sm:text-4xl font-black tracking-tight text-black mb-1">{n.value}</span>
              <span className="text-[10px] font-semibold tracking-[0.2em] uppercase text-black/35">{n.label}</span>
            </motion.div>
          ))}
        </div>

        {/* Engagement cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {commitments.map((c, i) => (
            <motion.div
              key={c.title}
              className="bg-white rounded-[20px] p-7 border border-black/[0.05] group"
              variants={revealVariants}
              initial="hidden"
              animate={isInView ? "visible" : "hidden"}
              custom={0.18 + i * 0.09}
              whileHover={{ y: -6, scale: 1.01, boxShadow: "0 16px 48px rgba(0,0,0,0.09)" }}
              transition={spring}
            >
              <div className="flex items-start gap-4">
                <div className="grid h-10 w-10 shrink-0 place-items-center rounded-full bg-black/[0.05] group-hover:bg-black group-hover:text-white transition-all duration-400">
                  <c.icon className="h-4 w-4 text-black group-hover:text-white transition-colors duration-400" strokeWidth={1.8} />
                </div>
                <div>
                  <h3 className="text-sm font-semibold text-black tracking-tight mb-1.5">{c.title}</h3>
                  <p className="text-xs text-[#666] leading-relaxed">{c.desc}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Scrolling marquee */}
      <div ref={bannerRef} className="mt-20 overflow-hidden border-y border-black/[0.05] py-4">
        <motion.div className="flex whitespace-nowrap gap-12 text-[13px] font-semibold tracking-[0.2em] uppercase text-black/20" style={{ x }}>
          {Array(6).fill(null).map((_, i) => (
            <span key={i} className="shrink-0">
              Taxi Conventionné CPAM &nbsp;·&nbsp; Volkswagen Tiguan 7 Places &nbsp;·&nbsp; Lyon · Ain · Isère &nbsp;·&nbsp; Disponible 24h/24 &nbsp;·&nbsp; Devis Gratuit &nbsp;·&nbsp;
            </span>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
