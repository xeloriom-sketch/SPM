import type { Metadata } from "next";
import Link from "next/link";
import { ArrowLeft, Phone, MapPin, Clock, CheckCircle, ArrowRight, Shield, Star } from "lucide-react";

export const metadata: Metadata = {
  title: "Taxi Villebois — Conventionné CPAM · Basé à Villebois (Ain 01)",
  description:
    "SPM Taxi est basé à Villebois (Ain 01150). Taxi conventionné CPAM agréé Assurance Maladie. Transport médical, aéroport Lyon Saint-Exupéry, longue distance. Volkswagen Tiguan 7 places. 7j/7 24h/24. ☎ 07 67 75 18 98.",
  keywords: [
    "taxi Villebois", "taxi Villebois Ain", "taxi Villebois 01150",
    "taxi conventionné Villebois", "taxi CPAM Villebois",
    "taxi médical Villebois", "taxi VSL Villebois Ain",
    "transport médical Villebois CPAM", "taxi Villebois aéroport Lyon",
    "taxi Villebois Lyon Saint-Exupéry", "taxi Villebois 01",
    "taxi Villebois Ambérieu", "taxi Villebois Lagnieu",
    "taxi Villebois Meximieux", "taxi Villebois Belley",
    "SPM Taxi Villebois", "taxi Ain 01 Villebois",
    "taxi Villebois prix tarif", "réserver taxi Villebois",
    "taxi 7 places Villebois Ain", "taxi Villebois disponible 24h24",
    "taxi Villebois tiers payant", "taxi Villebois remboursé Assurance Maladie",
  ],
  alternates: { canonical: "https://taxispm.fr/taxi-villebois/" },
  openGraph: {
    title: "Taxi Villebois — Conventionné CPAM · Basé à Villebois (Ain 01)",
    description:
      "SPM Taxi basé à Villebois, Ain 01. Conventionné CPAM, aéroport Lyon, transport médical remboursé. Volkswagen Tiguan 7 places. Note 4,9/5. ☎ 07 67 75 18 98.",
    url: "https://taxispm.fr/taxi-villebois/",
    type: "website",
    locale: "fr_FR",
    images: [
      {
        url: "/image/tiguan-front-quarter.webp",
        alt: "SPM Taxi Villebois Ain — Volkswagen Tiguan Allspace 7 places",
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
      name: "SPM Taxi — Basé à Villebois (Ain 01)",
      telephone: "+33767751898",
      email: "contact@taxispm.fr",
      url: "https://taxispm.fr/taxi-villebois/",
      description:
        "SPM Taxi est un taxi conventionné CPAM basé à Villebois (Ain 01150). Transport médical remboursé sur prescription, transferts aéroport Lyon Saint-Exupéry, longue distance. Volkswagen Tiguan Allspace 7 places. Note 4,9/5 Google. Disponible 7j/7, 24h/24.",
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
        latitude: 45.808,
        longitude: 5.452,
      },
      areaServed: [
        { "@type": "City", name: "Villebois", containedInPlace: { "@type": "AdministrativeArea", name: "Ain" } },
        { "@type": "City", name: "Lagnieu" },
        { "@type": "City", name: "Ambérieu-en-Bugey" },
        { "@type": "City", name: "Meximieux" },
        { "@type": "City", name: "Belley" },
        { "@type": "City", name: "Lyon" },
        { "@type": "Airport", name: "Aéroport Lyon Saint-Exupéry", iataCode: "LYS" },
      ],
      aggregateRating: { "@type": "AggregateRating", ratingValue: "4.9", reviewCount: "9", bestRating: "5", worstRating: "1" },
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
      "@type": "FAQPage",
      mainEntity: [
        {
          "@type": "Question",
          name: "Où est basé SPM Taxi à Villebois ?",
          acceptedAnswer: { "@type": "Answer", text: "SPM Taxi est basé au 951 route des hauts fourneaux, 01150 Villebois (Ain). C'est votre taxi de proximité à Villebois, disponible 7j/7 et 24h/24. Appelez le 07 67 75 18 98." },
        },
        {
          "@type": "Question",
          name: "Combien coûte un taxi de Villebois à l'aéroport de Lyon ?",
          acceptedAnswer: { "@type": "Answer", text: "Depuis Villebois, le transfert vers l'aéroport Lyon Saint-Exupéry est à partir de 65 €. Tarif fixe garanti, sans surprise, sans majoration pour retard de vol. Devis gratuit au 07 67 75 18 98." },
        },
        {
          "@type": "Question",
          name: "SPM Taxi est-il conventionné CPAM à Villebois ?",
          acceptedAnswer: { "@type": "Answer", text: "Oui. SPM Taxi est agréé par la CPAM (Assurance Maladie) pour les transports médicaux assis sur prescription médicale. Zéro avance de frais pour le patient — la CPAM est facturée directement. Chimiothérapie, dialyse, radiothérapie, hospitalisation." },
        },
        {
          "@type": "Question",
          name: "Quelle est la note de SPM Taxi à Villebois ?",
          acceptedAnswer: { "@type": "Answer", text: "SPM Taxi est noté 4,9/5 sur Google avec 9 avis vérifiés. Ponctualité, professionnalisme et confort sont les qualités les plus citées par les clients." },
        },
      ],
    },
    {
      "@type": "BreadcrumbList",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Accueil", item: "https://taxispm.fr" },
        { "@type": "ListItem", position: 2, name: "Taxi Villebois", item: "https://taxispm.fr/taxi-villebois/" },
      ],
    },
  ],
};

const services = [
  {
    icon: Shield,
    title: "Transport médical CPAM — tiers payant",
    desc: "Agréé CPAM depuis Villebois. Chimiothérapie, dialyse, radiothérapie, hospitalisation, consultation : zéro avance de frais avec une prescription médicale de transport.",
  },
  {
    icon: MapPin,
    title: "Aéroport Lyon Saint-Exupéry",
    desc: "Depuis Villebois, ~55 min jusqu'à l'aéroport LYS. Suivi des vols en temps réel, pas de frais en cas de retard. Tarif fixe : à partir de 65 €.",
  },
  {
    icon: Clock,
    title: "Disponible 7j/7 — 24h/24",
    desc: "SPM Taxi est basé à Villebois et répond à toute heure. Nuits, week-ends, jours fériés. Réservation confirmée sous 2h.",
  },
  {
    icon: CheckCircle,
    title: "Volkswagen Tiguan Allspace 7 places",
    desc: "Grand SUV climatisé bi-zone, Wi-Fi, attache-remorque homologuée, coffre spacieux. Adapté aux familles, groupes, personnes à mobilité réduite.",
  },
];

const destinations = [
  { from: "Villebois", to: "Aéroport Lyon Saint-Exupéry", time: "~55 min", price: "à partir de 65 €" },
  { from: "Villebois", to: "Lyon Centre (Part-Dieu)", time: "~1h05", price: "à partir de 70 €" },
  { from: "Villebois", to: "Ambérieu-en-Bugey", time: "~20 min", price: "à partir de 25 €" },
  { from: "Villebois", to: "Lagnieu", time: "~10 min", price: "à partir de 20 €" },
  { from: "Villebois", to: "Belley", time: "~30 min", price: "à partir de 40 €" },
  { from: "Villebois", to: "Meximieux", time: "~35 min", price: "à partir de 40 €" },
  { from: "Villebois", to: "Bourg-en-Bresse", time: "~40 min", price: "à partir de 55 €" },
  { from: "Villebois", to: "Tignieu-Jameyzieu", time: "~45 min", price: "à partir de 50 €" },
];

const reviews = [
  { name: "sabrina selini", note: 5, text: "Sérieux, ponctuel, disponible. Trajet très agréable. Conventionné pour tous les trajets médicaux. Je recommande vivement." },
  { name: "Chloé Burguiere", note: 5, text: "Taxi très accueillant, accepte les personnes en situation de handicap. Je recommande." },
  { name: "SOSO 01", note: 5, text: "Taxi très sérieux et ponctuel, à l'écoute de ses clients. Vous pouvez y aller les yeux fermés." },
];

export default function TaxiVilleboisPage() {
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

        {/* Hero */}
        <div className="mb-16">
          <span className="text-[10px] font-bold tracking-[0.3em] uppercase text-black/40 mb-4 block">
            Taxi basé à · Villebois (01150)
          </span>
          <h1 className="text-4xl sm:text-5xl font-semibold tracking-tight text-black leading-tight mb-6">
            SPM Taxi<br />
            <span className="text-black/30">Villebois — Ain 01</span>
          </h1>
          <div className="flex items-center gap-2 mb-6">
            {[1,2,3,4,5].map(i => <Star key={i} className="h-4 w-4 fill-black text-black" />)}
            <span className="text-sm font-semibold text-black ml-1">4,9/5</span>
            <span className="text-sm text-black/40">· 9 avis Google vérifiés</span>
          </div>
          <p className="text-base text-[#555] leading-relaxed max-w-2xl mb-4">
            SPM Taxi est votre taxi de proximité à Villebois (Ain 01150). Basé directement
            dans la commune, votre chauffeur vous prend en charge rapidement — idéal pour
            les trajets médicaux en urgence ou les vols tôt le matin.
          </p>
          <p className="text-base text-[#555] leading-relaxed max-w-2xl mb-8">
            Taxi conventionné CPAM : vos transports médicaux sur prescription sont pris en charge
            par l'Assurance Maladie. Zéro avance de frais. Volkswagen Tiguan Allspace 7 places,
            climatisation, Wi-Fi, attache-remorque homologuée. Disponible 7j/7, 24h/24.
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
            Nos services depuis Villebois
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

        {/* Tarifs */}
        <section className="mb-16">
          <h2 className="text-2xl font-semibold tracking-tight text-black mb-3">
            Tarifs taxi depuis Villebois
          </h2>
          <p className="text-sm text-[#555] mb-8">Tarifs indicatifs — devis gratuit personnalisé sous 2h.</p>
          <div className="bg-white rounded-2xl border border-black/[0.06] overflow-hidden">
            {destinations.map((d, i) => (
              <div
                key={d.to}
                className={`flex items-center justify-between px-6 py-4 gap-4 ${i !== destinations.length - 1 ? "border-b border-black/[0.06]" : ""}`}
              >
                <div className="flex items-center gap-3 min-w-0">
                  <MapPin className="h-4 w-4 text-black/25 shrink-0" />
                  <span className="text-sm font-medium text-black truncate">{d.to}</span>
                </div>
                <div className="flex items-center gap-4 shrink-0 text-right">
                  <span className="text-sm text-black/40">{d.time}</span>
                  <span className="text-sm font-semibold text-black">{d.price}</span>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Avis clients */}
        <section className="mb-16">
          <h2 className="text-2xl font-semibold tracking-tight text-black mb-8">
            Ce que disent nos clients
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            {reviews.map(({ name, note, text }) => (
              <div key={name} className="bg-white rounded-2xl p-6 border border-black/[0.06]">
                <div className="flex items-center gap-1 mb-3">
                  {Array.from({ length: note }).map((_, i) => (
                    <Star key={i} className="h-3 w-3 fill-black text-black" />
                  ))}
                </div>
                <p className="text-xs text-[#555] leading-relaxed mb-4">{text}</p>
                <p className="text-[10px] font-semibold text-black/40 uppercase tracking-wider">{name}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Liens internes */}
        <section className="mb-16">
          <h2 className="text-2xl font-semibold tracking-tight text-black mb-8">
            Tous nos services
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {[
              { href: "/taxi-conventionne-cpam", label: "Transport médical CPAM", desc: "Prescription, tiers payant, zéro avance de frais" },
              { href: "/transfert-aeroport-lyon", label: "Aéroport Lyon Saint-Exupéry", desc: "À partir de 65 € · suivi des vols · tarif fixe" },
              { href: "/taxi-longue-distance", label: "Longue distance France", desc: "Paris, Marseille, Genève · devis gratuit" },
              { href: "/taxi-remorque-ain", label: "Remorque & transport colis", desc: "Attache-remorque homologuée · livraison express" },
              { href: "/taxi-tignieu-jameyzieu", label: "Taxi Tignieu-Jameyzieu", desc: "Également disponible en Isère 38" },
              { href: "/taxi-amberieu-en-bugey", label: "Taxi Ambérieu-en-Bugey", desc: "Ville la plus proche de Villebois" },
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
                q: "Où est situé SPM Taxi à Villebois ?",
                a: "SPM Taxi est basé au 951 route des hauts fourneaux, 01150 Villebois (Ain). Votre taxi est à quelques minutes de votre domicile à Villebois — idéal pour les départs tôt le matin ou les urgences médicales.",
              },
              {
                q: "Combien coûte un taxi de Villebois à l'aéroport Lyon Saint-Exupéry ?",
                a: "Depuis Villebois, le transfert vers l'aéroport Lyon Saint-Exupéry est à partir de 65 €. Tarif fixe garanti. En cas de retard de vol, SPM Taxi attend sans frais supplémentaires. Devis gratuit et personnalisé au 07 67 75 18 98.",
              },
              {
                q: "Est-ce que SPM Taxi est conventionné CPAM à Villebois ?",
                a: "Oui, SPM Taxi est agréé par la CPAM (Caisse Primaire d'Assurance Maladie). Avec une prescription médicale de transport, vos trajets vers les hôpitaux, centres de dialyse ou de radiothérapie sont remboursés par l'Assurance Maladie. Zéro avance de frais — la CPAM est facturée directement par SPM Taxi.",
              },
              {
                q: "SPM Taxi fait-il des courses de nuit à Villebois ?",
                a: "Oui, 7j/7 et 24h/24. SPM Taxi intervient à Villebois la nuit, les week-ends et les jours fériés. Parfait pour les vols du matin ou les rendez-vous médicaux en dehors des horaires habituels.",
              },
              {
                q: "Quelle est la note de SPM Taxi ?",
                a: "SPM Taxi est noté 4,9/5 sur Google avec 9 avis clients vérifiés. Ponctualité, sérieux et confort sont les points forts régulièrement cités.",
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
          <h2 className="text-2xl font-semibold mb-2">Votre taxi à Villebois</h2>
          <p className="text-white/40 text-xs mb-2 tracking-wider uppercase">951 route des hauts fourneaux · 01150 Villebois</p>
          <p className="text-white/50 text-sm mb-8">Note 4,9/5 · Conventionné CPAM · 7j/7 24h/24 · Devis gratuit sous 2h</p>
          <div className="flex flex-wrap gap-3 justify-center">
            <a
              href="tel:+33767751898"
              className="inline-flex items-center gap-2 rounded-full bg-white text-black px-6 py-3 text-sm font-semibold hover:bg-white/90 transition-colors"
            >
              <Phone className="h-4 w-4" />
              07 67 75 18 98
            </a>
            <a
              href="https://wa.me/33767751898?text=Bonjour%2C%20je%20souhaite%20r%C3%A9server%20un%20taxi."
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-full bg-[#25D366] text-white px-6 py-3 text-sm font-semibold hover:bg-[#20bb5a] transition-colors"
            >
              WhatsApp
            </a>
            <a
              href="/#contact"
              className="inline-flex items-center gap-2 rounded-full border border-white/25 text-white px-6 py-3 text-sm font-semibold hover:border-white/50 transition-colors"
            >
              Formulaire de contact
              <ArrowRight className="h-4 w-4" />
            </a>
          </div>
        </div>

      </main>

      <footer className="border-t border-black/[0.06] px-6 py-8 text-center">
        <p className="text-xs text-black/30">
          © 2026 SPM Taxi · 951 route des hauts fourneaux · 01150 Villebois (Ain) ·{" "}
          <Link href="/" className="underline underline-offset-2">Retour au site</Link>
        </p>
      </footer>
    </div>
  );
}
