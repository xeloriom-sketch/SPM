import type { Metadata } from "next";
import Link from "next/link";
import { ArrowLeft, Phone, MapPin, CheckCircle, ArrowRight } from "lucide-react";

export const metadata: Metadata = {
  title: "Taxi L'Isle-d'Abeau — CPAM · Isère 38 | SPM Taxi",
  description:
    "Taxi à L'Isle-d'Abeau (38080 Isère) : conventionné CPAM, transfert aéroport Lyon Saint-Exupéry, transport médical remboursé. Volkswagen Tiguan 7 places. 7j/7 24h/24. ☎ 07 67 75 18 98.",
  keywords: [
    "taxi Isle d'Abeau", "taxi L'Isle-d'Abeau", "taxi Isle d Abeau 38080",
    "taxi conventionné Isle d'Abeau", "taxi CPAM Isle d'Abeau",
    "taxi Isle d'Abeau aéroport Lyon", "taxi Isle d'Abeau Lyon",
    "taxi médical Isle d'Abeau", "transport médical Isle d'Abeau",
    "taxi Isle d'Abeau Bourgoin", "taxi Isle d'Abeau Vienne",
    "chauffeur taxi Isle d'Abeau", "taxi Isère nord aéroport",
  ],
  alternates: { canonical: "https://taxispm.fr/taxi-isle-d-abeau/" },
  robots: { index: true, follow: true },
  openGraph: {
    title: "Taxi L'Isle-d'Abeau — CPAM Isère | SPM Taxi",
    description: "Taxi conventionné CPAM à L'Isle-d'Abeau (38080 Isère). Aéroport Lyon LYS 15 min, transport médical remboursé. ☎ 07 67 75 18 98.",
    url: "https://taxispm.fr/taxi-isle-d-abeau/",
    type: "website", locale: "fr_FR",
    images: [{ url: "/image/tiguan-front-quarter.webp", alt: "Taxi L'Isle-d'Abeau — SPM Taxi Isère 38" }],
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": ["LocalBusiness", "TaxiService"],
      "@id": "https://taxispm.fr/#business",
      name: "SPM Taxi — L'Isle-d'Abeau",
      telephone: "+33767751898",
      url: "https://taxispm.fr/taxi-isle-d-abeau/",
      description: "SPM Taxi dessert L'Isle-d'Abeau et le Nord Isère. À 15 minutes de l'aéroport Lyon Saint-Exupéry. Taxi conventionné CPAM — transport médical remboursé. 7j/7 24h/24.",
      address: { "@type": "PostalAddress", streetAddress: "951 route des hauts fourneaux", addressLocality: "Villebois", postalCode: "01150", addressRegion: "Auvergne-Rhône-Alpes", addressCountry: "FR" },
      areaServed: [
        { "@type": "City", name: "L'Isle-d'Abeau", containedInPlace: { "@type": "AdministrativeArea", name: "Isère" } },
        { "@type": "City", name: "Bourgoin-Jallieu" }, { "@type": "City", name: "Lyon" },
        { "@type": "Airport", name: "Aéroport Lyon Saint-Exupéry", iataCode: "LYS" },
      ],
      aggregateRating: { "@type": "AggregateRating", ratingValue: 4.6, reviewCount: 12, bestRating: 5, worstRating: 1 },
      openingHoursSpecification: [{ "@type": "OpeningHoursSpecification", dayOfWeek: ["Monday","Tuesday","Wednesday","Thursday","Friday","Saturday","Sunday"], opens: "00:00", closes: "23:59" }],
    },
    {
      "@type": "FAQPage",
      mainEntity: [
        { "@type": "Question", name: "Y a-t-il un taxi conventionné CPAM à L'Isle-d'Abeau ?", acceptedAnswer: { "@type": "Answer", text: "Oui. SPM Taxi est agréé CPAM et intervient à L'Isle-d'Abeau pour les transports médicaux sur prescription. Zéro avance de frais — tiers payant. ☎ 07 67 75 18 98." } },
        { "@type": "Question", name: "Combien coûte un taxi de L'Isle-d'Abeau à l'aéroport Lyon ?", acceptedAnswer: { "@type": "Answer", text: "Depuis L'Isle-d'Abeau, l'aéroport Lyon Saint-Exupéry est à partir de 35 € seulement — trajet de seulement 15 minutes. Tarif fixe garanti. Devis gratuit au 07 67 75 18 98." } },
        { "@type": "Question", name: "SPM Taxi dessert-il L'Isle-d'Abeau → Lyon Centre ?", acceptedAnswer: { "@type": "Answer", text: "Oui. Depuis L'Isle-d'Abeau, Lyon Centre est à environ 35 minutes, à partir de 50 €. SPM Taxi dessert toutes les destinations lyonnaises : Part-Dieu, hôpitaux, gares." } },
        { "@type": "Question", name: "Comment réserver un taxi à L'Isle-d'Abeau ?", acceptedAnswer: { "@type": "Answer", text: "Appelez le 07 67 75 18 98 (7j/7, 24h/24) ou remplissez le formulaire en ligne sur taxispm.fr. Réponse garantie sous 2h." } },
      ],
    },
    { "@type": "BreadcrumbList", itemListElement: [{ "@type": "ListItem", position: 1, name: "Accueil", item: "https://taxispm.fr" }, { "@type": "ListItem", position: 2, name: "Taxi L'Isle-d'Abeau", item: "https://taxispm.fr/taxi-isle-d-abeau/" }] },
  ],
};

const destinations = [
  { to: "Aéroport Lyon Saint-Exupéry", time: "~15 min", price: "à partir de 35 €" },
  { to: "Lyon Centre", time: "~35 min", price: "à partir de 50 €" },
  { to: "Bourgoin-Jallieu", time: "~10 min", price: "à partir de 15 €" },
  { to: "Vienne", time: "~30 min", price: "à partir de 40 €" },
  { to: "Grenoble", time: "~45 min", price: "à partir de 65 €" },
  { to: "Villebois", time: "~55 min", price: "à partir de 70 €" },
];

export default function TaxiIsleAbeau() {
  return (
    <div className="min-h-screen bg-[#f8f9fa] font-sans">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <header className="bg-black text-white px-6 py-4 flex items-center gap-4">
        <Link href="/" className="flex items-center gap-2 text-white/60 hover:text-white transition-colors text-sm">
          <ArrowLeft className="h-4 w-4" />SPM Taxi
        </Link>
      </header>
      <main className="max-w-4xl mx-auto px-6 py-16">
        <div className="mb-16">
          <span className="text-[10px] font-bold tracking-[0.3em] uppercase text-black/40 mb-4 block">Taxi · L'Isle-d'Abeau (38080 — Isère)</span>
          <h1 className="text-4xl sm:text-5xl font-semibold tracking-tight text-black leading-tight mb-6">
            Taxi à<br /><span className="text-black/30">L'Isle-d'Abeau</span>
          </h1>
          <p className="text-base text-[#555] leading-relaxed max-w-2xl mb-4">
            SPM Taxi dessert L'Isle-d'Abeau et tout le Nord-Isère. Situé à seulement 15 minutes
            de l'aéroport Lyon Saint-Exupéry, L'Isle-d'Abeau est l'une des zones les mieux
            desservies pour les transferts aéroport. Tarifs parmi les plus bas de la région.
          </p>
          <p className="text-base text-[#555] leading-relaxed max-w-2xl mb-8">
            Taxi conventionné CPAM — transport médical remboursé sur prescription,
            sans avance de frais. Volkswagen Tiguan Allspace 7 places, climatisation, 7j/7 24h/24.
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

        <section className="mb-16 bg-white rounded-2xl p-8 border border-black/[0.06]">
          <h2 className="text-2xl font-semibold tracking-tight text-black mb-4">L'Isle-d'Abeau → Aéroport Lyon — 15 minutes</h2>
          <p className="text-sm text-[#555] leading-relaxed mb-4">
            L'Isle-d'Abeau est l'une des villes d'Isère les plus proches de l'aéroport Lyon Saint-Exupéry.
            SPM Taxi propose des transferts premium depuis votre domicile :
          </p>
          <ul className="text-sm text-[#555] space-y-2 mb-6">
            <li className="flex items-start gap-2"><CheckCircle className="h-4 w-4 text-black shrink-0 mt-0.5" />Prise en charge à domicile à L'Isle-d'Abeau et communes voisines</li>
            <li className="flex items-start gap-2"><CheckCircle className="h-4 w-4 text-black shrink-0 mt-0.5" />Suivi des vols — attente offerte en cas de retard</li>
            <li className="flex items-start gap-2"><CheckCircle className="h-4 w-4 text-black shrink-0 mt-0.5" />Tarif fixe à partir de 35 € seulement — aucun supplément</li>
            <li className="flex items-start gap-2"><CheckCircle className="h-4 w-4 text-black shrink-0 mt-0.5" />Disponible 7j/7, 24h/24, y compris vols 5h du matin</li>
          </ul>
          <p className="text-sm font-medium text-black">L'Isle-d'Abeau → Aéroport Lyon Saint-Exupéry : à partir de 35 €</p>
        </section>

        <section className="mb-16 bg-white rounded-2xl p-8 border border-black/[0.06]">
          <h2 className="text-2xl font-semibold tracking-tight text-black mb-4">Transport médical CPAM à L'Isle-d'Abeau</h2>
          <ul className="text-sm text-[#555] space-y-2">
            <li className="flex items-start gap-2"><CheckCircle className="h-4 w-4 text-black shrink-0 mt-0.5" />L'Isle-d'Abeau → CHU Lyon</li>
            <li className="flex items-start gap-2"><CheckCircle className="h-4 w-4 text-black shrink-0 mt-0.5" />L'Isle-d'Abeau → Hôpital de Bourgoin-Jallieu</li>
            <li className="flex items-start gap-2"><CheckCircle className="h-4 w-4 text-black shrink-0 mt-0.5" />L'Isle-d'Abeau → Centres de dialyse Lyon et Grenoble</li>
            <li className="flex items-start gap-2"><CheckCircle className="h-4 w-4 text-black shrink-0 mt-0.5" />L'Isle-d'Abeau → CHU Grenoble (Michallon)</li>
          </ul>
        </section>

        <section className="mb-16">
          <h2 className="text-2xl font-semibold tracking-tight text-black mb-3">Tarifs taxi depuis L'Isle-d'Abeau</h2>
          <p className="text-sm text-[#555] mb-8">Tarifs indicatifs — devis gratuit sous 2h au 07 67 75 18 98.</p>
          <div className="bg-white rounded-2xl border border-black/[0.06] overflow-hidden">
            {destinations.map((d, i) => (
              <div key={d.to} className={`flex items-center justify-between px-6 py-4 gap-4 ${i !== destinations.length - 1 ? "border-b border-black/[0.06]" : ""}`}>
                <div className="flex items-center gap-3 min-w-0"><MapPin className="h-4 w-4 text-black/25 shrink-0" /><span className="text-sm font-medium text-black truncate">{d.to}</span></div>
                <div className="flex items-center gap-4 shrink-0"><span className="text-sm text-black/40">{d.time}</span><span className="text-sm font-semibold text-black">{d.price}</span></div>
              </div>
            ))}
          </div>
        </section>

        <section className="mb-16">
          <h2 className="text-2xl font-semibold tracking-tight text-black mb-8">Questions fréquentes</h2>
          <div className="space-y-4">
            {[
              { q: "Y a-t-il un taxi CPAM à L'Isle-d'Abeau ?", a: "Oui. SPM Taxi est conventionné CPAM et intervient à L'Isle-d'Abeau pour les transports médicaux sur prescription. Tiers payant — zéro avance de frais avec la Sécurité Sociale." },
              { q: "Combien coûte le taxi L'Isle-d'Abeau → aéroport Lyon ?", a: "Depuis L'Isle-d'Abeau, l'aéroport Lyon Saint-Exupéry est à partir de 35 € seulement — trajet de 15 minutes. C'est l'un des transferts les moins chers de toute l'Isère Nord." },
              { q: "SPM Taxi va-t-il de L'Isle-d'Abeau à Grenoble ?", a: "Oui. Grenoble depuis L'Isle-d'Abeau est à environ 45 minutes, à partir de 65 €. SPM Taxi dessert le CHU Grenoble et toutes les cliniques grenobloises." },
              { q: "Comment réserver un taxi à L'Isle-d'Abeau ?", a: "Appelez le 07 67 75 18 98 (7j/7, 24h/24) ou remplissez le formulaire en ligne sur taxispm.fr. Réponse garantie sous 2h. Pour les vols du matin, réservez la veille." },
            ].map(({ q, a }) => (
              <div key={q} className="bg-white rounded-2xl p-6 border border-black/[0.06]">
                <h3 className="text-sm font-semibold text-black mb-2">{q}</h3>
                <p className="text-sm text-[#555] leading-relaxed">{a}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="mb-16">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {[
              { href: "/taxi-bourgoin-jallieu", label: "Taxi Bourgoin-Jallieu", desc: "10 min de L'Isle-d'Abeau" },
              { href: "/taxi-vienne", label: "Taxi Vienne", desc: "Isère — 30 min de L'Isle-d'Abeau" },
              { href: "/transfert-aeroport-lyon", label: "Aéroport Lyon Saint-Exupéry", desc: "15 min — à partir de 35 €" },
              { href: "/taxi-conventionne-cpam", label: "Transport CPAM remboursé", desc: "Zéro avance de frais" },
            ].map(({ href, label, desc }) => (
              <Link key={href} href={href} className="flex items-center justify-between gap-4 bg-white rounded-2xl p-5 border border-black/[0.06] hover:border-black/15 transition-colors group">
                <div><p className="text-sm font-semibold text-black mb-1">{label}</p><p className="text-xs text-[#555]">{desc}</p></div>
                <ArrowRight className="h-4 w-4 text-black/30 shrink-0 group-hover:translate-x-0.5 transition-transform" />
              </Link>
            ))}
          </div>
        </section>

        <div className="bg-black text-white rounded-3xl p-10 text-center">
          <h2 className="text-2xl font-semibold mb-3">Taxi L'Isle-d'Abeau — Réservez</h2>
          <p className="text-white/50 text-sm mb-8">Aéroport Lyon 15 min · CPAM · 7j/7 24h/24</p>
          <div className="flex flex-wrap gap-3 justify-center">
            <a href="tel:+33767751898" className="inline-flex items-center gap-2 rounded-full bg-white text-black px-6 py-3 text-sm font-semibold hover:bg-white/90 transition-colors"><Phone className="h-4 w-4" />07 67 75 18 98</a>
            <a href="/#contact" className="inline-flex items-center gap-2 rounded-full border border-white/25 text-white px-6 py-3 text-sm font-semibold hover:border-white/50 transition-colors">Formulaire de contact<ArrowRight className="h-4 w-4" /></a>
          </div>
        </div>
      </main>
      <footer className="border-t border-black/[0.06] px-6 py-8 text-center">
        <p className="text-xs text-black/30">© 2026 SPM Taxi — Conventionné CPAM · L'Isle-d'Abeau (38) · <Link href="/" className="underline underline-offset-2">Retour au site</Link></p>
      </footer>
    </div>
  );
}
