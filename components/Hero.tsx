"use client";

import { useRef, useEffect, useState } from "react";
import { motion, useScroll, useTransform, useSpring, AnimatePresence } from "framer-motion";
import { ArrowDown, Phone } from "lucide-react";

const words = ["VOUS", "VOULEZ"];
const phrase = ["NOUS", "ALLONS", "OÙ"];

function SplitWord({ text, delay = 0 }: { text: string; delay?: number }) {
  return (
    <span className="inline-block overflow-hidden">
      <motion.span
        className="inline-block"
        initial={{ y: "110%" }}
        animate={{ y: 0 }}
        transition={{ duration: 1.1, delay, ease: [0.16, 1, 0.3, 1] }}
      >
        {text}
      </motion.span>
    </span>
  );
}

export default function Hero() {
  const containerRef = useRef<HTMLDivElement>(null);
  const videoRef = useRef<HTMLVideoElement>(null);
  const [ready, setReady] = useState(false);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"],
  });

  const videoScale = useTransform(scrollYProgress, [0, 1], [1, 1.15]);
  const videoOpacity = useTransform(scrollYProgress, [0, 0.85], [1, 0]);
  const textY = useTransform(scrollYProgress, [0, 1], ["0%", "-35%"]);
  const textOpacity = useTransform(scrollYProgress, [0, 0.55], [1, 0]);
  const overlayOpacity = useTransform(scrollYProgress, [0, 0.6], [0.45, 0.75]);

  const springY = useSpring(textY, { stiffness: 80, damping: 20 });

  useEffect(() => {
    const timer = setTimeout(() => setReady(true), 100);
    return () => clearTimeout(timer);
  }, []);

  const allWords = [...phrase, ...words];

  return (
    <section ref={containerRef} className="relative w-full h-[100svh] overflow-hidden bg-dark" id="accueil">
      {/* VIDEO */}
      <motion.div
        className="absolute inset-0 w-full h-full"
        style={{ scale: videoScale, opacity: videoOpacity }}
      >
        <video
          ref={videoRef}
          className="absolute inset-0 w-full h-full object-cover"
          src="/videos/hero.mp4"
          autoPlay
          muted
          loop
          playsInline
          onCanPlay={() => setReady(true)}
        />
      </motion.div>

      {/* OVERLAY */}
      <motion.div
        className="absolute inset-0 bg-dark"
        style={{ opacity: overlayOpacity }}
      />

      {/* VIGNETTE */}
      <div className="absolute inset-0 bg-gradient-to-t from-dark/80 via-transparent to-dark/20 pointer-events-none" />
      <div className="absolute inset-0 bg-gradient-to-r from-dark/30 via-transparent to-dark/10 pointer-events-none" />

      {/* CONTENT */}
      <motion.div
        className="relative z-10 flex flex-col justify-end h-full px-6 pb-32 sm:px-10 lg:px-16"
        style={{ y: springY, opacity: textOpacity }}
      >
        {/* Badge */}
        <AnimatePresence>
          {ready && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="mb-8"
            >
              <span className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/8 px-4 py-2 text-xs font-medium text-white/80 backdrop-blur-sm">
                <span className="h-1.5 w-1.5 rounded-full bg-lime animate-pulse" />
                Taxi conventionné · Disponible 7j/7
              </span>
            </motion.div>
          )}
        </AnimatePresence>

        {/* MAIN HEADLINE */}
        <h1 className="font-sans font-black text-white leading-[0.9] tracking-tightest">
          <div className="text-[13vw] sm:text-[11vw] lg:text-[9.5vw]">
            {ready && phrase.map((w, i) => (
              <span key={w} className="mr-[2vw] last:mr-0">
                <SplitWord text={w} delay={0.4 + i * 0.12} />
              </span>
            ))}
          </div>
          <div className="flex items-end gap-[2vw] mt-[-0.5vw]">
            <div className="text-[13vw] sm:text-[11vw] lg:text-[9.5vw] text-lime leading-[0.9]">
              {ready && words.map((w, i) => (
                <span key={w} className="mr-[2vw] last:mr-0">
                  <SplitWord text={w} delay={0.76 + i * 0.12} />
                </span>
              ))}
            </div>
            {/* Pill badge on same line */}
            {ready && (
              <motion.div
                className="hidden lg:flex flex-col items-start gap-1 pb-2"
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.7, delay: 1.1, ease: [0.16, 1, 0.3, 1] }}
              >
                <p className="text-sm font-medium text-white/60 leading-tight">Tignieu-Jameyzieu</p>
                <p className="text-sm font-medium text-white/40 leading-tight">Lyon · Ain · Isère · France</p>
              </motion.div>
            )}
          </div>
        </h1>

        {/* CTA Row */}
        {ready && (
          <motion.div
            className="mt-10 flex flex-wrap items-center gap-4"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.05, ease: [0.16, 1, 0.3, 1] }}
          >
            <a
              href="tel:0600000000"
              className="group relative flex items-center gap-3 overflow-hidden rounded-full bg-lime px-7 py-3.5 text-sm font-bold text-dark"
              data-cursor
            >
              <span className="absolute inset-0 translate-y-full bg-white transition-transform duration-300 ease-out group-hover:translate-y-0" />
              <Phone className="relative z-10 h-4 w-4" />
              <span className="relative z-10">Appeler maintenant</span>
            </a>
            <a
              href="#contact"
              className="group flex items-center gap-2 text-sm font-medium text-white/70 transition-colors hover:text-white"
            >
              <span>Demander un devis</span>
              <motion.span
                animate={{ x: [0, 4, 0] }}
                transition={{ repeat: Infinity, duration: 1.8, ease: "easeInOut" }}
              >→</motion.span>
            </a>
          </motion.div>
        )}
      </motion.div>

      {/* SCROLL INDICATOR */}
      {ready && (
        <motion.div
          className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center gap-2"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.6, duration: 0.8 }}
        >
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ repeat: Infinity, duration: 1.6, ease: [0.45, 0, 0.55, 1] }}
          >
            <ArrowDown className="h-5 w-5 text-white/40" />
          </motion.div>
          <p className="text-[10px] uppercase tracking-[0.2em] text-white/30">Découvrir</p>
        </motion.div>
      )}

      {/* BOTTOM INFO BAR */}
      {ready && (
        <motion.div
          className="absolute bottom-0 left-0 right-0 z-10"
          initial={{ y: 100 }}
          animate={{ y: 0 }}
          transition={{ duration: 0.9, delay: 1.3, ease: [0.16, 1, 0.3, 1] }}
        >
          <div className="flex items-stretch divide-x divide-white/10 border-t border-white/10 bg-dark/60 backdrop-blur-md">
            {[
              { label: "Disponibilité", value: "7j/7 — 24h/24" },
              { label: "Couverture", value: "Toute la France" },
              { label: "Devis", value: "Gratuit & rapide" },
              { label: "Véhicule", value: "Tiguan 7 places" },
            ].map((item) => (
              <div key={item.label} className="flex flex-1 flex-col justify-center px-5 py-3.5 sm:px-8">
                <p className="text-[10px] uppercase tracking-widest text-white/35">{item.label}</p>
                <p className="mt-0.5 text-xs font-semibold text-white/80 sm:text-sm">{item.value}</p>
              </div>
            ))}
          </div>
        </motion.div>
      )}
    </section>
  );
}
