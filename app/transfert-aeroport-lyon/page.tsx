import type { Metadata } from "next";
import Link from "next/link";
import { ArrowLeft, Phone, Clock, MapPin, CheckCircle, ArrowRight } from "lucide-react";

export const metadata: Metadata = {
  title: "Transfert Aéroport Lyon Saint-Exupéry (LYS) — Taxi SPM Villebois Ain (01)",
  description:
    "Taxi SPM : transfert aéroport Lyon Saint-Exupéry (LYS) depuis l'Ain, Villebois, Ambérieu, Bourg-en-Bresse. À partir de 65 €. Suivi des vols en temps réel, aucun frais pour retard. Volkswagen Tiguan 7 places. 7j/7 24h/24. ☎ 07 67 75 18 98.",
  keywords: [
    "taxi aéroport Lyon Saint-Exupéry Ain", "transfert aéroport LYS Ain",
    "taxi Lyon Saint-Exupéry Villebois", "navette aéroport Lyon Ain 01",
    "taxi LYS depuis Ain", "transfert aéroport Lyon Villebois", "taxi aéroport 24h24 Ain",
    "taxi aéroport Ambérieu Lyon", "taxi aéroport Bourg-en-Bresse Lyon",
    "navette Lyon Saint-Exupéry Ain 01", "taxi privé aéroport Lyon Ain",
    "prix taxi aéroport Lyon Ain", "réserver taxi aéroport Lyon Ain",
  ],
  alternates: { canonical: "https://taxispm.fr/transfert-aeroport-lyon" },
  openGraph: {
    title: "Transfert Aéroport Lyon Saint-Exupéry — SPM Taxi Ain | À partir de 65 €",
    description: "Taxi SPM : transfert Lyon Saint-Exupéry depuis l'Ain (Villebois, Ambérieu, Bourg-en-Bresse). À partir de 65 €. Suivi des vols en temps réel. 07 67 75 18 98.",
    url: "https://taxispm.fr/transfert-aeroport-lyon",
    type: "website",
    locale: "fr_FR",
    images: [{ url: "/image/tiguan-front-quarter.webp", alt: "Taxi SPM transfert aéroport Lyon Saint-Exupéry Ain" }],
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": ["LocalBusiness", "TaxiService"],
      "@id": "https://taxispm.fr/#business",
      name: "SPM Taxi — Transfert Aéroport Lyon Saint-Exupéry",
      telephone: "+33767751898",
      url: "https://taxispm.fr/transfert-aeroport-lyon",
      address: {
        "@type": "PostalAddress",
        streetAddress: "951 route des hauts fourneaux",
        addressLocality: "Villebois",
        postalCode: "01150",
        addressRegion: "Auvergne-Rhône-Alpes",
        addressCountry: "FR",
      },
      areaServed: [
        { "@type": "City", name: "Lyon" },
        { "@type": "AdministrativeArea", name: "Ain" },
        { "@type": "AdministrativeArea", name: "Isère" },
        { "@type": "Airport", name: "Aéroport Lyon Saint-Exupéry", iataCode: "LYS" },
      ],
      hasOfferCatalog: {
        "@type": "OfferCatalog",
        name: "Transferts aéroport et gare",
        itemListElement: [
          { "@type": "Offer", name: "Transfert aéroport Lyon Saint-Exupéry depuis Ain", itemOffered: { "@type": "Service", name: "Taxi aéroport Lyon Saint-Exupéry" } },
          { "@type": "Offer", name: "Transfert gare Part-Dieu et Perrache", itemOffered: { "@type": "Service", name: "Taxi gare Lyon" } },
        ],
      },
      aggregateRating: { "@type": "AggregateRating", ratingValue: 4.9, reviewCount: 9, bestRating: 5, worstRating: 1 },
    },
    {
      "@type": "BreadcrumbList",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Accueil", item: "https://taxispm.fr" },
        { "@type": "ListItem", position: 2, name: "Transfert Aéroport Lyon", item: "https://taxispm.fr/transfert-aeroport-lyon" },
      ],
    },
  ],
};

const features = [
  "Suivi des vols en temps réel — pas de frais pour retard",
  "Prise en charge à domicile, hôtel ou gare",
  "Volkswagen Tiguan Allspace 7 places avec grand coffre",
  "Aide aux bagages incluse",
  "Disponible 24h/24, 7j/7 y compris jours fériés",
  "Devis instantané, tarif fixe sans surprise",
];

const zones = [
  { from: "Villebois", time: "~45 min" },
  { from: "Ambérieu-en-Bugey", time: "~50 min" },
  { from: "Bourg-en-Bresse", time: "~1h10" },
  { from: "Lyon Centre", time: "~30 min" },
  { from: "Bourgoin-Jallieu", time: "~35 min" },
  { from: "Grenoble", time: "~1h15" },
];

export default function AeroportPage() {
  return (
    <div className="min-h-screen bg-[#f8f9fa] font-sans">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      {/* Header */}
      <header className="bg-black text-white px-6 py-4 flex items-center gap-4">
        <Link href="/" className="flex items-center gap-2 text-white/60 hover:text-white transition-colors text-sm">
          <ArrowLeft className="h-4 w-4" />
          SPM Taxi
        </Link>
      </header>

      <main className="max-w-4xl mx-auto px-6 py-16">

        {/* Hero */}
        <div className="mb-16">
          <span className="text-[10px] font-bold tracking-[0.3em] uppercase text-black/40 mb-4 block">
            Service · Aéroport
          </span>
          <h1 className="text-4xl sm:text-5xl font-semibold tracking-tight text-black leading-tight mb-6">
            Transfert Aéroport<br />
            <span className="text-black/30">Lyon Saint-Exupéry</span>
          </h1>
          <p className="text-base text-[#555] leading-relaxed max-w-2xl mb-8">
            Taxi SPM assure vos transferts vers et depuis l&apos;aéroport international de Lyon Saint-Exupéry
            (LYS) depuis l&apos;Ain, Lyon et l&apos;Isère. Ponctualité garantie, suivi des vols en temps réel,
            Volkswagen Tiguan 7 places pour vos bagages.
          </p>
          <div className="flex flex-wrap gap-3">
            <a
              href="tel:+33767751898"
              className="inline-flex items-center gap-2 rounded-full bg-black text-white px-6 py-3 text-sm font-semibold hover:bg-[#111] transition-colors"
            >
              <Phone className="h-4 w-4" />
              Réserver maintenant
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

        {/* Infos rapides */}
        <div className="grid grid-cols-3 gap-4 mb-16">
          {[
            { icon: Clock, label: "Disponibilité", value: "24h/24 · 7j/7" },
            { icon: MapPin, label: "Départ", value: "Ain · Lyon · Isère" },
            { icon: Phone, label: "Contact", value: "07 67 75 18 98" },
          ].map(({ icon: Icon, label, value }) => (
            <div key={label} className="bg-white rounded-2xl p-5 border border-black/[0.06]">
              <Icon className="h-5 w-5 text-black/30 mb-3" />
              <p className="text-[10px] font-semibold tracking-wider uppercase text-black/40 mb-1">{label}</p>
              <p className="text-sm font-semibold text-black">{value}</p>
            </div>
          ))}
        </div>

        {/* Features */}
        <section className="mb-16">
          <h2 className="text-2xl font-semibold tracking-tight text-black mb-8">Pourquoi choisir SPM ?</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {features.map((f) => (
              <div key={f} className="flex items-start gap-3 bg-white rounded-xl p-4 border border-black/[0.06]">
                <CheckCircle className="h-4 w-4 text-black mt-0.5 shrink-0" />
                <p className="text-sm text-[#444] leading-relaxed">{f}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Temps de trajet */}
        <section className="mb-16">
          <h2 className="text-2xl font-semibold tracking-tight text-black mb-8">
            Temps de trajet estimé vers Lyon Saint-Exupéry
          </h2>
          <div className="bg-white rounded-2xl border border-black/[0.06] overflow-hidden">
            {zones.map((z, i) => (
              <div
                key={z.from}
                className={`flex items-center justify-between px-6 py-4 ${i !== zones.length - 1 ? "border-b border-black/[0.06]" : ""}`}
              >
                <div className="flex items-center gap-3">
                  <MapPin className="h-4 w-4 text-black/25" />
                  <span className="text-sm font-medium text-black">{z.from}</span>
                </div>
                <span className="text-sm font-semibold text-black/50">{z.time}</span>
              </div>
            ))}
          </div>
          <p className="text-xs text-[#888] mt-3">Temps indicatifs, hors trafic. SPM prévoit toujours le temps nécessaire.</p>
        </section>

        {/* FAQ */}
        <section className="mb-16">
          <h2 className="text-2xl font-semibold tracking-tight text-black mb-8">Questions fréquentes</h2>
          <div className="space-y-4">
            {[
              {
                q: "Que se passe-t-il si mon vol a du retard ?",
                a: "SPM suit votre vol en temps réel. En cas de retard, le chauffeur adapte l'heure de prise en charge automatiquement. Aucun frais supplémentaire.",
              },
              {
                q: "Combien de bagages puis-je emporter ?",
                a: "Le Volkswagen Tiguan Allspace dispose d'un très grand coffre. Vous pouvez emporter plusieurs valises, même des bagages de grande taille.",
              },
              {
                q: "Puis-je réserver pour plusieurs passagers ?",
                a: "Oui, le véhicule peut accueillir jusqu'à 7 passagers. Idéal pour les voyages en famille ou en groupe.",
              },
              {
                q: "Quel est le délai minimum pour réserver ?",
                a: "La réservation à l'avance est conseillée, surtout pour les vols tôt le matin. Les réservations de dernière minute sont acceptées selon disponibilité.",
              },
            ].map(({ q, a }) => (
              <div key={q} className="bg-white rounded-2xl p-6 border border-black/[0.06]">
                <h3 className="text-sm font-semibold text-black mb-2">{q}</h3>
                <p className="text-sm text-[#555] leading-relaxed">{a}</p>
              </div>
            ))}
          </div>
        </section>

        {/* CTA final */}
        <div className="bg-black text-white rounded-3xl p-10 text-center">
          <h2 className="text-2xl font-semibold mb-3">Prêt à réserver votre transfert ?</h2>
          <p className="text-white/50 text-sm mb-8">Réponse sous 2h · Devis gratuit · Tarif fixe garanti</p>
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
              Formulaire de contact
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
