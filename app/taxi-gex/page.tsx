import type { Metadata } from "next";
import Link from "next/link";
import { ArrowLeft, Phone, MapPin, CheckCircle, ArrowRight } from "lucide-react";

export const metadata: Metadata = {
  title: "Taxi Gex — Pays de Gex · Genève Aéroport | SPM Taxi",
  description:
    "Taxi à Gex (01170 Ain) : transfert Genève aéroport GVA, transport médical CPAM remboursé, aéroport Lyon Saint-Exupéry. Volkswagen Tiguan 7 places. 7j/7 24h/24. ☎ 07 67 75 18 98.",
  keywords: [
    "taxi Gex", "taxi Gex Ain", "taxi Gex 01170",
    "taxi Gex Genève", "taxi Gex aéroport Genève GVA",
    "taxi Pays de Gex", "taxi Gex Lyon",
    "taxi conventionné Gex", "taxi CPAM Gex",
    "taxi Gex Ferney-Voltaire", "taxi Gex frontalier",
    "chauffeur privé Gex Genève", "VTC Gex Genève",
    "taxi Gex aéroport Lyon", "taxi Gex nuit week-end",
  ],
  alternates: { canonical: "https://taxispm.fr/taxi-gex/" },
  robots: { index: true, follow: true },
  openGraph: {
    title: "Taxi Gex — Genève GVA & Lyon LYS | SPM Taxi",
    description: "Taxi depuis Gex (01170) vers Genève Aéroport, Lyon Saint-Exupéry et toute la France. Conventionné CPAM. ☎ 07 67 75 18 98.",
    url: "https://taxispm.fr/taxi-gex/",
    type: "website", locale: "fr_FR",
    images: [{ url: "/image/tiguan-front-quarter.webp", alt: "Taxi Gex — SPM Taxi Pays de Gex" }],
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": ["LocalBusiness", "TaxiService"],
      "@id": "https://taxispm.fr/#business",
      name: "SPM Taxi — Gex / Pays de Gex",
      telephone: "+33767751898",
      url: "https://taxispm.fr/taxi-gex/",
      description: "SPM Taxi dessert le Pays de Gex, Gex, Ferney-Voltaire et toute la zone frontalière franco-suisse. Transferts vers l'aéroport de Genève (GVA), Lyon Saint-Exupéry. Conventionné CPAM.",
      address: { "@type": "PostalAddress", streetAddress: "951 route des hauts fourneaux", addressLocality: "Villebois", postalCode: "01150", addressRegion: "Auvergne-Rhône-Alpes", addressCountry: "FR" },
      areaServed: [
        { "@type": "City", name: "Gex", containedInPlace: { "@type": "AdministrativeArea", name: "Ain" } },
        { "@type": "City", name: "Ferney-Voltaire" }, { "@type": "City", name: "Genève" },
        { "@type": "Airport", name: "Aéroport Genève-Cointrin", iataCode: "GVA" },
        { "@type": "Airport", name: "Aéroport Lyon Saint-Exupéry", iataCode: "LYS" },
      ],
      aggregateRating: { "@type": "AggregateRating", ratingValue: 4.6, reviewCount: 12, bestRating: 5, worstRating: 1 },
      openingHoursSpecification: [{ "@type": "OpeningHoursSpecification", dayOfWeek: ["Monday","Tuesday","Wednesday","Thursday","Friday","Saturday","Sunday"], opens: "00:00", closes: "23:59" }],
    },
    {
      "@type": "FAQPage",
      mainEntity: [
        { "@type": "Question", name: "Combien coûte un taxi de Gex à l'aéroport de Genève ?", acceptedAnswer: { "@type": "Answer", text: "Depuis Gex, le transfert vers l'aéroport de Genève (GVA) est à partir de 55 €. Tarif fixe garanti, suivi des vols en temps réel. SPM Taxi prend en charge les passagers à domicile et les accompagne jusqu'au terminal. ☎ 07 67 75 18 98." } },
        { "@type": "Question", name: "SPM Taxi fait-il les transferts Gex → Lyon Saint-Exupéry ?", acceptedAnswer: { "@type": "Answer", text: "Oui. Depuis Gex, Lyon Saint-Exupéry est à environ 1h20. Tarif à partir de 110 €. Idéal pour les voyageurs préférant LYS pour des vols longue distance ou les connexions Air France/easyJet." } },
        { "@type": "Question", name: "Y a-t-il un taxi conventionné CPAM dans le Pays de Gex ?", acceptedAnswer: { "@type": "Answer", text: "Oui. SPM Taxi est agréé CPAM et intervient dans le Pays de Gex pour les transports médicaux sur prescription. Zéro avance de frais — tiers payant avec l'Assurance Maladie française." } },
        { "@type": "Question", name: "Comment réserver un taxi à Gex ?", acceptedAnswer: { "@type": "Answer", text: "Appelez le 07 67 75 18 98 (7j/7, 24h/24) ou remplissez le formulaire en ligne sur taxispm.fr. Réponse garantie sous 2h. Réservation à l'avance recommandée pour les vols tôt le matin." } },
      ],
    },
    { "@type": "BreadcrumbList", itemListElement: [{ "@type": "ListItem", position: 1, name: "Accueil", item: "https://taxispm.fr" }, { "@type": "ListItem", position: 2, name: "Taxi Gex", item: "https://taxispm.fr/taxi-gex/" }] },
  ],
};

const destinations = [
  { to: "Genève Aéroport (GVA)", time: "~40 min", price: "à partir de 55 €" },
  { to: "Genève Centre", time: "~35 min", price: "à partir de 50 €" },
  { to: "Lyon Saint-Exupéry (LYS)", time: "~1h20", price: "à partir de 110 €" },
  { to: "Lyon Centre", time: "~1h25", price: "à partir de 115 €" },
  { to: "Ferney-Voltaire", time: "~15 min", price: "à partir de 25 €" },
  { to: "Bourg-en-Bresse", time: "~1h10", price: "à partir de 90 €" },
];

export default function TaxiGexPage() {
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
          <span className="text-[10px] font-bold tracking-[0.3em] uppercase text-black/40 mb-4 block">Taxi · Gex (01170 — Pays de Gex)</span>
          <h1 className="text-4xl sm:text-5xl font-semibold tracking-tight text-black leading-tight mb-6">
            Taxi à<br /><span className="text-black/30">Gex</span>
          </h1>
          <p className="text-base text-[#555] leading-relaxed max-w-2xl mb-4">
            SPM Taxi dessert Gex, Ferney-Voltaire et tout le Pays de Gex. Spécialiste des transferts
            vers l'aéroport de Genève-Cointrin (GVA) et Lyon Saint-Exupéry (LYS) —
            idéal pour les frontaliers, voyageurs d'affaires et familles.
          </p>
          <p className="text-base text-[#555] leading-relaxed max-w-2xl mb-8">
            Taxi conventionné CPAM, SPM Taxi prend également en charge vos transports médicaux
            sur prescription médicale — zéro avance de frais avec la Sécurité Sociale française.
            Volkswagen Tiguan Allspace 7 places, confort premium, Wi-Fi à bord.
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
          <h2 className="text-2xl font-semibold tracking-tight text-black mb-4">Gex → Genève Aéroport & Lyon</h2>
          <p className="text-sm text-[#555] leading-relaxed mb-4">
            Le Pays de Gex est la zone frontalière entre la France et la Suisse, à 30 minutes de Genève.
            SPM Taxi assure les transferts vers les deux aéroports principaux de la région :
          </p>
          <ul className="text-sm text-[#555] space-y-3 mb-6">
            <li className="flex items-start gap-3">
              <CheckCircle className="h-4 w-4 text-black shrink-0 mt-0.5" />
              <div><strong className="text-black">Aéroport Genève-Cointrin (GVA)</strong> — 40 min depuis Gex, à partir de 55 €. Swiss, Air France, easyJet, Lufthansa.</div>
            </li>
            <li className="flex items-start gap-3">
              <CheckCircle className="h-4 w-4 text-black shrink-0 mt-0.5" />
              <div><strong className="text-black">Aéroport Lyon Saint-Exupéry (LYS)</strong> — 1h20 depuis Gex, à partir de 110 €. TGV direct vers Paris depuis LYS.</div>
            </li>
            <li className="flex items-start gap-3">
              <CheckCircle className="h-4 w-4 text-black shrink-0 mt-0.5" />
              <div><strong className="text-black">Prise en charge à domicile</strong> — SPM Taxi vient vous chercher à votre adresse à Gex, Ferney-Voltaire, Divonne, Thoiry.</div>
            </li>
          </ul>
        </section>

        <section className="mb-16">
          <h2 className="text-2xl font-semibold tracking-tight text-black mb-3">Tarifs taxi depuis Gex</h2>
          <p className="text-sm text-[#555] mb-8">Tarifs indicatifs — devis personnalisé gratuit au 07 67 75 18 98.</p>
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
          <h2 className="text-2xl font-semibold tracking-tight text-black mb-8">Questions fréquentes — Taxi Gex</h2>
          <div className="space-y-4">
            {[
              { q: "Combien coûte un taxi de Gex à Genève Aéroport ?", a: "Depuis Gex, le transfert vers l'aéroport de Genève (GVA) est à partir de 55 € — trajet d'environ 40 minutes. Tarif fixe garanti, prise en charge à domicile, suivi des vols en temps réel. ☎ 07 67 75 18 98." },
              { q: "SPM Taxi fait-il Gex → Lyon Saint-Exupéry ?", a: "Oui. Depuis Gex, Lyon Saint-Exupéry est à partir de 110 € (environ 1h20). Idéal pour les vols internationaux longue distance ou quand les tarifs LYS sont plus intéressants que Genève GVA." },
              { q: "Y a-t-il un taxi CPAM dans le Pays de Gex ?", a: "Oui. SPM Taxi est conventionné CPAM et peut effectuer des transports médicaux sur prescription depuis Gex vers les établissements de santé français. Tiers payant — zéro avance de frais." },
              { q: "Comment réserver un taxi pour Genève depuis Gex ?", a: "Appelez le 07 67 75 18 98 (7j/7, 24h/24) ou remplissez le formulaire sur taxispm.fr. Pour les vols tôt le matin, réservez la veille pour garantir la disponibilité." },
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
              { href: "/transfert-aeroport-lyon", label: "Aéroport Lyon Saint-Exupéry", desc: "LYS depuis Gex à partir de 110 €" },
              { href: "/taxi-conventionne-cpam", label: "Transport CPAM remboursé", desc: "Tiers payant — zéro avance de frais" },
              { href: "/taxi-longue-distance", label: "Longue Distance France entière", desc: "De Gex vers Paris, Marseille, Bordeaux…" },
              { href: "/taxi-bourg-en-bresse", label: "Taxi Bourg-en-Bresse", desc: "Préfecture de l'Ain" },
            ].map(({ href, label, desc }) => (
              <Link key={href} href={href} className="flex items-center justify-between gap-4 bg-white rounded-2xl p-5 border border-black/[0.06] hover:border-black/15 transition-colors group">
                <div><p className="text-sm font-semibold text-black mb-1">{label}</p><p className="text-xs text-[#555]">{desc}</p></div>
                <ArrowRight className="h-4 w-4 text-black/30 shrink-0 group-hover:translate-x-0.5 transition-transform" />
              </Link>
            ))}
          </div>
        </section>

        <div className="bg-black text-white rounded-3xl p-10 text-center">
          <h2 className="text-2xl font-semibold mb-3">Taxi Gex — Genève & Lyon</h2>
          <p className="text-white/50 text-sm mb-8">Transferts GVA & LYS · 7j/7 24h/24 · Devis gratuit</p>
          <div className="flex flex-wrap gap-3 justify-center">
            <a href="tel:+33767751898" className="inline-flex items-center gap-2 rounded-full bg-white text-black px-6 py-3 text-sm font-semibold hover:bg-white/90 transition-colors"><Phone className="h-4 w-4" />07 67 75 18 98</a>
            <a href="/#contact" className="inline-flex items-center gap-2 rounded-full border border-white/25 text-white px-6 py-3 text-sm font-semibold hover:border-white/50 transition-colors">Devis en ligne<ArrowRight className="h-4 w-4" /></a>
          </div>
        </div>
      </main>
      <footer className="border-t border-black/[0.06] px-6 py-8 text-center">
        <p className="text-xs text-black/30">© 2026 SPM Taxi — Pays de Gex (01170) · <Link href="/" className="underline underline-offset-2">Retour au site</Link></p>
      </footer>
    </div>
  );
}
