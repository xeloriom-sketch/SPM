import type { Metadata } from "next";
import Link from "next/link";
import { ArrowLeft, Phone, MapPin, CheckCircle, ArrowRight } from "lucide-react";

export const metadata: Metadata = {
  title: "Taxi Miribel — Conventionné CPAM · Ain 01 | SPM Taxi",
  description:
    "Taxi à Miribel (01700 Ain) : conventionné CPAM, transfert aéroport Lyon Saint-Exupéry, transport médical remboursé. Volkswagen Tiguan 7 places. 7j/7 24h/24. ☎ 07 67 75 18 98.",
  keywords: [
    "taxi Miribel", "taxi Miribel Ain", "taxi Miribel 01700",
    "taxi conventionné Miribel", "taxi CPAM Miribel",
    "taxi Miribel aéroport Lyon", "taxi Miribel Lyon",
    "taxi médical Miribel", "VTC Miribel",
    "taxi Miribel Saint-Maurice-de-Beynost", "taxi Miribel Montluel",
    "taxi Miribel Bron", "taxi Miribel tiers payant",
    "chauffeur taxi Miribel", "taxi Miribel Villebois",
  ],
  alternates: { canonical: "https://taxispm.fr/taxi-miribel/" },
  robots: { index: true, follow: true },
  openGraph: {
    title: "Taxi Miribel — Conventionné CPAM | SPM Taxi · 7j/7",
    description: "Taxi conventionné CPAM à Miribel (01700). Transfert aéroport Lyon, transport médical remboursé. Volkswagen Tiguan 7 places. ☎ 07 67 75 18 98.",
    url: "https://taxispm.fr/taxi-miribel/",
    type: "website", locale: "fr_FR",
    images: [{ url: "/image/tiguan-front-quarter.webp", alt: "Taxi Miribel — SPM Taxi Ain 01" }],
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": ["LocalBusiness", "TaxiService"],
      "@id": "https://taxispm.fr/#business",
      name: "SPM Taxi — Miribel",
      telephone: "+33767751898",
      url: "https://taxispm.fr/taxi-miribel/",
      description: "SPM Taxi dessert Miribel et la porte nord de Lyon depuis l'Ain. Taxi conventionné CPAM, transferts aéroport Lyon Saint-Exupéry, transport médical sur prescription. Volkswagen Tiguan 7 places, 7j/7 24h/24.",
      address: { "@type": "PostalAddress", streetAddress: "951 route des hauts fourneaux", addressLocality: "Villebois", postalCode: "01150", addressRegion: "Auvergne-Rhône-Alpes", addressCountry: "FR" },
      areaServed: [
        { "@type": "City", name: "Miribel", containedInPlace: { "@type": "AdministrativeArea", name: "Ain" } },
        { "@type": "City", name: "Lyon" }, { "@type": "City", name: "Montluel" },
        { "@type": "Airport", name: "Aéroport Lyon Saint-Exupéry", iataCode: "LYS" },
      ],
      aggregateRating: { "@type": "AggregateRating", ratingValue: 4.6, reviewCount: 12, bestRating: 5, worstRating: 1 },
      openingHoursSpecification: [{ "@type": "OpeningHoursSpecification", dayOfWeek: ["Monday","Tuesday","Wednesday","Thursday","Friday","Saturday","Sunday"], opens: "00:00", closes: "23:59" }],
    },
    {
      "@type": "FAQPage",
      mainEntity: [
        { "@type": "Question", name: "Y a-t-il un taxi conventionné CPAM à Miribel ?", acceptedAnswer: { "@type": "Answer", text: "Oui. SPM Taxi est agréé CPAM et intervient à Miribel pour les transports médicaux sur prescription. Zéro avance de frais — tiers payant avec l'Assurance Maladie. ☎ 07 67 75 18 98." } },
        { "@type": "Question", name: "Combien coûte un taxi de Miribel à l'aéroport Lyon ?", acceptedAnswer: { "@type": "Answer", text: "Depuis Miribel, le transfert vers l'aéroport Lyon Saint-Exupéry est à partir de 45 €. Tarif fixe garanti, suivi des vols en temps réel. Devis gratuit au 07 67 75 18 98." } },
        { "@type": "Question", name: "SPM Taxi peut-il aller de Miribel à Lyon Centre ?", acceptedAnswer: { "@type": "Answer", text: "Oui. Depuis Miribel, Lyon Centre est à environ 20 minutes. SPM Taxi effectue toutes les courses vers Part-Dieu, Perrache, les hôpitaux lyonnais et l'aéroport." } },
        { "@type": "Question", name: "Comment réserver un taxi à Miribel ?", acceptedAnswer: { "@type": "Answer", text: "Appelez le 07 67 75 18 98 (7j/7, 24h/24) ou remplissez le formulaire sur taxispm.fr. Réponse garantie sous 2h." } },
      ],
    },
    { "@type": "BreadcrumbList", itemListElement: [{ "@type": "ListItem", position: 1, name: "Accueil", item: "https://taxispm.fr" }, { "@type": "ListItem", position: 2, name: "Taxi Miribel", item: "https://taxispm.fr/taxi-miribel/" }] },
  ],
};

const destinations = [
  { to: "Lyon Centre", time: "~20 min", price: "à partir de 30 €" },
  { to: "Aéroport Lyon Saint-Exupéry", time: "~30 min", price: "à partir de 45 €" },
  { to: "Villebois", time: "~45 min", price: "à partir de 50 €" },
  { to: "Montluel", time: "~15 min", price: "à partir de 20 €" },
  { to: "Bron (Hôpital)", time: "~25 min", price: "à partir de 35 €" },
  { to: "Ambérieu-en-Bugey", time: "~40 min", price: "à partir de 50 €" },
];

export default function TaxiMiribelPage() {
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
          <span className="text-[10px] font-bold tracking-[0.3em] uppercase text-black/40 mb-4 block">Taxi · Miribel (01700 — Ain)</span>
          <h1 className="text-4xl sm:text-5xl font-semibold tracking-tight text-black leading-tight mb-6">
            Taxi à<br /><span className="text-black/30">Miribel</span>
          </h1>
          <p className="text-base text-[#555] leading-relaxed max-w-2xl mb-4">
            SPM Taxi dessert Miribel et toute la porte nord de Lyon depuis l'Ain.
            Taxi conventionné CPAM — transport médical remboursé sur prescription, transferts
            aéroport Lyon Saint-Exupéry, gares lyonnaises et déplacements professionnels.
          </p>
          <p className="text-base text-[#555] leading-relaxed max-w-2xl mb-8">
            À 20 minutes de Lyon Centre, Miribel est idéalement placée entre l'Ain et la métropole lyonnaise.
            SPM Taxi vous emmène depuis votre domicile jusqu'à l'aéroport, l'hôpital ou votre rendez-vous
            professionnel — 7j/7, 24h/24, avec le Volkswagen Tiguan 7 places.
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
          <h2 className="text-2xl font-semibold tracking-tight text-black mb-4">Transport médical CPAM à Miribel</h2>
          <p className="text-sm text-[#555] leading-relaxed mb-4">SPM Taxi conventionné CPAM intervient à Miribel pour tous vos transports médicaux sur prescription. Tiers payant intégral — vous ne payez rien.</p>
          <ul className="text-sm text-[#555] space-y-2 mb-4">
            <li className="flex items-start gap-2"><CheckCircle className="h-4 w-4 text-black shrink-0 mt-0.5" />Miribel → Hôpital Édouard Herriot Lyon</li>
            <li className="flex items-start gap-2"><CheckCircle className="h-4 w-4 text-black shrink-0 mt-0.5" />Miribel → CHU Lyon (Croix-Rousse, Lyon-Sud, Bron)</li>
            <li className="flex items-start gap-2"><CheckCircle className="h-4 w-4 text-black shrink-0 mt-0.5" />Miribel → Centres de dialyse et chimiothérapie Lyon</li>
            <li className="flex items-start gap-2"><CheckCircle className="h-4 w-4 text-black shrink-0 mt-0.5" />Miribel → Cliniques Lyon et Ain</li>
          </ul>
        </section>

        <section className="mb-16">
          <h2 className="text-2xl font-semibold tracking-tight text-black mb-3">Tarifs taxi depuis Miribel</h2>
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
              { q: "Y a-t-il un taxi conventionné CPAM à Miribel ?", a: "Oui. SPM Taxi est agréé CPAM et intervient à Miribel pour tous les transports médicaux sur prescription médicale. Zéro avance de frais — tiers payant avec l'Assurance Maladie." },
              { q: "Combien coûte un taxi Miribel → aéroport Lyon ?", a: "Depuis Miribel, l'aéroport Lyon Saint-Exupéry est à partir de 45 €, trajet d'environ 30 minutes. Tarif fixe garanti avec suivi des vols en temps réel." },
              { q: "SPM Taxi fait-il Miribel → Lyon Centre ?", a: "Oui, Lyon Centre depuis Miribel est à partir de 30 € (environ 20 minutes). Toutes destinations Lyon : Part-Dieu, Perrache, La Confluence, hôpitaux." },
              { q: "Comment réserver un taxi à Miribel ?", a: "Appelez le 07 67 75 18 98 (7j/7, 24h/24) ou utilisez le formulaire en ligne sur taxispm.fr. Réponse garantie sous 2h." },
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
              { href: "/taxi-montluel", label: "Taxi Montluel", desc: "Commune voisine de Miribel" },
              { href: "/taxi-conventionne-cpam", label: "Transport CPAM remboursé", desc: "Zéro avance de frais" },
              { href: "/transfert-aeroport-lyon", label: "Aéroport Lyon", desc: "Depuis Miribel à partir de 45 €" },
              { href: "/taxi-lyon", label: "Taxi Lyon", desc: "Toutes destinations lyonnaises" },
            ].map(({ href, label, desc }) => (
              <Link key={href} href={href} className="flex items-center justify-between gap-4 bg-white rounded-2xl p-5 border border-black/[0.06] hover:border-black/15 transition-colors group">
                <div><p className="text-sm font-semibold text-black mb-1">{label}</p><p className="text-xs text-[#555]">{desc}</p></div>
                <ArrowRight className="h-4 w-4 text-black/30 shrink-0 group-hover:translate-x-0.5 transition-transform" />
              </Link>
            ))}
          </div>
        </section>

        <div className="bg-black text-white rounded-3xl p-10 text-center">
          <h2 className="text-2xl font-semibold mb-3">Taxi à Miribel — Réservez</h2>
          <p className="text-white/50 text-sm mb-8">Conventionné CPAM · 7j/7 24h/24 · Devis gratuit sous 2h</p>
          <div className="flex flex-wrap gap-3 justify-center">
            <a href="tel:+33767751898" className="inline-flex items-center gap-2 rounded-full bg-white text-black px-6 py-3 text-sm font-semibold hover:bg-white/90 transition-colors"><Phone className="h-4 w-4" />07 67 75 18 98</a>
            <a href="/#contact" className="inline-flex items-center gap-2 rounded-full border border-white/25 text-white px-6 py-3 text-sm font-semibold hover:border-white/50 transition-colors">Formulaire de contact<ArrowRight className="h-4 w-4" /></a>
          </div>
        </div>
      </main>
      <footer className="border-t border-black/[0.06] px-6 py-8 text-center">
        <p className="text-xs text-black/30">© 2026 SPM Taxi — Conventionné CPAM · Miribel (01) · <Link href="/" className="underline underline-offset-2">Retour au site</Link></p>
      </footer>
    </div>
  );
}
