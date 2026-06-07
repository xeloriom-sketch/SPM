"use client";

import { motion } from "framer-motion";
import { CheckCircle2, Plane, Train, Building2 } from "lucide-react";

const zones = [
  { region: "Ain (01)", cities: ["Tignieu-Jameyzieu", "Ambérieu-en-Bugey", "Bourg-en-Bresse", "Belley", "Oyonnax"] },
  { region: "Isère (38)", cities: ["Grenoble", "Bourgoin-Jallieu", "Vienne", "Pont-de-Chéruy"] },
  { region: "Rhône (69)", cities: ["Lyon", "Villeurbanne", "Vaulx-en-Velin", "Bron", "Décines"] },
  { region: "France entière", cities: ["Paris", "Marseille", "Bordeaux", "Toulouse", "Genève (CH)"] },
];

const airports = [
  { icon: Plane, name: "Lyon Saint-Exupéry (LYS)", dist: "~35 min" },
  { icon: Plane, name: "Genève-Cointrin (GVA)", dist: "~1h30" },
  { icon: Train, name: "Gare Part-Dieu", dist: "~40 min" },
  { icon: Train, name: "Gare Perrache", dist: "~45 min" },
  { icon: Train, name: "Gare Ambérieu", dist: "~15 min" },
  { icon: Building2, name: "Centres hospitaliers", dist: "Toute zone" },
];

export default function Coverage() {
  return (
    <section id="zone" className="mt-24 px-4 sm:px-6 max-w-[1240px] mx-auto">
      <div className="grid grid-cols-1 gap-10 lg:grid-cols-2 lg:items-start">
        {/* Left */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] }}
        >
          <p className="text-xs uppercase tracking-widest text-mutedc mb-2">Zone de couverture</p>
          <h2 className="font-display text-3xl font-bold text-balance sm:text-4xl">
            Je me déplace partout<br />en France
          </h2>
          <p className="mt-4 text-sm leading-relaxed text-mutedc max-w-md">
            Basé à Tignieu-Jameyzieu, j'interviens principalement sur le département de l'Ain,
            Lyon et l'Isère. Pour les longues distances, je me déplace dans toute la France
            sur devis. Tarifs transparents, pas de mauvaise surprise.
          </p>

          {/* Zone grid */}
          <div className="mt-8 grid grid-cols-1 gap-4 sm:grid-cols-2">
            {zones.map((z, i) => (
              <motion.div
                key={z.region}
                className="rounded-2xl border border-borderc bg-surface p-4"
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.07 }}
              >
                <p className="text-xs font-semibold uppercase tracking-wide text-lime mb-2">{z.region}</p>
                <ul className="flex flex-col gap-1.5">
                  {z.cities.map((city) => (
                    <li key={city} className="flex items-center gap-2 text-sm text-mutedc">
                      <CheckCircle2 className="h-3.5 w-3.5 shrink-0 text-lime/60" />
                      {city}
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Right */}
        <motion.div
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6, delay: 0.15, ease: [0.25, 0.46, 0.45, 0.94] }}
        >
          {/* Airports & stations */}
          <div className="rounded-3xl border border-borderc bg-surface p-6">
            <p className="text-xs uppercase tracking-widest text-mutedc mb-4">
              Aéroports & gares desservis
            </p>
            <div className="flex flex-col gap-3">
              {airports.map(({ icon: Icon, name, dist }, i) => (
                <motion.div
                  key={name}
                  className="flex items-center justify-between rounded-xl border border-borderc/60 bg-surface2 px-4 py-3 transition-colors hover:border-lime/20 hover:bg-surface2"
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.35, delay: 0.2 + i * 0.06 }}
                >
                  <div className="flex items-center gap-3">
                    <div className="grid h-8 w-8 place-items-center rounded-full bg-lime/10 text-lime">
                      <Icon className="h-3.5 w-3.5" />
                    </div>
                    <span className="text-sm font-medium">{name}</span>
                  </div>
                  <span className="rounded-full bg-surface px-2.5 py-1 text-xs text-mutedc">
                    {dist}
                  </span>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Google Maps */}
          <motion.div
            className="mt-5 overflow-hidden rounded-3xl border border-borderc"
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.35 }}
          >
            <iframe
              title="Localisation Taxi Tignieu-Jameyzieu"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d11157.6!2d5.15!3d45.7!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47f4b0b0b0b0b0b0%3A0x0!2sTignieu-Jameyzieu!5e0!3m2!1sfr!2sfr!4v1700000000000"
              width="100%"
              height="220"
              style={{ border: 0, display: "block", filter: "invert(90%) hue-rotate(180deg)" }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
            <div className="p-4 bg-surface">
              <p className="text-sm font-medium">Tignieu-Jameyzieu (01150)</p>
              <p className="text-xs text-mutedc mt-0.5">Ain · Auvergne-Rhône-Alpes</p>
            </div>
          </motion.div>

          {/* Highlight card */}
          <motion.div
            className="mt-5 rounded-3xl border border-lime/20 bg-lime/5 p-6"
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.45 }}
          >
            <div className="flex items-start gap-4">
              <div className="grid h-12 w-12 shrink-0 place-items-center rounded-2xl bg-lime/15 text-lime">
                <svg className="h-6 w-6" viewBox="0 0 24 24" fill="none">
                  <path d="M12 2L14.9 8.2L21.7 8.8L16.6 13.3L18.1 20L12 16.5L5.9 20L7.4 13.3L2.3 8.8L9.1 8.2L12 2Z" stroke="currentColor" strokeWidth="1.6" strokeLinejoin="round"/>
                </svg>
              </div>
              <div>
                <p className="font-display text-lg font-bold text-lime">Devis gratuit & sans engagement</p>
                <p className="mt-1 text-sm text-mutedc leading-relaxed">
                  Vous avez un besoin spécifique ? Contactez-moi pour un devis personnalisé.
                  Réponse garantie sous 2h.
                </p>
                <a
                  href="#contact"
                  className="mt-3 inline-flex items-center gap-2 rounded-full bg-lime px-4 py-2 text-sm font-semibold text-black transition-all hover:-translate-y-0.5 hover:brightness-105"
                >
                  Demander un devis
                </a>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
