"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import styles from "./Loader.module.css";

export default function Loader() {
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    let pageReady = false;
    let minTimePassed = false;

    const tryHide = () => {
      if (pageReady && minTimePassed) setVisible(false);
    };

    // Minimum 2s so the taxi animation completes at least one cycle
    const minTimer = setTimeout(() => {
      minTimePassed = true;
      tryHide();
    }, 2000);

    // Wait for ALL resources (images, video poster, fonts) to be loaded
    const onLoad = () => {
      pageReady = true;
      tryHide();
    };

    if (document.readyState === "complete") {
      pageReady = true;
      tryHide();
    } else {
      window.addEventListener("load", onLoad);
    }

    // Safety cap: never block more than 6s regardless
    const maxTimer = setTimeout(() => setVisible(false), 6000);

    return () => {
      clearTimeout(minTimer);
      clearTimeout(maxTimer);
      window.removeEventListener("load", onLoad);
    };
  }, []);

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          key="loader"
          className="fixed inset-0 z-[300] flex flex-col items-center justify-center overflow-hidden bg-[#0d0d0d]"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0, y: "-4%" }}
          transition={{ duration: 0.55, ease: [0.76, 0, 0.24, 1] }}
        >
          {/* Marque */}
          <div className="overflow-hidden mb-10">
            <motion.p
              className="font-sans text-[13vw] sm:text-[8rem] font-black text-white tracking-[-0.05em] leading-none"
              initial={{ y: "110%" }}
              animate={{ y: 0 }}
              transition={{ duration: 0.75, ease: [0.16, 1, 0.3, 1], delay: 0.05 }}
            >
              SPM
            </motion.p>
          </div>

          {/* Animation taxi */}
          <motion.div
            initial={{ opacity: 0, scale: 0.92 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1], delay: 0.2 }}
          >
            <div className={styles.road}>
              <div className={styles.taxi}>
                <div className={styles.lightBeam} />
                <div className={styles.taxiInner}>
                  <b className={styles.taxiBody} />
                  <i className={styles.taxiWindows} />
                </div>
              </div>
            </div>
          </motion.div>

          {/* Sous-titre */}
          <div className="overflow-hidden mt-8">
            <motion.p
              className="text-[10px] font-medium tracking-[0.4em] uppercase text-white/25"
              initial={{ y: "120%" }}
              animate={{ y: 0 }}
              transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1], delay: 0.35 }}
            >
              Taxi Conventionné · Villebois · Ain
            </motion.p>
          </div>

          {/* Mentions coins */}
          <motion.span
            className="absolute bottom-6 left-5 sm:left-8 text-[9px] tracking-[0.25em] uppercase text-white/12"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5, duration: 0.6 }}
          >
            Conventionné CPAM
          </motion.span>
          <motion.span
            className="absolute bottom-6 right-5 sm:right-8 text-[9px] tracking-[0.25em] uppercase text-white/12"
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
