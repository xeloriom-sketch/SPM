import type { Metadata } from "next";
import Link from "next/link";
import { ArrowLeft, Phone, MapPin, Clock, CheckCircle, ArrowRight, Shield } from "lucide-react";

export const metadata: Metadata = {
  title: "Taxi Meyzieu — Conventionné CPAM | SPM Taxi",
  description:
    "Taxi SPM à Meyzieu (Rhône 69330). Conventionné CPAM, transfert aéroport Lyon en 15 min, Bron Hôpital en 20 min. Volkswagen Tiguan 7 places. 7j/7 24h/24. ☎ 07 67 75 18 98.",
  keywords: [
    "taxi Meyzieu",
    "taxi Meyzieu Rhône",
    "taxi conventionné Meyzieu",
    "taxi CPAM Meyzieu",
    "taxi aéroport Lyon Meyzieu",
    "taxi Lyon depuis Meyzieu",
    "taxi Meyzieu 69330",
    "transport médical Meyzieu",
    "taxi Bron hôpital Meyzieu",
    "réserver taxi Meyzieu",
  ],
  alternates: { canonical: "https://taxispm.fr/taxi-meyzieu/" },
  openGraph: {
    title: "Taxi Meyzieu — SPM Taxi | Conventionné CPAM · Aéroport 15 min",
    description:
      "Votre taxi à Meyzieu : conventionné CPAM, aéroport Lyon en 15 min, Bron Hôpital en 20 min. Volkswagen Tiguan 7 places. Disponible 7j/7. ☎ 07 67 75 18 98.",
    url: "https://taxispm.fr/taxi-meyzieu/",
    type: "website",
    locale: "fr_FR",
    images: [
      {
        url: "/image/tiguan-front-quarter.webp",
        alt: "Taxi SPM Meyzieu — Volkswagen Tiguan 7 places",
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
        { "@type": "City", name: "Meyzieu", containedInPlace: { "@type": "AdministrativeArea", name: "Rhône" } },
        { "@type": "City", name: "Lyon" },
        { "@type": "City", name: "Bron" },
        { "@type": "City", name: "Montluel" },
        { "@type": "City", name: "Ambérieu-en-Bugey" },
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
        { "@type": "ListItem", position: 2, name: "Taxi Meyzieu", item: "https://taxispm.fr/taxi-meyzieu/" },
      ],
    },
    {
      "@type": "FAQPage",
      mainEntity: [
        {
          "@type": "Question",
          name: "Combien de temps pour aller de Meyzieu à l'aéroport de Lyon en taxi ?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Depuis Meyzieu, l'aéroport Lyon Saint-Exupéry est à seulement 15 minutes en taxi. Un atout majeur pour les voyageurs fréquents. Tarif estimé à partir de 35 €. Réservez au 07 67 75 18 98.",
          },
        },
        {
          "@type": "Question",
          name: "Le taxi est-il conventionné CPAM à Meyzieu ?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Oui, SPM Taxi est agréé par la CPAM. Sur prescription médicale, vos trajets vers l'Hôpital de Bron, la Clinique du Tonkin ou les hôpitaux lyonnais sont pris en charge par l'Assurance Maladie sans avance de frais.",
          },
        },
        {
          "@type": "Question",
          name: "Comment réserver un taxi à Meyzieu rapidement ?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Appelez le 07 67 75 18 98 ou envoyez un message WhatsApp. Réponse et confirmation sous 2h, 7 jours sur 7. Réservation possible à l'avance pour les vols matinaux.",
          },
        },
        {
          "@type": "Question",
          name: "SPM Taxi dessert-il Meyzieu vers le centre de Lyon ?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Oui, SPM Taxi assure les transferts de Meyzieu vers Lyon centre en 25 minutes environ. Idéal pour les déplacements professionnels, rendez-vous médicaux ou sorties culturelles.",
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
    desc: "Agréé par l'Assurance Maladie. Prise en charge vers l'Hôpital de Bron, Clinique du Tonkin, hôpitaux lyonnais. Zéro avance de frais sur ordonnance.",
  },
  {
    icon: MapPin,
    title: "Aéroport Lyon Saint-Exupéry",
    desc: "Meyzieu est à seulement 15 minutes de l'aéroport. Position idéale pour tous vos vols. Suivi des vols en temps réel, aucun frais pour retard.",
  },
  {
    icon: Clock,
    title: "Disponible 7j/7 — 24h/24",
    desc: "Y compris nuits, week-ends et jours fériés. Idéal pour les vols matinaux depuis l'aéroport. Réservation et confirmation sous 2h.",
  },
  {
    icon: CheckCircle,
    title: "Volkswagen Tiguan 7 places",
    desc: "Grand SUV confortable pour groupes, familles, bagages nombreux. Parfait pour les déplacements professionnels collectifs depuis la zone de Meyzieu.",
  },
];

const destinations = [
  { from: "Meyzieu", to: "Aéroport Lyon Saint-Exupéry", time: "~15 min" },
  { from: "Meyzieu", to: "Lyon Centre", time: "~25 min" },
  { from: "Meyzieu", to: "Bron Hôpital", time: "~20 min" },
  { from: "Meyzieu", to: "Montluel", time: "~15 min" },
  { from: "Meyzieu", to: "Ambérieu-en-Bugey", time: "~35 min" },
  { from: "Meyzieu", to: "Bourg-en-Bresse", time: "~1h" },
];

export default function MeyzieuPage() {
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
            Taxi · Meyzieu (69330)
          </span>
          <h1 className="text-4xl sm:text-5xl font-semibold tracking-tight text-black leading-tight mb-6">
            Taxi à<br />
            <span className="text-black/30">Meyzieu</span>
          </h1>
          <p className="text-base text-[#555] leading-relaxed max-w-2xl mb-8">
            SPM Taxi intervient à Meyzieu et dans toute la zone périurbaine est-lyonnaise (Rhône 69330).
            Ville à fort volume de recherche, idéalement placée entre Lyon et l&apos;Ain, à 15 minutes
            seulement de l&apos;aéroport Lyon Saint-Exupéry. Taxi conventionné CPAM, transport médical
            vers Bron Hôpital, transfert aéroport, longue distance. Volkswagen Tiguan Allspace 7 places.
            Disponible 7j/7, 24h/24. Note Google : <strong>4,9/5</strong>.
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
            Nos services à Meyzieu
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
            Temps de trajet depuis Meyzieu
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
            Taxi aéroport et médical à Meyzieu (Rhône 69330)
          </h2>
          <p className="text-sm text-[#555] leading-relaxed mb-4">
            Meyzieu est une commune du Rhône (69330) dans la première couronne est de Lyon. Sa
            localisation en fait l&apos;une des villes les mieux placées de la métropole pour rejoindre
            l&apos;aéroport Lyon Saint-Exupéry : seulement 15 minutes sans trafic. Les nombreuses
            entreprises de la zone industrielle de Meyzieu génèrent également une forte demande
            de transports professionnels.
          </p>
          <p className="text-sm text-[#555] leading-relaxed mb-4">
            Pour les transports médicaux, SPM Taxi est conventionné CPAM et dessert les principaux
            établissements de santé proches : Hôpital de Bron, Clinique du Tonkin, Hôpital
            Édouard Herriot, Hôpital Femme Mère Enfant. Sur prescription médicale, votre trajet
            est pris en charge intégralement par l&apos;Assurance Maladie.
          </p>
          <p className="text-sm text-[#555] leading-relaxed">
            SPM Taxi dessert également les communes de l&apos;Ain proches de Meyzieu : Montluel,
            Ambérieu-en-Bugey, Meximieux et Tignieu-Jameyzieu. Un réseau solide pour vos
            déplacements entre le Rhône et l&apos;Ain.
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
              { href: "/transfert-aeroport-lyon", label: "Transfert aéroport Lyon", desc: "Meyzieu à 15 min · suivi des vols en temps réel" },
              { href: "/taxi-lyon", label: "Taxi Lyon", desc: "Centre de Lyon en 25 min depuis Meyzieu" },
              { href: "/taxi-longue-distance", label: "Longue distance", desc: "Partout en France · tarif fixe sur devis" },
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
                q: "Combien de temps pour aller de Meyzieu à l'aéroport de Lyon en taxi ?",
                a: "Depuis Meyzieu, l'aéroport Lyon Saint-Exupéry est à seulement 15 minutes en taxi. Un avantage majeur pour les voyageurs fréquents. Tarif estimé à partir de 35 €, fixe et garanti à l'avance. Réservez au 07 67 75 18 98.",
              },
              {
                q: "Le taxi est-il conventionné CPAM à Meyzieu ?",
                a: "Oui, SPM Taxi est agréé par la CPAM. Sur prescription médicale, vos trajets vers l'Hôpital de Bron, la Clinique du Tonkin ou les hôpitaux lyonnais sont pris en charge par l'Assurance Maladie, sans avance de frais de votre part.",
              },
              {
                q: "Comment réserver un taxi à Meyzieu rapidement ?",
                a: "Appelez le 07 67 75 18 98 ou envoyez un message WhatsApp. Réponse et confirmation assurées sous 2h, 7 jours sur 7. Réservation à l'avance possible et recommandée pour les vols matinaux.",
              },
              {
                q: "SPM Taxi dessert-il Meyzieu vers le centre de Lyon ?",
                a: "Oui, SPM Taxi assure les transferts de Meyzieu vers Lyon centre en environ 25 minutes. Idéal pour les déplacements professionnels, rendez-vous médicaux, sorties culturelles ou trajets gare Part-Dieu.",
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
          <h2 className="text-2xl font-semibold mb-3">Taxi à Meyzieu — Réservez maintenant</h2>
          <p className="text-white/50 text-sm mb-8">Conventionné CPAM · Aéroport 15 min · 7j/7 24h/24 · Note 4,9/5</p>
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
