import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import AProposContent from "@/components/pages/AProposContent";

export const metadata: Metadata = {
  title: "À Propos — Taxi SPM | Chauffeur Conventionné Villebois Ain",
  description:
    "Découvrez SPM Taxi, chauffeur taxi conventionné CPAM basé à Villebois (Ain 01). Professionnel, ponctuel, disponible 7j/7. Note Google 4,9/5. ☎ 07 67 75 18 98.",
  keywords: ["à propos taxi SPM", "chauffeur taxi Villebois", "taxi conventionné Ain", "taxi professionnel Lyon"],
  alternates: { canonical: "https://www.spm-taxi.fr/a-propos" },
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
