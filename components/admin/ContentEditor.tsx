"use client";

import { useState } from "react";
import { Save, CheckCircle2, Loader2, AlertCircle } from "lucide-react";
import { getSupabase } from "@/lib/supabase-browser";
import { defaults } from "@/lib/settings-context";

type Field = { key: string; label: string; placeholder?: string; type?: "text" | "textarea" };
type Section = { title: string; desc: string; fields: Field[] };

const sections: Section[] = [
  {
    title: "Informations de contact",
    desc: "Coordonnées affichées partout sur le site.",
    fields: [
      { key: "contact_phone",   label: "Téléphone",   placeholder: "07 67 75 18 98" },
      { key: "contact_email",   label: "Email",        placeholder: "contact@spm-taxi.fr" },
      { key: "contact_address", label: "Adresse",      placeholder: "951 route des hauts fourneaux, 01150 Villebois" },
    ],
  },
  {
    title: "Page d'accueil — Héro",
    desc: "Textes du hero principal.",
    fields: [
      { key: "hero_line1",   label: "Ligne 1 du titre",            placeholder: "Nous allons" },
      { key: "hero_line2",   label: "Ligne 2 du titre (italique)", placeholder: "où vous voulez." },
      { key: "hero_subtitle", label: "Sous-titre",                 placeholder: "SPM · Villebois · Lyon · Ain · Isère" },
    ],
  },
  {
    title: "Page d'accueil — Services",
    desc: "Titre de section et 4 cartes de services.",
    fields: [
      { key: "services_title_line1", label: "Titre ligne 1",        placeholder: "SPM — Taxi" },
      { key: "services_title_line2", label: "Titre ligne 2",        placeholder: "Conventionné" },
      { key: "services_intro",       label: "Introduction",         placeholder: "Volkswagen Tiguan 7 places...", type: "textarea" },
      { key: "service1_title",       label: "Service 1 — Titre",    placeholder: "Transferts Gare & Aéroport" },
      { key: "service1_desc",        label: "Service 1 — Description", placeholder: "Lyon Saint-Exupéry...", type: "textarea" },
      { key: "service2_title",       label: "Service 2 — Titre",    placeholder: "Colis & Courriers Urgents" },
      { key: "service2_desc",        label: "Service 2 — Description", placeholder: "Livraison rapide...", type: "textarea" },
      { key: "service3_title",       label: "Service 3 — Titre",    placeholder: "Remorque à Disposition" },
      { key: "service3_desc",        label: "Service 3 — Description", placeholder: "Attache-remorque homologuée...", type: "textarea" },
      { key: "service4_title",       label: "Service 4 — Titre",    placeholder: "Déplacements France Entière" },
      { key: "service4_desc",        label: "Service 4 — Description", placeholder: "De Lyon à Paris...", type: "textarea" },
    ],
  },
  {
    title: "Véhicule",
    desc: "Description et équipements du Tiguan.",
    fields: [
      { key: "vehicle_intro",    label: "Texte d'introduction", placeholder: "Montez à bord du Volkswagen...", type: "textarea" },
      { key: "vehicle_feature1", label: "Équipement 1",         placeholder: "Climatisation bi-zone automatique" },
      { key: "vehicle_feature2", label: "Équipement 2",         placeholder: "Wi-Fi haute vitesse à bord" },
      { key: "vehicle_feature3", label: "Équipement 3",         placeholder: "Attache-remorque homologuée" },
      { key: "vehicle_feature4", label: "Équipement 4",         placeholder: "Chargement USB & sans fil" },
      { key: "vehicle_feature5", label: "Équipement 5",         placeholder: "Assurance professionnelle taxi" },
      { key: "vehicle_feature6", label: "Équipement 6",         placeholder: "Grand espace bagage coffre" },
    ],
  },
  {
    title: "Avis & Note Google",
    desc: "Note et nombre d'avis affichés sur le site.",
    fields: [
      { key: "google_rating",       label: "Note Google",   placeholder: "4,9" },
      { key: "google_review_count", label: "Nombre d'avis", placeholder: "9" },
    ],
  },
  {
    title: "Témoignages",
    desc: "Les 9 avis clients affichés sur la page d'accueil.",
    fields: [
      { key: "testimonial1_name",  label: "Avis 1 — Nom",   placeholder: "F.I TAXI" },
      { key: "testimonial1_date",  label: "Avis 1 — Date",  placeholder: "il y a 6 mois" },
      { key: "testimonial1_stars", label: "Avis 1 — Étoiles (1-5)", placeholder: "5" },
      { key: "testimonial1_text",  label: "Avis 1 — Texte", placeholder: "Excellent collaborateur...", type: "textarea" },
      { key: "testimonial2_name",  label: "Avis 2 — Nom",   placeholder: "sabrina selini" },
      { key: "testimonial2_date",  label: "Avis 2 — Date",  placeholder: "il y a 10 mois" },
      { key: "testimonial2_stars", label: "Avis 2 — Étoiles (1-5)", placeholder: "5" },
      { key: "testimonial2_text",  label: "Avis 2 — Texte", placeholder: "Sérieux, ponctuel...", type: "textarea" },
      { key: "testimonial3_name",  label: "Avis 3 — Nom",   placeholder: "Kãte Dbno" },
      { key: "testimonial3_date",  label: "Avis 3 — Date",  placeholder: "il y a 6 mois" },
      { key: "testimonial3_stars", label: "Avis 3 — Étoiles (1-5)", placeholder: "4" },
      { key: "testimonial3_text",  label: "Avis 3 — Texte", placeholder: "Taxi très sérieux...", type: "textarea" },
      { key: "testimonial4_name",  label: "Avis 4 — Nom",   placeholder: "Chloé Burguiere" },
      { key: "testimonial4_date",  label: "Avis 4 — Date",  placeholder: "il y a 9 mois" },
      { key: "testimonial4_stars", label: "Avis 4 — Étoiles (1-5)", placeholder: "5" },
      { key: "testimonial4_text",  label: "Avis 4 — Texte", placeholder: "Taxi très accueillant...", type: "textarea" },
      { key: "testimonial5_name",  label: "Avis 5 — Nom",   placeholder: "SOSO 01" },
      { key: "testimonial5_date",  label: "Avis 5 — Date",  placeholder: "il y a 11 mois" },
      { key: "testimonial5_stars", label: "Avis 5 — Étoiles (1-5)", placeholder: "5" },
      { key: "testimonial5_text",  label: "Avis 5 — Texte", placeholder: "Taxi très sérieux et ponctuel...", type: "textarea" },
      { key: "testimonial6_name",  label: "Avis 6 — Nom",   placeholder: "Khalid El ouazzani" },
      { key: "testimonial6_date",  label: "Avis 6 — Date",  placeholder: "il y a 11 mois" },
      { key: "testimonial6_stars", label: "Avis 6 — Étoiles (1-5)", placeholder: "5" },
      { key: "testimonial6_text",  label: "Avis 6 — Texte", placeholder: "Société professionnelle...", type: "textarea" },
      { key: "testimonial7_name",  label: "Avis 7 — Nom",   placeholder: "Ibrahim za" },
      { key: "testimonial7_date",  label: "Avis 7 — Date",  placeholder: "il y a 11 mois" },
      { key: "testimonial7_stars", label: "Avis 7 — Étoiles (1-5)", placeholder: "5" },
      { key: "testimonial7_text",  label: "Avis 7 — Texte", placeholder: "Taxi sérieux, gentil...", type: "textarea" },
      { key: "testimonial8_name",  label: "Avis 8 — Nom",   placeholder: "ALHAMBRA WEB" },
      { key: "testimonial8_date",  label: "Avis 8 — Date",  placeholder: "il y a 3 jours" },
      { key: "testimonial8_stars", label: "Avis 8 — Étoiles (1-5)", placeholder: "5" },
      { key: "testimonial8_text",  label: "Avis 8 — Texte", placeholder: "Personne très agréable.", type: "textarea" },
      { key: "testimonial9_name",  label: "Avis 9 — Nom",   placeholder: "z" },
      { key: "testimonial9_date",  label: "Avis 9 — Date",  placeholder: "il y a 8 mois" },
      { key: "testimonial9_stars", label: "Avis 9 — Étoiles (1-5)", placeholder: "5" },
      { key: "testimonial9_text",  label: "Avis 9 — Texte", placeholder: "Très réactif.", type: "textarea" },
    ],
  },
  {
    title: "FAQ",
    desc: "Questions et réponses affichées sur le site.",
    fields: [
      { key: "faq1_q", label: "FAQ 1 — Question", placeholder: "Qu'est-ce qu'un taxi conventionné ?" },
      { key: "faq1_a", label: "FAQ 1 — Réponse",  placeholder: "Un taxi conventionné est agréé...", type: "textarea" },
      { key: "faq2_q", label: "FAQ 2 — Question", placeholder: "Comment obtenir un devis ?" },
      { key: "faq2_a", label: "FAQ 2 — Réponse",  placeholder: "Remplissez le formulaire...", type: "textarea" },
      { key: "faq3_q", label: "FAQ 3 — Question", placeholder: "Quelles zones couvrez-vous ?" },
      { key: "faq3_a", label: "FAQ 3 — Réponse",  placeholder: "Je suis basé à Villebois...", type: "textarea" },
      { key: "faq4_q", label: "FAQ 4 — Question", placeholder: "Puis-je transporter des animaux ?" },
      { key: "faq4_a", label: "FAQ 4 — Réponse",  placeholder: "Oui, dans une caisse...", type: "textarea" },
      { key: "faq5_q", label: "FAQ 5 — Question", placeholder: "Puis-je réserver à l'avance ?" },
      { key: "faq5_a", label: "FAQ 5 — Réponse",  placeholder: "Absolument — je vous encourage...", type: "textarea" },
      { key: "faq6_q", label: "FAQ 6 — Question", placeholder: "Quels modes de paiement acceptez-vous ?" },
      { key: "faq6_a", label: "FAQ 6 — Réponse",  placeholder: "Espèces, carte bancaire...", type: "textarea" },
    ],
  },
  {
    title: "À propos — Biographie",
    desc: "Les 3 paragraphes de présentation.",
    fields: [
      { key: "about_bio_1", label: "Paragraphe 1", placeholder: "Bienvenue chez SPM Taxi...", type: "textarea" },
      { key: "about_bio_2", label: "Paragraphe 2", placeholder: "Mon Volkswagen Tiguan...", type: "textarea" },
      { key: "about_bio_3", label: "Paragraphe 3", placeholder: "Avec 4,9/5 sur Google...", type: "textarea" },
    ],
  },
  {
    title: "Tarifs — Aéroport & Gare",
    desc: "Trajets et prix affichés dans la page Tarifs.",
    fields: [
      { key: "tarif_route1_label", label: "Trajet 1 — Départ/Arrivée", placeholder: "Villebois → Lyon Saint-Exupéry" },
      { key: "tarif_route1_price", label: "Trajet 1 — Prix",           placeholder: "À partir de 65 €" },
      { key: "tarif_route2_label", label: "Trajet 2 — Départ/Arrivée", placeholder: "Ambérieu → Lyon Saint-Exupéry" },
      { key: "tarif_route2_price", label: "Trajet 2 — Prix",           placeholder: "À partir de 70 €" },
      { key: "tarif_route3_label", label: "Trajet 3 — Départ/Arrivée", placeholder: "Bourg-en-Bresse → Lyon Part-Dieu" },
      { key: "tarif_route3_price", label: "Trajet 3 — Prix",           placeholder: "À partir de 75 €" },
      { key: "tarif_route4_label", label: "Trajet 4 — Départ/Arrivée", placeholder: "Lyon Centre → Saint-Exupéry" },
      { key: "tarif_route4_price", label: "Trajet 4 — Prix",           placeholder: "À partir de 55 €" },
      { key: "tarif_route5_label", label: "Trajet 5 — Départ/Arrivée", placeholder: "Grenoble → Lyon Saint-Exupéry" },
      { key: "tarif_route5_price", label: "Trajet 5 — Prix",           placeholder: "À partir de 90 €" },
    ],
  },
  {
    title: "Tarifs — Longue Distance",
    desc: "Trajets longue distance affichés dans la page Tarifs.",
    fields: [
      { key: "tarif_route6_label",  label: "Trajet 6 — Départ/Arrivée",  placeholder: "Lyon → Paris" },
      { key: "tarif_route6_price",  label: "Trajet 6 — Prix",            placeholder: "À partir de 420 €" },
      { key: "tarif_route7_label",  label: "Trajet 7 — Départ/Arrivée",  placeholder: "Lyon → Marseille" },
      { key: "tarif_route7_price",  label: "Trajet 7 — Prix",            placeholder: "À partir de 290 €" },
      { key: "tarif_route8_label",  label: "Trajet 8 — Départ/Arrivée",  placeholder: "Lyon → Genève" },
      { key: "tarif_route8_price",  label: "Trajet 8 — Prix",            placeholder: "À partir de 140 €" },
      { key: "tarif_route9_label",  label: "Trajet 9 — Départ/Arrivée",  placeholder: "Lyon → Bordeaux" },
      { key: "tarif_route9_price",  label: "Trajet 9 — Prix",            placeholder: "À partir de 520 €" },
      { key: "tarif_route10_label", label: "Trajet 10 — Départ/Arrivée", placeholder: "Lyon → Nice" },
      { key: "tarif_route10_price", label: "Trajet 10 — Prix",           placeholder: "À partir de 400 €" },
    ],
  },
];

type FieldStatus = "idle" | "saving" | "saved" | "error";

export default function ContentEditor({ settings }: { settings: Record<string, string> }) {
  const merged = { ...defaults, ...settings };
  const [values, setValues] = useState<Record<string, string>>(merged);
  const [statuses, setStatuses] = useState<Record<string, FieldStatus>>({});

  function setStatus(key: string, s: FieldStatus) {
    setStatuses((prev) => ({ ...prev, [key]: s }));
  }

  function handleChange(key: string, val: string) {
    setValues((prev) => ({ ...prev, [key]: val }));
    if (statuses[key] === "saved" || statuses[key] === "error") setStatus(key, "idle");
  }

  async function handleSave(key: string) {
    setStatus(key, "saving");
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const { error } = await (getSupabase() as any)
      .from("settings")
      .upsert({ key, value: values[key] ?? "" }, { onConflict: "key" });
    if (error) {
      setStatus(key, "error");
      setTimeout(() => setStatus(key, "idle"), 3000);
    } else {
      setStatus(key, "saved");
      setTimeout(() => setStatus(key, "idle"), 2500);
    }
  }

  return (
    <div className="p-4 sm:p-6 max-w-2xl mx-auto">
      <div className="mb-8">
        <h1 className="text-2xl font-semibold tracking-tight text-black">Contenu du site</h1>
        <p className="text-sm text-black/40 mt-1">Chaque champ se sauvegarde individuellement. Les modifications sont visibles en temps réel sur le site.</p>
      </div>

      <div className="flex flex-col gap-6">
        {sections.map((section) => (
          <div key={section.title} className="rounded-2xl border border-black/[0.07] bg-white p-5 sm:p-6">
            <div className="mb-5">
              <h2 className="text-sm font-semibold text-black">{section.title}</h2>
              <p className="text-xs text-black/40 mt-0.5">{section.desc}</p>
            </div>
            <div className="flex flex-col gap-4">
              {section.fields.map(({ key, label, placeholder, type }) => {
                const st = statuses[key] ?? "idle";
                return (
                  <div key={key}>
                    <label className="mb-1.5 block text-[10px] font-bold tracking-wider uppercase text-black/35">{label}</label>
                    <div className="flex gap-2 items-start">
                      {type === "textarea" ? (
                        <textarea
                          rows={3}
                          value={values[key] ?? ""}
                          onChange={(e) => handleChange(key, e.target.value)}
                          placeholder={placeholder}
                          className="flex-1 rounded-xl border border-black/[0.08] bg-[#f8f9fa] px-4 py-2.5 text-sm outline-none focus:border-black/30 focus:bg-white focus:ring-2 focus:ring-black/5 transition resize-none"
                        />
                      ) : (
                        <input
                          type="text"
                          value={values[key] ?? ""}
                          onChange={(e) => handleChange(key, e.target.value)}
                          placeholder={placeholder}
                          className="flex-1 rounded-xl border border-black/[0.08] bg-[#f8f9fa] px-4 py-2.5 text-sm outline-none focus:border-black/30 focus:bg-white focus:ring-2 focus:ring-black/5 transition"
                        />
                      )}
                      <button
                        onClick={() => handleSave(key)}
                        disabled={st === "saving"}
                        title={st === "saved" ? "Sauvegardé" : st === "error" ? "Erreur" : "Sauvegarder"}
                        className={`grid h-10 w-10 shrink-0 place-items-center rounded-xl border transition-all ${
                          st === "saved"  ? "border-green-200 bg-green-50 text-green-600" :
                          st === "error"  ? "border-red-200 bg-red-50 text-red-500" :
                          st === "saving" ? "border-black/10 bg-black/5 text-black/40" :
                          "border-black/[0.08] bg-[#f8f9fa] text-black/35 hover:border-black/25 hover:bg-black hover:text-white"
                        }`}
                      >
                        {st === "saving" ? <Loader2 className="h-4 w-4 animate-spin" /> :
                         st === "saved"  ? <CheckCircle2 className="h-4 w-4" /> :
                         st === "error"  ? <AlertCircle className="h-4 w-4" /> :
                                           <Save className="h-4 w-4" />}
                      </button>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        ))}
      </div>

      <p className="mt-6 text-xs text-black/25 text-center">
        Les modifications sont appliquées en temps réel sur la version Vercel du site.
      </p>
    </div>
  );
}
