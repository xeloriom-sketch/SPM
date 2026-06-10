import type { MetadataRoute } from "next";

const BASE = "https://taxispm.fr";
const NOW  = new Date();

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    { url: `${BASE}/`,                                         lastModified: NOW, changeFrequency: "monthly", priority: 1    },
    { url: `${BASE}/services/`,                                lastModified: NOW, changeFrequency: "monthly", priority: 0.9  },
    { url: `${BASE}/tarifs/`,                                  lastModified: NOW, changeFrequency: "monthly", priority: 0.9  },
    { url: `${BASE}/transfert-aeroport-lyon/`,                 lastModified: NOW, changeFrequency: "monthly", priority: 0.9  },
    { url: `${BASE}/taxi-conventionne-cpam/`,                  lastModified: NOW, changeFrequency: "monthly", priority: 0.9  },
    { url: `${BASE}/taxi-longue-distance/`,                    lastModified: NOW, changeFrequency: "monthly", priority: 0.8  },
    { url: `${BASE}/taxi-remorque-ain/`,                       lastModified: NOW, changeFrequency: "monthly", priority: 0.8  },
    { url: `${BASE}/taxi-tignieu-jameyzieu/`,                  lastModified: NOW, changeFrequency: "monthly", priority: 0.9  },
    { url: `${BASE}/a-propos/`,                                lastModified: NOW, changeFrequency: "monthly", priority: 0.7  },
  ];
}
