"use client";

import { useState, useRef } from "react";
import { motion, useInView, AnimatePresence } from "framer-motion";

const faqs = [
  { q: "Qu'est-ce qu'un taxi conventionné ?", a: "Un taxi conventionné est agréé par la CPAM pour les transports médicaux. Les trajets peuvent être pris en charge partiellement ou totalement par l'Assurance Maladie sur prescription médicale." },
  { q: "Comment obtenir un devis ?", a: "Remplissez le formulaire de contact ou appelez directement. Je réponds sous 2h avec une estimation de prix. Devis gratuits et sans engagement." },
  { q: "Quelles zones couvrez-vous ?", a: "Je suis basé à Tignieu-Jameyzieu et j'interviens dans l'Ain, à Lyon et en Isère. Pour les longues distances, je me déplace partout en France sur devis." },
  { q: "Puis-je transporter des animaux ?", a: "Oui, dans une caisse de transport adaptée ou avec un harnais de sécurité. Merci de le signaler à la réservation." },
  { q: "Puis-je réserver à l'avance ?", a: "Absolument — je vous encourage même à réserver tôt pour les aéroports et rendez-vous médicaux. Les réservations de dernière minute sont aussi acceptées selon disponibilité." },
  { q: "Quels modes de paiement acceptez-vous ?", a: "Espèces, carte bancaire (CB, Visa, Mastercard) et chèque. Pour les transports médicaux, la prise en charge CPAM est gérée directement." },
];

export default function FAQ() {
  const [open, setOpen] = useState<number | null>(null);
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="faq" className="w-full bg-white py-24 px-6 sm:px-10 lg:px-16">
      <div ref={ref} className="max-w-[1440px] mx-auto">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-[0.8fr_1.2fr] lg:gap-20">
          {/* Left */}
          <div className="flex flex-col justify-between">
            <div>
              <motion.p
                className="text-xs uppercase tracking-[0.2em] text-mutedc mb-3"
                initial={{ opacity: 0 }}
                animate={isInView ? { opacity: 1 } : {}}
                transition={{ duration: 0.5 }}
              >
                FAQ
              </motion.p>
              <div className="overflow-hidden mb-6">
                <motion.h2
                  className="font-sans text-4xl font-black tracking-tighter text-dark sm:text-5xl"
                  initial={{ y: "100%" }}
                  animate={isInView ? { y: 0 } : {}}
                  transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
                >
                  Questions<br />fréquentes
                </motion.h2>
              </div>
              <motion.p
                className="text-sm leading-relaxed text-mutedc"
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.2 }}
              >
                Vous avez une autre question ? Contactez-moi directement, je réponds sous 2h.
              </motion.p>
            </div>
            <motion.a
              href="#contact"
              className="group mt-10 inline-flex items-center gap-3 rounded-2xl bg-dark p-5 lg:mt-0"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              transition={{ type: "spring", stiffness: 400, damping: 25 }}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
            >
              <div className="grid h-10 w-10 place-items-center rounded-xl bg-lime text-dark">
                <span className="text-lg font-black">?</span>
              </div>
              <div>
                <p className="text-sm font-bold text-white">Autre question ?</p>
                <p className="text-xs text-white/40">Réponse garantie sous 2h</p>
              </div>
              <span className="ml-auto text-white/30 group-hover:text-white transition-colors">→</span>
            </motion.a>
          </div>

          {/* Right accordion */}
          <div className="flex flex-col gap-2">
            {faqs.map((f, i) => (
              <motion.div
                key={i}
                className={`rounded-2xl border overflow-hidden transition-colors ${open === i ? "border-dark/20 bg-surface" : "border-borderc bg-white hover:border-dark/15"}`}
                initial={{ opacity: 0, y: 24 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ type: "spring", stiffness: 120, damping: 20, delay: 0.1 + i * 0.07 }}
              >
                <button
                  className="flex w-full items-center justify-between gap-4 px-5 py-4 text-left"
                  onClick={() => setOpen(open === i ? null : i)}
                >
                  <span className="text-sm font-semibold text-dark">{f.q}</span>
                  <motion.span
                    className="shrink-0 grid h-7 w-7 place-items-center rounded-full border border-borderc text-mutedc text-xs"
                    animate={{ rotate: open === i ? 45 : 0, background: open === i ? "#080808" : "transparent", color: open === i ? "#ffffff" : "#888" }}
                    transition={{ type: "spring", stiffness: 300, damping: 25 }}
                  >
                    +
                  </motion.span>
                </button>
                <AnimatePresence initial={false}>
                  {open === i && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
                    >
                      <p className="px-5 pb-5 text-sm leading-relaxed text-mutedc">{f.a}</p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
