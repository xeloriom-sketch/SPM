"use client";

import { motion } from "framer-motion";
import { Star } from "lucide-react";

const testimonials = [
  {
    name: "Marie-Claire D.",
    city: "Lyon 6e",
    service: "Transfert aéroport",
    text: "Ponctuel, professionnel et très agréable. Je prends régulièrement ce taxi pour mes vols depuis Lyon Saint-Exupéry. Je ne changerais pour rien au monde. Le Tiguan est spacieux et confortable.",
    rating: 5,
  },
  {
    name: "Éric B.",
    city: "Bourg-en-Bresse",
    service: "Transport médical",
    text: "Taxi conventionné pour mes soins réguliers. Toujours à l'heure, patient et attentionné. Le véhicule est impeccable. Je recommande vivement à toute personne ayant besoin de transports médicaux.",
    rating: 5,
  },
  {
    name: "Sophie & Julien",
    city: "Grenoble",
    service: "Longue distance",
    text: "Trajet Lyon - Paris pour un voyage d'affaires. Prix transparent, pas de surprise. La voiture est grande, on a pu travailler confortablement pendant le trajet. Très professionnel.",
    rating: 5,
  },
  {
    name: "Thomas R.",
    city: "Tignieu-Jameyzieu",
    service: "Colis urgent",
    text: "J'avais besoin d'envoyer un colis urgent à Lyon. Service rapide, efficace et le colis est arrivé en parfait état. Je ferai de nouveau appel à ce service sans hésiter.",
    rating: 5,
  },
  {
    name: "Nathalie P.",
    city: "Ambérieu-en-Bugey",
    service: "Transfert gare",
    text: "Super service pour mes trajets gare Part-Dieu. Réservation simple, le chauffeur suit mes trains et s'adapte aux retards. C'est appréciable quand on voyage souvent pour le travail.",
    rating: 5,
  },
  {
    name: "Marc-Antoine L.",
    city: "Bourgoin-Jallieu",
    service: "Transport avec remorque",
    text: "J'avais besoin de transporter du matériel encombrant. La remorque disponible était parfaite pour ma situation. Service unique dans la région, je n'ai pas trouvé mieux.",
    rating: 5,
  },
];

function Stars({ count }: { count: number }) {
  return (
    <span className="inline-flex gap-0.5 text-lime">
      {Array.from({ length: count }).map((_, i) => (
        <Star key={i} className="h-3 w-3 fill-current" />
      ))}
    </span>
  );
}

export default function Testimonials() {
  return (
    <section className="mt-24 px-4 sm:px-6 max-w-[1240px] mx-auto">
      <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6 }}
        >
          <p className="text-xs uppercase tracking-widest text-mutedc mb-2">Avis clients</p>
          <h2 className="font-display text-3xl font-bold text-balance sm:text-4xl">
            Ce que disent<br />mes clients
          </h2>
        </motion.div>
        <motion.div
          className="flex items-center gap-2 rounded-full border border-borderc bg-surface px-4 py-2"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <Stars count={5} />
          <span className="text-sm font-semibold">5.0</span>
          <span className="text-sm text-mutedc">/ 5 — Google Reviews</span>
        </motion.div>
      </div>

      <div className="mt-8 columns-1 gap-5 sm:columns-2 lg:columns-3 [&>*]:mb-5">
        {testimonials.map((t, i) => (
          <motion.div
            key={t.name}
            className="break-inside-avoid rounded-2xl border border-borderc bg-surface p-5 transition-all duration-300 hover:-translate-y-1 hover:border-borderc/80"
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.5, delay: (i % 3) * 0.08 }}
          >
            <div className="flex items-start justify-between gap-2 mb-3">
              <div className="flex items-center gap-3">
                <div className="grid h-10 w-10 shrink-0 place-items-center rounded-full bg-lime text-sm font-bold text-black">
                  {t.name.charAt(0)}
                </div>
                <div>
                  <p className="text-sm font-semibold">{t.name}</p>
                  <p className="text-xs text-mutedc">{t.city}</p>
                </div>
              </div>
              <Stars count={t.rating} />
            </div>
            <span className="inline-block rounded-full border border-borderc/60 bg-surface2 px-2.5 py-0.5 text-[11px] text-mutedc mb-3">
              {t.service}
            </span>
            <p className="text-sm leading-relaxed text-mutedc">{t.text}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
