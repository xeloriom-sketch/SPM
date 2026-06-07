"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { ArrowUpRight, Phone, Shield, MapPin, FileText, Star } from "lucide-react";

const stats = [
  { icon: Shield, label: "Taxi conventionné", sub: "Agrément CPAM officiel", color: "text-lime" },
  { icon: MapPin, label: "Toute la France", sub: "Déplacement national", color: "text-sky" },
  { icon: FileText, label: "Devis gratuit", sub: "Réponse sous 2h", color: "text-amber" },
];

export default function Hero() {
  return (
    <section id="accueil" className="pt-28 px-4 sm:px-6 max-w-[1240px] mx-auto">
      <div className="relative overflow-hidden rounded-3xl">
        {/* Background — VW Tiguan on road */}
        <Image
          src="https://images.unsplash.com/photo-1617788138017-80ad40651399?auto=format&fit=crop&w=1600&q=85"
          alt="Volkswagen Tiguan SUV taxi professionnel sur route"
          width={1600}
          height={700}
          className="h-[520px] w-full object-cover sm:h-[620px]"
          priority
        />

        {/* Rich layered overlays */}
        <div className="absolute inset-0 bg-gradient-to-r from-black/92 via-black/60 to-black/15" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent" />
        {/* Lime chromatic glow */}
        <div className="absolute left-0 top-0 h-full w-[45%] bg-gradient-to-r from-lime/[0.07] to-transparent pointer-events-none" />
        <div className="absolute bottom-0 left-0 right-0 h-1/3 bg-gradient-to-t from-background/40 to-transparent pointer-events-none" />

        {/* Left accent stripe */}
        <div className="absolute left-0 top-8 bottom-8 w-1 rounded-r-full bg-gradient-to-b from-transparent via-lime to-transparent" />

        {/* Content */}
        <div className="absolute inset-0 flex flex-col justify-center px-8 sm:px-12 lg:px-16">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: [0.25, 0.46, 0.45, 0.94] }}
          >
            {/* Live badge */}
            <span className="inline-flex items-center gap-2 rounded-full border border-lime/40 bg-lime/12 px-3.5 py-1.5 text-xs font-semibold text-lime mb-6 backdrop-blur-sm">
              <span className="h-1.5 w-1.5 rounded-full bg-lime animate-pulse_lime" />
              Disponible 7j/7 — 24h/24
            </span>
          </motion.div>

          <motion.h1
            className="font-display text-4xl font-bold leading-[1.05] text-balance sm:text-5xl lg:text-[3.5rem] max-w-xl"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1, ease: [0.25, 0.46, 0.45, 0.94] }}
          >
            Taxi Conventionné<br />
            <span className="text-lime drop-shadow-[0_0_20px_rgba(182,240,0,0.4)]">
              Lyon · Ain · Isère
            </span>
          </motion.h1>

          <motion.p
            className="mt-5 max-w-[420px] text-sm leading-relaxed text-white/80 sm:text-[15px]"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2, ease: [0.25, 0.46, 0.45, 0.94] }}
          >
            Votre chauffeur de confiance basé à Tignieu-Jameyzieu.{" "}
            <strong className="text-white">Volkswagen Tiguan 7 places</strong> — transferts gare & aéroport,
            colis urgents, remorque disponible.
          </motion.p>

          {/* Rating */}
          <motion.div
            className="mt-4 flex items-center gap-2"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.28 }}
          >
            <div className="flex items-center gap-0.5 text-amber">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="h-3.5 w-3.5 fill-current" />
              ))}
            </div>
            <span className="text-sm font-semibold text-white">5.0</span>
            <span className="text-sm text-white/55">— Clients satisfaits</span>
          </motion.div>

          <motion.div
            className="mt-8 flex flex-wrap gap-3"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.32, ease: [0.25, 0.46, 0.45, 0.94] }}
          >
            <a
              href="tel:0600000000"
              className="flex items-center gap-2 rounded-full bg-lime px-5 py-3 text-sm font-bold text-black transition-all duration-200 hover:-translate-y-0.5 hover:brightness-110 lime-glow-sm"
            >
              <Phone className="h-4 w-4" />
              Appeler maintenant
            </a>
            <a
              href="#contact"
              className="flex items-center gap-2 rounded-full border border-white/20 bg-white/8 px-5 py-3 text-sm font-semibold text-white backdrop-blur-sm transition-all duration-200 hover:border-lime/30 hover:bg-lime/10 hover:text-lime"
            >
              Demander un devis
              <ArrowUpRight className="h-4 w-4" />
            </a>
          </motion.div>
        </div>

        {/* Stats bar */}
        <motion.div
          className="absolute bottom-0 left-1/2 w-[94%] max-w-[820px] -translate-x-1/2 translate-y-1/2"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.5, ease: [0.25, 0.46, 0.45, 0.94] }}
        >
          <div className="nav-blur flex flex-col gap-0 rounded-2xl border border-borderc/80 bg-surface/95 overflow-hidden sm:flex-row sm:divide-x sm:divide-borderc/60">
            {stats.map(({ icon: Icon, label, sub, color }) => (
              <div key={label} className="flex flex-1 items-center gap-3 px-5 py-4">
                <div className={`grid h-9 w-9 shrink-0 place-items-center rounded-xl bg-surface2 ${color}`}>
                  <Icon className="h-4 w-4" />
                </div>
                <div>
                  <p className="text-sm font-semibold text-foreground">{label}</p>
                  <p className="text-xs text-mutedc">{sub}</p>
                </div>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
