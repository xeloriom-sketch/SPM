"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { ArrowRight } from "lucide-react";
import SplitText from "@/components/ui/SplitText";

const zones = [
  { region: "Ain (01)", cities: ["Tignieu", "Ambérieu", "Bourg", "Belley"] },
  { region: "Isère (38)", cities: ["Grenoble", "Bourgoin-Jallieu", "Vienne", "Pont-de-Chéruy"] },
  { region: "Rhône (69)", cities: ["Lyon", "Villeurbanne", "Bron", "Décines"] },
  { region: "France entière", cities: ["Paris", "Marseille", "Bordeaux", "Genève (CH)"] },
];

const airports = [
  { name: "Lyon Saint-Exupéry", code: "LYS", dist: "~35 min" },
  { name: "Genève-Cointrin", code: "GVA", dist: "~1h30" },
  { name: "Gare Part-Dieu", code: "TGV", dist: "~40 min" },
  { name: "Gare Perrache", code: "SNCF", dist: "~45 min" },
];

export default function Coverage() {
  const containerRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(containerRef, { once: true, margin: "-100px" });

  return (
      <section ref={containerRef} id="zone" className="w-full bg-white py-16 sm:py-20 font-sans">
        <div className="max-w-[1440px] mx-auto px-6 sm:px-12 lg:px-20">

          {/* Header */}
          <div className="text-center max-w-2xl mx-auto mb-20">
            <h2 className="text-3xl sm:text-4xl font-medium tracking-tight text-black mb-4">
              <SplitText text="Zone de Couverture" mode="word" />
            </h2>
            <motion.p
                className="text-xs sm:text-sm text-[#555555] leading-relaxed font-normal"
                initial={{ opacity: 0, y: 15 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.8, delay: 0.25 }}
            >
              Basé à Tignieu-Jameyzieu, notre service se déploie à l'échelle régionale
              et nationale pour garantir un confort optimal à chaque trajet.
            </motion.p>
          </div>

          {/* ── MOSAÏQUE ASYMÉTRIQUE (BENTO GRID - Style image_4a1bc7.jpg) ── */}
          <div className="grid grid-cols-1 md:grid-cols-12 gap-6 lg:gap-8">

            {/* BLOC 1 : Régions Desservies (Colonne gauche - Large) */}
            <motion.div
                className="md:col-span-7 bg-[#fbfbfb] rounded-[24px] p-8 lg:p-10 flex flex-col justify-between min-h-[380px] border border-black/[0.02]"
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.8, delay: 0.2 }}
            >
              <div>
              <span className="text-[10px] font-bold tracking-widest uppercase text-black/30 block mb-8">
                Régions Référentes
              </span>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-6">
                  {zones.map((z) => (
                      <div key={z.region} className="flex flex-col">
                        <p className="text-xs font-semibold text-black tracking-wide mb-2 uppercase">
                          {z.region}
                        </p>
                        <p className="text-xs text-[#777777] leading-relaxed">
                          {z.cities.join(" · ")}
                        </p>
                      </div>
                  ))}
                </div>
              </div>

              <div className="mt-8">
                <a
                    href="#contact"
                    className="group inline-flex items-center gap-4 rounded-full bg-black pl-5 pr-1.5 py-1.5 text-[11px] font-medium tracking-wider text-white transition-all hover:bg-[#111111]"
                >
                  <span>Calculer l'itinéraire</span>
                  <div className="flex h-7 w-7 items-center justify-center rounded-full bg-white text-black transition-transform duration-300 group-hover:translate-x-0.5">
                    <ArrowRight className="h-3.5 w-3.5 stroke-[2.5]" />
                  </div>
                </a>
              </div>
            </motion.div>

            {/* BLOC 2 : Carte interactive Google Maps (Colonne droite - Étroite) */}
            <motion.div
                className="md:col-span-5 relative bg-[#f3f3f3] rounded-[24px] overflow-hidden min-h-[280px] sm:min-h-[380px]"
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.8, delay: 0.3 }}
            >
              <iframe
                  title="Tignieu-Jameyzieu"
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d22315.2!2d5.17!3d45.72!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47f46e6c8c8c8c8c%3A0x0!2sTignieu-Jameyzieu!5e0!3m2!1sfr!2sfr!4v1700000000000"
                  className="absolute inset-0 w-full h-full object-cover"
                  style={{ border: 0, filter: "grayscale(100%) contrast(1.1) brightness(0.95)" }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
              />
              {/* Overlay d'information discret en bas de la carte */}
              <div className="absolute bottom-5 inset-x-5 bg-white/80 backdrop-blur-md rounded-xl p-4 flex justify-between items-center border border-white/20 shadow-sm">
                <div>
                  <p className="text-[11px] font-bold text-black tracking-wide uppercase">Ancrage Local</p>
                  <p className="text-[10px] text-[#555555]">Tignieu-Jameyzieu · France</p>
                </div>
                <span className="text-[10px] font-semibold text-black/40">01 / 38 / 69</span>
              </div>
            </motion.div>

            {/* BLOC 3 : Hubs Transports - Gares & Aéroports (Plein écran horizontal en bas) */}
            <motion.div
                className="md:col-span-12 bg-[#fbfbfb] rounded-[24px] p-8 lg:p-10 border border-black/[0.02]"
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.8, delay: 0.4 }}
            >
            <span className="text-[10px] font-bold tracking-widest uppercase text-black/30 block mb-6">
              Liaisons Gares & Aéroports
            </span>

              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                {airports.map((a, i) => (
                    <div key={a.name} className="flex items-center">
                      {/* Ligne séparatrice verticale entre les gares (desktop uniquement) */}
                      {i !== 0 && (
                          <div className="hidden lg:block h-8 w-px bg-black/10 mr-8 self-center" />
                      )}
                      <div className="flex flex-col flex-1">
                        <div className="flex items-baseline justify-between mb-1.5">
                          <span className="text-xs font-bold text-black tracking-tight">{a.name}</span>
                          <span className="text-[10px] font-mono text-black/40">[{a.code}]</span>
                        </div>
                        <span className="text-[11px] text-[#777777]">Prise en charge {a.dist}</span>
                      </div>
                    </div>
                ))}
              </div>
            </motion.div>

          </div>
        </div>
      </section>
  );
}