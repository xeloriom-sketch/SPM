"use client";

import { useRef } from "react";
import { motion, useInView, useScroll, useTransform } from "framer-motion";
import Image from "next/image";

const specs = [
  { value: "7", unit: "places", label: "SUV confort" },
  { value: "1", unit: "remorque", label: "Équipement unique" },
  { value: "24", unit: "h/24", label: "Disponible" },
  { value: "∞", unit: "km", label: "Toute la France" },
];

const features = [
  "Climatisation bi-zone automatique",
  "Wi-Fi haute vitesse à bord",
  "Attache-remorque homologuée",
  "Assurance professionnelle taxi",
  "Sièges confortables grand espace",
  "Chargement USB / sans fil",
];

function Counter({ value, unit }: { value: string; unit: string }) {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true });
  return (
    <div ref={ref} className="flex flex-col">
      <motion.span
        className="font-sans text-5xl font-black tracking-tighter text-dark sm:text-6xl"
        initial={{ opacity: 0, y: 30 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ type: "spring", stiffness: 120, damping: 20, delay: 0.1 }}
      >
        {value}
        <span className="text-lime-dark text-3xl sm:text-4xl">{unit}</span>
      </motion.span>
    </div>
  );
}

export default function Vehicle() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const imageRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-100px" });

  const { scrollYProgress } = useScroll({
    target: imageRef,
    offset: ["start end", "end start"],
  });
  const imageY = useTransform(scrollYProgress, [0, 1], ["-8%", "8%"]);

  return (
    <section id="vehicule" ref={sectionRef} className="w-full bg-surface overflow-hidden py-24">
      <div className="max-w-[1440px] mx-auto px-6 sm:px-10 lg:px-16">
        {/* Header */}
        <div className="mb-16 flex flex-col gap-3">
          <motion.p
            className="text-xs uppercase tracking-[0.2em] text-mutedc"
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : {}}
            transition={{ duration: 0.5 }}
          >
            Flotte
          </motion.p>
          <div className="overflow-hidden">
            <motion.h2
              className="font-sans text-4xl font-black tracking-tighter text-dark sm:text-5xl lg:text-6xl"
              initial={{ y: "100%" }}
              animate={isInView ? { y: 0 } : {}}
              transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
            >
              Volkswagen Tiguan <br className="hidden sm:block" />
              <span className="text-mutedc">SUV 7 Places</span>
            </motion.h2>
          </div>
        </div>

        {/* Two columns */}
        <div className="grid grid-cols-1 gap-8 lg:grid-cols-2 lg:items-center">
          {/* Left — image with parallax */}
          <div ref={imageRef} className="relative overflow-hidden rounded-3xl aspect-[4/3]">
            <motion.div className="absolute inset-0 scale-110" style={{ y: imageY }}>
              <Image
                src="https://images.unsplash.com/photo-1533473359331-0135ef1b58bf?auto=format&fit=crop&w=1200&q=85"
                alt="Volkswagen Tiguan 7 places — Taxi Tignieu"
                fill
                className="object-cover"
              />
            </motion.div>
            {/* Overlay badge */}
            <div className="absolute bottom-5 left-5 right-5">
              <div className="inline-flex items-center gap-2 rounded-full bg-white/90 px-4 py-2 backdrop-blur-sm">
                <span className="h-2 w-2 rounded-full bg-lime-dark" />
                <span className="text-xs font-semibold text-dark">Taxi conventionné CPAM</span>
              </div>
            </div>
          </div>

          {/* Right — specs + features */}
          <div className="flex flex-col gap-8">
            {/* Stats row */}
            <div className="grid grid-cols-2 gap-5 sm:grid-cols-4 lg:grid-cols-2">
              {specs.map((s, i) => (
                <motion.div
                  key={s.label}
                  className="flex flex-col gap-1 rounded-2xl bg-white p-5"
                  initial={{ opacity: 0, y: 30, scale: 0.95 }}
                  animate={isInView ? { opacity: 1, y: 0, scale: 1 } : {}}
                  transition={{ type: "spring", stiffness: 180, damping: 22, delay: 0.2 + i * 0.08 }}
                >
                  <Counter value={s.value} unit={s.unit} />
                  <p className="text-xs text-mutedc">{s.label}</p>
                </motion.div>
              ))}
            </div>

            {/* Features list */}
            <div className="rounded-2xl bg-dark p-6">
              <p className="mb-4 text-xs uppercase tracking-[0.2em] text-white/30">Équipements à bord</p>
              <ul className="flex flex-col gap-3">
                {features.map((f, i) => (
                  <motion.li
                    key={f}
                    className="flex items-center gap-3 text-sm text-white/75"
                    initial={{ opacity: 0, x: -20 }}
                    animate={isInView ? { opacity: 1, x: 0 } : {}}
                    transition={{ type: "spring", stiffness: 200, damping: 25, delay: 0.4 + i * 0.07 }}
                  >
                    <span className="h-1.5 w-1.5 shrink-0 rounded-full bg-lime" />
                    {f}
                  </motion.li>
                ))}
              </ul>
            </div>

            {/* CTA */}
            <motion.a
              href="#contact"
              className="group flex items-center justify-between rounded-2xl bg-lime p-5 transition-all hover:bg-lime-dark"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              transition={{ type: "spring", stiffness: 400, damping: 25 }}
            >
              <span className="font-bold text-dark">Réserver ce véhicule</span>
              <span className="grid h-8 w-8 place-items-center rounded-full bg-dark text-white text-sm font-bold group-hover:rotate-45 transition-transform duration-300">→</span>
            </motion.a>
          </div>
        </div>
      </div>
    </section>
  );
}
