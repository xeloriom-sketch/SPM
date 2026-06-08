"use client";

import { useRef, useEffect, useState } from "react";
import { motion, useInView } from "framer-motion";
import { ArrowRight } from "lucide-react";
import Image from "next/image";
import SplitText from "@/components/ui/SplitText";
import { spring, springBouncy, springFast, revealVariants, revealSubtle } from "@/lib/motion";

const stats = [
  { value: 4,    suffix: "",    label: "Services exclusifs" },
  { value: 47,   suffix: "+",   label: "Avis 5 étoiles" },
  { value: 7,    suffix: "j/7", label: "Disponibilité" },
];

const services = [
  { number: "01", title: "Transferts Gare & Aéroport", desc: "Lyon Saint-Exupéry, Part-Dieu, Perrache, Genève. Prise en charge à domicile, suivi des vols en temps réel." },
  { number: "02", title: "Colis & Courriers Urgents", desc: "Livraison rapide et sécurisée de colis et lettres urgentes. Traçabilité garantie partout en France." },
  { number: "03", title: "Remorque à Disposition", desc: "Attache-remorque homologuée. Transport de matériel lourd, véhicules en panne, déménagements." },
  { number: "04", title: "Déplacements France Entière", desc: "De Lyon à Paris, Marseille, Bordeaux, Genève. Longue distance sur devis, confort absolu." },
];

function Counter({ value, suffix, isInView }: { value: number; suffix: string; isInView: boolean }) {
  const [display, setDisplay] = useState(0);
  useEffect(() => {
    if (!isInView) return;
    let start = 0;
    const duration = 1100;
    const step = 16;
    const increment = value / (duration / step);
    const timer = setInterval(() => {
      start += increment;
      if (start >= value) { setDisplay(value); clearInterval(timer); }
      else setDisplay(Math.floor(start));
    }, step);
    return () => clearInterval(timer);
  }, [isInView, value]);
  return <>{display}{suffix}</>;
}

export default function Services() {
  const containerRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(containerRef, { once: true, margin: "-80px" });

  return (
    <section ref={containerRef} id="services" className="w-full overflow-hidden bg-[#f8f9fa] py-20 md:py-36 font-sans">
      <div className="max-w-[1440px] mx-auto px-6 sm:px-12 lg:px-20">

        <div className="grid grid-cols-1 gap-10 lg:grid-cols-12 lg:gap-6 items-center mb-16 lg:mb-32">

          {/* Left */}
          <div className="lg:col-span-5 flex flex-col justify-center z-10">
            <div className="mb-7">
              <h2 className="font-sans font-medium text-black tracking-tight leading-tight text-4xl sm:text-5xl lg:text-[3.4rem]">
                <SplitText text="SPM — Taxi" delay={0} />
                <br />
                <span className="text-black/30">
                  <SplitText text="Conventionné" delay={0.1} />
                </span>
              </h2>
            </div>

            <motion.p
              className="text-sm leading-relaxed text-[#555] max-w-sm font-normal mb-10 sm:mb-14"
              variants={revealSubtle}
              initial="hidden"
              animate={isInView ? "visible" : "hidden"}
              custom={0.28}
            >
              Volkswagen Tiguan 7 places, conventionné CPAM. Disponible 7j/7 pour vos
              transferts aéroport, transports médicaux, colis urgents et déplacements
              longue distance dans toute la France.
            </motion.p>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-2 sm:flex sm:items-center sm:gap-0 mb-10 sm:mb-14">
              {stats.map((stat, i) => (
                <motion.div
                  key={i}
                  className="flex items-center"
                  variants={revealVariants}
                  initial="hidden"
                  animate={isInView ? "visible" : "hidden"}
                  custom={0.32 + i * 0.1}
                >
                  {i !== 0 && <div className="hidden sm:block h-12 w-px bg-black/12 mx-8 lg:mx-10" />}
                  <div className="flex flex-col">
                    <span className="text-[9px] sm:text-[10px] tracking-widest text-[#888] mb-1 sm:mb-1.5 font-semibold uppercase">
                      {stat.label}
                    </span>
                    <span className="text-2xl sm:text-3xl md:text-4xl font-bold tracking-tight text-black tabular-nums">
                      <Counter value={stat.value} suffix={stat.suffix} isInView={isInView} />
                    </span>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* CTA */}
            <motion.div
              variants={revealSubtle}
              initial="hidden"
              animate={isInView ? "visible" : "hidden"}
              custom={0.62}
            >
              <motion.a
                href="#contact"
                className="group inline-flex items-center gap-4 rounded-full bg-black pl-6 pr-1.5 py-1.5 text-[11px] font-semibold tracking-[0.2em] uppercase text-white"
                whileHover={{ scale: 1.04, y: -2 }}
                whileTap={{ scale: 0.96 }}
                transition={springFast}
              >
                <span>Demander un devis</span>
                <div className="flex h-8 w-8 items-center justify-center rounded-full bg-white text-black transition-transform duration-300 group-hover:translate-x-0.5">
                  <ArrowRight className="h-4 w-4 stroke-[2.5]" />
                </div>
              </motion.a>
            </motion.div>
          </div>

          {/* Right — car */}
          <motion.div
            className="lg:col-span-7 relative w-full overflow-hidden lg:-mr-20 xl:-mr-32"
            style={{ height: "clamp(280px, 48vw, 520px)" }}
            variants={revealVariants}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            custom={0.18}
          >
            <Image
              src="/image/tiguan-front-quarter.png"
              alt="SPM Volkswagen Tiguan Allspace 7 places"
              fill
              priority
              unoptimized
              sizes="(max-width: 1024px) 100vw, 55vw"
              className="object-contain object-right"
              style={{ objectPosition: "70% center", filter: "drop-shadow(0 6px 20px rgba(0,0,0,0.18))" }}
            />
          </motion.div>
        </div>

        {/* Service cards */}
        <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-4">
          {services.map((s, i) => (
            <motion.a
              key={s.number}
              href="#contact"
              className="group flex flex-col justify-between rounded-[22px] border border-black/[0.06] bg-white p-7"
              variants={revealVariants}
              initial="hidden"
              animate={isInView ? "visible" : "hidden"}
              custom={0.18 + i * 0.1}
              whileHover={{ y: -10, scale: 1.02, boxShadow: "0 20px 60px rgba(0,0,0,0.12)" }}
              whileTap={{ scale: 0.97 }}
              transition={spring}
            >
              <div>
                <span className="mb-5 block text-[10px] font-bold tracking-[0.25em] text-black/22 uppercase">
                  {s.number}
                </span>
                <h3 className="font-sans text-base font-semibold tracking-tight text-black leading-snug mb-3">
                  {s.title}
                </h3>
                <p className="text-xs leading-relaxed text-[#777]">{s.desc}</p>
              </div>
              <div className="mt-7 flex h-8 w-8 items-center justify-center rounded-full border border-black/10 text-black/28 transition-all duration-300 group-hover:border-black group-hover:bg-black group-hover:text-white">
                <ArrowRight className="h-3.5 w-3.5" />
              </div>
            </motion.a>
          ))}
        </div>

      </div>
    </section>
  );
}

