"use client";

import { useRef } from "react";
import { motion, useInView, useScroll } from "framer-motion";
import { useIsMobile } from "@/lib/use-is-mobile";
import Link from "next/link";
import { Phone, ArrowRight } from "lucide-react";
import HeroVideo from "@/components/HeroVideo";
import { spring } from "@/lib/motion";
import { sitePath } from "@/lib/site-path";
import { useSettings } from "@/lib/settings-context";

/* ══════════════════════════════════════════════════════════════════════
   ANIMATED ICONS
══════════════════════════════════════════════════════════════════════ */

function IconAirport({ go }: { go: boolean }) {
  return (
    <svg viewBox="0 0 220 130" fill="none" className="w-[220px] h-[130px]" aria-hidden>
      {/* Runway perspective lines */}
      {[0,1,2,3,4].map(i => (
        <motion.line key={i}
          x1={95 + i*6} y1="118" x2={88 + i*9} y2="94"
          stroke="white" strokeWidth="1.2" strokeLinecap="round" opacity="0.08"
          initial={{ scaleY: 0 }} animate={go ? { scaleY: 1 } : {}}
          transition={{ duration: 0.4, delay: 0.05 * i }}
          style={{ transformOrigin: `${95+i*6}px 118px` }}
        />
      ))}
      {/* Runway dashes */}
      {[0,1,2,3].map(i => (
        <motion.line key={i}
          x1="109" y1={118 - i*7} x2="109" y2={113 - i*7}
          stroke="#b6f000" strokeWidth="2" strokeLinecap="round"
          initial={{ opacity: 0 }} animate={go ? { opacity: 0.55 } : {}}
          transition={{ duration: 0.2, delay: 0.1 + i*0.08 }}
        />
      ))}
      {/* Flight arc */}
      <motion.path
        d="M28 100 Q80 30 192 42"
        stroke="#b6f000" strokeWidth="1.5" strokeDasharray="6 5" fill="none"
        initial={{ pathLength: 0, opacity: 0 }}
        animate={go ? { pathLength: 1, opacity: 0.5 } : {}}
        transition={{ duration: 1.4, ease: "easeInOut", delay: 0.3 }}
      />
      {/* Cloud 1 */}
      <motion.g initial={{ x: 20, opacity: 0 }} animate={go ? { x: 0, opacity: 0.18 } : {}}
        transition={{ duration: 0.9, delay: 1.1, ease: "easeOut" }}>
        <ellipse cx="168" cy="30" rx="18" ry="10" fill="white" />
        <ellipse cx="152" cy="33" rx="12" ry="8" fill="white" />
        <ellipse cx="183" cy="33" rx="10" ry="7" fill="white" />
      </motion.g>
      {/* Cloud 2 smaller */}
      <motion.g initial={{ x: 14, opacity: 0 }} animate={go ? { x: 0, opacity: 0.1 } : {}}
        transition={{ duration: 0.9, delay: 1.3, ease: "easeOut" }}>
        <ellipse cx="42" cy="48" rx="12" ry="7" fill="white" />
        <ellipse cx="32" cy="51" rx="8" ry="5" fill="white" />
        <ellipse cx="52" cy="51" rx="7" ry="5" fill="white" />
      </motion.g>
      {/* Speed lines */}
      {[0,1,2].map(i => (
        <motion.line key={i}
          x1={30 + i*10} y1={72 + i*4} x2={48 + i*10} y2={72 + i*4}
          stroke="white" strokeWidth="1" strokeLinecap="round"
          initial={{ scaleX: 0, opacity: 0 }}
          animate={go ? { scaleX: 1, opacity: 0.2 } : {}}
          transition={{ duration: 0.3, delay: 0.55 + i*0.06 }}
          style={{ transformOrigin: `${48+i*10}px ${72+i*4}px` }}
        />
      ))}
      {/* Plane */}
      <motion.g
        initial={{ x: -100, opacity: 0 }}
        animate={go ? { x: 0, opacity: 1 } : {}}
        transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1], delay: 0.2 }}
      >
        {/* Body */}
        <ellipse cx="90" cy="72" rx="38" ry="10" fill="white" />
        {/* Nose */}
        <path d="M128 72 L148 70 L128 68 Z" fill="white" />
        {/* Tail fin */}
        <path d="M52 72 L46 52 L62 68 Z" fill="white" opacity="0.8" />
        {/* Wings */}
        <path d="M80 72 L54 92 L68 72 Z" fill="white" opacity="0.9" />
        <path d="M82 72 L60 55 L72 72 Z" fill="white" opacity="0.85" />
        {/* Engine */}
        <ellipse cx="76" cy="84" rx="9" ry="4" fill="white" opacity="0.6" />
        {/* Window stripe */}
        <motion.path d="M72 68 L112 67" stroke="#b6f000" strokeWidth="1.5" strokeLinecap="round"
          initial={{ pathLength: 0 }} animate={go ? { pathLength: 1 } : {}}
          transition={{ duration: 0.5, delay: 0.9 }}
        />
      </motion.g>
    </svg>
  );
}

function IconHeartbeat({ go }: { go: boolean }) {
  return (
    <svg viewBox="0 0 220 130" fill="none" className="w-[220px] h-[130px]" aria-hidden>
      {/* Pulse rings */}
      {[1,2,3].map(i => (
        <motion.circle key={i} cx="110" cy="60" r={18 + i*16} stroke="white" strokeWidth="0.8"
          initial={{ opacity: 0, scale: 0.4 }} animate={go ? { opacity: [0, 0.08, 0], scale: 1 } : {}}
          transition={{ duration: 1.6, delay: 0.9 + i*0.2, repeat: Infinity, repeatDelay: 1.2 }}
          style={{ transformOrigin: "110px 60px" }}
        />
      ))}
      {/* ECG line */}
      <motion.path
        d="M14 78 L46 78 L56 46 L66 92 L76 58 L86 78 L206 78"
        stroke="#b6f000" strokeWidth="2.2" fill="none" strokeLinecap="round" strokeLinejoin="round"
        initial={{ pathLength: 0, opacity: 0 }}
        animate={go ? { pathLength: 1, opacity: 0.75 } : {}}
        transition={{ duration: 1.3, ease: "easeInOut", delay: 0.2 }}
      />
      {/* Heart */}
      <motion.path
        d="M110 86 C110 86 86 70 86 54 C86 44 94 38 102 44 C105 46 108 50 110 54 C112 50 115 46 118 44 C126 38 134 44 134 54 C134 70 110 86 110 86Z"
        fill="white"
        initial={{ scale: 0, opacity: 0 }}
        animate={go ? { scale: 1, opacity: 1 } : {}}
        transition={{ type: "spring", stiffness: 300, damping: 14, delay: 0.9 }}
        style={{ transformOrigin: "110px 62px" }}
      />
      {/* Beating pulse on heart */}
      <motion.path
        d="M110 86 C110 86 86 70 86 54 C86 44 94 38 102 44 C105 46 108 50 110 54 C112 50 115 46 118 44 C126 38 134 44 134 54 C134 70 110 86 110 86Z"
        fill="white" opacity="0.3"
        animate={go ? { scale: [1, 1.18, 1], opacity: [0.3, 0, 0.3] } : {}}
        transition={{ duration: 0.8, delay: 1.4, repeat: Infinity, repeatDelay: 0.6 }}
        style={{ transformOrigin: "110px 62px" }}
      />
      {/* Medical cross top-left */}
      <motion.g initial={{ opacity: 0 }} animate={go ? { opacity: 0.3 } : {}}
        transition={{ duration: 0.4, delay: 1.5 }}>
        <rect x="24" y="28" width="4" height="14" rx="2" fill="white" />
        <rect x="19" y="33" width="14" height="4" rx="2" fill="white" />
      </motion.g>
      {/* CPAM label */}
      <motion.text x="178" y="48" fontSize="8" fontWeight="700" fill="white" opacity="0"
        animate={go ? { opacity: 0.25 } : {}} transition={{ duration: 0.4, delay: 1.6 }}
        fontFamily="Arial Black, sans-serif" letterSpacing="2"
      >CPAM</motion.text>
    </svg>
  );
}

function IconPackage({ go }: { go: boolean }) {
  return (
    <svg viewBox="0 0 220 130" fill="none" className="w-[220px] h-[130px]" aria-hidden>
      {/* Shadow under box */}
      <motion.ellipse cx="110" cy="118" rx="42" ry="7" fill="white"
        initial={{ scaleX: 0, opacity: 0 }}
        animate={go ? { scaleX: 1, opacity: 0.07 } : {}}
        transition={{ duration: 0.6, delay: 0.4 }}
        style={{ transformOrigin: "110px 118px" }}
      />
      {/* Delivery arrow */}
      <motion.g initial={{ y: -24, opacity: 0 }} animate={go ? { y: 0, opacity: 0.7 } : {}}
        transition={{ duration: 0.5, ease: "easeOut", delay: 0.1 }}>
        <line x1="110" y1="14" x2="110" y2="34" stroke="#b6f000" strokeWidth="2.5" strokeLinecap="round" />
        <path d="M100 26 L110 38 L120 26" stroke="#b6f000" strokeWidth="2.5" fill="none" strokeLinecap="round" strokeLinejoin="round" />
      </motion.g>
      {/* Speed lines */}
      {[0,1].map(i => (
        <motion.g key={i} initial={{ opacity: 0 }} animate={go ? { opacity: 0.18 } : {}}
          transition={{ duration: 0.3, delay: 0.45 + i*0.1 }}>
          <line x1={62 - i*8} y1={70 + i*14} x2={72 - i*8} y2={70 + i*14} stroke="white" strokeWidth="1.5" strokeLinecap="round" />
          <line x1={148 + i*8} y1={70 + i*14} x2={158 + i*8} y2={70 + i*14} stroke="white" strokeWidth="1.5" strokeLinecap="round" />
        </motion.g>
      ))}
      {/* Box — drops in */}
      <motion.g
        initial={{ y: -50, opacity: 0 }}
        animate={go ? { y: 0, opacity: 1 } : {}}
        transition={{ type: "spring", stiffness: 220, damping: 16, delay: 0.3 }}
      >
        {/* Front face */}
        <rect x="72" y="64" width="76" height="52" rx="3" fill="white" opacity="0.95" />
        {/* Top face */}
        <path d="M72 64 L86 50 L162 50 L148 64 Z" fill="white" opacity="0.7" />
        {/* Right face */}
        <path d="M148 64 L162 50 L162 102 L148 116 Z" fill="white" opacity="0.55" />
        {/* Tape horizontal */}
        <motion.rect x="72" y="87" width="76" height="6" rx="1" fill="#b6f000" opacity="0"
          animate={go ? { opacity: 0.8 } : {}} transition={{ duration: 0.3, delay: 0.85 }} />
        {/* Tape vertical */}
        <motion.rect x="107" y="64" width="6" height="52" rx="1" fill="#b6f000" opacity="0"
          animate={go ? { opacity: 0.8 } : {}} transition={{ duration: 0.3, delay: 0.85 }} />
        {/* Top tape */}
        <motion.path d="M108 64 L86 50 L91 50 L113 64 Z" fill="#b6f000" opacity="0"
          animate={go ? { opacity: 0.6 } : {}} transition={{ duration: 0.3, delay: 0.85 }} />
      </motion.g>
      {/* Checkmark */}
      <motion.path
        d="M95 92 L106 103 L128 78"
        stroke="#111" strokeWidth="3.5" fill="none" strokeLinecap="round" strokeLinejoin="round"
        initial={{ pathLength: 0 }} animate={go ? { pathLength: 1 } : {}}
        transition={{ duration: 0.45, ease: "easeInOut", delay: 1.05 }}
      />
    </svg>
  );
}

function IconTruck({ go }: { go: boolean }) {
  return (
    <svg viewBox="0 0 220 130" fill="none" className="w-[220px] h-[130px]" aria-hidden>
      {/* Road surface */}
      <motion.rect x="0" y="100" width="220" height="30" fill="white" opacity="0.04"
        initial={{ scaleX: 0 }} animate={go ? { scaleX: 1 } : {}}
        transition={{ duration: 0.5, delay: 0.1 }}
        style={{ transformOrigin: "0px 100px" }}
      />
      {/* Road center dashes */}
      {[0,1,2,3,4,5].map(i => (
        <motion.rect key={i} x={10 + i*36} y="112" width="20" height="3" rx="1.5" fill="#b6f000"
          initial={{ opacity: 0 }} animate={go ? { opacity: 0.45 } : {}}
          transition={{ duration: 0.2, delay: 0.15 + i*0.07 }}
        />
      ))}
      {/* Trees silhouette panning */}
      <motion.g initial={{ x: 50, opacity: 0 }} animate={go ? { x: 0, opacity: 0.12 } : {}}
        transition={{ duration: 0.8, delay: 0.3, ease: "easeOut" }}>
        {[170,190,210].map(x => (
          <g key={x}>
            <rect x={x-2} y="80" width="4" height="18" fill="white" />
            <ellipse cx={x} cy="76" rx="8" ry="10" fill="white" />
          </g>
        ))}
      </motion.g>
      {/* Truck body — slides in */}
      <motion.g
        initial={{ x: -140, opacity: 0 }}
        animate={go ? { x: 0, opacity: 1 } : {}}
        transition={{ duration: 1.0, ease: [0.16, 1, 0.3, 1], delay: 0.2 }}
      >
        {/* Trailer */}
        <rect x="8" y="68" width="64" height="32" rx="2" fill="white" opacity="0.6" />
        <rect x="8" y="68" width="64" height="5" rx="1" fill="white" opacity="0.4" />
        {/* Hitch */}
        <rect x="72" y="88" width="10" height="4" rx="2" fill="white" opacity="0.5" />
        {/* Truck cab */}
        <rect x="82" y="66" width="86" height="34" rx="3" fill="white" />
        {/* Cab top */}
        <path d="M90 66 L102 50 L152 50 L168 66 Z" fill="white" opacity="0.85" />
        {/* Windshield */}
        <path d="M98 66 L108 53 L148 53 L160 66 Z" fill="#111" opacity="0.4" />
        {/* Door */}
        <line x1="132" y1="66" x2="132" y2="100" stroke="#ccc" strokeWidth="0.8" opacity="0.4" />
        {/* Door handle */}
        <rect x="136" y="81" width="8" height="2.5" rx="1.25" fill="#ccc" opacity="0.5" />
        {/* Grill */}
        <rect x="162" y="72" width="6" height="20" rx="1" fill="#111" opacity="0.3" />
        {[0,1,2].map(i => (
          <line key={i} x1="163" y1={75 + i*6} x2="167" y2={75 + i*6} stroke="#b6f000" strokeWidth="1" opacity="0.6" />
        ))}
        {/* Headlight */}
        <motion.ellipse cx="169" cy="86" rx="4" ry="3" fill="#b6f000"
          animate={go ? { opacity: [0.6, 1, 0.6] } : { opacity: 0 }}
          transition={{ duration: 1.2, delay: 0.9, repeat: Infinity }}
        />
        {/* Wheels */}
        {[28, 104, 148].map(cx => (
          <g key={cx}>
            <circle cx={cx} cy="102" r="12" fill="#111" stroke="white" strokeWidth="2" />
            <circle cx={cx} cy="102" r="5" fill="#333" />
            <motion.line x1={cx} y1="90" x2={cx} y2="114" stroke="white" strokeWidth="1" opacity="0.3"
              animate={go ? { rotate: 360 } : {}}
              transition={{ duration: 1, repeat: Infinity, ease: "linear", delay: 0.7 }}
              style={{ transformOrigin: `${cx}px 102px` }}
            />
          </g>
        ))}
      </motion.g>
    </svg>
  );
}

function IconRoute({ go }: { go: boolean }) {
  return (
    <svg viewBox="0 0 220 130" fill="none" className="w-[220px] h-[130px]" aria-hidden>
      {/* France silhouette (simplified hexagon) */}
      <motion.path
        d="M90 18 L130 14 L158 36 L156 74 L130 96 L100 100 L72 82 L66 50 L80 28 Z"
        stroke="white" strokeWidth="1" fill="white" opacity="0"
        animate={go ? { opacity: 0.06 } : {}}
        transition={{ duration: 0.6, delay: 0.1 }}
      />
      <motion.path
        d="M90 18 L130 14 L158 36 L156 74 L130 96 L100 100 L72 82 L66 50 L80 28 Z"
        stroke="white" strokeWidth="1.2" fill="none"
        initial={{ pathLength: 0, opacity: 0 }}
        animate={go ? { pathLength: 1, opacity: 0.35 } : {}}
        transition={{ duration: 1.0, ease: "easeInOut", delay: 0.15 }}
      />
      {/* City dots */}
      {[
        { cx: 102, cy: 76, label: "Lyon",      delay: 0.7  },
        { cx: 100, cy: 36, label: "Paris",     delay: 0.85 },
        { cx: 105, cy: 88, label: "Marseille", delay: 1.0  },
        { cx: 80,  cy: 62, label: "Bordeaux",  delay: 1.15 },
      ].map(c => (
        <g key={c.label}>
          <motion.circle cx={c.cx} cy={c.cy} r="4.5" fill="white"
            initial={{ scale: 0, opacity: 0 }}
            animate={go ? { scale: 1, opacity: 0.8 } : {}}
            transition={{ type: "spring", stiffness: 400, damping: 14, delay: c.delay }}
            style={{ transformOrigin: `${c.cx}px ${c.cy}px` }}
          />
          <motion.text x={c.cx + 7} y={c.cy + 4} fontSize="6.5" fill="white" opacity="0"
            animate={go ? { opacity: 0.4 } : {}}
            transition={{ duration: 0.3, delay: c.delay + 0.2 }}
            fontFamily="sans-serif"
          >{c.label}</motion.text>
        </g>
      ))}
      {/* Route line Lyon → Paris */}
      <motion.path
        d="M102 76 Q94 58 100 36"
        stroke="#b6f000" strokeWidth="2.5" strokeLinecap="round" fill="none"
        initial={{ pathLength: 0, opacity: 0 }}
        animate={go ? { pathLength: 1, opacity: 0.9 } : {}}
        transition={{ duration: 0.7, ease: "easeInOut", delay: 1.0 }}
      />
      {/* Route Lyon → Marseille */}
      <motion.path
        d="M102 76 Q104 82 105 88"
        stroke="#b6f000" strokeWidth="2" strokeLinecap="round" strokeDasharray="4 3" fill="none"
        initial={{ pathLength: 0, opacity: 0 }}
        animate={go ? { pathLength: 1, opacity: 0.6 } : {}}
        transition={{ duration: 0.4, ease: "easeInOut", delay: 1.2 }}
      />
      {/* Pin at Paris — bounces in */}
      <motion.g
        initial={{ y: -30, opacity: 0 }}
        animate={go ? { y: 0, opacity: 1 } : {}}
        transition={{ type: "spring", stiffness: 260, damping: 14, delay: 1.45 }}
      >
        <circle cx="100" cy="30" r="9" fill="white" />
        <circle cx="100" cy="30" r="4" fill="#111" />
        <line x1="100" y1="39" x2="100" y2="48" stroke="white" strokeWidth="2.5" strokeLinecap="round" />
      </motion.g>
      {/* Distance badge */}
      <motion.g initial={{ opacity: 0, scale: 0.7 }} animate={go ? { opacity: 1, scale: 1 } : {}}
        transition={{ type: "spring", stiffness: 300, damping: 16, delay: 1.8 }}
        style={{ transformOrigin: "163px 56px" }}>
        <rect x="148" y="46" width="42" height="20" rx="10" fill="white" opacity="0.12" />
        <rect x="148" y="46" width="42" height="20" rx="10" stroke="white" strokeWidth="0.8" opacity="0.25" />
        <text x="169" y="60" fontSize="7.5" fontWeight="800" fill="white" textAnchor="middle"
          fontFamily="Arial Black, sans-serif" opacity="0.85">~470 km</text>
      </motion.g>
    </svg>
  );
}

/* ══════════════════════════════════════════════════════════════════════
   DATA
══════════════════════════════════════════════════════════════════════ */

const services = [
  {
    Icon: IconAirport,
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
    desc: "Paris, Marseille, Bordeaux, Nice, Strasbourg, Genève… Devis personnalisé, tarif fixe, arrêts possibles en route. Aller simple ou aller-retour.",
    features: ["Tarif fixe sur devis", "Arrêts possibles", "Aller-retour disponible", "Toute la France"],
    href: "/taxi-longue-distance",
    dark: false,
  },
];

/* ══════════════════════════════════════════════════════════════════════
   CARD
══════════════════════════════════════════════════════════════════════ */

function ServiceCard({ svc, index }: { svc: typeof services[0]; index: number }) {
  const ref    = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, amount: 0.18 });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 90, rotateX: 6 }}
      animate={inView ? { opacity: 1, y: 0, rotateX: 0 } : {}}
      transition={{ duration: 0.8, delay: index * 0.08, ease: [0.16, 1, 0.3, 1] }}
      whileHover={{ y: -6, scale: 1.005, boxShadow: "0 24px 64px rgba(0,0,0,0.14)", transition: spring }}
      whileTap={{ scale: 0.998, transition: spring }}
      style={{ transformPerspective: 900 }}
      className={`rounded-[28px] overflow-hidden border border-black/[0.07] group ${svc.dark ? "bg-black text-white" : "bg-[#f5f5f5] text-black"}`}
    >
      {/* ── Icon stage ── */}
      <div className="relative flex items-center justify-center h-56 overflow-hidden bg-[#0d0d0d]">
        {/* Dot grid */}
        <div className="pointer-events-none absolute inset-0"
          style={{
            backgroundImage: "radial-gradient(circle, rgba(255,255,255,0.07) 1px, transparent 1px)",
            backgroundSize: "24px 24px",
          }}
        />
        {/* Radial vignette */}
        <div className="pointer-events-none absolute inset-0"
          style={{ background: "radial-gradient(ellipse at center, transparent 40%, #0d0d0d 100%)" }}
        />
        {/* Number */}
        <div className="absolute top-4 left-5 text-[11px] font-bold tracking-[0.3em] text-white/15">
          {String(index + 1).padStart(2, "0")}
        </div>
        {/* Lime accent dot top-right */}
        <motion.div
          className="absolute top-4 right-5 h-2 w-2 rounded-full bg-[#b6f000]"
          animate={inView ? { opacity: [0.4, 1, 0.4] } : { opacity: 0 }}
          transition={{ duration: 2, repeat: Infinity, delay: 1.5 }}
        />
        <svc.Icon go={inView} />
      </div>

      {/* ── Content ── */}
      <div className="p-7 sm:p-8">
        <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-4 mb-5">
          <h2 className="text-xl font-semibold tracking-tight leading-snug">{svc.title}</h2>
          <motion.div whileHover={{ x: 3 }} transition={spring} className="shrink-0">
            <Link href={svc.href}
              className={`inline-flex items-center gap-2 rounded-full px-4 py-2 text-[11px] font-semibold tracking-wide border transition-colors ${
                svc.dark
                  ? "border-white/20 text-white hover:bg-white hover:text-black"
                  : "border-black/15 text-black hover:bg-black hover:text-white"
              }`}
            >En savoir plus <ArrowRight className="h-3 w-3" /></Link>
          </motion.div>
        </div>

        <p className={`text-sm leading-relaxed mb-6 ${svc.dark ? "text-white/55" : "text-[#555]"}`}>{svc.desc}</p>

        <div className="flex flex-wrap gap-2">
          {svc.features.map((f, fi) => (
            <motion.span key={f}
              initial={{ opacity: 0, scale: 0.8, y: 8 }}
              animate={inView ? { opacity: 1, scale: 1, y: 0 } : {}}
              transition={{ delay: index * 0.08 + fi * 0.06 + 0.35, type: "spring", stiffness: 360, damping: 22 }}
              className={`text-[11px] font-medium px-3.5 py-1.5 rounded-full ${
                svc.dark ? "bg-white/[0.08] text-white/65" : "bg-black/[0.06] text-black/60"
              }`}
            >{f}</motion.span>
          ))}
        </div>
      </div>
    </motion.div>
  );
}

/* ══════════════════════════════════════════════════════════════════════
   PAGE
══════════════════════════════════════════════════════════════════════ */

export default function ServicesContent() {
  const s      = useSettings();
  const isMobile = useIsMobile();
  const heroContainerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress: heroProgress } = useScroll({
    target: heroContainerRef,
    offset: ["start start", "end end"],
  });

  const ctaRef = useRef<HTMLElement>(null);
  const ctaIn  = useInView(ctaRef, { once: true, margin: "-40px" });

  return (
    <>
      {/* ── HERO ── */}
      <div ref={heroContainerRef} style={{ height: isMobile ? "100svh" : "130vh" }}>
        <section className="sticky top-0 relative w-full bg-black overflow-hidden flex flex-col select-none" style={{ height: "100svh" }}>
          <div className="absolute inset-0 z-0">
            <HeroVideo src={sitePath("/videos/7440442-web.mp4")} scrollYProgress={isMobile ? undefined : heroProgress} />
          </div>
          <div className="pointer-events-none absolute inset-0 z-[5]">
            <div className="absolute inset-x-0 top-0 h-40 bg-gradient-to-b from-black/75 to-transparent" />
            <div className="absolute inset-x-0 bottom-0 h-[65%] bg-gradient-to-t from-black via-black/75 to-transparent" />
          </div>
          <div className="pointer-events-none absolute inset-0 z-[6] opacity-[0.032]"
            style={{ backgroundImage:"url(\"data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E\")", backgroundSize:"160px" }}
          />
          <div className="relative z-[10] w-full mt-auto">
            <div className="px-6 pb-5 sm:px-10 sm:pb-6 md:px-14">
              <motion.span initial={{ opacity:0, y:14 }} animate={{ opacity:1, y:0 }}
                transition={{ delay:0.2, duration:0.5 }}
                className="text-[10px] font-bold tracking-[0.3em] uppercase text-white/35 mb-5 block"
              >Nos services</motion.span>
              <div className="overflow-hidden">
                <motion.span className="block font-sans font-semibold text-white leading-[1.05] tracking-[-0.025em]"
                  style={{ fontSize:"clamp(2rem,5.5vw,5.2rem)" }}
                  initial={{ y:"110%" }} animate={{ y:0 }}
                  transition={{ type:"spring", stiffness:280, damping:22, mass:0.75, delay:0.15 }}
                >Tout ce dont</motion.span>
              </div>
              <div className="overflow-hidden">
                <motion.span className="block font-sans font-semibold leading-[1.05] tracking-[-0.025em] text-white/35 font-light italic"
                  style={{ fontSize:"clamp(2rem,5.5vw,5.2rem)" }}
                  initial={{ y:"110%" }} animate={{ y:0 }}
                  transition={{ type:"spring", stiffness:280, damping:22, mass:0.75, delay:0.22 }}
                >vous avez besoin.</motion.span>
              </div>
              <motion.div className="mt-6 flex flex-wrap items-center gap-3"
                initial={{ opacity:0, y:10 }} animate={{ opacity:1, y:0 }}
                transition={{ type:"spring", stiffness:280, damping:22, mass:0.75, delay:0.42 }}
              >
                <a href={`tel:${s.contact_phone.replace(/[\s.-]/g,"")}`}
                  className="inline-flex items-center gap-2.5 rounded-full bg-white text-black pl-4 pr-5 py-2.5 text-[11px] font-semibold tracking-wide hover:bg-white/90 transition-colors"
                ><Phone className="h-3.5 w-3.5 shrink-0" strokeWidth={2.5} />{s.contact_phone}</a>
                <Link href="/tarifs"
                  title="Consulter les tarifs SPM Taxi"
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
              style={{ paddingBottom:"max(3.5rem,env(safe-area-inset-bottom,3.5rem))" }}
            >
              {[
                { label:"Services",     value:"5 spécialités" },
                { label:"Disponibilité",value:"24h/24 · 7j/7" },
                { label:"Tarification", value:"Prix fixe garanti" },
                { label:"Devis",        value:"Gratuit sous 2h" },
              ].map((item,i) => (
                <motion.div key={i}
                  className={`flex flex-col ${i!==0?"md:pl-8 md:border-l md:border-white/10":""}`}
                  initial={{ opacity:0, y:20 }} animate={{ opacity:1, y:0 }}
                  transition={{ type:"spring", stiffness:280, damping:22, mass:0.75, delay:0.55+i*0.07 }}
                >
                  <span className="mb-1 text-[9px] sm:text-[10px] font-semibold tracking-[0.22em] uppercase text-white/30">{item.label}</span>
                  <span className="text-sm sm:text-base font-semibold tracking-tight text-white">{item.value}</span>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
      </div>

      {/* ── CARDS ── */}
      <section className="bg-white py-16 md:py-24">
        <div className="max-w-5xl mx-auto px-4 sm:px-8 lg:px-12 space-y-6">
          {services.map((svc, i) => <ServiceCard key={svc.title} svc={svc} index={i} />)}
        </div>
      </section>

      {/* ── CTA ── */}
      <section ref={ctaRef} className="bg-black py-16 md:py-24 px-4 sm:px-10 text-center">
        <motion.div initial={{ opacity:0, y:30 }} animate={ctaIn ? { opacity:1, y:0 } : {}}
          transition={{ duration:0.6, ease:[0.16,1,0.3,1] }}>
          <h2 className="text-2xl sm:text-3xl font-semibold text-white mb-3">Vous avez un besoin spécifique ?</h2>
          <p className="text-white/45 text-sm mb-10">Contactez-moi, je m&apos;adapte à toutes les situations.</p>
          <div className="flex flex-wrap justify-center gap-4">
            <motion.a href={`tel:${s.contact_phone.replace(/[\s.-]/g,"")}`}
              className="inline-flex items-center gap-2 rounded-full bg-white text-black px-7 py-3 text-sm font-semibold"
              whileHover={{ scale:1.05 }} whileTap={{ scale:0.95 }} transition={spring}
            ><Phone className="h-4 w-4" />{s.contact_phone}</motion.a>
            <motion.div whileHover={{ scale:1.04 }} whileTap={{ scale:0.95 }} transition={spring}>
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
