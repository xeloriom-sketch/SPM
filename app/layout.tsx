import type { Metadata } from "next";
import "./globals.css";
import FloatingCallButton from "@/components/FloatingCallButton";

export const metadata: Metadata = {
  metadataBase: new URL("https://www.spm-taxi.fr"),
  title: {
    default: "SPM Taxi — Taxi Conventionné CPAM | Villebois · Lyon · Ain (01)",
    template: "%s | SPM Taxi Villebois",
  },
  description:
    "SPM Taxi, taxi conventionné CPAM basé à Villebois (Ain 01). Volkswagen Tiguan Allspace 7 places. Transferts aéroport Lyon Saint-Exupéry, gares TGV, transport médical CPAM, colis urgents, remorque. Disponible 7j/7 24h/24. Devis gratuit. ☎ 07 67 75 18 98.",
  keywords: [
    "taxi Villebois",
    "taxi conventionné CPAM Ain",
    "taxi SPM",
    "taxi Ain 01",
    "taxi Lyon",
    "taxi Isère",
    "taxi Ambérieu-en-Bugey",
    "taxi Bourg-en-Bresse",
    "transfert aéroport Lyon Saint-Exupéry",
    "transfert aéroport Lyon",
    "taxi gare Lyon Part-Dieu",
    "taxi gare Perrache",
    "transport médical CPAM Ain",
    "taxi conventionné Ain",
    "taxi 7 places",
    "Volkswagen Tiguan taxi",
    "taxi colis urgent",
    "taxi remorque Ain",
    "taxi longue distance France",
    "taxi Meximieux",
    "taxi Montluel",
    "taxi Bourgoin-Jallieu",
    "taxi Grenoble",
    "taxi Genève depuis Lyon",
    "CPAM taxi prescription médicale",
    "taxi 01150",
  ],
  authors: [{ name: "SPM Taxi" }],
  creator: "SPM Taxi",
  publisher: "SPM Taxi",
  openGraph: {
    type: "website",
    locale: "fr_FR",
    url: "https://www.spm-taxi.fr",
    siteName: "SPM Taxi — Taxi Conventionné",
    title: "SPM Taxi — Taxi Conventionné CPAM | Villebois · Lyon · Ain",
    description:
      "Taxi conventionné CPAM à Villebois (Ain 01). Volkswagen Tiguan 7 places, disponible 7j/7 24h/24. Transferts aéroport, transport médical, longue distance. Devis gratuit en 2h.",
    images: [
      {
        url: "/image/tiguan-front-quarter.png",
        width: 1344,
        height: 768,
        alt: "SPM Taxi — Volkswagen Tiguan Allspace 7 places, Villebois Ain",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "SPM Taxi — Taxi Conventionné CPAM | Lyon · Ain · Isère",
    description:
      "Taxi conventionné CPAM, Tiguan 7 places, disponible 7j/7. Transferts aéroport Lyon, transport médical, longue distance. ☎ 07 67 75 18 98.",
    images: ["/image/tiguan-front-quarter.png"],
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
  alternates: { canonical: "https://www.spm-taxi.fr" },
  category: "Transport",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="fr" className="scroll-smooth">
      <head>
        <meta name="theme-color" content="#0d0d0d" />
        <meta name="color-scheme" content="light dark" />
        <meta name="viewport" content="width=device-width, initial-scale=1, viewport-fit=cover" />
        <meta name="geo.region" content="FR-AIN" />
        <meta name="geo.placename" content="Villebois, Ain, France" />
        <meta name="geo.position" content="45.8;5.45" />
        <meta name="ICBM" content="45.8, 5.45" />
      </head>
      <body className="bg-white text-[#080808] overflow-x-hidden noise antialiased">
        {children}
        <FloatingCallButton />
      </body>
    </html>
  );
}
