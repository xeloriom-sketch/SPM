import type { Metadata } from "next";
import Link from "next/link";
import { ArrowLeft, Phone, MapPin, CheckCircle, ArrowRight } from "lucide-react";

export const metadata: Metadata = {
  title: "Taxi Vienne — Conventionné CPAM · Isère 38 | SPM Taxi",
  description:
    "Taxi à Vienne (38200 Isère) : conventionné CPAM, transport médical remboursé, transfert aéroport Lyon Saint-Exupéry. Volkswagen Tiguan 7 places. 7j/7 24h/24. ☎ 07 67 75 18 98.",
  keywords: [
    "taxi Vienne", "taxi Vienne Isère", "taxi Vienne 38200",
    "taxi conventionné Vienne", "taxi CPAM Vienne",
    "taxi médical Vienne", "taxi Vienne hôpital",
    "taxi Vienne Lyon", "taxi Vienne aéroport Lyon",
    "transport médical Vienne CPAM", "taxi Vienne tiers payant",
    "taxi Vienne Isle d'Abeau", "chauffeur taxi Vienne Isère",
    "taxi Vienne dialyse chimiothérapie",
  ],
  alternates: { canonical: "https://taxispm.fr/taxi-vienne/" },
  robots: { index: true, follow: true },
  openGraph: {
    title: "Taxi Vienne — Conventionné CPAM Isère | SPM Taxi",
    description: "Taxi conventionné CPAM à Vienne (38200 Isère). Transport médical remboursé, aéroport Lyon, 7j/7 24h/24. ☎ 07 67 75 18 98.",
    url: "https://taxispm.fr/taxi-vienne/",
    type: "website", locale: "fr_FR",
    images: [{ url: "/image/tiguan-front-quarter.webp", alt: "Taxi Vienne — SPM Taxi Isère 38" }],
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": ["LocalBusiness", "TaxiService"],
      "@id": "https://taxispm.fr/#business",
      name: "SPM Taxi — Vienne",
      telephone: "+33767751898",
      url: "https://taxispm.fr/taxi-vienne/",
      description: "SPM Taxi dessert Vienne (Isère) et le couloir rhodanien. Taxi conventionné CPAM — transport médical sur prescription, transferts aéroport Lyon Saint-Exupéry. 7j/7 24h/24.",
      address: { "@type": "PostalAddress", streetAddress: "951 route des hauts fourneaux", addressLocality: "Villebois", postalCode: "01150", addressRegion: "Auvergne-Rhône-Alpes", addressCountry: "FR" },
      areaServed: [
        { "@type": "City", name: "Vienne", containedInPlace: { "@type": "AdministrativeArea", name: "Isère" } },
        { "@type": "City", name: "Lyon" }, { "@type": "City", name: "Bourgoin-Jallieu" },
        { "@type": "Airport", name: "Aéroport Lyon Saint-Exupéry", iataCode: "LYS" },
      ],
      aggregateRating: { "@type": "AggregateRating", ratingValue: 4.6, reviewCount: 12, bestRating: 5, worstRating: 1 },
      openingHoursSpecification: [{ "@type": "OpeningHoursSpecification", dayOfWeek: ["Monday","Tuesday","Wednesday","Thursday","Friday","Saturday","Sunday"], opens: "00:00", closes: "23:59" }],
    },
    {
      "@type": "FAQPage",
      mainEntity: [
        { "@type": "Question", name: "Y a-t-il un taxi conventionné CPAM à Vienne ?", acceptedAnswer: { "@type": "Answer", text: "Oui. SPM Taxi est agréé CPAM et intervient à Vienne (Isère) pour les transports médicaux sur prescription. Zéro avance de frais — tiers payant avec l'Assurance Maladie. ☎ 07 67 75 18 98." } },
        { "@type": "Question", name: "Combien coûte un taxi de Vienne à Lyon Saint-Exupéry ?", acceptedAnswer: { "@type": "Answer", text: "Depuis Vienne, l'aéroport Lyon Saint-Exupéry est à partir de 65 € (environ 40 minutes). Tarif fixe garanti avec suivi des vols. Devis gratuit au 07 67 75 18 98." } },
        { "@type": "Question", name: "SPM Taxi transporte-t-il vers le CH de Vienne ?", acceptedAnswer: { "@type": "Answer", text: "Oui. SPM Taxi effectue des transports CPAM depuis et vers le Centre Hospitalier de Vienne (CHV). Sur prescription médicale — zéro avance de frais." } },
        { "@type": "Question", name: "Comment réserver un taxi à Vienne Isère ?", acceptedAnswer: { "@type": "Answer", text: "Appelez le 07 67 75 18 98 (7j/7, 24h/24) ou remplissez le formulaire en ligne sur taxispm.fr. Réponse garantie sous 2h." } },
      ],
    },
    { "@type": "BreadcrumbList", itemListElement: [{ "@type": "ListItem", position: 1, name: "Accueil", item: "https://taxispm.fr" }, { "@type": "ListItem", position: 2, name: "Taxi Vienne", item: "https://taxispm.fr/taxi-vienne/" }] },
  ],
};

const destinations = [
  { to: "Lyon Centre", time: "~30 min", price: "à partir de 40 €" },
  { to: "Aéroport Lyon Saint-Exupéry", time: "~40 min", price: "à partir de 65 €" },
  { to: "Bourgoin-Jallieu", time: "~35 min", price: "à partir de 45 €" },
  { to: "L'Isle-d'Abeau", time: "~30 min", price: "à partir de 40 €" },
  { to: "Grenoble", time: "~50 min", price: "à partir de 70 €" },
  { to: "Villebois", time: "~1h", price: "à partir de 75 €" },
];

export default function TaxiViennePage() {
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
          <span className="text-[10px] font-bold tracking-[0.3em] uppercase text-black/40 mb-4 block">Taxi · Vienne (38200 — Isère)</span>
          <h1 className="text-4xl sm:text-5xl font-semibold tracking-tight text-black leading-tight mb-6">
            Taxi à<br /><span className="text-black/30">Vienne</span>
          </h1>
          <p className="text-base text-[#555] leading-relaxed max-w-2xl mb-4">
            SPM Taxi dessert Vienne et tout le couloir rhodanien. Taxi conventionné CPAM —
            transport médical remboursé sur prescription vers le Centre Hospitalier de Vienne,
            les cliniques de Lyon et les centres de dialyse de la région.
          </p>
          <p className="text-base text-[#555] leading-relaxed max-w-2xl mb-8">
            Transferts vers l'aéroport Lyon Saint-Exupéry (40 min), Lyon Centre (30 min),
            Grenoble et toute la France. Volkswagen Tiguan 7 places, 7j/7 24h/24.
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
          <h2 className="text-2xl font-semibold tracking-tight text-black mb-4">Transport médical CPAM à Vienne</h2>
          <p className="text-sm text-[#555] leading-relaxed mb-4">SPM Taxi conventionné CPAM intervient à Vienne pour tous vos transports médicaux. Sur prescription médicale, zéro avance de frais — tiers payant intégral.</p>
          <ul className="text-sm text-[#555] space-y-2 mb-4">
            <li className="flex items-start gap-2"><CheckCircle className="h-4 w-4 text-black shrink-0 mt-0.5" />Vienne → Centre Hospitalier de Vienne (CHV)</li>
            <li className="flex items-start gap-2"><CheckCircle className="h-4 w-4 text-black shrink-0 mt-0.5" />Vienne → CHU Lyon (Édouard Herriot, Croix-Rousse, Lyon-Sud)</li>
            <li className="flex items-start gap-2"><CheckCircle className="h-4 w-4 text-black shrink-0 mt-0.5" />Vienne → Centres de dialyse et chimiothérapie</li>
            <li className="flex items-start gap-2"><CheckCircle className="h-4 w-4 text-black shrink-0 mt-0.5" />Vienne → Clinique Sainte-Anne, Clinique des Portes du Sud</li>
            <li className="flex items-start gap-2"><CheckCircle className="h-4 w-4 text-black shrink-0 mt-0.5" />Vienne → Grenoble (hôpitaux, cliniques)</li>
          </ul>
        </section>

        <section className="mb-16">
          <h2 className="text-2xl font-semibold tracking-tight text-black mb-3">Tarifs taxi depuis Vienne</h2>
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
          <h2 className="text-2xl font-semibold tracking-tight text-black mb-8">Questions fréquentes — Taxi Vienne</h2>
          <div className="space-y-4">
            {[
              { q: "Y a-t-il un taxi conventionné CPAM à Vienne ?", a: "Oui. SPM Taxi est agréé CPAM et intervient à Vienne (Isère) pour les transports médicaux sur prescription. Zéro avance de frais — tiers payant avec l'Assurance Maladie." },
              { q: "Combien coûte un taxi de Vienne à l'aéroport Lyon ?", a: "Depuis Vienne, l'aéroport Lyon Saint-Exupéry est à partir de 65 € (environ 40 minutes). Tarif fixe garanti, suivi des vols en temps réel. Devis gratuit au 07 67 75 18 98." },
              { q: "SPM Taxi va-t-il de Vienne à Grenoble ?", a: "Oui. Depuis Vienne, Grenoble est à environ 50 minutes, à partir de 70 €. SPM Taxi dessert les hôpitaux et cliniques grenoblois sur prescription CPAM." },
              { q: "Comment réserver un taxi à Vienne Isère ?", a: "Appelez le 07 67 75 18 98 (disponible 7j/7, 24h/24) ou remplissez le formulaire de devis en ligne. Réponse garantie sous 2h." },
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
              { href: "/taxi-bourgoin-jallieu", label: "Taxi Bourgoin-Jallieu", desc: "Isère Nord — 35 min de Vienne" },
              { href: "/taxi-isle-d-abeau", label: "Taxi L'Isle-d'Abeau", desc: "Zone commerciale & aéroport proche" },
              { href: "/taxi-conventionne-cpam", label: "Transport CPAM remboursé", desc: "Zéro avance de frais" },
              { href: "/transfert-aeroport-lyon", label: "Aéroport Lyon Saint-Exupéry", desc: "Depuis Vienne à partir de 65 €" },
            ].map(({ href, label, desc }) => (
              <Link key={href} href={href} className="flex items-center justify-between gap-4 bg-white rounded-2xl p-5 border border-black/[0.06] hover:border-black/15 transition-colors group">
                <div><p className="text-sm font-semibold text-black mb-1">{label}</p><p className="text-xs text-[#555]">{desc}</p></div>
                <ArrowRight className="h-4 w-4 text-black/30 shrink-0 group-hover:translate-x-0.5 transition-transform" />
              </Link>
            ))}
          </div>
        </section>

        <div className="bg-black text-white rounded-3xl p-10 text-center">
          <h2 className="text-2xl font-semibold mb-3">Taxi à Vienne — Réservez</h2>
          <p className="text-white/50 text-sm mb-8">Conventionné CPAM · 7j/7 24h/24 · Devis gratuit sous 2h</p>
          <div className="flex flex-wrap gap-3 justify-center">
            <a href="tel:+33767751898" className="inline-flex items-center gap-2 rounded-full bg-white text-black px-6 py-3 text-sm font-semibold hover:bg-white/90 transition-colors"><Phone className="h-4 w-4" />07 67 75 18 98</a>
            <a href="/#contact" className="inline-flex items-center gap-2 rounded-full border border-white/25 text-white px-6 py-3 text-sm font-semibold hover:border-white/50 transition-colors">Formulaire de contact<ArrowRight className="h-4 w-4" /></a>
          </div>
        </div>
      </main>
      <footer className="border-t border-black/[0.06] px-6 py-8 text-center">
        <p className="text-xs text-black/30">© 2026 SPM Taxi — Conventionné CPAM · Vienne (38) · <Link href="/" className="underline underline-offset-2">Retour au site</Link></p>
      </footer>
    </div>
  );
}
