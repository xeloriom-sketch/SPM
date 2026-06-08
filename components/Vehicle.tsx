"use client";

import { useRef, useState } from "react";
import { motion, useInView, useScroll, useTransform, useSpring, useMotionValue, AnimatePresence } from "framer-motion";
import { ArrowRight, ChevronLeft, ChevronRight } from "lucide-react";
import Image from "next/image";
import SplitText from "@/components/ui/SplitText";
import { spring, springFast, revealVariants, revealSubtle } from "@/lib/motion";
import { sitePath } from "@/lib/site-path";

const specs = [
  { label: "Capacité",      value: "7 Sièges" },
  { label: "Disponibilité", value: "24H/24" },
  { label: "Équipement",    value: "Remorque" },
  { label: "Distance",      value: "∞ KM" },
];

const features = [
  "Climatisation bi-zone automatique",
  "Wi-Fi haute vitesse à bord",
  "Attache-remorque homologuée",
  "Chargement USB & sans fil",
  "Assurance professionnelle taxi",
  "Grand espace bagage coffre",
];

const views = [
  { src: sitePath("/image/tiguan-front-quarter.png"), label: "Vue 3/4 avant",  alt: "Volkswagen Tiguan Allspace — avant 3/4" },
  { src: sitePath("/image/tiguan-side.png"),          label: "Profil",          alt: "Volkswagen Tiguan Allspace — profil" },
  { src: sitePath("/image/tiguan-front.png"),         label: "Face avant",      alt: "Volkswagen Tiguan Allspace — face avant" },
  { src: sitePath("/image/tiguan-rear.png"),          label: "Vue arrière",     alt: "Volkswagen Tiguan Allspace — arrière" },
];

export default function Vehicle() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const cardRef    = useRef<HTMLDivElement>(null);
  const isInView   = useInView(sectionRef, { once: true, margin: "-80px" });

  const [current, setCurrent]   = useState(0);
  const [direction, setDirection] = useState(1);

  const go = (next: number) => {
    setDirection(next > current ? 1 : -1);
    setCurrent(next);
  };
  const prev = () => go((current - 1 + views.length) % views.length);
  const next = () => go((current + 1) % views.length);

  const { scrollYProgress } = useScroll({ target: cardRef, offset: ["start end", "end start"] });
  const rawWatermarkY = useTransform(scrollYProgress, [0, 1], [16, -16]);
  const watermarkY    = useSpring(rawWatermarkY, { stiffness: 25, damping: 16 });

  const mouseX  = useMotionValue(0);
  const mouseY  = useMotionValue(0);
  const rotateX = useSpring(useTransform(mouseY, [-350, 350], [3, -3]),  { stiffness: 160, damping: 30 });
  const rotateY = useSpring(useTransform(mouseX, [-550, 550], [-3, 3]),  { stiffness: 160, damping: 30 });

  const handleMouseMove  = (e: React.MouseEvent<HTMLDivElement>) => {
    const r = e.currentTarget.getBoundingClientRect();
    mouseX.set(e.clientX - r.left - r.width  / 2);
    mouseY.set(e.clientY - r.top  - r.height / 2);
  };
  const handleMouseLeave = () => { mouseX.set(0); mouseY.set(0); };

  const slideVariants = {
    enter: (d: number) => ({ x: d > 0 ? "55%" : "-55%", opacity: 0, scale: 0.88 }),
    center: { x: 0, opacity: 1, scale: 1 },
    exit:  (d: number) => ({ x: d > 0 ? "-55%" : "55%", opacity: 0, scale: 0.88 }),
  };

  return (
    <section id="vehicule" ref={sectionRef} className="w-full bg-white py-20 md:py-36 font-sans">

      {/* Header */}
      <div className="max-w-[1440px] mx-auto px-6 sm:px-12 lg:px-20 grid grid-cols-1 md:grid-cols-12 gap-6 md:gap-4 items-start mb-10 md:mb-16">

        <div className="md:col-span-5">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-medium tracking-tight text-black leading-tight">
            <SplitText text="Le Futur du Transport" mode="word" delay={0} />
            <br />
            <span className="text-black/30">
              <SplitText text="Exclusif & Confortable" mode="word" delay={0.15} />
            </span>
          </h2>
        </div>

        <div className="md:col-span-4">
          <motion.p
            className="text-sm text-[#555] leading-relaxed max-w-xs"
            variants={revealSubtle}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            custom={0.28}
          >
            Montez à bord du Volkswagen Tiguan Allspace 7 places. Confort premium,
            attache-remorque homologuée, Wi-Fi à bord — chaque trajet est une
            expérience extraordinaire.
          </motion.p>
        </div>

        <div className="md:col-span-3 md:justify-self-end">
          <motion.div
            variants={revealSubtle}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            custom={0.38}
          >
            <motion.a
              href="#contact"
              className="group inline-flex items-center gap-4 rounded-full bg-black pl-6 pr-1.5 py-1.5 text-[11px] font-semibold tracking-[0.2em] uppercase text-white"
              whileHover={{ scale: 1.04, y: -2 }}
              whileTap={{ scale: 0.96 }}
              transition={springFast}
            >
              <span>Réserver ce véhicule</span>
              <div className="flex h-8 w-8 items-center justify-center rounded-full bg-white text-black transition-transform duration-300 group-hover:translate-x-0.5">
                <ArrowRight className="h-4 w-4 stroke-[2.5]" />
              </div>
            </motion.a>
          </motion.div>
        </div>
      </div>

      {/* Carousel card */}
      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={cardRef}
          className="relative w-full bg-[#f3f4f5] rounded-[28px] sm:rounded-[36px] overflow-hidden pt-14 sm:pt-18 pb-10 sm:pb-12 px-4 sm:px-8 md:px-16 flex flex-col items-center cursor-default"
          style={{ rotateX, rotateY, transformStyle: "preserve-3d" }}
          onMouseMove={handleMouseMove}
          onMouseLeave={handleMouseLeave}
          variants={revealVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          custom={0.1}
        >
          {/* Watermark */}
          <motion.div
            className="absolute inset-x-0 top-6 flex justify-center pointer-events-none select-none"
            style={{ y: watermarkY }}
          >
            <span className="text-[21vw] font-black tracking-[0.12em] text-black/[0.028] leading-none uppercase">
              TIGUAN
            </span>
          </motion.div>

          {/* Badge */}
          <div className="absolute top-7 left-8 hidden sm:flex items-center gap-3">
            <motion.span
              className="text-[10px] font-bold tracking-[0.25em] uppercase text-black/28"
              variants={revealSubtle}
              initial="hidden"
              animate={isInView ? "visible" : "hidden"}
              custom={0.5}
            >
              Châssis Allspace · 7 Places
            </motion.span>
          </div>

          {/* View label top-right */}
          <div className="absolute top-7 right-8 hidden sm:flex items-center gap-2">
            <AnimatePresence mode="wait">
              <motion.span
                key={current}
                className="text-[10px] font-semibold tracking-[0.2em] uppercase text-black/40"
                initial={{ opacity: 0, y: 6 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -6 }}
                transition={{ type: "spring", stiffness: 400, damping: 30 }}
              >
                {views[current].label}
              </motion.span>
            </AnimatePresence>
            <span className="text-[10px] text-black/20 font-mono">
              {String(current + 1).padStart(2, "0")}/{views.length}
            </span>
          </div>

          {/* Nav arrows */}
          <motion.button
            className="absolute left-4 sm:left-6 top-[44%] -translate-y-1/2 h-11 w-11 bg-white rounded-full flex items-center justify-center text-black/40 shadow-sm z-10"
            onClick={prev}
            whileHover={{ scale: 1.1, x: -2 }}
            whileTap={{ scale: 0.92 }}
            transition={springFast}
          >
            <ChevronLeft className="h-4 w-4" />
          </motion.button>
          <motion.button
            className="absolute right-4 sm:right-6 top-[44%] -translate-y-1/2 h-11 w-11 bg-white rounded-full flex items-center justify-center text-black/40 shadow-sm z-10"
            onClick={next}
            whileHover={{ scale: 1.1, x: 2 }}
            whileTap={{ scale: 0.92 }}
            transition={springFast}
          >
            <ChevronRight className="h-4 w-4" />
          </motion.button>

          {/* Car image carousel */}
          <div className="relative w-full max-w-[1000px] z-10 overflow-hidden aspect-[4/3] sm:aspect-[16/9] lg:aspect-[21/9]">
            <AnimatePresence custom={direction} mode="popLayout">
              <motion.div
                key={current}
                custom={direction}
                variants={slideVariants}
                initial="enter"
                animate="center"
                exit="exit"
                transition={{ type: "spring", stiffness: 320, damping: 30, mass: 0.9 }}
                className="absolute inset-0"
              >
                <Image
                  src={views[current].src}
                  alt={views[current].alt}
                  fill
                  priority={current === 0}
                  unoptimized
                  className="object-contain object-center"
                  style={{ filter: "drop-shadow(0 6px 18px rgba(0,0,0,0.22))" }}
                />
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Dots */}
          <div className="flex items-center gap-2.5 mt-6 z-10">
            {views.map((v, i) => (
              <motion.button
                key={i}
                onClick={() => go(i)}
                className="relative flex flex-col items-center gap-1.5 group"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                transition={springFast}
              >
                <motion.div
                  className="rounded-full bg-black transition-colors"
                  animate={{
                    width:   i === current ? 24 : 6,
                    height:  6,
                    opacity: i === current ? 1 : 0.2,
                  }}
                  transition={{ type: "spring", stiffness: 400, damping: 28 }}
                />
              </motion.button>
            ))}
          </div>

          {/* Specs bar */}
          <div className="w-full max-w-4xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-x-4 gap-y-6 mt-10 sm:mt-12 z-10">
            {specs.map((s, i) => (
              <motion.div
                key={i}
                className="flex items-center"
                variants={revealVariants}
                initial="hidden"
                animate={isInView ? "visible" : "hidden"}
                custom={0.48 + i * 0.1}
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

      {/* Features */}
      <div className="max-w-[1440px] mx-auto px-6 sm:px-12 lg:px-20 mt-10 md:mt-14">
        <motion.p
          className="text-[10px] font-bold tracking-[0.28em] uppercase text-black/28 mb-6 md:mb-7"
          variants={revealSubtle}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          custom={0.78}
        >
          Équipements à bord
        </motion.p>
        <div className="grid grid-cols-1 gap-x-8 gap-y-3 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-6">
          {features.map((f, i) => (
            <motion.div
              key={f}
              className="flex items-center gap-2.5"
              variants={revealSubtle}
              initial="hidden"
              animate={isInView ? "visible" : "hidden"}
              custom={0.82 + i * 0.07}
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
