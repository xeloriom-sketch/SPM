"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Phone } from "lucide-react";

export default function FloatingCallButton() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const handle = () => setVisible(window.scrollY > 320);
    window.addEventListener("scroll", handle, { passive: true });
    return () => window.removeEventListener("scroll", handle);
  }, []);

  return (
    <AnimatePresence>
      {visible && (
        <motion.a
          href="tel:+33767751898"
          className="fixed bottom-6 right-6 z-40 flex items-center gap-2.5 rounded-full bg-black text-white shadow-[0_8px_32px_rgba(0,0,0,0.28)] px-5 py-3.5 md:hidden"
          initial={{ scale: 0, opacity: 0, y: 16 }}
          animate={{ scale: 1, opacity: 1, y: 0 }}
          exit={{ scale: 0, opacity: 0, y: 16 }}
          transition={{ type: "spring", stiffness: 400, damping: 22 }}
          whileTap={{ scale: 0.92 }}
        >
          <Phone className="h-4 w-4" strokeWidth={2} />
          <span className="text-sm font-semibold tracking-wide">07 67 75 18 98</span>
        </motion.a>
      )}
    </AnimatePresence>
  );
}
