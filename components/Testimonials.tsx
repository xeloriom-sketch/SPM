"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import SplitText from "@/components/ui/SplitText";
import { spring, revealSubtle } from "@/lib/motion";

const testimonials = [
  { name: "F.I TAXI",           stars: 5, date: "il y a 6 mois",  text: "Excellent collaborateur. Toujours ponctuel, sérieux et respectueux des clients. Travail de qualité, je recommande sans hésiter." },
  { name: "sabrina selini",     stars: 5, date: "il y a 10 mois", text: "Sérieux, ponctuel, disponible. Trajet très agréable. Conventionné pour tous les trajets médicaux. Je recommande vivement." },
  { name: "Kãte Dbno",         stars: 4, date: "il y a 6 mois",  text: "Taxi très sérieux, trajet agréable même pour un enfant 😊 Chauffeur à l'écoute.. je recommande." },
  { name: "Chloé Burguiere",   stars: 5, date: "il y a 9 mois",  text: "Taxi très accueillant, accepte les personnes en situation de handicap. Je recommande." },
  { name: "SOSO 01",           stars: 5, date: "il y a 11 mois", text: "Taxi très sérieux et ponctuel, à l'écoute de ses clients. Vous pouvez y aller les yeux fermés." },
  { name: "Khalid El ouazzani",stars: 5, date: "il y a 11 mois", text: "Société professionnelle, chauffeur ponctuel. Trajet agréable. Je recommande vivement." },
  { name: "Ibrahim za",        stars: 5, date: "il y a 11 mois", text: "Taxi sérieux, gentil, à l'heure. Je recommande 👍🏾" },
  { name: "ALHAMBRA WEB",      stars: 5, date: "il y a 3 jours", text: "Personne très agréable." },
  { name: "z",                 stars: 5, date: "il y a 8 mois",  text: "Très réactif." },
];

const row1 = [...testimonials, ...testimonials];
const row2 = [...testimonials, ...testimonials].reverse();

function Stars({ count }: { count: number }) {
  return (
    <div className="flex gap-0.5">
      {[1, 2, 3, 4, 5].map((i) => (
        <span key={i} className={`text-[11px] ${i <= count ? "text-black" : "text-black/20"}`}>★</span>
      ))}
    </div>
  );
}

function TestimonialCard({ t, variant = "light" }: { t: typeof testimonials[0]; variant?: "light" | "gray" }) {
  return (
    <motion.div
      className={`w-[260px] sm:w-[290px] shrink-0 rounded-[18px] border p-4 sm:p-5 cursor-default ${
        variant === "gray"
          ? "border-black/[0.04] bg-[#f8f9fa]"
          : "border-black/[0.06] bg-[#f8f9fa]"
      }`}
      whileHover={{ y: -6, scale: 1.02, boxShadow: "0 12px 40px rgba(0,0,0,0.1)" }}
      transition={spring}
    >
      <div className="mb-3 flex items-center gap-2.5">
        <div className={`grid h-8 w-8 shrink-0 place-items-center rounded-full text-[11px] font-bold ${
          variant === "gray" ? "border border-black/10 text-black/50" : "bg-black text-white"
        }`}>
          {t.name.charAt(0).toUpperCase()}
        </div>
        <div>
          <p className="text-xs font-semibold text-black">{t.name}</p>
          <p className="text-[10px] text-[#888888]">{t.date}</p>
        </div>
      </div>
      <div className="mb-2.5">
        <Stars count={t.stars} />
      </div>
      <p className="text-xs leading-relaxed text-[#555555]">{t.text}</p>
    </motion.div>
  );
}

export default function Testimonials() {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section className="w-full overflow-hidden bg-white py-20 md:py-28 font-sans">

      <div ref={ref} className="max-w-[1440px] mx-auto px-6 sm:px-12 lg:px-20 mb-14">
        <div className="text-center max-w-2xl mx-auto">
          <h2 className="text-3xl sm:text-4xl font-medium tracking-tight text-black mb-4">
            <SplitText text="Ils me font confiance" mode="word" />
          </h2>
          <motion.div
            className="flex items-center justify-center gap-2"
            variants={revealSubtle}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            custom={0.3}
          >
            <div className="flex gap-0.5">
              {[...Array(5)].map((_, i) => (
                <motion.span
                  key={i}
                  className="text-sm text-black"
                  initial={{ opacity: 0, scale: 0, rotate: -30 }}
                  animate={isInView ? { opacity: 1, scale: 1, rotate: 0 } : {}}
                  transition={{ type: "spring", stiffness: 480, damping: 22, delay: 0.4 + i * 0.06 }}
                >
                  ★
                </motion.span>
              ))}
            </div>
            <span className="text-sm font-semibold text-black">4,9</span>
            <span className="text-xs text-[#888888]">· 9 avis Google vérifiés</span>
          </motion.div>
        </div>
      </div>

      {/* Row 1 — left to right */}
      <div className="relative mb-3">
        <div className="pointer-events-none absolute bottom-0 left-0 top-0 z-10 w-12 sm:w-24 bg-gradient-to-r from-white to-transparent" />
        <div className="pointer-events-none absolute bottom-0 right-0 top-0 z-10 w-12 sm:w-24 bg-gradient-to-l from-white to-transparent" />
        <div className="flex gap-3 pl-3">
          <motion.div
            className="flex min-w-max gap-3"
            animate={{ x: ["0%", "-50%"] }}
            transition={{ duration: 40, repeat: Infinity, ease: "linear" }}
          >
            {row1.map((t, i) => (
              <TestimonialCard key={i} t={t} variant="light" />
            ))}
          </motion.div>
        </div>
      </div>

      {/* Row 2 — right to left */}
      <div className="relative">
        <div className="pointer-events-none absolute bottom-0 left-0 top-0 z-10 w-12 sm:w-24 bg-gradient-to-r from-white to-transparent" />
        <div className="pointer-events-none absolute bottom-0 right-0 top-0 z-10 w-12 sm:w-24 bg-gradient-to-l from-white to-transparent" />
        <div className="flex gap-3 pl-3">
          <motion.div
            className="flex min-w-max gap-3"
            animate={{ x: ["-50%", "0%"] }}
            transition={{ duration: 32, repeat: Infinity, ease: "linear" }}
          >
            {row2.map((t, i) => (
              <TestimonialCard key={i} t={t} variant="gray" />
            ))}
          </motion.div>
        </div>
      </div>

    </section>
  );
}
