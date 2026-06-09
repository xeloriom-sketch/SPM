"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import Link from "next/link";
import { Phone, ArrowRight } from "lucide-react";
import HeroVideo from "@/components/HeroVideo";
import { spring } from "@/lib/motion";
import { sitePath } from "@/lib/site-path";
import { useSettings } from "@/lib/settings-context";

/* ── Animated icons ─────────────────────────────────────────────────── */

function IconPlane({ go }: { go: boolean }) {
  return (
    <svg viewBox="0 0 160 80" fill="none" className="w-40 h-20" aria-hidden>
      {/* Trail dashes */}
      <motion.path
        d="M14 54 Q70 8 148 32"
        stroke="#b6f000" strokeWidth="1.5" strokeDasharray="5 5" fill="none"
        initial={{ pathLength: 0, opacity: 0 }}
        animate={go ? { pathLength: 1, opacity: 0.55 } : {}}
        transition={{ duration: 1.4, ease: "easeInOut", delay: 0.5 }}
      />
      {/* Plane body */}
      <motion.g
        initial={{ x: -70, opacity: 0 }}
        animate={go ? { x: 0, opacity: 1 } : {}}
        transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1], delay: 0.2 }}
      >
        <path d="M62 30 L88 40 L62 50 L66 40 Z" fill="white" />
        <path d="M56 36 L66 30 L66 50 Z" fill="white" opacity="0.55" />
        <path d="M62 36 L72 33 L72 38 Z" fill="white" opacity="0.4" />
      </motion.g>
    </svg>
  );
}

function IconHeartbeat({ go }: { go: boolean }) {
  return (
    <svg viewBox="0 0 160 80" fill="none" className="w-40 h-20" aria-hidden>
      {/* ECG line */}
      <motion.path
        d="M10 48 L38 48 L46 24 L54 62 L62 38 L70 48 L150 48"
        stroke="#b6f000" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round"
        initial={{ pathLength: 0, opacity: 0 }}
        animate={go ? { pathLength: 1, opacity: 0.7 } : {}}
        transition={{ duration: 1.2, ease: "easeInOut", delay: 0.3 }}
      />
      {/* Heart */}
      <motion.path
        d="M80 56 C80 56 62 44 62 34 C62 28 68 24 74 28 C76 29 78 31 80 34 C82 31 84 29 86 28 C92 24 98 28 98 34 C98 44 80 56 80 56Z"
        fill="white"
        initial={{ scale: 0, opacity: 0 }}
        animate={go ? { scale: [0, 1.2, 1], opacity: 1 } : {}}
        transition={{ duration: 0.6, ease: "easeOut", delay: 1.0 }}
        style={{ transformOrigin: "80px 40px" }}
      />
    </svg>
  );
}

function IconPackage({ go }: { go: boolean }) {
  return (
    <svg viewBox="0 0 160 80" fill="none" className="w-40 h-20" aria-hidden>
      {/* Arrow down */}
      <motion.g
        initial={{ y: -20, opacity: 0 }}
        animate={go ? { y: 0, opacity: 0.5 } : {}}
        transition={{ duration: 0.5, ease: "easeOut", delay: 0.8 }}
      >
        <line x1="80" y1="14" x2="80" y2="28" stroke="#b6f000" strokeWidth="2" strokeLinecap="round" />
        <path d="M73 22 L80 30 L87 22" stroke="#b6f000" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round" />
      </motion.g>
      {/* Box */}
      <motion.g
        initial={{ y: 24, opacity: 0 }}
        animate={go ? { y: 0, opacity: 1 } : {}}
        transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1], delay: 0.2 }}
      >
        <rect x="52" y="34" width="56" height="36" rx="3" fill="white" opacity="0.9" />
        <rect x="52" y="34" width="56" height="14" rx="3" fill="white" />
        <line x1="80" y1="34" x2="80" y2="70" stroke="#ddd" strokeWidth="1.5" />
        <line x1="52" y1="48" x2="108" y2="48" stroke="#ddd" strokeWidth="1.5" />
        <motion.line
          x1="68" y1="41" x2="92" y2="41"
          stroke="#b6f000" strokeWidth="2" strokeLinecap="round"
          initial={{ scaleX: 0 }}
          animate={go ? { scaleX: 1 } : {}}
          transition={{ duration: 0.4, delay: 0.7 }}
          style={{ transformOrigin: "68px 41px" }}
        />
      </motion.g>
    </svg>
  );
}

function IconTruck({ go }: { go: boolean }) {
  return (
    <svg viewBox="0 0 160 80" fill="none" className="w-40 h-20" aria-hidden>
      {/* Road dashes */}
      {[0, 1, 2].map(i => (
        <motion.line key={i}
          x1={16 + i * 44} y1="66" x2={36 + i * 44} y2="66"
          stroke="#b6f000" strokeWidth="1.5" strokeDasharray="4 4" opacity="0.4"
          initial={{ scaleX: 0 }} animate={go ? { scaleX: 1 } : {}}
          transition={{ duration: 0.3, delay: 0.1 + i * 0.1 }}
          style={{ transformOrigin: `${16 + i * 44}px 66px` }}
        />
      ))}
      {/* Truck body */}
      <motion.g
        initial={{ x: -80, opacity: 0 }}
        animate={go ? { x: 0, opacity: 1 } : {}}
        transition={{ duration: 0.85, ease: [0.16, 1, 0.3, 1], delay: 0.15 }}
      >
        <rect x="22" y="32" width="68" height="28" rx="2" fill="white" />
        <rect x="22" y="32" width="22" height="20" rx="2" fill="white" opacity="0.6" />
        <path d="M22 52 L90 52 L90 60 L22 60 Z" fill="white" opacity="0.3" />
        {/* Cab windows */}
        <rect x="24" y="35" width="18" height="12" rx="1" fill="#111" opacity="0.35" />
        {/* Trailer hitch */}
        <rect x="90" y="50" width="8" height="4" rx="1" fill="white" opacity="0.6" />
        {/* Wheels */}
        <circle cx="38" cy="62" r="7" fill="#222" stroke="white" strokeWidth="1.5" />
        <circle cx="38" cy="62" r="3" fill="#444" />
        <circle cx="76" cy="62" r="7" fill="#222" stroke="white" strokeWidth="1.5" />
        <circle cx="76" cy="62" r="3" fill="#444" />
      </motion.g>
    </svg>
  );
}

function IconRoute({ go }: { go: boolean }) {
  return (
    <svg viewBox="0 0 160 80" fill="none" className="w-40 h-20" aria-hidden>
      {/* Road perspective */}
      <motion.path
        d="M50 72 L80 20 L110 72 Z"
        stroke="white" strokeWidth="1" fill="none" opacity="0.12"
        initial={{ opacity: 0 }} animate={go ? { opacity: 0.12 } : {}}
        transition={{ duration: 0.5, delay: 0.2 }}
      />
      {/* Center dashes — draw one by one */}
      {[0, 1, 2, 3, 4].map(i => {
        const y1 = 68 - i * 10;
        const y2 = y1 - 6;
        return (
          <motion.line key={i}
            x1="80" y1={y1} x2="80" y2={y2}
            stroke="#b6f000" strokeWidth="2.5" strokeLinecap="round"
            initial={{ opacity: 0, scaleY: 0 }}
            animate={go ? { opacity: 0.7, scaleY: 1 } : {}}
            transition={{ duration: 0.25, delay: 0.3 + i * 0.1 }}
            style={{ transformOrigin: `80px ${y2}px` }}
          />
        );
      })}
      {/* Pin destination */}
      <motion.g
        initial={{ y: -16, opacity: 0 }}
        animate={go ? { y: 0, opacity: 1 } : {}}
        transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1], delay: 0.85 }}
      >
        <circle cx="80" cy="22" r="8" fill="white" />
        <circle cx="80" cy="22" r="3.5" fill="#111" />
        <line x1="80" y1="30" x2="80" y2="36" stroke="white" strokeWidth="2" strokeLinecap="round" />
      </motion.g>
    </svg>
  );
}

/* ── Data ─────────────────────────────────────────────────────────────── */

const services = [
  {
    Icon: IconPlane,
    title: "Transferts Aéroport & Gare",
    desc: "Prise en charge à domicile, suivi des vols en temps réel, aide aux bagages. Lyon Saint-Exupéry, Part-Dieu, Perrache, Genève-Cointrin et toutes gares TGV.",
    features: ["Suivi vol en temps réel", "Aide bagages incluse", "Attente 10 min offerte", "Disponible 24h/24"],
    href: "/transfert-aeroport-lyon",
    dark: true,
  },
  {
    Icon: IconHeartbeat,
    title: "Transport Médical CPAM",
    desc: "Agréé par l'Assurance Maladie pour les transports médicaux sur prescription. Chimiothérapie, dialyse, hospitalisation — prise en charge directe.",
    features: ["Agrément CPAM officiel", "Zéro avance de frais", "Prescription acceptée", "Destinations hospitalières"],
    href: "/taxi-conventionné-cpam",
    dark: false,
  },
  {
    Icon: IconPackage,
    title: "Colis & Courriers Urgents",
    desc: "Livraison express de colis, lettres recommandées, pièces détachées et documents urgents. Porte à porte avec confirmation de remise.",
    features: ["Livraison express", "Confirmation de remise", "Colis fragiles acceptés", "Inter-entreprises B2B"],
    href: "/taxi-remorque-ain",
    dark: false,
  },
  {
    Icon: IconTruck,
    title: "Remorque à Disposition",
    desc: "Attache-remorque homologuée sur le Tiguan Allspace. Transport de matériel lourd, véhicules en panne, déménagements partiels, animaux.",
    features: ["Attache-remorque homologuée", "Matériel lourd", "Véhicule en panne", "Déménagement partiel"],
    href: "/taxi-remorque-ain",
    dark: false,
  },
  {
    Icon: IconRoute,
    title: "Longue Distance France Entière",
    desc: "Paris, Marseille, Bordeaux, Nice, Strasbourg, Genève... Devis personnalisé, tarif fixe, arrêts possibles en route. Aller simple ou aller-retour.",
    features: ["Tarif fixe sur devis", "Arrêts possibles", "Aller-retour disponible", "Toute la France"],
    href: "/taxi-longue-distance",
    dark: false,
  },
];

/* ── Component ──────────────────────────────────────────────────────── */

function ServiceCard({ svc, index }: { svc: typeof services[0]; index: number }) {
  const ref   = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, amount: 0.25 });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 70, scale: 0.97 }}
      animate={inView ? { opacity: 1, y: 0, scale: 1 } : {}}
      transition={{ duration: 0.75, delay: index * 0.09, ease: [0.16, 1, 0.3, 1] }}
      whileHover={{ y: -5, scale: 1.004, boxShadow: "0 20px 56px rgba(0,0,0,0.13)", transition: spring }}
      whileTap={{ scale: 0.998, transition: spring }}
      className={`rounded-[24px] overflow-hidden border border-black/[0.06] group ${svc.dark ? "bg-black text-white" : "bg-[#f8f9fa] text-black"}`}
    >
      {/* Animated icon area */}
      <div className={`relative flex items-center justify-center py-10 overflow-hidden ${svc.dark ? "bg-[#0d0d0d]" : "bg-[#efefef]"}`}>
        {/* Subtle grid */}
        <div
          className="pointer-events-none absolute inset-0 opacity-[0.04]"
          style={{
            backgroundImage: "linear-gradient(#888 1px,transparent 1px),linear-gradient(90deg,#888 1px,transparent 1px)",
            backgroundSize: "28px 28px",
          }}
        />
        <svc.Icon go={inView} />
      </div>

      {/* Content */}
      <div className="p-6 sm:p-8">
        <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-5 mb-5">
          <div>
            <span className={`text-[10px] font-bold tracking-[0.25em] uppercase ${svc.dark ? "text-white/30" : "text-black/30"}`}>
              {String(index + 1).padStart(2, "0")}
            </span>
            <h2 className="text-lg font-semibold tracking-tight">{svc.title}</h2>
          </div>
          <motion.div whileHover={{ x: 3 }} transition={spring} className="sm:shrink-0">
            <Link
              href={svc.href}
              className={`inline-flex items-center gap-2 rounded-full px-4 py-2 text-[11px] font-semibold tracking-wide border transition-colors ${
                svc.dark
                  ? "border-white/20 text-white hover:bg-white hover:text-black"
                  : "border-black/15 text-black hover:bg-black hover:text-white"
              }`}
            >
              En savoir plus <ArrowRight className="h-3 w-3" />
            </Link>
          </motion.div>
        </div>

        <p className={`text-sm leading-relaxed mb-5 ${svc.dark ? "text-white/60" : "text-[#555]"}`}>{svc.desc}</p>

        <div className="flex flex-wrap gap-2">
          {svc.features.map((f, fi) => (
            <motion.span
              key={f}
              initial={{ opacity: 0, scale: 0.8, y: 6 }}
              animate={inView ? { opacity: 1, scale: 1, y: 0 } : {}}
              transition={{ delay: index * 0.09 + fi * 0.05 + 0.3, type: "spring", stiffness: 360, damping: 22 }}
              className={`text-[11px] font-medium px-3 py-1.5 rounded-full ${
                svc.dark ? "bg-white/10 text-white/70" : "bg-black/[0.05] text-black/60"
              }`}
            >
              {f}
            </motion.span>
          ))}
        </div>
      </div>
    </motion.div>
  );
}

export default function ServicesContent() {
  const s = useSettings();
  const ctaRef = useRef<HTMLElement>(null);
  const ctaIn  = useInView(ctaRef, { once: true, margin: "-40px" });

  return (
    <>
      {/* ── HERO ── */}
      <div style={{ height: "160vh" }}>
        <section className="sticky top-0 relative w-full bg-black overflow-hidden flex flex-col select-none" style={{ height: "100svh" }}>
          <div className="absolute inset-0 z-0">
            <HeroVideo src={sitePath("/videos/7440442-web.mp4")} scrollFactor={1.6} />
          </div>
          <div className="pointer-events-none absolute inset-0 z-[5]">
            <div className="absolute inset-x-0 top-0 h-40 bg-gradient-to-b from-black/75 to-transparent" />
            <div className="absolute inset-x-0 bottom-0 h-[65%] bg-gradient-to-t from-black via-black/75 to-transparent" />
          </div>
          <div className="pointer-events-none absolute inset-0 z-[6] opacity-[0.032]"
            style={{ backgroundImage: "url(\"data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E\")", backgroundSize: "160px" }}
          />
          <div className="relative z-[10] w-full mt-auto">
            <div className="px-6 pb-5 sm:px-10 sm:pb-6 md:px-14">
              <motion.span
                initial={{ opacity: 0, y: 14 }} animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2, duration: 0.5 }}
                className="text-[10px] font-bold tracking-[0.3em] uppercase text-white/35 mb-5 block"
              >Nos services</motion.span>
              <div className="overflow-hidden">
                <motion.span
                  className="block font-sans font-semibold text-white leading-[1.05] tracking-[-0.025em]"
                  style={{ fontSize: "clamp(2rem, 5.5vw, 5.2rem)" }}
                  initial={{ y: "110%" }} animate={{ y: 0 }}
                  transition={{ type: "spring", stiffness: 280, damping: 22, mass: 0.75, delay: 0.15 }}
                >Tout ce dont</motion.span>
              </div>
              <div className="overflow-hidden">
                <motion.span
                  className="block font-sans font-semibold leading-[1.05] tracking-[-0.025em] text-white/35 font-light italic"
                  style={{ fontSize: "clamp(2rem, 5.5vw, 5.2rem)" }}
                  initial={{ y: "110%" }} animate={{ y: 0 }}
                  transition={{ type: "spring", stiffness: 280, damping: 22, mass: 0.75, delay: 0.22 }}
                >vous avez besoin.</motion.span>
              </div>
              <motion.div
                className="mt-6 flex flex-wrap items-center gap-3"
                initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }}
                transition={{ type: "spring", stiffness: 280, damping: 22, mass: 0.75, delay: 0.42 }}
              >
                <a href={`tel:${s.contact_phone.replace(/[\s.-]/g, "")}`}
                  className="inline-flex items-center gap-2.5 rounded-full bg-white text-black pl-4 pr-5 py-2.5 text-[11px] font-semibold tracking-wide hover:bg-white/90 transition-colors"
                >
                  <Phone className="h-3.5 w-3.5 shrink-0" strokeWidth={2.5} />
                  {s.contact_phone}
                </a>
                <Link href="/tarifs"
                  className="group inline-flex items-center gap-3 rounded-full border border-white/25 text-white pl-4 pr-1.5 py-1.5 text-[11px] font-semibold tracking-wide hover:border-white/50 transition-colors"
                >
                  <span>Voir les tarifs</span>
                  <div className="flex h-7 w-7 items-center justify-center rounded-full bg-white/15 transition-transform duration-300 group-hover:translate-x-0.5">
                    <ArrowRight className="h-3 w-3" strokeWidth={2.5} />
                  </div>
                </Link>
              </motion.div>
            </div>
            <div className="grid grid-cols-2 gap-y-5 border-t border-white/10 px-6 pt-5 text-white sm:px-10 md:grid-cols-4 md:px-14"
              style={{ paddingBottom: "max(3.5rem, env(safe-area-inset-bottom, 3.5rem))" }}
            >
              {[
                { label: "Services distincts", value: "5 spécialités" },
                { label: "Disponibilité",      value: "24h/24 · 7j/7" },
                { label: "Tarification",       value: "Prix fixe garanti" },
                { label: "Devis",              value: "Gratuit sous 2h" },
              ].map((item, i) => (
                <motion.div key={i}
                  className={`flex flex-col ${i !== 0 ? "md:pl-8 md:border-l md:border-white/10" : ""}`}
                  initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}
                  transition={{ type: "spring", stiffness: 280, damping: 22, mass: 0.75, delay: 0.55 + i * 0.07 }}
                >
                  <span className="mb-1 text-[9px] sm:text-[10px] font-semibold tracking-[0.22em] uppercase text-white/30">{item.label}</span>
                  <span className="text-sm sm:text-base font-semibold tracking-tight text-white">{item.value}</span>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
      </div>

      {/* ── SERVICE CARDS — scroll-driven cascade ── */}
      <section className="bg-white py-14 md:py-20">
        <div className="max-w-5xl mx-auto px-4 sm:px-8 lg:px-12 space-y-5">
          {services.map((svc, i) => (
            <ServiceCard key={svc.title} svc={svc} index={i} />
          ))}
        </div>
      </section>

      {/* ── CTA ── */}
      <section ref={ctaRef} className="bg-black py-16 md:py-24 px-4 sm:px-10 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }} animate={ctaIn ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
        >
          <h2 className="text-2xl sm:text-3xl font-semibold text-white mb-3">Vous avez un besoin spécifique ?</h2>
          <p className="text-white/45 text-sm mb-10">Contactez-moi, je m&apos;adapte à toutes les situations.</p>
          <div className="flex flex-wrap justify-center gap-4">
            <motion.a href={`tel:${s.contact_phone.replace(/[\s.-]/g, "")}`}
              className="inline-flex items-center gap-2 rounded-full bg-white text-black px-7 py-3 text-sm font-semibold"
              whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }} transition={spring}
            >
              <Phone className="h-4 w-4" /> {s.contact_phone}
            </motion.a>
            <motion.div whileHover={{ scale: 1.04 }} whileTap={{ scale: 0.95 }} transition={spring}>
              <Link href="/#contact" className="inline-flex items-center gap-2 rounded-full border border-white/25 text-white px-7 py-3 text-sm font-semibold hover:border-white/55 transition-colors">
                Formulaire de contact
              </Link>
            </motion.div>
          </div>
        </motion.div>
      </section>
    </>
  );
}
