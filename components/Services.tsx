"use client";

import { useRef } from "react";
import { motion, useInView, useSpring, useTransform, useMotionValue } from "framer-motion";

const services = [
  {
    number: "01",
    title: "Transferts\nGare & Aéroport",
    desc: "Lyon Saint-Exupéry, Part-Dieu, Perrache, Genève. Prise en charge à domicile. Suivi des vols en temps réel.",
    tags: ["Lyon-St-Exupéry", "Part-Dieu", "Genève"],
    accent: "#e8ff3d",
  },
  {
    number: "02",
    title: "Colis &\nCourriers Urgents",
    desc: "Livraison rapide de colis et lettres urgentes dans toute la région. Sécurité et traçabilité garanties.",
    tags: ["Same-day", "Sécurisé", "Toute la France"],
    accent: "#000000",
  },
  {
    number: "03",
    title: "Remorque\nà Disposition",
    desc: "Attache-remorque homologuée. Transport de matériel, véhicules en panne, déménagements partiels.",
    tags: ["Équipement unique", "Matériel lourd"],
    accent: "#e8ff3d",
  },
  {
    number: "04",
    title: "France\nEntière",
    desc: "De Lyon à Paris, Marseille, Bordeaux… Je vous conduis partout. Longue distance sur devis, confort absolu.",
    tags: ["Paris", "Marseille", "Sur devis"],
    accent: "#000000",
  },
];

function ServiceCard({ s, i }: { s: typeof services[0]; i: number }) {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  const rotateX = useSpring(useTransform(mouseY, [-150, 150], [8, -8]), { stiffness: 300, damping: 30 });
  const rotateY = useSpring(useTransform(mouseX, [-150, 150], [-8, 8]), { stiffness: 300, damping: 30 });

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    mouseX.set(e.clientX - rect.left - rect.width / 2);
    mouseY.set(e.clientY - rect.top - rect.height / 2);
  };
  const handleMouseLeave = () => { mouseX.set(0); mouseY.set(0); };

  const isAccentYellow = s.accent === "#e8ff3d";

  return (
    <motion.div
      ref={ref}
      className="group relative"
      initial={{ opacity: 0, y: 60 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.8, delay: i * 0.1, type: "spring", stiffness: 80, damping: 18 }}
      style={{ perspective: 800 }}
    >
      <motion.div
        className={`relative overflow-hidden rounded-3xl p-7 h-full cursor-pointer ${isAccentYellow ? "bg-lime text-dark" : "bg-dark text-white"}`}
        style={{ rotateX, rotateY, transformStyle: "preserve-3d" }}
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
        whileHover={{ scale: 1.02 }}
        transition={{ type: "spring", stiffness: 400, damping: 30 }}
      >
        {/* Number */}
        <span className={`absolute top-6 right-7 font-mono text-xs font-medium ${isAccentYellow ? "text-dark/30" : "text-white/20"}`}>
          {s.number}
        </span>

        {/* Icon circle */}
        <div className={`mb-6 grid h-12 w-12 place-items-center rounded-2xl ${isAccentYellow ? "bg-dark/10" : "bg-white/10"}`}>
          <div className={`h-5 w-5 rounded-full ${isAccentYellow ? "bg-dark" : "bg-white"}`} />
        </div>

        {/* Title */}
        <h3 className="font-sans text-2xl font-black leading-[1.1] tracking-tight whitespace-pre-line mb-4">
          {s.title}
        </h3>

        {/* Desc */}
        <p className={`text-sm leading-relaxed mb-6 ${isAccentYellow ? "text-dark/65" : "text-white/55"}`}>
          {s.desc}
        </p>

        {/* Tags */}
        <div className="flex flex-wrap gap-2">
          {s.tags.map((tag) => (
            <span key={tag} className={`rounded-full px-3 py-1 text-xs font-medium ${isAccentYellow ? "bg-dark/10 text-dark/70" : "bg-white/10 text-white/60"}`}>
              {tag}
            </span>
          ))}
        </div>

        {/* Arrow */}
        <div className={`absolute bottom-7 right-7 grid h-9 w-9 place-items-center rounded-full transition-all duration-300 group-hover:scale-110 ${isAccentYellow ? "bg-dark text-white" : "bg-white text-dark"}`}>
          <span className="text-sm font-bold">→</span>
        </div>
      </motion.div>
    </motion.div>
  );
}

export default function Services() {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="services" className="w-full bg-white py-24 px-6 sm:px-10 lg:px-16">
      {/* Header */}
      <div ref={ref} className="mb-14 flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between max-w-[1440px] mx-auto">
        <div className="overflow-hidden">
          <motion.h2
            className="font-sans text-4xl font-black tracking-tighter text-dark sm:text-5xl lg:text-6xl"
            initial={{ y: "100%" }}
            animate={isInView ? { y: 0 } : {}}
            transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
          >
            Mes services
          </motion.h2>
        </div>
        <motion.p
          className="max-w-xs text-sm leading-relaxed text-mutedc"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
        >
          Taxi conventionné avec équipements professionnels — pour particuliers et entreprises.
        </motion.p>
      </div>

      {/* Grid */}
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 max-w-[1440px] mx-auto">
        {services.map((s, i) => (
          <ServiceCard key={s.number} s={s} i={i} />
        ))}
      </div>
    </section>
  );
}
