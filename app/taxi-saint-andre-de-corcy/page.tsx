import type { Metadata } from "next";
import Link from "next/link";
import { ArrowLeft, Phone, MapPin, Clock, CheckCircle, ArrowRight, Shield } from "lucide-react";

export const metadata: Metadata = {
  title: "Taxi Saint-André-de-Corcy — Conventionné CPAM | SPM Taxi",
  description:
    "Taxi SPM à Saint-André-de-Corcy (Ain 01390). Conventionné CPAM, transport médical remboursé, transfert aéroport Lyon Saint-Exupéry en 30 min. Volkswagen Tiguan 7 places. 7j/7 24h/24. ☎ 07 67 75 18 98.",
  keywords: [
    "taxi Saint-André-de-Corcy",
    "taxi Saint-André Ain",
    "taxi conventionné Saint-André-de-Corcy",
    "taxi CPAM Saint-André",
    "taxi Lyon depuis Saint-André-de-Corcy",
    "transfert aéroport Lyon Saint-André-de-Corcy",
    "taxi Saint-André-de-Corcy 01390",
    "transport médical Saint-André-de-Corcy",
    "taxi 7 places Saint-André-de-Corcy",
    "réserver taxi Saint-André-de-Corcy",
  ],
  alternates: { canonical: "https://taxispm.fr/taxi-saint-andre-de-corcy/" },
  openGraph: {
    title: "Taxi Saint-André-de-Corcy — SPM Taxi | Conventionné CPAM · 7j/7 24h/24",
    description:
      "Votre taxi à Saint-André-de-Corcy : conventionné CPAM, transfert aéroport Lyon en 30 min, transport médical. Volkswagen Tiguan 7 places. Disponible 7j/7. ☎ 07 67 75 18 98.",
    url: "https://taxispm.fr/taxi-saint-andre-de-corcy/",
    type: "website",
    locale: "fr_FR",
    images: [
      {
        url: "/image/tiguan-front-quarter.webp",
        alt: "Taxi SPM Saint-André-de-Corcy — Volkswagen Tiguan 7 places",
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
      aggregateRating: {
        "@type": "AggregateRating",
        ratingValue: "4.9",
        ratingCount: "9",
        bestRating: "5",
        worstRating: "1",
      },
      geo: {
        "@type": "GeoCoordinates",
        latitude: 45.747,
        longitude: 5.219,
      },
      areaServed: [
        { "@type": "City", name: "Saint-André-de-Corcy", containedInPlace: { "@type": "AdministrativeArea", name: "Ain" } },
        { "@type": "City", name: "Villars-les-Dombes" },
        { "@type": "City", name: "Lyon" },
        { "@type": "City", name: "Ambérieu-en-Bugey" },
        { "@type": "City", name: "Bourg-en-Bresse" },
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
        { "@type": "ListItem", position: 2, name: "Taxi Saint-André-de-Corcy", item: "https://taxispm.fr/taxi-saint-andre-de-corcy/" },
      ],
    },
    {
      "@type": "FAQPage",
      mainEntity: [
        {
          "@type": "Question",
          name: "Combien coûte un taxi de Saint-André-de-Corcy à l'aéroport de Lyon ?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Depuis Saint-André-de-Corcy, le transfert vers l'aéroport Lyon Saint-Exupéry est estimé à partir de 50 €. Le trajet dure environ 30 minutes. Tarif fixe, sans surprise. Demandez votre devis gratuit au 07 67 75 18 98.",
          },
        },
        {
          "@type": "Question",
          name: "Le taxi est-il conventionné CPAM à Saint-André-de-Corcy ?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Oui, SPM Taxi est agréé par l'Assurance Maladie. Sur prescription médicale, vos trajets vers les hôpitaux et centres de soins lyonnais peuvent être intégralement pris en charge par la CPAM.",
          },
        },
        {
          "@type": "Question",
          name: "Comment réserver un taxi à Saint-André-de-Corcy ?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Appelez directement le 07 67 75 18 98 ou envoyez un message WhatsApp. Réponse et confirmation assurées sous 2h, 7 jours sur 7.",
          },
        },
        {
          "@type": "Question",
          name: "SPM Taxi dessert-il Saint-André-de-Corcy la nuit et le week-end ?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Oui, SPM Taxi est disponible 24h/24 et 7j/7, y compris la nuit, les week-ends et les jours fériés. Idéal pour les vols matinaux depuis l'aéroport de Lyon.",
          },
        },
      ],
    },
  ],
};

const services = [
  {
    icon: Shield,
    title: "Transport médical CPAM",
    desc: "Agréé par l'Assurance Maladie. Prise en charge de vos trajets vers les hôpitaux et centres médicaux lyonnais sur prescription médicale. Zéro avance de frais.",
  },
  {
    icon: MapPin,
    title: "Aéroport Lyon Saint-Exupéry",
    desc: "Depuis Saint-André-de-Corcy, comptez ~30 min. Position idéale entre Lyon et Villars-les-Dombes. Suivi des vols en temps réel, pas de frais pour retard.",
  },
  {
    icon: Clock,
    title: "Disponible 7j/7 — 24h/24",
    desc: "Y compris nuits, week-ends et jours fériés. Réservation et confirmation sous 2h. Idéal pour les vols matinaux ou tardifs.",
  },
  {
    icon: CheckCircle,
    title: "Volkswagen Tiguan 7 places",
    desc: "Grand SUV confortable. Idéal pour les familles, groupes, bagages nombreux et personnes à mobilité réduite.",
  },
];

const destinations = [
  { from: "Saint-André-de-Corcy", to: "Aéroport Lyon Saint-Exupéry", time: "~30 min" },
  { from: "Saint-André-de-Corcy", to: "Lyon Centre", time: "~35 min" },
  { from: "Saint-André-de-Corcy", to: "Ambérieu-en-Bugey", time: "~40 min" },
  { from: "Saint-André-de-Corcy", to: "Villars-les-Dombes", time: "~15 min" },
  { from: "Saint-André-de-Corcy", to: "Bourg-en-Bresse", time: "~50 min" },
  { from: "Saint-André-de-Corcy", to: "Grenoble", time: "~1h30" },
];

export default function SaintAndreDeCorcy() {
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
            Taxi · Saint-André-de-Corcy (01390)
          </span>
          <h1 className="text-4xl sm:text-5xl font-semibold tracking-tight text-black leading-tight mb-6">
            Taxi à<br />
            <span className="text-black/30">Saint-André-de-Corcy</span>
          </h1>
          <p className="text-base text-[#555] leading-relaxed max-w-2xl mb-8">
            SPM Taxi intervient à Saint-André-de-Corcy et dans tout le secteur de la Dombes (Ain 01390).
            Zone résidentielle idéalement placée entre Lyon et Villars-les-Dombes, avec un accès direct à
            l&apos;aéroport Lyon Saint-Exupéry en 30 minutes. Taxi conventionné CPAM, fort trafic médical vers
            les établissements lyonnais. Volkswagen Tiguan Allspace 7 places. Disponible 7j/7, 24h/24.
            Note Google : <strong>4,9/5</strong> — satisfaction client garantie.
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
              href="https://wa.me/33767751898?text=Bonjour%2C%20je%20souhaite%20r%C3%A9server%20un%20taxi."
              className="inline-flex items-center gap-2 rounded-full bg-[#25D366] text-white px-6 py-3 text-sm font-semibold hover:bg-[#1ebe5d] transition-colors"
              target="_blank"
              rel="noopener noreferrer"
            >
              WhatsApp
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

        {/* Badge CPAM */}
        <div className="mb-12 inline-flex items-center gap-2 bg-white border border-black/[0.06] rounded-full px-5 py-2">
          <Shield className="h-4 w-4 text-black" />
          <span className="text-sm font-semibold text-black">Conventionné CPAM — Transport médical remboursé</span>
        </div>

        {/* Services */}
        <section className="mb-16">
          <h2 className="text-2xl font-semibold tracking-tight text-black mb-8">
            Nos services à Saint-André-de-Corcy
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
            Temps de trajet depuis Saint-André-de-Corcy
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

        {/* Contenu SEO */}
        <section className="mb-16 bg-white rounded-2xl p-8 border border-black/[0.06]">
          <h2 className="text-xl font-semibold text-black mb-4">
            Taxi conventionné CPAM à Saint-André-de-Corcy
          </h2>
          <p className="text-sm text-[#555] leading-relaxed mb-4">
            Saint-André-de-Corcy est une commune de l&apos;Ain (01390) nichée entre Lyon et la Dombes,
            à mi-chemin entre Villars-les-Dombes et la métropole lyonnaise. Sa situation géographique
            en fait un point de départ idéal pour rejoindre rapidement l&apos;aéroport Lyon Saint-Exupéry
            (30 minutes), les hôpitaux lyonnais ou encore Ambérieu-en-Bugey.
          </p>
          <p className="text-sm text-[#555] leading-relaxed mb-4">
            SPM Taxi assure les transports médicaux depuis Saint-André-de-Corcy vers les principaux
            établissements de santé : Hôpital Édouard Herriot, Hôpital de la Croix-Rousse, Hôpital
            Fleyriat à Bourg-en-Bresse. Avec notre agrément CPAM, vos trajets médicaux sur ordonnance
            sont pris en charge par l&apos;Assurance Maladie sans avance de frais.
          </p>
          <p className="text-sm text-[#555] leading-relaxed">
            Notre Volkswagen Tiguan Allspace 7 places offre un confort optimal pour tous vos déplacements,
            qu&apos;il s&apos;agisse d&apos;un transfert aéroport, d&apos;une consultation médicale ou d&apos;un trajet longue
            distance. Réservez votre taxi à Saint-André-de-Corcy en appelant le 07 67 75 18 98.
          </p>
        </section>

        {/* Liens services */}
        <section className="mb-16">
          <h2 className="text-2xl font-semibold tracking-tight text-black mb-8">
            En savoir plus sur nos services
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {[
              { href: "/taxi-conventionne-cpam", label: "Transport médical CPAM", desc: "Zéro avance de frais, prise en charge Assurance Maladie" },
              { href: "/transfert-aeroport-lyon", label: "Transfert aéroport Lyon", desc: "À partir de 50 € · suivi des vols en temps réel" },
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
                q: "Combien coûte un taxi de Saint-André-de-Corcy à l'aéroport de Lyon ?",
                a: "Depuis Saint-André-de-Corcy, le transfert vers l'aéroport Lyon Saint-Exupéry est estimé à partir de 50 €. Le tarif est fixe et garanti à l'avance, sans surprises. Le trajet dure environ 30 minutes. Demandez votre devis gratuit au 07 67 75 18 98.",
              },
              {
                q: "Le taxi est-il conventionné CPAM à Saint-André-de-Corcy ?",
                a: "Oui, SPM Taxi est agréé par la CPAM pour les transports médicaux sur prescription médicale. Vos trajets vers les hôpitaux lyonnais ou Fleyriat peuvent être pris en charge par l'Assurance Maladie. Nous nous occupons de toutes les démarches administratives.",
              },
              {
                q: "Comment réserver un taxi à Saint-André-de-Corcy ?",
                a: "Appelez directement le 07 67 75 18 98 ou envoyez un message WhatsApp. Vous pouvez aussi remplir le formulaire de contact sur le site. Réponse et confirmation assurées sous 2h, 7 jours sur 7.",
              },
              {
                q: "SPM Taxi dessert-il Saint-André-de-Corcy la nuit et le week-end ?",
                a: "Oui, SPM Taxi est disponible 24h/24 et 7j/7, y compris la nuit, les week-ends et les jours fériés. Parfait pour les vols matinaux depuis l'aéroport de Lyon ou les rendez-vous médicaux d'urgence.",
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
          <h2 className="text-2xl font-semibold mb-3">Taxi à Saint-André-de-Corcy — Réservez maintenant</h2>
          <p className="text-white/50 text-sm mb-8">Conventionné CPAM · 7j/7 24h/24 · Note 4,9/5 · Devis gratuit</p>
          <div className="flex flex-wrap justify-center gap-3">
            <a
              href="tel:+33767751898"
              className="inline-flex items-center gap-2 rounded-full bg-white text-black px-6 py-3 text-sm font-semibold hover:bg-white/90 transition-colors"
            >
              <Phone className="h-4 w-4" />
              07 67 75 18 98
            </a>
            <a
              href="https://wa.me/33767751898?text=Bonjour%2C%20je%20souhaite%20r%C3%A9server%20un%20taxi."
              className="inline-flex items-center gap-2 rounded-full bg-[#25D366] text-white px-6 py-3 text-sm font-semibold hover:bg-[#1ebe5d] transition-colors"
              target="_blank"
              rel="noopener noreferrer"
            >
              WhatsApp
            </a>
          </div>
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
