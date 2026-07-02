import type { Metadata } from "next";
import Link from "next/link";
import { ArrowLeft, Phone, MapPin, Clock, CheckCircle, ArrowRight, Shield } from "lucide-react";

export const metadata: Metadata = {
  title: "Taxi Tignieu-Jameyzieu — Conventionné CPAM | SPM Taxi Ain & Isère",
  description:
    "Taxi SPM à Tignieu-Jameyzieu (Isère 38) et Villebois (Ain 01). Conventionné CPAM, transport médical remboursé, aéroport Lyon Saint-Exupéry. Volkswagen Tiguan 7 places. 7j/7 24h/24. ☎ 07 67 75 18 98.",
  keywords: [
    "taxi Tignieu-Jameyzieu", "taxi Tignieu", "taxi Jameyzieu",
    "taxi conventionné Tignieu-Jameyzieu", "taxi CPAM Tignieu",
    "transport médical Tignieu-Jameyzieu", "taxi Tignieu aéroport Lyon",
    "taxi Tignieu 38", "taxi Tignieu Isère", "taxi Tignieu 24h24",
    "taxi Tignieu Ambérieu", "taxi Tignieu Montluel",
    "réserver taxi Tignieu-Jameyzieu", "taxi SPM Tignieu",
    "taxi Crémieu depuis Tignieu", "taxi Bourgoin Tignieu",
    "chauffeur taxi Tignieu-Jameyzieu disponible",
  ],
  alternates: { canonical: "https://taxispm.fr/taxi-tignieu-jameyzieu" },
  openGraph: {
    title: "Taxi Tignieu-Jameyzieu — SPM Taxi | Conventionné CPAM · 7j/7 24h/24",
    description:
      "Votre taxi à Tignieu-Jameyzieu : conventionné CPAM, transfert aéroport Lyon, transport médical. Volkswagen Tiguan 7 places. Disponible 7j/7. ☎ 07 67 75 18 98.",
    url: "https://taxispm.fr/taxi-tignieu-jameyzieu",
    type: "website",
    locale: "fr_FR",
    images: [
      {
        url: "/image/tiguan-front-quarter.webp",
        alt: "Taxi SPM Tignieu-Jameyzieu — Volkswagen Tiguan 7 places",
      },
    ],
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": ["LocalBusiness", "TaxiService"],
      "@id": "https://taxispm.fr/#business",
      name: "SPM Taxi",
      telephone: "+33767751898",
      url: "https://taxispm.fr",
      address: {
        "@type": "PostalAddress",
        streetAddress: "951 route des hauts fourneaux",
        addressLocality: "Villebois",
        postalCode: "01150",
        addressRegion: "Auvergne-Rhône-Alpes",
        addressCountry: "FR",
      },
      areaServed: [
        { "@type": "City", name: "Tignieu-Jameyzieu", containedInPlace: { "@type": "AdministrativeArea", name: "Isère" } },
        { "@type": "City", name: "Villebois", containedInPlace: { "@type": "AdministrativeArea", name: "Ain" } },
        { "@type": "City", name: "Ambérieu-en-Bugey" },
        { "@type": "City", name: "Montluel" },
        { "@type": "City", name: "Meximieux" },
        { "@type": "City", name: "Lyon" },
        { "@type": "Airport", name: "Aéroport Lyon Saint-Exupéry", iataCode: "LYS" },
      ],
      openingHoursSpecification: [
        {
          "@type": "OpeningHoursSpecification",
          dayOfWeek: ["Monday","Tuesday","Wednesday","Thursday","Friday","Saturday","Sunday"],
          opens: "00:00",
          closes: "23:59",
        },
      ],
    },
    {
      "@type": "BreadcrumbList",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Accueil", item: "https://taxispm.fr" },
        { "@type": "ListItem", position: 2, name: "Taxi Tignieu-Jameyzieu", item: "https://taxispm.fr/taxi-tignieu-jameyzieu" },
      ],
    },
  ],
};

const services = [
  {
    icon: Shield,
    title: "Transport médical CPAM",
    desc: "Agréé par l'Assurance Maladie. Prise en charge de vos trajets vers les hôpitaux et centres médicaux sur prescription.",
  },
  {
    icon: MapPin,
    title: "Aéroport Lyon Saint-Exupéry",
    desc: "Depuis Tignieu-Jameyzieu, comptez ~40 min. Suivi des vols en temps réel, pas de frais pour retard.",
  },
  {
    icon: Clock,
    title: "Disponible 7j/7 — 24h/24",
    desc: "Y compris nuits, week-ends et jours fériés. Réservation et réponse sous 2h.",
  },
  {
    icon: CheckCircle,
    title: "Volkswagen Tiguan 7 places",
    desc: "Grand SUV confortable. Idéal pour les familles, groupes, bagages nombreux et personnes à mobilité réduite.",
  },
];

const destinations = [
  { from: "Tignieu-Jameyzieu", to: "Aéroport Lyon Saint-Exupéry", time: "~40 min" },
  { from: "Tignieu-Jameyzieu", to: "Ambérieu-en-Bugey", time: "~25 min" },
  { from: "Tignieu-Jameyzieu", to: "Lyon Centre", time: "~35 min" },
  { from: "Tignieu-Jameyzieu", to: "Montluel", time: "~15 min" },
  { from: "Tignieu-Jameyzieu", to: "Bourg-en-Bresse", time: "~45 min" },
  { from: "Tignieu-Jameyzieu", to: "Grenoble", time: "~1h10" },
];

export default function TignieuPage() {
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
            Taxi · Tignieu-Jameyzieu (38)
          </span>
          <h1 className="text-4xl sm:text-5xl font-semibold tracking-tight text-black leading-tight mb-6">
            Taxi à<br />
            <span className="text-black/30">Tignieu-Jameyzieu</span>
          </h1>
          <p className="text-base text-[#555] leading-relaxed max-w-2xl mb-8">
            SPM Taxi intervient à Tignieu-Jameyzieu et dans tout le secteur Ain — Isère.
            Taxi conventionné CPAM, transferts aéroport Lyon Saint-Exupéry, longue distance.
            Volkswagen Tiguan Allspace 7 places. Disponible 7j/7, 24h/24.
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
              Devis gratuit
              <ArrowRight className="h-4 w-4" />
            </a>
          </div>
        </div>

        {/* Services */}
        <section className="mb-16">
          <h2 className="text-2xl font-semibold tracking-tight text-black mb-8">
            Nos services à Tignieu-Jameyzieu
          </h2>
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

        {/* Temps de trajet */}
        <section className="mb-16">
          <h2 className="text-2xl font-semibold tracking-tight text-black mb-8">
            Temps de trajet depuis Tignieu-Jameyzieu
          </h2>
          <div className="bg-white rounded-2xl border border-black/[0.06] overflow-hidden">
            {destinations.map((d, i) => (
              <div
                key={d.to}
                className={`flex items-center justify-between px-6 py-4 ${i !== destinations.length - 1 ? "border-b border-black/[0.06]" : ""}`}
              >
                <div className="flex items-center gap-3">
                  <MapPin className="h-4 w-4 text-black/25 shrink-0" />
                  <span className="text-sm font-medium text-black">{d.to}</span>
                </div>
                <span className="text-sm font-semibold text-black/50">{d.time}</span>
              </div>
            ))}
          </div>
          <p className="text-xs text-[#888] mt-3">Temps indicatifs hors trafic.</p>
        </section>

        {/* Liens services */}
        <section className="mb-16">
          <h2 className="text-2xl font-semibold tracking-tight text-black mb-8">
            En savoir plus sur nos services
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {[
              { href: "/taxi-conventionne-cpam", label: "Transport médical CPAM", desc: "Zéro avance de frais, prise en charge Assurance Maladie" },
              { href: "/transfert-aeroport-lyon", label: "Transfert aéroport Lyon", desc: "À partir de 65 € · suivi des vols en temps réel" },
              { href: "/taxi-longue-distance", label: "Longue distance", desc: "Partout en France · tarif fixe sur devis" },
              { href: "/taxi-remorque-ain", label: "Remorque & colis", desc: "Attache-remorque homologuée · livraison express" },
            ].map(({ href, label, desc }) => (
              <Link
                key={href}
                href={href}
                className="flex items-center justify-between gap-4 bg-white rounded-2xl p-5 border border-black/[0.06] hover:border-black/15 transition-colors group"
              >
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
          <h2 className="text-2xl font-semibold tracking-tight text-black mb-8">Questions fréquentes</h2>
          <div className="space-y-4">
            {[
              {
                q: "Combien coûte un taxi de Tignieu-Jameyzieu à l'aéroport de Lyon ?",
                a: "Depuis Tignieu-Jameyzieu, le transfert vers l'aéroport Lyon Saint-Exupéry est estimé à partir de 55 €. Le tarif est fixe et garanti, sans surprises. Demandez votre devis gratuit au 07 67 75 18 98.",
              },
              {
                q: "SPM Taxi dessert-il Tignieu-Jameyzieu la nuit et le week-end ?",
                a: "Oui, SPM Taxi est disponible 7j/7 et 24h/24, y compris la nuit, les week-ends et les jours fériés. Idéal pour les vols matinaux ou tardifs.",
              },
              {
                q: "Comment réserver un taxi à Tignieu-Jameyzieu ?",
                a: "Appelez directement le 07 67 75 18 98 ou utilisez le formulaire de contact sur le site. Réponse et confirmation sous 2h.",
              },
              {
                q: "Le taxi est-il conventionné CPAM à Tignieu-Jameyzieu ?",
                a: "Oui, SPM Taxi est agréé par la CPAM pour les transports médicaux sur prescription médicale. Les trajets vers les hôpitaux, cliniques et centres de soins peuvent être pris en charge par l'Assurance Maladie.",
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
          <h2 className="text-2xl font-semibold mb-3">Taxi à Tignieu-Jameyzieu — Réservez maintenant</h2>
          <p className="text-white/50 text-sm mb-8">Conventionné CPAM · 7j/7 24h/24 · Devis gratuit</p>
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
          © 2026 SPM — Taxi Conventionné · Villebois (Ain 01) & Tignieu-Jameyzieu (Isère 38) ·{" "}
          <Link href="/" className="underline underline-offset-2">Retour au site</Link>
        </p>
      </footer>
    </div>
  );
}
