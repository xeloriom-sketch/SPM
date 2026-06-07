import type { Metadata } from "next";
import { Inter, Sora } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const sora = Sora({
  subsets: ["latin"],
  variable: "--font-sora",
  weight: ["400", "500", "600", "700", "800"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://www.taxi-tignieu.fr"),
  title: {
    default: "Taxi Conventionné Tignieu-Jameyzieu — Lyon · Ain · Isère",
    template: "%s | Taxi Tignieu",
  },
  description:
    "Taxi conventionné à Tignieu-Jameyzieu. Transport de personnes, colis urgents, transferts aéroport Lyon Saint-Exupéry, gares. Volkswagen Tiguan 7 places. Remorque disponible. Devis gratuit.",
  keywords: [
    "taxi conventionné",
    "taxi Tignieu-Jameyzieu",
    "taxi Lyon",
    "taxi Ain",
    "taxi Isère",
    "transfert aéroport Lyon Saint-Exupéry",
    "transport colis urgent",
    "taxi avec remorque",
    "VTC Lyon",
    "taxi 7 places",
    "Tiguan taxi",
    "taxi France",
  ],
  authors: [{ name: "Taxi Tignieu" }],
  creator: "Taxi Tignieu",
  openGraph: {
    type: "website",
    locale: "fr_FR",
    url: "https://www.taxi-tignieu.fr",
    siteName: "Taxi Tignieu",
    title: "Taxi Conventionné — Lyon · Ain · Isère | Tignieu-Jameyzieu",
    description:
      "Taxi conventionné de Tignieu-Jameyzieu. Transferts gare & aéroport, transport colis urgent, remorque disponible. Volkswagen Tiguan 7 places. Devis gratuit, disponible 7j/7.",
    images: [
      {
        url: "https://images.unsplash.com/photo-1549317661-bd32c8ce0db2?auto=format&fit=crop&w=1200&q=80",
        width: 1200,
        height: 630,
        alt: "Taxi Conventionné Tignieu-Jameyzieu",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Taxi Conventionné — Lyon · Ain · Isère",
    description:
      "Taxi conventionné de Tignieu-Jameyzieu. Transferts, colis urgents, remorque. Tiguan 7 places. Devis gratuit.",
    images: [
      "https://images.unsplash.com/photo-1549317661-bd32c8ce0db2?auto=format&fit=crop&w=1200&q=80",
    ],
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
  alternates: {
    canonical: "https://www.taxi-tignieu.fr",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr" className={`${inter.variable} ${sora.variable} bg-background`}>
      <head>
        <meta name="theme-color" content="#080c0a" />
      </head>
      <body className="font-sans bg-background text-foreground grain">
        {children}
      </body>
    </html>
  );
}
