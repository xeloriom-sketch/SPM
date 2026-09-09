"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Phone, MessageCircle } from "lucide-react";
import { useSettings } from "@/lib/settings-context";

const WA_MSG = encodeURIComponent("Bonjour, je souhaite réserver un taxi. Pouvez-vous me rappeler ?");

export default function FloatingCallButton() {
  const s = useSettings();
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const handle = () => setVisible(window.scrollY > 320);
    window.addEventListener("scroll", handle, { passive: true });
    return () => window.removeEventListener("scroll", handle);
  }, []);

  const phone = s.contact_phone.replace(/[\s.-]/g, "");

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          className="fixed bottom-6 right-4 z-40 flex flex-col gap-2 items-end"
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 16 }}
          transition={{ type: "spring", stiffness: 400, damping: 22 }}
        >
          {/* WhatsApp — desktop: icône seule ; mobile: icône + texte */}
          <motion.a
            href={`https://wa.me/33${phone.replace(/^0/, "")}?text=${WA_MSG}`}
            target="_blank"
            rel="noopener noreferrer"
            title="WhatsApp SPM Taxi"
            className="flex items-center gap-2 rounded-full bg-[#25D366] text-white shadow-[0_8px_24px_rgba(37,211,102,0.4)] px-4 py-3 md:px-3"
            whileTap={{ scale: 0.92 }}
          >
            <MessageCircle className="h-4 w-4 shrink-0" strokeWidth={2} />
            <span className="text-sm font-semibold tracking-wide md:hidden">WhatsApp</span>
          </motion.a>

          {/* Appel — mobile uniquement avec numéro */}
          <motion.a
            href={`tel:${phone}`}
            title="Appeler SPM Taxi"
            className="flex items-center gap-2.5 rounded-full bg-black text-white shadow-[0_8px_32px_rgba(0,0,0,0.28)] px-5 py-3.5 md:px-3"
            whileTap={{ scale: 0.92 }}
          >
            <Phone className="h-4 w-4 shrink-0" strokeWidth={2} />
            <span className="text-sm font-semibold tracking-wide md:hidden">{s.contact_phone}</span>
          </motion.a>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
