import type { MetadataRoute } from "next";

const BASE = "https://taxispm.fr";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    // ── Pages principales ──────────────────────────────────────────────────
    { url: `${BASE}/`,                            lastModified: "2026-08-07", changeFrequency: "monthly", priority: 1   },
    { url: `${BASE}/services/`,                   lastModified: "2026-08-07", changeFrequency: "monthly", priority: 0.9 },
    { url: `${BASE}/tarifs/`,                     lastModified: "2026-08-07", changeFrequency: "monthly", priority: 0.9 },
    { url: `${BASE}/a-propos/`,                   lastModified: "2026-07-01", changeFrequency: "monthly", priority: 0.7 },

    // ── Services spéciaux ─────────────────────────────────────────────────
    { url: `${BASE}/transfert-aeroport-lyon/`,    lastModified: "2026-08-07", changeFrequency: "monthly", priority: 0.9 },
    { url: `${BASE}/taxi-conventionne-cpam/`,     lastModified: "2026-08-07", changeFrequency: "monthly", priority: 0.9 },
    { url: `${BASE}/taxi-longue-distance/`,       lastModified: "2026-08-07", changeFrequency: "monthly", priority: 0.8 },
    { url: `${BASE}/taxi-remorque-ain/`,          lastModified: "2026-08-07", changeFrequency: "monthly", priority: 0.8 },

    // ── Pages SEO locales — Ain (01) ──────────────────────────────────────
    { url: `${BASE}/taxi-villebois/`,             lastModified: "2026-08-07", changeFrequency: "monthly", priority: 1.0 },
    { url: `${BASE}/taxi-amberieu-en-bugey/`,     lastModified: "2026-08-07", changeFrequency: "monthly", priority: 0.9 },
    { url: `${BASE}/taxi-meximieux/`,             lastModified: "2026-08-07", changeFrequency: "monthly", priority: 0.8 },
    { url: `${BASE}/taxi-montluel/`,              lastModified: "2026-08-07", changeFrequency: "monthly", priority: 0.8 },

    // ── Pages SEO locales — Ain (01) — suite ─────────────────────────────
    { url: `${BASE}/taxi-lagnieu/`,               lastModified: "2026-09-08", changeFrequency: "monthly", priority: 0.9 },
    { url: `${BASE}/taxi-bourg-en-bresse/`,       lastModified: "2026-09-08", changeFrequency: "monthly", priority: 0.9 },

    // ── Pages SEO locales — Isère (38) ───────────────────────────────────
    { url: `${BASE}/taxi-tignieu-jameyzieu/`,     lastModified: "2026-08-07", changeFrequency: "monthly", priority: 0.9 },
    { url: `${BASE}/taxi-charvieu-chavagneux/`,   lastModified: "2026-09-08", changeFrequency: "monthly", priority: 0.9 },
    { url: `${BASE}/taxi-bourgoin-jallieu/`,      lastModified: "2026-08-07", changeFrequency: "monthly", priority: 0.9 },
    { url: `${BASE}/taxi-la-tour-du-pin/`,        lastModified: "2026-08-07", changeFrequency: "monthly", priority: 0.8 },
    { url: `${BASE}/taxi-pont-de-cheruy/`,        lastModified: "2026-09-08", changeFrequency: "monthly", priority: 0.8 },
    { url: `${BASE}/taxi-cremieu/`,               lastModified: "2026-09-08", changeFrequency: "monthly", priority: 0.8 },

    // ── Pages SEO locales — Ain (01) — nouvelles ─────────────────────────
    { url: `${BASE}/taxi-belley/`,               lastModified: "2026-09-08", changeFrequency: "monthly", priority: 0.8 },
    { url: `${BASE}/taxi-oyonnax/`,              lastModified: "2026-09-08", changeFrequency: "monthly", priority: 0.8 },
    { url: `${BASE}/taxi-miribel/`,              lastModified: "2026-09-08", changeFrequency: "monthly", priority: 0.8 },
    { url: `${BASE}/taxi-villars-les-dombes/`,   lastModified: "2026-09-08", changeFrequency: "monthly", priority: 0.8 },
    { url: `${BASE}/taxi-perouges/`,             lastModified: "2026-09-08", changeFrequency: "monthly", priority: 0.8 },
    { url: `${BASE}/taxi-gex/`,                  lastModified: "2026-09-08", changeFrequency: "monthly", priority: 0.8 },

    // ── Pages SEO locales — Isère (38) — nouvelles ───────────────────────
    { url: `${BASE}/taxi-vienne/`,               lastModified: "2026-09-08", changeFrequency: "monthly", priority: 0.8 },
    { url: `${BASE}/taxi-isle-d-abeau/`,         lastModified: "2026-09-08", changeFrequency: "monthly", priority: 0.8 },

    // ── Pages SEO grandes destinations & destinations médicales ──────────
    { url: `${BASE}/taxi-grenoble/`,              lastModified: "2026-09-09", changeFrequency: "monthly", priority: 0.9 },
    { url: `${BASE}/taxi-geneve/`,                lastModified: "2026-09-09", changeFrequency: "monthly", priority: 0.9 },
    { url: `${BASE}/taxi-hauteville-lompnes/`,    lastModified: "2026-09-09", changeFrequency: "monthly", priority: 0.9 },

    // ── Pages SEO région ─────────────────────────────────────────────────
    { url: `${BASE}/taxi-lyon/`,                  lastModified: "2026-08-07", changeFrequency: "monthly", priority: 0.9 },
  ];
}
