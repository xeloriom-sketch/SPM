import type { Metadata } from "next";
import Link from "next/link";
import { ArrowLeft, Phone, MapPin, Clock, CheckCircle, ArrowRight, Shield } from "lucide-react";

export const metadata: Metadata = {
  title: "Taxi Grenoble — Conventionné CPAM depuis Ain & Isère",
  description:
    "Taxi SPM pour Grenoble depuis Villebois, Ambérieu, Bourgoin-Jallieu et toute l'Isère Nord. Conventionné CPAM, transport médical CHU Grenoble. Volkswagen Tiguan 7 places. 7j/7 24h/24. ☎ 07 67 75 18 98.",
  keywords: [
    "taxi Grenoble depuis Ain", "taxi Grenoble Isère", "taxi Grenoble depuis Ambérieu",
    "taxi Grenoble conventionné CPAM", "transport médical Grenoble CPAM",
    "taxi CHU Grenoble", "taxi Grenoble Bourgoin-Jallieu", "taxi Grenoble La Tour-du-Pin",
    "taxi Grenoble depuis Villebois", "taxi Grenoble 7 places", "taxi Grenoble 24h24",
    "taxi Grenoble aéroport Lyon", "taxi Grenoble Lyon Saint-Exupéry",
    "chauffeur taxi Grenoble Ain", "taxi Grenoble ISère Nord",
    "VTC Grenoble depuis Ain", "transfert Grenoble Ain",
  ],
  alternates: { canonical: "https://taxispm.fr/taxi-grenoble/" },
  openGraph: {
    title: "Taxi Grenoble — SPM Taxi | Conventionné CPAM · Ain & Isère",
    description:
      "Votre taxi pour Grenoble depuis l'Ain et l'Isère Nord : conventionné CPAM, CHU Grenoble, aéroport Lyon. Tiguan 7 places. ☎ 07 67 75 18 98.",
    url: "https://taxispm.fr/taxi-grenoble/",
    type: "website",
    locale: "fr_FR",
    images: [{ url: "/image/tiguan-front-quarter.webp", alt: "Taxi SPM vers Grenoble — Volkswagen Tiguan 7 places" }],
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
      areaServed: [
        { "@type": "City", name: "Grenoble" },
        { "@type": "City", name: "Villebois" },
        { "@type": "City", name: "Bourgoin-Jallieu" },
        { "@type": "City", name: "La Tour-du-Pin" },
        { "@type": "City", name: "Ambérieu-en-Bugey" },
      ],
      openingHoursSpecification: [{
        "@type": "OpeningHoursSpecification",
        dayOfWeek: ["Monday","Tuesday","Wednesday","Thursday","Friday","Saturday","Sunday"],
        opens: "00:00", closes: "23:59",
      }],
    },
    {
      "@type": "BreadcrumbList",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Accueil", item: "https://taxispm.fr" },
        { "@type": "ListItem", position: 2, name: "Taxi Grenoble", item: "https://taxispm.fr/taxi-grenoble/" },
      ],
    },
    {
      "@type": "FAQPage",
      mainEntity: [
        {
          "@type": "Question",
          name: "Combien coûte un taxi de Villebois à Grenoble ?",
          acceptedAnswer: { "@type": "Answer", text: "Depuis Villebois (Ain 01), un taxi pour Grenoble est estimé entre 110 € et 140 € selon l'heure et les conditions. Tarif fixe garanti. Demandez un devis gratuit au 07 67 75 18 98." },
        },
        {
          "@type": "Question",
          name: "SPM Taxi est-il conventionné CPAM pour les trajets vers le CHU Grenoble ?",
          acceptedAnswer: { "@type": "Answer", text: "Oui, SPM Taxi est agréé CPAM. Les trajets médicaux vers le CHU de Grenoble ou les cliniques grenobloises peuvent être pris en charge sur prescription médicale." },
        },
        {
          "@type": "Question",
          name: "Combien de temps faut-il depuis Ambérieu-en-Bugey pour Grenoble ?",
          acceptedAnswer: { "@type": "Answer", text: "Depuis Ambérieu-en-Bugey, comptez environ 1h30 à 1h45 pour Grenoble selon le trafic. Départ ponctuel garanti 7j/7." },
        },
      ],
    },
  ],
};

const services = [
  {
    icon: Shield,
    title: "Transport médical CHU Grenoble",
    desc: "Agréé CPAM. Trajets vers le CHU Grenoble, Clinique Belledonne, Clinique des Cèdres et tous établissements de santé grenoblois sur prescription médicale.",
  },
  {
    icon: MapPin,
    title: "Grenoble depuis Ain & Isère Nord",
    desc: "Depuis Villebois, Ambérieu, Bourgoin-Jallieu, La Tour-du-Pin, Tignieu-Jameyzieu. Tarif fixe, ponctualité garantie.",
  },
  {
    icon: Clock,
    title: "Disponible 7j/7 — 24h/24",
    desc: "Y compris nuits, week-ends et jours fériés. Réservation anticipée recommandée pour les rendez-vous médicaux.",
  },
  {
    icon: CheckCircle,
    title: "Volkswagen Tiguan 7 places",
    desc: "Grand confort pour les longs trajets vers Grenoble. Climatisation, Wi-Fi, espace bagages. PMR acceptés.",
  },
];

const destinations = [
  { from: "Villebois (Ain 01)", to: "Grenoble", time: "~1h20" },
  { from: "Ambérieu-en-Bugey", to: "Grenoble", time: "~1h30" },
  { from: "Bourgoin-Jallieu", to: "Grenoble", time: "~55 min" },
  { from: "La Tour-du-Pin", to: "Grenoble", time: "~55 min" },
  { from: "Tignieu-Jameyzieu", to: "Grenoble", time: "~1h10" },
  { from: "Lyon Centre", to: "Grenoble", time: "~1h10" },
];

export default function GrenobleePage() {
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
            Taxi · Grenoble (38) depuis Ain & Isère Nord
          </span>
          <h1 className="text-4xl sm:text-5xl font-semibold tracking-tight text-black leading-tight mb-6">
            Taxi pour<br />
            <span className="text-black/30">Grenoble</span>
          </h1>
          <p className="text-base text-[#555] leading-relaxed max-w-2xl mb-8">
            SPM Taxi assure vos transferts vers Grenoble depuis l'Ain et l'Isère Nord.
            Taxi conventionné CPAM pour les transports médicaux au CHU Grenoble.
            Volkswagen Tiguan Allspace 7 places. Disponible 7j/7, 24h/24. Note Google 4,9/5.
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
              href="https://wa.me/33767751898?text=Bonjour%2C%20je%20souhaite%20r%C3%A9server%20un%20taxi%20pour%20Grenoble."
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-full bg-[#25D366] text-white px-6 py-3 text-sm font-semibold hover:bg-[#20bb5a] transition-colors"
            >
              WhatsApp
              <ArrowRight className="h-4 w-4" />
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
          <h2 className="text-2xl font-semibold tracking-tight text-black mb-8">Nos services pour Grenoble</h2>
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
          <h2 className="text-2xl font-semibold tracking-tight text-black mb-8">Temps de trajet vers Grenoble</h2>
          <div className="bg-white rounded-2xl border border-black/[0.06] overflow-hidden">
            {destinations.map((d, i) => (
              <div key={d.from} className={`flex items-center justify-between px-6 py-4 ${i !== destinations.length - 1 ? "border-b border-black/[0.06]" : ""}`}>
                <div className="flex items-center gap-3">
                  <MapPin className="h-4 w-4 text-black/25 shrink-0" />
                  <span className="text-sm font-medium text-black">{d.from} → {d.to}</span>
                </div>
                <span className="text-sm font-semibold text-black/50">{d.time}</span>
              </div>
            ))}
          </div>
          <p className="text-xs text-[#888] mt-3">Temps indicatifs hors trafic.</p>
        </section>

        {/* FAQ */}
        <section className="mb-16">
          <h2 className="text-2xl font-semibold tracking-tight text-black mb-8">Questions fréquentes</h2>
          <div className="space-y-4">
            {[
              {
                q: "Combien coûte un taxi de Villebois à Grenoble ?",
                a: "Depuis Villebois (Ain 01), un taxi pour Grenoble est estimé entre 110 € et 140 € selon l'heure et les conditions. Tarif fixe garanti, aucune surprise. Appelez le 07 67 75 18 98 pour un devis gratuit.",
              },
              {
                q: "SPM Taxi est-il conventionné CPAM pour le CHU Grenoble ?",
                a: "Oui, SPM Taxi est agréé CPAM. Les trajets médicaux vers le CHU Grenoble, la Clinique Belledonne et les autres établissements grenoblois peuvent être remboursés sur prescription médicale.",
              },
              {
                q: "Peut-on réserver un taxi pour Grenoble la nuit ou un week-end ?",
                a: "Oui, SPM Taxi est disponible 7j/7 et 24h/24, y compris les nuits, week-ends et jours fériés. Idéal pour les rendez-vous médicaux matinaux ou tardifs.",
              },
              {
                q: "Le taxi accepte-t-il les personnes à mobilité réduite pour aller à Grenoble ?",
                a: "Oui, le Volkswagen Tiguan Allspace 7 places est adapté aux PMR. Merci de le signaler à la réservation pour une prise en charge optimale.",
              },
            ].map(({ q, a }) => (
              <div key={q} className="bg-white rounded-2xl p-6 border border-black/[0.06]">
                <h3 className="text-sm font-semibold text-black mb-2">{q}</h3>
                <p className="text-sm text-[#555] leading-relaxed">{a}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Liens services */}
        <section className="mb-16">
          <h2 className="text-2xl font-semibold tracking-tight text-black mb-8">En savoir plus</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {[
              { href: "/taxi-conventionne-cpam", label: "Transport médical CPAM", desc: "Zéro avance de frais, prise en charge Assurance Maladie" },
              { href: "/transfert-aeroport-lyon", label: "Aéroport Lyon Saint-Exupéry", desc: "À partir de 65 € · suivi des vols en temps réel" },
              { href: "/taxi-longue-distance", label: "Longue distance", desc: "Partout en France · tarif fixe sur devis" },
              { href: "/taxi-bourgoin-jallieu", label: "Taxi Bourgoin-Jallieu", desc: "Zone Isère Nord couverte 7j/7" },
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

        <div className="bg-black text-white rounded-3xl p-10 text-center">
          <h2 className="text-2xl font-semibold mb-3">Taxi Grenoble — Réservez maintenant</h2>
          <p className="text-white/50 text-sm mb-8">Conventionné CPAM · 7j/7 24h/24 · Devis gratuit · Note 4,9/5 ⭐</p>
          <div className="flex flex-wrap gap-3 justify-center">
            <a href="tel:+33767751898" className="inline-flex items-center gap-2 rounded-full bg-white text-black px-6 py-3 text-sm font-semibold hover:bg-white/90 transition-colors">
              <Phone className="h-4 w-4" />
              07 67 75 18 98
            </a>
            <a
              href="https://wa.me/33767751898?text=Bonjour%2C%20je%20souhaite%20r%C3%A9server%20un%20taxi%20pour%20Grenoble."
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-full bg-[#25D366] text-white px-6 py-3 text-sm font-semibold hover:bg-[#20bb5a] transition-colors"
            >
              WhatsApp
            </a>
          </div>
        </div>

      </main>

      <footer className="border-t border-black/[0.06] px-6 py-8 text-center">
        <p className="text-xs text-black/30">
          © 2026 SPM — Taxi Conventionné · Villebois (Ain 01) · Tignieu-Jameyzieu (Isère 38) ·{" "}
          <Link href="/" className="underline underline-offset-2">Retour au site</Link>
        </p>
      </footer>
    </div>
  );
}
