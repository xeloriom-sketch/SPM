"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { Users, Zap, Link2, Wind, Wifi, ShieldCheck } from "lucide-react";

const specs = [
  { icon: Users, label: "7 places", sub: "Confort familial", color: "text-lime" },
  { icon: Zap, label: "TDI / Hybrid", sub: "Faibles émissions", color: "text-sky" },
  { icon: Link2, label: "Remorque", sub: "Équipement homologué", color: "text-amber" },
  { icon: Wind, label: "Clima bi-zone", sub: "Confort optimal", color: "text-lime" },
  { icon: Wifi, label: "Wi-Fi bord", sub: "Connecté en route", color: "text-sky" },
  { icon: ShieldCheck, label: "Assuré Pro", sub: "Couverture taxi", color: "text-amber" },
];

export default function Vehicle() {
  return (
    <section id="vehicule" className="mt-28 px-4 sm:px-6 max-w-[1240px] mx-auto">
      <motion.div
        className="relative overflow-hidden rounded-3xl"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-80px" }}
        transition={{ duration: 0.7, ease: [0.25, 0.46, 0.45, 0.94] }}
      >
        {/* VW Tiguan 7 places */}
        <Image
          src="https://images.unsplash.com/photo-1533473359331-0135ef1b58bf?auto=format&fit=crop&w=1600&q=85"
          alt="Volkswagen Tiguan 7 places SUV — Taxi conventionné Tignieu"
          width={1600}
          height={700}
          className="h-[440px] w-full object-cover sm:h-[540px]"
        />

        {/* Overlays */}
        <div className="absolute inset-0 bg-gradient-to-r from-black/95 via-black/65 to-black/20" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-transparent to-transparent" />
        {/* Lime glow left */}
        <div className="absolute inset-y-0 left-0 w-1/2 bg-gradient-to-r from-lime/[0.06] to-transparent pointer-events-none" />
        {/* Left stripe */}
        <div className="absolute left-0 top-0 h-full w-1.5 bg-gradient-to-b from-transparent via-lime to-transparent" />

        {/* Content */}
        <div className="absolute inset-0 flex flex-col justify-end p-7 sm:p-10 lg:p-14">
          <span className="mb-3 inline-flex w-fit items-center gap-2 rounded-full border border-lime/30 bg-lime/10 px-3 py-1 text-xs font-semibold text-lime">
            <span className="h-1.5 w-1.5 rounded-full bg-lime" />
            Flotte principale
          </span>
          <h2 className="font-display text-3xl font-bold text-balance sm:text-4xl lg:text-5xl">
            Volkswagen Tiguan<br />
            <span className="text-lime drop-shadow-[0_0_20px_rgba(182,240,0,0.35)]">SUV 7 Places</span>
          </h2>
          <p className="mt-3 max-w-lg text-sm leading-relaxed text-white/75 sm:text-[15px]">
            Un SUV spacieux et premium pour tous vos déplacements. Idéal en famille,
            pour les groupes professionnels et les voyages longue distance.
          </p>

          {/* Specs */}
          <div className="mt-6 grid grid-cols-2 gap-2.5 sm:grid-cols-3 lg:grid-cols-6 max-w-3xl">
            {specs.map(({ icon: Icon, label, sub, color }, i) => (
              <motion.div
                key={label}
                className="flex flex-col gap-1.5 rounded-2xl border border-white/10 bg-black/30 p-3 backdrop-blur-sm"
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: 0.3 + i * 0.07, ease: "easeOut" }}
              >
                <Icon className={`h-4 w-4 ${color}`} />
                <p className="text-xs font-bold text-white">{label}</p>
                <p className="text-[10px] text-white/50">{sub}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.div>

      {/* Bottom two cards */}
      <div className="mt-5 grid grid-cols-1 gap-5 md:grid-cols-2">
        <motion.div
          className="relative overflow-hidden rounded-3xl group"
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.6, delay: 0.05 }}
        >
          <Image
            src="https://images.unsplash.com/photo-1619767886558-efdc259cde1a?auto=format&fit=crop&w=900&q=85"
            alt="Intérieur confortable SUV taxi"
            width={900}
            height={400}
            className="h-56 w-full object-cover transition-transform duration-700 group-hover:scale-105"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-transparent" />
          {/* Lime accent bar */}
          <div className="absolute bottom-0 left-0 h-0.5 w-full bg-gradient-to-r from-lime via-lime/50 to-transparent" />
          <div className="absolute bottom-5 left-5 right-5">
            <p className="font-display text-xl font-bold">Intérieur premium</p>
            <p className="mt-1 text-sm text-white/60">Sièges confortables · Wi-Fi · Climatisation bi-zone</p>
          </div>
        </motion.div>

        <motion.div
          className="relative overflow-hidden rounded-3xl group"
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.6, delay: 0.13 }}
        >
          <Image
            src="https://images.unsplash.com/photo-1609630875171-b1321377ee65?auto=format&fit=crop&w=900&q=85"
            alt="Attache remorque taxi professionnel"
            width={900}
            height={400}
            className="h-56 w-full object-cover transition-transform duration-700 group-hover:scale-105"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-transparent" />
          <div className="absolute bottom-0 left-0 h-0.5 w-full bg-gradient-to-r from-amber via-amber/50 to-transparent" />
          <div className="absolute bottom-5 left-5 right-5">
            <span className="inline-block rounded-full bg-amber/90 px-3 py-0.5 text-xs font-bold text-black mb-2">
              Équipement unique
            </span>
            <p className="font-display text-xl font-bold">Remorque à disposition</p>
            <p className="mt-1 text-sm text-white/60">Transport de matériel, véhicules, déménagement</p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
