import type { Metadata } from "next";
import Link from "next/link";
import { ArrowLeft, Phone, MapPin, CheckCircle, ArrowRight } from "lucide-react";

export const metadata: Metadata = {
  title: "Taxi Oyonnax — Conventionné CPAM · Ain 01 | SPM Taxi",
  description:
    "Taxi à Oyonnax (01100 Ain) : conventionné CPAM, transport médical remboursé, transfert aéroport Lyon Saint-Exupéry. Volkswagen Tiguan 7 places. 7j/7 24h/24. ☎ 07 67 75 18 98.",
  keywords: [
    "taxi Oyonnax", "taxi Oyonnax Ain", "taxi Oyonnax 01100",
    "taxi conventionné Oyonnax", "taxi CPAM Oyonnax",
    "taxi médical Oyonnax", "taxi Oyonnax Lyon",
    "taxi Oyonnax aéroport Lyon", "transport médical Oyonnax",
    "taxi Oyonnax hôpital", "CH Oyonnax taxi",
    "taxi Oyonnax tiers payant", "chauffeur taxi Oyonnax",
    "taxi Oyonnax dialyse chimiothérapie", "taxi Oyonnax Bourg-en-Bresse",
  ],
  alternates: { canonical: "https://taxispm.fr/taxi-oyonnax/" },
  robots: { index: true, follow: true },
  openGraph: {
    title: "Taxi Oyonnax — Conventionné CPAM | SPM Taxi",
    description: "Taxi conventionné CPAM à Oyonnax (01100). Transport médical remboursé, aéroport Lyon Saint-Exupéry. ☎ 07 67 75 18 98.",
    url: "https://taxispm.fr/taxi-oyonnax/",
    type: "website", locale: "fr_FR",
    images: [{ url: "/image/tiguan-front-quarter.webp", alt: "Taxi Oyonnax — SPM Taxi Ain 01" }],
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": ["LocalBusiness", "TaxiService"],
      "@id": "https://taxispm.fr/#business",
      name: "SPM Taxi — Oyonnax",
      telephone: "+33767751898",
      url: "https://taxispm.fr/taxi-oyonnax/",
      description: "SPM Taxi dessert Oyonnax (3e ville de l'Ain) et le Haut-Bugey. Taxi conventionné CPAM — transport médical sur prescription, transferts aéroport Lyon Saint-Exupéry. 7j/7 24h/24.",
      address: { "@type": "PostalAddress", streetAddress: "951 route des hauts fourneaux", addressLocality: "Villebois", postalCode: "01150", addressRegion: "Auvergne-Rhône-Alpes", addressCountry: "FR" },
      areaServed: [
        { "@type": "City", name: "Oyonnax", containedInPlace: { "@type": "AdministrativeArea", name: "Ain" } },
        { "@type": "City", name: "Bourg-en-Bresse" }, { "@type": "City", name: "Lyon" },
        { "@type": "Airport", name: "Aéroport Lyon Saint-Exupéry", iataCode: "LYS" },
      ],
      aggregateRating: { "@type": "AggregateRating", ratingValue: 4.6, reviewCount: 12, bestRating: 5, worstRating: 1 },
      openingHoursSpecification: [{ "@type": "OpeningHoursSpecification", dayOfWeek: ["Monday","Tuesday","Wednesday","Thursday","Friday","Saturday","Sunday"], opens: "00:00", closes: "23:59" }],
    },
    {
      "@type": "FAQPage",
      mainEntity: [
        { "@type": "Question", name: "Y a-t-il un taxi conventionné CPAM à Oyonnax ?", acceptedAnswer: { "@type": "Answer", text: "Oui. SPM Taxi est agréé CPAM et intervient à Oyonnax pour les transports médicaux sur prescription. Zéro avance de frais — tiers payant avec l'Assurance Maladie. ☎ 07 67 75 18 98." } },
        { "@type": "Question", name: "Combien coûte un taxi d'Oyonnax à Lyon ?", acceptedAnswer: { "@type": "Answer", text: "Depuis Oyonnax, Lyon Centre est à partir de 85 € (environ 1h10). L'aéroport Lyon Saint-Exupéry est à partir de 90 €. Tarif fixe garanti. Devis gratuit au 07 67 75 18 98." } },
        { "@type": "Question", name: "SPM Taxi fait-il Oyonnax → Bourg-en-Bresse ?", acceptedAnswer: { "@type": "Answer", text: "Oui. Oyonnax est à environ 45 minutes de Bourg-en-Bresse. SPM Taxi effectue régulièrement ce trajet pour les déplacements médicaux, professionnels et personnels." } },
        { "@type": "Question", name: "Comment réserver un taxi à Oyonnax ?", acceptedAnswer: { "@type": "Answer", text: "Appelez le 07 67 75 18 98 (7j/7, 24h/24) ou remplissez le formulaire en ligne sur taxispm.fr. Réponse garantie sous 2h." } },
      ],
    },
    { "@type": "BreadcrumbList", itemListElement: [{ "@type": "ListItem", position: 1, name: "Accueil", item: "https://taxispm.fr" }, { "@type": "ListItem", position: 2, name: "Taxi Oyonnax", item: "https://taxispm.fr/taxi-oyonnax/" }] },
  ],
};

const destinations = [
  { to: "Bourg-en-Bresse", time: "~45 min", price: "à partir de 55 €" },
  { to: "Lyon Centre", time: "~1h10", price: "à partir de 85 €" },
  { to: "Aéroport Lyon Saint-Exupéry", time: "~1h15", price: "à partir de 90 €" },
  { to: "Ambérieu-en-Bugey", time: "~55 min", price: "à partir de 65 €" },
  { to: "Genève Aéroport (GVA)", time: "~1h20", price: "à partir de 100 €" },
  { to: "Villebois", time: "~1h", price: "à partir de 75 €" },
];

export default function TaxiOyonnaxPage() {
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
          <span className="text-[10px] font-bold tracking-[0.3em] uppercase text-black/40 mb-4 block">Taxi · Oyonnax (01100 — Ain)</span>
          <h1 className="text-4xl sm:text-5xl font-semibold tracking-tight text-black leading-tight mb-6">
            Taxi à<br /><span className="text-black/30">Oyonnax</span>
          </h1>
          <p className="text-base text-[#555] leading-relaxed max-w-2xl mb-4">
            SPM Taxi dessert Oyonnax, 3e ville de l'Ain, et tout le Haut-Bugey.
            Taxi conventionné CPAM — transport médical remboursé sur prescription,
            transferts aéroport Lyon Saint-Exupéry et Genève-Cointrin.
          </p>
          <p className="text-base text-[#555] leading-relaxed max-w-2xl mb-8">
            SPM Taxi intervient depuis Oyonnax pour tous vos déplacements : consultations
            médicales, dialyse, chimiothérapie, voyages d'affaires et transferts aéroportuaires.
            Volkswagen Tiguan Allspace 7 places, disponible 7j/7, 24h/24.
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
          <h2 className="text-2xl font-semibold tracking-tight text-black mb-4">Transport médical CPAM à Oyonnax</h2>
          <p className="text-sm text-[#555] leading-relaxed mb-4">SPM Taxi conventionné CPAM intervient à Oyonnax et dans tout le Haut-Bugey pour vos transports médicaux. Zéro avance de frais — tiers payant intégral sur prescription.</p>
          <ul className="text-sm text-[#555] space-y-2 mb-6">
            <li className="flex items-start gap-2"><CheckCircle className="h-4 w-4 text-black shrink-0 mt-0.5" />Oyonnax → Centre Hospitalier d'Oyonnax</li>
            <li className="flex items-start gap-2"><CheckCircle className="h-4 w-4 text-black shrink-0 mt-0.5" />Oyonnax → CHU Lyon (Édouard Herriot, Croix-Rousse, Lyon-Sud)</li>
            <li className="flex items-start gap-2"><CheckCircle className="h-4 w-4 text-black shrink-0 mt-0.5" />Oyonnax → Clinique Convert Bourg-en-Bresse</li>
            <li className="flex items-start gap-2"><CheckCircle className="h-4 w-4 text-black shrink-0 mt-0.5" />Oyonnax → Centres de dialyse et chimiothérapie</li>
            <li className="flex items-start gap-2"><CheckCircle className="h-4 w-4 text-black shrink-0 mt-0.5" />Oyonnax → Hôpitaux Genève (Suisse) sur prescription</li>
          </ul>
        </section>

        <section className="mb-16">
          <h2 className="text-2xl font-semibold tracking-tight text-black mb-3">Tarifs taxi depuis Oyonnax</h2>
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
          <h2 className="text-2xl font-semibold tracking-tight text-black mb-8">Questions fréquentes — Taxi Oyonnax</h2>
          <div className="space-y-4">
            {[
              { q: "Y a-t-il un taxi conventionné CPAM à Oyonnax ?", a: "Oui. SPM Taxi est agréé CPAM et intervient à Oyonnax pour tous les transports médicaux sur prescription. Zéro avance de frais — tiers payant avec l'Assurance Maladie." },
              { q: "Combien coûte un taxi Oyonnax → Lyon ?", a: "Depuis Oyonnax, Lyon Centre est à partir de 85 € (environ 1h10). L'aéroport Lyon Saint-Exupéry est à partir de 90 €. Tarif fixe garanti. Devis gratuit au 07 67 75 18 98." },
              { q: "SPM Taxi dessert-il Oyonnax → Genève ?", a: "Oui. Depuis Oyonnax, Genève Aéroport est à environ 1h20, à partir de 100 €. SPM Taxi effectue régulièrement les transferts vers la Suisse pour les frontaliers et voyageurs." },
              { q: "Comment réserver un taxi à Oyonnax ?", a: "Appelez le 07 67 75 18 98 (7j/7, 24h/24) ou remplissez le formulaire sur taxispm.fr. Réponse garantie sous 2h. Pour les transports médicaux CPAM, ayez votre prescription à portée." },
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
              { href: "/taxi-amberieu-en-bugey", label: "Taxi Ambérieu-en-Bugey", desc: "Autre ville du Bugey — 55 min" },
              { href: "/taxi-conventionne-cpam", label: "Transport CPAM remboursé", desc: "Zéro avance de frais" },
              { href: "/transfert-aeroport-lyon", label: "Aéroport Lyon Saint-Exupéry", desc: "Depuis Oyonnax à partir de 90 €" },
              { href: "/taxi-gex", label: "Taxi Gex / Genève", desc: "Pays de Gex et aéroport GVA" },
            ].map(({ href, label, desc }) => (
              <Link key={href} href={href} className="flex items-center justify-between gap-4 bg-white rounded-2xl p-5 border border-black/[0.06] hover:border-black/15 transition-colors group">
                <div><p className="text-sm font-semibold text-black mb-1">{label}</p><p className="text-xs text-[#555]">{desc}</p></div>
                <ArrowRight className="h-4 w-4 text-black/30 shrink-0 group-hover:translate-x-0.5 transition-transform" />
              </Link>
            ))}
          </div>
        </section>

        <div className="bg-black text-white rounded-3xl p-10 text-center">
          <h2 className="text-2xl font-semibold mb-3">Taxi à Oyonnax — Réservez</h2>
          <p className="text-white/50 text-sm mb-8">Conventionné CPAM · 7j/7 24h/24 · Devis gratuit sous 2h</p>
          <div className="flex flex-wrap gap-3 justify-center">
            <a href="tel:+33767751898" className="inline-flex items-center gap-2 rounded-full bg-white text-black px-6 py-3 text-sm font-semibold hover:bg-white/90 transition-colors"><Phone className="h-4 w-4" />07 67 75 18 98</a>
            <a href="/#contact" className="inline-flex items-center gap-2 rounded-full border border-white/25 text-white px-6 py-3 text-sm font-semibold hover:border-white/50 transition-colors">Formulaire de contact<ArrowRight className="h-4 w-4" /></a>
          </div>
        </div>
      </main>
      <footer className="border-t border-black/[0.06] px-6 py-8 text-center">
        <p className="text-xs text-black/30">© 2026 SPM Taxi — Conventionné CPAM · Oyonnax (01) · <Link href="/" className="underline underline-offset-2">Retour au site</Link></p>
      </footer>
    </div>
  );
}
