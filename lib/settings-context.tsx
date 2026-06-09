"use client";

import { createContext, useContext, useEffect, useState } from "react";
import { getSupabase } from "@/lib/supabase-browser";

export type Settings = Record<string, string>;

export const defaults: Settings = {
  // ── Contact ──────────────────────────────────────────────────────────
  contact_phone:   "07 67 75 18 98",
  contact_email:   "contact@spm-taxi.fr",
  contact_address: "951 route des hauts fourneaux, 01150 Villebois",

  // ── Hero homepage ─────────────────────────────────────────────────────
  hero_line1:   "Nous allons",
  hero_line2:   "où vous voulez.",
  hero_subtitle: "SPM · Villebois · Lyon · Ain · Isère",

  // ── Homepage services section ─────────────────────────────────────────
  services_title_line1: "SPM — Taxi",
  services_title_line2: "Conventionné",
  services_intro: "Volkswagen Tiguan 7 places, conventionné CPAM. Disponible 7j/7 pour vos transferts aéroport, transports médicaux, colis urgents et déplacements longue distance dans toute la France.",
  service1_title: "Transferts Gare & Aéroport",
  service1_desc:  "Lyon Saint-Exupéry, Part-Dieu, Perrache, Genève. Prise en charge à domicile, suivi des vols en temps réel.",
  service2_title: "Colis & Courriers Urgents",
  service2_desc:  "Livraison rapide et sécurisée de colis et lettres urgentes. Traçabilité garantie partout en France.",
  service3_title: "Remorque à Disposition",
  service3_desc:  "Attache-remorque homologuée. Transport de matériel lourd, véhicules en panne, déménagements.",
  service4_title: "Déplacements France Entière",
  service4_desc:  "De Lyon à Paris, Marseille, Bordeaux, Genève. Longue distance sur devis, confort absolu.",

  // ── Vehicle section ───────────────────────────────────────────────────
  vehicle_intro:    "Montez à bord du Volkswagen Tiguan Allspace 7 places. Confort premium, attache-remorque homologuée, Wi-Fi à bord — chaque trajet est une expérience extraordinaire.",
  vehicle_feature1: "Climatisation bi-zone automatique",
  vehicle_feature2: "Wi-Fi haute vitesse à bord",
  vehicle_feature3: "Attache-remorque homologuée",
  vehicle_feature4: "Chargement USB & sans fil",
  vehicle_feature5: "Assurance professionnelle taxi",
  vehicle_feature6: "Grand espace bagage coffre",

  // ── Testimonials ──────────────────────────────────────────────────────
  testimonial1_name:  "F.I TAXI",
  testimonial1_date:  "il y a 6 mois",
  testimonial1_stars: "5",
  testimonial1_text:  "Excellent collaborateur. Toujours ponctuel, sérieux et respectueux des clients. Travail de qualité, je recommande sans hésiter.",
  testimonial2_name:  "sabrina selini",
  testimonial2_date:  "il y a 10 mois",
  testimonial2_stars: "5",
  testimonial2_text:  "Sérieux, ponctuel, disponible. Trajet très agréable. Conventionné pour tous les trajets médicaux. Je recommande vivement.",
  testimonial3_name:  "Kãte Dbno",
  testimonial3_date:  "il y a 6 mois",
  testimonial3_stars: "4",
  testimonial3_text:  "Taxi très sérieux, trajet agréable même pour un enfant 😊 Chauffeur à l'écoute.. je recommande.",
  testimonial4_name:  "Chloé Burguiere",
  testimonial4_date:  "il y a 9 mois",
  testimonial4_stars: "5",
  testimonial4_text:  "Taxi très accueillant, accepte les personnes en situation de handicap. Je recommande.",
  testimonial5_name:  "SOSO 01",
  testimonial5_date:  "il y a 11 mois",
  testimonial5_stars: "5",
  testimonial5_text:  "Taxi très sérieux et ponctuel, à l'écoute de ses clients. Vous pouvez y aller les yeux fermés.",
  testimonial6_name:  "Khalid El ouazzani",
  testimonial6_date:  "il y a 11 mois",
  testimonial6_stars: "5",
  testimonial6_text:  "Société professionnelle, chauffeur ponctuel. Trajet agréable. Je recommande vivement.",
  testimonial7_name:  "Ibrahim za",
  testimonial7_date:  "il y a 11 mois",
  testimonial7_stars: "5",
  testimonial7_text:  "Taxi sérieux, gentil, à l'heure. Je recommande 👍🏾",
  testimonial8_name:  "ALHAMBRA WEB",
  testimonial8_date:  "il y a 3 jours",
  testimonial8_stars: "5",
  testimonial8_text:  "Personne très agréable.",
  testimonial9_name:  "z",
  testimonial9_date:  "il y a 8 mois",
  testimonial9_stars: "5",
  testimonial9_text:  "Très réactif.",

  // ── FAQ ───────────────────────────────────────────────────────────────
  faq1_q: "Qu'est-ce qu'un taxi conventionné ?",
  faq1_a: "Un taxi conventionné est agréé par la CPAM pour les transports médicaux. Les trajets peuvent être pris en charge partiellement ou totalement par l'Assurance Maladie sur prescription médicale.",
  faq2_q: "Comment obtenir un devis ?",
  faq2_a: "Remplissez le formulaire de contact ou appelez directement. Je réponds sous 2h avec une estimation de prix. Devis gratuits et sans engagement.",
  faq3_q: "Quelles zones couvrez-vous ?",
  faq3_a: "Je suis basé à Villebois et j'interviens dans l'Ain, à Lyon et en Isère. Pour les longues distances, je me déplace partout en France sur devis.",
  faq4_q: "Puis-je transporter des animaux ?",
  faq4_a: "Oui, dans une caisse de transport adaptée ou avec un harnais de sécurité. Merci de le signaler à la réservation.",
  faq5_q: "Puis-je réserver à l'avance ?",
  faq5_a: "Absolument — je vous encourage même à réserver tôt pour les aéroports et rendez-vous médicaux. Les réservations de dernière minute sont aussi acceptées selon disponibilité.",
  faq6_q: "Quels modes de paiement acceptez-vous ?",
  faq6_a: "Espèces, carte bancaire (CB, Visa, Mastercard, American Express). Pour les transports médicaux, la prise en charge CPAM est gérée directement.",

  // ── About page bio ────────────────────────────────────────────────────
  about_bio_1: "Bienvenue chez SPM Taxi, taxi conventionné basé à Villebois (Ain 01). Je propose un service de transport professionnel, ponctuel et confortable dans toute la région Auvergne-Rhône-Alpes et partout en France sur devis.",
  about_bio_2: "Mon Volkswagen Tiguan Allspace 7 places est équipé pour tous vos besoins : transferts aéroport, transports médicaux conventionnés CPAM, colis urgents ou déplacements longue distance.",
  about_bio_3: "Avec 4,9/5 sur Google et une disponibilité 7j/7 — y compris les jours fériés et la nuit — SPM Taxi est votre partenaire de mobilité de confiance dans l'Ain et au-delà.",

  // ── Ratings ───────────────────────────────────────────────────────────
  google_rating:       "4,9",
  google_review_count: "9",

  // ── Tarifs ────────────────────────────────────────────────────────────
  tarif_route1_label: "Villebois → Lyon Saint-Exupéry",
  tarif_route1_price: "À partir de 65 €",
  tarif_route2_label: "Ambérieu → Lyon Saint-Exupéry",
  tarif_route2_price: "À partir de 70 €",
  tarif_route3_label: "Bourg-en-Bresse → Lyon Part-Dieu",
  tarif_route3_price: "À partir de 75 €",
  tarif_route4_label: "Lyon Centre → Saint-Exupéry",
  tarif_route4_price: "À partir de 55 €",
  tarif_route5_label: "Grenoble → Lyon Saint-Exupéry",
  tarif_route5_price: "À partir de 90 €",
  tarif_route6_label: "Lyon → Paris",
  tarif_route6_price: "À partir de 420 €",
  tarif_route7_label: "Lyon → Marseille",
  tarif_route7_price: "À partir de 290 €",
  tarif_route8_label: "Lyon → Genève",
  tarif_route8_price: "À partir de 140 €",
  tarif_route9_label: "Lyon → Bordeaux",
  tarif_route9_price: "À partir de 520 €",
  tarif_route10_label: "Lyon → Nice",
  tarif_route10_price: "À partir de 400 €",
};

const SettingsContext = createContext<Settings>(defaults);

export function SettingsProvider({ children }: { children: React.ReactNode }) {
  const [settings, setSettings] = useState<Settings>(defaults);

  useEffect(() => {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    (getSupabase() as any)
      .from("settings")
      .select("key, value")
      .then(({ data }: { data: { key: string; value: string }[] | null }) => {
        if (!data?.length) return;
        const map: Settings = {};
        data.forEach(({ key, value }) => { map[key] = value; });
        setSettings((prev) => ({ ...prev, ...map }));
      });
  }, []);

  return (
    <SettingsContext.Provider value={settings}>
      {children}
    </SettingsContext.Provider>
  );
}

export function useSettings() {
  return useContext(SettingsContext);
}
