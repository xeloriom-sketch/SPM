import type { Metadata } from "next";
import Link from "next/link";
import { ArrowLeft, Phone, CheckCircle, ArrowRight, Package } from "lucide-react";

export const metadata: Metadata = {
  title: "Taxi avec Remorque & Transport Colis Urgent — SPM Ain 01",
  description:
    "Taxi SPM avec attache-remorque homologuée. Transport de matériel lourd, colis urgents, déménagements partiels. Aussi livraison de lettres urgentes. Ain, Lyon, Isère. ☎ 07 67 75 18 98.",
  keywords: [
    "taxi avec remorque Ain",
    "taxi remorque Lyon",
    "transport colis urgent taxi",
    "livraison urgent Ain 01",
    "taxi attache remorque",
    "transport matériel lourd taxi",
    "taxi déménagement Ain",
    "coursier urgent Ain Lyon",
    "transport express Lyon Ain",
  ],
  alternates: { canonical: "https://www.spm-taxi.fr/taxi-remorque-ain" },
  openGraph: {
    title: "Taxi avec Remorque & Colis Urgent — SPM Ain",
    description: "Taxi SPM avec remorque homologuée pour transport de matériel et colis urgents dans l'Ain, Lyon et Isère. 07 67 75 18 98.",
    url: "https://www.spm-taxi.fr/taxi-remorque-ain",
    type: "website",
    locale: "fr_FR",
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "Taxi avec Remorque et Transport Colis Urgent",
  provider: {
    "@type": "TaxiService",
    name: "SPM — Taxi Conventionné",
    telephone: "+33767751898",
    address: {
      "@type": "PostalAddress",
      streetAddress: "951 route des hauts fourneaux",
      addressLocality: "Villebois",
      postalCode: "01150",
      addressCountry: "FR",
    },
  },
  areaServed: [
    { "@type": "AdministrativeArea", name: "Ain" },
    { "@type": "City", name: "Lyon" },
    { "@type": "AdministrativeArea", name: "Isère" },
  ],
  serviceType: "Transport avec remorque et colis urgents",
};

const usecases = [
  { title: "Colis urgents", desc: "Documents importants, pièces détachées, matériel médical — livraison express avec traçabilité." },
  { title: "Matériel professionnel", desc: "Outils, équipements, mobilier. La remorque homologuée permet de transporter des charges lourdes." },
  { title: "Véhicule en panne", desc: "Votre voiture est immobilisée ? La remorque permet de la déplacer vers un garage rapidement." },
  { title: "Déménagement partiel", desc: "Pas besoin d'un camion entier pour quelques meubles ou cartons. SPM s'adapte à vos besoins." },
  { title: "Transport animalier", desc: "Chevaux, animaux de grande taille. La remorque offre la capacité nécessaire en toute sécurité." },
  { title: "Livraison B2B", desc: "Coursier entre entreprises, livraisons urgentes de prototypes ou d'échantillons dans l'Ain et au-delà." },
];

export default function RemorquePage() {
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
            Service · Remorque & Colis
          </span>
          <h1 className="text-4xl sm:text-5xl font-semibold tracking-tight text-black leading-tight mb-6">
            Taxi avec Remorque<br />
            <span className="text-black/30">& Colis Urgent</span>
          </h1>
          <p className="text-base text-[#555] leading-relaxed max-w-2xl mb-8">
            Taxi SPM dispose d&apos;une attache-remorque homologuée sur le Volkswagen Tiguan Allspace.
            Transport de matériel lourd, colis urgents, déménagements partiels et livraisons express
            dans l&apos;Ain, Lyon et l&apos;Isère — et au-delà sur devis.
          </p>
          <div className="flex flex-wrap gap-3">
            <a
              href="tel:+33767751898"
              className="inline-flex items-center gap-2 rounded-full bg-black text-white px-6 py-3 text-sm font-semibold hover:bg-[#111] transition-colors"
            >
              <Phone className="h-4 w-4" />
              Appeler maintenant
            </a>
            <a
              href="/#contact"
              className="inline-flex items-center gap-2 rounded-full border border-black/15 text-black px-6 py-3 text-sm font-semibold hover:border-black/30 transition-colors"
            >
              Demander un devis
              <ArrowRight className="h-4 w-4" />
            </a>
          </div>
        </div>

        {/* Spécifications */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-16">
          {[
            { label: "Remorque", value: "Attache-remorque homologuée", sub: "Volkswagen Tiguan Allspace" },
            { label: "Colis", value: "Livraison rapide & traçable", sub: "Ain · Lyon · Isère · France" },
            { label: "Disponibilité", value: "24h/24 · 7j/7", sub: "Urgences acceptées" },
          ].map((s) => (
            <div key={s.label} className="bg-white rounded-2xl p-5 border border-black/[0.06]">
              <Package className="h-5 w-5 text-black/30 mb-3" />
              <p className="text-[10px] font-semibold tracking-wider uppercase text-black/40 mb-1">{s.label}</p>
              <p className="text-sm font-semibold text-black">{s.value}</p>
              <p className="text-xs text-black/40 mt-1">{s.sub}</p>
            </div>
          ))}
        </div>

        {/* Cas d'usage */}
        <section className="mb-16">
          <h2 className="text-2xl font-semibold tracking-tight text-black mb-8">
            Pour quoi faire appel à SPM ?
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {usecases.map((u) => (
              <div key={u.title} className="bg-white rounded-2xl p-6 border border-black/[0.06]">
                <div className="flex items-start gap-3">
                  <CheckCircle className="h-4 w-4 text-black shrink-0 mt-0.5" />
                  <div>
                    <h3 className="text-sm font-semibold text-black mb-1">{u.title}</h3>
                    <p className="text-xs text-[#555] leading-relaxed">{u.desc}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Colis urgents */}
        <section className="mb-16">
          <h2 className="text-2xl font-semibold tracking-tight text-black mb-4">
            Service coursier & colis urgents
          </h2>
          <p className="text-sm text-[#555] leading-relaxed mb-8 max-w-2xl">
            Pour vos lettres recommandées urgentes, pièces de rechange, documents juridiques ou médicaux :
            SPM assure une livraison express de porte à porte, avec confirmation de réception.
            Disponible dans tout l&apos;Ain, Lyon, l&apos;Isère, et sur toute la France sur devis.
          </p>
          <div className="bg-white rounded-2xl border border-black/[0.06] overflow-hidden">
            {[
              "Délai de livraison garanti selon distance",
              "Confirmation de remise à la destination",
              "Transport de plis recommandés et colis fragiles",
              "Service disponible 24h/24 pour urgences",
              "Tarif fixe convenu avant chaque mission",
            ].map((point, i, arr) => (
              <div
                key={point}
                className={`flex items-center gap-3 px-6 py-4 ${i !== arr.length - 1 ? "border-b border-black/[0.06]" : ""}`}
              >
                <CheckCircle className="h-4 w-4 text-black/25 shrink-0" />
                <span className="text-sm text-black">{point}</span>
              </div>
            ))}
          </div>
        </section>

        <div className="bg-black text-white rounded-3xl p-10 text-center">
          <h2 className="text-2xl font-semibold mb-3">Un besoin urgent ?</h2>
          <p className="text-white/50 text-sm mb-8">Remorque · Colis · Matériel · Ain & France entière</p>
          <div className="flex flex-wrap justify-center gap-4">
            <a
              href="tel:+33767751898"
              className="inline-flex items-center gap-2 rounded-full bg-white text-black px-6 py-3 text-sm font-semibold hover:bg-white/90 transition-colors"
            >
              <Phone className="h-4 w-4" />
              07 67 75 18 98
            </a>
            <a
              href="/#contact"
              className="inline-flex items-center gap-2 rounded-full border border-white/25 text-white px-6 py-3 text-sm font-semibold hover:border-white/50 transition-colors"
            >
              Devis en ligne
            </a>
          </div>
        </div>

      </main>

      <footer className="border-t border-black/[0.06] px-6 py-8 text-center">
        <p className="text-xs text-black/30">
          © 2026 SPM — Taxi Conventionné · Villebois (Ain 01) ·{" "}
          <Link href="/" className="underline underline-offset-2">Retour au site</Link>
        </p>
      </footer>
    </div>
  );
}
