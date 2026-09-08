import type { Metadata } from "next";
import Link from "next/link";
import { ArrowLeft, Phone, MapPin, CheckCircle, ArrowRight } from "lucide-react";

export const metadata: Metadata = {
  title: "Taxi Pérouges — Conventionné CPAM · Ain 01 | SPM Taxi",
  description:
    "Taxi à Pérouges (01800 Ain) : conventionné CPAM, transport médical remboursé, transfert aéroport Lyon Saint-Exupéry. Volkswagen Tiguan 7 places. 7j/7 24h/24. ☎ 07 67 75 18 98.",
  keywords: [
    "taxi Pérouges", "taxi Perouges Ain", "taxi Pérouges 01800",
    "taxi conventionné Pérouges", "taxi CPAM Pérouges",
    "taxi Pérouges Lyon", "taxi Pérouges aéroport Lyon",
    "taxi médical Pérouges", "transport médical Pérouges",
    "taxi Pérouges Meximieux", "taxi Pérouges Montluel",
    "chauffeur taxi Pérouges", "taxi cité médiévale Pérouges",
  ],
  alternates: { canonical: "https://taxispm.fr/taxi-perouges/" },
  robots: { index: true, follow: true },
  openGraph: {
    title: "Taxi Pérouges — Conventionné CPAM | SPM Taxi",
    description: "Taxi conventionné CPAM à Pérouges (01800). Aéroport Lyon, transport médical remboursé, 7j/7 24h/24. ☎ 07 67 75 18 98.",
    url: "https://taxispm.fr/taxi-perouges/",
    type: "website", locale: "fr_FR",
    images: [{ url: "/image/tiguan-front-quarter.webp", alt: "Taxi Pérouges — SPM Taxi Ain 01" }],
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": ["LocalBusiness", "TaxiService"],
      "@id": "https://taxispm.fr/#business",
      name: "SPM Taxi — Pérouges",
      telephone: "+33767751898",
      url: "https://taxispm.fr/taxi-perouges/",
      description: "SPM Taxi dessert Pérouges, cité médiévale de l'Ain, et ses environs. Taxi conventionné CPAM — transport médical remboursé, transferts aéroport Lyon Saint-Exupéry. 7j/7 24h/24.",
      address: { "@type": "PostalAddress", streetAddress: "951 route des hauts fourneaux", addressLocality: "Villebois", postalCode: "01150", addressRegion: "Auvergne-Rhône-Alpes", addressCountry: "FR" },
      areaServed: [
        { "@type": "City", name: "Pérouges", containedInPlace: { "@type": "AdministrativeArea", name: "Ain" } },
        { "@type": "City", name: "Meximieux" }, { "@type": "City", name: "Lyon" },
        { "@type": "Airport", name: "Aéroport Lyon Saint-Exupéry", iataCode: "LYS" },
      ],
      aggregateRating: { "@type": "AggregateRating", ratingValue: 4.6, reviewCount: 12, bestRating: 5, worstRating: 1 },
      openingHoursSpecification: [{ "@type": "OpeningHoursSpecification", dayOfWeek: ["Monday","Tuesday","Wednesday","Thursday","Friday","Saturday","Sunday"], opens: "00:00", closes: "23:59" }],
    },
    {
      "@type": "FAQPage",
      mainEntity: [
        { "@type": "Question", name: "Y a-t-il un taxi conventionné CPAM à Pérouges ?", acceptedAnswer: { "@type": "Answer", text: "Oui. SPM Taxi est agréé CPAM et intervient à Pérouges pour les transports médicaux sur prescription. Zéro avance de frais — tiers payant. ☎ 07 67 75 18 98." } },
        { "@type": "Question", name: "Combien coûte un taxi de Pérouges à l'aéroport Lyon ?", acceptedAnswer: { "@type": "Answer", text: "Depuis Pérouges, l'aéroport Lyon Saint-Exupéry est à partir de 50 € (environ 30 minutes). Tarif fixe garanti, suivi des vols. Devis gratuit au 07 67 75 18 98." } },
        { "@type": "Question", name: "SPM Taxi dessert-il Pérouges → Lyon Centre ?", acceptedAnswer: { "@type": "Answer", text: "Oui. Depuis Pérouges, Lyon Centre est à environ 35 minutes, à partir de 55 €. SPM Taxi dessert Part-Dieu, Perrache, tous les hôpitaux de Lyon." } },
        { "@type": "Question", name: "Comment réserver un taxi à Pérouges ?", acceptedAnswer: { "@type": "Answer", text: "Appelez le 07 67 75 18 98 (7j/7, 24h/24) ou remplissez le formulaire en ligne sur taxispm.fr. Réponse garantie sous 2h." } },
      ],
    },
    { "@type": "BreadcrumbList", itemListElement: [{ "@type": "ListItem", position: 1, name: "Accueil", item: "https://taxispm.fr" }, { "@type": "ListItem", position: 2, name: "Taxi Pérouges", item: "https://taxispm.fr/taxi-perouges/" }] },
  ],
};

const destinations = [
  { to: "Aéroport Lyon Saint-Exupéry", time: "~30 min", price: "à partir de 50 €" },
  { to: "Lyon Centre", time: "~35 min", price: "à partir de 55 €" },
  { to: "Meximieux", time: "~10 min", price: "à partir de 15 €" },
  { to: "Montluel", time: "~20 min", price: "à partir de 25 €" },
  { to: "Ambérieu-en-Bugey", time: "~30 min", price: "à partir de 40 €" },
  { to: "Villebois", time: "~50 min", price: "à partir de 60 €" },
];

export default function TaxiPerougesPage() {
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
          <span className="text-[10px] font-bold tracking-[0.3em] uppercase text-black/40 mb-4 block">Taxi · Pérouges (01800 — Ain)</span>
          <h1 className="text-4xl sm:text-5xl font-semibold tracking-tight text-black leading-tight mb-6">
            Taxi à<br /><span className="text-black/30">Pérouges</span>
          </h1>
          <p className="text-base text-[#555] leading-relaxed max-w-2xl mb-4">
            SPM Taxi dessert Pérouges, cité médiévale classée parmi les Plus Beaux Villages de France,
            et toute la plaine de l'Ain. À 30 minutes de l'aéroport Lyon Saint-Exupéry,
            SPM Taxi est votre partenaire idéal pour les transferts aéroport et les déplacements médicaux.
          </p>
          <p className="text-base text-[#555] leading-relaxed max-w-2xl mb-8">
            Taxi conventionné CPAM — transport médical remboursé sur prescription, sans avance de frais.
            Volkswagen Tiguan 7 places, 7j/7, 24h/24.
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
          <h2 className="text-2xl font-semibold tracking-tight text-black mb-4">Transport médical CPAM à Pérouges</h2>
          <p className="text-sm text-[#555] leading-relaxed mb-4">SPM Taxi conventionné CPAM intervient à Pérouges pour tous vos transports médicaux sur prescription. Zéro avance de frais — tiers payant intégral.</p>
          <ul className="text-sm text-[#555] space-y-2 mb-6">
            <li className="flex items-start gap-2"><CheckCircle className="h-4 w-4 text-black shrink-0 mt-0.5" />Pérouges → CHU Lyon (Édouard Herriot, Croix-Rousse, Bron)</li>
            <li className="flex items-start gap-2"><CheckCircle className="h-4 w-4 text-black shrink-0 mt-0.5" />Pérouges → Clinique Convert, Clinique Saint-Vincent (Bourg)</li>
            <li className="flex items-start gap-2"><CheckCircle className="h-4 w-4 text-black shrink-0 mt-0.5" />Pérouges → Centres de dialyse et chimiothérapie</li>
            <li className="flex items-start gap-2"><CheckCircle className="h-4 w-4 text-black shrink-0 mt-0.5" />Pérouges → Médecins spécialistes Lyon, Bourg-en-Bresse</li>
          </ul>
        </section>

        <section className="mb-16">
          <h2 className="text-2xl font-semibold tracking-tight text-black mb-3">Tarifs taxi depuis Pérouges</h2>
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
          <h2 className="text-2xl font-semibold tracking-tight text-black mb-8">Questions fréquentes — Taxi Pérouges</h2>
          <div className="space-y-4">
            {[
              { q: "Y a-t-il un taxi CPAM à Pérouges ?", a: "Oui. SPM Taxi est conventionné CPAM et intervient à Pérouges pour les transports médicaux sur prescription. Tiers payant — zéro avance de frais avec la Sécurité Sociale." },
              { q: "Combien coûte un taxi de Pérouges à Lyon ?", a: "Depuis Pérouges, Lyon Centre est à partir de 55 € (environ 35 minutes). L'aéroport Lyon Saint-Exupéry est à partir de 50 € (30 minutes). Tarif fixe garanti. ☎ 07 67 75 18 98." },
              { q: "SPM Taxi dessert-il Pérouges → Meximieux ?", a: "Oui. Meximieux est à seulement 10 minutes de Pérouges, à partir de 15 €. SPM Taxi assure toutes les courses locales dans la plaine de l'Ain." },
              { q: "Comment réserver un taxi à Pérouges ?", a: "Appelez le 07 67 75 18 98 (7j/7, 24h/24) ou remplissez le formulaire en ligne sur taxispm.fr. Réponse garantie sous 2h." },
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
              { href: "/taxi-meximieux", label: "Taxi Meximieux", desc: "Commune voisine — 10 min" },
              { href: "/taxi-montluel", label: "Taxi Montluel", desc: "Ain — 20 min de Pérouges" },
              { href: "/transfert-aeroport-lyon", label: "Aéroport Lyon Saint-Exupéry", desc: "Depuis Pérouges à partir de 50 €" },
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
          <h2 className="text-2xl font-semibold mb-3">Taxi à Pérouges — Réservez</h2>
          <p className="text-white/50 text-sm mb-8">Conventionné CPAM · 7j/7 24h/24 · Devis gratuit sous 2h</p>
          <div className="flex flex-wrap gap-3 justify-center">
            <a href="tel:+33767751898" className="inline-flex items-center gap-2 rounded-full bg-white text-black px-6 py-3 text-sm font-semibold hover:bg-white/90 transition-colors"><Phone className="h-4 w-4" />07 67 75 18 98</a>
            <a href="/#contact" className="inline-flex items-center gap-2 rounded-full border border-white/25 text-white px-6 py-3 text-sm font-semibold hover:border-white/50 transition-colors">Formulaire de contact<ArrowRight className="h-4 w-4" /></a>
          </div>
        </div>
      </main>
      <footer className="border-t border-black/[0.06] px-6 py-8 text-center">
        <p className="text-xs text-black/30">© 2026 SPM Taxi — Conventionné CPAM · Pérouges (01) · <Link href="/" className="underline underline-offset-2">Retour au site</Link></p>
      </footer>
    </div>
  );
}
