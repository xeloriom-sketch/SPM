import type { Metadata } from "next";
import BusinessCard from "@/components/BusinessCard";

export const metadata: Metadata = {
  title: "Carte de visite — SPM Taxi | Conventionné CPAM Villebois Ain (01)",
  description:
    "Carte de visite digitale de SPM Taxi. Taxi conventionné CPAM basé à Villebois (Ain 01). Volkswagen Tiguan 7 places. 7j/7 24h/24. ☎ 07 67 75 18 98.",
  alternates: { canonical: "https://taxispm.fr/carte-de-visite" },
  openGraph: {
    title: "Carte de visite SPM Taxi — Conventionné CPAM Villebois",
    description: "SPM Taxi · 07 67 75 18 98 · Taxi conventionné CPAM · Villebois (Ain 01) · 7j/7 24h/24",
    url: "https://taxispm.fr/carte-de-visite",
    images: [{ url: "/og-image.jpeg", alt: "SPM Taxi — Carte de visite" }],
  },
};

export default function CarteDeVisitePage() {
  return <BusinessCard />;
}
