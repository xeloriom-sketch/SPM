"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";

const zones = [
  { region: "Ain (01)", cities: ["Tignieu-Jameyzieu", "Ambérieu-en-Bugey", "Bourg-en-Bresse", "Belley"] },
  { region: "Isère (38)", cities: ["Grenoble", "Bourgoin-Jallieu", "Vienne", "Pont-de-Chéruy"] },
  { region: "Rhône (69)", cities: ["Lyon", "Villeurbanne", "Bron", "Décines-Charpieu"] },
  { region: "France entière", cities: ["Paris", "Marseille", "Bordeaux", "Genève (CH)"] },
];

const airports = [
  { name: "Lyon Saint-Exupéry", code: "LYS", dist: "~35 min" },
  { name: "Genève-Cointrin", code: "GVA", dist: "~1h30" },
  { name: "Gare Part-Dieu", code: "TGV", dist: "~40 min" },
  { name: "Gare Perrache", code: "SNCF", dist: "~45 min" },
  { name: "Gare Ambérieu", code: "SNCF", dist: "~15 min" },
];

export default function Coverage() {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="zone" className="w-full bg-white py-24 px-6 sm:px-10 lg:px-16">
      <div ref={ref} className="max-w-[1440px] mx-auto">
        {/* Header */}
        <div className="mb-16">
          <motion.p
            className="text-xs uppercase tracking-[0.2em] text-mutedc mb-3"
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : {}}
            transition={{ duration: 0.5 }}
          >
            Zone de couverture
          </motion.p>
          <div className="overflow-hidden">
            <motion.h2
              className="font-sans text-4xl font-black tracking-tighter text-dark sm:text-5xl lg:text-6xl max-w-2xl"
              initial={{ y: "100%" }}
              animate={isInView ? { y: 0 } : {}}
              transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
            >
              Je me déplace<br />
              <span className="text-mutedc">partout en France</span>
            </motion.h2>
          </div>
        </div>

        <div className="grid grid-cols-1 gap-6 lg:grid-cols-[1.1fr_0.9fr]">
          {/* Zone cards */}
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
            {zones.map((z, i) => (
              <motion.div
                key={z.region}
                className="group rounded-2xl border border-borderc bg-white p-5 hover:border-dark/30 transition-colors"
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ type: "spring", stiffness: 120, damping: 20, delay: i * 0.08 }}
              >
                <div className="flex items-center gap-2 mb-3">
                  <span className="h-1.5 w-1.5 rounded-full bg-lime-dark" />
                  <p className="text-xs font-bold uppercase tracking-wide text-dark">{z.region}</p>
                </div>
                <div className="flex flex-wrap gap-1.5">
                  {z.cities.map((city) => (
                    <span key={city} className="rounded-full bg-surface px-2.5 py-1 text-xs text-mutedc">
                      {city}
                    </span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>

          {/* Right panel */}
          <div className="flex flex-col gap-4">
            {/* Airports */}
            <motion.div
              className="rounded-2xl bg-dark p-6 flex-1"
              initial={{ opacity: 0, x: 30 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ type: "spring", stiffness: 100, damping: 20, delay: 0.2 }}
            >
              <p className="text-xs uppercase tracking-[0.2em] text-white/30 mb-4">Aéroports & Gares</p>
              <div className="flex flex-col gap-2">
                {airports.map((a, i) => (
                  <motion.div
                    key={a.name}
                    className="flex items-center justify-between rounded-xl bg-white/5 px-4 py-3 hover:bg-white/10 transition-colors"
                    initial={{ opacity: 0, x: 20 }}
                    animate={isInView ? { opacity: 1, x: 0 } : {}}
                    transition={{ type: "spring", stiffness: 150, damping: 22, delay: 0.3 + i * 0.06 }}
                  >
                    <div className="flex items-center gap-3">
                      <span className="rounded-md bg-lime px-1.5 py-0.5 text-[10px] font-black text-dark">{a.code}</span>
                      <span className="text-sm text-white/70">{a.name}</span>
                    </div>
                    <span className="text-xs text-white/30">{a.dist}</span>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            {/* Google Map */}
            <motion.div
              className="overflow-hidden rounded-2xl border border-borderc"
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ type: "spring", stiffness: 100, damping: 20, delay: 0.4 }}
            >
              <iframe
                title="Tignieu-Jameyzieu"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d22315.2!2d5.17!3d45.72!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47f46e6c8c8c8c8c%3A0x0!2sTignieu-Jameyzieu!5e0!3m2!1sfr!2sfr!4v1700000000000"
                width="100%"
                height="180"
                style={{ border: 0, display: "block", filter: "grayscale(100%) contrast(1.1)" }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
              <div className="flex items-center justify-between bg-surface px-4 py-3">
                <div>
                  <p className="text-xs font-semibold text-dark">Tignieu-Jameyzieu</p>
                  <p className="text-[10px] text-mutedc">Ain (01) · Auvergne-Rhône-Alpes</p>
                </div>
                <a href="#contact" className="rounded-full bg-dark px-3 py-1.5 text-xs font-bold text-white hover:bg-dark/80 transition-colors">
                  Devis →
                </a>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
