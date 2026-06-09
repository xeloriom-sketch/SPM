import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ServicesContent from "@/components/pages/ServicesContent";

export const metadata: Metadata = {
  title: "Services — Taxi Conventionné SPM | Aéroport, CPAM, Colis, Remorque | Ain (01)",
  description:
    "SPM Taxi propose 5 services : transferts aéroport Lyon Saint-Exupéry & gares TGV, transport médical conventionné CPAM (zéro avance de frais), colis urgents porte-à-porte, taxi avec remorque homologuée, déplacements longue distance France entière. Villebois, Ain 01. ☎ 07 67 75 18 98. Devis gratuit sous 2h.",
  keywords: [
    "services taxi Ain", "taxi aéroport Lyon Saint-Exupéry Ain", "taxi médical CPAM Ain",
    "transport médical conventionné Ain", "colis urgent taxi Ain", "taxi remorque Ain 01",
    "taxi longue distance Lyon", "taxi conventionné prescription médicale", "taxi 7 places services",
    "taxi Villebois services", "transfert gare TGV Ain", "taxi chimiothérapie Ain",
  ],
  openGraph: {
    title: "Services Taxi SPM — Aéroport, CPAM, Colis, Remorque | Ain (01)",
    description: "5 services professionnels : transferts aéroport, transport médical CPAM remboursé, colis urgents, remorque, longue distance. Villebois Ain. 7j/7 24h/24.",
    url: "https://taxispm.fr/services",
    images: [{ url: "/image/tiguan-front-quarter.png", alt: "SPM Taxi — Services Ain" }],
  },
  alternates: { canonical: "https://taxispm.fr/services" },
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
