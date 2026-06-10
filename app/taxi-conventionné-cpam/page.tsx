import type { Metadata } from "next";
import Link from "next/link";
import { ArrowLeft, Phone, Shield, FileText, CheckCircle, ArrowRight } from "lucide-react";

export const metadata: Metadata = {
  title: "Taxi Conventionné CPAM — Transport Médical Remboursé Ain (01) | SPM Villebois",
  description:
    "SPM Taxi conventionné CPAM à Villebois (Ain 01). Transport médical sur prescription médicale pris en charge par l'Assurance Maladie. Zéro avance de frais. Chimiothérapie, dialyse, hospitalisation, ALD. ☎ 07 67 75 18 98.",
  keywords: [
    "taxi conventionné CPAM Ain 01", "transport médical conventionné Ain",
    "taxi médical Villebois CPAM", "taxi remboursé sécurité sociale Ain",
    "transport CPAM 01150 Villebois", "taxi chimiothérapie Ain",
    "taxi dialyse Ain 01", "taxi ALD Assurance Maladie Ain",
    "taxi conventionné prescription médicale Ain", "VSL taxi conventionné Ain",
    "taxi médical Ambérieu CPAM", "transport médical Bourg-en-Bresse taxi",
    "zéro avance frais taxi médical Ain", "taxi hospitalisé Ain",
  ],
  alternates: { canonical: "https://taxispm.fr/taxi-conventionné-cpam" },
  openGraph: {
    title: "Taxi Conventionné CPAM — Transport Médical Remboursé | SPM Ain (01)",
    description: "Transport médical 100% pris en charge CPAM sur prescription. Chimiothérapie, dialyse, ALD — zéro avance de frais. SPM Taxi Villebois (Ain 01). 07 67 75 18 98.",
    url: "https://taxispm.fr/taxi-conventionné-cpam",
    type: "website",
    locale: "fr_FR",
    images: [{ url: "/image/tiguan-front-quarter.webp", alt: "Taxi conventionné CPAM transport médical Ain SPM" }],
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": ["LocalBusiness", "TaxiService"],
      "@id": "https://taxispm.fr/#business",
      name: "SPM — Taxi Conventionné CPAM",
      description: "Taxi conventionné CPAM agréé par l'Assurance Maladie. Transport médical sur prescription médicale dans l'Ain, Lyon et Isère. Zéro avance de frais.",
      telephone: "+33767751898",
      url: "https://taxispm.fr/taxi-conventionné-cpam",
      address: {
        "@type": "PostalAddress",
        streetAddress: "951 route des hauts fourneaux",
        addressLocality: "Villebois",
        postalCode: "01150",
        addressRegion: "Auvergne-Rhône-Alpes",
        addressCountry: "FR",
      },
      areaServed: [
        { "@type": "AdministrativeArea", name: "Ain", alternateName: "01" },
        { "@type": "AdministrativeArea", name: "Isère", alternateName: "38" },
        { "@type": "AdministrativeArea", name: "Rhône", alternateName: "69" },
      ],
      hasOfferCatalog: {
        "@type": "OfferCatalog",
        name: "Transport médical conventionné CPAM",
        itemListElement: [
          { "@type": "Offer", name: "Transport médical chimiothérapie", itemOffered: { "@type": "Service", name: "Taxi chimiothérapie Ain" } },
          { "@type": "Offer", name: "Transport médical dialyse", itemOffered: { "@type": "Service", name: "Taxi dialyse Ain" } },
          { "@type": "Offer", name: "Transport médical hospitalisation ALD", itemOffered: { "@type": "Service", name: "Taxi hospitalisation ALD Ain" } },
        ],
      },
    },
    {
      "@type": "BreadcrumbList",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Accueil", item: "https://taxispm.fr" },
        { "@type": "ListItem", position: 2, name: "Taxi Conventionné CPAM", item: "https://taxispm.fr/taxi-conventionné-cpam" },
      ],
    },
  ],
};

const etapes = [
  { num: "01", title: "Prescription médicale", desc: "Votre médecin vous délivre une prescription de transport (bon de transport CPAM)." },
  { num: "02", title: "Réservation", desc: "Contactez SPM par téléphone ou formulaire. Communiquez la date, heure et destination." },
  { num: "03", title: "Transport", desc: "Le chauffeur vous prend en charge à domicile et vous conduit à votre rendez-vous médical." },
  { num: "04", title: "Prise en charge", desc: "SPM gère directement la facturation avec l'Assurance Maladie. Vous ne payez que le ticket modérateur si applicable." },
];

export default function CpamPage() {
  return (
    <div className="min-h-screen bg-[#f8f9fa] font-sans">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <header className="bg-black text-white px-6 py-4 flex items-center gap-4">
        <Link href="/" className="flex items-center gap-2 text-white/60 hover:text-white transition-colors text-sm">
          <ArrowLeft className="h-4 w-4" />
          SPM Taxi
        </Link>
      </header>

      <main className="max-w-4xl mx-auto px-6 py-16">

        <div className="mb-16">
          <span className="text-[10px] font-bold tracking-[0.3em] uppercase text-black/40 mb-4 block">
            Service · Transport Médical
          </span>
          <h1 className="text-4xl sm:text-5xl font-semibold tracking-tight text-black leading-tight mb-6">
            Taxi Conventionné<br />
            <span className="text-black/30">CPAM — Ain (01)</span>
          </h1>
          <p className="text-base text-[#555] leading-relaxed max-w-2xl mb-8">
            Taxi SPM est agréé par la Caisse Primaire d&apos;Assurance Maladie pour les transports médicaux.
            Sur prescription de votre médecin, vos trajets vers les hôpitaux, cliniques et centres médicaux
            sont pris en charge par l&apos;Assurance Maladie.
          </p>
          <div className="flex flex-wrap gap-3">
            <a
              href="tel:+33767751898"
              className="inline-flex items-center gap-2 rounded-full bg-black text-white px-6 py-3 text-sm font-semibold hover:bg-[#111] transition-colors"
            >
              <Phone className="h-4 w-4" />
              07 67 75 18 98
            </a>
            <a
              href="/#contact"
              className="inline-flex items-center gap-2 rounded-full border border-black/15 text-black px-6 py-3 text-sm font-semibold hover:border-black/30 transition-colors"
            >
              Réserver en ligne
              <ArrowRight className="h-4 w-4" />
            </a>
          </div>
        </div>

        {/* Avantages */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-16">
          {[
            { icon: Shield, title: "Agréé CPAM", desc: "Convention avec l'Assurance Maladie pour la prise en charge des transports médicaux." },
            { icon: FileText, title: "Sur prescription", desc: "Un bon de transport délivré par votre médecin suffit pour bénéficier du remboursement." },
            { icon: CheckCircle, title: "Zéro avance", desc: "SPM facture directement la CPAM. Vous n'avancez pas les frais." },
          ].map(({ icon: Icon, title, desc }) => (
            <div key={title} className="bg-white rounded-2xl p-6 border border-black/[0.06]">
              <Icon className="h-6 w-6 text-black mb-4" />
              <h3 className="text-sm font-semibold text-black mb-2">{title}</h3>
              <p className="text-xs text-[#555] leading-relaxed">{desc}</p>
            </div>
          ))}
        </div>

        {/* Étapes */}
        <section className="mb-16">
          <h2 className="text-2xl font-semibold tracking-tight text-black mb-8">
            Comment fonctionne le transport médical ?
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {etapes.map((e) => (
              <div key={e.num} className="bg-white rounded-2xl p-6 border border-black/[0.06]">
                <span className="text-[10px] font-bold tracking-[0.25em] text-black/25 uppercase mb-4 block">{e.num}</span>
                <h3 className="text-sm font-semibold text-black mb-2">{e.title}</h3>
                <p className="text-xs text-[#555] leading-relaxed">{e.desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Destinations fréquentes */}
        <section className="mb-16">
          <h2 className="text-2xl font-semibold tracking-tight text-black mb-8">
            Destinations médicales fréquentes
          </h2>
          <div className="bg-white rounded-2xl border border-black/[0.06] overflow-hidden">
            {[
              "Hôpital Fleyriat — Bourg-en-Bresse",
              "Clinique Convert — Bourg-en-Bresse",
              "Hôpital Édouard Herriot — Lyon",
              "Hôpital de la Croix-Rousse — Lyon",
              "Clinique du Parc — Lyon",
              "Centre Hospitalier Ambérieu-en-Bugey",
              "Institut de Cancérologie des Hospices Civils — Lyon",
              "Centre de dialyse — Ain et Rhône",
            ].map((dest, i, arr) => (
              <div
                key={dest}
                className={`flex items-center gap-3 px-6 py-4 ${i !== arr.length - 1 ? "border-b border-black/[0.06]" : ""}`}
              >
                <CheckCircle className="h-4 w-4 text-black/25 shrink-0" />
                <span className="text-sm text-black">{dest}</span>
              </div>
            ))}
          </div>
        </section>

        {/* FAQ */}
        <section className="mb-16">
          <h2 className="text-2xl font-semibold tracking-tight text-black mb-8">Questions fréquentes</h2>
          <div className="space-y-4">
            {[
              {
                q: "Quelles maladies ouvrent droit au transport médical remboursé ?",
                a: "Affections de longue durée (ALD), dialyse, chimiothérapie, radiothérapie, hospitalisation, et autres situations définies par la CPAM. Votre médecin vous indiquera si vous êtes éligible.",
              },
              {
                q: "Faut-il une ordonnance à chaque trajet ?",
                a: "Pour les traitements réguliers (dialyse, chimio), une prescription mensuelle ou trimestrielle peut couvrir plusieurs trajets. Pour une hospitalisation, une prescription unique suffit.",
              },
              {
                q: "Puis-je choisir mon taxi conventionné ?",
                a: "Oui, vous avez le libre choix de votre taxi conventionné. SPM intervient dans tout le département de l'Ain et les zones limitrophes (Lyon, Isère).",
              },
            ].map(({ q, a }) => (
              <div key={q} className="bg-white rounded-2xl p-6 border border-black/[0.06]">
                <h3 className="text-sm font-semibold text-black mb-2">{q}</h3>
                <p className="text-sm text-[#555] leading-relaxed">{a}</p>
              </div>
            ))}
          </div>
        </section>

        <div className="bg-black text-white rounded-3xl p-10 text-center">
          <h2 className="text-2xl font-semibold mb-3">Besoin d&apos;un transport médical ?</h2>
          <p className="text-white/50 text-sm mb-8">Conventionné CPAM · Ain (01) · Disponible 7j/7</p>
          <a
            href="tel:+33767751898"
            className="inline-flex items-center gap-2 rounded-full bg-white text-black px-6 py-3 text-sm font-semibold hover:bg-white/90 transition-colors"
          >
            <Phone className="h-4 w-4" />
            07 67 75 18 98
          </a>
        </div>

      </main>

      <footer className="border-t border-black/[0.06] px-6 py-8 text-center">
        <p className="text-xs text-black/30">
          © 2026 SPM — Taxi Conventionné CPAM · Villebois (Ain 01) ·{" "}
          <Link href="/" className="underline underline-offset-2">Retour au site</Link>
        </p>
      </footer>
    </div>
  );
}
