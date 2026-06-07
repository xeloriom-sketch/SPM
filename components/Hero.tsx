"use client";

import { useRef, useEffect } from "react";
import { motion, useScroll, useTransform, useSpring } from "framer-motion";
import { ChevronDown } from "lucide-react";
import { sitePath } from "@/lib/site-path";

const LOADER_OUT = 3.0;

/* Animate a single line — slides up char-by-char */
function CharLine({
  text,
  italic,
  delay,
}: {
  text: string;
  italic?: boolean;
  delay: number;
}) {
  return (
    <div className="overflow-hidden">
      <motion.span
        className={`block font-sans font-black text-white leading-[0.92] tracking-[-0.03em] ${italic ? "font-light italic text-white/45" : ""}`}
        style={{ fontSize: "clamp(2.6rem, 9vw, 8rem)" }}
        initial={{ y: "105%" }}
        animate={{ y: 0 }}
        transition={{ duration: 1.05, ease: [0.16, 1, 0.3, 1], delay }}
      >
        {text}
      </motion.span>
    </div>
  );
}

const specs = [
  { label: "Disponibilité", value: "7j/7 — 24h/24" },
  { label: "Zone",          value: "Lyon · Ain · Isère" },
  { label: "Convention",    value: "CPAM 100%" },
  { label: "Capacité",      value: "7 places SUV" },
];

export default function Hero() {
  const containerRef = useRef<HTMLElement>(null);
  const videoRef     = useRef<HTMLVideoElement>(null);

  /* ── Safari autoplay fix ── */
  useEffect(() => {
    const v = videoRef.current;
    if (!v) return;

    v.defaultMuted = true;
    v.muted        = true;
    v.setAttribute("muted", "");
    v.setAttribute("playsinline", "");
    v.setAttribute("webkit-playsinline", "");

    const tryPlay = () => {
      v.play().catch(() => {});
    };

    if (v.readyState >= 3) {
      tryPlay();
    } else {
      v.addEventListener("loadeddata", tryPlay, { once: true });
      v.load();
    }

    /* Fallback: first interaction */
    const onInteract = () => tryPlay();
    document.addEventListener("touchstart", onInteract, { once: true, passive: true });
    document.addEventListener("pointerdown", onInteract, { once: true });

    return () => {
      v.removeEventListener("loadeddata", tryPlay);
      document.removeEventListener("touchstart", onInteract);
      document.removeEventListener("pointerdown", onInteract);
    };
  }, []);

  /* ── Parallax scroll ── */
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"],
  });

  const rawScale = useTransform(scrollYProgress, [0, 1], [1, 1.08]);
  const videoScale = useSpring(rawScale, { stiffness: 32, damping: 14 });

  return (
    <section
      ref={containerRef}
      id="accueil"
      className="relative w-full overflow-hidden bg-black flex flex-col select-none"
      style={{ height: "100svh" }}
    >
      {/* ── VIDEO ── */}
      <motion.div
        className="absolute inset-0 z-0 will-change-transform"
        style={{ scale: videoScale }}
      >
        <video
          ref={videoRef}
          className="h-full w-full object-cover"
          src={sitePath("/videos/hero.mp4")}
          autoPlay
          muted
          loop
          playsInline
          preload="auto"
          disablePictureInPicture
          style={{ pointerEvents: "none" }}
        />
      </motion.div>

      {/* ── OVERLAYS ── */}
      <div className="pointer-events-none absolute inset-0 z-[5]">
        {/* Top veil — navbar always readable */}
        <div className="absolute inset-x-0 top-0 h-40 bg-gradient-to-b from-black/40 to-transparent" />
        {/* Bottom veil — specs always readable */}
        <div className="absolute inset-x-0 bottom-0 h-[60%] bg-gradient-to-t from-black/90 via-black/40 to-transparent" />
      </div>

      {/* ── GRAIN overlay for cinematic feel ── */}
      <div
        className="pointer-events-none absolute inset-0 z-[6] opacity-[0.035] mix-blend-overlay"
        style={{
          backgroundImage:
            "url(\"data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E\")",
          backgroundSize: "160px",
        }}
      />

      {/* ── TEXTE ── */}
      <div className="relative z-[10] w-full mt-auto">
        {/* Headline */}
        <div className="px-6 pb-5 sm:px-8 sm:pb-6 md:px-14">
          <CharLine text="Nous allons" delay={LOADER_OUT} />
          <div className="overflow-hidden">
            <motion.span
              className="block font-sans font-black text-white leading-[0.92] tracking-[-0.03em]"
              style={{ fontSize: "clamp(2.6rem, 9vw, 8rem)" }}
              initial={{ y: "105%" }}
              animate={{ y: 0 }}
              transition={{ duration: 1.05, ease: [0.16, 1, 0.3, 1], delay: LOADER_OUT + 0.14 }}
            >
              où vous{" "}
              <em className="font-light not-italic text-white/45">voulez.</em>
            </motion.span>
          </div>

          <motion.p
            className="mt-3 text-[11px] sm:text-sm font-light text-white/40 tracking-widest uppercase"
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1], delay: LOADER_OUT + 0.42 }}
          >
            SPM · Tignieu-Jameyzieu · Lyon · Ain · Isère
          </motion.p>
        </div>

        {/* Specs bar */}
        <div
          className="grid grid-cols-2 gap-y-5 border-t border-white/10 px-6 pt-5 text-white sm:px-8 md:grid-cols-4 md:px-14"
          style={{ paddingBottom: "max(3.5rem, env(safe-area-inset-bottom, 3.5rem))" }}
        >
          {specs.map((s, i) => (
            <motion.div
              key={i}
              className={`flex flex-col ${i !== 0 ? "md:pl-8 md:border-l md:border-white/10" : ""}`}
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.75, ease: [0.16, 1, 0.3, 1], delay: LOADER_OUT + 0.58 + i * 0.09 }}
            >
              <span className="mb-1 text-[9px] sm:text-[10px] font-semibold tracking-[0.22em] uppercase text-white/30">
                {s.label}
              </span>
              <span className="text-sm sm:text-base font-semibold tracking-tight text-white md:text-[1.1rem]">
                {s.value}
              </span>
            </motion.div>
          ))}
        </div>


        {/* Wave transition + scroll button */}
        <div className="relative h-12 w-full bg-[#f8f9fa] flex justify-center">
          <div className="absolute top-[-44px] h-[45px] w-[260px] pointer-events-none">
            <svg viewBox="0 0 260 45" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
              <path d="M0 45C60 45 70 0 130 0C190 0 200 45 260 45H0Z" fill="#f8f9fa" />
            </svg>
          </div>
          <motion.div
            className="absolute -top-5 z-40"
            initial={{ opacity: 0, scale: 0.6 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: LOADER_OUT + 1.1, duration: 0.7, type: "spring", stiffness: 200, damping: 18 }}
          >
            <a
              href="#services"
              className="flex h-16 w-16 items-center justify-center rounded-full bg-[#111] text-white shadow-xl"
            >
              <ChevronDown className="h-7 w-7" strokeWidth={2} />
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
