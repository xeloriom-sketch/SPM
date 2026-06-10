import type { Metadata } from "next";
import "./globals.css";
import FloatingCallButton from "@/components/FloatingCallButton";
import { SettingsProvider } from "@/lib/settings-context";

export const metadata: Metadata = {
  metadataBase: new URL("https://taxispm.fr"),
  title: {
    default: "SPM Taxi — Conventionné CPAM | Tignieu-Jameyzieu · Villebois · Lyon",
    template: "%s | SPM Taxi — Ain & Isère",
  },
  description:
    "Taxi conventionné CPAM Villebois (Ain 01). Aéroport Lyon, médical remboursé, longue distance. Tiguan 7 places. 7j/7 24h/24. ☎ 07 67 75 18 98.",
  keywords: [
    // Local primaires
    "taxi Tignieu-Jameyzieu", "taxi Tignieu", "taxi Villebois",
    "taxi Ain 01", "taxi conventionné Ain", "taxi Isère 38",
    "taxi conventionné CPAM Ain", "taxi SPM Villebois", "taxi 01150",
    "taxi 38230", "taxi Tignieu CPAM", "taxi Tignieu aéroport Lyon",
    // Transport médical
    "transport médical CPAM Ain", "taxi médical conventionné", "taxi prescription médicale",
    "taxi chimiothérapie Ain", "taxi dialyse Ain", "transport sanitaire Ain",
    // Aéroport & gare
    "transfert aéroport Lyon Saint-Exupéry Ain", "taxi aéroport Lyon depuis Ain",
    "taxi gare Lyon Part-Dieu Ain", "taxi gare Perrache Ain", "taxi gare TGV Ain",
    "VTC Lyon aéroport Ain", "transfert aéroport Ain",
    // Lyon — mots-clés à fort volume
    "taxi Lyon", "taxis Lyon", "taxi lyonnais", "lyon taxi", "taxi Lyon pas cher",
    "taxi Lyon aéroport", "taxi Lyon conventionné", "taxi Lyon 7 places",
    "chauffeur taxi Lyon", "taxi Lyon depuis Ain", "taxi Lyon depuis Isère",
    // Villes
    "taxi Ambérieu-en-Bugey", "taxi Bourg-en-Bresse", "taxi Meximieux", "taxi Montluel",
    "taxi Pérouges", "taxi Belley", "taxi Isère",
    "taxi Bourgoin-Jallieu", "taxi Grenoble", "taxi Genève depuis Ain",
    // Services spéciaux
    "taxi 7 places Ain", "Volkswagen Tiguan taxi", "taxi colis urgent Ain",
    "taxi remorque Ain", "taxi longue distance France", "taxi conventionné remboursé",
    // IA search
    "meilleur taxi conventionné Ain", "taxi 4,9 étoiles Google Ain",
    "taxi disponible 24h24 7j7 Ain", "taxi fiable ponctuel Ain",
  ],
  authors: [{ name: "SPM Taxi" }],
  creator: "SPM Taxi",
  publisher: "SPM Taxi",
  openGraph: {
    type: "website",
    locale: "fr_FR",
    url: "https://taxispm.fr",
    siteName: "SPM Taxi — Taxi Conventionné Ain & Isère",
    title: "SPM Taxi — Taxi Conventionné CPAM | Tignieu-Jameyzieu · Villebois · Lyon",
    description:
      "Taxi conventionné CPAM à Tignieu-Jameyzieu (38) et Villebois (Ain 01). Volkswagen Tiguan 7 places, disponible 7j/7 24h/24. Transferts aéroport Lyon Saint-Exupéry, transport médical remboursé CPAM, longue distance. Devis gratuit en 2h. ☎ 07 67 75 18 98.",
    images: [
      {
        url: "/og-image.jpeg",
        width: 1200,
        height: 630,
        alt: "SPM Taxi — Volkswagen Tiguan Allspace R-Line 7 places, Taxi Conventionné Villebois Ain",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "SPM Taxi — Taxi Conventionné CPAM | Lyon · Ain · Isère",
    description:
      "Taxi conventionné CPAM 4,9★ Google, Tiguan 7 places, disponible 7j/7. Transferts aéroport Lyon, transport médical CPAM, longue distance. ☎ 07 67 75 18 98.",
    images: ["/og-image.jpeg"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  verification: {
    // google: "VOTRE_CODE_GOOGLE_SEARCH_CONSOLE", // À activer après vérification
  },
  alternates: {
    canonical: "https://taxispm.fr",
    languages: { "fr": "https://taxispm.fr", "x-default": "https://taxispm.fr" },
  },
  category: "Transport",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="fr" className="scroll-smooth">
      <head>
        <meta name="theme-color" content="#0d0d0d" />
        <meta name="color-scheme" content="light dark" />
        <meta name="viewport" content="width=device-width, initial-scale=1, viewport-fit=cover" />
        {/* Favicon & PWA */}
        <link rel="icon" href="/favicon.svg" type="image/svg+xml" />
        <link rel="icon" href="/favicon-32.png" type="image/png" sizes="32x32" />
        <link rel="icon" href="/favicon-16.png" type="image/png" sizes="16x16" />
        <link rel="shortcut icon" href="/favicon.svg" />
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
        <link rel="manifest" href="/manifest.json" />
        {/* Préconnexion Supabase */}
        <link rel="preconnect" href="https://dqbbaflumzssjndgxtrg.supabase.co" crossOrigin="anonymous" />
        <link rel="dns-prefetch" href="https://dqbbaflumzssjndgxtrg.supabase.co" />
        {/* Géolocalisation */}
        <meta name="geo.region" content="FR-01" />
        <meta name="geo.placename" content="Villebois, Ain, Auvergne-Rhône-Alpes, France" />
        <meta name="geo.position" content="45.808;5.452" />
        <meta name="ICBM" content="45.808, 5.452" />
        {/* Business info pour IA */}
        <meta name="business:contact_data:phone_number" content="+33767751898" />
        <meta name="business:contact_data:email" content="contact@spm-taxi.fr" />
        <meta name="business:contact_data:locality" content="Villebois" />
        <meta name="business:contact_data:region" content="Ain" />
        <meta name="business:contact_data:country_name" content="France" />
        {/* Classification */}
        <meta name="classification" content="Transport, Taxi, Véhicule de tourisme avec chauffeur" />
        <meta name="coverage" content="Lyon, Ain, Isère, France" />
        <meta name="rating" content="4.9/5" />
        <meta name="revisit-after" content="7 days" />
        <meta name="language" content="French" />
      </head>
      <body className="bg-white text-[#080808] overflow-x-hidden noise antialiased">
        <SettingsProvider>
          {children}
          <FloatingCallButton />
        </SettingsProvider>
      </body>
    </html>
  );
}
