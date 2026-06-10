import type { Metadata } from "next";
import Link from "next/link";
import { ArrowLeft, Phone, MapPin, Clock, CheckCircle, ArrowRight, Star } from "lucide-react";

export const metadata: Metadata = {
  title: "Taxi Lyon — SPM Taxi Ain & Isère | Pas Cher, 7 Places",
  description:
    "Taxi Lyon depuis l'Ain et l'Isère. Transferts aéroport Saint-Exupéry, gares, médical CPAM. Taxi lyonnais disponible 7j/7 24h/24. Tarif fixe, Tiguan 7 places. ☎ 07 67 75 18 98.",
  keywords: [
    "taxi lyon", "taxis lyon", "taxi lyonnais", "lyon taxi",
    "taxi lyon pas cher", "taxi lyon aéroport", "taxi lyon gare",
    "taxi lyon saint-exupéry", "taxi lyon part-dieu", "taxi lyon perrache",
    "taxi lyon ain", "taxi lyon isère", "taxi lyon conventionné",
    "réserver taxi lyon", "taxi lyon 24h24", "taxi lyon 7 places",
    "chauffeur taxi lyon", "taxi privé lyon", "navette taxi lyon",
    "taxi lyon villebois", "taxi lyon tignieu", "taxi lyon ambérieu",
  ],
  alternates: { canonical: "https://taxispm.fr/taxi-lyon" },
  openGraph: {
    title: "Taxi Lyon — SPM Taxi | Ain & Isère · 7j/7 24h/24",
    description:
      "Taxi Lyon depuis l'Ain et l'Isère. Aéroport Saint-Exupéry, Part-Dieu, Perrache, transport médical CPAM. Volkswagen Tiguan 7 places. ☎ 07 67 75 18 98.",
    url: "https://taxispm.fr/taxi-lyon",
    type: "website",
    locale: "fr_FR",
    images: [
      {
        url: "/image/tiguan-front-quarter.webp",
        alt: "Taxi Lyon — SPM Taxi Ain & Isère — Volkswagen Tiguan 7 places",
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
      name: "SPM Taxi — Taxi Lyon depuis Ain & Isère",
      telephone: "+33767751898",
      url: "https://taxispm.fr/taxi-lyon",
      description:
        "SPM Taxi assure les transferts vers et depuis Lyon (aéroport Saint-Exupéry, gare Part-Dieu, gare Perrache) depuis l'Ain et l'Isère. Taxi conventionné CPAM. Volkswagen Tiguan 7 places.",
      address: {
        "@type": "PostalAddress",
        streetAddress: "951 route des hauts fourneaux",
        addressLocality: "Villebois",
        postalCode: "01150",
        addressRegion: "Auvergne-Rhône-Alpes",
        addressCountry: "FR",
      },
      areaServed: [
        { "@type": "City", name: "Lyon" },
        { "@type": "AdministrativeArea", name: "Ain", alternateName: "01" },
        { "@type": "AdministrativeArea", name: "Isère", alternateName: "38" },
        { "@type": "Airport", name: "Aéroport Lyon Saint-Exupéry", iataCode: "LYS" },
        { "@type": "TrainStation", name: "Gare Lyon Part-Dieu" },
        { "@type": "TrainStation", name: "Gare Lyon Perrache" },
      ],
      aggregateRating: { "@type": "AggregateRating", ratingValue: 4.9, reviewCount: 9, bestRating: 5, worstRating: 1 },
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
        { "@type": "ListItem", position: 2, name: "Taxi Lyon", item: "https://taxispm.fr/taxi-lyon" },
      ],
    },
  ],
};

const destinations = [
  { from: "Villebois / Ambérieu-en-Bugey", to: "Lyon Centre", time: "~45 min", price: "à partir de 55 €" },
  { from: "Tignieu-Jameyzieu", to: "Lyon Centre", time: "~35 min", price: "à partir de 45 €" },
  { from: "Bourg-en-Bresse", to: "Lyon Centre", time: "~1h", price: "à partir de 75 €" },
  { from: "Meximieux / Montluel", to: "Lyon Centre", time: "~30 min", price: "à partir de 40 €" },
  { from: "Bourgoin-Jallieu", to: "Lyon Centre", time: "~35 min", price: "à partir de 45 €" },
  { from: "Grenoble", to: "Lyon Centre", time: "~1h30", price: "à partir de 120 €" },
];

const spots = [
  { name: "Aéroport Lyon Saint-Exupéry (LYS)", desc: "Suivi des vols en temps réel, pas de frais pour retard." },
  { name: "Gare Lyon Part-Dieu", desc: "Prise en charge ou dépose devant la gare, même aux heures de pointe." },
  { name: "Gare Lyon Perrache", desc: "Accès direct, idéal pour les correspondances TGV." },
  { name: "Lyon Centre / Presqu'île", desc: "Hôtels, cliniques, musées, quartiers d'affaires." },
  { name: "Hôpitaux et cliniques lyonnaises", desc: "Edouard Herriot, Croix-Rousse, Clinique du Parc — transport médical CPAM." },
  { name: "Confluence / Gerland", desc: "Quartiers d'affaires, centres sportifs, événements." },
];

export default function TaxiLyonPage() {
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
            Taxi · Lyon & Grand Lyon
          </span>
          <h1 className="text-4xl sm:text-5xl font-semibold tracking-tight text-black leading-tight mb-6">
            Taxi Lyon<br />
            <span className="text-black/30">depuis l&apos;Ain & l&apos;Isère</span>
          </h1>
          <p className="text-base text-[#555] leading-relaxed max-w-2xl mb-4">
            SPM Taxi assure vos déplacements vers et depuis Lyon — aéroport Saint-Exupéry,
            gare Part-Dieu, gare Perrache, hôpitaux, hôtels et quartiers d&apos;affaires.
            Départ depuis l&apos;Ain, l&apos;Isère et Tignieu-Jameyzieu.
          </p>
          <div className="flex items-center gap-2 mb-8">
            {[1,2,3,4,5].map((s) => (
              <Star key={s} className="h-4 w-4 fill-black text-black" />
            ))}
            <span className="text-sm font-semibold ml-1">4,9/5</span>
            <span className="text-sm text-[#888]">· 9 avis Google</span>
          </div>
          <div className="flex flex-wrap gap-3">
            <a
              href="tel:+33767751898"
              title="Réserver un taxi Lyon"
              className="inline-flex items-center gap-2 rounded-full bg-black text-white px-6 py-3 text-sm font-semibold hover:bg-[#111] transition-colors"
            >
              <Phone className="h-4 w-4" />
              07 67 75 18 98
            </a>
            <a
              href="/#contact"
              title="Devis gratuit taxi Lyon"
              className="inline-flex items-center gap-2 rounded-full border border-black/15 text-black px-6 py-3 text-sm font-semibold hover:border-black/30 transition-colors"
            >
              Devis gratuit
              <ArrowRight className="h-4 w-4" />
            </a>
          </div>
        </div>

        {/* Stats rapides */}
        <div className="grid grid-cols-3 gap-4 mb-16">
          {[
            { icon: Clock, label: "Disponibilité", value: "24h/24 · 7j/7" },
            { icon: MapPin, label: "Zones", value: "Ain · Isère · Lyon" },
            { icon: CheckCircle, label: "Conventionné", value: "CPAM 100%" },
          ].map(({ icon: Icon, label, value }) => (
            <div key={label} className="bg-white rounded-2xl p-5 border border-black/[0.06]">
              <Icon className="h-5 w-5 text-black/30 mb-3" />
              <p className="text-[10px] font-semibold tracking-wider uppercase text-black/40 mb-1">{label}</p>
              <p className="text-sm font-semibold text-black">{value}</p>
            </div>
          ))}
        </div>

        {/* Destinations depuis Lyon */}
        <section className="mb-16">
          <h2 className="text-2xl font-semibold tracking-tight text-black mb-8">
            Prix et temps de trajet vers Lyon
          </h2>
          <div className="bg-white rounded-2xl border border-black/[0.06] overflow-hidden">
            {destinations.map((d, i) => (
              <div
                key={d.from}
                className={`flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2 px-6 py-4 ${i !== destinations.length - 1 ? "border-b border-black/[0.06]" : ""}`}
              >
                <div className="flex items-center gap-3 min-w-0">
                  <MapPin className="h-4 w-4 text-black/25 shrink-0" />
                  <span className="text-sm font-medium text-black">{d.from}</span>
                </div>
                <div className="flex items-center gap-4 shrink-0">
                  <span className="text-sm text-black/50">{d.time}</span>
                  <span className="text-sm font-semibold text-black">{d.price}</span>
                </div>
              </div>
            ))}
          </div>
          <p className="text-xs text-[#888] mt-3">Tarifs indicatifs, devis exact gratuit sous 2h.</p>
        </section>

        {/* Points de Lyon desservis */}
        <section className="mb-16">
          <h2 className="text-2xl font-semibold tracking-tight text-black mb-8">
            Points desservis à Lyon
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {spots.map(({ name, desc }) => (
              <div key={name} className="bg-white rounded-2xl p-5 border border-black/[0.06]">
                <div className="flex items-start gap-3">
                  <CheckCircle className="h-4 w-4 text-black/40 shrink-0 mt-0.5" />
                  <div>
                    <p className="text-sm font-semibold text-black mb-1">{name}</p>
                    <p className="text-xs text-[#555] leading-relaxed">{desc}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Pourquoi SPM */}
        <section className="mb-16">
          <h2 className="text-2xl font-semibold tracking-tight text-black mb-8">
            Pourquoi choisir SPM pour votre taxi Lyon ?
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {[
              { title: "Tarif fixe garanti", desc: "Le prix est convenu avant le départ. Pas de compteur, pas de surprise — même en cas de trafic." },
              { title: "Volkswagen Tiguan 7 places", desc: "Grand SUV confortable, idéal pour les familles, groupes, et bagages nombreux." },
              { title: "Conventionné CPAM", desc: "Vos trajets médicaux vers les hôpitaux lyonnais peuvent être remboursés par l'Assurance Maladie." },
              { title: "4,9 / 5 sur Google", desc: "9 avis clients vérifiés. Ponctualité, confort et professionnalisme reconnus." },
            ].map(({ title, desc }) => (
              <div key={title} className="bg-white rounded-2xl p-6 border border-black/[0.06]">
                <h3 className="text-sm font-semibold text-black mb-2">{title}</h3>
                <p className="text-xs text-[#555] leading-relaxed">{desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* FAQ */}
        <section className="mb-16">
          <h2 className="text-2xl font-semibold tracking-tight text-black mb-8">
            Questions fréquentes — Taxi Lyon
          </h2>
          <div className="space-y-4">
            {[
              {
                q: "Combien coûte un taxi de l'Ain à Lyon ?",
                a: "Depuis Villebois ou Ambérieu-en-Bugey, comptez à partir de 55 € vers Lyon Centre. Depuis Tignieu-Jameyzieu, le tarif démarre à 45 €. Depuis Bourg-en-Bresse, environ 75 €. Demandez votre devis exact et gratuit au 07 67 75 18 98.",
              },
              {
                q: "Comment trouver un taxi Lyon pas cher depuis l'Ain ?",
                a: "SPM Taxi propose des tarifs fixes sans surprise, moins chers que les VTC Lyon pour les longues distances. Le prix est établi avant le départ et ne change pas. Réservez à l'avance pour les meilleurs tarifs.",
              },
              {
                q: "Peut-on prendre un taxi Lyon conventionné CPAM ?",
                a: "Oui. SPM Taxi est agréé par l'Assurance Maladie pour les transports médicaux vers les hôpitaux et cliniques lyonnaises (Edouard Herriot, Croix-Rousse, Clinique du Parc, etc.) sur prescription médicale.",
              },
              {
                q: "SPM Taxi va-t-il chercher à l'aéroport de Lyon ?",
                a: "Oui. SPM Taxi assure les transferts depuis et vers l'aéroport Lyon Saint-Exupéry (LYS) avec suivi des vols en temps réel. Aucun frais pour les retards de vol.",
              },
              {
                q: "Le taxi Lyon est-il disponible la nuit et le week-end ?",
                a: "Oui, SPM Taxi est disponible 7j/7 et 24h/24, y compris la nuit, les week-ends et les jours fériés. Idéal pour les vols matinaux ou tardifs depuis Lyon Saint-Exupéry.",
              },
            ].map(({ q, a }) => (
              <div key={q} className="bg-white rounded-2xl p-6 border border-black/[0.06]">
                <h3 className="text-sm font-semibold text-black mb-2">{q}</h3>
                <p className="text-sm text-[#555] leading-relaxed">{a}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Liens internes */}
        <section className="mb-16">
          <h2 className="text-2xl font-semibold tracking-tight text-black mb-8">
            Nos services vers Lyon
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {[
              { href: "/transfert-aeroport-lyon", label: "Aéroport Lyon Saint-Exupéry", desc: "Tarif fixe · suivi des vols en temps réel" },
              { href: "/taxi-conventionné-cpam", label: "Transport médical CPAM vers Lyon", desc: "Hôpitaux lyonnais · zéro avance de frais" },
              { href: "/taxi-longue-distance", label: "Taxi longue distance", desc: "Lyon et toute la France · tarif fixe sur devis" },
              { href: "/taxi-tignieu-jameyzieu", label: "Taxi Tignieu-Jameyzieu", desc: "Départ depuis Tignieu vers Lyon" },
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

        {/* CTA */}
        <div className="bg-black text-white rounded-3xl p-10 text-center">
          <h2 className="text-2xl font-semibold mb-3">Votre taxi Lyon — Réservez maintenant</h2>
          <p className="text-white/50 text-sm mb-8">Tarif fixe · 7j/7 24h/24 · Réponse sous 2h</p>
          <div className="flex flex-wrap justify-center gap-4">
            <a
              href="tel:+33767751898"
              title="Réserver taxi Lyon"
              className="inline-flex items-center gap-2 rounded-full bg-white text-black px-6 py-3 text-sm font-semibold hover:bg-white/90 transition-colors"
            >
              <Phone className="h-4 w-4" />
              07 67 75 18 98
            </a>
            <a
              href="/#contact"
              title="Devis gratuit taxi Lyon"
              className="inline-flex items-center gap-2 rounded-full border border-white/25 text-white px-6 py-3 text-sm font-semibold hover:border-white/50 transition-colors"
            >
              Devis gratuit en ligne
            </a>
          </div>
        </div>

      </main>

      <footer className="border-t border-black/[0.06] px-6 py-8 text-center">
        <p className="text-xs text-black/30">
          © 2026 SPM — Taxi Lyon · Ain (01) & Isère (38) ·{" "}
          <Link href="/" className="underline underline-offset-2">Retour au site</Link>
        </p>
      </footer>
    </div>
  );
}
