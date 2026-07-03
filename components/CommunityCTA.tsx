"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import Image from "next/image";
import { ArrowRight, Phone } from "lucide-react";
import { sitePath } from "@/lib/site-path";

export default function CommunityCTA() {
  const containerRef = useRef<HTMLDivElement>(null);
  const isInView     = useInView(containerRef, { once: true, margin: "-100px" });

  return (
    <section ref={containerRef} className="w-full bg-white py-16 font-sans">
      <div className="max-w-[1440px] mx-auto px-6 sm:px-12 lg:px-20">

        <motion.div
          className="relative w-full aspect-[21/9] min-h-[380px] rounded-[32px] overflow-hidden bg-black flex flex-col items-center justify-center text-center px-6 sm:px-12 lg:px-24"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
        >
          <div className="absolute inset-0">
            <Image src={sitePath("/heroImage/hero-services.webp")} alt="" fill className="object-cover" sizes="100vw" />
          </div>

          {/* Overlay */}
          <div className="absolute inset-0 bg-black/65" />
          <div className="absolute inset-0 bg-gradient-to-b from-black/10 via-transparent to-black/30" />

          {/* Contenu */}
          <div className="relative z-10 max-w-2xl flex flex-col items-center">

            <motion.span
              className="text-[10px] font-bold tracking-[0.3em] uppercase text-white/35 mb-5 block"
              initial={{ opacity: 0, y: 14 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.1 }}
            >
              Disponible maintenant
            </motion.span>

            <motion.h2
              className="text-2xl sm:text-3xl md:text-4xl font-medium tracking-tight text-white mb-4 leading-tight"
              initial={{ opacity: 0, y: 15 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.15 }}
            >
              Votre prochain trajet,<br />à portée d&apos;appel
            </motion.h2>

            <motion.p
              className="text-[11px] sm:text-xs text-white/60 leading-relaxed font-normal max-w-md mb-8 tracking-wide"
              initial={{ opacity: 0, y: 15 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.25 }}
            >
              24h/24, 7j/7 — jours fériés inclus. Un chauffeur professionnel, un devis gratuit
              sous 2h, un tarif fixe garanti. Aucune surprise à l&apos;arrivée.
            </motion.p>

            <motion.div
              className="flex flex-wrap justify-center gap-3"
              initial={{ opacity: 0, scale: 0.95 }}
              animate={isInView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.6, delay: 0.35 }}
            >
              <a
                href="tel:+33767751898"
                title="Appeler SPM Taxi"
                className="group inline-flex items-center gap-3 rounded-full bg-white pl-5 pr-1.5 py-1.5 text-[11px] font-semibold tracking-wider text-black transition-all duration-300 hover:bg-white/90"
              >
                <Phone className="h-3.5 w-3.5 stroke-[2.5]" />
                <span>07 67 75 18 98</span>
                <div className="flex h-7 w-7 items-center justify-center rounded-full bg-black text-white transition-transform duration-300 group-hover:translate-x-0.5">
                  <ArrowRight className="h-3.5 w-3.5 stroke-[2.5]" />
                </div>
              </a>
              <a
                href="#contact"
                title="Demander un devis gratuit"
                className="inline-flex items-center gap-2 rounded-full border border-white/25 text-white px-5 py-2 text-[11px] font-semibold tracking-wider hover:border-white/50 transition-colors"
              >
                Devis gratuit
              </a>
            </motion.div>

          </div>

        </motion.div>

      </div>
    </section>
  );
}
