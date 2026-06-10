"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { FileText, CreditCard, Heart, Baby, Briefcase, AlertCircle, CheckCircle, ArrowRight } from "lucide-react";
import SplitText from "@/components/ui/SplitText";
import { revealVariants, revealSubtle, spring } from "@/lib/motion";

const eligibles = [
  { icon: Heart,     label: "Affection longue durée (ALD)", desc: "Diabète, cancer, insuffisance rénale, pathologies cardiovasculaires…" },
  { icon: Baby,      label: "Maternité",                    desc: "Grossesse à partir du 5e mois, suivi prénatal, accouchement." },
  { icon: AlertCircle, label: "Accident du travail",        desc: "Soins liés à un AT ou maladie professionnelle reconnue." },
  { icon: Briefcase, label: "Hospitalisation",              desc: "Entrée, sortie ou transfert entre établissements de soins." },
];

const steps = [
  { num: "01", title: "Prescription médicale",  desc: "Votre médecin établit un bon de transport (formulaire Cerfa S3138). Sans ce document, la prise en charge n'est pas possible." },
  { num: "02", title: "Appelez SPM Taxi",       desc: "Communiquez vos dates, horaires et destination. Je prends en charge la totalité du trajet — aucune avance de frais n'est demandée." },
  { num: "03", title: "Le jour du trajet",       desc: "Présentez votre bon de transport et votre carte Vitale à bord. Je transmets directement le dossier à la CPAM." },
  { num: "04", title: "Remboursement CPAM",      desc: "Prise en charge à 65 % (ou 100 % si ALD, maternité, AT). Le complément peut être couvert par votre mutuelle." },
];

const hopitaux = [
  "CHU Lyon Sud · Saint-Genis-Laval",
  "Hôpital Édouard Herriot · Lyon 3e",
  "Hôpital de la Croix-Rousse · Lyon 4e",
  "Hôpital Femme Mère Enfant · Bron",
  "Clinique Convert · Bourg-en-Bresse",
  "Centre Hospitalier d'Ambérieu",
  "CH Fleyriat · Bourg-en-Bresse",
  "Clinique Mutualiste de Grenoble",
];

export default function CPAMGuide() {
  const ref     = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-60px" });

  return (
    <section ref={ref} className="w-full bg-white py-20 md:py-32 font-sans">
      <div className="max-w-[1440px] mx-auto px-6 sm:px-12 lg:px-20">

        {/* Header */}
        <div className="mb-16 md:mb-20 grid grid-cols-1 md:grid-cols-2 gap-8 items-end">
          <div>
            <motion.span
              className="text-[10px] font-bold tracking-[0.3em] uppercase text-black/30 mb-4 block"
              variants={revealSubtle} initial="hidden" animate={isInView ? "visible" : "hidden"} custom={0}
            >
              Transport médical agréé
            </motion.span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-medium tracking-tight text-black leading-tight">
              <SplitText text="Taxi conventionné" mode="word" />
              <br />
              <span className="text-black/30">
                <SplitText text="CPAM — comment ça marche" mode="word" delay={0.1} />
              </span>
            </h2>
          </div>
          <motion.p
            className="text-sm text-black/45 leading-relaxed max-w-md"
            variants={revealSubtle} initial="hidden" animate={isInView ? "visible" : "hidden"} custom={0.2}
          >
            SPM est agréé par l&apos;Assurance Maladie. Vos trajets médicaux sur prescription
            sont pris en charge directement — <strong className="text-black">zéro avance de frais</strong>.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-6">

          {/* Procédure étapes */}
          <div className="lg:col-span-3 space-y-3">
            <motion.p
              className="text-[10px] font-bold tracking-[0.25em] uppercase text-black/30 mb-5"
              variants={revealSubtle} initial="hidden" animate={isInView ? "visible" : "hidden"} custom={0.1}
            >
              Procédure étape par étape
            </motion.p>
            {steps.map((s, i) => (
              <motion.div
                key={s.num}
                className="flex gap-5 bg-[#f8f9fa] rounded-2xl px-6 py-5 border border-black/[0.05]"
                variants={revealVariants} initial="hidden" animate={isInView ? "visible" : "hidden"} custom={0.12 + i * 0.1}
                whileHover={{ x: 4 }} transition={spring}
              >
                <span className="text-2xl font-black text-black/[0.07] tracking-tight shrink-0 leading-none mt-0.5">{s.num}</span>
                <div>
                  <p className="text-sm font-semibold text-black mb-1">{s.title}</p>
                  <p className="text-xs text-black/50 leading-relaxed">{s.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Colonne droite */}
          <div className="lg:col-span-2 flex flex-col gap-4">

            {/* Qui peut en bénéficier */}
            <motion.div
              className="bg-black rounded-2xl p-6"
              variants={revealVariants} initial="hidden" animate={isInView ? "visible" : "hidden"} custom={0.15}
            >
              <p className="text-[10px] font-bold tracking-[0.25em] uppercase text-white/30 mb-4">Qui peut en bénéficier</p>
              <div className="space-y-3">
                {eligibles.map((e, i) => (
                  <motion.div
                    key={e.label}
                    className="flex items-start gap-3"
                    initial={{ opacity: 0, x: -10 }}
                    animate={isInView ? { opacity: 1, x: 0 } : {}}
                    transition={{ delay: 0.2 + i * 0.07, type: "spring", stiffness: 360, damping: 24 }}
                  >
                    <e.icon className="h-3.5 w-3.5 text-white/40 shrink-0 mt-0.5" strokeWidth={1.8} />
                    <div>
                      <p className="text-xs font-semibold text-white/90">{e.label}</p>
                      <p className="text-[10px] text-white/35 leading-relaxed">{e.desc}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            {/* Documents */}
            <motion.div
              className="bg-[#f8f9fa] rounded-2xl p-6 border border-black/[0.05]"
              variants={revealVariants} initial="hidden" animate={isInView ? "visible" : "hidden"} custom={0.25}
            >
              <p className="text-[10px] font-bold tracking-[0.25em] uppercase text-black/30 mb-4">Documents à fournir</p>
              <div className="space-y-2.5">
                {[
                  ["Bon de transport", "Formulaire Cerfa S3138, signé par le médecin"],
                  ["Carte Vitale",     "Ou attestation d'assurance maladie à jour"],
                  ["Ordonnance",       "Si transport pour consultation ou traitement"],
                ].map(([doc, detail]) => (
                  <div key={doc} className="flex items-start gap-3">
                    <CheckCircle className="h-3.5 w-3.5 text-black shrink-0 mt-0.5" strokeWidth={2} />
                    <div>
                      <p className="text-xs font-semibold text-black">{doc}</p>
                      <p className="text-[10px] text-black/45 leading-relaxed">{detail}</p>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>

            {/* Taux */}
            <motion.div
              className="grid grid-cols-2 gap-3"
              variants={revealVariants} initial="hidden" animate={isInView ? "visible" : "hidden"} custom={0.35}
            >
              <div className="bg-[#f8f9fa] rounded-2xl p-5 border border-black/[0.05] text-center">
                <p className="text-3xl font-black text-black mb-1">65%</p>
                <p className="text-[10px] font-semibold tracking-wider uppercase text-black/35">Remboursement standard</p>
              </div>
              <div className="bg-black rounded-2xl p-5 text-center">
                <p className="text-3xl font-black text-white mb-1">100%</p>
                <p className="text-[10px] font-semibold tracking-wider uppercase text-white/35">ALD · Maternité · AT</p>
              </div>
            </motion.div>
          </div>
        </div>

        {/* Hôpitaux */}
        <motion.div
          className="mt-8 bg-[#f8f9fa] rounded-2xl p-7 border border-black/[0.05]"
          variants={revealVariants} initial="hidden" animate={isInView ? "visible" : "hidden"} custom={0.45}
        >
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 mb-5">
            <p className="text-[10px] font-bold tracking-[0.25em] uppercase text-black/30">
              Établissements régulièrement desservis
            </p>
            <motion.a
              href="tel:+33767751898"
              title="Réserver un transport médical — SPM Taxi conventionné CPAM"
              className="group inline-flex items-center gap-3 rounded-full bg-black pl-4 pr-1.5 py-1.5 text-[11px] font-medium tracking-wide text-white self-start sm:self-auto"
              whileHover={{ scale: 1.04 }} whileTap={{ scale: 0.96 }} transition={spring}
            >
              <span>Réserver un transport médical</span>
              <div className="flex h-7 w-7 items-center justify-center rounded-full bg-white text-black group-hover:translate-x-0.5 transition-transform">
                <ArrowRight className="h-3.5 w-3.5 stroke-[2.5]" />
              </div>
            </motion.a>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-2">
            {hopitaux.map((h, i) => (
              <motion.div
                key={h}
                className="flex items-center gap-2 text-xs text-black/60"
                initial={{ opacity: 0, y: 8 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: 0.48 + i * 0.04, type: "spring", stiffness: 360, damping: 24 }}
              >
                <div className="h-1 w-1 rounded-full bg-black/30 shrink-0" />
                {h}
              </motion.div>
            ))}
          </div>
          <p className="mt-4 text-[10px] text-black/30">
            + tous les établissements de santé sur prescription médicale — consultations, dialyse, chimiothérapie, rééducation.
          </p>
        </motion.div>

      </div>
    </section>
  );
}
