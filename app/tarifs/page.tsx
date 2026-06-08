import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import TarifsContent from "@/components/pages/TarifsContent";

export const metadata: Metadata = {
  title: "Tarifs Taxi SPM — Estimations & Devis Gratuit | Villebois Ain",
  description:
    "Consultez les tarifs indicatifs du taxi SPM. Transferts aéroport, transport médical CPAM, longue distance. Devis gratuit et tarif fixe garantis. ☎ 07 67 75 18 98.",
  keywords: ["tarifs taxi Ain", "prix taxi Lyon aéroport", "tarif taxi conventionné CPAM", "devis taxi Villebois"],
  alternates: { canonical: "https://www.spm-taxi.fr/tarifs" },
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
