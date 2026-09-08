import type { Metadata } from "next";
import Link from "next/link";
import { ArrowLeft, Phone, MapPin, Clock, CheckCircle, ArrowRight, Shield } from "lucide-react";

export const metadata: Metadata = {
  title: "Taxi Lagnieu — Conventionné CPAM · Ain 01 | SPM Taxi",
  description:
    "Taxi à Lagnieu (Ain 01) : conventionné CPAM, transport médical remboursé, transfert aéroport Lyon Saint-Exupéry. Volkswagen Tiguan 7 places. 7j/7 24h/24. ☎ 07 67 75 18 98.",
  keywords: [
    "taxi Lagnieu", "taxi Lagnieu Ain", "taxi Lagnieu 01150",
    "taxi conventionné Lagnieu", "taxi CPAM Lagnieu",
    "taxi médical Lagnieu", "taxi VSL Lagnieu",
    "transport médical Lagnieu CPAM", "taxi Lagnieu aéroport Lyon",
    "taxi Lagnieu Lyon Saint-Exupéry", "taxi Lagnieu Ain 01",
    "taxi Lagnieu Ambérieu-en-Bugey", "taxi Lagnieu Villebois",
    "taxi Lagnieu prix tarif", "réserver taxi Lagnieu",
    "taxi Lagnieu tiers payant", "taxi Lagnieu nuit week-end",
    "chauffeur taxi Lagnieu", "taxi Lagnieu Tignieu",
    "taxi Lagnieu Meximieux", "taxi Lagnieu Lyon",
  ],
  alternates: { canonical: "https://taxispm.fr/taxi-lagnieu/" },
  openGraph: {
    title: "Taxi Lagnieu — Conventionné CPAM | SPM Taxi · 7j/7 24h/24",
    description:
      "Taxi conventionné CPAM à Lagnieu (01150). Aéroport Lyon, transport médical remboursé tiers payant, Ambérieu-en-Bugey, Villebois. Volkswagen Tiguan 7 places. ☎ 07 67 75 18 98.",
    url: "https://taxispm.fr/taxi-lagnieu/",
    type: "website",
    locale: "fr_FR",
    images: [{ url: "/image/tiguan-front-quarter.webp", alt: "Taxi Lagnieu — SPM Taxi Ain 01" }],
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": ["LocalBusiness", "TaxiService"],
      "@id": "https://taxispm.fr/#business",
      name: "SPM Taxi — Lagnieu",
      telephone: "+33767751898",
      url: "https://taxispm.fr/taxi-lagnieu/",
      description: "SPM Taxi assure des courses depuis Lagnieu et dans tout le secteur Ain 01 : Ambérieu-en-Bugey, Villebois, Meximieux. Taxi conventionné CPAM, transport médical sur prescription, transferts aéroport Lyon. 7j/7 24h/24.",
      address: {
        "@type": "PostalAddress",
        streetAddress: "951 route des hauts fourneaux",
        addressLocality: "Villebois",
        postalCode: "01150",
        addressRegion: "Auvergne-Rhône-Alpes",
        addressCountry: "FR",
      },
      geo: {
        "@type": "GeoCoordinates",
        latitude: 45.836,
        longitude: 5.361,
      },
      areaServed: [
        { "@type": "City", name: "Lagnieu", containedInPlace: { "@type": "AdministrativeArea", name: "Ain" } },
        { "@type": "City", name: "Ambérieu-en-Bugey" },
        { "@type": "City", name: "Villebois" },
        { "@type": "City", name: "Meximieux" },
        { "@type": "City", name: "Lyon" },
        { "@type": "Airport", name: "Aéroport Lyon Saint-Exupéry", iataCode: "LYS" },
      ],
      aggregateRating: { "@type": "AggregateRating", ratingValue: 4.6, reviewCount: 12, bestRating: 5, worstRating: 1 },
      openingHoursSpecification: [
        { "@type": "OpeningHoursSpecification", dayOfWeek: ["Monday","Tuesday","Wednesday","Thursday","Friday","Saturday","Sunday"], opens: "00:00", closes: "23:59" },
      ],
    },
    {
      "@type": "FAQPage",
      mainEntity: [
        {
          "@type": "Question",
          name: "Y a-t-il un taxi conventionné CPAM à Lagnieu ?",
          acceptedAnswer: { "@type": "Answer", text: "Oui. SPM Taxi est agréé CPAM et intervient à Lagnieu et dans toute la zone Ain 01 pour les transports médicaux sur prescription. Zéro avance de frais — tiers payant avec l'Assurance Maladie. Appelez le 07 67 75 18 98 pour toute demande." },
        },
        {
          "@type": "Question",
          name: "Combien coûte un taxi de Lagnieu à l'aéroport Lyon Saint-Exupéry ?",
          acceptedAnswer: { "@type": "Answer", text: "Depuis Lagnieu, le transfert vers l'aéroport Lyon Saint-Exupéry est à partir de 60 €. Tarif fixe, sans supplément en cas de retard de vol. Devis gratuit au 07 67 75 18 98." },
        },
        {
          "@type": "Question",
          name: "SPM Taxi peut-il aller de Lagnieu à Ambérieu-en-Bugey ?",
          acceptedAnswer: { "@type": "Answer", text: "Oui, SPM Taxi effectue régulièrement les trajets entre Lagnieu et Ambérieu-en-Bugey (environ 15 minutes). Idéal pour les transports médicaux CPAM vers le centre hospitalier d'Ambérieu ou les gares SNCF." },
        },
        {
          "@type": "Question",
          name: "Comment réserver un taxi à Lagnieu ?",
          acceptedAnswer: { "@type": "Answer", text: "Appelez directement le 07 67 75 18 98 (disponible 7j/7, 24h/24) ou utilisez le formulaire en ligne sur taxispm.fr. Pour les transports médicaux CPAM, munissez-vous de votre prescription médicale." },
        },
        {
          "@type": "Question",
          name: "SPM Taxi prend-il en charge les patients dialysés à Lagnieu ?",
          acceptedAnswer: { "@type": "Answer", text: "Oui. SPM Taxi transporte régulièrement des patients en dialyse, chimiothérapie et radiothérapie depuis Lagnieu vers les centres hospitaliers de la région (Ambérieu, Bourg-en-Bresse, Lyon). Conventionné CPAM — zéro avance de frais sur prescription médicale." },
        },
      ],
    },
    {
      "@type": "BreadcrumbList",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Accueil", item: "https://taxispm.fr" },
        { "@type": "ListItem", position: 2, name: "Taxi Lagnieu", item: "https://taxispm.fr/taxi-lagnieu/" },
      ],
    },
  ],
};

const services = [
  {
    icon: Shield,
    title: "Transport médical CPAM — tiers payant",
    desc: "Agréé CPAM depuis Lagnieu. Dialyse, chimiothérapie, radiothérapie, hospitalisation, consultation spécialisée — zéro avance de frais sur prescription médicale. Prise en charge directe par l'Assurance Maladie.",
  },
  {
    icon: MapPin,
    title: "Aéroport Lyon Saint-Exupéry",
    desc: "Depuis Lagnieu, ~45 min jusqu'à l'aéroport LYS. Suivi des vols en temps réel, tarif fixe garanti, pas de supplément en cas de retard.",
  },
  {
    icon: Clock,
    title: "Disponible 7j/7 — 24h/24",
    desc: "Nuits, week-ends, jours fériés : SPM Taxi répond à Lagnieu et dans tout le secteur Ain 01. Confirmation de réservation sous 2h.",
  },
  {
    icon: CheckCircle,
    title: "Volkswagen Tiguan 7 places",
    desc: "SUV spacieux, climatisation, Wi-Fi, attache-remorque. Idéal familles, groupes, personnes à mobilité réduite (PMR).",
  },
];

const destinations = [
  { from: "Lagnieu", to: "Ambérieu-en-Bugey", time: "~15 min", price: "à partir de 25 €" },
  { from: "Lagnieu", to: "Aéroport Lyon Saint-Exupéry", time: "~45 min", price: "à partir de 60 €" },
  { from: "Lagnieu", to: "Lyon Centre", time: "~55 min", price: "à partir de 65 €" },
  { from: "Lagnieu", to: "Villebois", time: "~10 min", price: "à partir de 15 €" },
  { from: "Lagnieu", to: "Meximieux", time: "~25 min", price: "à partir de 35 €" },
  { from: "Lagnieu", to: "Bourg-en-Bresse", time: "~40 min", price: "à partir de 55 €" },
];

export default function TaxiLagnieuPage() {
  return (
    <div className="min-h-screen bg-[#f8f9fa] font-sans">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />

      <header className="bg-black text-white px-6 py-4 flex items-center gap-4">
        <Link href="/" className="flex items-center gap-2 text-white/60 hover:text-white transition-colors text-sm">
          <ArrowLeft className="h-4 w-4" />
          SPM Taxi
        </Link>
      </header>

      <main className="max-w-4xl mx-auto px-6 py-16">

        <div className="mb-16">
          <span className="text-[10px] font-bold tracking-[0.3em] uppercase text-black/40 mb-4 block">
            Taxi · Lagnieu (01150 — Ain)
          </span>
          <h1 className="text-4xl sm:text-5xl font-semibold tracking-tight text-black leading-tight mb-6">
            Taxi à<br />
            <span className="text-black/30">Lagnieu</span>
          </h1>
          <p className="text-base text-[#555] leading-relaxed max-w-2xl mb-4">
            SPM Taxi dessert Lagnieu, Ambérieu-en-Bugey et tout le secteur Ain 01.
            Taxi conventionné CPAM agréé par l'Assurance Maladie —
            zéro avance de frais pour vos transports médicaux sur prescription.
            Transferts vers l'aéroport Lyon Saint-Exupéry et les gares lyonnaises.
          </p>
          <p className="text-base text-[#555] leading-relaxed max-w-2xl mb-4">
            Basé à Villebois, à quelques minutes de Lagnieu, SPM Taxi répond rapidement
            à toutes vos demandes de transport dans l'Ain : dialyse, chimiothérapie,
            hospitalisation, aéroport, gare SNCF d'Ambérieu.
          </p>
          <p className="text-base text-[#555] leading-relaxed max-w-2xl mb-8">
            Volkswagen Tiguan Allspace 7 places — confort premium, Wi-Fi, attache-remorque.
            Disponible 7j/7, 24h/24. Devis gratuit sous 2h.
          </p>
          <div className="flex flex-wrap gap-3">
            <a href="tel:+33767751898" className="inline-flex items-center gap-2 rounded-full bg-black text-white px-6 py-3 text-sm font-semibold hover:bg-[#111] transition-colors">
              <Phone className="h-4 w-4" />07 67 75 18 98
            </a>
            <a href="/#contact" className="inline-flex items-center gap-2 rounded-full border border-black/15 text-black px-6 py-3 text-sm font-semibold hover:border-black/30 transition-colors">
              Devis gratuit<ArrowRight className="h-4 w-4" />
            </a>
          </div>
        </div>

        {/* Services */}
        <section className="mb-16">
          <h2 className="text-2xl font-semibold tracking-tight text-black mb-8">Nos services à Lagnieu</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {services.map(({ icon: Icon, title, desc }) => (
              <div key={title} className="bg-white rounded-2xl p-6 border border-black/[0.06]">
                <Icon className="h-6 w-6 text-black mb-4" />
                <h3 className="text-sm font-semibold text-black mb-2">{title}</h3>
                <p className="text-xs text-[#555] leading-relaxed">{desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* CPAM section */}
        <section className="mb-16 bg-white rounded-2xl p-8 border border-black/[0.06]">
          <h2 className="text-2xl font-semibold tracking-tight text-black mb-4">Transport médical CPAM à Lagnieu</h2>
          <p className="text-sm text-[#555] leading-relaxed mb-4">
            SPM Taxi est conventionné avec l'Assurance Maladie (CPAM) pour les transports
            médicaux assis à Lagnieu. Si votre médecin vous prescrit un transport sanitaire,
            vous bénéficiez du tiers payant : <strong>vous ne payez rien</strong>, la Sécurité Sociale
            règle directement SPM Taxi.
          </p>
          <p className="text-sm text-[#555] leading-relaxed mb-4">
            Nos trajets CPAM les plus fréquents depuis Lagnieu :
          </p>
          <ul className="text-sm text-[#555] space-y-2 mb-6">
            <li className="flex items-start gap-2"><CheckCircle className="h-4 w-4 text-black shrink-0 mt-0.5" />Lagnieu → Centre hospitalier Ambérieu-en-Bugey (CH Haut-Bugey)</li>
            <li className="flex items-start gap-2"><CheckCircle className="h-4 w-4 text-black shrink-0 mt-0.5" />Lagnieu → Centre de dialyse</li>
            <li className="flex items-start gap-2"><CheckCircle className="h-4 w-4 text-black shrink-0 mt-0.5" />Lagnieu → CHU Lyon (Edouard Herriot, Croix-Rousse, Lyon-Sud)</li>
            <li className="flex items-start gap-2"><CheckCircle className="h-4 w-4 text-black shrink-0 mt-0.5" />Lagnieu → Centre de chimiothérapie et radiothérapie</li>
            <li className="flex items-start gap-2"><CheckCircle className="h-4 w-4 text-black shrink-0 mt-0.5" />Lagnieu → Clinique Bouchard, Sainte-Marie, Saint-Joseph (Lyon)</li>
          </ul>
          <p className="text-xs text-[#777]">
            Munissez-vous de votre prescription médicale de transport (formulaire S3138 ou ordonnance).
            SPM Taxi se charge de toutes les démarches administratives avec la CPAM.
          </p>
        </section>

        {/* Tarifs */}
        <section className="mb-16">
          <h2 className="text-2xl font-semibold tracking-tight text-black mb-3">Tarifs taxi depuis Lagnieu</h2>
          <p className="text-sm text-[#555] mb-8">Tarifs indicatifs — devis gratuit sous 2h au 07 67 75 18 98.</p>
          <div className="bg-white rounded-2xl border border-black/[0.06] overflow-hidden">
            {destinations.map((d, i) => (
              <div key={d.to} className={`flex items-center justify-between px-6 py-4 gap-4 ${i !== destinations.length - 1 ? "border-b border-black/[0.06]" : ""}`}>
                <div className="flex items-center gap-3 min-w-0">
                  <MapPin className="h-4 w-4 text-black/25 shrink-0" />
                  <span className="text-sm font-medium text-black truncate">{d.to}</span>
                </div>
                <div className="flex items-center gap-4 shrink-0">
                  <span className="text-sm text-black/40">{d.time}</span>
                  <span className="text-sm font-semibold text-black">{d.price}</span>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Liens internes */}
        <section className="mb-16">
          <h2 className="text-2xl font-semibold tracking-tight text-black mb-8">Pages utiles</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {[
              { href: "/taxi-amberieu-en-bugey", label: "Taxi Ambérieu-en-Bugey", desc: "Commune voisine de Lagnieu" },
              { href: "/taxi-conventionne-cpam", label: "Transport médical CPAM", desc: "Zéro avance de frais, tiers payant" },
              { href: "/transfert-aeroport-lyon", label: "Aéroport Lyon Saint-Exupéry", desc: "Depuis Lagnieu à partir de 60 €" },
              { href: "/taxi-villebois", label: "Taxi Villebois", desc: "Siège de SPM Taxi — Ain 01" },
            ].map(({ href, label, desc }) => (
              <Link key={href} href={href} className="flex items-center justify-between gap-4 bg-white rounded-2xl p-5 border border-black/[0.06] hover:border-black/15 transition-colors group">
                <div>
                  <p className="text-sm font-semibold text-black mb-1">{label}</p>
                  <p className="text-xs text-[#555]">{desc}</p>
                </div>
                <ArrowRight className="h-4 w-4 text-black/30 shrink-0 group-hover:translate-x-0.5 transition-transform" />
              </Link>
            ))}
          </div>
        </section>

        {/* FAQ */}
        <section className="mb-16">
          <h2 className="text-2xl font-semibold tracking-tight text-black mb-8">Questions fréquentes — Taxi Lagnieu</h2>
          <div className="space-y-4">
            {[
              {
                q: "Y a-t-il un taxi conventionné CPAM à Lagnieu ?",
                a: "Oui. SPM Taxi est agréé CPAM et intervient à Lagnieu pour tous les transports médicaux sur prescription. Zéro avance de frais — l'Assurance Maladie prend en charge vos trajets vers les hôpitaux, centres de dialyse et cliniques de la région.",
              },
              {
                q: "Combien coûte un taxi de Lagnieu à l'aéroport Lyon Saint-Exupéry ?",
                a: "Depuis Lagnieu, le transfert vers l'aéroport Lyon Saint-Exupéry est à partir de 60 €. Tarif fixe garanti, sans supplément en cas de retard de vol. Suivi des vols en temps réel. Devis gratuit au 07 67 75 18 98.",
              },
              {
                q: "SPM Taxi peut-il faire Lagnieu — Ambérieu-en-Bugey ?",
                a: "Oui, SPM Taxi effectue régulièrement les trajets entre Lagnieu et Ambérieu-en-Bugey (environ 15 minutes). Idéal pour les consultations médicales, les transports CPAM vers le CH Haut-Bugey ou les déplacements en gare SNCF d'Ambérieu.",
              },
              {
                q: "Comment réserver un taxi depuis Lagnieu ?",
                a: "Appelez le 07 67 75 18 98 (disponible 7j/7, 24h/24) ou utilisez le formulaire de devis en ligne sur taxispm.fr. Pour les transports médicaux CPAM, munissez-vous de votre prescription médicale. Réponse garantie sous 2h.",
              },
              {
                q: "SPM Taxi prend-il en charge les patients en dialyse à Lagnieu ?",
                a: "Oui. SPM Taxi transporte régulièrement des patients en dialyse, chimiothérapie et radiothérapie depuis Lagnieu vers les centres hospitaliers de la région. Conventionné CPAM — zéro avance de frais sur prescription médicale. Ponctualité garantie pour vos séances.",
              },
            ].map(({ q, a }) => (
              <div key={q} className="bg-white rounded-2xl p-6 border border-black/[0.06]">
                <h3 className="text-sm font-semibold text-black mb-2">{q}</h3>
                <p className="text-sm text-[#555] leading-relaxed">{a}</p>
              </div>
            ))}
          </div>
        </section>

        {/* CTA */}
        <div className="bg-black text-white rounded-3xl p-10 text-center">
          <h2 className="text-2xl font-semibold mb-3">Taxi à Lagnieu — Réservez</h2>
          <p className="text-white/50 text-sm mb-8">Conventionné CPAM · 7j/7 24h/24 · Devis gratuit sous 2h</p>
          <div className="flex flex-wrap gap-3 justify-center">
            <a href="tel:+33767751898" className="inline-flex items-center gap-2 rounded-full bg-white text-black px-6 py-3 text-sm font-semibold hover:bg-white/90 transition-colors">
              <Phone className="h-4 w-4" />07 67 75 18 98
            </a>
            <a href="/#contact" className="inline-flex items-center gap-2 rounded-full border border-white/25 text-white px-6 py-3 text-sm font-semibold hover:border-white/50 transition-colors">
              Formulaire de contact<ArrowRight className="h-4 w-4" />
            </a>
          </div>
        </div>
      </main>

      <footer className="border-t border-black/[0.06] px-6 py-8 text-center">
        <p className="text-xs text-black/30">
          © 2026 SPM Taxi — Conventionné CPAM · Lagnieu (01) ·{" "}
          <Link href="/" className="underline underline-offset-2">Retour au site</Link>
        </p>
      </footer>
    </div>
  );
}
