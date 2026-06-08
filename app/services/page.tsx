import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ServicesContent from "@/components/pages/ServicesContent";

export const metadata: Metadata = {
  title: "Services Taxi SPM — Transferts, Médical, Colis, Remorque | Ain",
  description:
    "Tous les services du taxi SPM : transferts aéroport Lyon, transport médical CPAM, colis urgents, remorque, longue distance. Villebois, Ain. ☎ 07 67 75 18 98.",
  keywords: ["services taxi Ain", "taxi aéroport Lyon", "taxi médical CPAM", "colis urgent taxi", "taxi remorque"],
  alternates: { canonical: "https://www.spm-taxi.fr/services" },
};

export default function ServicesPage() {
  return (
    <div className="min-h-screen bg-white font-sans">
      <Navbar />
      <ServicesContent />
      <Footer />
    </div>
  );
}
