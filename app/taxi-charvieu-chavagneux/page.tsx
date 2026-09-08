import type { Metadata } from "next";
import Link from "next/link";
import { ArrowLeft, Phone, MapPin, Clock, CheckCircle, ArrowRight, Shield } from "lucide-react";

export const metadata: Metadata = {
  title: "Taxi Charvieu-Chavagneux — Conventionné CPAM",
  description:
    "Taxi à Charvieu-Chavagneux (Isère 38) : conventionné CPAM, transport médical remboursé, transfert aéroport Lyon Saint-Exupéry. Volkswagen Tiguan 7 places. 7j/7 24h/24. ☎ 07 67 75 18 98.",
  keywords: [
    "taxi Charvieu-Chavagneux", "taxi Charvieu", "taxi Chavagneux",
    "taxi conventionné Charvieu-Chavagneux", "taxi CPAM Charvieu",
    "taxi médical Charvieu-Chavagneux", "taxi VSL Charvieu",
    "transport médical Charvieu CPAM", "taxi Charvieu aéroport Lyon",
    "taxi Charvieu-Chavagneux Lyon Saint-Exupéry", "taxi Charvieu 38230",
    "taxi Charvieu Pont-de-Chéruy", "taxi Charvieu Tignieu-Jameyzieu",
    "taxi Charvieu prix tarif", "réserver taxi Charvieu-Chavagneux",
    "taxi Nord-Isère Charvieu", "taxi Charvieu tiers payant",
    "taxi Charvieu nuit week-end", "chauffeur taxi Charvieu-Chavagneux",
  ],
  alternates: { canonical: "https://taxispm.fr/taxi-charvieu-chavagneux/" },
  robots: { index: true, follow: true },
  openGraph: {
    title: "Taxi Charvieu-Chavagneux — Conventionné CPAM | SPM Taxi · 7j/7 24h/24",
    description:
      "Taxi conventionné CPAM à Charvieu-Chavagneux. Aéroport Lyon, transport médical remboursé tiers payant, Tignieu-Jameyzieu. Volkswagen Tiguan 7 places. ☎ 07 67 75 18 98.",
    url: "https://taxispm.fr/taxi-charvieu-chavagneux/",
    type: "website",
    locale: "fr_FR",
    images: [{ url: "/image/tiguan-front-quarter.webp", alt: "Taxi Charvieu-Chavagneux — SPM Taxi Isère" }],
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": ["LocalBusiness", "TaxiService"],
      "@id": "https://taxispm.fr/#business",
      name: "SPM Taxi — Charvieu-Chavagneux",
      telephone: "+33767751898",
      url: "https://taxispm.fr/taxi-charvieu-chavagneux/",
      description: "SPM Taxi assure des courses de taxi à Charvieu-Chavagneux et dans tout le secteur Tignieu-Jameyzieu / Pont-de-Chéruy. Conventionné CPAM, transport médical, transferts aéroport Lyon. 7j/7 24h/24.",
      address: {
        "@type": "PostalAddress",
        streetAddress: "951 route des hauts fourneaux",
        addressLocality: "Villebois",
        postalCode: "01150",
        addressRegion: "Auvergne-Rhône-Alpes",
        addressCountry: "FR",
      },
      areaServed: [
        { "@type": "City", name: "Charvieu-Chavagneux", containedInPlace: { "@type": "AdministrativeArea", name: "Isère" } },
        { "@type": "City", name: "Pont-de-Chéruy" },
        { "@type": "City", name: "Tignieu-Jameyzieu" },
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
          name: "Combien coûte un taxi de Charvieu-Chavagneux à l'aéroport de Lyon ?",
          acceptedAnswer: { "@type": "Answer", text: "Depuis Charvieu-Chavagneux, le transfert vers l'aéroport Lyon Saint-Exupéry est à partir de 45 €. Tarif fixe, sans surprise. Devis gratuit au 07 67 75 18 98." },
        },
        {
          "@type": "Question",
          name: "Y a-t-il un taxi conventionné CPAM à Charvieu-Chavagneux ?",
          acceptedAnswer: { "@type": "Answer", text: "Oui, SPM Taxi est conventionné CPAM et intervient à Charvieu-Chavagneux pour les transports médicaux sur prescription. Zéro avance de frais — tiers payant avec l'Assurance Maladie." },
        },
        {
          "@type": "Question",
          name: "Comment fonctionne le remboursement CPAM pour un taxi médical à Charvieu-Chavagneux ?",
          acceptedAnswer: { "@type": "Answer", text: "Votre médecin prescrit un transport sanitaire (formulaire S3138 ou ordonnance). SPM Taxi facture directement l'Assurance Maladie via le tiers payant. Vous ne payez rien si vous êtes en ALD ou pris en charge à 100%. SPM Taxi se charge des démarches administratives." },
        },
        {
          "@type": "Question",
          name: "SPM Taxi peut-il transporter des patients en dialyse depuis Charvieu-Chavagneux ?",
          acceptedAnswer: { "@type": "Answer", text: "Oui. SPM Taxi transporte régulièrement des patients en dialyse, chimiothérapie et radiothérapie depuis Charvieu-Chavagneux. Conventionné CPAM — tiers payant, ponctualité garantie pour vos séances régulières." },
        },
        {
          "@type": "Question",
          name: "Quel taxi prendre à Charvieu-Chavagneux pour un vol tôt le matin ?",
          acceptedAnswer: { "@type": "Answer", text: "SPM Taxi est disponible 7j/7, 24h/24, y compris pour les vols très tôt le matin depuis Charvieu-Chavagneux. Réservez la veille au 07 67 75 18 98. Tarif fixe aéroport à partir de 45 €, suivi des vols inclus, pas de supplément en cas de retard." },
        },
        {
          "@type": "Question",
          name: "SPM Taxi fait-il la gare de Lyon Part-Dieu ou Perrache depuis Charvieu-Chavagneux ?",
          acceptedAnswer: { "@type": "Answer", text: "Oui. SPM Taxi effectue des transferts depuis Charvieu-Chavagneux vers toutes les gares lyonnaises : Part-Dieu, Perrache, la Guillotière. Environ 30-35 minutes de trajet, tarif à partir de 40 €." },
        },
      ],
    },
    {
      "@type": "BreadcrumbList",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Accueil", item: "https://taxispm.fr" },
        { "@type": "ListItem", position: 2, name: "Taxi Charvieu-Chavagneux", item: "https://taxispm.fr/taxi-charvieu-chavagneux/" },
      ],
    },
  ],
};

const services = [
  {
    icon: Shield,
    title: "Transport médical CPAM — tiers payant",
    desc: "Agréé CPAM depuis Charvieu-Chavagneux. Chimiothérapie, dialyse, hospitalisation, consultation spécialisée — zéro avance de frais sur prescription médicale.",
  },
  {
    icon: MapPin,
    title: "Aéroport Lyon Saint-Exupéry",
    desc: "Depuis Charvieu-Chavagneux, ~30 min jusqu'à l'aéroport LYS. Suivi des vols, tarif fixe, pas de frais en cas de retard.",
  },
  {
    icon: Clock,
    title: "Disponible 7j/7 — 24h/24",
    desc: "Nuits, week-ends, jours fériés : SPM Taxi répond depuis Charvieu-Chavagneux et Tignieu-Jameyzieu. Confirmation sous 2h.",
  },
  {
    icon: CheckCircle,
    title: "Volkswagen Tiguan 7 places",
    desc: "SUV spacieux, climatisation, Wi-Fi, attache-remorque. Idéal familles, groupes, personnes à mobilité réduite.",
  },
];

const destinations = [
  { from: "Charvieu-Chavagneux", to: "Aéroport Lyon Saint-Exupéry", time: "~30 min", price: "à partir de 45 €" },
  { from: "Charvieu-Chavagneux", to: "Lyon Centre", time: "~30 min", price: "à partir de 40 €" },
  { from: "Charvieu-Chavagneux", to: "Tignieu-Jameyzieu", time: "~10 min", price: "à partir de 20 €" },
  { from: "Charvieu-Chavagneux", to: "Pont-de-Chéruy", time: "~5 min", price: "à partir de 15 €" },
  { from: "Charvieu-Chavagneux", to: "Bourgoin-Jallieu", time: "~25 min", price: "à partir de 35 €" },
  { from: "Charvieu-Chavagneux", to: "Montluel", time: "~20 min", price: "à partir de 30 €" },
];

export default function TaxiCharvieuChavagneuxPage() {
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
            Taxi · Charvieu-Chavagneux (38230)
          </span>
          <h1 className="text-4xl sm:text-5xl font-semibold tracking-tight text-black leading-tight mb-6">
            Taxi à<br />
            <span className="text-black/30">Charvieu-Chavagneux</span>
          </h1>
          <p className="text-base text-[#555] leading-relaxed max-w-2xl mb-4">
            SPM Taxi dessert Charvieu-Chavagneux, Pont-de-Chéruy et tout le secteur
            Tignieu-Jameyzieu. Taxi conventionné CPAM agréé par l'Assurance Maladie —
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

        <section className="mb-16">
          <h2 className="text-2xl font-semibold tracking-tight text-black mb-8">Nos services à Charvieu-Chavagneux</h2>
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
          <h2 className="text-2xl font-semibold tracking-tight text-black mb-4">Transport médical CPAM à Charvieu-Chavagneux</h2>
          <p className="text-sm text-[#555] leading-relaxed mb-4">
            SPM Taxi est conventionné avec l'Assurance Maladie (CPAM) pour les transports
            médicaux assis à Charvieu-Chavagneux et dans toute la zone Pont-de-Chéruy.
            Sur prescription médicale, vous bénéficiez du tiers payant :
            <strong> vous ne payez rien</strong>, la Sécurité Sociale règle directement SPM Taxi.
          </p>
          <p className="text-sm text-[#555] leading-relaxed mb-4">
            Nos trajets CPAM les plus fréquents depuis Charvieu-Chavagneux :
          </p>
          <ul className="text-sm text-[#555] space-y-2 mb-6">
            <li className="flex items-start gap-2"><CheckCircle className="h-4 w-4 text-black shrink-0 mt-0.5" />Charvieu-Chavagneux → CHU Lyon (Edouard Herriot, Croix-Rousse, Lyon-Sud)</li>
            <li className="flex items-start gap-2"><CheckCircle className="h-4 w-4 text-black shrink-0 mt-0.5" />Charvieu-Chavagneux → Centre de dialyse Nord-Isère</li>
            <li className="flex items-start gap-2"><CheckCircle className="h-4 w-4 text-black shrink-0 mt-0.5" />Charvieu-Chavagneux → Centre anticancéreux de Lyon</li>
            <li className="flex items-start gap-2"><CheckCircle className="h-4 w-4 text-black shrink-0 mt-0.5" />Charvieu-Chavagneux → Cliniques et centres médicaux de Bourgoin-Jallieu</li>
            <li className="flex items-start gap-2"><CheckCircle className="h-4 w-4 text-black shrink-0 mt-0.5" />Charvieu-Chavagneux → Hôpital Pierre-Garraud, Fondation Mémorial, Clinique du Val d'Ouest</li>
          </ul>
          <p className="text-xs text-[#777] mb-4">
            Munissez-vous de votre prescription médicale de transport (formulaire S3138 ou ordonnance).
            SPM Taxi gère toutes les démarches administratives avec la CPAM.
          </p>
          <a href="tel:+33767751898" className="inline-flex items-center gap-2 rounded-full bg-black text-white px-5 py-2.5 text-sm font-semibold hover:bg-[#111] transition-colors">
            <Phone className="h-4 w-4" />Appeler pour un transport CPAM
          </a>
        </section>

        <section className="mb-16">
          <h2 className="text-2xl font-semibold tracking-tight text-black mb-3">Tarifs taxi depuis Charvieu-Chavagneux</h2>
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

        <section className="mb-16">
          <h2 className="text-2xl font-semibold tracking-tight text-black mb-8">Autres pages utiles</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {[
              { href: "/taxi-tignieu-jameyzieu", label: "Taxi Tignieu-Jameyzieu", desc: "Commune voisine de Charvieu-Chavagneux" },
              { href: "/taxi-conventionne-cpam", label: "Transport médical CPAM", desc: "Zéro avance de frais, tiers payant" },
              { href: "/transfert-aeroport-lyon", label: "Aéroport Lyon Saint-Exupéry", desc: "Depuis Charvieu à partir de 45 €" },
              { href: "/taxi-bourgoin-jallieu", label: "Taxi Bourgoin-Jallieu", desc: "Conventionné CPAM Nord-Isère" },
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

        <section className="mb-16">
          <h2 className="text-2xl font-semibold tracking-tight text-black mb-8">Questions fréquentes</h2>
          <div className="space-y-4">
            {[
              {
                q: "Combien coûte un taxi de Charvieu-Chavagneux à l'aéroport Lyon Saint-Exupéry ?",
                a: "Depuis Charvieu-Chavagneux, le transfert vers l'aéroport Lyon Saint-Exupéry est à partir de 45 €. Tarif fixe garanti, sans supplément en cas de retard de vol. Suivi des vols en temps réel inclus. Devis gratuit au 07 67 75 18 98.",
              },
              {
                q: "Y a-t-il un taxi conventionné CPAM à Charvieu-Chavagneux ?",
                a: "Oui. SPM Taxi est agréé CPAM pour les transports médicaux assis sur prescription médicale à Charvieu-Chavagneux et Pont-de-Chéruy. Zéro avance de frais — l'Assurance Maladie prend en charge directement vos trajets vers les hôpitaux et centres de soins (dialyse, chimio, hospitalisation).",
              },
              {
                q: "Comment fonctionne le remboursement CPAM pour un taxi médical à Charvieu-Chavagneux ?",
                a: "Votre médecin prescrit un transport sanitaire (formulaire S3138). SPM Taxi facture directement la CPAM via le tiers payant. Vous ne payez rien si vous êtes en ALD ou à 100%. SPM Taxi gère l'intégralité des démarches administratives.",
              },
              {
                q: "SPM Taxi dessert-il Pont-de-Chéruy depuis Charvieu-Chavagneux ?",
                a: "Oui, SPM Taxi intervient à Charvieu-Chavagneux et dans toutes les communes voisines : Pont-de-Chéruy, Tignieu-Jameyzieu, Montluel, Anthon, Janneyrias. Appelez le 07 67 75 18 98 pour toute demande.",
              },
              {
                q: "Peut-on réserver un taxi de nuit à Charvieu-Chavagneux ?",
                a: "Oui, SPM Taxi est disponible 7j/7, 24h/24 depuis Charvieu-Chavagneux. Nuits, week-ends et jours fériés compris. Pour un vol tôt le matin ou un retour tardif d'hôpital, appelez le 07 67 75 18 98 — réservation recommandée la veille.",
              },
              {
                q: "SPM Taxi fait-il la gare de Lyon Part-Dieu depuis Charvieu-Chavagneux ?",
                a: "Oui. SPM Taxi effectue des transferts depuis Charvieu-Chavagneux vers toutes les gares lyonnaises : Part-Dieu, Perrache, la Guillotière. Environ 30-35 minutes de trajet, tarif à partir de 40 €.",
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
          <h2 className="text-2xl font-semibold mb-3">Taxi à Charvieu-Chavagneux — Réservez</h2>
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
          © 2026 SPM Taxi — Conventionné CPAM · Charvieu-Chavagneux (38) ·{" "}
          <Link href="/" className="underline underline-offset-2">Retour au site</Link>
        </p>
      </footer>
    </div>
  );
}
