"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function Loader() {
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    const t = setTimeout(() => setVisible(false), 2400);
    return () => clearTimeout(t);
  }, []);

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          key="loader"
          className="fixed inset-0 z-[300] flex flex-col items-center justify-center overflow-hidden bg-[#0d0d0d]"
          initial={{ y: "0%" }}
          exit={{ y: "-100%" }}
          transition={{ duration: 0.95, ease: [0.76, 0, 0.24, 1], delay: 0.05 }}
        >
          {/* Lignes d'ambiance */}
          <motion.div
            className="absolute left-0 right-0 top-1/2 h-px bg-white/[0.04]"
            initial={{ scaleX: 0, originX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{ duration: 1.6, ease: [0.16, 1, 0.3, 1] }}
          />

          {/* Marque */}
          <div className="overflow-hidden mb-2">
            <motion.p
              className="font-sans text-[18vw] sm:text-[12rem] font-black text-white tracking-[-0.05em] leading-none"
              initial={{ y: "110%" }}
              animate={{ y: 0 }}
              transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1], delay: 0.08 }}
            >
              SPM
            </motion.p>
          </div>

          <div className="overflow-hidden">
            <motion.p
              className="text-[11px] font-medium tracking-[0.4em] uppercase text-white/30"
              initial={{ y: "120%" }}
              animate={{ y: 0 }}
              transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1], delay: 0.28 }}
            >
              Taxi Conventionné · Tignieu-Jameyzieu
            </motion.p>
          </div>

          {/* Barre de progression */}
          <div className="absolute bottom-0 left-0 right-0 h-[2px] bg-white/[0.06]">
            <motion.div
              className="h-full bg-white/70"
              initial={{ width: "0%" }}
              animate={{ width: "100%" }}
              transition={{ duration: 2.2, ease: "easeInOut" }}
            />
          </div>

          {/* Mentions coins */}
          <motion.span
            className="absolute bottom-6 left-8 text-[9px] tracking-[0.3em] uppercase text-white/15"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5, duration: 0.6 }}
          >
            Conventionné CPAM
          </motion.span>
          <motion.span
            className="absolute bottom-6 right-8 text-[9px] tracking-[0.3em] uppercase text-white/15"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5, duration: 0.6 }}
          >
            © 2026
          </motion.span>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
