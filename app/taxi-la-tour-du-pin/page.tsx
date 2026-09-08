import type { Metadata } from "next";
import Link from "next/link";
import { ArrowLeft, Phone, MapPin, Clock, CheckCircle, ArrowRight, Shield } from "lucide-react";

export const metadata: Metadata = {
  title: "Taxi La Tour-du-Pin — Conventionné CPAM",
  description:
    "Taxi à La Tour-du-Pin (Isère 38) : conventionné CPAM, transport médical remboursé, transfert aéroport Lyon Saint-Exupéry. Volkswagen Tiguan 7 places. 7j/7 24h/24. Devis gratuit. ☎ 07 67 75 18 98.",
  keywords: [
    "taxi La Tour-du-Pin", "taxi La Tour du Pin", "taxi Tour du Pin",
    "taxi conventionné La Tour-du-Pin", "taxi CPAM La Tour-du-Pin",
    "taxi médical La Tour-du-Pin", "taxi VSL La Tour-du-Pin",
    "transport médical La Tour-du-Pin CPAM", "taxi La Tour-du-Pin aéroport Lyon",
    "taxi La Tour-du-Pin 38110", "taxi Nord-Isère La Tour-du-Pin",
    "taxi La Tour-du-Pin Bourgoin-Jallieu", "taxi La Tour-du-Pin Grenoble",
    "taxi La Tour-du-Pin prix", "taxi La Tour-du-Pin tarif",
    "réserver taxi La Tour-du-Pin", "taxi 7 places La Tour-du-Pin",
    "chauffeur taxi La Tour-du-Pin", "taxi La Tour-du-Pin tiers payant",
  ],
  alternates: { canonical: "https://taxispm.fr/taxi-la-tour-du-pin/" },
  openGraph: {
    title: "Taxi La Tour-du-Pin — Conventionné CPAM | SPM Taxi · 7j/7 24h/24",
    description:
      "Taxi conventionné CPAM à La Tour-du-Pin. Aéroport Lyon Saint-Exupéry, transport médical remboursé tiers payant, longue distance. Volkswagen Tiguan 7 places. ☎ 07 67 75 18 98.",
    url: "https://taxispm.fr/taxi-la-tour-du-pin/",
    type: "website",
    locale: "fr_FR",
    images: [
      {
        url: "/image/tiguan-front-quarter.webp",
        alt: "Taxi La Tour-du-Pin — SPM Taxi Isère — Volkswagen Tiguan 7 places",
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
      name: "SPM Taxi — Taxi La Tour-du-Pin",
      telephone: "+33767751898",
      url: "https://taxispm.fr/taxi-la-tour-du-pin/",
      description:
        "SPM Taxi assure des courses de taxi à La Tour-du-Pin et dans tout le Nord-Isère. Conventionné CPAM, transport médical sur prescription, transferts aéroport Lyon Saint-Exupéry. Volkswagen Tiguan 7 places, 7j/7 24h/24.",
      address: {
        "@type": "PostalAddress",
        streetAddress: "951 route des hauts fourneaux",
        addressLocality: "Villebois",
        postalCode: "01150",
        addressRegion: "Auvergne-Rhône-Alpes",
        addressCountry: "FR",
      },
      areaServed: [
        { "@type": "City", name: "La Tour-du-Pin", containedInPlace: { "@type": "AdministrativeArea", name: "Isère" } },
        { "@type": "City", name: "Bourgoin-Jallieu" },
        { "@type": "City", name: "Morestel" },
        { "@type": "City", name: "Lyon" },
        { "@type": "Airport", name: "Aéroport Lyon Saint-Exupéry", iataCode: "LYS" },
      ],
      aggregateRating: { "@type": "AggregateRating", ratingValue: 4.6, reviewCount: 12, bestRating: 5, worstRating: 1 },
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
          name: "Combien coûte un taxi de La Tour-du-Pin à l'aéroport de Lyon ?",
          acceptedAnswer: { "@type": "Answer", text: "Depuis La Tour-du-Pin, le transfert vers l'aéroport Lyon Saint-Exupéry est à partir de 70 €. Tarif fixe garanti, sans supplément pour les retards de vol. Devis gratuit au 07 67 75 18 98." },
        },
        {
          "@type": "Question",
          name: "Y a-t-il un taxi conventionné CPAM à La Tour-du-Pin ?",
          acceptedAnswer: { "@type": "Answer", text: "Oui, SPM Taxi est conventionné CPAM et intervient à La Tour-du-Pin pour les transports médicaux assis sur prescription médicale. Zéro avance de frais, tiers payant avec l'Assurance Maladie." },
        },
        {
          "@type": "Question",
          name: "SPM Taxi fait-il des courses de nuit à La Tour-du-Pin ?",
          acceptedAnswer: { "@type": "Answer", text: "Oui, disponible 7j/7 et 24h/24 depuis La Tour-du-Pin, y compris les nuits, week-ends et jours fériés. Idéal pour les vols tôt le matin au départ de Lyon Saint-Exupéry." },
        },
      ],
    },
    {
      "@type": "BreadcrumbList",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Accueil", item: "https://taxispm.fr" },
        { "@type": "ListItem", position: 2, name: "Taxi La Tour-du-Pin", item: "https://taxispm.fr/taxi-la-tour-du-pin/" },
      ],
    },
  ],
};

const services = [
  {
    icon: Shield,
    title: "Transport médical CPAM — tiers payant",
    desc: "Agréé CPAM depuis La Tour-du-Pin. Chimiothérapie, dialyse, hospitalisation, consultation spécialisée — zéro avance de frais sur prescription médicale.",
  },
  {
    icon: MapPin,
    title: "Aéroport Lyon Saint-Exupéry",
    desc: "Depuis La Tour-du-Pin, ~40 min jusqu'à l'aéroport LYS. Suivi des vols, ponctualité garantie, pas de frais en cas de retard.",
  },
  {
    icon: Clock,
    title: "Disponible 7j/7 — 24h/24",
    desc: "SPM Taxi répond à La Tour-du-Pin en tout temps : nuits, week-ends, jours fériés. Réservation et confirmation sous 2h.",
  },
  {
    icon: CheckCircle,
    title: "Volkswagen Tiguan 7 places",
    desc: "Grand SUV climatisé, Wi-Fi, attache-remorque. Idéal pour les familles, groupes et personnes nécessitant plus d'espace.",
  },
];

const destinations = [
  { from: "La Tour-du-Pin", to: "Aéroport Lyon Saint-Exupéry", time: "~40 min", price: "à partir de 70 €" },
  { from: "La Tour-du-Pin", to: "Lyon Centre (Part-Dieu)", time: "~50 min", price: "à partir de 65 €" },
  { from: "La Tour-du-Pin", to: "Bourgoin-Jallieu", time: "~20 min", price: "à partir de 30 €" },
  { from: "La Tour-du-Pin", to: "Grenoble", time: "~45 min", price: "à partir de 75 €" },
  { from: "La Tour-du-Pin", to: "Chambéry", time: "~45 min", price: "à partir de 75 €" },
  { from: "La Tour-du-Pin", to: "Morestel", time: "~20 min", price: "à partir de 30 €" },
];

export default function TaxiLaTourDuPinPage() {
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
            Taxi · La Tour-du-Pin (38110)
          </span>
          <h1 className="text-4xl sm:text-5xl font-semibold tracking-tight text-black leading-tight mb-6">
            Taxi à<br />
            <span className="text-black/30">La Tour-du-Pin</span>
          </h1>
          <p className="text-base text-[#555] leading-relaxed max-w-2xl mb-4">
            SPM Taxi dessert La Tour-du-Pin et tout le Nord-Isère. Taxi conventionné CPAM pour
            vos transports médicaux sur prescription — zéro avance de frais, tiers payant avec
            l'Assurance Maladie. Transferts aéroport Lyon Saint-Exupéry, gare Part-Dieu,
            Perrache et toutes destinations longue distance.
          </p>
          <p className="text-base text-[#555] leading-relaxed max-w-2xl mb-8">
            Volkswagen Tiguan Allspace 7 places — SUV spacieux, climatisé, équipé Wi-Fi.
            Disponible 7j/7, 24h/24, réponse sous 2h.
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
            Nos services à La Tour-du-Pin
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
            Tarifs taxi depuis La Tour-du-Pin
          </h2>
          <p className="text-sm text-[#555] mb-8">Tarifs indicatifs — devis personnalisé gratuit sous 2h.</p>
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
          <h2 className="text-2xl font-semibold tracking-tight text-black mb-8">
            Services associés
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {[
              { href: "/taxi-conventionne-cpam", label: "Transport médical CPAM", desc: "Prescription médicale, tiers payant, zéro avance de frais" },
              { href: "/transfert-aeroport-lyon", label: "Aéroport Lyon Saint-Exupéry", desc: "Depuis La Tour-du-Pin à partir de 70 € · suivi des vols" },
              { href: "/taxi-bourgoin-jallieu", label: "Taxi Bourgoin-Jallieu", desc: "Taxi conventionné CPAM à Bourgoin-Jallieu" },
              { href: "/taxi-longue-distance", label: "Longue distance France", desc: "Genève, Paris, Marseille · tarif fixe garanti" },
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
                q: "Combien coûte un taxi de La Tour-du-Pin à l'aéroport Lyon Saint-Exupéry ?",
                a: "Depuis La Tour-du-Pin, le transfert vers l'aéroport Lyon Saint-Exupéry est estimé à partir de 70 €. Tarif fixe, sans surprise. SPM Taxi suit vos vols en temps réel et attend en cas de retard sans frais supplémentaires. Devis gratuit au 07 67 75 18 98.",
              },
              {
                q: "Comment fonctionne le taxi conventionné CPAM à La Tour-du-Pin ?",
                a: "Votre médecin établit une prescription médicale de transport. Vous la remettez à SPM Taxi lors de votre prise en charge. L'Assurance Maladie rembourse tout ou partie du trajet directement au transporteur — vous n'avancez rien. Cette prise en charge concerne : dialyse, chimiothérapie, radiothérapie, hospitalisation, consultation spécialisée.",
              },
              {
                q: "SPM Taxi intervient-il à La Tour-du-Pin pour les urgences médicales ?",
                a: "SPM Taxi assure le transport médical programmé (rendez-vous planifiés). Pour les urgences médicales, appelez le 15 (SAMU) ou le 18 (pompiers). Pour un rendez-vous médical urgent du lendemain, appelez le 07 67 75 18 98 — réponse sous 2h.",
              },
              {
                q: "Peut-on réserver un taxi à l'avance depuis La Tour-du-Pin ?",
                a: "Oui, et c'est vivement conseillé pour les vols tôt le matin et les rendez-vous médicaux. Appelez le 07 67 75 18 98 ou utilisez le formulaire en ligne. SPM Taxi confirme votre réservation sous 2h.",
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
          <h2 className="text-2xl font-semibold mb-3">Taxi à La Tour-du-Pin — Réservez maintenant</h2>
          <p className="text-white/50 text-sm mb-8">Conventionné CPAM · Tiers payant · 7j/7 24h/24 · Devis gratuit sous 2h</p>
          <div className="flex flex-wrap gap-3 justify-center">
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
              <ArrowRight className="h-4 w-4" />
            </a>
          </div>
        </div>

      </main>

      <footer className="border-t border-black/[0.06] px-6 py-8 text-center">
        <p className="text-xs text-black/30">
          © 2026 SPM — Taxi Conventionné CPAM · La Tour-du-Pin (Isère 38110) ·{" "}
          <Link href="/" className="underline underline-offset-2">Retour au site</Link>
        </p>
      </footer>
    </div>
  );
}
