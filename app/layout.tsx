import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://www.spm-taxi.fr"),
  title: {
    default: "SPM — Taxi Conventionné Tignieu-Jameyzieu | Lyon · Ain · Isère",
    template: "%s | SPM Taxi",
  },
  description:
    "SPM, taxi conventionné CPAM basé à Tignieu-Jameyzieu. Volkswagen Tiguan 7 places. Transferts aéroport Lyon Saint-Exupéry, gares TGV, transport médical, colis urgents, remorque. Disponible 7j/7 24h/24. Devis gratuit sous 2h.",
  keywords: [
    "SPM taxi", "taxi conventionné CPAM", "taxi Tignieu-Jameyzieu",
    "taxi Lyon", "taxi Ain", "taxi Isère", "transfert aéroport Lyon",
    "transfert Lyon Saint-Exupéry", "transport médical taxi",
    "taxi 7 places", "Volkswagen Tiguan taxi", "colis urgent taxi",
    "taxi avec remorque", "taxi Ambérieu-en-Bugey", "taxi Bourgoin-Jallieu",
    "taxi longue distance France", "taxi conventionné Ain",
  ],
  authors: [{ name: "SPM Taxi" }],
  creator: "SPM Taxi",
  openGraph: {
    type: "website",
    locale: "fr_FR",
    url: "https://www.spm-taxi.fr",
    siteName: "SPM — Taxi Conventionné",
    title: "SPM — Taxi Conventionné | Lyon · Ain · Isère",
    description:
      "Taxi conventionné CPAM à Tignieu-Jameyzieu. Volkswagen Tiguan 7 places. Disponible 7j/7. Devis gratuit.",
    images: [
      {
        url: "https://images.unsplash.com/photo-1533473359331-0135ef1b58bf?auto=format&fit=crop&w=1200&q=80",
        width: 1200,
        height: 630,
        alt: "SPM Taxi — Volkswagen Tiguan 7 places",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "SPM — Taxi Conventionné | Lyon · Ain · Isère",
    description: "Taxi conventionné CPAM. Tiguan 7 places. Disponible 7j/7. Devis gratuit.",
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
  verification: { google: "GOOGLE_VERIFICATION_CODE" },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="fr" className="scroll-smooth">
      <head>
        <meta name="theme-color" content="#0d0d0d" />
        <meta name="color-scheme" content="light dark" />
        <meta name="viewport" content="width=device-width, initial-scale=1, viewport-fit=cover" />
        <link rel="preconnect" href="https://res.cloudinary.com" />
      </head>
      <body className="bg-white text-[#080808] overflow-x-hidden noise antialiased">
        {children}
      </body>
    </html>
  );
}
