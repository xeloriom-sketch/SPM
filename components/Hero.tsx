"use client";

import { useCallback, useRef } from "react";
import { motion } from "framer-motion";
import { ChevronDown } from "lucide-react";
import { sitePath } from "@/lib/site-path";

const LOADER_OUT = 3.0;

/* Clips vidéo — ajouter d'autres fichiers dans /public/videos/ */
const CLIPS = [
  sitePath("/videos/hero.mp4"),
];

/* Spring iOS — overshoot léger puis stabilisation */
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
  /* ── Ref callback : muted + play AVANT hydration React (fix Safari) ── */
  const videoRef = useCallback((node: HTMLVideoElement | null) => {
    if (!node) return;
    node.muted        = true;
    node.defaultMuted = true;
    node.setAttribute("muted", "");
    node.setAttribute("playsinline", "");
    node.setAttribute("webkit-playsinline", "");
    node.setAttribute("x-webkit-airplay", "allow");

    const tryPlay = () => node.play().catch(() => {});

    if (node.readyState >= 2) {
      tryPlay();
    } else {
      node.addEventListener("loadedmetadata", tryPlay, { once: true });
    }

    /* Fallback si l'utilisateur n'a pas encore interagi */
    const onTouch = () => tryPlay();
    document.addEventListener("touchstart",  onTouch, { once: true, passive: true });
    document.addEventListener("pointerdown", onTouch, { once: true });
  }, []);

  return (
    <section
      id="accueil"
      className="relative w-full overflow-hidden bg-black flex flex-col select-none"
      style={{ height: "100svh" }}
    >
      {/* ── VIDÉO — statique, aucun transform pour 60 fps ── */}
      <div className="absolute inset-0 z-0">
        <video
          ref={videoRef}
          className="h-full w-full object-cover"
          autoPlay
          muted
          loop
          playsInline
          preload="auto"
          disablePictureInPicture
          style={{ pointerEvents: "none" }}
        >
          {CLIPS.map((src) => (
            <source key={src} src={src} type="video/mp4" />
          ))}
        </video>
      </div>

      {/* ── OVERLAYS ── */}
      <div className="pointer-events-none absolute inset-0 z-[5]">
        <div className="absolute inset-x-0 top-0 h-40 bg-gradient-to-b from-black/45 to-transparent" />
        <div className="absolute inset-x-0 bottom-0 h-[60%] bg-gradient-to-t from-black/90 via-black/40 to-transparent" />
      </div>

      {/* ── GRAIN cinématique ── */}
      <div
        className="pointer-events-none absolute inset-0 z-[6] opacity-[0.032]"
        style={{
          backgroundImage:
            "url(\"data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E\")",
          backgroundSize: "160px",
        }}
      />

      {/* ── CONTENU ── */}
      <div className="relative z-[10] w-full mt-auto">

        {/* Titre — style Apple : poids moyen, taille raffinée */}
        <div className="px-6 pb-5 sm:px-10 sm:pb-6 md:px-14">

          {/* Ligne 1 */}
          <div className="overflow-hidden">
            <motion.span
              className="block font-sans font-semibold text-white leading-[1.05] tracking-[-0.025em]"
              style={{ fontSize: "clamp(2rem, 5.5vw, 5.2rem)" }}
              initial={{ y: "110%" }}
              animate={{ y: 0 }}
              transition={{ ...spring, delay: LOADER_OUT }}
            >
              Nous allons
            </motion.span>
          </div>

          {/* Ligne 2 — "voulez." en light italic */}
          <div className="overflow-hidden">
            <motion.span
              className="block font-sans font-semibold text-white leading-[1.05] tracking-[-0.025em]"
              style={{ fontSize: "clamp(2rem, 5.5vw, 5.2rem)" }}
              initial={{ y: "110%" }}
              animate={{ y: 0 }}
              transition={{ ...spring, delay: LOADER_OUT + 0.07 }}
            >
              où vous{" "}
              <span className="font-light italic text-white/40">voulez.</span>
            </motion.span>
          </div>

          {/* Sous-titre */}
          <motion.p
            className="mt-3 text-[10px] sm:text-[11px] font-light text-white/38 tracking-[0.22em] uppercase"
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ ...spring, delay: LOADER_OUT + 0.22 }}
          >
            SPM · Villebois · Lyon · Ain · Isère
          </motion.p>
        </div>

        {/* Barre specs */}
        <div
          className="grid grid-cols-2 gap-y-5 border-t border-white/10 px-6 pt-5 text-white sm:px-10 md:grid-cols-4 md:px-14"
          style={{ paddingBottom: "max(3.5rem, env(safe-area-inset-bottom, 3.5rem))" }}
        >
          {specs.map((s, i) => (
            <motion.div
              key={i}
              className={`flex flex-col ${i !== 0 ? "md:pl-8 md:border-l md:border-white/10" : ""}`}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ ...spring, delay: LOADER_OUT + 0.32 + i * 0.07 }}
            >
              <span className="mb-1 text-[9px] sm:text-[10px] font-semibold tracking-[0.22em] uppercase text-white/30">
                {s.label}
              </span>
              <span className="text-sm sm:text-base font-semibold tracking-tight text-white">
                {s.value}
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
              className="flex h-16 w-16 items-center justify-center rounded-full bg-[#111] text-white shadow-xl"
            >
              <ChevronDown className="h-7 w-7" strokeWidth={2.5} />
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
