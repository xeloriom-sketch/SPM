"use client";

import { useRef } from "react";
import { motion, useInView, useScroll, useTransform, useSpring } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import { Phone, Plane, Heart, Package, Map, Truck, ArrowRight } from "lucide-react";
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

  // Scroll-driven parallax on the hero car image
  const { scrollY } = useScroll();
  const rawCarY  = useTransform(scrollY, [0, 600], [0, -80]);
  const carY     = useSpring(rawCarY, { stiffness: 70, damping: 20 });
  const rawTextY = useTransform(scrollY, [0, 400], [0, -30]);
  const textY    = useSpring(rawTextY, { stiffness: 70, damping: 20 });

  return (
    <>
      {/* ── HERO ── */}
      <section ref={heroRef} className="relative w-full bg-black overflow-hidden" style={{ minHeight: "56vh" }}>
        {/* Photo plein écran avec parallax */}
        <motion.div className="absolute inset-0" style={{ y: carY }}>
          <Image
            src={sitePath("/image/volkswagen-tiguan-r-line-2020-5k-8k-9500x6333-1639.jpeg")}
            alt="Volkswagen Tiguan R-Line — SPM Taxi Services"
            fill
            className="object-cover object-center"
            priority
          />
        </motion.div>
        <div className="absolute inset-0 bg-gradient-to-r from-black/90 via-black/60 to-black/20" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-black/30" />

        {/* Content */}
        <motion.div
          className="relative z-10 flex flex-col justify-end px-4 sm:px-10 lg:px-20 pb-14 md:pb-20 pt-32"
          style={{ y: textY }}
        >
          <div className="max-w-2xl">
            <motion.span
              initial={{ opacity: 0, y: 14 }} animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.5 }}
              className="text-[10px] font-bold tracking-[0.3em] uppercase text-white/35 mb-4 block"
            >
              Nos services
            </motion.span>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-semibold tracking-tight text-white leading-tight mb-5">
              <SplitText text="Tout ce dont vous" mode="word" />
              <br />
              <span className="text-white/30">
                <SplitText text="avez besoin" mode="word" delay={0.14} />
              </span>
            </h1>
            <motion.p
              initial={{ opacity: 0, y: 18 }} animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.52, duration: 0.55, ease: [0.16, 1, 0.3, 1] }}
              className="text-sm sm:text-base text-white/55 leading-relaxed mb-8 max-w-lg"
            >
              5 services distincts, un seul engagement : ponctualité, confort et tarif fixe garanti.
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 18 }} animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.68, type: "spring", stiffness: 340, damping: 24 }}
              className="flex flex-wrap gap-3"
            >
              <motion.a
                href="tel:+33767751898"
                className="inline-flex items-center gap-2 rounded-full bg-white text-black px-6 py-2.5 text-sm font-semibold"
                whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }} transition={spring}
              >
                <Phone className="h-4 w-4" /> 07 67 75 18 98
              </motion.a>
              <motion.div whileHover={{ scale: 1.04 }} whileTap={{ scale: 0.95 }} transition={spring}>
                <Link href="/tarifs" className="inline-flex items-center gap-2 rounded-full border border-white/25 text-white px-6 py-2.5 text-sm font-semibold hover:border-white/55 transition-colors">
                  Voir les tarifs <ArrowRight className="h-3.5 w-3.5" />
                </Link>
              </motion.div>
            </motion.div>
          </div>
        </motion.div>
      </section>

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
