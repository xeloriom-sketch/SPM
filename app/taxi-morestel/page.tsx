import type { Metadata } from "next";
import Link from "next/link";
import { ArrowLeft, Phone, MapPin, Clock, CheckCircle, ArrowRight, Shield } from "lucide-react";

export const metadata: Metadata = {
  title: "Taxi Morestel — Conventionné CPAM | SPM Taxi",
  description:
    "Taxi SPM à Morestel (Isère 38510). Conventionné CPAM, transport médical remboursé vers Lyon et Grenoble. Volkswagen Tiguan 7 places. 7j/7 24h/24. ☎ 07 67 75 18 98.",
  keywords: [
    "taxi Morestel",
    "taxi Morestel Isère",
    "taxi conventionné Morestel",
    "taxi CPAM Morestel",
    "taxi Lyon depuis Morestel",
    "taxi Grenoble depuis Morestel",
    "taxi Morestel 38510",
    "transport médical Morestel",
    "taxi aéroport Lyon Morestel",
    "réserver taxi Morestel",
  ],
  alternates: { canonical: "https://taxispm.fr/taxi-morestel/" },
  openGraph: {
    title: "Taxi Morestel — SPM Taxi | Conventionné CPAM · 7j/7 24h/24",
    description:
      "Votre taxi à Morestel (Isère) : conventionné CPAM, transport médical vers Lyon et Grenoble, transfert aéroport. Volkswagen Tiguan 7 places. Disponible 7j/7. ☎ 07 67 75 18 98.",
    url: "https://taxispm.fr/taxi-morestel/",
    type: "website",
    locale: "fr_FR",
    images: [
      {
        url: "/image/tiguan-front-quarter.webp",
        alt: "Taxi SPM Morestel — Volkswagen Tiguan 7 places",
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
        { "@type": "City", name: "Morestel", containedInPlace: { "@type": "AdministrativeArea", name: "Isère" } },
        { "@type": "City", name: "Lyon" },
        { "@type": "City", name: "Grenoble" },
        { "@type": "City", name: "Ambérieu-en-Bugey" },
        { "@type": "City", name: "Bourgoin-Jallieu" },
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
        { "@type": "ListItem", position: 2, name: "Taxi Morestel", item: "https://taxispm.fr/taxi-morestel/" },
      ],
    },
    {
      "@type": "FAQPage",
      mainEntity: [
        {
          "@type": "Question",
          name: "Combien coûte un taxi de Morestel à Lyon ?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Depuis Morestel, un taxi vers Lyon centre est estimé à partir de 75 €. Le trajet dure environ 1h10. Tarif fixe, sans surprise. Demandez votre devis gratuit au 07 67 75 18 98.",
          },
        },
        {
          "@type": "Question",
          name: "Existe-t-il un taxi conventionné CPAM à Morestel ?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Oui, SPM Taxi est agréé par l'Assurance Maladie. Sur prescription médicale, vos trajets vers les hôpitaux de Lyon ou de Grenoble sont pris en charge par la CPAM. Nous gérons l'ensemble des formalités administratives.",
          },
        },
        {
          "@type": "Question",
          name: "Comment rejoindre l'aéroport de Lyon depuis Morestel en taxi ?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "SPM Taxi assure le transfert depuis Morestel vers l'aéroport Lyon Saint-Exupéry en environ 55 minutes. Suivi des vols en temps réel, aucun frais supplémentaire en cas de retard. Réservation au 07 67 75 18 98.",
          },
        },
        {
          "@type": "Question",
          name: "SPM Taxi est-il disponible la nuit à Morestel ?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Oui, SPM Taxi assure des courses 24h/24 et 7j/7 depuis Morestel, y compris les nuits, week-ends et jours fériés. Confirmation de réservation assurée sous 2h.",
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
    desc: "Agréé par l'Assurance Maladie. Prise en charge de vos trajets vers les hôpitaux de Lyon et Grenoble sur prescription médicale. Zéro avance de frais.",
  },
  {
    icon: MapPin,
    title: "Aéroport Lyon Saint-Exupéry",
    desc: "Depuis Morestel, comptez ~55 min. Un taxi fiable pour tous vos vols. Suivi en temps réel, pas de frais pour retard.",
  },
  {
    icon: Clock,
    title: "Disponible 7j/7 — 24h/24",
    desc: "Y compris nuits, week-ends et jours fériés. Réservation et confirmation sous 2h. Aucune offre locale comparable.",
  },
  {
    icon: CheckCircle,
    title: "Volkswagen Tiguan 7 places",
    desc: "Grand SUV confortable. Idéal pour les familles, groupes, bagages nombreux et personnes à mobilité réduite.",
  },
];

const destinations = [
  { from: "Morestel", to: "Lyon Centre", time: "~1h10" },
  { from: "Morestel", to: "Aéroport Lyon Saint-Exupéry", time: "~55 min" },
  { from: "Morestel", to: "Grenoble", time: "~1h20" },
  { from: "Morestel", to: "Ambérieu-en-Bugey", time: "~50 min" },
  { from: "Morestel", to: "Bourgoin-Jallieu", time: "~35 min" },
  { from: "Morestel", to: "Bourg-en-Bresse", time: "~1h05" },
];

export default function MorestelPage() {
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
            Taxi · Morestel (38510)
          </span>
          <h1 className="text-4xl sm:text-5xl font-semibold tracking-tight text-black leading-tight mb-6">
            Taxi à<br />
            <span className="text-black/30">Morestel</span>
          </h1>
          <p className="text-base text-[#555] leading-relaxed max-w-2xl mb-8">
            SPM Taxi intervient à Morestel et dans tout le nord-Isère (38510). Ville à fort potentiel
            médical sans taxi local solide, Morestel compte de nombreux patients qui se déplacent
            vers les hôpitaux de Lyon et Grenoble. Taxi conventionné CPAM, transfert aéroport Lyon,
            longue distance. Volkswagen Tiguan Allspace 7 places. Disponible 7j/7, 24h/24.
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
            Nos services à Morestel
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
            Temps de trajet depuis Morestel
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
            Taxi conventionné CPAM à Morestel (Isère 38510)
          </h2>
          <p className="text-sm text-[#555] leading-relaxed mb-4">
            Morestel est une ville de l&apos;Isère (38510) située dans le nord du département, à la
            confluence des axes vers Lyon, Grenoble et Bourg-en-Bresse. Peu desservie par les
            taxis locaux, elle représente une zone de forte demande pour les transports médicaux
            et les transferts aéroport.
          </p>
          <p className="text-sm text-[#555] leading-relaxed mb-4">
            SPM Taxi assure les déplacements médicaux depuis Morestel vers les hôpitaux lyonnais
            (Édouard Herriot, Croix-Rousse, Cardiologique) et grenoblois (CHU Grenoble). Notre
            agrément CPAM permet la prise en charge de vos transports sur ordonnance médicale,
            sans avance de frais pour le patient.
          </p>
          <p className="text-sm text-[#555] leading-relaxed">
            Pour un transfert vers l&apos;aéroport Lyon Saint-Exupéry ou un déplacement professionnel
            depuis Morestel, SPM Taxi vous propose des tarifs fixes compétitifs avec une
            Volkswagen Tiguan Allspace 7 places, idéale pour les groupes et les familles.
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
              { href: "/transfert-aeroport-lyon", label: "Transfert aéroport Lyon", desc: "Depuis Morestel · suivi des vols en temps réel" },
              { href: "/taxi-longue-distance", label: "Longue distance", desc: "Partout en France · tarif fixe sur devis" },
              { href: "/taxi-bourgoin-jallieu", label: "Taxi Bourgoin-Jallieu", desc: "Proche de Morestel · même zone nord-Isère" },
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
                q: "Combien coûte un taxi de Morestel à Lyon ?",
                a: "Depuis Morestel, un taxi vers Lyon centre est estimé à partir de 75 €. Le trajet dure environ 1h10. Tarif fixe garanti à l'avance, sans surprises. Demandez votre devis gratuit au 07 67 75 18 98.",
              },
              {
                q: "Existe-t-il un taxi conventionné CPAM à Morestel ?",
                a: "Oui, SPM Taxi est agréé par la CPAM pour les transports médicaux sur prescription. Vos trajets vers les hôpitaux de Lyon ou de Grenoble peuvent être pris en charge par l'Assurance Maladie. Nous gérons toutes les démarches administratives.",
              },
              {
                q: "Comment rejoindre l'aéroport de Lyon depuis Morestel en taxi ?",
                a: "SPM Taxi assure le transfert depuis Morestel vers l'aéroport Lyon Saint-Exupéry en environ 55 minutes. Suivi des vols en temps réel, aucun frais supplémentaire en cas de retard. Réservez au 07 67 75 18 98.",
              },
              {
                q: "SPM Taxi est-il disponible la nuit et le week-end à Morestel ?",
                a: "Oui, SPM Taxi assure des courses 24h/24 et 7j/7 depuis Morestel, y compris les nuits, week-ends et jours fériés. Confirmation de réservation assurée sous 2h.",
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
          <h2 className="text-2xl font-semibold mb-3">Taxi à Morestel — Réservez maintenant</h2>
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
