import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://www.taxi-tignieu.fr"),
  title: {
    default: "Taxi Conventionné Tignieu-Jameyzieu — Lyon · Ain · Isère",
    template: "%s | Taxi Tignieu",
  },
  description:
    "Taxi conventionné à Tignieu-Jameyzieu. Transport de personnes, colis urgents, transferts aéroport Lyon Saint-Exupéry, gares. Volkswagen Tiguan 7 places. Remorque disponible. Devis gratuit.",
  keywords: [
    "taxi conventionné", "taxi Tignieu-Jameyzieu", "taxi Lyon", "taxi Ain",
    "taxi Isère", "transfert aéroport Lyon Saint-Exupéry", "transport colis urgent",
    "taxi avec remorque", "taxi 7 places", "Tiguan taxi", "taxi France",
  ],
  authors: [{ name: "Taxi Tignieu" }],
  openGraph: {
    type: "website", locale: "fr_FR",
    url: "https://www.taxi-tignieu.fr", siteName: "Taxi Tignieu",
    title: "Taxi Conventionné — Lyon · Ain · Isère",
    description: "Taxi conventionné de Tignieu-Jameyzieu. Volkswagen Tiguan 7 places. Devis gratuit.",
    images: [{ url: "https://images.unsplash.com/photo-1617788138017-80ad40651399?auto=format&fit=crop&w=1200&q=80", width: 1200, height: 630 }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Taxi Conventionné — Lyon · Ain · Isère",
    description: "Taxi conventionné. Tiguan 7 places. Devis gratuit.",
  },
  robots: {
    index: true, follow: true,
    googleBot: { index: true, follow: true, "max-video-preview": -1, "max-image-preview": "large", "max-snippet": -1 },
  },
  alternates: { canonical: "https://www.taxi-tignieu.fr" },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="fr">
      <head>
        <meta name="theme-color" content="#ffffff" />
      </head>
      <body className="bg-background text-foreground noise">
        {children}
      </body>
    </html>
  );
}
