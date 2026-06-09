"use client";

import { motion } from "framer-motion";
import { ChevronDown, Phone, ArrowRight } from "lucide-react";
import { sitePath } from "@/lib/site-path";
import HeroVideo from "@/components/HeroVideo";
import { useSettings } from "@/lib/settings-context";

const LOADER_OUT = 0.1;

const spring = {
  type: "spring" as const,
  stiffness: 280,
  damping: 22,
  mass: 0.75,
};

const specs = [
  { label: "Disponibilité", value: "7j/7 — 24h/24" },
  { label: "Zone",          value: "Lyon · Ain · Isère" },
  { label: "Convention",    value: "CPAM 100%" },
  { label: "Capacité",      value: "7 places SUV" },
];

export default function Hero() {
  const s = useSettings();

  return (
    <div id="accueil" style={{ height: "160vh" }}>
    <section
      className="sticky top-0 relative w-full overflow-hidden bg-black flex flex-col select-none"
      style={{ height: "100svh" }}
    >
      {/* VIDEO — composant dédié avec useEffect agressif (fix Safari autoplay) */}
      <div className="absolute inset-0 z-0">
        <HeroVideo src={sitePath("/videos/hero-web.mp4")} scrollFactor={1.6} />
      </div>

      {/* OVERLAYS */}
      <div className="pointer-events-none absolute inset-0 z-[5]">
        <div className="absolute inset-x-0 top-0 h-40 bg-gradient-to-b from-black/45 to-transparent" />
        <div className="absolute inset-x-0 bottom-0 h-[60%] bg-gradient-to-t from-black/90 via-black/40 to-transparent" />
      </div>

      {/* GRAIN cinématique */}
      <div
        className="pointer-events-none absolute inset-0 z-[6] opacity-[0.032]"
        style={{
          backgroundImage:
            "url(\"data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E\")",
          backgroundSize: "160px",
        }}
      />

      {/* CONTENU */}
      <div className="relative z-[10] w-full mt-auto">

        <div className="px-6 pb-5 sm:px-10 sm:pb-6 md:px-14">

          {/* H1 principal — SEO + accessibilité */}
          <h1
            className="font-sans font-semibold text-white leading-[1.05] tracking-[-0.025em]"
            style={{ fontSize: "clamp(2rem, 5.5vw, 5.2rem)" }}
          >
            <div className="overflow-hidden">
              <motion.span
                className="block"
                initial={{ y: "110%" }}
                animate={{ y: 0 }}
                transition={{ ...spring, delay: LOADER_OUT }}
              >
                {s.hero_line1}
              </motion.span>
            </div>
            <div className="overflow-hidden">
              <motion.span
                className="block"
                initial={{ y: "110%" }}
                animate={{ y: 0 }}
                transition={{ ...spring, delay: LOADER_OUT + 0.07 }}
              >
                {s.hero_line2}
              </motion.span>
            </div>
          </h1>

          {/* Sous-titre */}
          <motion.p
            className="mt-3 text-[10px] sm:text-[11px] font-light text-white/38 tracking-[0.22em] uppercase"
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ ...spring, delay: LOADER_OUT + 0.22 }}
          >
            {s.hero_subtitle}
          </motion.p>

          {/* CTAs */}
          <motion.div
            className="mt-6 flex flex-wrap items-center gap-3"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ ...spring, delay: LOADER_OUT + 0.35 }}
          >
            <a
              href={`tel:${s.contact_phone.replace(/[\s.-]/g, "")}`}
              title="Appeler SPM Taxi maintenant"
              className="inline-flex items-center gap-2.5 rounded-full bg-white text-black pl-4 pr-5 py-2.5 text-[11px] font-semibold tracking-wide hover:bg-white/90 transition-colors"
            >
              <Phone className="h-3.5 w-3.5 shrink-0" strokeWidth={2.5} />
              {s.contact_phone}
            </a>
            <a
              href="#contact"
              title="Demander un devis gratuit à SPM Taxi"
              className="group inline-flex items-center gap-3 rounded-full border border-white/25 text-white pl-4 pr-1.5 py-1.5 text-[11px] font-semibold tracking-wide hover:border-white/50 transition-colors"
            >
              <span>Demander un devis</span>
              <div className="flex h-7 w-7 items-center justify-center rounded-full bg-white/15 transition-transform duration-300 group-hover:translate-x-0.5">
                <ArrowRight className="h-3 w-3" strokeWidth={2.5} />
              </div>
            </a>
          </motion.div>
        </div>

        {/* Barre specs */}
        <div
          className="grid grid-cols-2 gap-y-5 border-t border-white/10 px-6 pt-5 text-white sm:px-10 md:grid-cols-4 md:px-14"
          style={{ paddingBottom: "max(3.5rem, env(safe-area-inset-bottom, 3.5rem))" }}
        >
          {specs.map((spec, i) => (
            <motion.div
              key={i}
              className={`flex flex-col ${i !== 0 ? "md:pl-8 md:border-l md:border-white/10" : ""}`}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ ...spring, delay: LOADER_OUT + 0.45 + i * 0.07 }}
            >
              <span className="mb-1 text-[9px] sm:text-[10px] font-semibold tracking-[0.22em] uppercase text-white/30">
                {spec.label}
              </span>
              <span className="text-sm sm:text-base font-semibold tracking-tight text-white">
                {spec.value}
              </span>
            </motion.div>
          ))}
        </div>

        {/* Vague + bouton scroll */}
        <div className="relative h-12 w-full bg-[#f8f9fa] flex justify-center">
          <div className="absolute top-[-44px] h-[45px] w-[260px] pointer-events-none">
            <svg viewBox="0 0 260 45" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
              <path d="M0 45C60 45 70 0 130 0C190 0 200 45 260 45H0Z" fill="#f8f9fa" />
            </svg>
          </div>
          <motion.div
            className="absolute -top-5 z-40"
            initial={{ opacity: 0, scale: 0.5, y: 8 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ ...spring, delay: LOADER_OUT + 0.9 }}
          >
            <a
              href="#services"
              title="Voir nos services"
              className="flex h-16 w-16 items-center justify-center rounded-full bg-[#111] text-white shadow-xl"
            >
              <ChevronDown className="h-7 w-7" strokeWidth={2.5} />
            </a>
          </motion.div>
        </div>
      </div>
    </section>
    </div>
  );
}
