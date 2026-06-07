"use client";

import { useRef } from "react";
import { motion, useInView, useScroll, useTransform, useSpring, useMotionValue } from "framer-motion";
import { ArrowRight, ChevronLeft, ChevronRight } from "lucide-react";
import Image from "next/image";

const specs = [
  { label: "Capacité",     value: "7 Sièges" },
  { label: "Disponibilité",value: "24H/24" },
  { label: "Équipement",   value: "Remorque" },
  { label: "Distance",     value: "∞ KM" },
];

const features = [
  "Climatisation bi-zone automatique",
  "Wi-Fi haute vitesse à bord",
  "Attache-remorque homologuée",
  "Chargement USB & sans fil",
  "Assurance professionnelle taxi",
  "Grand espace bagage coffre",
];

export default function Vehicle() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const cardRef    = useRef<HTMLDivElement>(null);
  const isInView   = useInView(sectionRef, { once: true, margin: "-80px" });

  /* Parallaxe voiture au scroll */
  const { scrollYProgress } = useScroll({
    target: cardRef,
    offset: ["start end", "end start"],
  });
  const rawCarY       = useTransform(scrollYProgress, [0, 1], [35, -35]);
  const rawWatermarkY = useTransform(scrollYProgress, [0, 1], [18, -18]);
  const carY          = useSpring(rawCarY,       { stiffness: 52, damping: 19 });
  const watermarkY    = useSpring(rawWatermarkY, { stiffness: 28, damping: 16 });

  /* Tilt 3D au survol */
  const mouseX  = useMotionValue(0);
  const mouseY  = useMotionValue(0);
  const rotateX = useSpring(useTransform(mouseY, [-350, 350], [5, -5]),  { stiffness: 180, damping: 32 });
  const rotateY = useSpring(useTransform(mouseX, [-550, 550], [-5, 5]),  { stiffness: 180, damping: 32 });

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    mouseX.set(e.clientX - rect.left - rect.width / 2);
    mouseY.set(e.clientY - rect.top - rect.height / 2);
  };
  const handleMouseLeave = () => { mouseX.set(0); mouseY.set(0); };

  return (
    <section id="vehicule" ref={sectionRef} className="w-full bg-white py-20 md:py-36 font-sans">

      {/* ── En-tête tripartite ── */}
      <div className="max-w-[1440px] mx-auto px-6 sm:px-12 lg:px-20 grid grid-cols-1 md:grid-cols-12 gap-6 md:gap-4 items-start mb-10 md:mb-16">

        <div className="md:col-span-5">
          <motion.h2
            className="text-3xl sm:text-4xl lg:text-5xl font-medium tracking-tight text-black leading-tight"
            initial={{ opacity: 0, y: 18 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.85 }}
          >
            Le Futur du Transport
            <br />
            <span className="text-black/30">Exclusif & Confortable</span>
          </motion.h2>
        </div>

        <div className="md:col-span-4">
          <motion.p
            className="text-sm text-[#555] leading-relaxed max-w-xs"
            initial={{ opacity: 0, y: 18 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.85, delay: 0.15 }}
          >
            Montez à bord du Volkswagen Tiguan Allspace 7 places. Confort premium,
            attache-remorque homologuée, Wi-Fi à bord — chaque trajet est une
            expérience extraordinaire.
          </motion.p>
        </div>

        <div className="md:col-span-3 md:justify-self-end">
          <motion.div
            initial={{ opacity: 0, scale: 0.93 }}
            animate={isInView ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 0.65, delay: 0.3 }}
          >
            <a
              href="#contact"
              className="group inline-flex items-center gap-4 rounded-full bg-black pl-6 pr-1.5 py-1.5 text-[11px] font-semibold tracking-[0.2em] uppercase text-white transition-all hover:bg-[#111]"
            >
              <span>Réserver ce véhicule</span>
              <div className="flex h-8 w-8 items-center justify-center rounded-full bg-white text-black transition-transform duration-300 group-hover:translate-x-0.5">
                <ArrowRight className="h-4 w-4 stroke-[2.5]" />
              </div>
            </a>
          </motion.div>
        </div>
      </div>

      {/* ── Carte studio avec tilt 3D ── */}
      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={cardRef}
          className="relative w-full bg-[#f3f4f5] rounded-[36px] overflow-hidden pt-20 pb-14 px-6 md:px-16 flex flex-col items-center cursor-default"
          style={{ rotateX, rotateY, transformStyle: "preserve-3d" }}
          onMouseMove={handleMouseMove}
          onMouseLeave={handleMouseLeave}
          initial={{ opacity: 0, y: 36 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 1, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
        >
          {/* Watermark parallaxe */}
          <motion.div
            className="absolute inset-x-0 top-8 flex justify-center pointer-events-none select-none"
            style={{ y: watermarkY }}
          >
            <span className="text-[21vw] font-black tracking-[0.12em] text-black/[0.028] leading-none uppercase">
              TIGUAN
            </span>
          </motion.div>

          {/* Badge */}
          <div className="absolute top-8 left-8 hidden sm:block">
            <span className="text-[10px] font-bold tracking-[0.25em] uppercase text-black/28">
              Châssis Allspace · 7 Places
            </span>
          </div>

          {/* Flèches décoratives carrousel */}
          <button className="absolute left-6 top-[44%] -translate-y-1/2 h-11 w-11 bg-white rounded-full flex items-center justify-center text-black/30 shadow-sm hover:text-black hover:shadow-md transition-all z-10">
            <ChevronLeft className="h-4 w-4" />
          </button>
          <button className="absolute right-6 top-[44%] -translate-y-1/2 h-11 w-11 bg-white rounded-full flex items-center justify-center text-black/30 shadow-sm hover:text-black hover:shadow-md transition-all z-10">
            <ChevronRight className="h-4 w-4" />
          </button>

          {/* Voiture avec parallaxe scroll */}
          <motion.div
            className="relative w-full max-w-[1000px] z-10 will-change-transform aspect-[4/3] sm:aspect-[16/9] lg:aspect-[21/9]"
            style={{ y: carY }}
            initial={{ opacity: 0, y: 40 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 1.15, ease: [0.16, 1, 0.3, 1], delay: 0.3 }}
          >
            {/* Ombre au sol */}
            <div
              className="absolute -bottom-2 left-1/2 -translate-x-1/2 w-[60%] pointer-events-none"
              style={{ height: 28, background: "radial-gradient(ellipse, rgba(0,0,0,0.13) 0%, transparent 70%)" }}
            />
            <Image
              src="https://res.cloudinary.com/dkugkfusy/image/upload/v1715934872/cars/models/ouvb1yadbx8zrhvh9kvv.png"
              alt="SPM Volkswagen Tiguan Allspace 7 places taxi"
              fill
              priority
              quality={95}
              className="object-contain object-center"
              style={{ filter: "drop-shadow(0 28px 45px rgba(0,0,0,0.12))" }}
            />
          </motion.div>

          {/* Barre specs */}
          <div className="w-full max-w-4xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-x-4 gap-y-6 mt-10 sm:mt-12 z-10">
            {specs.map((s, i) => (
              <motion.div
                key={i}
                className="flex items-center"
                initial={{ opacity: 0, y: 16 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.55 + i * 0.09 }}
              >
                {i !== 0 && <div className="hidden md:block h-9 w-px bg-black/10 mr-10 self-center" />}
                <div className="flex flex-col">
                  <span className="text-[10px] tracking-[0.2em] text-black/38 mb-1.5 font-semibold uppercase">
                    {s.label}
                  </span>
                  <span className="text-xl sm:text-2xl font-bold tracking-tight text-black">
                    {s.value}
                  </span>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>

      {/* ── Équipements ── */}
      <div className="max-w-[1440px] mx-auto px-6 sm:px-12 lg:px-20 mt-10 md:mt-14">
        <motion.p
          className="text-[10px] font-bold tracking-[0.28em] uppercase text-black/28 mb-6 md:mb-7"
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ delay: 0.85 }}
        >
          Équipements à bord
        </motion.p>
        <div className="grid grid-cols-1 gap-x-8 gap-y-3 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-6">
          {features.map((f, i) => (
            <motion.div
              key={f}
              className="flex items-center gap-2.5"
              initial={{ opacity: 0, y: 14 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.85 + i * 0.07 }}
            >
              <div className="h-1 w-1 shrink-0 rounded-full bg-black/28" />
              <span className="text-xs text-[#555] leading-tight">{f}</span>
            </motion.div>
          ))}
        </div>
      </div>

    </section>
  );
}
