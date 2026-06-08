"use client";

import { useState, useRef } from "react";
import { motion, useInView, AnimatePresence } from "framer-motion";
import { ArrowRight } from "lucide-react";
import SplitText from "@/components/ui/SplitText";

const faqs = [
  { q: "Qu'est-ce qu'un taxi conventionné ?", a: "Un taxi conventionné est agréé par la CPAM pour les transports médicaux. Les trajets peuvent être pris en charge partiellement ou totalement par l'Assurance Maladie sur prescription médicale." },
  { q: "Comment obtenir un devis ?", a: "Remplissez le formulaire de contact ou appelez directement. Je réponds sous 2h avec une estimation de prix. Devis gratuits et sans engagement." },
  { q: "Quelles zones couvrez-vous ?", a: "Je suis basé à Villebois et j'interviens dans l'Ain, à Lyon et en Isère. Pour les longues distances, je me déplace partout en France sur devis." },
  { q: "Puis-je transporter des animaux ?", a: "Oui, dans une caisse de transport adaptée ou avec un harnais de sécurité. Merci de le signaler à la réservation." },
  { q: "Puis-je réserver à l'avance ?", a: "Absolument — je vous encourage même à réserver tôt pour les aéroports et rendez-vous médicaux. Les réservations de dernière minute sont aussi acceptées selon disponibilité." },
  { q: "Quels modes de paiement acceptez-vous ?", a: "Espèces, carte bancaire (CB, Visa, Mastercard) et chèque. Pour les transports médicaux, la prise en charge CPAM est gérée directement." },
];

export default function FAQ() {
  const [open, setOpen] = useState<number | null>(null);
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="faq" className="w-full bg-[#f8f9fa] py-20 md:py-28 font-sans">
      <div ref={ref} className="max-w-[1440px] mx-auto px-6 sm:px-12 lg:px-20">

        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <h2 className="text-3xl sm:text-4xl font-medium tracking-tight text-black mb-4">
            <SplitText text="Questions fréquentes" mode="word" />
          </h2>
          <motion.p
            className="text-xs sm:text-sm text-[#555555] leading-relaxed font-normal"
            initial={{ opacity: 0, y: 15 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.25 }}
          >
            Vous avez une autre question ? Contactez-moi directement, je réponds sous 2h.
          </motion.p>
        </div>

        {/* Grid 2 colonnes */}
        <div className="grid grid-cols-1 gap-3 lg:grid-cols-2 lg:gap-4">
          {faqs.map((f, i) => (
            <motion.div
              key={i}
              className={`rounded-[20px] border overflow-hidden transition-all duration-300 ${
                open === i
                  ? "border-black/15 bg-white shadow-[0_4px_20px_rgba(0,0,0,0.05)]"
                  : "border-black/[0.06] bg-white hover:border-black/12"
              }`}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.1 + i * 0.07, ease: [0.16, 1, 0.3, 1] }}
            >
              <button
                className="flex w-full items-center justify-between gap-4 px-6 py-5 text-left"
                onClick={() => setOpen(open === i ? null : i)}
              >
                <span className="text-sm font-medium text-black tracking-tight">{f.q}</span>
                <motion.div
                  className="shrink-0 grid h-6 w-6 place-items-center rounded-full border border-black/10 text-black/30 text-xs transition-colors"
                  animate={{
                    rotate: open === i ? 45 : 0,
                    backgroundColor: open === i ? "#000" : "transparent",
                    color: open === i ? "#fff" : undefined,
                    borderColor: open === i ? "#000" : undefined,
                  }}
                  transition={{ type: "spring", stiffness: 300, damping: 25 }}
                >
                  +
                </motion.div>
              </button>
              <AnimatePresence initial={false}>
                {open === i && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
                  >
                    <p className="px-6 pb-6 text-xs sm:text-sm leading-relaxed text-[#555555]">{f.a}</p>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>

        {/* CTA bas */}
        <motion.div
          className="mt-12 flex justify-center"
          initial={{ opacity: 0, y: 16 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, delay: 0.7 }}
        >
          <a
            href="#contact"
            className="group inline-flex items-center gap-4 rounded-full bg-black pl-5 pr-1.5 py-1.5 text-[11px] font-medium tracking-wider text-white transition-all hover:bg-[#111111]"
          >
            <span>Poser une autre question</span>
            <div className="flex h-7 w-7 items-center justify-center rounded-full bg-white text-black transition-transform duration-300 group-hover:translate-x-0.5">
              <ArrowRight className="h-3.5 w-3.5 stroke-[2.5]" />
            </div>
          </a>
        </motion.div>

      </div>
    </section>
  );
}
