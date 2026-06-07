"use client";

import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";

const services = [
  {
    icon: (
      <svg className="h-6 w-6" viewBox="0 0 24 24" fill="none">
        <path d="M22 16.5H2M2 16.5L5 9H19L22 16.5M2 16.5V19C2 19.6 2.4 20 3 20H5C5.6 20 6 19.6 6 19V18H18V19C18 19.6 18.4 20 19 20H21C21.6 20 22 19.6 22 19V16.5" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M8.5 9L7 5H17L15.5 9" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"/>
        <circle cx="7" cy="16.5" r="1" fill="currentColor"/>
        <circle cx="17" cy="16.5" r="1" fill="currentColor"/>
        <path d="M12 3V6M10 3H14" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round"/>
      </svg>
    ),
    title: "Transferts Gare & Aéroport",
    desc: "Lyon Saint-Exupéry, Part-Dieu, Perrache, Genève… Prise en charge à domicile, ponctualité garantie. Suivi des vols en temps réel.",
    tags: ["Lyon-St-Exupéry", "Gare Part-Dieu", "Genève"],
    color: "from-blue-500/10 to-transparent",
    accent: "text-blue-400",
  },
  {
    icon: (
      <svg className="h-6 w-6" viewBox="0 0 24 24" fill="none">
        <path d="M20 7H4C2.9 7 2 7.9 2 9V19C2 20.1 2.9 21 4 21H20C21.1 21 22 20.1 22 19V9C22 7.9 21.1 7 20 7Z" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M16 7V5C16 3.9 15.1 3 14 3H10C8.9 3 8 3.9 8 5V7" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M12 12V16M10 14H14" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round"/>
      </svg>
    ),
    title: "Colis & Courriers Urgents",
    desc: "Transport de colis et lettres urgentes dans toute la région. Livraison rapide, traçabilité et sécurité du chargement assurées.",
    tags: ["Same-day", "Sécurisé", "Toute la France"],
    color: "from-lime/10 to-transparent",
    accent: "text-lime",
  },
  {
    icon: (
      <svg className="h-6 w-6" viewBox="0 0 24 24" fill="none">
        <path d="M3 17H21M3 17V12L7 6H17L21 12V17M3 17V20M21 17V20" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M21 12H23C23.6 12 24 12.4 24 13V15" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"/>
        <rect x="22" y="14" width="5" height="3" rx="0.5" stroke="currentColor" strokeWidth="1.4"/>
        <circle cx="6" cy="20" r="1.5" stroke="currentColor" strokeWidth="1.4"/>
        <circle cx="18" cy="20" r="1.5" stroke="currentColor" strokeWidth="1.4"/>
      </svg>
    ),
    title: "Remorque à Disposition",
    desc: "Équipement spécial attache remorque. Idéal pour déménagements partiels, transport de matériel, véhicules en panne.",
    tags: ["Attache remorque", "Matériel lourd", "Déménagement"],
    color: "from-orange-500/10 to-transparent",
    accent: "text-orange-400",
  },
  {
    icon: (
      <svg className="h-6 w-6" viewBox="0 0 24 24" fill="none">
        <path d="M12 2C8.1 2 5 5.1 5 9C5 14.2 12 22 12 22C12 22 19 14.2 19 9C19 5.1 15.9 2 12 2Z" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"/>
        <circle cx="12" cy="9" r="3" stroke="currentColor" strokeWidth="1.6"/>
      </svg>
    ),
    title: "Déplacements France Entière",
    desc: "Lyon, Paris, Marseille, Toulouse… Je vous conduis partout en France. Longues distances sur devis, confort et sécurité garantis.",
    tags: ["Paris", "Marseille", "Longue distance"],
    color: "from-purple-500/10 to-transparent",
    accent: "text-purple-400",
  },
];

export default function Services() {
  return (
    <section id="services" className="mt-36 px-4 sm:px-6 max-w-[1240px] mx-auto">
      <div className="flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] }}
        >
          <p className="text-xs uppercase tracking-widest text-mutedc mb-2">Ce que je propose</p>
          <h2 className="font-display text-3xl font-bold text-balance sm:text-4xl">
            Des services adaptés<br />à chaque besoin
          </h2>
        </motion.div>
        <motion.p
          className="max-w-sm text-sm leading-relaxed text-mutedc"
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6, delay: 0.1, ease: [0.25, 0.46, 0.45, 0.94] }}
        >
          Taxi conventionné avec équipements professionnels. Particuliers et entreprises.
        </motion.p>
      </div>

      <div className="mt-10 grid grid-cols-1 gap-5 sm:grid-cols-2">
        {services.map((s, i) => (
          <motion.article
            key={s.title}
            className="group relative overflow-hidden rounded-3xl border border-borderc bg-surface p-6 transition-all duration-300 hover:-translate-y-2 hover:border-borderc/80 hover:shadow-[0_24px_50px_-20px_rgba(0,0,0,0.7)]"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.6, delay: i * 0.08, ease: [0.25, 0.46, 0.45, 0.94] }}
          >
            {/* Ambient gradient */}
            <div className={`absolute inset-0 bg-gradient-to-br ${s.color} opacity-0 transition-opacity duration-300 group-hover:opacity-100 pointer-events-none`} />

            <div className="relative">
              <div className={`inline-flex h-12 w-12 items-center justify-center rounded-2xl border border-borderc bg-surface2 ${s.accent} mb-5`}>
                {s.icon}
              </div>

              <h3 className="font-display text-xl font-bold">{s.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-mutedc">{s.desc}</p>

              <div className="mt-4 flex flex-wrap gap-2">
                {s.tags.map((tag) => (
                  <span key={tag} className="rounded-full border border-borderc bg-surface2 px-3 py-1 text-xs text-mutedc">
                    {tag}
                  </span>
                ))}
              </div>

              <a
                href="#contact"
                className="mt-5 inline-flex items-center gap-1.5 text-sm font-medium text-lime opacity-0 transition-all duration-300 group-hover:opacity-100"
              >
                Demander un devis <ArrowUpRight className="h-3.5 w-3.5" />
              </a>
            </div>
          </motion.article>
        ))}
      </div>
    </section>
  );
}
