"use client";

import { useRef, useEffect } from "react";
import { motion, useScroll, useTransform, useSpring } from "framer-motion";
import { ArrowDown, Phone } from "lucide-react";

/* ─── Stagger word reveal ─────────────────────────────── */
function RevealWord({
  text,
  delay = 0,
  className = "",
  style,
}: {
  text: string;
  delay?: number;
  className?: string;
  style?: React.CSSProperties;
}) {
  return (
    <span className={`inline-block overflow-hidden align-bottom ${className}`} style={style}>
      <motion.span
        className="inline-block"
        initial={{ y: "105%" }}
        animate={{ y: 0 }}
        transition={{
          duration: 1,
          delay,
          ease: [0.16, 1, 0.3, 1],
        }}
      >
        {text}
      </motion.span>
    </span>
  );
}

/* ─── Hero ────────────────────────────────────────────── */
export default function Hero() {
  const containerRef = useRef<HTMLElement>(null);
  const videoRef = useRef<HTMLVideoElement>(null);

  /* Force play on mount — belt & suspenders */
  useEffect(() => {
    const v = videoRef.current;
    if (!v) return;
    v.muted = true;
    v.play().catch(() => {/* silently ignore if blocked */});
  }, []);

  /* Parallax */
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"],
  });
  const rawVideoScale = useTransform(scrollYProgress, [0, 1], [1, 1.18]);
  const rawOverlay    = useTransform(scrollYProgress, [0, 0.7], [0.38, 0.72]);
  const rawTextY      = useTransform(scrollYProgress, [0, 1], ["0%", "-28%"]);
  const rawTextOpacity = useTransform(scrollYProgress, [0, 0.6], [1, 0]);

  const videoScale  = useSpring(rawVideoScale,  { stiffness: 60, damping: 20 });
  const textY       = useSpring(rawTextY,       { stiffness: 60, damping: 20 });
  const textOpacity = rawTextOpacity;
  const overlay     = rawOverlay;

  /* Info-bar items */
  const barItems = [
    { label: "Disponibilité", value: "7j/7 — 24h/24" },
    { label: "Couverture",    value: "Toute la France" },
    { label: "Devis",         value: "Gratuit & rapide" },
    { label: "Véhicule",      value: "Tiguan 7 places" },
  ];

  return (
    <section
      ref={containerRef}
      id="accueil"
      className="relative w-full overflow-hidden bg-dark"
      style={{ height: "100svh" }}
    >
      {/* ── VIDEO ─────────────────────────────────────── */}
      <motion.div
        className="absolute inset-0"
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
          style={{ display: "block" }}
        />
      </motion.div>

      {/* ── OVERLAYS ──────────────────────────────────── */}
      <motion.div
        className="absolute inset-0 bg-dark"
        style={{ opacity: overlay }}
      />
      {/* Cinematic letterbox vignette */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute inset-x-0 top-0 h-40 bg-gradient-to-b from-dark/60 to-transparent" />
        <div className="absolute inset-x-0 bottom-0 h-64 bg-gradient-to-t from-dark/90 to-transparent" />
        <div className="absolute inset-y-0 left-0 w-32 bg-gradient-to-r from-dark/30 to-transparent" />
      </div>

      {/* ── CONTENT ───────────────────────────────────── */}
      <motion.div
        className="relative z-10 flex h-full flex-col justify-end px-6 pb-28 sm:px-10 lg:px-16 xl:px-20"
        style={{ y: textY, opacity: textOpacity }}
      >
        {/* Badge */}
        <motion.span
          className="mb-8 inline-flex w-fit items-center gap-2 rounded-full border border-white/15 bg-white/8 px-4 py-2 text-xs font-medium text-white/70 backdrop-blur-sm"
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.25, ease: [0.16, 1, 0.3, 1] }}
        >
          <span className="h-1.5 w-1.5 rounded-full bg-lime" style={{ animation: "pulse 2s ease-in-out infinite" }} />
          Taxi conventionné · Disponible 7j/7
        </motion.span>

        {/* ── HEADLINE ─────────────────────────────── */}
        <h1
          className="font-sans font-black text-white leading-[0.88] tracking-[-0.04em]"
          style={{ fontSize: "clamp(3rem, 11vw, 9.5rem)" }}
        >
          {/* Line 1 */}
          <div>
            <RevealWord text="NOUS" delay={0.38} className="mr-[1.5vw]" />
            <RevealWord text="ALLONS" delay={0.50} className="mr-[1.5vw]" />
            <RevealWord text="OÙ" delay={0.62} />
          </div>
          {/* Line 2 — lime */}
          <div>
            <RevealWord
              text="VOUS"
              delay={0.74}
              className="mr-[1.5vw] text-lime"
              style={{ textShadow: "0 0 60px rgba(232,255,61,0.25)" } as React.CSSProperties}
            />
            <RevealWord text="VOULEZ" delay={0.86} className="text-lime" />
          </div>
        </h1>

        {/* Subline */}
        <motion.p
          className="mt-6 max-w-sm text-sm font-light leading-relaxed text-white/55 sm:text-base"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 1.05, ease: [0.16, 1, 0.3, 1] }}
        >
          Tignieu-Jameyzieu · Lyon · Ain · Isère — et toute la France.
          <br />Volkswagen Tiguan 7 places, disponible maintenant.
        </motion.p>

        {/* CTA */}
        <motion.div
          className="mt-8 flex flex-wrap items-center gap-3"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 1.15, ease: [0.16, 1, 0.3, 1] }}
        >
          <a
            href="tel:0600000000"
            className="group relative flex items-center gap-2.5 overflow-hidden rounded-full bg-lime px-6 py-3 text-sm font-semibold text-dark transition-transform hover:-translate-y-px active:translate-y-0"
          >
            <span className="absolute inset-0 translate-y-full bg-white/90 transition-transform duration-300 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:translate-y-0" />
            <Phone className="relative z-10 h-4 w-4" />
            <span className="relative z-10">Appeler maintenant</span>
          </a>
          <a
            href="#contact"
            className="flex items-center gap-2 text-sm font-medium text-white/50 transition-colors hover:text-white"
          >
            Demander un devis
            <motion.span
              animate={{ x: [0, 5, 0] }}
              transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
            >
              →
            </motion.span>
          </a>
        </motion.div>
      </motion.div>

      {/* ── SCROLL HINT ───────────────────────────────── */}
      <motion.div
        className="absolute bottom-8 right-8 z-10 hidden flex-col items-center gap-2 lg:flex"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.7, duration: 0.8 }}
      >
        <motion.div
          animate={{ y: [0, 6, 0] }}
          transition={{ repeat: Infinity, duration: 1.8, ease: "easeInOut" }}
        >
          <ArrowDown className="h-4 w-4 text-white/25" />
        </motion.div>
        <p
          className="text-white/20"
          style={{ fontSize: 10, letterSpacing: "0.18em", textTransform: "uppercase" }}
        >
          Scroll
        </p>
      </motion.div>

      {/* ── BOTTOM INFO BAR ───────────────────────────── */}
      <motion.div
        className="absolute bottom-0 left-0 right-0 z-10"
        initial={{ y: 80, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.9, delay: 1.3, ease: [0.16, 1, 0.3, 1] }}
      >
        <div className="flex items-stretch divide-x divide-white/8 border-t border-white/8 bg-dark/55 backdrop-blur-xl">
          {barItems.map((item) => (
            <div key={item.label} className="flex flex-1 flex-col justify-center px-4 py-3 sm:px-7">
              <p className="text-white/30" style={{ fontSize: 10, letterSpacing: "0.15em", textTransform: "uppercase" }}>
                {item.label}
              </p>
              <p className="mt-0.5 text-xs font-semibold text-white/75 sm:text-sm">
                {item.value}
              </p>
            </div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}
