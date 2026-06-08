"use client";

import { useState, useTransition } from "react";
import { Save, CheckCircle2, Loader2, AlertCircle } from "lucide-react";
import { saveSetting } from "@/app/actions/settings";

type Field = { key: string; label: string; placeholder: string; type?: "text" | "textarea" };

const sections: { title: string; desc: string; fields: Field[] }[] = [
  {
    title: "Informations de contact",
    desc: "Coordonnées affichées sur le site et dans le pied de page.",
    fields: [
      { key: "contact_phone", label: "Téléphone", placeholder: "07 67 75 18 98" },
      { key: "contact_email", label: "Email", placeholder: "contact@spm-taxi.fr" },
      { key: "contact_address", label: "Adresse", placeholder: "951 route des hauts fourneaux, 01150 Villebois" },
    ],
  },
  {
    title: "Page d'accueil — Héro",
    desc: "Textes affichés dans le hero principal.",
    fields: [
      { key: "hero_line1", label: "Ligne 1 du titre", placeholder: "Nous allons" },
      { key: "hero_line2", label: "Ligne 2 du titre (italique)", placeholder: "où vous voulez." },
      { key: "hero_subtitle", label: "Sous-titre", placeholder: "SPM · Villebois · Lyon · Ain · Isère" },
    ],
  },
  {
    title: "À propos — Biographie",
    desc: "Textes de présentation sur la page À propos.",
    fields: [
      { key: "about_bio_1", label: "Paragraphe 1", placeholder: "Bienvenue chez SPM Taxi…", type: "textarea" },
      { key: "about_bio_2", label: "Paragraphe 2", placeholder: "Mon Volkswagen Tiguan Allspace…", type: "textarea" },
      { key: "about_bio_3", label: "Paragraphe 3", placeholder: "Avec 4,9/5 sur Google…", type: "textarea" },
    ],
  },
  {
    title: "Avis & statistiques",
    desc: "Note et nombre d'avis affichés sur le site.",
    fields: [
      { key: "google_rating", label: "Note Google", placeholder: "4,9" },
      { key: "google_review_count", label: "Nombre d'avis", placeholder: "9" },
    ],
  },
];

type FieldStatus = "idle" | "saving" | "saved" | "error";

export default function ContentEditor({ settings }: { settings: Record<string, string> }) {
  const [values, setValues] = useState<Record<string, string>>(settings);
  const [statuses, setStatuses] = useState<Record<string, FieldStatus>>({});
  const [, startTransition] = useTransition();

  function setStatus(key: string, s: FieldStatus) {
    setStatuses((prev) => ({ ...prev, [key]: s }));
  }

  function handleChange(key: string, val: string) {
    setValues((prev) => ({ ...prev, [key]: val }));
    if (statuses[key] === "saved" || statuses[key] === "error") setStatus(key, "idle");
  }

  async function handleSave(key: string) {
    setStatus(key, "saving");
    try {
      await saveSetting(key, values[key] ?? "");
      setStatus(key, "saved");
      setTimeout(() => setStatus(key, "idle"), 2500);
    } catch {
      setStatus(key, "error");
      setTimeout(() => setStatus(key, "idle"), 3000);
    }
  }

  return (
    <div className="p-4 sm:p-6 max-w-2xl mx-auto">
      <div className="mb-8">
        <h1 className="text-2xl font-semibold tracking-tight text-black">Contenu du site</h1>
        <p className="text-sm text-black/40 mt-1">Modifiez les textes affichés sur le site. Chaque champ se sauvegarde individuellement.</p>
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
