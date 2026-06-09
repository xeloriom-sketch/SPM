import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import AProposContent from "@/components/pages/AProposContent";

export const metadata: Metadata = {
  title: "À Propos — SPM Taxi | Chauffeur Conventionné CPAM Villebois Ain (01)",
  description:
    "SPM Taxi : chauffeur professionnel conventionné CPAM basé à Villebois (Ain 01). Carte professionnelle, agrément Assurance Maladie, assurance RC pro. Volkswagen Tiguan 7 places. Note Google 4,9/5 sur 9 avis. Disponible 7j/7 24h/24. ☎ 07 67 75 18 98.",
  keywords: [
    "à propos taxi SPM Villebois", "chauffeur taxi conventionné Ain", "taxi professionnel Lyon Ain",
    "taxi agréé CPAM Ain 01", "SPM taxi Villebois présentation", "chauffeur ponctuel Ain",
    "taxi carte professionnelle Ain", "taxi 4,9 étoiles Google Ain", "taxi fiable Ain 01",
    "qui est SPM taxi", "taxi conventionné Villebois", "meilleur taxi Ain",
  ],
  openGraph: {
    title: "À Propos SPM Taxi — Chauffeur Conventionné CPAM | Villebois Ain",
    description: "Chauffeur professionnel conventionné CPAM, Tiguan 7 places, note 4,9/5 Google. SPM Taxi — Villebois (Ain 01). 7j/7 24h/24.",
    url: "https://taxispm.fr/a-propos",
    images: [{ url: "/image/tiguan-front-quarter.webp", alt: "SPM Taxi — Chauffeur Villebois Ain" }],
  },
  alternates: { canonical: "https://taxispm.fr/a-propos" },
};

export default function AProposPage() {
  return (
    <div className="min-h-screen bg-white font-sans">
      <Navbar />
      <AProposContent />
      <Footer />
    </div>
  );
}
