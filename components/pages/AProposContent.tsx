"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import { Phone, Star, Award, Clock, MapPin, ArrowRight } from "lucide-react";
import { revealVariants, revealSubtle, spring } from "@/lib/motion";
import { sitePath } from "@/lib/site-path";

const values = [
  { icon: Clock,  title: "Ponctualité",      desc: "Je suis toujours à l'heure. Chaque trajet est préparé à l'avance pour anticiper trafic et imprévus." },
  { icon: Star,   title: "Excellence",        desc: "4,9/5 sur Google. Chaque client mérite le meilleur service, du premier appel à la destination finale." },
  { icon: Award,  title: "Professionnalisme", desc: "Carte professionnelle, assurance taxi, agrément CPAM. Toutes les certifications pour votre sécurité." },
  { icon: MapPin, title: "Ancrage local",     desc: "Né et basé dans l'Ain, je connais chaque route, chaque raccourci, chaque particularité du territoire." },
];

const certifications = [
  "Carte professionnelle de taxi",
  "Agrément CPAM pour transport médical",
  "Assurance responsabilité civile professionnelle",
  "Formation premiers secours (PSC1)",
  "Véhicule contrôlé techniquement",
  "Badge aéroport Lyon Saint-Exupéry",
];

const specs = [
  "7 places assises confortables",
  "Climatisation bi-zone automatique",
  "Wi-Fi haute vitesse à bord",
  "Attache-remorque homologuée",
  "Chargeur USB & sans fil",
  "Grand coffre pour vos bagages",
  "Vitres teintées pour votre intimité",
];

const idealFor = [
  "Familles nombreuses",
  "Groupes de collègues",
  "Transport médical accessible",
  "Voyageurs avec bagages lourds",
  "Événements professionnels",
  "Transferts VIP et entreprises",
];

const stats = [
  { value: "4,9★", label: "Note Google",   sub: "9 avis vérifiés" },
  { value: "7j/7", label: "Disponibilité", sub: "Y compris jours fériés" },
  { value: "01150", label: "Code postal",  sub: "Villebois, Ain" },
  { value: "100%", label: "CPAM",          sub: "Agrément Assurance Maladie" },
];

const zones = [
  { region: "Ain (01)", cities: "Villebois, Ambérieu-en-Bugey, Bourg-en-Bresse, Belley, Montluel, Meximieux, Pérouges" },
  { region: "Rhône (69)", cities: "Lyon, Villeurbanne, Bron, Décines, Meyzieu, Saint-Priest, Vaulx-en-Velin" },
  { region: "Isère (38)", cities: "Grenoble, Bourgoin-Jallieu, Vienne, Pont-de-Chéruy, L'Isle-d'Abeau" },
];

export default function AProposContent() {
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
      {/* ── HERO ── */}
      <section className="relative w-full bg-black overflow-hidden flex flex-col select-none" style={{ height: "100svh" }}>
        {/* Photo plein écran */}
        <div className="absolute inset-0 z-0">
          <Image
            src={sitePath("/image/tiguan-hero.jpeg")}
            alt="Volkswagen Tiguan R-Line — SPM Taxi"
            fill
            className="object-cover object-center"
            priority
          />
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
              À propos
            </motion.span>

            <div className="overflow-hidden">
              <motion.span
                className="block font-sans font-semibold text-white leading-[1.05] tracking-[-0.025em]"
                style={{ fontSize: "clamp(2rem, 5.5vw, 5.2rem)" }}
                initial={{ y: "110%" }} animate={{ y: 0 }}
                transition={{ type: "spring", stiffness: 280, damping: 22, mass: 0.75, delay: 0.15 }}
              >
                SPM Taxi
              </motion.span>
            </div>
            <div className="overflow-hidden">
              <motion.span
                className="block font-sans font-semibold leading-[1.05] tracking-[-0.025em] text-white/35 font-light italic"
                style={{ fontSize: "clamp(2rem, 5.5vw, 5.2rem)" }}
                initial={{ y: "110%" }} animate={{ y: 0 }}
                transition={{ type: "spring", stiffness: 280, damping: 22, mass: 0.75, delay: 0.22 }}
              >
                votre chauffeur de confiance.
              </motion.span>
            </div>

            <motion.div
              className="mt-6 flex flex-wrap items-center gap-3"
              initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }}
              transition={{ type: "spring", stiffness: 280, damping: 22, mass: 0.75, delay: 0.42 }}
            >
              <a
                href="tel:+33767751898"
                className="inline-flex items-center gap-2.5 rounded-full bg-white text-black pl-4 pr-5 py-2.5 text-[11px] font-semibold tracking-wide hover:bg-white/90 transition-colors"
              >
                <Phone className="h-3.5 w-3.5 shrink-0" strokeWidth={2.5} />
                07 67 75 18 98
              </a>
              <Link
                href="/#contact"
                className="group inline-flex items-center gap-3 rounded-full border border-white/25 text-white pl-4 pr-1.5 py-1.5 text-[11px] font-semibold tracking-wide hover:border-white/50 transition-colors"
              >
                <span>Demander un devis</span>
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
              { label: "Note Google",    value: "4,9★ · 9 avis" },
              { label: "Disponibilité",  value: "7j/7 — 24h/24" },
              { label: "Localisation",   value: "Villebois (01)" },
              { label: "Agrément",       value: "CPAM 100%" },
            ].map((s, i) => (
              <motion.div
                key={i}
                className={`flex flex-col ${i !== 0 ? "md:pl-8 md:border-l md:border-white/10" : ""}`}
                initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}
                transition={{ type: "spring", stiffness: 280, damping: 22, mass: 0.75, delay: 0.55 + i * 0.07 }}
              >
                <span className="mb-1 text-[9px] sm:text-[10px] font-semibold tracking-[0.22em] uppercase text-white/30">{s.label}</span>
                <span className="text-sm sm:text-base font-semibold tracking-tight text-white">{s.value}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── STATS BAR ── */}
      <section className="bg-black border-t border-white/[0.06]">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 divide-x divide-white/[0.07]">
            {stats.map((s, i) => (
              <motion.div
                key={s.label}
                initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 + i * 0.08, type: "spring", stiffness: 360, damping: 24 }}
                className="flex flex-col items-center justify-center py-8 px-4 text-center"
                whileHover={{ backgroundColor: "rgba(255,255,255,0.04)" }}
              >
                <span className="text-3xl sm:text-4xl font-black tracking-tight text-white mb-1">{s.value}</span>
                <span className="text-[10px] font-semibold tracking-[0.2em] uppercase text-white/35">{s.label}</span>
                <span className="text-[10px] text-white/20 mt-0.5">{s.sub}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── BIO ── */}
      <section className="bg-white py-14 md:py-20">
        <div className="max-w-5xl mx-auto px-4 sm:px-8 lg:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-10 items-start">
            <motion.div
              className="lg:col-span-3"
              initial={{ opacity: 0, y: 28 }} animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1, duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
            >
              <p className="text-base text-[#444] leading-relaxed mb-5">
                Bienvenue chez <strong>SPM Taxi</strong>, taxi conventionné basé à <strong>Villebois (Ain 01)</strong>.
                Je propose un service de transport professionnel, ponctuel et confortable dans toute la région
                Auvergne-Rhône-Alpes et partout en France sur devis.
              </p>
              <p className="text-base text-[#444] leading-relaxed mb-5">
                Mon Volkswagen Tiguan Allspace 7 places est équipé pour tous vos besoins : transferts aéroport,
                transports médicaux conventionnés CPAM, colis urgents ou déplacements longue distance.
              </p>
              <p className="text-base text-[#444] leading-relaxed">
                Avec <strong>4,9/5 sur Google</strong> et une disponibilité 7j/7 — y compris les jours fériés et la nuit —
                SPM Taxi est votre partenaire de mobilité de confiance dans l&apos;Ain et au-delà.
              </p>
            </motion.div>
            <div className="lg:col-span-2 relative aspect-[4/3] rounded-2xl overflow-hidden bg-[#f8f9fa]">
              <Image
                src={sitePath("/image/tiguan-side.png")}
                alt="Volkswagen Tiguan Allspace — SPM Taxi"
                fill
                className="object-contain object-center p-4"
              />
            </div>
          </div>
        </div>
      </section>

      {/* ── VALEURS ── */}
      <section ref={valRef} className="bg-[#f8f9fa] py-14 md:py-20">
        <div className="max-w-5xl mx-auto px-4 sm:px-8 lg:px-12">
          <motion.h2
            variants={revealSubtle} initial="hidden" animate={valIn ? "visible" : "hidden"} custom={0}
            className="text-2xl font-semibold tracking-tight text-black mb-8"
          >
            Mes valeurs
          </motion.h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {values.map((v, i) => (
              <motion.div
                key={v.title}
                variants={revealVariants} initial="hidden" animate={valIn ? "visible" : "hidden"} custom={i * 0.09}
                className="flex gap-4 bg-white rounded-2xl p-6 border border-black/[0.05] group"
                whileHover={{ y: -5, scale: 1.01, boxShadow: "0 10px 28px rgba(0,0,0,0.07)" }}
                whileTap={{ scale: 0.98 }}
                transition={spring}
              >
                <motion.div
                  className="grid h-10 w-10 shrink-0 place-items-center rounded-full bg-black"
                  whileHover={{ scale: 1.18, rotate: 8 }} transition={spring}
                >
                  <v.icon className="h-4 w-4 text-white" strokeWidth={1.8} />
                </motion.div>
                <div>
                  <h3 className="text-sm font-semibold text-black mb-1.5">{v.title}</h3>
                  <p className="text-xs text-[#555] leading-relaxed">{v.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── VÉHICULE ── */}
      <section ref={carRef} className="bg-white py-14 md:py-20">
        <div className="max-w-5xl mx-auto px-4 sm:px-8 lg:px-12">
          <motion.h2
            variants={revealSubtle} initial="hidden" animate={carIn ? "visible" : "hidden"} custom={0}
            className="text-2xl font-semibold tracking-tight text-black mb-6"
          >
            Le véhicule
          </motion.h2>
          <motion.div
            variants={revealVariants} initial="hidden" animate={carIn ? "visible" : "hidden"} custom={0.1}
            className="bg-[#f8f9fa] rounded-2xl p-6 sm:p-8 border border-black/[0.05]"
          >
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
              <div>
                <h3 className="text-lg font-semibold text-black mb-4">Volkswagen Tiguan Allspace</h3>
                <ul className="space-y-2.5">
                  {specs.map((item, i) => (
                    <motion.li
                      key={item}
                      initial={{ opacity: 0, x: -14 }}
                      animate={carIn ? { opacity: 1, x: 0 } : {}}
                      transition={{ delay: 0.1 + i * 0.05, type: "spring", stiffness: 360, damping: 24 }}
                      className="flex items-center gap-2.5 text-sm text-[#444]"
                    >
                      <div className="h-1.5 w-1.5 rounded-full bg-black shrink-0" />
                      {item}
                    </motion.li>
                  ))}
                </ul>
              </div>
              <div>
                <h3 className="text-lg font-semibold text-black mb-4">Idéal pour</h3>
                <ul className="space-y-2.5">
                  {idealFor.map((item, i) => (
                    <motion.li
                      key={item}
                      initial={{ opacity: 0, x: -14 }}
                      animate={carIn ? { opacity: 1, x: 0 } : {}}
                      transition={{ delay: 0.1 + i * 0.05, type: "spring", stiffness: 360, damping: 24 }}
                      className="flex items-center gap-2.5 text-sm text-[#444]"
                    >
                      <div className="h-1.5 w-1.5 rounded-full bg-black shrink-0" />
                      {item}
                    </motion.li>
                  ))}
                </ul>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ── CERTIFICATIONS ── */}
      <section ref={certRef} className="bg-[#f8f9fa] py-14 md:py-20">
        <div className="max-w-5xl mx-auto px-4 sm:px-8 lg:px-12">
          <motion.h2
            variants={revealSubtle} initial="hidden" animate={certIn ? "visible" : "hidden"} custom={0}
            className="text-2xl font-semibold tracking-tight text-black mb-6"
          >
            Certifications & agréments
          </motion.h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {certifications.map((c, i) => (
              <motion.div
                key={c}
                variants={revealVariants} initial="hidden" animate={certIn ? "visible" : "hidden"} custom={i * 0.07}
                className="flex items-center gap-3 bg-white rounded-xl px-5 py-3.5 border border-black/[0.05]"
                whileHover={{ x: 5, backgroundColor: "rgba(0,0,0,0.04)" }}
                transition={spring}
              >
                <motion.div whileHover={{ rotate: 15, scale: 1.15 }} transition={spring}>
                  <Award className="h-4 w-4 text-black shrink-0" strokeWidth={1.8} />
                </motion.div>
                <span className="text-sm text-black">{c}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── ZONE ── */}
      <section ref={zoneRef} className="bg-black py-14 md:py-20">
        <div className="max-w-5xl mx-auto px-4 sm:px-8 lg:px-12">
          <motion.h2
            variants={revealSubtle} initial="hidden" animate={zoneIn ? "visible" : "hidden"} custom={0}
            className="text-2xl font-semibold tracking-tight text-white mb-8"
          >
            Zone d&apos;intervention
          </motion.h2>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 mb-8">
            {zones.map((z, i) => (
              <motion.div
                key={z.region}
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
        <motion.div
          variants={revealVariants} initial="hidden" animate={ctaIn ? "visible" : "hidden"} custom={0}
        >
          <h2 className="text-2xl sm:text-3xl font-semibold text-black mb-3">Prêt à voyager avec SPM ?</h2>
          <p className="text-sm text-[#555] mb-10">Disponible maintenant · Réponse sous 2h · 4,9★ Google</p>
          <div className="flex flex-wrap justify-center gap-4">
            <motion.a
              href="tel:+33767751898"
              className="inline-flex items-center gap-2 rounded-full bg-black text-white px-7 py-3 text-sm font-semibold"
              whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }} transition={spring}
            >
              <Phone className="h-4 w-4" /> 07 67 75 18 98
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
