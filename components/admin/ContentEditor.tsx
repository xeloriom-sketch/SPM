"use client";

import { useState, useTransition } from "react";
import { Save, CheckCircle2, Loader2 } from "lucide-react";
import { saveSetting } from "@/app/actions/admin";

type Field = { key: string; label: string; placeholder: string; type?: "text" | "textarea" };

const sections: { title: string; fields: Field[] }[] = [
  {
    title: "Informations de contact",
    fields: [
      { key: "contact_phone", label: "Téléphone", placeholder: "06 XX XX XX XX" },
      { key: "contact_email", label: "Email", placeholder: "contact@taxi-tignieu.fr" },
      { key: "contact_address", label: "Adresse", placeholder: "Tignieu-Jameyzieu, Ain (01)" },
    ],
  },
  {
    title: "Section héro (page d'accueil)",
    fields: [
      { key: "hero_badge", label: "Badge disponibilité", placeholder: "Disponible 7j/7 — 24h/24" },
      { key: "hero_subtitle", label: "Sous-titre", placeholder: "Description principale…", type: "textarea" },
    ],
  },
];

export default function ContentEditor({ settings }: { settings: Record<string, string> }) {
  const [values, setValues] = useState<Record<string, string>>(settings);
  const [saved, setSaved] = useState<Record<string, boolean>>({});
  const [pending, startTransition] = useTransition();

  function handleChange(key: string, val: string) {
    setValues((prev) => ({ ...prev, [key]: val }));
    setSaved((prev) => ({ ...prev, [key]: false }));
  }

  function handleSave(key: string) {
    startTransition(async () => {
      await saveSetting(key, JSON.stringify(values[key] ?? ""));
      setSaved((prev) => ({ ...prev, [key]: true }));
      setTimeout(() => setSaved((prev) => ({ ...prev, [key]: false })), 2000);
    });
  }

  return (
    <div className="p-6 max-w-2xl mx-auto">
      <div className="mb-8">
        <h1 className="font-display text-2xl font-bold">Contenu du site</h1>
        <p className="text-sm text-mutedc mt-1">Modifiez les textes et informations affichés sur le site.</p>
      </div>

      <div className="flex flex-col gap-8">
        {sections.map((section) => (
          <div key={section.title} className="rounded-2xl border border-borderc bg-surface p-6">
            <h2 className="text-sm font-semibold mb-5 text-foreground">{section.title}</h2>
            <div className="flex flex-col gap-5">
              {section.fields.map(({ key, label, placeholder, type }) => (
                <div key={key}>
                  <label className="mb-1.5 block text-xs font-medium text-mutedc">{label}</label>
                  <div className="flex gap-2">
                    {type === "textarea" ? (
                      <textarea
                        rows={3}
                        value={values[key] ?? ""}
                        onChange={(e) => handleChange(key, e.target.value)}
                        placeholder={placeholder}
                        className="flex-1 rounded-xl border border-borderc bg-surface2 px-4 py-2.5 text-sm outline-none focus:border-lime/50 focus:ring-1 focus:ring-lime/20 transition resize-none"
                      />
                    ) : (
                      <input
                        type="text"
                        value={values[key] ?? ""}
                        onChange={(e) => handleChange(key, e.target.value)}
                        placeholder={placeholder}
                        className="flex-1 rounded-xl border border-borderc bg-surface2 px-4 py-2.5 text-sm outline-none focus:border-lime/50 focus:ring-1 focus:ring-lime/20 transition"
                      />
                    )}
                    <button
                      onClick={() => handleSave(key)}
                      disabled={pending}
                      className={`grid h-10 w-10 shrink-0 place-items-center rounded-xl transition-all ${
                        saved[key]
                          ? "bg-lime/20 text-lime"
                          : "bg-surface2 border border-borderc text-mutedc hover:border-lime/30 hover:text-lime"
                      }`}
                    >
                      {pending ? (
                        <Loader2 className="h-4 w-4 animate-spin" />
                      ) : saved[key] ? (
                        <CheckCircle2 className="h-4 w-4" />
                      ) : (
                        <Save className="h-4 w-4" />
                      )}
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>

      <p className="mt-6 text-xs text-mutedc text-center">
        Les modifications sont sauvegardées en base de données et appliquées au site en temps réel.
      </p>
    </div>
  );
}
