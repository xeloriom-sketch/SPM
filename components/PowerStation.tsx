"use client";

import { useRef, useState, useEffect } from "react";
import { motion, useInView } from "framer-motion";
import { ArrowRight, Play, Pause } from "lucide-react";
import { sitePath } from "@/lib/site-path";

export default function PowerStation() {
  const containerRef = useRef<HTMLDivElement>(null);
  const videoRef     = useRef<HTMLVideoElement>(null);
  const isInView     = useInView(containerRef, { once: true, margin: "-100px" });
  const [isPlaying, setIsPlaying] = useState(false);

  useEffect(() => {
    const v = videoRef.current;
    if (!v) return;
    v.muted = true;
    v.defaultMuted = true;
  }, []);

  const toggle = () => {
    const v = videoRef.current;
    if (!v) return;
    if (v.paused) {
      v.play().catch(() => {});
      setIsPlaying(true);
    } else {
      v.pause();
      setIsPlaying(false);
    }
  };

  return (
    <section ref={containerRef} className="w-full bg-white py-20 font-sans">
      <div className="max-w-[1440px] mx-auto px-6 sm:px-12 lg:px-20">

        {/* ── CADRE VIDÉO ── */}
        <motion.div
          className="relative w-full aspect-[21/10] bg-black rounded-[32px] overflow-hidden shadow-sm mb-12 flex items-center justify-center group cursor-pointer"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
          onClick={toggle}
        >
          <video
            ref={videoRef}
            muted
            playsInline
            preload="metadata"
            poster={sitePath("/image/volkswagen-tiguan-r-line.webp")}
            disablePictureInPicture
            className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-[1.015]"
            onEnded={() => setIsPlaying(false)}
          >
            <source src={sitePath("/videos/11661703-web.mp4")} type="video/mp4" />
          </video>

          <div className="absolute inset-0 bg-black/20 transition-opacity group-hover:bg-black/10" />

          <div className="relative z-10 w-20 h-20 sm:w-24 sm:h-24 bg-white/90 rounded-full flex items-center justify-center backdrop-blur-md shadow-xl transition-all duration-300 group-hover:scale-110 group-hover:bg-white text-black">
            {isPlaying
              ? <Pause  className="w-7 h-7 stroke-[1.5]" />
              : <Play   className="w-7 h-7 stroke-[1.5] translate-x-0.5" />
            }
          </div>
        </motion.div>

        {/* ── FOOTER 3 COLONNES ── */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-6 md:gap-4 items-start">

          <div className="md:col-span-4">
            <motion.h3
              className="text-2xl sm:text-3xl font-medium tracking-tight text-black mb-1"
              initial={{ opacity: 0, y: 15 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              Votre confort, notre priorité
            </motion.h3>
            <motion.p
              className="text-xs text-black/40 font-normal"
              initial={{ opacity: 0, y: 15 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.3 }}
            >
              Volkswagen Tiguan Allspace — 7 places
            </motion.p>
          </div>

          <div className="md:col-span-5">
            <motion.p
              className="text-xs text-black/55 leading-relaxed font-normal md:max-w-md"
              initial={{ opacity: 0, y: 15 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              Un SUV 7 places spacieux, climatisé, équipé Wi-Fi et attache-remorque.
              Chaque trajet est préparé à l&apos;avance pour votre ponctualité et votre confort —
              de Villebois à Lyon, à l&apos;aéroport ou partout en France.
            </motion.p>
          </div>

          <div className="md:col-span-3 md:justify-self-end">
            <motion.a
              href="/services"
              title="Voir tous les services SPM Taxi"
              className="inline-flex items-center gap-2 text-[11px] font-semibold tracking-wide text-black/40 hover:text-black transition-colors"
              initial={{ opacity: 0 }}
              animate={isInView ? { opacity: 1 } : {}}
              transition={{ duration: 0.6, delay: 0.5 }}
            >
              Voir tous les services
              <ArrowRight className="h-3 w-3" />
            </motion.a>
          </div>

        </div>
      </div>
    </section>
  );
}
