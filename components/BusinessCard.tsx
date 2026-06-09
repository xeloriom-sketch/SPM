"use client";

import { useRef, useState, useCallback } from "react";
import { motion, useMotionValue, useTransform, useSpring, AnimatePresence } from "framer-motion";
import { Phone, Mail, MapPin, Star, Download, Share2, Globe, Plane, Car, Package, Truck, RotateCcw } from "lucide-react";
import Logo from "@/components/Logo";
import { useSettings } from "@/lib/settings-context";

const SERVICES = [
  { Icon: Plane,   label: "Transferts aéroport & gare" },
  { Icon: Car,     label: "Transport médical CPAM" },
  { Icon: Package, label: "Colis & courriers urgents" },
  { Icon: Truck,   label: "Taxi avec remorque" },
];

const NOISE = "url(\"data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E\")";
const GOLD = "linear-gradient(135deg, #b8933a 0%, #f0d080 45%, #c9a44a 70%, #8a6520 100%)";

function downloadVCard(phone: string, email: string) {
  const raw = phone.replace(/[\s.-]/g, "");
  const vcard = [
    "BEGIN:VCARD",
    "VERSION:3.0",
    "FN:SPM Taxi",
    "ORG:SPM Taxi",
    "TITLE:Taxi Conventionné CPAM · Villebois (Ain 01)",
    `TEL;TYPE=CELL,VOICE:+33${raw.replace(/^0/, "")}`,
    `EMAIL;TYPE=WORK:${email}`,
    "ADR;TYPE=WORK:;;Villebois;;01150;France",
    "URL;TYPE=WORK:https://taxispm.fr",
    "NOTE:Volkswagen Tiguan 7 places. 7j/7 24h/24. Lyon · Ain · Isère. 4,9★ Google.",
    "END:VCARD",
  ].join("\r\n");
  const blob = new Blob([vcard], { type: "text/vcard;charset=utf-8" });
  const url = URL.createObjectURL(blob);
  const a = document.createElement("a");
  a.href = url; a.download = "spm-taxi.vcf"; a.click();
  setTimeout(() => URL.revokeObjectURL(url), 1000);
}

async function handleShare(phone: string) {
  try {
    if (navigator.share) {
      await navigator.share({ title: "SPM Taxi — Conventionné CPAM", text: `SPM Taxi · ${phone} · Villebois (Ain) · 7j/7 24h/24`, url: "https://taxispm.fr" });
    } else {
      await navigator.clipboard.writeText(`SPM Taxi — ${phone} — taxispm.fr`);
    }
  } catch { /* user cancelled */ }
}

// ── Card face shared wrapper ─────────────────────────────────────────────────
function Face({ children, flipped = false }: { children: React.ReactNode; flipped?: boolean }) {
  return (
    <div
      className="absolute inset-0 rounded-[20px] overflow-hidden"
      style={{ backfaceVisibility: "hidden", WebkitBackfaceVisibility: "hidden", transform: flipped ? "rotateY(180deg)" : undefined }}
    >
      <div className="absolute inset-0 rounded-[20px] p-[1.5px]" style={{ background: GOLD }}>
        <div className="h-full w-full rounded-[19px] bg-[#0d0d0d] overflow-hidden relative">
          {/* Noise grain */}
          <div className="absolute inset-0 opacity-[0.045]" style={{ backgroundImage: NOISE, backgroundSize: "128px" }} />
          {children}
        </div>
      </div>
    </div>
  );
}

export default function BusinessCard() {
  const s = useSettings();
  const [flipped, setFlipped] = useState(false);
  const cardRef = useRef<HTMLDivElement>(null);

  // — Magnetic tilt —
  const mx = useMotionValue(0);
  const my = useMotionValue(0);
  const spring = { stiffness: 420, damping: 32, mass: 0.6 };
  const rotX = useSpring(useTransform(my, [-0.5, 0.5], [9, -9]), spring);
  const rotY = useSpring(useTransform(mx, [-0.5, 0.5], [-14, 14]), spring);
  const shine = useTransform(mx, [-0.5, 0.5], ["130deg", "50deg"]);

  const handleMouseMove = useCallback((e: React.MouseEvent<HTMLDivElement>) => {
    if (flipped || !cardRef.current) return;
    const r = cardRef.current.getBoundingClientRect();
    mx.set((e.clientX - r.left) / r.width - 0.5);
    my.set((e.clientY - r.top) / r.height - 0.5);
  }, [flipped, mx, my]);

  const handleMouseLeave = useCallback(() => { mx.set(0); my.set(0); }, [mx, my]);

  const flip = () => {
    mx.set(0); my.set(0);
    setFlipped(f => !f);
  };

  return (
    <div className="min-h-screen bg-[#080808] flex flex-col items-center justify-center px-5 py-16 gap-10 select-none"
      style={{ backgroundImage: NOISE, backgroundSize: "200px", backgroundBlendMode: "overlay" }}
    >
      {/* Ambient glow */}
      <div className="pointer-events-none fixed inset-0 opacity-30" style={{ background: "radial-gradient(ellipse 60% 40% at 50% 40%, rgba(201,168,76,0.12) 0%, transparent 70%)" }} />

      {/* Header */}
      <motion.div
        className="text-center relative z-10"
        initial={{ opacity: 0, y: -16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: [0.23, 1, 0.32, 1] }}
      >
        <p className="text-[9px] tracking-[0.35em] uppercase text-white/25 mb-1">Carte de visite digitale</p>
        <h1 className="text-2xl font-semibold text-white tracking-tight">SPM Taxi</h1>
        <p className="text-[11px] text-white/35 tracking-wide mt-0.5">Villebois · Ain · Lyon · Isère</p>
      </motion.div>

      {/* — Card — */}
      <motion.div
        className="w-full relative z-10"
        style={{ maxWidth: 400 }}
        initial={{ opacity: 0, y: 40, scale: 0.96 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        transition={{ duration: 0.75, ease: [0.23, 1, 0.32, 1], delay: 0.1 }}
      >
        {/* Perspective wrapper */}
        <div style={{ perspective: "1100px" }}>
          {/* Tilt wrapper */}
          <motion.div
            ref={cardRef}
            style={{ rotateX: flipped ? 0 : rotX, rotateY: flipped ? 0 : rotY }}
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
          >
            {/* Flip wrapper */}
            <motion.div
              animate={{ rotateY: flipped ? 180 : 0 }}
              transition={{ duration: 0.75, ease: [0.23, 1, 0.32, 1] }}
              onClick={flip}
              className="relative w-full cursor-pointer"
              style={{ aspectRatio: "1.77", transformStyle: "preserve-3d" }}
            >
              {/* ── FRONT ── */}
              <Face>
                {/* Radial glow top-right */}
                <div className="absolute -top-16 -right-16 w-56 h-56 rounded-full pointer-events-none"
                  style={{ background: "radial-gradient(circle, rgba(201,168,76,0.18) 0%, transparent 68%)" }} />

                {/* Shine shimmer on hover */}
                <motion.div
                  className="absolute inset-0 rounded-[19px] pointer-events-none"
                  style={{
                    background: useTransform(shine, (deg) =>
                      `linear-gradient(${deg}, rgba(255,255,255,0) 30%, rgba(255,255,255,0.04) 50%, rgba(255,255,255,0) 70%)`
                    ),
                  }}
                />

                <div className="relative h-full flex flex-col justify-between p-5 sm:p-6">
                  {/* Top row */}
                  <div className="flex items-start justify-between">
                    <Logo variant="dark" size="lg" />
                    <div className="flex flex-col items-end gap-1">
                      <div className="flex gap-0.5">
                        {Array.from({ length: 5 }).map((_, i) => (
                          <Star key={i} className="h-2.5 w-2.5 fill-amber-400 text-amber-400" />
                        ))}
                      </div>
                      <span className="text-[8px] tracking-[0.2em] uppercase text-white/30">4,9 · Google</span>
                    </div>
                  </div>

                  {/* Bottom */}
                  <div>
                    <p className="text-[8px] tracking-[0.28em] uppercase mb-0.5" style={{ color: "#c9a84c" }}>
                      Taxi Conventionné CPAM
                    </p>
                    <p className="text-[15px] font-semibold text-white tracking-tight leading-tight">
                      7j/7 · 24h/24
                    </p>
                    <p className="text-[10px] text-white/35 mt-0.5 tracking-wide">
                      {s.hero_subtitle}
                    </p>
                    <div className="mt-3 h-px w-full bg-white/[0.07]" />
                    <div className="mt-3 flex items-center gap-2.5">
                      <div className="flex h-7 w-7 items-center justify-center rounded-full bg-white/[0.07]">
                        <Phone className="h-3 w-3 text-amber-400" strokeWidth={2} />
                      </div>
                      <span className="text-[13px] font-semibold text-white tracking-wide">{s.contact_phone}</span>
                    </div>
                  </div>
                </div>
              </Face>

              {/* ── BACK ── */}
              <Face flipped>
                <div className="absolute -bottom-16 -left-16 w-56 h-56 rounded-full pointer-events-none"
                  style={{ background: "radial-gradient(circle, rgba(201,168,76,0.12) 0%, transparent 68%)" }} />

                <div className="relative h-full flex flex-col justify-between p-5 sm:p-6">
                  {/* Services */}
                  <div>
                    <p className="text-[8px] tracking-[0.28em] uppercase mb-3" style={{ color: "#c9a84c" }}>
                      Services
                    </p>
                    <div className="grid grid-cols-2 gap-y-2.5 gap-x-3">
                      {SERVICES.map(({ Icon, label }, i) => (
                        <div key={i} className="flex items-start gap-1.5">
                          <Icon className="h-3 w-3 shrink-0 mt-[1px] text-amber-500/60" strokeWidth={1.5} />
                          <span className="text-[9px] text-white/55 leading-tight">{label}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Contact */}
                  <div>
                    <div className="h-px w-full bg-white/[0.07] mb-3" />
                    <div className="space-y-1.5">
                      {[
                        { Icon: Mail,   text: s.contact_email },
                        { Icon: MapPin, text: "Villebois, Ain 01150" },
                        { Icon: Globe,  text: "taxispm.fr" },
                      ].map(({ Icon, text }, i) => (
                        <div key={i} className="flex items-center gap-2">
                          <Icon className="h-2.5 w-2.5 shrink-0 text-white/25" strokeWidth={1.5} />
                          <span className="text-[9px] text-white/45 tracking-wide">{text}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </Face>
            </motion.div>
          </motion.div>
        </div>

        {/* Flip hint */}
        <motion.div
          className="flex items-center justify-center gap-1.5 mt-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.7 }}
        >
          <RotateCcw className="h-3 w-3 text-white/20" strokeWidth={1.5} />
          <p className="text-[9px] tracking-[0.25em] uppercase text-white/20">
            {flipped ? "Cliquez pour recto" : "Cliquez pour retourner"}
          </p>
        </motion.div>
      </motion.div>

      {/* — Actions — */}
      <motion.div
        className="flex flex-wrap items-center justify-center gap-3 relative z-10"
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: [0.23, 1, 0.32, 1], delay: 0.35 }}
      >
        <a
          href={`tel:${s.contact_phone.replace(/[\s.-]/g, "")}`}
          className="inline-flex items-center gap-2 rounded-full pl-4 pr-5 py-2.5 text-[11px] font-semibold tracking-wide text-black"
          style={{ background: GOLD }}
        >
          <Phone className="h-3.5 w-3.5 shrink-0" strokeWidth={2.5} />
          Appeler
        </a>
        <button
          onClick={() => downloadVCard(s.contact_phone, s.contact_email)}
          className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/[0.04] pl-4 pr-5 py-2.5 text-[11px] font-semibold tracking-wide text-white/80 hover:border-white/30 hover:bg-white/[0.07] transition-colors"
        >
          <Download className="h-3.5 w-3.5 shrink-0" strokeWidth={2} />
          Enregistrer le contact
        </button>
        <button
          onClick={() => handleShare(s.contact_phone)}
          className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/[0.04] pl-4 pr-5 py-2.5 text-[11px] font-semibold tracking-wide text-white/80 hover:border-white/30 hover:bg-white/[0.07] transition-colors"
        >
          <Share2 className="h-3.5 w-3.5 shrink-0" strokeWidth={2} />
          Partager
        </button>
      </motion.div>

      {/* Footer note */}
      <motion.p
        className="text-[9px] text-white/15 tracking-widest uppercase text-center relative z-10"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.8 }}
      >
        Volkswagen Tiguan Allspace · 7 places · Wi-Fi à bord
      </motion.p>
    </div>
  );
}
