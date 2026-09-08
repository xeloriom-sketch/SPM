import type { Metadata } from "next";
import Script from "next/script";
import "./globals.css";
import FloatingCallButton from "@/components/FloatingCallButton";
import { SettingsProvider } from "@/lib/settings-context";

export const metadata: Metadata = {
  metadataBase: new URL("https://taxispm.fr"),
  manifest: "/manifest.json",
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
    // Transport médical — mots-clés concurrents (VSL, tiers payant)
    "transport médical CPAM Ain", "taxi médical conventionné", "taxi prescription médicale",
    "taxi chimiothérapie Ain", "taxi dialyse Ain", "transport sanitaire Ain",
    "taxi VSL Ain", "taxi VSL Isère", "VSL conventionné Ain", "VSL conventionné Isère",
    "tiers payant taxi Ain", "taxi zéro avance de frais", "taxi remboursé Assurance Maladie",
    "transport prescription médicale Ain", "taxi radiothérapie Ain", "taxi hospitalisation Ain",
    // Aéroport & gare
    "transfert aéroport Lyon Saint-Exupéry Ain", "taxi aéroport Lyon depuis Ain",
    "taxi gare Lyon Part-Dieu Ain", "taxi gare Perrache Ain", "taxi gare TGV Ain",
    "VTC Lyon aéroport Ain", "transfert aéroport Ain", "taxi Genève-Cointrin Ain",
    // Lyon — mots-clés à fort volume
    "taxi Lyon", "taxis Lyon", "taxi lyonnais", "lyon taxi", "taxi Lyon pas cher",
    "taxi Lyon aéroport", "taxi Lyon conventionné", "taxi Lyon 7 places",
    "chauffeur taxi Lyon", "taxi Lyon depuis Ain", "taxi Lyon depuis Isère",
    // Villes couvertes — concurrents ciblent ces zones
    "taxi Ambérieu-en-Bugey", "taxi Bourg-en-Bresse", "taxi Meximieux", "taxi Montluel",
    "taxi Pérouges", "taxi Belley", "taxi Isère",
    "taxi Bourgoin-Jallieu", "taxi Grenoble", "taxi Genève depuis Ain",
    "taxi La Tour-du-Pin", "taxi Morestel", "taxi Charvieu-Chavagneux",
    "taxi Pont-de-Chéruy", "taxi L'Isle-d'Abeau", "taxi Crémieu",
    "taxi Villars-les-Dombes", "taxi Saint-Jean-de-Bournay",
    "taxi Nord-Isère", "taxi Est Lyonnais", "taxi Ain Isère",
    // Services spéciaux
    "taxi 7 places Ain", "Volkswagen Tiguan taxi", "taxi colis urgent Ain",
    "taxi remorque Ain", "taxi longue distance France", "taxi conventionné remboursé",
    // IA search
    "meilleur taxi conventionné Ain", "taxi 4,9 étoiles Google Ain",
    "taxi disponible 24h24 7j7 Ain", "taxi fiable ponctuel Ain",
    // Transport médical — termes spécialisés (concurrents)
    "taxi ALD Ain", "transport ALD Ain Isère", "accord préalable CPAM taxi",
    "taxi PMR Ain", "taxi TPMR Ain", "transport personnes mobilité réduite Ain",
    "taxi handicap Ain", "taxi fauteuil roulant Ain", "taxi enfants atypiques Ain",
    "taxi AME Ain", "taxi garde alternée Ain", "taxi scolaire Ain",
    "VSL taxi Ain Isère", "taxi assis conventionné Ain", "taxi assis CPAM Isère",
    "taxi hospitalisation Ain", "transport sanitaire assis Ain",
    "taxi prise en charge 100% Ain", "taxi remboursé sécu Ain",
    "taxi chimiothérapie Lyon", "taxi dialyse Lyon", "taxi radiothérapie Lyon",
    "taxi hôpital Edouard Herriot", "taxi CHU Lyon", "taxi Croix-Rousse Lyon",
    "taxi Hôpital Lyon-Sud", "taxi clinique Lyon", "taxi centre anticancéreux Lyon",
    // Villes Ain 01 — couverture complète
    "taxi Pérouges", "taxi Meximieux", "taxi Montluel", "taxi Ambérieu-en-Bugey",
    "taxi Belley", "taxi Bourg-en-Bresse", "taxi Lagnieu", "taxi Villebois",
    "taxi Tignieu-Jameyzieu", "taxi Pont-d'Ain", "taxi Loyettes", "taxi Blyes",
    "taxi Chazey-sur-Ain", "taxi Poncin", "taxi Gex", "taxi Nantua",
    "taxi Oyonnax", "taxi Thoissey", "taxi Châtillon-sur-Chalaronne",
    "taxi Montmerle-sur-Saône", "taxi Miribel", "taxi Saint-Maurice-de-Beynost",
    "taxi Beynost", "taxi Rillieux-la-Pape", "taxi Vaulx-en-Velin",
    "taxi Villars-les-Dombes", "taxi Birieux", "taxi Saint-Jean-de-Thurigneux",
    "taxi Mionnay", "taxi Dompierre-sur-Veyle", "taxi Joyeux",
    // Villes Isère 38 Nord — couverture complète
    "taxi Tignieu-Jameyzieu", "taxi Charvieu-Chavagneux", "taxi Pont-de-Chéruy",
    "taxi Bourgoin-Jallieu", "taxi La Tour-du-Pin", "taxi Crémieu", "taxi Morestel",
    "taxi Loyettes", "taxi Villette-d'Anthon", "taxi Anthon", "taxi Chavanoz",
    "taxi Saint-Romain-de-Jalionas", "taxi Villemoirieu", "taxi Optevoz",
    "taxi Hières-sur-Amby", "taxi Sérézin-de-la-Tour", "taxi Trept",
    "taxi Vignieu", "taxi Hiéres", "taxi Montalieu-Vercieu", "taxi Brangues",
    "taxi Porcieu-Amblagnieu", "taxi Lhuis", "taxi Arandon", "taxi Passins",
    "taxi Saint-Victor-de-Morestel", "taxi Ruy", "taxi Baix", "taxi Four",
    "taxi L'Isle-d'Abeau", "taxi Saint-Jean-de-Bournay", "taxi Vienne",
    "taxi Grenoble", "taxi Voiron", "taxi Crolles", "taxi Meylan",
    // Villes Rhône 69
    "taxi Lyon 1er", "taxi Lyon 2e", "taxi Lyon 3e", "taxi Lyon 6e",
    "taxi Lyon 7e", "taxi Lyon 8e", "taxi Villeurbanne", "taxi Décines",
    "taxi Meyzieu", "taxi Saint-Priest", "taxi Bron", "taxi Vénissieux",
    "taxi Caluire", "taxi Écully", "taxi Tassin-la-Demi-Lune",
    "taxi Rillieux-la-Pape", "taxi Jonage",
    // France entière — longue distance depuis Ain/Isère/Lyon
    "taxi Paris depuis Ain", "taxi Paris depuis Lyon", "taxi Marseille depuis Lyon",
    "taxi Bordeaux depuis Lyon", "taxi Nice depuis Lyon", "taxi Toulouse depuis Lyon",
    "taxi Strasbourg depuis Lyon", "taxi Nantes depuis Lyon", "taxi Lille depuis Lyon",
    "taxi Rennes depuis Lyon", "taxi Montpellier depuis Lyon", "taxi Dijon depuis Lyon",
    "taxi Clermont-Ferrand depuis Lyon", "taxi Grenoble depuis Ain",
    "taxi Reims depuis Ain", "taxi Toulon depuis Ain", "taxi Aix-en-Provence depuis Ain",
    "taxi Angers depuis Ain", "taxi Brest depuis Ain", "taxi Nîmes depuis Ain",
    "taxi Avignon depuis Ain", "taxi Orléans depuis Ain", "taxi Metz depuis Ain",
    "taxi Nancy depuis Ain", "taxi Caen depuis Ain", "taxi Rouen depuis Ain",
    "taxi Le Havre depuis Ain", "taxi Limoges depuis Ain", "taxi Pau depuis Ain",
    "taxi Perpignan depuis Ain", "taxi Amiens depuis Ain", "taxi Tours depuis Ain",
    // Europe
    "taxi Genève depuis Ain", "taxi Genève depuis Lyon", "taxi Genève aéroport depuis Ain",
    "taxi Lausanne depuis Lyon", "taxi Zurich depuis Ain", "taxi Bâle depuis Ain",
    "taxi Milan depuis Ain", "taxi Turin depuis Ain", "taxi Monaco depuis Ain",
    "taxi Annecy depuis Ain", "taxi Chambéry depuis Ain",
    "taxi Bruxelles depuis Lyon", "taxi Luxembourg depuis Ain",
    // Aéroports France
    "taxi aéroport Roissy CDG depuis Ain", "taxi aéroport Orly depuis Ain",
    "taxi aéroport Marseille depuis Ain", "taxi aéroport Nice depuis Ain",
    "taxi aéroport Bordeaux depuis Ain", "taxi aéroport Toulouse depuis Ain",
    "taxi aéroport Nantes depuis Ain", "taxi aéroport Strasbourg depuis Ain",
    "taxi aéroport Lyon Saint-Exupéry", "taxi LYS", "taxi GVA Genève depuis Ain",
    // Gares TGV
    "taxi gare Lyon Part-Dieu", "taxi gare Perrache Lyon", "taxi gare TGV Ain",
    "taxi gare Ambérieu SNCF", "taxi gare Bourg-en-Bresse SNCF",
    "taxi gare Montparnasse Paris", "taxi gare de Lyon Paris",
    "taxi gare du Nord Paris", "taxi gare de l'Est Paris",
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
      "Taxi conventionné CPAM 4,6★ Google (12 avis), Tiguan 7 places, disponible 7j/7. Transferts aéroport Lyon, transport médical CPAM, longue distance. ☎ 07 67 75 18 98.",
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
        {/* Google Analytics GA4 — lazyOnload pour ne pas bloquer le LCP */}
        <Script src="https://www.googletagmanager.com/gtag/js?id=G-EQDEWKCWKW" strategy="lazyOnload" />
        <Script id="ga4" strategy="lazyOnload" dangerouslySetInnerHTML={{ __html: `
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', 'G-EQDEWKCWKW', { send_page_view: true });
        `}} />
        <meta name="theme-color" content="#0d0d0d" />
        <meta name="color-scheme" content="light dark" />
        <meta name="viewport" content="width=device-width, initial-scale=1, viewport-fit=cover" />
        {/* Favicon & PWA */}
        <link rel="icon" href="/favicon.svg" type="image/svg+xml" />
        <link rel="icon" href="/favicon-32.png" type="image/png" sizes="32x32" />
        <link rel="icon" href="/favicon-16.png" type="image/png" sizes="16x16" />
        <link rel="shortcut icon" href="/favicon.svg" />
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
        {/* manifest géré via metadata API pour permettre l'override par sous-layouts */}
        {/* LCP — préchargé via <Image priority> dans HeroImage.tsx */}
        {/* Préconnexion GA4 uniquement */}
        <link rel="preconnect" href="https://www.googletagmanager.com" />
        <link rel="dns-prefetch" href="https://www.google-analytics.com" />
        {/* Géolocalisation */}
        <meta name="geo.region" content="FR-01" />
        <meta name="geo.placename" content="Villebois, Ain, Auvergne-Rhône-Alpes, France" />
        <meta name="geo.position" content="45.808;5.452" />
        <meta name="ICBM" content="45.808, 5.452" />
        {/* Business info pour IA */}
        <meta name="business:contact_data:phone_number" content="+33767751898" />
        <meta name="business:contact_data:email" content="contact@taxispm.fr" />
        <meta name="business:contact_data:locality" content="Villebois" />
        <meta name="business:contact_data:region" content="Ain" />
        <meta name="business:contact_data:country_name" content="France" />
        {/* Classification */}
        <meta name="classification" content="Transport, Taxi, Véhicule de tourisme avec chauffeur" />
        <meta name="coverage" content="Lyon, Ain, Isère, France" />
        <meta name="rating" content="4.6/5" />
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
