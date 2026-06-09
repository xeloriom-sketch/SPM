"use client";

import { useRef } from "react";
import { motion, useInView, useScroll, useTransform } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import { Phone, Star, Award, Clock, MapPin, ArrowRight, CheckCircle } from "lucide-react";
import { revealVariants, revealSubtle, spring } from "@/lib/motion";
import { useSettings } from "@/lib/settings-context";
import HeroVideo from "@/components/HeroVideo";
import { sitePath } from "@/lib/site-path";

const certifications = [
  "Carte professionnelle de taxi",
  "Agrément CPAM pour transport médical",
  "Assurance responsabilité civile professionnelle",
  "Formation premiers secours (PSC1)",
  "Véhicule contrôlé techniquement",
  "Badge aéroport Lyon Saint-Exupéry",
];

const zones = [
  { region: "Ain (01)", cities: "Villebois, Ambérieu-en-Bugey, Bourg-en-Bresse, Belley, Montluel, Meximieux, Pérouges" },
  { region: "Rhône (69)", cities: "Lyon, Villeurbanne, Bron, Décines, Meyzieu, Saint-Priest, Vaulx-en-Velin" },
  { region: "Isère (38)", cities: "Grenoble, Bourgoin-Jallieu, Vienne, Pont-de-Chéruy, L'Isle-d'Abeau" },
];

export default function AProposContent() {
  const s = useSettings();

  const values = [
    { icon: Clock,  title: "Ponctualité",      desc: "Je suis toujours à l'heure. Chaque trajet est préparé à l'avance pour anticiper trafic et imprévus." },
    { icon: Star,   title: "Excellence",        desc: `${s.google_rating}/5 sur Google. Chaque client mérite le meilleur service, du premier appel à la destination finale.` },
    { icon: Award,  title: "Professionnalisme", desc: "Carte professionnelle, assurance taxi, agrément CPAM. Toutes les certifications pour votre sécurité." },
    { icon: MapPin, title: "Ancrage local",     desc: "Basé à Villebois, je connais chaque route de l'Ain, Lyon et l'Isère. Aucune surprise, aucun détour inutile." },
  ];

  const valRef  = useRef<HTMLElement>(null);
  const carRef  = useRef<HTMLElement>(null);
  const certRef = useRef<HTMLElement>(null);
  const zoneRef = useRef<HTMLElement>(null);
  const ctaRef  = useRef<HTMLElement>(null);

  const valIn  = useInView(valRef,  { once: true, margin: "-40px" });
  const carIn  = useInView(carRef,  { once: true, margin: "-40px" });
  const certIn = useInView(certRef, { once: true, margin: "-40px" });
  const zoneIn = useInView(zoneRef, { once: true, margin: "-40px" });
  const ctaIn  = useInView(ctaRef,  { once: true, margin: "-40px" });

  return (
    <>
      {/* ── HERO VIDÉO ── */}
      <div style={{ height: "160vh" }}>
        <section className="sticky top-0 relative w-full bg-black overflow-hidden flex flex-col select-none" style={{ height: "100svh" }}>
          <div className="absolute inset-0 z-0">
            <HeroVideo src={sitePath("/videos/hero-web.mp4")} scrollFactor={1.6} />
          </div>
          <div className="pointer-events-none absolute inset-0 z-[5]">
            <div className="absolute inset-x-0 top-0 h-40 bg-gradient-to-b from-black/55 to-transparent" />
            <div className="absolute inset-x-0 bottom-0 h-[65%] bg-gradient-to-t from-black via-black/70 to-transparent" />
          </div>
          <div className="pointer-events-none absolute inset-0 z-[6] opacity-[0.028]"
            style={{ backgroundImage: "url(\"data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E\")", backgroundSize: "160px" }}
          />
          <div className="relative z-[10] w-full mt-auto">
            <div className="px-6 pb-5 sm:px-10 sm:pb-6 md:px-14">
              <motion.span
                initial={{ opacity: 0, y: 14 }} animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.15, duration: 0.5 }}
                className="text-[10px] font-bold tracking-[0.3em] uppercase text-white/35 mb-5 block"
              >
                À propos
              </motion.span>
              <div className="overflow-hidden">
                <motion.span
                  className="block font-sans font-semibold text-white leading-[1.05] tracking-[-0.025em]"
                  style={{ fontSize: "clamp(2rem, 5.5vw, 5.2rem)" }}
                  initial={{ y: "110%" }} animate={{ y: 0 }}
                  transition={{ type: "spring", stiffness: 280, damping: 22, mass: 0.75, delay: 0.1 }}
                >
                  SPM Taxi
                </motion.span>
              </div>
              <div className="overflow-hidden">
                <motion.span
                  className="block font-sans font-light italic leading-[1.05] tracking-[-0.025em] text-white/35"
                  style={{ fontSize: "clamp(2rem, 5.5vw, 5.2rem)" }}
                  initial={{ y: "110%" }} animate={{ y: 0 }}
                  transition={{ type: "spring", stiffness: 280, damping: 22, mass: 0.75, delay: 0.17 }}
                >
                  votre chauffeur de confiance.
                </motion.span>
              </div>
              <motion.div
                className="mt-6 flex flex-wrap items-center gap-3"
                initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }}
                transition={{ type: "spring", stiffness: 280, damping: 22, mass: 0.75, delay: 0.35 }}
              >
                <a href={`tel:${s.contact_phone.replace(/[\s.-]/g, "")}`}
                  className="inline-flex items-center gap-2.5 rounded-full bg-white text-black pl-4 pr-5 py-2.5 text-[11px] font-semibold tracking-wide hover:bg-white/90 transition-colors"
                >
                  <Phone className="h-3.5 w-3.5 shrink-0" strokeWidth={2.5} />
                  {s.contact_phone}
                </a>
                <Link href="/#contact"
                  className="group inline-flex items-center gap-3 rounded-full border border-white/25 text-white pl-4 pr-1.5 py-1.5 text-[11px] font-semibold tracking-wide hover:border-white/50 transition-colors"
                >
                  <span>Demander un devis</span>
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
                { label: "Note Google",   value: `${s.google_rating}★ · ${s.google_review_count} avis` },
                { label: "Disponibilité", value: "7j/7 — 24h/24" },
                { label: "Localisation",  value: "Villebois (01)" },
                { label: "Agrément",      value: "CPAM 100%" },
              ].map((item, i) => (
                <motion.div key={i}
                  className={`flex flex-col ${i !== 0 ? "md:pl-8 md:border-l md:border-white/10" : ""}`}
                  initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}
                  transition={{ type: "spring", stiffness: 280, damping: 22, mass: 0.75, delay: 0.45 + i * 0.07 }}
                >
                  <span className="mb-1 text-[9px] sm:text-[10px] font-semibold tracking-[0.22em] uppercase text-white/30">{item.label}</span>
                  <span className="text-sm sm:text-base font-semibold tracking-tight text-white">{item.value}</span>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
      </div>

      {/* ── STATS BAR ── */}
      <section className="bg-black border-t border-white/[0.06]">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 divide-x divide-white/[0.07]">
            {[
              { value: `${s.google_rating}★`, label: "Note Google",   sub: `${s.google_review_count} avis vérifiés` },
              { value: "7j/7",                label: "Disponibilité", sub: "Y compris jours fériés" },
              { value: "01150",               label: "Code postal",   sub: "Villebois, Ain" },
              { value: "100%",                label: "CPAM",          sub: "Agrément Assurance Maladie" },
            ].map((stat, i) => (
              <motion.div key={stat.label}
                initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 + i * 0.08, type: "spring", stiffness: 360, damping: 24 }}
                className="flex flex-col items-center justify-center py-8 px-4 text-center"
              >
                <span className="text-3xl sm:text-4xl font-black tracking-tight text-white mb-1">{stat.value}</span>
                <span className="text-[10px] font-semibold tracking-[0.2em] uppercase text-white/35">{stat.label}</span>
                <span className="text-[10px] text-white/20 mt-0.5">{stat.sub}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── BIO + PHOTO CHAUFFEUR ── */}
      <section className="bg-white py-14 md:py-20">
        <div className="max-w-6xl mx-auto px-4 sm:px-8 lg:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, y: 28 }} animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1, duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
            >
              <span className="text-[10px] font-bold tracking-[0.3em] uppercase text-black/30 mb-4 block">Le chauffeur</span>
              <h2 className="text-3xl font-semibold tracking-tight text-black mb-6">Un service professionnel,<br/>une passion du transport.</h2>
              <p className="text-base text-[#444] leading-relaxed mb-5">{s.about_bio_1}</p>
              <p className="text-base text-[#444] leading-relaxed mb-5">{s.about_bio_2}</p>
              <p className="text-base text-[#444] leading-relaxed">{s.about_bio_3}</p>
            </motion.div>
            {/* Tiguan — image grande */}
            <motion.div
              initial={{ opacity: 0, x: 30 }} animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.2, duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
              className="relative w-full aspect-[4/3] rounded-3xl overflow-hidden"
            >
              <Image
                src="/image/volkswagen-tiguan-r-line.webp"
                alt="Volkswagen Tiguan Allspace R-Line — SPM Taxi"
                fill
                className="object-cover object-center"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent" />
              <div className="absolute bottom-6 left-6 right-6">
                <p className="text-white font-semibold text-sm">Volkswagen Tiguan Allspace R-Line</p>
                <p className="text-white/60 text-xs mt-1">7 places · SUV Confort · Attache-remorque homologuée</p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ── VÉHICULE — images grandes sans fond ── */}
      <section ref={carRef} className="bg-[#f8f9fa] py-14 md:py-20">
        <div className="max-w-6xl mx-auto px-4 sm:px-8 lg:px-12">
          <motion.div variants={revealSubtle} initial="hidden" animate={carIn ? "visible" : "hidden"} custom={0}>
            <span className="text-[10px] font-bold tracking-[0.3em] uppercase text-black/30 mb-3 block">Le véhicule</span>
            <h2 className="text-3xl font-semibold tracking-tight text-black mb-10">Volkswagen Tiguan Allspace — 7 places</h2>
          </motion.div>

          {/* Grande image voiture sans fond */}
          <motion.div
            variants={revealVariants} initial="hidden" animate={carIn ? "visible" : "hidden"} custom={0.1}
            className="relative w-full aspect-[16/7] mb-10"
          >
            <Image
              src="/image/tiguan-front-quarter.webp"
              alt="Volkswagen Tiguan Allspace R-Line — SPM Taxi"
              fill
              className="object-contain object-center"
            />
          </motion.div>

          {/* 4 angles — grille sans fond */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-12">
            {[
              { src: "/image/tiguan-front.webp",  label: "Face avant" },
              { src: "/image/tiguan-side.webp",   label: "Profil" },
              { src: "/image/tiguan-rear.webp",   label: "Vue arrière" },
              { src: "/image/tiguan-grid.webp",   label: "Toutes les vues" },
            ].map((v, i) => (
              <motion.div key={v.label}
                variants={revealVariants} initial="hidden" animate={carIn ? "visible" : "hidden"} custom={0.15 + i * 0.07}
                className="relative aspect-[4/3]"
              >
                <Image src={v.src} alt={v.label} fill className="object-contain object-center" />
                <p className="absolute bottom-0 left-0 right-0 text-center text-[9px] font-semibold tracking-wider uppercase text-black/30 pb-1">{v.label}</p>
              </motion.div>
            ))}
          </div>

          {/* Specs + intérieur */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
            <motion.div
              variants={revealVariants} initial="hidden" animate={carIn ? "visible" : "hidden"} custom={0.2}
              className="relative aspect-[4/3] rounded-3xl overflow-hidden"
            >
              <Image src="/image/car-interior.webp" alt="Intérieur confortable SUV 7 places" fill className="object-cover" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent" />
              <div className="absolute bottom-5 left-5">
                <p className="text-white font-semibold text-sm">Intérieur premium</p>
                <p className="text-white/60 text-xs">Wi-Fi · Climatisation bi-zone · USB</p>
              </div>
            </motion.div>
            <div className="grid grid-cols-2 gap-3">
              {[
                "7 places assises confortables",
                "Climatisation bi-zone automatique",
                "Wi-Fi haute vitesse à bord",
                "Attache-remorque homologuée",
                "Chargeur USB & sans fil",
                "Grand coffre pour vos bagages",
              ].map((item, i) => (
                <motion.div key={item}
                  variants={revealVariants} initial="hidden" animate={carIn ? "visible" : "hidden"} custom={0.25 + i * 0.05}
                  className="flex items-start gap-2.5 bg-white rounded-2xl p-4 border border-black/[0.05]"
                >
                  <CheckCircle className="h-4 w-4 text-black shrink-0 mt-0.5" strokeWidth={2} />
                  <span className="text-xs text-[#444] leading-snug">{item}</span>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── VALEURS ── */}
      <section ref={valRef} className="bg-white py-14 md:py-20">
        <div className="max-w-6xl mx-auto px-4 sm:px-8 lg:px-12">
          <motion.div variants={revealSubtle} initial="hidden" animate={valIn ? "visible" : "hidden"} custom={0}>
            <span className="text-[10px] font-bold tracking-[0.3em] uppercase text-black/30 mb-3 block">Engagement</span>
            <h2 className="text-3xl font-semibold tracking-tight text-black mb-10">Mes valeurs</h2>
          </motion.div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {values.map((v, i) => (
              <motion.div key={v.title}
                variants={revealVariants} initial="hidden" animate={valIn ? "visible" : "hidden"} custom={i * 0.09}
                className="flex gap-4 bg-[#f8f9fa] rounded-2xl p-6 border border-black/[0.05]"
                whileHover={{ y: -5, boxShadow: "0 10px 28px rgba(0,0,0,0.07)" }}
                transition={spring}
              >
                <div className="grid h-10 w-10 shrink-0 place-items-center rounded-full bg-black">
                  <v.icon className="h-4 w-4 text-white" strokeWidth={1.8} />
                </div>
                <div>
                  <h3 className="text-sm font-semibold text-black mb-1.5">{v.title}</h3>
                  <p className="text-xs text-[#555] leading-relaxed">{v.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── AÉROPORT PHOTO SECTION ── */}
      <section className="relative w-full aspect-[21/8] overflow-hidden">
        <Image src="/image/airport-terminal.webp" alt="Transfert aéroport Lyon Saint-Exupéry" fill className="object-cover object-center" />
        <div className="absolute inset-0 bg-black/55" />
        <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-6">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
            className="text-[10px] font-bold tracking-[0.3em] uppercase text-white/40 mb-4"
          >
            Transferts aéroport
          </motion.p>
          <motion.h3
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1], delay: 0.08 }}
            className="text-3xl md:text-4xl font-semibold text-white tracking-tight mb-4"
          >
            Lyon Saint-Exupéry<br/>à portée d&apos;appel
          </motion.h3>
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="text-sm text-white/55 max-w-md"
          >
            Suivi des vols en temps réel · Aucun frais pour retard · Disponible 24h/24
          </motion.p>
        </div>
      </section>

      {/* ── CERTIFICATIONS ── */}
      <section ref={certRef} className="bg-[#f8f9fa] py-14 md:py-20">
        <div className="max-w-6xl mx-auto px-4 sm:px-8 lg:px-12">
          <motion.div variants={revealSubtle} initial="hidden" animate={certIn ? "visible" : "hidden"} custom={0}>
            <span className="text-[10px] font-bold tracking-[0.3em] uppercase text-black/30 mb-3 block">Agréments</span>
            <h2 className="text-3xl font-semibold tracking-tight text-black mb-10">Certifications & habilitations</h2>
          </motion.div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {certifications.map((c, i) => (
              <motion.div key={c}
                variants={revealVariants} initial="hidden" animate={certIn ? "visible" : "hidden"} custom={i * 0.07}
                className="flex items-center gap-3 bg-white rounded-xl px-5 py-4 border border-black/[0.05]"
                whileHover={{ x: 5 }}
                transition={spring}
              >
                <Award className="h-4 w-4 text-black shrink-0" strokeWidth={1.8} />
                <span className="text-sm text-black">{c}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── ZONE — photo route ── */}
      <section ref={zoneRef} className="bg-black py-14 md:py-20 relative overflow-hidden">
        {/* Photo route en fond */}
        <div className="absolute inset-0 z-0 opacity-20">
          <Image src="/image/road-highway.webp" alt="Route France" fill className="object-cover object-center" />
        </div>
        <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-8 lg:px-12">
          <motion.div variants={revealSubtle} initial="hidden" animate={zoneIn ? "visible" : "hidden"} custom={0}>
            <span className="text-[10px] font-bold tracking-[0.3em] uppercase text-white/35 mb-3 block">Couverture</span>
            <h2 className="text-3xl font-semibold tracking-tight text-white mb-10">Zone d&apos;intervention</h2>
          </motion.div>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 mb-8">
            {zones.map((z, i) => (
              <motion.div key={z.region}
                initial={{ opacity: 0, y: 24 }}
                animate={zoneIn ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: 0.1 + i * 0.1, type: "spring", stiffness: 360, damping: 24 }}
              >
                <p className="text-[10px] font-bold tracking-[0.2em] uppercase text-white/40 mb-3">{z.region}</p>
                <p className="text-sm text-white/65 leading-relaxed">{z.cities}</p>
              </motion.div>
            ))}
          </div>
          <div className="pt-6 border-t border-white/10">
            <p className="text-xs text-white/35">+ France entière sur devis · Genève et villes suisses frontalières</p>
          </div>
        </div>
      </section>

      {/* ── CTA ── */}
      <section ref={ctaRef} className="bg-white py-16 md:py-24 px-4 sm:px-10 text-center">
        <motion.div variants={revealVariants} initial="hidden" animate={ctaIn ? "visible" : "hidden"} custom={0}>
          <h2 className="text-2xl sm:text-3xl font-semibold text-black mb-3">Prêt à voyager avec SPM ?</h2>
          <p className="text-sm text-[#555] mb-10">Disponible maintenant · Réponse sous 2h · {s.google_rating}★ Google</p>
          <div className="flex flex-wrap justify-center gap-4">
            <motion.a
              href={`tel:${s.contact_phone.replace(/[\s.-]/g, "")}`}
              className="inline-flex items-center gap-2 rounded-full bg-black text-white px-7 py-3 text-sm font-semibold"
              whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }} transition={spring}
            >
              <Phone className="h-4 w-4" /> {s.contact_phone}
            </motion.a>
            <motion.div whileHover={{ scale: 1.04 }} whileTap={{ scale: 0.95 }} transition={spring}>
              <Link href="/#contact" className="inline-flex items-center gap-2 rounded-full border border-black/15 text-black px-7 py-3 text-sm font-semibold hover:border-black/30 transition-colors">
                Demander un devis <ArrowRight className="h-4 w-4" />
              </Link>
            </motion.div>
          </div>
        </motion.div>
      </section>
    </>
  );
}
