import type { Metadata } from "next";
import Link from "next/link";
import { ArrowLeft, Phone, MapPin, Clock, CheckCircle, ArrowRight, Shield } from "lucide-react";

export const metadata: Metadata = {
  title: "Taxi Bourgoin-Jallieu — Conventionné CPAM · 7j/7",
  description:
    "Taxi à Bourgoin-Jallieu (Isère 38) : conventionné CPAM, transport médical remboursé, transfert aéroport Lyon Saint-Exupéry. Volkswagen Tiguan 7 places. Disponible 7j/7 24h/24. Devis gratuit. ☎ 07 67 75 18 98.",
  keywords: [
    "taxi Bourgoin-Jallieu", "taxi Bourgoin", "taxi Jallieu",
    "taxi conventionné Bourgoin-Jallieu", "taxi CPAM Bourgoin-Jallieu",
    "taxi médical Bourgoin-Jallieu", "taxi VSL Bourgoin-Jallieu",
    "transport médical Bourgoin-Jallieu CPAM", "taxi Bourgoin aéroport Lyon",
    "taxi Bourgoin-Jallieu Lyon Saint-Exupéry", "taxi Bourgoin 38",
    "taxi Bourgoin-Jallieu 38300", "taxi Nord-Isère Bourgoin",
    "taxi Bourgoin La Tour-du-Pin", "taxi Bourgoin Tignieu",
    "taxi Bourgoin-Jallieu prix", "taxi Bourgoin-Jallieu tarif",
    "réserver taxi Bourgoin-Jallieu", "taxi 7 places Bourgoin-Jallieu",
    "taxi Bourgoin-Jallieu disponible nuit", "chauffeur taxi Bourgoin-Jallieu",
    "taxi Bourgoin-Jallieu tiers payant", "taxi Bourgoin remboursé",
  ],
  alternates: { canonical: "https://taxispm.fr/taxi-bourgoin-jallieu/" },
  openGraph: {
    title: "Taxi Bourgoin-Jallieu — Conventionné CPAM | SPM Taxi · 7j/7 24h/24",
    description:
      "Taxi conventionné CPAM à Bourgoin-Jallieu. Aéroport Lyon Saint-Exupéry, transport médical remboursé, longue distance. Volkswagen Tiguan 7 places. ☎ 07 67 75 18 98.",
    url: "https://taxispm.fr/taxi-bourgoin-jallieu/",
    type: "website",
    locale: "fr_FR",
    images: [
      {
        url: "/image/tiguan-front-quarter.webp",
        alt: "Taxi Bourgoin-Jallieu — SPM Taxi Isère — Volkswagen Tiguan 7 places",
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
      name: "SPM Taxi — Taxi Bourgoin-Jallieu",
      telephone: "+33767751898",
      url: "https://taxispm.fr/taxi-bourgoin-jallieu/",
      description:
        "SPM Taxi assure des courses de taxi à Bourgoin-Jallieu et dans tout le Nord-Isère. Taxi conventionné CPAM, transport médical remboursé, transferts aéroport Lyon Saint-Exupéry. Volkswagen Tiguan Allspace 7 places. 7j/7 24h/24.",
      address: {
        "@type": "PostalAddress",
        streetAddress: "951 route des hauts fourneaux",
        addressLocality: "Villebois",
        postalCode: "01150",
        addressRegion: "Auvergne-Rhône-Alpes",
        addressCountry: "FR",
      },
      areaServed: [
        { "@type": "City", name: "Bourgoin-Jallieu", containedInPlace: { "@type": "AdministrativeArea", name: "Isère" } },
        { "@type": "City", name: "La Tour-du-Pin" },
        { "@type": "City", name: "Tignieu-Jameyzieu" },
        { "@type": "City", name: "L'Isle-d'Abeau" },
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
          name: "Combien coûte un taxi de Bourgoin-Jallieu à l'aéroport de Lyon ?",
          acceptedAnswer: { "@type": "Answer", text: "Depuis Bourgoin-Jallieu, le transfert vers l'aéroport Lyon Saint-Exupéry est à partir de 60 €. Tarif fixe garanti, sans surprise. Devis gratuit en appelant le 07 67 75 18 98." },
        },
        {
          "@type": "Question",
          name: "Y a-t-il un taxi conventionné CPAM à Bourgoin-Jallieu ?",
          acceptedAnswer: { "@type": "Answer", text: "Oui, SPM Taxi est conventionné CPAM et intervient à Bourgoin-Jallieu pour les transports médicaux sur prescription. Zéro avance de frais, facturation directe à l'Assurance Maladie." },
        },
        {
          "@type": "Question",
          name: "Comment réserver un taxi à Bourgoin-Jallieu ?",
          acceptedAnswer: { "@type": "Answer", text: "Appelez le 07 67 75 18 98 ou remplissez le formulaire en ligne. SPM Taxi répond sous 2h avec confirmation de réservation. Disponible 7j/7, y compris nuits et jours fériés." },
        },
      ],
    },
    {
      "@type": "BreadcrumbList",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Accueil", item: "https://taxispm.fr" },
        { "@type": "ListItem", position: 2, name: "Taxi Bourgoin-Jallieu", item: "https://taxispm.fr/taxi-bourgoin-jallieu/" },
      ],
    },
  ],
};

const services = [
  {
    icon: Shield,
    title: "Transport médical CPAM — tiers payant",
    desc: "Agréé CPAM pour les transports médicaux sur prescription à Bourgoin-Jallieu. Zéro avance de frais : chimiothérapie, dialyse, radiothérapie, hospitalisation.",
  },
  {
    icon: MapPin,
    title: "Aéroport Lyon Saint-Exupéry",
    desc: "Depuis Bourgoin-Jallieu, comptez ~30 min jusqu'à l'aéroport LYS. Suivi des vols, pas de majoration en cas de retard.",
  },
  {
    icon: Clock,
    title: "Disponible 7j/7 — 24h/24",
    desc: "Nuits, week-ends, jours fériés : SPM Taxi est là. Idéal pour les vols matinaux ou les rendez-vous médicaux tôt le matin.",
  },
  {
    icon: CheckCircle,
    title: "Volkswagen Tiguan 7 places",
    desc: "SUV spacieux, climatisation bi-zone, Wi-Fi à bord. Adapté aux familles, personnes à mobilité réduite et grands bagages.",
  },
];

const destinations = [
  { from: "Bourgoin-Jallieu", to: "Aéroport Lyon Saint-Exupéry", time: "~30 min", price: "à partir de 60 €" },
  { from: "Bourgoin-Jallieu", to: "Lyon Centre (Part-Dieu)", time: "~35 min", price: "à partir de 55 €" },
  { from: "Bourgoin-Jallieu", to: "Tignieu-Jameyzieu", time: "~20 min", price: "à partir de 30 €" },
  { from: "Bourgoin-Jallieu", to: "La Tour-du-Pin", time: "~20 min", price: "à partir de 30 €" },
  { from: "Bourgoin-Jallieu", to: "Grenoble", time: "~50 min", price: "à partir de 90 €" },
  { from: "Bourgoin-Jallieu", to: "Bourg-en-Bresse", time: "~1h", price: "à partir de 80 €" },
];

export default function TaxiBourgoinJallieuPage() {
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
            Taxi · Bourgoin-Jallieu (38300)
          </span>
          <h1 className="text-4xl sm:text-5xl font-semibold tracking-tight text-black leading-tight mb-6">
            Taxi à<br />
            <span className="text-black/30">Bourgoin-Jallieu</span>
          </h1>
          <p className="text-base text-[#555] leading-relaxed max-w-2xl mb-4">
            SPM Taxi intervient à Bourgoin-Jallieu et dans tout le Nord-Isère. Taxi conventionné CPAM
            agréé par l'Assurance Maladie — zéro avance de frais pour vos transports médicaux sur
            prescription. Transferts vers l'aéroport Lyon Saint-Exupéry, gares, hôpitaux et longue
            distance partout en France.
          </p>
          <p className="text-base text-[#555] leading-relaxed max-w-2xl mb-8">
            Volkswagen Tiguan Allspace 7 places — climatisation, Wi-Fi, attache-remorque homologuée.
            Disponible 7j/7, 24h/24, y compris nuits et jours fériés. Devis gratuit sous 2h.
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
            Nos services à Bourgoin-Jallieu
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

        {/* Tarifs & temps */}
        <section className="mb-16">
          <h2 className="text-2xl font-semibold tracking-tight text-black mb-3">
            Tarifs et temps de trajet depuis Bourgoin-Jallieu
          </h2>
          <p className="text-sm text-[#555] mb-8">Tarifs indicatifs. Devis personnalisé gratuit au 07 67 75 18 98.</p>
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

        {/* CPAM expliqué */}
        <section className="mb-16 bg-white rounded-2xl p-8 border border-black/[0.06]">
          <h2 className="text-xl font-semibold tracking-tight text-black mb-4">
            Transport médical conventionné CPAM à Bourgoin-Jallieu
          </h2>
          <p className="text-sm text-[#555] leading-relaxed mb-4">
            SPM Taxi est agréé par la CPAM (Caisse Primaire d'Assurance Maladie) pour les transports
            médicaux assis. Avec une <strong>prescription médicale de transport</strong>, vos trajets
            vers les hôpitaux, cliniques, centres de dialyse ou de radiothérapie peuvent être{" "}
            <strong>pris en charge à 100% par l'Assurance Maladie</strong> (sous conditions).
          </p>
          <ul className="space-y-2 text-sm text-[#555]">
            <li className="flex items-start gap-2"><CheckCircle className="h-4 w-4 text-black shrink-0 mt-0.5" /> Tiers payant : zéro avance de frais pour le patient</li>
            <li className="flex items-start gap-2"><CheckCircle className="h-4 w-4 text-black shrink-0 mt-0.5" /> Hôpital Nord-Isère, Clinique des Cèdres, CHU de Grenoble, Hôpital Édouard Herriot Lyon</li>
            <li className="flex items-start gap-2"><CheckCircle className="h-4 w-4 text-black shrink-0 mt-0.5" /> Chimiothérapie, dialyse, radiothérapie, hospitalisation programmée</li>
            <li className="flex items-start gap-2"><CheckCircle className="h-4 w-4 text-black shrink-0 mt-0.5" /> Disponible le samedi, dimanche et jours fériés</li>
          </ul>
        </section>

        {/* Liens internes */}
        <section className="mb-16">
          <h2 className="text-2xl font-semibold tracking-tight text-black mb-8">
            Nos autres services
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {[
              { href: "/taxi-conventionne-cpam", label: "Transport médical CPAM", desc: "Zéro avance de frais, prise en charge Assurance Maladie" },
              { href: "/transfert-aeroport-lyon", label: "Transfert aéroport Lyon", desc: "À partir de 60 € depuis Bourgoin · suivi des vols" },
              { href: "/taxi-longue-distance", label: "Longue distance", desc: "Paris, Marseille, Genève · tarif fixe sur devis" },
              { href: "/taxi-la-tour-du-pin", label: "Taxi La Tour-du-Pin", desc: "Taxi conventionné CPAM à La Tour-du-Pin" },
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
                q: "Combien coûte un taxi de Bourgoin-Jallieu à l'aéroport de Lyon Saint-Exupéry ?",
                a: "Depuis Bourgoin-Jallieu, le transfert vers l'aéroport Lyon Saint-Exupéry est à partir de 60 €. Tarif fixe garanti, sans supplément pour les retards de vol. Devis gratuit en appelant le 07 67 75 18 98.",
              },
              {
                q: "Y a-t-il un taxi conventionné CPAM à Bourgoin-Jallieu ?",
                a: "Oui. SPM Taxi est agréé par la CPAM pour les transports médicaux assis sur prescription médicale. Zéro avance de frais pour le patient — l'Assurance Maladie est facturée directement. Disponible à Bourgoin-Jallieu, La Tour-du-Pin et tout le Nord-Isère.",
              },
              {
                q: "SPM Taxi intervient-il à Bourgoin-Jallieu la nuit et le week-end ?",
                a: "Oui, 7j/7 et 24h/24, y compris la nuit, les week-ends et les jours fériés. Pour les vols tôt le matin ou les rendez-vous médicaux du week-end, une réservation à l'avance est conseillée.",
              },
              {
                q: "Quelle est la différence entre un taxi, un VSL et une ambulance à Bourgoin-Jallieu ?",
                a: "Le taxi conventionné (comme SPM Taxi) transporte des patients capables de voyager assis. Le VSL (Véhicule Sanitaire Léger) est adapté aux patients semi-allongés. L'ambulance est réservée aux patients allongés ou nécessitant une assistance médicale. Votre médecin prescrit le mode de transport adapté à votre état de santé.",
              },
              {
                q: "Peut-on transporter un fauteuil roulant avec le taxi SPM à Bourgoin-Jallieu ?",
                a: "Oui, le Volkswagen Tiguan Allspace 7 places dispose d'un grand coffre pouvant accueillir un fauteuil roulant pliant. SPM Taxi accueille les personnes en situation de handicap et à mobilité réduite.",
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
          <h2 className="text-2xl font-semibold mb-3">Taxi à Bourgoin-Jallieu — Réservez maintenant</h2>
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
          © 2026 SPM — Taxi Conventionné CPAM · Bourgoin-Jallieu (Isère 38) ·{" "}
          <Link href="/" className="underline underline-offset-2">Retour au site</Link>
        </p>
      </footer>
    </div>
  );
}
