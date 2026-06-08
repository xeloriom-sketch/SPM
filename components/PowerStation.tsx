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
            poster={sitePath("/image/volkswagen-tiguan-r-line-2020-5k-8k-9500x6333-1639.jpeg")}
            disablePictureInPicture
            className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-[1.015]"
            onEnded={() => setIsPlaying(false)}
          >
            <source src={sitePath("/videos/11661703-uhd_3840_2160_24fps.mp4")} type="video/mp4" />
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
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={isInView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.6, delay: 0.5 }}
            >
              <a
                href="tel:+33767751898"
                className="group inline-flex items-center gap-4 rounded-full bg-black pl-5 pr-1.5 py-1.5 text-[11px] font-medium tracking-wider text-white transition-all hover:bg-black/85"
              >
                <span>Réserver maintenant</span>
                <div className="flex h-7 w-7 items-center justify-center rounded-full bg-white text-black transition-transform duration-300 group-hover:translate-x-0.5">
                  <ArrowRight className="h-3.5 w-3.5 stroke-[2.5]" />
                </div>
              </a>
            </motion.div>
          </div>

        </div>
      </div>
    </section>
  );
}
