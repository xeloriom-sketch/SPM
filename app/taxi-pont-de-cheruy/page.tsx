import type { Metadata } from "next";
import Link from "next/link";
import { ArrowLeft, Phone, MapPin, Clock, CheckCircle, ArrowRight, Shield } from "lucide-react";

export const metadata: Metadata = {
  title: "Taxi Pont-de-Chéruy — Conventionné CPAM · Isère 38 | SPM Taxi",
  description:
    "Taxi à Pont-de-Chéruy (Isère 38490) : conventionné CPAM, transport médical remboursé, transfert aéroport Lyon Saint-Exupéry. Volkswagen Tiguan 7 places. 7j/7 24h/24. ☎ 07 67 75 18 98.",
  keywords: [
    "taxi Pont-de-Chéruy", "taxi Pont de Cheruy", "taxi Pont-de-Chéruy 38490",
    "taxi conventionné Pont-de-Chéruy", "taxi CPAM Pont-de-Chéruy",
    "taxi médical Pont-de-Chéruy", "taxi VSL Pont-de-Chéruy",
    "transport médical Pont-de-Chéruy CPAM", "taxi Pont-de-Chéruy aéroport Lyon",
    "taxi Pont-de-Chéruy Isère 38", "taxi Pont-de-Chéruy Lyon",
    "taxi Pont-de-Chéruy Charvieu-Chavagneux", "taxi Pont-de-Chéruy Tignieu",
    "taxi Pont-de-Chéruy prix tarif", "réserver taxi Pont-de-Chéruy",
    "taxi Nord-Isère Pont-de-Chéruy", "taxi Pont-de-Chéruy tiers payant",
    "chauffeur taxi Pont-de-Chéruy",
  ],
  alternates: { canonical: "https://taxispm.fr/taxi-pont-de-cheruy/" },
  openGraph: {
    title: "Taxi Pont-de-Chéruy — Conventionné CPAM | SPM Taxi · 7j/7 24h/24",
    description:
      "Taxi conventionné CPAM à Pont-de-Chéruy (38490). Aéroport Lyon, transport médical remboursé tiers payant, Charvieu-Chavagneux. Volkswagen Tiguan 7 places. ☎ 07 67 75 18 98.",
    url: "https://taxispm.fr/taxi-pont-de-cheruy/",
    type: "website",
    locale: "fr_FR",
    images: [{ url: "/image/tiguan-front-quarter.webp", alt: "Taxi Pont-de-Chéruy — SPM Taxi Isère" }],
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": ["LocalBusiness", "TaxiService"],
      "@id": "https://taxispm.fr/#business",
      name: "SPM Taxi — Pont-de-Chéruy",
      telephone: "+33767751898",
      url: "https://taxispm.fr/taxi-pont-de-cheruy/",
      description: "SPM Taxi assure des courses depuis Pont-de-Chéruy et dans tout le secteur Nord-Isère : Charvieu-Chavagneux, Tignieu-Jameyzieu. Taxi conventionné CPAM, transport médical, transferts aéroport Lyon. 7j/7 24h/24.",
      address: {
        "@type": "PostalAddress",
        streetAddress: "951 route des hauts fourneaux",
        addressLocality: "Villebois",
        postalCode: "01150",
        addressRegion: "Auvergne-Rhône-Alpes",
        addressCountry: "FR",
      },
      areaServed: [
        { "@type": "City", name: "Pont-de-Chéruy", containedInPlace: { "@type": "AdministrativeArea", name: "Isère" } },
        { "@type": "City", name: "Charvieu-Chavagneux" },
        { "@type": "City", name: "Tignieu-Jameyzieu" },
        { "@type": "City", name: "Anthon" },
        { "@type": "City", name: "Lyon" },
        { "@type": "Airport", name: "Aéroport Lyon Saint-Exupéry", iataCode: "LYS" },
      ],
      aggregateRating: { "@type": "AggregateRating", ratingValue: 4.6, reviewCount: 12, bestRating: 5, worstRating: 1 },
      openingHoursSpecification: [
        { "@type": "OpeningHoursSpecification", dayOfWeek: ["Monday","Tuesday","Wednesday","Thursday","Friday","Saturday","Sunday"], opens: "00:00", closes: "23:59" },
      ],
    },
    {
      "@type": "FAQPage",
      mainEntity: [
        {
          "@type": "Question",
          name: "Y a-t-il un taxi conventionné CPAM à Pont-de-Chéruy ?",
          acceptedAnswer: { "@type": "Answer", text: "Oui. SPM Taxi est agréé CPAM et intervient à Pont-de-Chéruy pour les transports médicaux assis sur prescription. Zéro avance de frais — l'Assurance Maladie prend en charge vos trajets. Appelez le 07 67 75 18 98." },
        },
        {
          "@type": "Question",
          name: "Combien coûte un taxi de Pont-de-Chéruy à l'aéroport Lyon Saint-Exupéry ?",
          acceptedAnswer: { "@type": "Answer", text: "Depuis Pont-de-Chéruy, le transfert vers l'aéroport Lyon Saint-Exupéry est à partir de 40 €. Tarif fixe garanti, suivi des vols, pas de frais en cas de retard. Devis gratuit au 07 67 75 18 98." },
        },
        {
          "@type": "Question",
          name: "SPM Taxi fait-il Pont-de-Chéruy — Charvieu-Chavagneux ?",
          acceptedAnswer: { "@type": "Answer", text: "Oui, SPM Taxi assure les trajets entre Pont-de-Chéruy et Charvieu-Chavagneux (5 minutes environ). Également disponible pour Tignieu-Jameyzieu, Anthon, Janneyrias et toutes les communes voisines de Nord-Isère." },
        },
        {
          "@type": "Question",
          name: "Comment fonctionne le remboursement CPAM pour un taxi médical depuis Pont-de-Chéruy ?",
          acceptedAnswer: { "@type": "Answer", text: "Votre médecin vous prescrit un transport sanitaire (formulaire S3138). SPM Taxi facture directement l'Assurance Maladie via le tiers payant. Vous ne payez rien si vous êtes à 100% ou en ALD. En cas de prise en charge partielle, SPM Taxi vous communique le reste à charge à l'avance." },
        },
      ],
    },
    {
      "@type": "BreadcrumbList",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Accueil", item: "https://taxispm.fr" },
        { "@type": "ListItem", position: 2, name: "Taxi Pont-de-Chéruy", item: "https://taxispm.fr/taxi-pont-de-cheruy/" },
      ],
    },
  ],
};

const services = [
  {
    icon: Shield,
    title: "Transport médical CPAM — tiers payant",
    desc: "Agréé CPAM depuis Pont-de-Chéruy. Chimiothérapie, dialyse, hospitalisation, consultation spécialisée — zéro avance de frais sur prescription médicale.",
  },
  {
    icon: MapPin,
    title: "Aéroport Lyon Saint-Exupéry",
    desc: "Depuis Pont-de-Chéruy, ~25 min jusqu'à l'aéroport LYS. Suivi des vols en temps réel, tarif fixe garanti, sans supplément retard.",
  },
  {
    icon: Clock,
    title: "Disponible 7j/7 — 24h/24",
    desc: "Nuits, week-ends, jours fériés : SPM Taxi répond depuis Pont-de-Chéruy et Charvieu-Chavagneux. Confirmation sous 2h.",
  },
  {
    icon: CheckCircle,
    title: "Volkswagen Tiguan 7 places",
    desc: "SUV spacieux, climatisation, Wi-Fi, attache-remorque. Idéal familles, groupes, personnes à mobilité réduite (PMR).",
  },
];

const destinations = [
  { from: "Pont-de-Chéruy", to: "Aéroport Lyon Saint-Exupéry", time: "~25 min", price: "à partir de 40 €" },
  { from: "Pont-de-Chéruy", to: "Lyon Centre", time: "~30 min", price: "à partir de 40 €" },
  { from: "Pont-de-Chéruy", to: "Charvieu-Chavagneux", time: "~5 min", price: "à partir de 15 €" },
  { from: "Pont-de-Chéruy", to: "Tignieu-Jameyzieu", time: "~10 min", price: "à partir de 20 €" },
  { from: "Pont-de-Chéruy", to: "Bourgoin-Jallieu", time: "~30 min", price: "à partir de 40 €" },
  { from: "Pont-de-Chéruy", to: "Montluel", time: "~20 min", price: "à partir de 30 €" },
];

export default function TaxiPontDeCheruyPage() {
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
            Taxi · Pont-de-Chéruy (38490 — Isère)
          </span>
          <h1 className="text-4xl sm:text-5xl font-semibold tracking-tight text-black leading-tight mb-6">
            Taxi à<br />
            <span className="text-black/30">Pont-de-Chéruy</span>
          </h1>
          <p className="text-base text-[#555] leading-relaxed max-w-2xl mb-4">
            SPM Taxi dessert Pont-de-Chéruy, Charvieu-Chavagneux et tout le secteur
            Nord-Isère. Taxi conventionné CPAM agréé par l'Assurance Maladie —
            zéro avance de frais pour vos transports médicaux sur prescription.
            Transferts vers l'aéroport Lyon Saint-Exupéry et les gares lyonnaises.
          </p>
          <p className="text-base text-[#555] leading-relaxed max-w-2xl mb-8">
            Volkswagen Tiguan Allspace 7 places — confort premium, Wi-Fi, attache-remorque.
            Disponible 7j/7, 24h/24. Devis gratuit sous 2h.
          </p>
          <div className="flex flex-wrap gap-3">
            <a href="tel:+33767751898" className="inline-flex items-center gap-2 rounded-full bg-black text-white px-6 py-3 text-sm font-semibold hover:bg-[#111] transition-colors">
              <Phone className="h-4 w-4" />07 67 75 18 98
            </a>
            <a href="/#contact" className="inline-flex items-center gap-2 rounded-full border border-black/15 text-black px-6 py-3 text-sm font-semibold hover:border-black/30 transition-colors">
              Devis gratuit<ArrowRight className="h-4 w-4" />
            </a>
          </div>
        </div>

        {/* Services */}
        <section className="mb-16">
          <h2 className="text-2xl font-semibold tracking-tight text-black mb-8">Nos services à Pont-de-Chéruy</h2>
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

        {/* CPAM section */}
        <section className="mb-16 bg-white rounded-2xl p-8 border border-black/[0.06]">
          <h2 className="text-2xl font-semibold tracking-tight text-black mb-4">Transport médical CPAM à Pont-de-Chéruy</h2>
          <p className="text-sm text-[#555] leading-relaxed mb-4">
            SPM Taxi est conventionné avec l'Assurance Maladie pour les transports médicaux assis
            à Pont-de-Chéruy. Sur prescription médicale, vous bénéficiez du tiers payant :
            vous ne payez rien, la Sécurité Sociale règle directement le taxi.
          </p>
          <ul className="text-sm text-[#555] space-y-2 mb-6">
            <li className="flex items-start gap-2"><CheckCircle className="h-4 w-4 text-black shrink-0 mt-0.5" />Pont-de-Chéruy → CHU Lyon (Edouard Herriot, Croix-Rousse, Lyon-Sud)</li>
            <li className="flex items-start gap-2"><CheckCircle className="h-4 w-4 text-black shrink-0 mt-0.5" />Pont-de-Chéruy → Centre de dialyse Nord-Isère</li>
            <li className="flex items-start gap-2"><CheckCircle className="h-4 w-4 text-black shrink-0 mt-0.5" />Pont-de-Chéruy → Centre anticancéreux</li>
            <li className="flex items-start gap-2"><CheckCircle className="h-4 w-4 text-black shrink-0 mt-0.5" />Pont-de-Chéruy → Cliniques et cabinets médicaux de Bourgoin-Jallieu</li>
          </ul>
          <a href="tel:+33767751898" className="inline-flex items-center gap-2 rounded-full bg-black text-white px-5 py-2.5 text-sm font-semibold hover:bg-[#111] transition-colors">
            <Phone className="h-4 w-4" />Appeler pour un transport CPAM
          </a>
        </section>

        {/* Tarifs */}
        <section className="mb-16">
          <h2 className="text-2xl font-semibold tracking-tight text-black mb-3">Tarifs taxi depuis Pont-de-Chéruy</h2>
          <p className="text-sm text-[#555] mb-8">Tarifs indicatifs — devis gratuit sous 2h au 07 67 75 18 98.</p>
          <div className="bg-white rounded-2xl border border-black/[0.06] overflow-hidden">
            {destinations.map((d, i) => (
              <div key={d.to} className={`flex items-center justify-between px-6 py-4 gap-4 ${i !== destinations.length - 1 ? "border-b border-black/[0.06]" : ""}`}>
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
          <h2 className="text-2xl font-semibold tracking-tight text-black mb-8">Pages utiles</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {[
              { href: "/taxi-charvieu-chavagneux", label: "Taxi Charvieu-Chavagneux", desc: "Commune voisine de Pont-de-Chéruy" },
              { href: "/taxi-tignieu-jameyzieu", label: "Taxi Tignieu-Jameyzieu", desc: "Nord-Isère, secteur SPM Taxi" },
              { href: "/taxi-conventionne-cpam", label: "Transport médical CPAM", desc: "Zéro avance de frais, tiers payant" },
              { href: "/transfert-aeroport-lyon", label: "Aéroport Lyon Saint-Exupéry", desc: "Depuis Pont-de-Chéruy à partir de 40 €" },
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

        {/* FAQ */}
        <section className="mb-16">
          <h2 className="text-2xl font-semibold tracking-tight text-black mb-8">Questions fréquentes — Taxi Pont-de-Chéruy</h2>
          <div className="space-y-4">
            {[
              {
                q: "Y a-t-il un taxi conventionné CPAM à Pont-de-Chéruy ?",
                a: "Oui. SPM Taxi est agréé CPAM et intervient à Pont-de-Chéruy pour les transports médicaux assis sur prescription. Zéro avance de frais — l'Assurance Maladie prend en charge directement vos trajets vers les hôpitaux et centres de soins.",
              },
              {
                q: "Combien coûte un taxi de Pont-de-Chéruy à l'aéroport Lyon ?",
                a: "Depuis Pont-de-Chéruy, le transfert vers l'aéroport Lyon Saint-Exupéry est à partir de 40 €. Tarif fixe garanti, suivi des vols, pas de supplément en cas de retard. Devis gratuit au 07 67 75 18 98.",
              },
              {
                q: "Comment fonctionne le remboursement CPAM pour un taxi médical depuis Pont-de-Chéruy ?",
                a: "Votre médecin vous prescrit un transport sanitaire (formulaire S3138 ou ordonnance). SPM Taxi facture directement l'Assurance Maladie via le tiers payant. Vous ne payez rien si vous êtes en ALD ou à 100%. Simple et sans avance de frais.",
              },
              {
                q: "SPM Taxi dessert-il les communes autour de Pont-de-Chéruy ?",
                a: "Oui. SPM Taxi intervient à Pont-de-Chéruy et dans toutes les communes voisines : Charvieu-Chavagneux, Tignieu-Jameyzieu, Anthon, Janneyrias, Montluel. Appelez le 07 67 75 18 98 pour toute demande.",
              },
            ].map(({ q, a }) => (
              <div key={q} className="bg-white rounded-2xl p-6 border border-black/[0.06]">
                <h3 className="text-sm font-semibold text-black mb-2">{q}</h3>
                <p className="text-sm text-[#555] leading-relaxed">{a}</p>
              </div>
            ))}
          </div>
        </section>

        {/* CTA */}
        <div className="bg-black text-white rounded-3xl p-10 text-center">
          <h2 className="text-2xl font-semibold mb-3">Taxi à Pont-de-Chéruy — Réservez</h2>
          <p className="text-white/50 text-sm mb-8">Conventionné CPAM · 7j/7 24h/24 · Devis gratuit sous 2h</p>
          <div className="flex flex-wrap gap-3 justify-center">
            <a href="tel:+33767751898" className="inline-flex items-center gap-2 rounded-full bg-white text-black px-6 py-3 text-sm font-semibold hover:bg-white/90 transition-colors">
              <Phone className="h-4 w-4" />07 67 75 18 98
            </a>
            <a href="/#contact" className="inline-flex items-center gap-2 rounded-full border border-white/25 text-white px-6 py-3 text-sm font-semibold hover:border-white/50 transition-colors">
              Formulaire de contact<ArrowRight className="h-4 w-4" />
            </a>
          </div>
        </div>
      </main>

      <footer className="border-t border-black/[0.06] px-6 py-8 text-center">
        <p className="text-xs text-black/30">
          © 2026 SPM Taxi — Conventionné CPAM · Pont-de-Chéruy (38) ·{" "}
          <Link href="/" className="underline underline-offset-2">Retour au site</Link>
        </p>
      </footer>
    </div>
  );
}
