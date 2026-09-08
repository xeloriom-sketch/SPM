import type { Metadata } from "next";
import Link from "next/link";
import { ArrowLeft, Phone, MapPin, CheckCircle, ArrowRight } from "lucide-react";

export const metadata: Metadata = {
  title: "Taxi Villars-les-Dombes — CPAM · Ain 01 | SPM Taxi",
  description:
    "Taxi à Villars-les-Dombes (01330 Ain) : conventionné CPAM, transfert aéroport Lyon Saint-Exupéry, transport médical remboursé. Volkswagen Tiguan 7 places. 7j/7 24h/24. ☎ 07 67 75 18 98.",
  keywords: [
    "taxi Villars-les-Dombes", "taxi Villars les Dombes", "taxi 01330",
    "taxi conventionné Villars-les-Dombes", "taxi CPAM Villars-les-Dombes",
    "taxi Villars-les-Dombes aéroport Lyon", "taxi Villars-les-Dombes Lyon",
    "taxi médical Villars-les-Dombes", "transport médical Villars les Dombes",
    "taxi Villars Dombes Montluel", "taxi Villars Dombes Bourg",
    "chauffeur taxi Villars-les-Dombes", "taxi Ain parc ornithologique",
  ],
  alternates: { canonical: "https://taxispm.fr/taxi-villars-les-dombes/" },
  robots: { index: true, follow: true },
  openGraph: {
    title: "Taxi Villars-les-Dombes — CPAM | SPM Taxi",
    description: "Taxi conventionné CPAM à Villars-les-Dombes (01330). Aéroport Lyon 20 min, transport médical remboursé. ☎ 07 67 75 18 98.",
    url: "https://taxispm.fr/taxi-villars-les-dombes/",
    type: "website", locale: "fr_FR",
    images: [{ url: "/image/tiguan-front-quarter.webp", alt: "Taxi Villars-les-Dombes — SPM Taxi Ain 01" }],
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": ["LocalBusiness", "TaxiService"],
      "@id": "https://taxispm.fr/#business",
      name: "SPM Taxi — Villars-les-Dombes",
      telephone: "+33767751898",
      url: "https://taxispm.fr/taxi-villars-les-dombes/",
      description: "SPM Taxi dessert Villars-les-Dombes et la Dombes. À 20 minutes de l'aéroport Lyon Saint-Exupéry. Taxi conventionné CPAM — transport médical remboursé. 7j/7 24h/24.",
      address: { "@type": "PostalAddress", streetAddress: "951 route des hauts fourneaux", addressLocality: "Villebois", postalCode: "01150", addressRegion: "Auvergne-Rhône-Alpes", addressCountry: "FR" },
      areaServed: [
        { "@type": "City", name: "Villars-les-Dombes", containedInPlace: { "@type": "AdministrativeArea", name: "Ain" } },
        { "@type": "City", name: "Montluel" }, { "@type": "City", name: "Lyon" },
        { "@type": "Airport", name: "Aéroport Lyon Saint-Exupéry", iataCode: "LYS" },
      ],
      aggregateRating: { "@type": "AggregateRating", ratingValue: 4.6, reviewCount: 12, bestRating: 5, worstRating: 1 },
      openingHoursSpecification: [{ "@type": "OpeningHoursSpecification", dayOfWeek: ["Monday","Tuesday","Wednesday","Thursday","Friday","Saturday","Sunday"], opens: "00:00", closes: "23:59" }],
    },
    {
      "@type": "FAQPage",
      mainEntity: [
        { "@type": "Question", name: "Y a-t-il un taxi conventionné CPAM à Villars-les-Dombes ?", acceptedAnswer: { "@type": "Answer", text: "Oui. SPM Taxi est agréé CPAM et intervient à Villars-les-Dombes pour les transports médicaux sur prescription. Zéro avance de frais — tiers payant. ☎ 07 67 75 18 98." } },
        { "@type": "Question", name: "Combien coûte un taxi de Villars-les-Dombes à l'aéroport Lyon ?", acceptedAnswer: { "@type": "Answer", text: "Depuis Villars-les-Dombes, l'aéroport Lyon Saint-Exupéry est à partir de 40 €, trajet de seulement 20 minutes. Tarif fixe garanti avec suivi des vols." } },
        { "@type": "Question", name: "SPM Taxi transporte-t-il de Villars-les-Dombes à Lyon ?", acceptedAnswer: { "@type": "Answer", text: "Oui. Villars-les-Dombes est à 30 minutes de Lyon Centre. SPM Taxi effectue toutes les courses vers Lyon : Part-Dieu, Perrache, hôpitaux, médecins spécialistes." } },
        { "@type": "Question", name: "Comment réserver un taxi à Villars-les-Dombes ?", acceptedAnswer: { "@type": "Answer", text: "Appelez le 07 67 75 18 98 (7j/7, 24h/24) ou remplissez le formulaire en ligne sur taxispm.fr. Réponse garantie sous 2h." } },
      ],
    },
    { "@type": "BreadcrumbList", itemListElement: [{ "@type": "ListItem", position: 1, name: "Accueil", item: "https://taxispm.fr" }, { "@type": "ListItem", position: 2, name: "Taxi Villars-les-Dombes", item: "https://taxispm.fr/taxi-villars-les-dombes/" }] },
  ],
};

const destinations = [
  { to: "Aéroport Lyon Saint-Exupéry", time: "~20 min", price: "à partir de 40 €" },
  { to: "Lyon Centre", time: "~30 min", price: "à partir de 45 €" },
  { to: "Montluel", time: "~15 min", price: "à partir de 20 €" },
  { to: "Bourg-en-Bresse", time: "~35 min", price: "à partir de 45 €" },
  { to: "Ambérieu-en-Bugey", time: "~40 min", price: "à partir de 50 €" },
  { to: "Villebois", time: "~55 min", price: "à partir de 65 €" },
];

export default function TaxiVillarsDombesPage() {
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
          <span className="text-[10px] font-bold tracking-[0.3em] uppercase text-black/40 mb-4 block">Taxi · Villars-les-Dombes (01330 — Ain)</span>
          <h1 className="text-4xl sm:text-5xl font-semibold tracking-tight text-black leading-tight mb-6">
            Taxi à<br /><span className="text-black/30">Villars-les-Dombes</span>
          </h1>
          <p className="text-base text-[#555] leading-relaxed max-w-2xl mb-4">
            SPM Taxi dessert Villars-les-Dombes et toute la Dombes. Idéalement situé à seulement
            20 minutes de l'aéroport Lyon Saint-Exupéry, SPM Taxi est le partenaire idéal
            pour vos transferts aéroport depuis la Dombes.
          </p>
          <p className="text-base text-[#555] leading-relaxed max-w-2xl mb-8">
            Taxi conventionné CPAM — transport médical remboursé sur prescription, sans avance de frais.
            Volkswagen Tiguan Allspace 7 places, climatisation, confort premium. Disponible 7j/7, 24h/24.
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
          <h2 className="text-2xl font-semibold tracking-tight text-black mb-4">Villars-les-Dombes → Aéroport Lyon — 20 minutes</h2>
          <p className="text-sm text-[#555] leading-relaxed mb-4">
            Villars-les-Dombes est l'une des communes de l'Ain les plus proches de l'aéroport Lyon Saint-Exupéry.
            SPM Taxi assure vos transferts depuis et vers l'aéroport avec :
          </p>
          <ul className="text-sm text-[#555] space-y-2 mb-6">
            <li className="flex items-start gap-2"><CheckCircle className="h-4 w-4 text-black shrink-0 mt-0.5" />Prise en charge à domicile à Villars-les-Dombes</li>
            <li className="flex items-start gap-2"><CheckCircle className="h-4 w-4 text-black shrink-0 mt-0.5" />Suivi des vols en temps réel — attente offerte en cas de retard</li>
            <li className="flex items-start gap-2"><CheckCircle className="h-4 w-4 text-black shrink-0 mt-0.5" />Tarif fixe garanti — aucun supplément nuit/week-end</li>
            <li className="flex items-start gap-2"><CheckCircle className="h-4 w-4 text-black shrink-0 mt-0.5" />7j/7, 24h/24 — y compris les vols du petit matin</li>
          </ul>
          <p className="text-sm text-[#555] leading-relaxed">
            Villars-les-Dombes → Aéroport Lyon Saint-Exupéry : à partir de 40 € seulement.
          </p>
        </section>

        <section className="mb-16">
          <h2 className="text-2xl font-semibold tracking-tight text-black mb-3">Tarifs taxi depuis Villars-les-Dombes</h2>
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
              { q: "Y a-t-il un taxi CPAM à Villars-les-Dombes ?", a: "Oui. SPM Taxi est conventionné CPAM et intervient à Villars-les-Dombes pour les transports médicaux sur prescription médicale. Tiers payant — zéro avance de frais." },
              { q: "Combien coûte le taxi Villars-les-Dombes → aéroport Lyon ?", a: "Depuis Villars-les-Dombes, l'aéroport Lyon Saint-Exupéry est à partir de 40 € seulement (environ 20 minutes). C'est l'un des transferts les plus courts de toute la Dombes." },
              { q: "SPM Taxi fait-il Villars-les-Dombes → Bourg-en-Bresse ?", a: "Oui. Bourg-en-Bresse depuis Villars-les-Dombes est à environ 35 minutes, à partir de 45 €. SPM Taxi dessert la préfecture de l'Ain pour tous vos besoins." },
              { q: "Comment réserver un taxi à Villars-les-Dombes ?", a: "Appelez le 07 67 75 18 98 (7j/7, 24h/24) ou remplissez le formulaire en ligne. Pour les vols du matin, réservez la veille pour garantir la disponibilité." },
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
              { href: "/transfert-aeroport-lyon", label: "Aéroport Lyon Saint-Exupéry", desc: "20 min depuis Villars — à partir de 40 €" },
              { href: "/taxi-montluel", label: "Taxi Montluel", desc: "Commune voisine de la Dombes" },
              { href: "/taxi-conventionne-cpam", label: "Transport CPAM remboursé", desc: "Zéro avance de frais" },
              { href: "/taxi-amberieu-en-bugey", label: "Taxi Ambérieu-en-Bugey", desc: "Ain — 40 min de Villars" },
            ].map(({ href, label, desc }) => (
              <Link key={href} href={href} className="flex items-center justify-between gap-4 bg-white rounded-2xl p-5 border border-black/[0.06] hover:border-black/15 transition-colors group">
                <div><p className="text-sm font-semibold text-black mb-1">{label}</p><p className="text-xs text-[#555]">{desc}</p></div>
                <ArrowRight className="h-4 w-4 text-black/30 shrink-0 group-hover:translate-x-0.5 transition-transform" />
              </Link>
            ))}
          </div>
        </section>

        <div className="bg-black text-white rounded-3xl p-10 text-center">
          <h2 className="text-2xl font-semibold mb-3">Taxi Villars-les-Dombes — Réservez</h2>
          <p className="text-white/50 text-sm mb-8">Aéroport Lyon 20 min · CPAM · 7j/7 24h/24</p>
          <div className="flex flex-wrap gap-3 justify-center">
            <a href="tel:+33767751898" className="inline-flex items-center gap-2 rounded-full bg-white text-black px-6 py-3 text-sm font-semibold hover:bg-white/90 transition-colors"><Phone className="h-4 w-4" />07 67 75 18 98</a>
            <a href="/#contact" className="inline-flex items-center gap-2 rounded-full border border-white/25 text-white px-6 py-3 text-sm font-semibold hover:border-white/50 transition-colors">Formulaire de contact<ArrowRight className="h-4 w-4" /></a>
          </div>
        </div>
      </main>
      <footer className="border-t border-black/[0.06] px-6 py-8 text-center">
        <p className="text-xs text-black/30">© 2026 SPM Taxi — Conventionné CPAM · Villars-les-Dombes (01) · <Link href="/" className="underline underline-offset-2">Retour au site</Link></p>
      </footer>
    </div>
  );
}
