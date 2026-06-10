import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import TarifsContent from "@/components/pages/TarifsContent";

export const metadata: Metadata = {
  title: "Tarifs SPM Taxi — Aéroport, CPAM, Longue Distance | Ain",
  description:
    "Tarifs taxi SPM Villebois (Ain 01) : transfert Lyon Saint-Exupéry à partir de 65 €, transport médical CPAM remboursé, longue distance tarif fixe sur devis. Aucune surprise. Devis gratuit sous 2h. ☎ 07 67 75 18 98.",
  keywords: [
    "tarifs taxi Ain 01", "prix taxi Lyon Saint-Exupéry Ain", "tarif taxi conventionné CPAM Ain",
    "devis taxi Villebois", "prix taxi Villebois Lyon", "tarif taxi médical conventionné",
    "prix transfert aéroport Ain", "tarif taxi longue distance Lyon", "taxi pas cher Ain 01",
    "devis gratuit taxi Ain", "prix taxi Ambérieu Lyon", "tarif fixe taxi Ain",
  ],
  openGraph: {
    title: "Tarifs Taxi SPM — Aéroport, CPAM, Longue Distance | Ain (01)",
    description: "Tarifs transparents et fixes : transfert aéroport Lyon à partir de 65 €, transport médical CPAM remboursé, longue distance sur devis. SPM Taxi Villebois.",
    url: "https://taxispm.fr/tarifs",
    images: [{ url: "/image/tiguan-front-quarter.webp", alt: "Tarifs SPM Taxi Ain" }],
  },
  alternates: { canonical: "https://taxispm.fr/tarifs" },
};

export default function TarifsPage() {
  return (
    <div className="min-h-screen bg-white font-sans">
      <Navbar />
      <TarifsContent />
      <Footer />
    </div>
  );
}
