"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";

const testimonials = [
  { name: "Marie-Claire D.", city: "Lyon 6e", service: "Aéroport", text: "Ponctuel, professionnel et très agréable. Le Tiguan est spacieux et confortable. Je ne changerais pour rien au monde." },
  { name: "Éric B.", city: "Bourg-en-Bresse", service: "Transport médical", text: "Toujours à l'heure, patient et attentionné. Le véhicule est impeccable. Parfait pour mes soins réguliers." },
  { name: "Sophie & Julien", city: "Grenoble", service: "Longue distance", text: "Lyon-Paris pour un voyage d'affaires. Prix transparent, voiture grande, on a pu travailler pendant le trajet." },
  { name: "Thomas R.", city: "Tignieu-Jameyzieu", service: "Colis urgent", text: "Service rapide, efficace. Le colis est arrivé en parfait état. Je ferai de nouveau appel sans hésiter." },
  { name: "Nathalie P.", city: "Ambérieu", service: "Gare", text: "Super service pour mes trajets Part-Dieu. Le chauffeur s'adapte aux retards de train. Très appréciable." },
  { name: "Marc-Antoine L.", city: "Bourgoin-Jallieu", service: "Remorque", text: "J'avais besoin de transporter du matériel. La remorque disponible était parfaite. Service unique dans la région." },
];

const row1 = [...testimonials, ...testimonials];
const row2 = [...testimonials, ...testimonials].reverse();

export default function Testimonials() {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section className="w-full overflow-hidden bg-white py-20 md:py-28 font-sans">

      {/* Header */}
      <div ref={ref} className="max-w-[1440px] mx-auto px-6 sm:px-12 lg:px-20 mb-14">
        <div className="text-center max-w-2xl mx-auto">
          <motion.h2
            className="text-3xl sm:text-4xl font-medium tracking-tight text-black mb-4"
            initial={{ opacity: 0, y: 15 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8 }}
          >
            Ils me font confiance
          </motion.h2>
          <motion.div
            className="flex items-center justify-center gap-2"
            initial={{ opacity: 0, y: 10 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.2 }}
          >
            <div className="flex gap-0.5">
              {[...Array(5)].map((_, i) => (
                <span key={i} className="text-sm text-black">★</span>
              ))}
            </div>
            <span className="text-sm font-semibold text-black">5.0</span>
            <span className="text-xs text-[#888888]">· 47 avis Google</span>
          </motion.div>
        </div>
      </div>

      {/* Marquee row 1 */}
      <div className="relative mb-3">
        <div className="pointer-events-none absolute bottom-0 left-0 top-0 z-10 w-24 bg-gradient-to-r from-white to-transparent" />
        <div className="pointer-events-none absolute bottom-0 right-0 top-0 z-10 w-24 bg-gradient-to-l from-white to-transparent" />
        <div className="flex gap-3">
          <motion.div
            className="flex min-w-max gap-3"
            animate={{ x: ["0%", "-50%"] }}
            transition={{ duration: 34, repeat: Infinity, ease: "linear" }}
          >
            {row1.map((t, i) => (
              <div
                key={i}
                className="w-[280px] shrink-0 rounded-[18px] border border-black/[0.06] bg-[#f8f9fa] p-5"
              >
                <div className="mb-3 flex items-center gap-2.5">
                  <div className="grid h-8 w-8 shrink-0 place-items-center rounded-full bg-black text-[11px] font-bold text-white">
                    {t.name.charAt(0)}
                  </div>
                  <div>
                    <p className="text-xs font-semibold text-black">{t.name}</p>
                    <p className="text-[10px] text-[#888888]">{t.city} · {t.service}</p>
                  </div>
                </div>
                <div className="mb-2.5 flex gap-0.5">
                  {[...Array(5)].map((_, i) => (
                    <span key={i} className="text-[10px] text-black">★</span>
                  ))}
                </div>
                <p className="text-xs leading-relaxed text-[#555555]">{t.text}</p>
              </div>
            ))}
          </motion.div>
        </div>
      </div>

      {/* Marquee row 2 */}
      <div className="relative">
        <div className="pointer-events-none absolute bottom-0 left-0 top-0 z-10 w-24 bg-gradient-to-r from-white to-transparent" />
        <div className="pointer-events-none absolute bottom-0 right-0 top-0 z-10 w-24 bg-gradient-to-l from-white to-transparent" />
        <div className="flex gap-3">
          <motion.div
            className="flex min-w-max gap-3"
            animate={{ x: ["-50%", "0%"] }}
            transition={{ duration: 28, repeat: Infinity, ease: "linear" }}
          >
            {row2.map((t, i) => (
              <div
                key={i}
                className="w-[280px] shrink-0 rounded-[18px] border border-black/[0.04] bg-[#f8f9fa] p-5"
              >
                <div className="mb-3 flex items-center gap-2.5">
                  <div className="grid h-8 w-8 shrink-0 place-items-center rounded-full border border-black/10 text-[11px] font-bold text-black/50">
                    {t.name.charAt(0)}
                  </div>
                  <div>
                    <p className="text-xs font-semibold text-black">{t.name}</p>
                    <p className="text-[10px] text-[#888888]">{t.city} · {t.service}</p>
                  </div>
                </div>
                <div className="mb-2.5 flex gap-0.5">
                  {[...Array(5)].map((_, i) => (
                    <span key={i} className="text-[10px] text-black/30">★</span>
                  ))}
                </div>
                <p className="text-xs leading-relaxed text-[#555555]">{t.text}</p>
              </div>
            ))}
          </motion.div>
        </div>
      </div>

    </section>
  );
}
