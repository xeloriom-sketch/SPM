"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";

const testimonials = [
  { name: "Marie-Claire D.", city: "Lyon 6e", service: "Aéroport", text: "Ponctuel, professionnel et très agréable. Le Tiguan est spacieux et confortable. Je ne changerais pour rien au monde.", rating: 5 },
  { name: "Éric B.", city: "Bourg-en-Bresse", service: "Transport médical", text: "Toujours à l'heure, patient et attentionné. Le véhicule est impeccable. Parfait pour mes soins réguliers.", rating: 5 },
  { name: "Sophie & Julien", city: "Grenoble", service: "Longue distance", text: "Lyon-Paris pour un voyage d'affaires. Prix transparent, voiture grande, on a pu travailler pendant le trajet.", rating: 5 },
  { name: "Thomas R.", city: "Tignieu-Jameyzieu", service: "Colis urgent", text: "Service rapide, efficace. Le colis est arrivé en parfait état. Je ferai de nouveau appel sans hésiter.", rating: 5 },
  { name: "Nathalie P.", city: "Ambérieu", service: "Gare", text: "Super service pour mes trajets Part-Dieu. Le chauffeur s'adapte aux retards de train. Très appréciable.", rating: 5 },
  { name: "Marc-Antoine L.", city: "Bourgoin-Jallieu", service: "Remorque", text: "J'avais besoin de transporter du matériel. La remorque disponible était parfaite. Service unique dans la région.", rating: 5 },
];

const marqueeItems = [...testimonials, ...testimonials];

export default function Testimonials() {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section className="w-full bg-dark overflow-hidden py-24">
      {/* Header */}
      <div ref={ref} className="px-6 sm:px-10 lg:px-16 mb-14 max-w-[1440px] mx-auto">
        <div className="flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
          <div className="overflow-hidden">
            <motion.h2
              className="font-sans text-4xl font-black tracking-tighter text-white sm:text-5xl lg:text-6xl"
              initial={{ y: "100%" }}
              animate={isInView ? { y: 0 } : {}}
              transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
            >
              Ils me font<br />
              <span className="text-white/30">confiance</span>
            </motion.h2>
          </div>
          <motion.div
            className="flex items-center gap-2 rounded-full border border-white/10 px-4 py-2 w-fit"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={isInView ? { opacity: 1, scale: 1 } : {}}
            transition={{ type: "spring", stiffness: 200, damping: 22, delay: 0.3 }}
          >
            <div className="flex gap-0.5 text-lime">
              {[...Array(5)].map((_, i) => <span key={i} className="text-xs">★</span>)}
            </div>
            <span className="text-sm font-bold text-white">5.0</span>
            <span className="text-sm text-white/30">Google</span>
          </motion.div>
        </div>
      </div>

      {/* Marquee */}
      <div className="relative">
        {/* Fade edges */}
        <div className="absolute left-0 top-0 bottom-0 w-24 bg-gradient-to-r from-dark to-transparent z-10 pointer-events-none" />
        <div className="absolute right-0 top-0 bottom-0 w-24 bg-gradient-to-l from-dark to-transparent z-10 pointer-events-none" />

        {/* Row 1 — left */}
        <div className="flex gap-4 mb-4">
          <motion.div
            className="flex gap-4 min-w-max"
            animate={{ x: ["0%", "-50%"] }}
            transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
          >
            {marqueeItems.map((t, i) => (
              <div key={i} className="w-[320px] shrink-0 rounded-2xl border border-white/8 bg-white/5 p-5">
                <div className="flex items-center gap-3 mb-3">
                  <div className="grid h-9 w-9 shrink-0 place-items-center rounded-full bg-lime text-xs font-black text-dark">
                    {t.name.charAt(0)}
                  </div>
                  <div>
                    <p className="text-sm font-bold text-white">{t.name}</p>
                    <p className="text-xs text-white/35">{t.city} · {t.service}</p>
                  </div>
                </div>
                <p className="text-sm leading-relaxed text-white/55">{t.text}</p>
              </div>
            ))}
          </motion.div>
        </div>

        {/* Row 2 — right */}
        <div className="flex gap-4">
          <motion.div
            className="flex gap-4 min-w-max"
            animate={{ x: ["-50%", "0%"] }}
            transition={{ duration: 26, repeat: Infinity, ease: "linear" }}
          >
            {[...marqueeItems].reverse().map((t, i) => (
              <div key={i} className="w-[320px] shrink-0 rounded-2xl border border-white/8 bg-white/5 p-5">
                <div className="flex items-center gap-3 mb-3">
                  <div className="grid h-9 w-9 shrink-0 place-items-center rounded-full bg-white/10 text-xs font-black text-white/60">
                    {t.name.charAt(0)}
                  </div>
                  <div>
                    <p className="text-sm font-bold text-white">{t.name}</p>
                    <p className="text-xs text-white/35">{t.city} · {t.service}</p>
                  </div>
                </div>
                <p className="text-sm leading-relaxed text-white/55">{t.text}</p>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
