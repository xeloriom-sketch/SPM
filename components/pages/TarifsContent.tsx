"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import Link from "next/link";
import { Phone, CheckCircle, Info, ArrowRight } from "lucide-react";
import VideoPlayer from "@/components/VideoPlayer";
import SplitText from "@/components/ui/SplitText";
import { revealVariants, revealSubtle, spring } from "@/lib/motion";
import { sitePath } from "@/lib/site-path";

const tarifs = [
  {
    cat: "Transferts Aéroport & Gare",
    dark: true,
    items: [
      { trajet: "Villebois → Lyon Saint-Exupéry",    prix: "À partir de 65 €" },
      { trajet: "Ambérieu → Lyon Saint-Exupéry",     prix: "À partir de 70 €" },
      { trajet: "Bourg-en-Bresse → Lyon Part-Dieu",  prix: "À partir de 75 €" },
      { trajet: "Lyon Centre → Saint-Exupéry",       prix: "À partir de 55 €" },
      { trajet: "Grenoble → Lyon Saint-Exupéry",     prix: "À partir de 90 €" },
    ],
  },
  {
    cat: "Transport Médical CPAM",
    dark: false,
    items: [
      { trajet: "Trajet court (< 15 km)",    prix: "Prise en charge CPAM" },
      { trajet: "Trajet moyen (15–50 km)",   prix: "Prise en charge CPAM" },
      { trajet: "Trajet long (> 50 km)",     prix: "Prise en charge CPAM" },
      { trajet: "Chimiothérapie / Dialyse",  prix: "Forfait mensuel CPAM" },
      { trajet: "Hospitalisation",           prix: "Sur prescription médicale" },
    ],
  },
  {
    cat: "Longue Distance",
    dark: false,
    items: [
      { trajet: "Lyon → Paris",     prix: "À partir de 420 €" },
      { trajet: "Lyon → Marseille", prix: "À partir de 290 €" },
      { trajet: "Lyon → Genève",    prix: "À partir de 140 €" },
      { trajet: "Lyon → Bordeaux",  prix: "À partir de 520 €" },
      { trajet: "Lyon → Nice",      prix: "À partir de 400 €" },
    ],
  },
];

const inclus = [
  "Prise en charge à domicile incluse",
  "Aide aux bagages",
  "Suivi des vols en temps réel (aéroport)",
  "Wi-Fi à bord",
  "Eau minérale offerte",
  "Attente gratuite (10 min aéroport/gare)",
];

const paiements = [
  { label: "Espèces",        detail: "Paiement à la fin du trajet" },
  { label: "Carte bancaire", detail: "CB, Visa, Mastercard" },
  { label: "Chèque",         detail: "À l'ordre de SPM Taxi" },
];

export default function TarifsContent() {
  const heroRef   = useRef<HTMLElement>(null);
  const tablesRef = useRef<HTMLDivElement>(null);
  const inclusRef = useRef<HTMLElement>(null);
  const paiRef    = useRef<HTMLElement>(null);
  const ctaRef    = useRef<HTMLElement>(null);

  const tablesIn = useInView(tablesRef, { once: true, margin: "-40px" });
  const inclusIn = useInView(inclusRef, { once: true, margin: "-40px" });
  const paiIn    = useInView(paiRef,    { once: true, margin: "-40px" });
  const ctaIn    = useInView(ctaRef,    { once: true, margin: "-40px" });


  return (
    <>
      {/* ── HERO ── */}
      <section ref={heroRef} className="relative w-full bg-black overflow-hidden flex flex-col select-none" style={{ height: "100svh" }}>
        {/* Vidéo fond */}
        <div className="absolute inset-0 z-0">
          <VideoPlayer src={sitePath("/videos/11661703-web.mp4")} />
        </div>

        {/* Overlays */}
        <div className="pointer-events-none absolute inset-0 z-[5]">
          <div className="absolute inset-x-0 top-0 h-40 bg-gradient-to-b from-black/55 to-transparent" />
          <div className="absolute inset-x-0 bottom-0 h-[65%] bg-gradient-to-t from-black/92 via-black/45 to-transparent" />
        </div>

        {/* Grain cinématique */}
        <div
          className="pointer-events-none absolute inset-0 z-[6] opacity-[0.032]"
          style={{
            backgroundImage: "url(\"data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E\")",
            backgroundSize: "160px",
          }}
        />

        {/* Contenu */}
        <div className="relative z-[10] w-full mt-auto">
          <div className="px-6 pb-5 sm:px-10 sm:pb-6 md:px-14">
            <motion.span
              initial={{ opacity: 0, y: 14 }} animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.5 }}
              className="text-[10px] font-bold tracking-[0.3em] uppercase text-white/35 mb-5 block"
            >
              Tarifs
            </motion.span>

            <div className="overflow-hidden">
              <motion.span
                className="block font-sans font-semibold text-white leading-[1.05] tracking-[-0.025em]"
                style={{ fontSize: "clamp(2rem, 5.5vw, 5.2rem)" }}
                initial={{ y: "110%" }} animate={{ y: 0 }}
                transition={{ type: "spring", stiffness: 280, damping: 22, mass: 0.75, delay: 0.15 }}
              >
                Estimations
              </motion.span>
            </div>
            <div className="overflow-hidden">
              <motion.span
                className="block font-sans font-semibold leading-[1.05] tracking-[-0.025em] text-white/35 font-light italic"
                style={{ fontSize: "clamp(2rem, 5.5vw, 5.2rem)" }}
                initial={{ y: "110%" }} animate={{ y: 0 }}
                transition={{ type: "spring", stiffness: 280, damping: 22, mass: 0.75, delay: 0.22 }}
              >
                &amp; devis gratuit.
              </motion.span>
            </div>

            <motion.div
              initial={{ opacity: 0, y: 18 }} animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.38, duration: 0.55, ease: [0.16, 1, 0.3, 1] }}
              className="flex items-start gap-3 bg-white/10 border border-white/20 rounded-2xl px-4 py-3 mt-5 mb-6 max-w-lg backdrop-blur-sm"
            >
              <Info className="h-4 w-4 text-white/60 shrink-0 mt-0.5" />
              <p className="text-sm text-white/65 leading-relaxed">
                Prix <strong className="text-white/90">indicatifs</strong>. Contactez-moi pour un devis gratuit personnalisé sous 2h.
              </p>
            </motion.div>

            <motion.div
              className="flex flex-wrap items-center gap-3"
              initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }}
              transition={{ type: "spring", stiffness: 280, damping: 22, mass: 0.75, delay: 0.55 }}
            >
              <a
                href="tel:+33767751898"
                className="inline-flex items-center gap-2.5 rounded-full bg-white text-black pl-4 pr-5 py-2.5 text-[11px] font-semibold tracking-wide hover:bg-white/90 transition-colors"
              >
                <Phone className="h-3.5 w-3.5 shrink-0" strokeWidth={2.5} />
                Devis immédiat
              </a>
              <Link
                href="/#contact"
                className="group inline-flex items-center gap-3 rounded-full border border-white/25 text-white pl-4 pr-1.5 py-1.5 text-[11px] font-semibold tracking-wide hover:border-white/50 transition-colors"
              >
                <span>Formulaire en ligne</span>
                <div className="flex h-7 w-7 items-center justify-center rounded-full bg-white/15 transition-transform duration-300 group-hover:translate-x-0.5">
                  <ArrowRight className="h-3 w-3" strokeWidth={2.5} />
                </div>
              </Link>
            </motion.div>
          </div>

          {/* Barre specs */}
          <div
            className="grid grid-cols-2 gap-y-5 border-t border-white/10 px-6 pt-5 text-white sm:px-10 md:grid-cols-4 md:px-14"
            style={{ paddingBottom: "max(3.5rem, env(safe-area-inset-bottom, 3.5rem))" }}
          >
            {[
              { label: "Devis",          value: "Gratuit sous 2h" },
              { label: "Tarification",   value: "Prix fixe bloqué" },
              { label: "Engagement",     value: "Zéro surprise" },
              { label: "Paiement",       value: "CB · Espèces · Chèque" },
            ].map((s, i) => (
              <motion.div
                key={i}
                className={`flex flex-col ${i !== 0 ? "md:pl-8 md:border-l md:border-white/10" : ""}`}
                initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}
                transition={{ type: "spring", stiffness: 280, damping: 22, mass: 0.75, delay: 0.7 + i * 0.07 }}
              >
                <span className="mb-1 text-[9px] sm:text-[10px] font-semibold tracking-[0.22em] uppercase text-white/30">{s.label}</span>
                <span className="text-sm sm:text-base font-semibold tracking-tight text-white">{s.value}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── TABLES ── */}
      <section className="bg-white py-14 md:py-20">
        <div ref={tablesRef} className="max-w-5xl mx-auto px-4 sm:px-8 lg:px-12 space-y-5">
          {tarifs.map((t, ti) => (
            <motion.div
              key={t.cat}
              variants={revealVariants} initial="hidden" animate={tablesIn ? "visible" : "hidden"} custom={ti * 0.1}
              className="rounded-2xl overflow-hidden border border-black/[0.07]"
            >
              <div className={`px-6 py-4 ${t.dark ? "bg-black text-white" : "bg-[#f8f9fa] text-black"}`}>
                <h2 className="text-sm font-bold tracking-wide">{t.cat}</h2>
              </div>
              <div className="bg-white divide-y divide-black/[0.05]">
                {t.items.map((item) => (
                  <motion.div
                    key={item.trajet}
                    className="flex items-center justify-between px-6 py-4 cursor-default"
                    whileHover={{ backgroundColor: "rgba(0,0,0,0.022)", x: 2 }}
                    transition={{ duration: 0.16 }}
                  >
                    <span className="text-sm text-black">{item.trajet}</span>
                    <span className="text-sm font-semibold text-black shrink-0 ml-4">{item.prix}</span>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* ── INCLUS ── */}
      <section ref={inclusRef} className="bg-[#f8f9fa] py-14 md:py-20">
        <div className="max-w-5xl mx-auto px-4 sm:px-8 lg:px-12">
          <motion.h2
            variants={revealSubtle} initial="hidden" animate={inclusIn ? "visible" : "hidden"} custom={0}
            className="text-2xl font-semibold tracking-tight text-black mb-8"
          >
            Toujours inclus dans le prix
          </motion.h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {inclus.map((item, i) => (
              <motion.div
                key={item}
                variants={revealVariants} initial="hidden" animate={inclusIn ? "visible" : "hidden"} custom={i * 0.07}
                className="flex items-center gap-3 bg-white rounded-xl px-5 py-3.5 border border-black/[0.05]"
                whileHover={{ x: 5, backgroundColor: "#f5f5f5" }}
                transition={spring}
              >
                <motion.div whileHover={{ scale: 1.2, rotate: 10 }} transition={spring}>
                  <CheckCircle className="h-4 w-4 text-black shrink-0" />
                </motion.div>
                <span className="text-sm text-black">{item}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── PAIEMENT ── */}
      <section ref={paiRef} className="bg-white py-14 md:py-20">
        <div className="max-w-5xl mx-auto px-4 sm:px-8 lg:px-12">
          <motion.h2
            variants={revealSubtle} initial="hidden" animate={paiIn ? "visible" : "hidden"} custom={0}
            className="text-2xl font-semibold tracking-tight text-black mb-8"
          >
            Modes de paiement
          </motion.h2>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-5">
            {paiements.map((p, i) => (
              <motion.div
                key={p.label}
                variants={revealVariants} initial="hidden" animate={paiIn ? "visible" : "hidden"} custom={i * 0.1}
                className="bg-[#f8f9fa] rounded-2xl p-6 border border-black/[0.05]"
                whileHover={{ y: -6, scale: 1.02, boxShadow: "0 12px 32px rgba(0,0,0,0.08)" }}
                whileTap={{ scale: 0.97 }}
                transition={spring}
              >
                <p className="text-sm font-semibold text-black mb-1">{p.label}</p>
                <p className="text-xs text-[#666]">{p.detail}</p>
              </motion.div>
            ))}
          </div>
          <motion.p
            variants={revealSubtle} initial="hidden" animate={paiIn ? "visible" : "hidden"} custom={0.35}
            className="text-xs text-[#888]"
          >
            Pour les transports médicaux CPAM, la facturation est gérée directement avec l&apos;Assurance Maladie. Aucune avance de frais.
          </motion.p>
        </div>
      </section>

      {/* ── CTA FULL WIDTH ── */}
      <section ref={ctaRef} className="bg-black py-16 md:py-24 px-4 sm:px-10 text-center">
        <motion.div
          variants={revealVariants} initial="hidden" animate={ctaIn ? "visible" : "hidden"} custom={0}
        >
          <h2 className="text-2xl sm:text-3xl font-semibold text-white mb-3">Obtenez votre devis gratuit</h2>
          <p className="text-white/45 text-sm mb-10">Réponse sous 2h · Tarif fixe garanti · Sans engagement</p>
          <div className="flex flex-wrap justify-center gap-4">
            <motion.a
              href="tel:+33767751898"
              className="inline-flex items-center gap-2 rounded-full bg-white text-black px-7 py-3 text-sm font-semibold"
              whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }} transition={spring}
            >
              <Phone className="h-4 w-4" /> 07 67 75 18 98
            </motion.a>
            <motion.div whileHover={{ scale: 1.04 }} whileTap={{ scale: 0.95 }} transition={spring}>
              <Link href="/#contact" className="inline-flex items-center gap-2 rounded-full border border-white/25 text-white px-7 py-3 text-sm font-semibold hover:border-white/55 transition-colors">
                Formulaire en ligne
              </Link>
            </motion.div>
          </div>
        </motion.div>
      </section>
    </>
  );
}
