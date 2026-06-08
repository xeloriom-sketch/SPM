"use client";

import { useState, useRef } from "react";
import { motion, useInView, AnimatePresence } from "framer-motion";
import { ArrowRight } from "lucide-react";
import SplitText from "@/components/ui/SplitText";
import { spring, springFast, revealVariants, revealSubtle } from "@/lib/motion";
import { useSettings } from "@/lib/settings-context";

export default function FAQ() {
  const s = useSettings();
  const [open, setOpen] = useState<number | null>(null);
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const faqs = [
    { q: s.faq1_q, a: s.faq1_a },
    { q: s.faq2_q, a: s.faq2_a },
    { q: s.faq3_q, a: s.faq3_a },
    { q: s.faq4_q, a: s.faq4_a },
    { q: s.faq5_q, a: s.faq5_a },
    { q: s.faq6_q, a: s.faq6_a },
  ];

  return (
    <section id="faq" className="w-full bg-[#f8f9fa] py-20 md:py-28 font-sans">
      <div ref={ref} className="max-w-[1440px] mx-auto px-6 sm:px-12 lg:px-20">

        <div className="text-center max-w-2xl mx-auto mb-16">
          <h2 className="text-3xl sm:text-4xl font-medium tracking-tight text-black mb-4">
            <SplitText text="Questions fréquentes" mode="word" />
          </h2>
          <motion.p
            className="text-xs sm:text-sm text-[#555555] leading-relaxed font-normal"
            variants={revealSubtle}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            custom={0.2}
          >
            Vous avez une autre question ? Contactez-moi directement, je réponds sous 2h.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 gap-3 lg:grid-cols-2 lg:gap-4">
          {faqs.map((f, i) => (
            <motion.div
              key={i}
              className={`rounded-[20px] border overflow-hidden ${
                open === i
                  ? "border-black/15 bg-white shadow-[0_4px_20px_rgba(0,0,0,0.05)]"
                  : "border-black/[0.06] bg-white"
              }`}
              variants={revealVariants}
              initial="hidden"
              animate={isInView ? "visible" : "hidden"}
              custom={0.08 + i * 0.09}
              whileHover={open !== i ? { y: -3, scale: 1.01 } : {}}
              transition={spring}
            >
              <button
                className="flex w-full items-center justify-between gap-4 px-6 py-5 text-left"
                onClick={() => setOpen(open === i ? null : i)}
              >
                <span className="text-sm font-medium text-black tracking-tight">{f.q}</span>
                <motion.div
                  className="shrink-0 grid h-6 w-6 place-items-center rounded-full border border-black/10 text-black/30 text-xs"
                  animate={{
                    rotate: open === i ? 45 : 0,
                    backgroundColor: open === i ? "#000" : "transparent",
                    color: open === i ? "#fff" : undefined,
                    borderColor: open === i ? "#000" : undefined,
                    scale: open === i ? 1.1 : 1,
                  }}
                  transition={{ type: "spring", stiffness: 420, damping: 24 }}
                >
                  +
                </motion.div>
              </button>
              <AnimatePresence initial={false}>
                {open === i && (
                  <motion.div
                    initial={{ height: 0, opacity: 0, y: -8 }}
                    animate={{ height: "auto", opacity: 1, y: 0 }}
                    exit={{ height: 0, opacity: 0, y: -8 }}
                    transition={{ type: "spring", stiffness: 340, damping: 26, mass: 0.9 }}
                  >
                    <p className="px-6 pb-6 text-xs sm:text-sm leading-relaxed text-[#555555]">{f.a}</p>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>

        <motion.div
          className="mt-12 flex justify-center"
          variants={revealSubtle}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          custom={0.7}
        >
          <motion.a
            href="#contact"
            className="group inline-flex items-center gap-4 rounded-full bg-black pl-5 pr-1.5 py-1.5 text-[11px] font-medium tracking-wider text-white"
            whileHover={{ scale: 1.04, y: -2 }}
            whileTap={{ scale: 0.96 }}
            transition={springFast}
          >
            <span>Poser une autre question</span>
            <div className="flex h-7 w-7 items-center justify-center rounded-full bg-white text-black transition-transform duration-300 group-hover:translate-x-0.5">
              <ArrowRight className="h-3.5 w-3.5 stroke-[2.5]" />
            </div>
          </motion.a>
        </motion.div>

      </div>
    </section>
  );
}
