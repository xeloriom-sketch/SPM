"use client";

import { useRef, useEffect, useState } from "react";
import { motion, useInView, useScroll, useTransform, useSpring } from "framer-motion";
import { ArrowRight } from "lucide-react";
import Image from "next/image";
import SplitText from "@/components/ui/SplitText";

const stats = [
  { value: 4,    suffix: "",   label: "Services exclusifs" },
  { value: 47,   suffix: "+",  label: "Avis 5 étoiles" },
  { value: 7,    suffix: "j/7",label: "Disponibilité" },
];

const services = [
  { number: "01", title: "Transferts Gare & Aéroport", desc: "Lyon Saint-Exupéry, Part-Dieu, Perrache, Genève. Prise en charge à domicile, suivi des vols en temps réel." },
  { number: "02", title: "Colis & Courriers Urgents", desc: "Livraison rapide et sécurisée de colis et lettres urgentes. Traçabilité garantie partout en France." },
  { number: "03", title: "Remorque à Disposition", desc: "Attache-remorque homologuée. Transport de matériel lourd, véhicules en panne, déménagements." },
  { number: "04", title: "Déplacements France Entière", desc: "De Lyon à Paris, Marseille, Bordeaux, Genève. Longue distance sur devis, confort absolu." },
];

/* Animated number counter */
function Counter({ value, suffix, isInView }: { value: number; suffix: string; isInView: boolean }) {
  const [display, setDisplay] = useState(0);

  useEffect(() => {
    if (!isInView) return;
    let start = 0;
    const duration = 1200;
    const step = 16;
    const increment = value / (duration / step);
    const timer = setInterval(() => {
      start += increment;
      if (start >= value) {
        setDisplay(value);
        clearInterval(timer);
      } else {
        setDisplay(Math.floor(start));
      }
    }, step);
    return () => clearInterval(timer);
  }, [isInView, value]);

  return <>{display}{suffix}</>;
}

export default function Services() {
  const containerRef = useRef<HTMLDivElement>(null);
  const imageRef     = useRef<HTMLDivElement>(null);
  const isInView     = useInView(containerRef, { once: true, margin: "-80px" });

  /* Parallax on car image */
  const { scrollYProgress } = useScroll({ target: imageRef, offset: ["start end", "end start"] });
  const rawY     = useTransform(scrollYProgress, [0, 1], [50, -50]);
  const rawScale = useTransform(scrollYProgress, [0, 0.5, 1], [1.04, 1, 1.04]);
  const imageY   = useSpring(rawY,     { stiffness: 42, damping: 18 });
  const imageScale = useSpring(rawScale, { stiffness: 42, damping: 18 });

  return (
    <section
      ref={containerRef}
      id="services"
      className="w-full overflow-hidden bg-[#f8f9fa] py-20 md:py-36 font-sans"
    >
      <div className="max-w-[1440px] mx-auto px-6 sm:px-12 lg:px-20">

        {/* Top: text + car */}
        <div className="grid grid-cols-1 gap-10 lg:grid-cols-12 lg:gap-6 items-center mb-16 lg:mb-32">

          {/* Left — text */}
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
              initial={{ opacity: 0, y: 18 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.3 }}
            >
              Volkswagen Tiguan 7 places, conventionné CPAM. Disponible 7j/7 pour vos
              transferts aéroport, transports médicaux, colis urgents et déplacements
              longue distance dans toute la France. Devis gratuit, réponse sous 2h.
            </motion.p>

            {/* Stats with count-up */}
            <div className="grid grid-cols-3 gap-2 sm:flex sm:items-center sm:gap-0 mb-10 sm:mb-14">
              {stats.map((stat, i) => (
                <motion.div
                  key={i}
                  className="flex items-center"
                  initial={{ opacity: 0, y: 22 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.65, delay: 0.35 + i * 0.1, ease: [0.16, 1, 0.3, 1] }}
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
              initial={{ opacity: 0, scale: 0.92 }}
              animate={isInView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.65, delay: 0.7 }}
            >
              <a
                href="#contact"
                className="group inline-flex items-center gap-4 rounded-full bg-black pl-6 pr-1.5 py-1.5 text-[11px] font-semibold tracking-[0.2em] uppercase text-white transition-all hover:bg-[#111] hover:scale-[1.02] active:scale-[0.98]"
              >
                <span>Demander un devis</span>
                <div className="flex h-8 w-8 items-center justify-center rounded-full bg-white text-black transition-transform duration-300 group-hover:translate-x-0.5">
                  <ArrowRight className="h-4 w-4 stroke-[2.5]" />
                </div>
              </a>
            </motion.div>
          </div>

          {/* Right — car with parallax */}
          <div
            ref={imageRef}
            className="lg:col-span-7 relative w-full overflow-hidden lg:-mr-20 xl:-mr-32"
            style={{ height: "clamp(280px, 48vw, 520px)" }}
          >
            <div
              className="absolute bottom-2 left-1/2 -translate-x-1/2 w-[60%] pointer-events-none"
              style={{ height: 32, background: "radial-gradient(ellipse, rgba(0,0,0,0.09) 0%, transparent 70%)" }}
            />
            <motion.div
              className="relative w-full h-full will-change-transform"
              style={{ y: imageY, scale: imageScale }}
              initial={{ opacity: 0, x: 50 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 1.1, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
            >
              <Image
                src="https://res.cloudinary.com/dkugkfusy/image/upload/v1715934872/cars/models/ouvb1yadbx8zrhvh9kvv.png"
                alt="SPM Volkswagen Tiguan Allspace 7 places"
                fill
                priority
                unoptimized
                sizes="(max-width: 1024px) 100vw, 55vw"
                className="object-contain object-right"
                style={{
                  objectPosition: "70% center",
                  filter: "drop-shadow(0 30px 55px rgba(0,0,0,0.14))",
                }}
              />
            </motion.div>
          </div>
        </div>

        {/* Service cards */}
        <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-4">
          {services.map((s, i) => (
            <motion.a
              key={s.number}
              href="#contact"
              className="group flex flex-col justify-between rounded-[22px] border border-black/[0.06] bg-white p-7 transition-all duration-300 hover:border-black/18 hover:-translate-y-2 hover:shadow-[0_16px_48px_rgba(0,0,0,0.1)]"
              initial={{ opacity: 0, y: 32 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.7, delay: 0.22 + i * 0.1, ease: [0.16, 1, 0.3, 1] }}
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
