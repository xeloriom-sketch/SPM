"use client";

import { useRef, useEffect } from "react";
import { motion, useScroll, useTransform, useSpring } from "framer-motion";
import { ChevronDown } from "lucide-react";

/* Délais calibrés pour apparaître juste après la sortie du loader (≈3.35s) */
const LOADER_OUT = 3.0;

export default function Hero() {
  const containerRef = useRef<HTMLElement>(null);
  const videoRef     = useRef<HTMLVideoElement>(null);

  /* Autoplay forcé */
  useEffect(() => {
    const v = videoRef.current;
    if (!v) return;
    v.muted = true;
    v.play().catch(() => {});
  }, []);

  /* Scroll parallaxe */
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"],
  });

  const rawScale       = useTransform(scrollYProgress, [0, 1], [1, 1.07]);
  const rawTextY       = useTransform(scrollYProgress, [0, 1], ["0%", "-18%"]);
  const rawTextOpacity = useTransform(scrollYProgress, [0, 0.55], [1, 0]);

  const videoScale  = useSpring(rawScale,  { stiffness: 38, damping: 13 });
  const textY       = useSpring(rawTextY,  { stiffness: 38, damping: 13 });
  const textOpacity = rawTextOpacity;

  const specs = [
    { label: "Disponibilité", value: "7j/7 — 24h/24" },
    { label: "Zone",          value: "Lyon · Ain · Isère" },
    { label: "Convention",    value: "CPAM 100%" },
    { label: "Capacité",      value: "7 places SUV" },
  ];

  return (
    <section
      ref={containerRef}
      id="accueil"
      className="relative w-full overflow-hidden bg-black flex flex-col select-none"
      style={{ height: "100svh" }}
    >
      {/* ── VIDÉO propre, entièrement visible ── */}
      <motion.div
        className="absolute inset-0 z-0 will-change-transform"
        style={{ scale: videoScale }}
      >
        <video
          ref={videoRef}
          className="h-full w-full object-cover"
          src="/videos/hero.mp4"
          autoPlay
          muted
          loop
          playsInline
          preload="auto"
          disablePictureInPicture
        />
      </motion.div>

      {/* ── VOILE : seulement en bas ── */}
      <div className="pointer-events-none absolute inset-0 z-[5]">
        {/* Gradient bas fort pour les specs */}
        <div className="absolute inset-x-0 bottom-0 h-[55%] bg-gradient-to-t from-black/85 via-black/35 to-transparent" />
        {/* Vignette haut très légère (nav lisible) */}
        <div className="absolute inset-x-0 top-0 h-28 bg-gradient-to-b from-black/18 to-transparent" />
      </div>

      {/* ── TEXTE + SPECS : au bas, monte au scroll ── */}
      <motion.div
        className="relative z-[10] w-full mt-auto"
        style={{ y: textY, opacity: textOpacity }}
      >
        {/* Headline */}
        <div className="px-6 pb-6 sm:px-8 sm:pb-8 md:px-14">
          <div className="overflow-hidden">
            <motion.span
              className="block font-sans font-black text-white leading-[0.92] tracking-[-0.03em]"
              style={{ fontSize: "clamp(2.6rem, 9vw, 8rem)" }}
              initial={{ y: "105%" }}
              animate={{ y: 0 }}
              transition={{ duration: 1.05, ease: [0.16, 1, 0.3, 1], delay: LOADER_OUT }}
            >
              Nous allons
            </motion.span>
          </div>
          <div className="overflow-hidden">
            <motion.span
              className="block font-sans font-black text-white leading-[0.92] tracking-[-0.03em]"
              style={{ fontSize: "clamp(2.6rem, 9vw, 8rem)" }}
              initial={{ y: "105%" }}
              animate={{ y: 0 }}
              transition={{ duration: 1.05, ease: [0.16, 1, 0.3, 1], delay: LOADER_OUT + 0.14 }}
            >
              où vous{" "}
              <span className="font-light italic text-white/50">voulez.</span>
            </motion.span>
          </div>

          {/* Sous-titre */}
          <motion.p
            className="mt-3 text-xs sm:text-sm font-light text-white/45 tracking-wide leading-relaxed"
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1], delay: LOADER_OUT + 0.4 }}
          >
            SPM · Tignieu-Jameyzieu · Lyon · Ain · Isère — et toute la France
          </motion.p>
        </div>

        {/* Barre specs */}
        <div
          className="grid grid-cols-2 gap-y-5 border-t border-white/10 px-6 pt-5 text-white sm:px-8 md:grid-cols-4 md:px-14"
          style={{ paddingBottom: "max(3.5rem, env(safe-area-inset-bottom, 3.5rem))" }}
        >
          {specs.map((s, i) => (
            <motion.div
              key={i}
              className={`flex flex-col ${i !== 0 ? "md:pl-8 md:border-l md:border-white/10" : ""}`}
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.75,
                ease: [0.16, 1, 0.3, 1],
                delay: LOADER_OUT + 0.55 + i * 0.09,
              }}
            >
              <span className="mb-1 text-[9px] sm:text-[10px] font-semibold tracking-[0.22em] uppercase text-white/32">
                {s.label}
              </span>
              <span className="text-sm sm:text-base font-semibold tracking-tight text-white md:text-[1.1rem]">
                {s.value}
              </span>
            </motion.div>
          ))}
        </div>

        {/* Vague SVG + bouton scroll */}
        <div className="relative h-12 w-full bg-[#f8f9fa] flex justify-center items-end">
          <div className="absolute top-[-44px] h-[45px] w-[260px] pointer-events-none">
            <svg viewBox="0 0 260 45" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
              <path d="M0 45C60 45 70 0 130 0C190 0 200 45 260 45H0Z" fill="#f8f9fa" />
            </svg>
          </div>
          <motion.div
            className="absolute -top-5 z-40"
            initial={{ opacity: 0, scale: 0.7 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{
              delay: LOADER_OUT + 1.1,
              duration: 0.6,
              type: "spring",
              stiffness: 220,
              damping: 18,
            }}
          >
            <a
              href="#services"
              className="flex h-14 w-14 items-center justify-center rounded-full bg-[#111] text-white/55 shadow-xl transition-all hover:scale-110 hover:text-white active:scale-95"
            >
              <motion.div
                animate={{ y: [0, 5, 0] }}
                transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
              >
                <ChevronDown className="h-5 w-5" />
              </motion.div>
            </a>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
}
