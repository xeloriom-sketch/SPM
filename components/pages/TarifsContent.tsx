"use client";

import { useRef } from "react";
import { motion, useInView, useScroll } from "framer-motion";
import { useIsMobile } from "@/lib/use-is-mobile";
import Link from "next/link";
import { Phone, CheckCircle, Info, ArrowRight } from "lucide-react";
import HeroVideo from "@/components/HeroVideo";
import SplitText from "@/components/ui/SplitText";
import { revealVariants, revealSubtle, spring } from "@/lib/motion";
import { sitePath } from "@/lib/site-path";
import { useSettings } from "@/lib/settings-context";

const inclus = [
  "Prise en charge à domicile incluse",
  "Aide aux bagages",
  "Suivi des vols en temps réel (aéroport)",
  "Wi-Fi à bord",
  "Eau minérale offerte",
  "Attente gratuite (10 min aéroport/gare)",
];

const paiements = [
  { label: "Espèces",          detail: "Paiement à la fin du trajet" },
  { label: "Carte bancaire",   detail: "CB, Visa, Mastercard" },
  { label: "American Express", detail: "Carte Amex acceptée" },
];

function TiguanIllustration() {
  const ref = useRef<SVGSVGElement>(null);
  const inView = useInView(ref as any, { once: true, amount: 0.3 });
  return (
    <svg ref={ref} viewBox="0 0 500 200" fill="none" className="w-full max-w-lg mx-auto h-auto" aria-hidden>
      {/* Road */}
      <motion.rect x="0" y="164" width="500" height="8" rx="4" fill="white" opacity="0"
        animate={inView ? { opacity: 0.06 } : {}} transition={{ duration: 0.5, delay: 0.1 }} />
      {/* Road dashes */}
      {[0,1,2,3,4].map(i => (
        <motion.rect key={i} x={30+i*86} y="166" width="46" height="4" rx="2" fill="#b6f000"
          initial={{ scaleX: 0, opacity: 0 }}
          animate={inView ? { scaleX: 1, opacity: 0.45 } : {}}
          transition={{ duration: 0.25, delay: 0.15 + i*0.07 }}
          style={{ transformOrigin: `${30+i*86}px 168px` }}
        />
      ))}
      {/* SUV body — slides in */}
      <motion.g initial={{ x: -180, opacity: 0 }} animate={inView ? { x: 0, opacity: 1 } : {}}
        transition={{ duration: 1.1, ease: [0.16,1,0.3,1], delay: 0.2 }}>
        {/* Main body */}
        <rect x="60" y="110" width="380" height="54" rx="6" fill="white" opacity="0.9" />
        {/* Roof */}
        <path d="M130 110 L160 68 L340 68 L370 110 Z" fill="white" opacity="0.85" />
        {/* Windshield front */}
        <path d="M340 110 L366 74 L340 74 Z" fill="#111" opacity="0.4" />
        {/* Windshield rear */}
        <path d="M160 110 L136 74 L164 74 Z" fill="#111" opacity="0.4" />
        {/* Side windows */}
        <rect x="170" y="72" width="60" height="34" rx="3" fill="#111" opacity="0.35" />
        <rect x="238" y="72" width="60" height="34" rx="3" fill="#111" opacity="0.35" />
        {/* Door lines */}
        <line x1="236" y1="110" x2="236" y2="164" stroke="#bbb" strokeWidth="1" opacity="0.2" />
        <line x1="302" y1="110" x2="302" y2="164" stroke="#bbb" strokeWidth="1" opacity="0.2" />
        {/* Grill lines */}
        {[0,1,2].map(i => (
          <line key={i} x1="368" y1={120+i*10} x2="436" y2={120+i*10}
            stroke="#b6f000" strokeWidth="1.5" opacity="0.55" strokeLinecap="round" />
        ))}
        {/* Headlight */}
        <motion.path d="M370 112 L434 108 L434 126 L372 130 Z" fill="#b6f000" opacity="0"
          animate={inView ? { opacity: [0, 0.5, 0.3] } : {}}
          transition={{ duration: 0.8, delay: 1.0 }}
        />
        {/* Rear light */}
        <rect x="60" y="115" width="12" height="22" rx="3" fill="#b6f000" opacity="0"
          style={{ transformOrigin: "66px 126px" }}
        />
        <motion.rect x="60" y="115" width="12" height="22" rx="3" fill="#b6f000"
          animate={inView ? { opacity: [0, 0.6, 0.4] } : { opacity: 0 }}
          transition={{ duration: 0.8, delay: 1.1 }}
        />
        {/* Wheels */}
        {[132, 368].map(cx => (
          <g key={cx}>
            <circle cx={cx} cy="164" r="26" fill="#111" stroke="white" strokeWidth="2.5" />
            <circle cx={cx} cy="164" r="12" fill="#222" />
            <motion.line x1={cx} y1="138" x2={cx} y2="190" stroke="white" strokeWidth="1.5" opacity="0.25"
              animate={inView ? { rotate: 360 } : {}}
              transition={{ duration: 2.5, repeat: Infinity, ease: "linear", delay: 0.8 }}
              style={{ transformOrigin: `${cx}px 164px` }}
            />
            <motion.line x1={cx-26} y1="164" x2={cx+26} y2="164" stroke="white" strokeWidth="1.5" opacity="0.25"
              animate={inView ? { rotate: 360 } : {}}
              transition={{ duration: 2.5, repeat: Infinity, ease: "linear", delay: 0.8 }}
              style={{ transformOrigin: `${cx}px 164px` }}
            />
          </g>
        ))}
        {/* Lime accent stripe */}
        <motion.rect x="60" y="138" width="380" height="4" rx="2" fill="#b6f000"
          initial={{ scaleX: 0 }} animate={inView ? { scaleX: 1 } : {}}
          transition={{ delay: 0.9, duration: 0.6, ease: [0.16,1,0.3,1] }}
          style={{ transformOrigin: "60px 140px" }}
        />
      </motion.g>
    </svg>
  );
}

export default function TarifsContent() {
  const s = useSettings();

  const tarifs = [
    {
      cat: "Transferts Aéroport & Gare",
      dark: true,
      items: [
        { trajet: s.tarif_route1_label, prix: s.tarif_route1_price },
        { trajet: s.tarif_route2_label, prix: s.tarif_route2_price },
        { trajet: s.tarif_route3_label, prix: s.tarif_route3_price },
        { trajet: s.tarif_route4_label, prix: s.tarif_route4_price },
        { trajet: s.tarif_route5_label, prix: s.tarif_route5_price },
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
        { trajet: s.tarif_route6_label,  prix: s.tarif_route6_price },
        { trajet: s.tarif_route7_label,  prix: s.tarif_route7_price },
        { trajet: s.tarif_route8_label,  prix: s.tarif_route8_price },
        { trajet: s.tarif_route9_label,  prix: s.tarif_route9_price },
        { trajet: s.tarif_route10_label, prix: s.tarif_route10_price },
      ],
    },
  ];

  const isMobile = useIsMobile();
  const heroContainerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress: heroProgress } = useScroll({
    target: heroContainerRef,
    offset: ["start start", "end end"],
  });

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
      <h1 className="sr-only">Tarifs SPM Taxi — Aéroport Lyon, CPAM, Longue Distance | Ain</h1>
      {/* ── HERO ── */}
      <div ref={heroContainerRef} style={{ height: isMobile ? "100svh" : "180vh" }}>
      <section ref={heroRef} className="sticky top-0 relative w-full bg-black overflow-hidden flex flex-col select-none" style={{ height: "100svh" }}>
        {/* Vidéo fond */}
        <div className="absolute inset-0 z-0">
          <HeroVideo src={sitePath("/videos/11661703-web.mp4")} scrollYProgress={isMobile ? undefined : heroProgress} />
        </div>

        {/* Overlays */}
        <div className="pointer-events-none absolute inset-0 z-[5]">
          <div className="absolute inset-x-0 top-0 h-40 bg-gradient-to-b from-black/75 to-transparent" />
          <div className="absolute inset-x-0 bottom-0 h-[65%] bg-gradient-to-t from-black via-black/75 to-transparent" />
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
                href={`tel:${s.contact_phone.replace(/[\s.-]/g, "")}`}
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
              { label: "Paiement",       value: "CB · Espèces · Amex" },
            ].map((item, i) => (
              <motion.div
                key={i}
                className={`flex flex-col ${i !== 0 ? "md:pl-8 md:border-l md:border-white/10" : ""}`}
                initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}
                transition={{ type: "spring", stiffness: 280, damping: 22, mass: 0.75, delay: 0.7 + i * 0.07 }}
              >
                <span className="mb-1 text-[9px] sm:text-[10px] font-semibold tracking-[0.22em] uppercase text-white/30">{item.label}</span>
                <span className="text-sm sm:text-base font-semibold tracking-tight text-white">{item.value}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
      </div>

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

      {/* ── TIGUAN SHOWCASE ANIMÉ ── */}
      <section className="bg-[#0d0d0d] py-16 md:py-20 relative overflow-hidden">
        <div className="pointer-events-none absolute inset-0"
          style={{
            backgroundImage: "radial-gradient(circle, rgba(255,255,255,0.05) 1px, transparent 1px)",
            backgroundSize: "28px 28px",
          }}
        />
        <div className="pointer-events-none absolute inset-0"
          style={{ background: "radial-gradient(ellipse at 50% 50%, transparent 40%, #0d0d0d 100%)" }}
        />
        <div className="relative max-w-4xl mx-auto px-4 sm:px-8 text-center">
          <motion.p
            initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }} transition={{ duration: 0.5 }}
            className="text-[10px] font-bold tracking-[0.3em] uppercase text-white/30 mb-4"
          >Le véhicule</motion.p>
          <motion.h3
            initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }} transition={{ duration: 0.6, delay: 0.08 }}
            className="text-2xl md:text-3xl font-semibold text-white tracking-tight mb-10"
          >Volkswagen Tiguan Allspace — 7 places</motion.h3>

          {/* Illustration SVG voiture de côté */}
          <TiguanIllustration />

          {/* Specs grid */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3 mt-10">
            {[
              { value: "7", label: "Places assises" },
              { value: "SUV", label: "Confort premium" },
              { value: "Wi-Fi", label: "À bord inclus" },
              { value: "⚓", label: "Attache-remorque" },
            ].map((s, i) => (
              <motion.div key={s.label}
                initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }} transition={{ delay: 0.5 + i * 0.08, duration: 0.5, ease: [0.16,1,0.3,1] }}
                className="rounded-2xl border border-white/[0.07] bg-white/[0.03] py-5 px-3"
              >
                <p className="text-2xl font-black text-white mb-1">{s.value}</p>
                <p className="text-[10px] font-semibold tracking-[0.2em] uppercase text-white/35">{s.label}</p>
              </motion.div>
            ))}
          </div>
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
              href={`tel:${s.contact_phone.replace(/[\s.-]/g, "")}`}
              className="inline-flex items-center gap-2 rounded-full bg-white text-black px-7 py-3 text-sm font-semibold"
              whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }} transition={spring}
            >
              <Phone className="h-4 w-4" /> {s.contact_phone}
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
