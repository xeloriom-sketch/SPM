import type { Metadata } from "next";
import Link from "next/link";
import { ArrowLeft, Phone, MapPin, Clock, CheckCircle, ArrowRight, Shield } from "lucide-react";

export const metadata: Metadata = {
  title: "Taxi Pont-d'Ain — Conventionné CPAM | SPM Taxi",
  description:
    "Taxi SPM à Pont-d'Ain (Ain 01160). Conventionné CPAM, transport médical remboursé vers Fleyriat et Lyon. Proche d'Ambérieu-en-Bugey. Volkswagen Tiguan 7 places. 7j/7 24h/24. ☎ 07 67 75 18 98.",
  keywords: [
    "taxi Pont-d'Ain",
    "taxi Pont d'Ain Ain 01",
    "taxi conventionné Pont-d'Ain",
    "taxi CPAM Pont-d'Ain",
    "taxi Lyon depuis Pont-d'Ain",
    "taxi hôpital Fleyriat Pont-d'Ain",
    "taxi Pont-d'Ain 01160",
    "transport médical Pont-d'Ain",
    "taxi Ambérieu Pont-d'Ain",
    "réserver taxi Pont-d'Ain",
  ],
  alternates: { canonical: "https://taxispm.fr/taxi-pont-d-ain/" },
  openGraph: {
    title: "Taxi Pont-d'Ain — SPM Taxi | Conventionné CPAM · 7j/7 24h/24",
    description:
      "Votre taxi à Pont-d'Ain : conventionné CPAM, transport médical vers Fleyriat, transfert aéroport Lyon. Volkswagen Tiguan 7 places. Disponible 7j/7. ☎ 07 67 75 18 98.",
    url: "https://taxispm.fr/taxi-pont-d-ain/",
    type: "website",
    locale: "fr_FR",
    images: [
      {
        url: "/image/tiguan-front-quarter.webp",
        alt: "Taxi SPM Pont-d'Ain — Volkswagen Tiguan 7 places",
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
        { "@type": "City", name: "Pont-d'Ain", containedInPlace: { "@type": "AdministrativeArea", name: "Ain" } },
        { "@type": "City", name: "Ambérieu-en-Bugey" },
        { "@type": "City", name: "Bourg-en-Bresse" },
        { "@type": "City", name: "Lyon" },
        { "@type": "Hospital", name: "Hôpital de Fleyriat" },
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
        { "@type": "ListItem", position: 2, name: "Taxi Pont-d'Ain", item: "https://taxispm.fr/taxi-pont-d-ain/" },
      ],
    },
    {
      "@type": "FAQPage",
      mainEntity: [
        {
          "@type": "Question",
          name: "Combien coûte un taxi de Pont-d'Ain à l'hôpital de Fleyriat ?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Depuis Pont-d'Ain, un taxi vers l'hôpital de Fleyriat (Bourg-en-Bresse) dure environ 30 minutes. Sur prescription médicale, ce trajet peut être pris en charge par la CPAM sans avance de frais. Renseignements au 07 67 75 18 98.",
          },
        },
        {
          "@type": "Question",
          name: "Le taxi est-il conventionné CPAM à Pont-d'Ain ?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Oui, SPM Taxi est agréé par l'Assurance Maladie. Vos transports médicaux vers Fleyriat, les hôpitaux d'Ambérieu ou de Lyon sont pris en charge sur prescription. Nous gérons toutes les démarches administratives.",
          },
        },
        {
          "@type": "Question",
          name: "Comment aller de Pont-d'Ain à l'aéroport de Lyon en taxi ?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "SPM Taxi assure le transfert depuis Pont-d'Ain vers l'aéroport Lyon Saint-Exupéry en environ 55 minutes. Tarif fixe, suivi des vols en temps réel. Réservez au 07 67 75 18 98.",
          },
        },
        {
          "@type": "Question",
          name: "SPM Taxi dessert-il Pont-d'Ain la nuit et le week-end ?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Oui, SPM Taxi est disponible 24h/24 et 7j/7, y compris les nuits, week-ends et jours fériés. Confirmation de réservation assurée sous 2h.",
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
    desc: "Agréé par l'Assurance Maladie. Prise en charge vers l'hôpital de Fleyriat, les cliniques d'Ambérieu et les établissements lyonnais. Zéro avance de frais.",
  },
  {
    icon: MapPin,
    title: "Aéroport Lyon Saint-Exupéry",
    desc: "Depuis Pont-d'Ain, comptez ~55 min jusqu'à l'aéroport. Suivi des vols en temps réel, pas de frais pour retard.",
  },
  {
    icon: Clock,
    title: "Disponible 7j/7 — 24h/24",
    desc: "Y compris nuits, week-ends et jours fériés. Réservation et confirmation sous 2h. Idéal pour rendez-vous médicaux matinaux.",
  },
  {
    icon: CheckCircle,
    title: "Volkswagen Tiguan 7 places",
    desc: "Grand SUV confortable. Idéal pour les familles, groupes, bagages nombreux et personnes à mobilité réduite.",
  },
];

const destinations = [
  { from: "Pont-d'Ain", to: "Ambérieu-en-Bugey", time: "~15 min" },
  { from: "Pont-d'Ain", to: "Bourg-en-Bresse / Fleyriat", time: "~30 min" },
  { from: "Pont-d'Ain", to: "Lyon Centre", time: "~1h" },
  { from: "Pont-d'Ain", to: "Aéroport Lyon Saint-Exupéry", time: "~55 min" },
  { from: "Pont-d'Ain", to: "Montluel", time: "~40 min" },
  { from: "Pont-d'Ain", to: "Grenoble", time: "~1h30" },
];

export default function PontDAinPage() {
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
            Taxi · Pont-d&apos;Ain (01160)
          </span>
          <h1 className="text-4xl sm:text-5xl font-semibold tracking-tight text-black leading-tight mb-6">
            Taxi à<br />
            <span className="text-black/30">Pont-d&apos;Ain</span>
          </h1>
          <p className="text-base text-[#555] leading-relaxed max-w-2xl mb-8">
            SPM Taxi intervient à Pont-d&apos;Ain et dans tout le secteur Bugey-Revermont (Ain 01160).
            Proche d&apos;Ambérieu-en-Bugey (15 min), Pont-d&apos;Ain est un point de départ naturel
            pour les transferts vers l&apos;hôpital de Fleyriat, les établissements lyonnais et
            l&apos;aéroport. Taxi conventionné CPAM, fort trafic médical vers Fleyriat et Lyon.
            Volkswagen Tiguan Allspace 7 places. Disponible 7j/7, 24h/24.
            Note Google : <strong>4,9/5</strong>.
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
            Nos services à Pont-d&apos;Ain
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
            Temps de trajet depuis Pont-d&apos;Ain
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
            Taxi vers l&apos;hôpital Fleyriat depuis Pont-d&apos;Ain
          </h2>
          <p className="text-sm text-[#555] leading-relaxed mb-4">
            Pont-d&apos;Ain est une commune de l&apos;Ain (01160) située dans la vallée de l&apos;Ain, à
            15 minutes d&apos;Ambérieu-en-Bugey et 30 minutes de Bourg-en-Bresse. Son accès à
            l&apos;hôpital de Fleyriat en fait une zone à fort trafic médical : dialyse, chimiothérapie,
            radiothérapie et consultations spécialisées.
          </p>
          <p className="text-sm text-[#555] leading-relaxed mb-4">
            SPM Taxi est conventionné CPAM et prend en charge vos transports médicaux depuis
            Pont-d&apos;Ain sur prescription médicale. Que vous vous rendiez à Fleyriat, à la clinique
            Convert d&apos;Ambérieu ou aux hôpitaux lyonnais, nous gérons l&apos;intégralité des démarches
            administratives pour une prise en charge sans avance de frais.
          </p>
          <p className="text-sm text-[#555] leading-relaxed">
            Pour vos voyages d&apos;affaires ou vos transferts aéroport depuis Pont-d&apos;Ain, notre
            Volkswagen Tiguan Allspace 7 places garantit un confort optimal. Tarifs fixes,
            transparents, communiqués à l&apos;avance sur devis gratuit.
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
              { href: "/transfert-aeroport-lyon", label: "Transfert aéroport Lyon", desc: "Depuis Pont-d'Ain · suivi des vols en temps réel" },
              { href: "/taxi-amberieu-en-bugey", label: "Taxi Ambérieu-en-Bugey", desc: "Zone la plus proche de Pont-d'Ain (15 min)" },
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
                q: "Combien coûte un taxi de Pont-d'Ain à l'hôpital de Fleyriat ?",
                a: "Depuis Pont-d'Ain, un taxi vers l'hôpital de Fleyriat (Bourg-en-Bresse) dure environ 30 minutes. Sur prescription médicale, ce trajet peut être pris en charge intégralement par la CPAM. Renseignements et devis gratuit au 07 67 75 18 98.",
              },
              {
                q: "Le taxi est-il conventionné CPAM à Pont-d'Ain ?",
                a: "Oui, SPM Taxi est agréé par l'Assurance Maladie pour les transports médicaux. Vos trajets vers Fleyriat, Ambérieu ou les hôpitaux lyonnais sont pris en charge sur prescription. Nous gérons toutes les démarches administratives.",
              },
              {
                q: "Comment aller de Pont-d'Ain à l'aéroport de Lyon en taxi ?",
                a: "SPM Taxi assure le transfert depuis Pont-d'Ain vers l'aéroport Lyon Saint-Exupéry en environ 55 minutes. Tarif fixe garanti, suivi des vols en temps réel, aucun frais supplémentaire en cas de retard. Réservez au 07 67 75 18 98.",
              },
              {
                q: "SPM Taxi dessert-il Pont-d'Ain la nuit et le week-end ?",
                a: "Oui, SPM Taxi est disponible 24h/24 et 7j/7 depuis Pont-d'Ain, y compris les nuits, week-ends et jours fériés. Parfait pour les dialyses matinales ou les vols tôt le matin. Confirmation de réservation sous 2h.",
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
          <h2 className="text-2xl font-semibold mb-3">Taxi à Pont-d&apos;Ain — Réservez maintenant</h2>
          <p className="text-white/50 text-sm mb-8">Conventionné CPAM · Fleyriat 30 min · 7j/7 24h/24 · Note 4,9/5</p>
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
