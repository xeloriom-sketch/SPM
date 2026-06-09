import type { Metadata } from "next";
import Link from "next/link";
import { ArrowLeft, Phone, MapPin, Clock, CheckCircle, ArrowRight } from "lucide-react";

export const metadata: Metadata = {
  title: "Taxi Longue Distance France Entière — SPM Villebois Ain (01) | Tarif Fixe",
  description:
    "Taxi SPM : déplacements longue distance partout en France depuis l'Ain, Lyon, Isère. Paris, Marseille, Bordeaux, Genève, Nice, Strasbourg. Volkswagen Tiguan 7 places. Tarif fixe sur devis gratuit. ☎ 07 67 75 18 98.",
  keywords: [
    "taxi longue distance France depuis Ain", "taxi Lyon Paris Ain",
    "taxi Lyon Marseille Ain", "taxi Lyon Genève depuis Ain",
    "taxi longue distance Villebois", "chauffeur privé longue distance Ain",
    "taxi France entière depuis Lyon", "taxi Paris depuis Ain 01",
    "taxi interurbain Lyon Ain", "taxi grande distance Ain 01",
    "taxi Lyon Bordeaux Ain", "taxi Lyon Nice Ain",
    "taxi aller retour France Ain", "tarif fixe taxi longue distance Ain",
  ],
  alternates: { canonical: "https://www.spm-taxi.fr/taxi-longue-distance" },
  openGraph: {
    title: "Taxi Longue Distance France Entière — SPM Ain | Tarif Fixe Devis Gratuit",
    description: "Paris, Marseille, Genève, Bordeaux depuis l'Ain — tarif fixe sur devis. Volkswagen Tiguan 7 places, confort SUV. SPM Taxi Villebois (Ain 01). 07 67 75 18 98.",
    url: "https://www.spm-taxi.fr/taxi-longue-distance",
    type: "website",
    locale: "fr_FR",
    images: [{ url: "/image/tiguan-front-quarter.png", alt: "Taxi longue distance France SPM Ain Villebois" }],
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "Taxi Longue Distance France Entière",
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
  areaServed: { "@type": "Country", name: "France" },
  serviceType: "Taxi longue distance",
  description: "Transport en taxi longue distance partout en France depuis l'Ain, Lyon et l'Isère.",
};

const destinations = [
  { city: "Paris", distance: "~460 km", approx: "~4h30" },
  { city: "Marseille", distance: "~310 km", approx: "~3h" },
  { city: "Bordeaux", distance: "~560 km", approx: "~5h" },
  { city: "Genève", distance: "~150 km", approx: "~1h30" },
  { city: "Nice", distance: "~430 km", approx: "~4h" },
  { city: "Strasbourg", distance: "~540 km", approx: "~4h45" },
  { city: "Nantes", distance: "~660 km", approx: "~6h" },
  { city: "Toulouse", distance: "~520 km", approx: "~4h30" },
];

export default function LongueDistancePage() {
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
            Service · Longue Distance
          </span>
          <h1 className="text-4xl sm:text-5xl font-semibold tracking-tight text-black leading-tight mb-6">
            Taxi Longue Distance<br />
            <span className="text-black/30">France Entière</span>
          </h1>
          <p className="text-base text-[#555] leading-relaxed max-w-2xl mb-8">
            Besoin de rejoindre Paris, Marseille, Genève ou n&apos;importe quelle ville française ?
            Taxi SPM assure vos déplacements longue distance au départ de l&apos;Ain, Lyon et l&apos;Isère.
            Volkswagen Tiguan Allspace 7 places, confort absolu, tarif fixe sur devis.
          </p>
          <div className="flex flex-wrap gap-3">
            <a
              href="tel:+33767751898"
              className="inline-flex items-center gap-2 rounded-full bg-black text-white px-6 py-3 text-sm font-semibold hover:bg-[#111] transition-colors"
            >
              <Phone className="h-4 w-4" />
              Obtenir un devis
            </a>
            <a
              href="/#contact"
              className="inline-flex items-center gap-2 rounded-full border border-black/15 text-black px-6 py-3 text-sm font-semibold hover:border-black/30 transition-colors"
            >
              Formulaire de contact
              <ArrowRight className="h-4 w-4" />
            </a>
          </div>
        </div>

        {/* Points forts */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-16">
          {[
            { icon: CheckCircle, title: "Tarif fixe", desc: "Prix convenu à l'avance, sans surprise. Le tarif est établi lors du devis et ne change pas." },
            { icon: MapPin, title: "Porte-à-porte", desc: "Prise en charge à votre domicile et dépôt à votre destination finale, peu importe la distance." },
            { icon: Clock, title: "Disponibilité", desc: "Départ à l'heure qui vous convient, 24h/24 et 7j/7, y compris les jours fériés." },
            { icon: CheckCircle, title: "7 passagers", desc: "Volkswagen Tiguan Allspace 7 places — idéal pour les groupes et les familles nombreuses." },
          ].map(({ icon: Icon, title, desc }) => (
            <div key={title} className="bg-white rounded-2xl p-6 border border-black/[0.06] flex gap-4">
              <Icon className="h-5 w-5 text-black shrink-0 mt-0.5" />
              <div>
                <h3 className="text-sm font-semibold text-black mb-1">{title}</h3>
                <p className="text-xs text-[#555] leading-relaxed">{desc}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Destinations */}
        <section className="mb-16">
          <h2 className="text-2xl font-semibold tracking-tight text-black mb-8">
            Destinations populaires depuis Lyon / l&apos;Ain
          </h2>
          <div className="bg-white rounded-2xl border border-black/[0.06] overflow-hidden">
            {destinations.map((d, i) => (
              <div
                key={d.city}
                className={`flex items-center justify-between px-6 py-4 ${i !== destinations.length - 1 ? "border-b border-black/[0.06]" : ""}`}
              >
                <div className="flex items-center gap-3">
                  <MapPin className="h-4 w-4 text-black/25" />
                  <span className="text-sm font-medium text-black">{d.city}</span>
                  <span className="text-xs text-black/30">{d.distance}</span>
                </div>
                <span className="text-sm font-semibold text-black/50">{d.approx}</span>
              </div>
            ))}
          </div>
          <p className="text-xs text-[#888] mt-3">Toute destination en France sur devis. Aller simple ou aller-retour.</p>
        </section>

        {/* FAQ */}
        <section className="mb-16">
          <h2 className="text-2xl font-semibold tracking-tight text-black mb-8">Questions fréquentes</h2>
          <div className="space-y-4">
            {[
              {
                q: "Comment est calculé le tarif longue distance ?",
                a: "Le tarif est établi sur devis en fonction du kilométrage, de la durée estimée et des éventuels péages. Le prix est fixe et convenu avant le trajet.",
              },
              {
                q: "Puis-je effectuer des arrêts en cours de route ?",
                a: "Oui, des arrêts peuvent être organisés (repas, escale). Indiquez-le lors de la réservation pour intégrer ces étapes au devis.",
              },
              {
                q: "Puis-je réserver un aller-retour ?",
                a: "Absolument. Un forfait aller-retour est souvent plus avantageux qu'un double trajet aller simple. Demandez un devis combiné.",
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
          <h2 className="text-2xl font-semibold mb-3">Où voulez-vous aller ?</h2>
          <p className="text-white/50 text-sm mb-8">Devis gratuit en 2h · Tarif fixe · France entière</p>
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
              Demander un devis en ligne
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
