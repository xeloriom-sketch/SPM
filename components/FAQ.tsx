"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown, Mail } from "lucide-react";

const faqs = [
  {
    q: "Qu'est-ce qu'un taxi conventionné ?",
    a: "Un taxi conventionné est un taxi agréé par la Sécurité Sociale et la CPAM pour transporter des patients vers leurs soins médicaux. Les trajets peuvent être pris en charge partiellement ou totalement par l'Assurance Maladie sur prescription médicale. Je dispose de l'agrément officiel pour ces transports.",
  },
  {
    q: "Comment obtenir un devis pour mon trajet ?",
    a: "Remplissez simplement le formulaire de contact sur cette page en précisant votre point de départ, votre destination, la date et le type de service souhaité. Je vous réponds généralement sous 2h avec une estimation de prix. Les devis sont gratuits et sans engagement.",
  },
  {
    q: "Quelles zones géographiques couvrez-vous ?",
    a: "Je suis basé à Tignieu-Jameyzieu et j'interviens principalement dans l'Ain, à Lyon et en Isère. Je dessers tous les aéroports et gares de la région (Lyon Saint-Exupéry, Part-Dieu, Perrache, Genève). Pour les longues distances, je me déplace dans toute la France sur devis.",
  },
  {
    q: "Puis-je transporter des animaux de compagnie ?",
    a: "Oui, les animaux de compagnie sont acceptés dans le véhicule, sous réserve qu'ils soient placés dans une caisse de transport adaptée ou attachés avec un harnais de sécurité. Merci de me le signaler au moment de la réservation pour que je puisse préparer l'espace en conséquence.",
  },
  {
    q: "Puis-je réserver à l'avance ?",
    a: "Absolument ! Je vous encourage même à réserver à l'avance pour les transferts aéroport, les rendez-vous médicaux et les trajets longue distance. Vous pouvez réserver par téléphone ou via le formulaire de contact. Les réservations de dernière minute sont également acceptées selon disponibilité.",
  },
  {
    q: "Acceptez-vous les cartes bancaires ?",
    a: "Oui, j'accepte les règlements en espèces, par carte bancaire (CB, Visa, Mastercard) et par chèque. Pour les transports médicaux conventionnés, la prise en charge par la CPAM est gérée directement avec les caisses concernées.",
  },
];

export default function FAQ() {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <section id="faq" className="mt-24 px-4 sm:px-6 max-w-[1240px] mx-auto">
      <div className="grid grid-cols-1 gap-10 lg:grid-cols-[0.85fr_1.15fr]">
        {/* Left */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6 }}
        >
          <p className="text-xs uppercase tracking-widest text-mutedc mb-2">FAQ</p>
          <h2 className="font-display text-3xl font-bold text-balance sm:text-4xl">
            Questions fréquentes
          </h2>
          <p className="mt-4 text-sm leading-relaxed text-mutedc max-w-xs">
            Vous avez une question ? Consultez notre FAQ ou contactez-moi directement.
          </p>

          <div className="mt-8 rounded-2xl border border-borderc bg-surface p-5">
            <div className="flex items-center gap-3 mb-4">
              <div className="grid h-9 w-9 place-items-center rounded-full bg-lime/10 text-lime">
                <Mail className="h-4 w-4" />
              </div>
              <p className="text-sm font-semibold">Une autre question ?</p>
            </div>
            <p className="text-sm text-mutedc mb-4">Écrivez-moi directement, je vous réponds sous 2h.</p>
            <a
              href="#contact"
              className="flex w-full items-center justify-center gap-2 rounded-full bg-lime px-4 py-2.5 text-sm font-semibold text-black transition-all hover:-translate-y-0.5 hover:brightness-105"
            >
              Envoyer un message
            </a>
          </div>
        </motion.div>

        {/* Right: accordion */}
        <div className="flex flex-col gap-3">
          {faqs.map((f, i) => (
            <motion.div
              key={i}
              className={`rounded-2xl border transition-all duration-200 ${
                open === i
                  ? "border-borderc/80 bg-surface"
                  : "border-borderc/50 bg-surface/60 hover:border-borderc/70"
              }`}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.4, delay: i * 0.06 }}
            >
              <button
                className="flex w-full items-center justify-between gap-4 px-5 py-4 text-left"
                onClick={() => setOpen(open === i ? null : i)}
                aria-expanded={open === i}
              >
                <span className="text-sm font-medium pr-2">{f.q}</span>
                <ChevronDown
                  className={`h-5 w-5 shrink-0 text-mutedc transition-all duration-300 ${
                    open === i ? "rotate-180 text-lime" : ""
                  }`}
                />
              </button>

              <AnimatePresence initial={false}>
                {open === i && (
                  <motion.div
                    key="content"
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3, ease: [0.25, 0.46, 0.45, 0.94] }}
                    style={{ overflow: "hidden" }}
                  >
                    <p className="px-5 pb-5 text-sm leading-relaxed text-mutedc">{f.a}</p>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
