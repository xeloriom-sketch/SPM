"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import SplitText from "@/components/ui/SplitText";
import { spring, revealSubtle } from "@/lib/motion";
import { useSettings } from "@/lib/settings-context";

function Stars({ count }: { count: number }) {
  return (
    <div className="flex gap-0.5">
      {[1, 2, 3, 4, 5].map((i) => (
        <span key={i} className={`text-[11px] ${i <= count ? "text-black" : "text-black/20"}`}>★</span>
      ))}
    </div>
  );
}

function TestimonialCard({ t, variant = "light" }: { t: { name: string; stars: number; date: string; text: string }; variant?: "light" | "gray" }) {
  return (
    <motion.div
      className={`w-[260px] sm:w-[290px] shrink-0 rounded-[18px] border p-4 sm:p-5 cursor-default ${
        variant === "gray"
          ? "border-black/[0.04] bg-[#f8f9fa]"
          : "border-black/[0.06] bg-[#f8f9fa]"
      }`}
      whileHover={{ y: -6, scale: 1.02, boxShadow: "0 12px 40px rgba(0,0,0,0.1)" }}
      transition={spring}
    >
      <div className="mb-3 flex items-center gap-2.5">
        <div className={`grid h-8 w-8 shrink-0 place-items-center rounded-full text-[11px] font-bold ${
          variant === "gray" ? "border border-black/10 text-black/50" : "bg-black text-white"
        }`}>
          {t.name.charAt(0).toUpperCase()}
        </div>
        <div>
          <p className="text-xs font-semibold text-black">{t.name}</p>
          <p className="text-[10px] text-[#767676]">{t.date}</p>
        </div>
      </div>
      <div className="mb-2.5">
        <Stars count={t.stars} />
      </div>
      <p className="text-xs leading-relaxed text-[#555555]">{t.text}</p>
    </motion.div>
  );
}

export default function Testimonials() {
  const s = useSettings();
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  const testimonials = [
    { name: s.testimonial1_name, stars: parseInt(s.testimonial1_stars, 10), date: s.testimonial1_date, text: s.testimonial1_text },
    { name: s.testimonial2_name, stars: parseInt(s.testimonial2_stars, 10), date: s.testimonial2_date, text: s.testimonial2_text },
    { name: s.testimonial3_name, stars: parseInt(s.testimonial3_stars, 10), date: s.testimonial3_date, text: s.testimonial3_text },
    { name: s.testimonial4_name, stars: parseInt(s.testimonial4_stars, 10), date: s.testimonial4_date, text: s.testimonial4_text },
    { name: s.testimonial5_name, stars: parseInt(s.testimonial5_stars, 10), date: s.testimonial5_date, text: s.testimonial5_text },
    { name: s.testimonial6_name, stars: parseInt(s.testimonial6_stars, 10), date: s.testimonial6_date, text: s.testimonial6_text },
    { name: s.testimonial7_name, stars: parseInt(s.testimonial7_stars, 10), date: s.testimonial7_date, text: s.testimonial7_text },
    { name: s.testimonial8_name, stars: parseInt(s.testimonial8_stars, 10), date: s.testimonial8_date, text: s.testimonial8_text },
    { name: s.testimonial9_name, stars: parseInt(s.testimonial9_stars, 10), date: s.testimonial9_date, text: s.testimonial9_text },
  ];

  const row1 = [...testimonials, ...testimonials];
  const row2 = [...testimonials, ...testimonials].reverse();

  return (
    <section className="w-full overflow-hidden bg-white py-20 md:py-28 font-sans">

      <div ref={ref} className="max-w-[1440px] mx-auto px-6 sm:px-12 lg:px-20 mb-14">
        <div className="text-center max-w-2xl mx-auto">
          <h2 className="text-3xl sm:text-4xl font-medium tracking-tight text-black mb-4">
            <SplitText text="Ils me font confiance" mode="word" />
          </h2>
          <motion.div
            className="flex items-center justify-center gap-2"
            variants={revealSubtle}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            custom={0.3}
          >
            <div className="flex gap-0.5">
              {[...Array(5)].map((_, i) => (
                <motion.span
                  key={i}
                  className="text-sm text-black"
                  initial={{ opacity: 0, scale: 0, rotate: -30 }}
                  animate={isInView ? { opacity: 1, scale: 1, rotate: 0 } : {}}
                  transition={{ type: "spring", stiffness: 480, damping: 22, delay: 0.4 + i * 0.06 }}
                >
                  ★
                </motion.span>
              ))}
            </div>
            <span className="text-sm font-semibold text-black">{s.google_rating}</span>
            <span className="text-xs text-[#767676]">· {s.google_review_count} avis Google vérifiés</span>
          </motion.div>
        </div>
      </div>

      {/* Row 1 — left to right */}
      <div className="relative mb-3">
        <div className="pointer-events-none absolute bottom-0 left-0 top-0 z-10 w-12 sm:w-24 bg-gradient-to-r from-white to-transparent" />
        <div className="pointer-events-none absolute bottom-0 right-0 top-0 z-10 w-12 sm:w-24 bg-gradient-to-l from-white to-transparent" />
        <div className="flex gap-3 pl-3">
          <motion.div
            className="flex min-w-max gap-3"
            animate={{ x: ["0%", "-50%"] }}
            transition={{ duration: 40, repeat: Infinity, ease: "linear" }}
          >
            {row1.map((t, i) => (
              <TestimonialCard key={i} t={t} variant="light" />
            ))}
          </motion.div>
        </div>
      </div>

      {/* Row 2 — right to left */}
      <div className="relative">
        <div className="pointer-events-none absolute bottom-0 left-0 top-0 z-10 w-12 sm:w-24 bg-gradient-to-r from-white to-transparent" />
        <div className="pointer-events-none absolute bottom-0 right-0 top-0 z-10 w-12 sm:w-24 bg-gradient-to-l from-white to-transparent" />
        <div className="flex gap-3 pl-3">
          <motion.div
            className="flex min-w-max gap-3"
            animate={{ x: ["-50%", "0%"] }}
            transition={{ duration: 32, repeat: Infinity, ease: "linear" }}
          >
            {row2.map((t, i) => (
              <TestimonialCard key={i} t={t} variant="gray" />
            ))}
          </motion.div>
        </div>
      </div>

    </section>
  );
}
