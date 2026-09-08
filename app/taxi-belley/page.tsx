import type { Metadata } from "next";
import Link from "next/link";
import { ArrowLeft, Phone, MapPin, Clock, CheckCircle, ArrowRight, Shield } from "lucide-react";

export const metadata: Metadata = {
  title: "Taxi Belley — Conventionné CPAM · Ain 01 | SPM Taxi",
  description:
    "Taxi à Belley (01300 Ain) : conventionné CPAM, transport médical remboursé, transfert aéroport Lyon Saint-Exupéry. Volkswagen Tiguan 7 places. 7j/7 24h/24. ☎ 07 67 75 18 98.",
  keywords: [
    "taxi Belley", "taxi Belley Ain", "taxi Belley 01300",
    "taxi conventionné Belley", "taxi CPAM Belley",
    "taxi médical Belley", "taxi VSL Belley",
    "transport médical Belley CPAM", "taxi Belley aéroport Lyon",
    "taxi Belley Lyon Saint-Exupéry", "taxi Belley Villebois",
    "taxi Belley Ambérieu", "taxi Belley hôpital",
    "centre hospitalier Belley taxi", "taxi Belley tiers payant",
    "taxi Belley nuit week-end", "chauffeur taxi Belley",
    "taxi Belley dialyse chimiothérapie",
  ],
  alternates: { canonical: "https://taxispm.fr/taxi-belley/" },
  robots: { index: true, follow: true },
  openGraph: {
    title: "Taxi Belley — Conventionné CPAM | SPM Taxi · 7j/7 24h/24",
    description:
      "Taxi conventionné CPAM à Belley (01300). Aéroport Lyon, transport médical remboursé, centre hospitalier de Belley. Volkswagen Tiguan 7 places. ☎ 07 67 75 18 98.",
    url: "https://taxispm.fr/taxi-belley/",
    type: "website",
    locale: "fr_FR",
    images: [{ url: "/image/tiguan-front-quarter.webp", alt: "Taxi Belley — SPM Taxi Ain 01" }],
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": ["LocalBusiness", "TaxiService"],
      "@id": "https://taxispm.fr/#business",
      name: "SPM Taxi — Belley",
      telephone: "+33767751898",
      url: "https://taxispm.fr/taxi-belley/",
      description: "SPM Taxi assure des courses depuis Belley (sous-préfecture de l'Ain) vers Lyon, l'aéroport Saint-Exupéry et les hôpitaux de la région. Taxi conventionné CPAM — zéro avance de frais sur prescription médicale. 7j/7 24h/24.",
      address: { "@type": "PostalAddress", streetAddress: "951 route des hauts fourneaux", addressLocality: "Villebois", postalCode: "01150", addressRegion: "Auvergne-Rhône-Alpes", addressCountry: "FR" },
      geo: { "@type": "GeoCoordinates", latitude: 45.760, longitude: 5.688 },
      areaServed: [
        { "@type": "City", name: "Belley", containedInPlace: { "@type": "AdministrativeArea", name: "Ain" } },
        { "@type": "City", name: "Villebois" }, { "@type": "City", name: "Lyon" },
        { "@type": "Airport", name: "Aéroport Lyon Saint-Exupéry", iataCode: "LYS" },
      ],
      aggregateRating: { "@type": "AggregateRating", ratingValue: 4.6, reviewCount: 12, bestRating: 5, worstRating: 1 },
      openingHoursSpecification: [{ "@type": "OpeningHoursSpecification", dayOfWeek: ["Monday","Tuesday","Wednesday","Thursday","Friday","Saturday","Sunday"], opens: "00:00", closes: "23:59" }],
    },
    {
      "@type": "FAQPage",
      mainEntity: [
        { "@type": "Question", name: "Y a-t-il un taxi conventionné CPAM à Belley ?", acceptedAnswer: { "@type": "Answer", text: "Oui. SPM Taxi est agréé CPAM et intervient à Belley et dans toute la zone Bugey pour les transports médicaux sur prescription. Zéro avance de frais — tiers payant avec l'Assurance Maladie. Appelez le 07 67 75 18 98." } },
        { "@type": "Question", name: "Combien coûte un taxi de Belley à l'aéroport Lyon Saint-Exupéry ?", acceptedAnswer: { "@type": "Answer", text: "Depuis Belley, le transfert vers l'aéroport Lyon Saint-Exupéry est à partir de 75 €. Tarif fixe garanti, suivi des vols en temps réel. Devis gratuit au 07 67 75 18 98." } },
        { "@type": "Question", name: "SPM Taxi transporte-t-il vers le centre hospitalier de Belley ?", acceptedAnswer: { "@type": "Answer", text: "Oui, SPM Taxi effectue régulièrement les transports médicaux CPAM vers le Centre Hospitalier de Belley et les établissements de santé du Bugey. Conventionné CPAM — zéro avance de frais sur prescription." } },
        { "@type": "Question", name: "Comment réserver un taxi à Belley ?", acceptedAnswer: { "@type": "Answer", text: "Appelez directement le 07 67 75 18 98 (7j/7, 24h/24) ou utilisez le formulaire en ligne sur taxispm.fr. Pour les transports médicaux CPAM, munissez-vous de votre prescription médicale." } },
      ],
    },
    {
      "@type": "BreadcrumbList",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Accueil", item: "https://taxispm.fr" },
        { "@type": "ListItem", position: 2, name: "Taxi Belley", item: "https://taxispm.fr/taxi-belley/" },
      ],
    },
  ],
};

const destinations = [
  { to: "Villebois", time: "~20 min", price: "à partir de 25 €" },
  { to: "Aéroport Lyon Saint-Exupéry", time: "~1h05", price: "à partir de 75 €" },
  { to: "Lyon Centre", time: "~1h10", price: "à partir de 80 €" },
  { to: "Ambérieu-en-Bugey", time: "~35 min", price: "à partir de 40 €" },
  { to: "Bourg-en-Bresse", time: "~50 min", price: "à partir de 60 €" },
  { to: "Genève Aéroport", time: "~1h30", price: "à partir de 120 €" },
];

export default function TaxiBelleyPage() {
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
          <span className="text-[10px] font-bold tracking-[0.3em] uppercase text-black/40 mb-4 block">Taxi · Belley (01300 — Ain)</span>
          <h1 className="text-4xl sm:text-5xl font-semibold tracking-tight text-black leading-tight mb-6">
            Taxi à<br /><span className="text-black/30">Belley</span>
          </h1>
          <p className="text-base text-[#555] leading-relaxed max-w-2xl mb-4">
            SPM Taxi dessert Belley, sous-préfecture de l'Ain, et tout le secteur Bugey.
            Taxi conventionné CPAM — zéro avance de frais pour vos transports médicaux vers
            le Centre Hospitalier de Belley, les cliniques de Lyon et les centres de dialyse.
          </p>
          <p className="text-base text-[#555] leading-relaxed max-w-2xl mb-8">
            Basé à Villebois, à 20 minutes de Belley, SPM Taxi propose des transferts vers
            l'aéroport Lyon Saint-Exupéry, la gare Part-Dieu et toutes les destinations
            France entière. Volkswagen Tiguan 7 places, disponible 7j/7 24h/24.
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
          <h2 className="text-2xl font-semibold tracking-tight text-black mb-4">Transport médical CPAM à Belley</h2>
          <p className="text-sm text-[#555] leading-relaxed mb-4">
            SPM Taxi est conventionné CPAM pour les transports médicaux assis depuis Belley.
            Sur prescription de votre médecin, vous ne payez rien — la Sécurité Sociale règle
            directement SPM Taxi (tiers payant intégral).
          </p>
          <ul className="text-sm text-[#555] space-y-2 mb-6">
            <li className="flex items-start gap-2"><CheckCircle className="h-4 w-4 text-black shrink-0 mt-0.5" />Belley → Centre Hospitalier de Belley (CH Bugey Sud)</li>
            <li className="flex items-start gap-2"><CheckCircle className="h-4 w-4 text-black shrink-0 mt-0.5" />Belley → CHU Lyon (Édouard Herriot, Croix-Rousse, Lyon-Sud)</li>
            <li className="flex items-start gap-2"><CheckCircle className="h-4 w-4 text-black shrink-0 mt-0.5" />Belley → Centres de dialyse Ain et Isère</li>
            <li className="flex items-start gap-2"><CheckCircle className="h-4 w-4 text-black shrink-0 mt-0.5" />Belley → Chimiothérapie et radiothérapie (Lyon, Bourg-en-Bresse)</li>
            <li className="flex items-start gap-2"><CheckCircle className="h-4 w-4 text-black shrink-0 mt-0.5" />Belley → Clinique Convert, Clinique Saint-Vincent (Bourg-en-Bresse)</li>
          </ul>
          <a href="tel:+33767751898" className="inline-flex items-center gap-2 text-sm font-semibold text-black hover:opacity-70 transition-opacity">
            <Phone className="h-4 w-4" />Appelez le 07 67 75 18 98
          </a>
        </section>

        <section className="mb-16">
          <h2 className="text-2xl font-semibold tracking-tight text-black mb-3">Tarifs taxi depuis Belley</h2>
          <p className="text-sm text-[#555] mb-8">Tarifs indicatifs — devis gratuit sous 2h.</p>
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
          <h2 className="text-2xl font-semibold tracking-tight text-black mb-8">Questions fréquentes — Taxi Belley</h2>
          <div className="space-y-4">
            {[
              { q: "Y a-t-il un taxi conventionné CPAM à Belley ?", a: "Oui. SPM Taxi est agréé CPAM et intervient à Belley pour tous les transports médicaux sur prescription. Zéro avance de frais — l'Assurance Maladie prend en charge vos trajets vers les hôpitaux et centres de soins de la région." },
              { q: "Combien coûte un taxi de Belley à Lyon ?", a: "Depuis Belley, le trajet vers Lyon Centre est à partir de 80 € et vers l'aéroport Lyon Saint-Exupéry à partir de 75 €. Tarif fixe garanti sans supplément. Devis gratuit au 07 67 75 18 98." },
              { q: "SPM Taxi va-t-il de Belley à Genève ?", a: "Oui, SPM Taxi effectue les transferts Belley → Genève (environ 1h30) à partir de 120 €. Idéal pour les frontaliers, voyageurs et professionnels se déplaçant en Suisse." },
              { q: "Comment réserver un taxi à Belley rapidement ?", a: "Appelez le 07 67 75 18 98 (7j/7, 24h/24) ou utilisez le formulaire en ligne. Réponse garantie sous 2h. Pour les urgences médicales, l'appel direct est recommandé." },
            ].map(({ q, a }) => (
              <div key={q} className="bg-white rounded-2xl p-6 border border-black/[0.06]">
                <h3 className="text-sm font-semibold text-black mb-2">{q}</h3>
                <p className="text-sm text-[#555] leading-relaxed">{a}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="mb-16">
          <h2 className="text-2xl font-semibold tracking-tight text-black mb-8">Pages utiles</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {[
              { href: "/taxi-villebois", label: "Taxi Villebois", desc: "Siège de SPM Taxi — 20 min de Belley" },
              { href: "/taxi-conventionne-cpam", label: "Transport CPAM remboursé", desc: "Zéro avance de frais, tiers payant" },
              { href: "/transfert-aeroport-lyon", label: "Aéroport Lyon Saint-Exupéry", desc: "Depuis Belley à partir de 75 €" },
              { href: "/taxi-amberieu-en-bugey", label: "Taxi Ambérieu-en-Bugey", desc: "Ville voisine du Bugey" },
            ].map(({ href, label, desc }) => (
              <Link key={href} href={href} className="flex items-center justify-between gap-4 bg-white rounded-2xl p-5 border border-black/[0.06] hover:border-black/15 transition-colors group">
                <div><p className="text-sm font-semibold text-black mb-1">{label}</p><p className="text-xs text-[#555]">{desc}</p></div>
                <ArrowRight className="h-4 w-4 text-black/30 shrink-0 group-hover:translate-x-0.5 transition-transform" />
              </Link>
            ))}
          </div>
        </section>

        <div className="bg-black text-white rounded-3xl p-10 text-center">
          <h2 className="text-2xl font-semibold mb-3">Taxi à Belley — Réservez</h2>
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
        <p className="text-xs text-black/30">© 2026 SPM Taxi — Conventionné CPAM · Belley (01) · <Link href="/" className="underline underline-offset-2">Retour au site</Link></p>
      </footer>
    </div>
  );
}
