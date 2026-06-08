"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import Link from "next/link";
import { Phone, Plane, Heart, Package, Map, Truck, ArrowRight } from "lucide-react";
import HeroVideo from "@/components/HeroVideo";
import SplitText from "@/components/ui/SplitText";
import { revealVariants, revealSubtle, spring } from "@/lib/motion";
import { sitePath } from "@/lib/site-path";

const services = [
  {
    icon: Plane,
    title: "Transferts Aéroport & Gare",
    desc: "Prise en charge à domicile, suivi des vols en temps réel, aide aux bagages. Lyon Saint-Exupéry, Part-Dieu, Perrache, Genève-Cointrin et toutes gares TGV.",
    features: ["Suivi vol en temps réel", "Aide bagages incluse", "Attente 10 min offerte", "Disponible 24h/24"],
    href: "/transfert-aeroport-lyon",
    dark: true,
  },
  {
    icon: Heart,
    title: "Transport Médical CPAM",
    desc: "Agréé par l'Assurance Maladie pour les transports médicaux sur prescription. Chimiothérapie, dialyse, hospitalisation — prise en charge directe.",
    features: ["Agrément CPAM officiel", "Zéro avance de frais", "Prescription acceptée", "Destinations hospitalières"],
    href: "/taxi-conventionné-cpam",
    dark: false,
  },
  {
    icon: Package,
    title: "Colis & Courriers Urgents",
    desc: "Livraison express de colis, lettres recommandées, pièces détachées et documents urgents. Porte à porte avec confirmation de remise.",
    features: ["Livraison express", "Confirmation de remise", "Colis fragiles acceptés", "Inter-entreprises B2B"],
    href: "/taxi-remorque-ain",
    dark: false,
  },
  {
    icon: Truck,
    title: "Remorque à Disposition",
    desc: "Attache-remorque homologuée sur le Tiguan Allspace. Transport de matériel lourd, véhicules en panne, déménagements partiels, animaux.",
    features: ["Attache-remorque homologuée", "Matériel lourd", "Véhicule en panne", "Déménagement partiel"],
    href: "/taxi-remorque-ain",
    dark: false,
  },
  {
    icon: Map,
    title: "Longue Distance France Entière",
    desc: "Paris, Marseille, Bordeaux, Nice, Strasbourg, Genève... Devis personnalisé, tarif fixe, arrêts possibles en route. Aller simple ou aller-retour.",
    features: ["Tarif fixe sur devis", "Arrêts possibles", "Aller-retour disponible", "Toute la France"],
    href: "/taxi-longue-distance",
    dark: false,
  },
];

export default function ServicesContent() {
  const heroRef  = useRef<HTMLElement>(null);
  const cardsRef = useRef<HTMLDivElement>(null);
  const ctaRef   = useRef<HTMLElement>(null);

  const cardsIn = useInView(cardsRef, { once: true, margin: "-60px" });
  const ctaIn   = useInView(ctaRef,   { once: true, margin: "-40px" });


  return (
    <>
      {/* ── HERO ── */}
      <div style={{ height: "160vh" }}>
      <section ref={heroRef} className="sticky top-0 relative w-full bg-black overflow-hidden flex flex-col select-none" style={{ height: "100svh" }}>
        {/* Vidéo fond */}
        <div className="absolute inset-0 z-0">
          <HeroVideo src={sitePath("/videos/7440442-web.mp4")} scrollFactor={1.6} />
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
              Nos services
            </motion.span>

            <div className="overflow-hidden">
              <motion.span
                className="block font-sans font-semibold text-white leading-[1.05] tracking-[-0.025em]"
                style={{ fontSize: "clamp(2rem, 5.5vw, 5.2rem)" }}
                initial={{ y: "110%" }} animate={{ y: 0 }}
                transition={{ type: "spring", stiffness: 280, damping: 22, mass: 0.75, delay: 0.15 }}
              >
                Tout ce dont
              </motion.span>
            </div>
            <div className="overflow-hidden">
              <motion.span
                className="block font-sans font-semibold leading-[1.05] tracking-[-0.025em] text-white/35 font-light italic"
                style={{ fontSize: "clamp(2rem, 5.5vw, 5.2rem)" }}
                initial={{ y: "110%" }} animate={{ y: 0 }}
                transition={{ type: "spring", stiffness: 280, damping: 22, mass: 0.75, delay: 0.22 }}
              >
                vous avez besoin.
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
                href="/tarifs"
                className="group inline-flex items-center gap-3 rounded-full border border-white/25 text-white pl-4 pr-1.5 py-1.5 text-[11px] font-semibold tracking-wide hover:border-white/50 transition-colors"
              >
                <span>Voir les tarifs</span>
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
              { label: "Services distincts", value: "5 spécialités" },
              { label: "Disponibilité",      value: "24h/24 · 7j/7" },
              { label: "Tarification",       value: "Prix fixe garanti" },
              { label: "Devis",              value: "Gratuit sous 2h" },
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
      </div>

      {/* ── SERVICE CARDS ── */}
      <section className="bg-white py-14 md:py-20">
        <div ref={cardsRef} className="max-w-5xl mx-auto px-4 sm:px-8 lg:px-12 space-y-4">
          {services.map((s, i) => (
            <motion.div
              key={s.title}
              variants={revealVariants} initial="hidden" animate={cardsIn ? "visible" : "hidden"} custom={i * 0.07}
              whileHover={{ y: -4, scale: 1.003, boxShadow: "0 16px 48px rgba(0,0,0,0.1)" }}
              whileTap={{ scale: 0.998 }}
              transition={spring}
              className={`rounded-[24px] overflow-hidden border border-black/[0.06] group ${s.dark ? "bg-black text-white" : "bg-[#f8f9fa] text-black"}`}
            >
              <div className="p-6 sm:p-8">
                <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-5 mb-5">
                  <div className="flex items-center gap-4">
                    <motion.div
                      className={`grid h-12 w-12 shrink-0 place-items-center rounded-full ${s.dark ? "bg-white/10" : "bg-black"}`}
                      whileHover={{ scale: 1.15, rotate: 6 }} transition={spring}
                    >
                      <s.icon className="h-5 w-5 text-white" strokeWidth={1.8} />
                    </motion.div>
                    <div>
                      <span className={`text-[10px] font-bold tracking-[0.25em] uppercase ${s.dark ? "text-white/30" : "text-black/30"}`}>
                        {String(i + 1).padStart(2, "0")}
                      </span>
                      <h2 className="text-lg font-semibold tracking-tight">{s.title}</h2>
                    </div>
                  </div>
                  <motion.div whileHover={{ x: 3 }} transition={spring} className="sm:shrink-0">
                    <Link
                      href={s.href}
                      className={`inline-flex items-center gap-2 rounded-full px-4 py-2 text-[11px] font-semibold tracking-wide border transition-colors ${
                        s.dark
                          ? "border-white/20 text-white hover:bg-white hover:text-black"
                          : "border-black/15 text-black hover:bg-black hover:text-white"
                      }`}
                    >
                      En savoir plus <ArrowRight className="h-3 w-3" />
                    </Link>
                  </motion.div>
                </div>

                <p className={`text-sm leading-relaxed mb-5 ${s.dark ? "text-white/60" : "text-[#555]"}`}>{s.desc}</p>

                <div className="flex flex-wrap gap-2">
                  {s.features.map((f, fi) => (
                    <motion.span
                      key={f}
                      initial={{ opacity: 0, scale: 0.8, y: 6 }}
                      animate={cardsIn ? { opacity: 1, scale: 1, y: 0 } : {}}
                      transition={{ delay: i * 0.07 + fi * 0.04 + 0.16, type: "spring", stiffness: 360, damping: 22 }}
                      className={`text-[11px] font-medium px-3 py-1.5 rounded-full ${
                        s.dark ? "bg-white/10 text-white/70" : "bg-black/[0.05] text-black/60"
                      }`}
                    >
                      {f}
                    </motion.span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* ── CTA FULL WIDTH ── */}
      <section ref={ctaRef} className="bg-black py-16 md:py-24 px-4 sm:px-10 text-center">
        <motion.div
          variants={revealVariants} initial="hidden" animate={ctaIn ? "visible" : "hidden"} custom={0}
        >
          <h2 className="text-2xl sm:text-3xl font-semibold text-white mb-3">Vous avez un besoin spécifique ?</h2>
          <p className="text-white/45 text-sm mb-10">Contactez-moi, je m&apos;adapte à toutes les situations.</p>
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
                Formulaire de contact
              </Link>
            </motion.div>
          </div>
        </motion.div>
      </section>
    </>
  );
}
