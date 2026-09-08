import type { Metadata } from "next";
import Link from "next/link";
import { ArrowLeft, Phone, MapPin, Clock, CheckCircle, ArrowRight, Shield } from "lucide-react";

export const metadata: Metadata = {
  title: "Taxi Bourg-en-Bresse — Conventionné CPAM · Ain 01 | SPM Taxi",
  description:
    "Taxi à Bourg-en-Bresse (Ain 01000) : conventionné CPAM, transport médical remboursé, aéroport Lyon Saint-Exupéry, gare TGV. Volkswagen Tiguan 7 places. 7j/7 24h/24. ☎ 07 67 75 18 98.",
  keywords: [
    "taxi Bourg-en-Bresse", "taxi Bourg en Bresse", "taxi Bourg-en-Bresse 01000",
    "taxi conventionné Bourg-en-Bresse", "taxi CPAM Bourg-en-Bresse",
    "taxi médical Bourg-en-Bresse", "taxi VSL Bourg-en-Bresse",
    "transport médical Bourg-en-Bresse CPAM", "taxi Bourg-en-Bresse aéroport Lyon",
    "taxi Bourg-en-Bresse Lyon", "taxi Bourg-en-Bresse gare",
    "taxi Bourg-en-Bresse Ain 01", "taxi Bourg-en-Bresse tiers payant",
    "taxi Bourg-en-Bresse longue distance", "réserver taxi Bourg-en-Bresse",
    "chauffeur taxi Bourg-en-Bresse", "taxi Bourg-en-Bresse nuit week-end",
    "taxi Bourg Ain", "VTC Bourg-en-Bresse",
  ],
  alternates: { canonical: "https://taxispm.fr/taxi-bourg-en-bresse/" },
  openGraph: {
    title: "Taxi Bourg-en-Bresse — Conventionné CPAM | SPM Taxi · 7j/7 24h/24",
    description: "Taxi conventionné CPAM à Bourg-en-Bresse. Aéroport Lyon, transport médical remboursé, longue distance. Volkswagen Tiguan 7 places. ☎ 07 67 75 18 98.",
    url: "https://taxispm.fr/taxi-bourg-en-bresse/",
    type: "website",
    locale: "fr_FR",
    images: [{ url: "/image/tiguan-front-quarter.webp", alt: "Taxi Bourg-en-Bresse — SPM Taxi Ain" }],
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": ["LocalBusiness", "TaxiService"],
      "@id": "https://taxispm.fr/#business",
      name: "SPM Taxi — Bourg-en-Bresse",
      telephone: "+33767751898",
      url: "https://taxispm.fr/taxi-bourg-en-bresse/",
      description: "SPM Taxi assure des courses depuis Bourg-en-Bresse dans tout l'Ain 01 et la région. Taxi conventionné CPAM, transport médical, transferts aéroport Lyon. 7j/7 24h/24.",
      address: { "@type": "PostalAddress", streetAddress: "951 route des hauts fourneaux", addressLocality: "Villebois", postalCode: "01150", addressRegion: "Auvergne-Rhône-Alpes", addressCountry: "FR" },
      areaServed: [
        { "@type": "City", name: "Bourg-en-Bresse", containedInPlace: { "@type": "AdministrativeArea", name: "Ain" } },
        { "@type": "City", name: "Lyon" },
        { "@type": "Airport", name: "Aéroport Lyon Saint-Exupéry", iataCode: "LYS" },
      ],
      aggregateRating: { "@type": "AggregateRating", ratingValue: 4.6, reviewCount: 12, bestRating: 5, worstRating: 1 },
      openingHoursSpecification: [{ "@type": "OpeningHoursSpecification", dayOfWeek: ["Monday","Tuesday","Wednesday","Thursday","Friday","Saturday","Sunday"], opens: "00:00", closes: "23:59" }],
    },
    {
      "@type": "FAQPage",
      mainEntity: [
        { "@type": "Question", name: "Y a-t-il un taxi conventionné CPAM à Bourg-en-Bresse ?", acceptedAnswer: { "@type": "Answer", text: "Oui. SPM Taxi est agréé CPAM et intervient à Bourg-en-Bresse et dans tout l'Ain pour les transports médicaux sur prescription. Zéro avance de frais — tiers payant avec l'Assurance Maladie. Appelez le 07 67 75 18 98." } },
        { "@type": "Question", name: "Combien coûte un taxi de Bourg-en-Bresse à l'aéroport Lyon ?", acceptedAnswer: { "@type": "Answer", text: "Depuis Bourg-en-Bresse, le transfert vers l'aéroport Lyon Saint-Exupéry est à partir de 75 €. Tarif fixe garanti. Devis gratuit au 07 67 75 18 98." } },
        { "@type": "Question", name: "SPM Taxi fait-il Bourg-en-Bresse — Paris en taxi longue distance ?", acceptedAnswer: { "@type": "Answer", text: "Oui. SPM Taxi assure les transferts longue distance depuis Bourg-en-Bresse vers Paris, Marseille, Bordeaux, et toute la France. Tarif fixe sur devis, Volkswagen Tiguan 7 places confortable pour les longs trajets. Appelez le 07 67 75 18 98." } },
      ],
    },
    { "@type": "BreadcrumbList", itemListElement: [{ "@type": "ListItem", position: 1, name: "Accueil", item: "https://taxispm.fr" }, { "@type": "ListItem", position: 2, name: "Taxi Bourg-en-Bresse", item: "https://taxispm.fr/taxi-bourg-en-bresse/" }] },
  ],
};

const destinations = [
  { to: "Aéroport Lyon Saint-Exupéry", time: "~1h", price: "à partir de 75 €" },
  { to: "Lyon Centre (gare Part-Dieu)", time: "~1h05", price: "à partir de 75 €" },
  { to: "Ambérieu-en-Bugey", time: "~35 min", price: "à partir de 45 €" },
  { to: "Lagnieu", time: "~40 min", price: "à partir de 55 €" },
  { to: "Villebois", time: "~50 min", price: "à partir de 65 €" },
  { to: "Paris (longue distance)", time: "~5h", price: "sur devis" },
];

export default function TaxiBourgEnBressePage() {
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
          <span className="text-[10px] font-bold tracking-[0.3em] uppercase text-black/40 mb-4 block">Taxi · Bourg-en-Bresse (01000 — Ain)</span>
          <h1 className="text-4xl sm:text-5xl font-semibold tracking-tight text-black leading-tight mb-6">
            Taxi à<br /><span className="text-black/30">Bourg-en-Bresse</span>
          </h1>
          <p className="text-base text-[#555] leading-relaxed max-w-2xl mb-4">
            SPM Taxi dessert Bourg-en-Bresse et tout le département de l'Ain. Taxi conventionné CPAM — zéro avance de frais pour vos transports médicaux. Transferts aéroport Lyon Saint-Exupéry, gare TGV, longue distance partout en France.
          </p>
          <p className="text-base text-[#555] leading-relaxed max-w-2xl mb-8">
            Volkswagen Tiguan Allspace 7 places — confort premium, Wi-Fi, attache-remorque. Disponible 7j/7, 24h/24. Devis gratuit sous 2h.
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
          <h2 className="text-2xl font-semibold tracking-tight text-black mb-8">Nos services à Bourg-en-Bresse</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {[
              { icon: Shield, title: "Transport médical CPAM — tiers payant", desc: "Agréé CPAM depuis Bourg-en-Bresse. Dialyse, chimiothérapie, hospitalisation — zéro avance de frais sur prescription médicale." },
              { icon: MapPin, title: "Aéroport & gares", desc: "Bourg-en-Bresse → Lyon Saint-Exupéry (~1h), gare Part-Dieu, gare Perrache. Tarif fixe, suivi des vols inclus." },
              { icon: Clock, title: "Longue distance France entière", desc: "Paris, Marseille, Bordeaux, Nice, Strasbourg, Genève depuis Bourg-en-Bresse. Tarif fixe sur devis, Tiguan 7 places." },
              { icon: CheckCircle, title: "Disponible 7j/7 — 24h/24", desc: "Nuits, week-ends, jours fériés. SPM Taxi répond à Bourg-en-Bresse et dans tout l'Ain. Confirmation sous 2h." },
            ].map(({ icon: Icon, title, desc }) => (
              <div key={title} className="bg-white rounded-2xl p-6 border border-black/[0.06]">
                <Icon className="h-6 w-6 text-black mb-4" />
                <h3 className="text-sm font-semibold text-black mb-2">{title}</h3>
                <p className="text-xs text-[#555] leading-relaxed">{desc}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="mb-16">
          <h2 className="text-2xl font-semibold tracking-tight text-black mb-3">Tarifs taxi depuis Bourg-en-Bresse</h2>
          <p className="text-sm text-[#555] mb-8">Tarifs indicatifs — devis gratuit au 07 67 75 18 98.</p>
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
              { q: "Y a-t-il un taxi conventionné CPAM à Bourg-en-Bresse ?", a: "Oui. SPM Taxi est agréé CPAM et intervient à Bourg-en-Bresse et dans tout l'Ain pour les transports médicaux sur prescription. Zéro avance de frais — tiers payant direct avec l'Assurance Maladie." },
              { q: "Combien coûte un taxi de Bourg-en-Bresse à l'aéroport Lyon ?", a: "Depuis Bourg-en-Bresse, le transfert vers l'aéroport Lyon Saint-Exupéry est à partir de 75 €. Tarif fixe garanti, suivi des vols inclus." },
              { q: "SPM Taxi fait-il du transport longue distance depuis Bourg-en-Bresse ?", a: "Oui. SPM Taxi assure des trajets longue distance depuis Bourg-en-Bresse vers toute la France : Paris, Marseille, Bordeaux, Strasbourg, Nice, Genève. Volkswagen Tiguan 7 places, confort SUV premium, tarif fixe sur devis." },
              { q: "Comment réserver un taxi à Bourg-en-Bresse ?", a: "Appelez le 07 67 75 18 98 (disponible 7j/7, 24h/24) ou remplissez le formulaire en ligne sur taxispm.fr. Réponse garantie sous 2h." },
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
              { href: "/taxi-amberieu-en-bugey", label: "Taxi Ambérieu-en-Bugey", desc: "Ain — conventionné CPAM" },
              { href: "/taxi-lagnieu", label: "Taxi Lagnieu", desc: "Ain 01 — conventionné CPAM" },
              { href: "/taxi-longue-distance", label: "Taxi Longue Distance France", desc: "Paris, Marseille, Bordeaux, Nice…" },
              { href: "/transfert-aeroport-lyon", label: "Aéroport Lyon Saint-Exupéry", desc: "Depuis Bourg à partir de 75 €" },
            ].map(({ href, label, desc }) => (
              <Link key={href} href={href} className="flex items-center justify-between gap-4 bg-white rounded-2xl p-5 border border-black/[0.06] hover:border-black/15 transition-colors group">
                <div><p className="text-sm font-semibold text-black mb-1">{label}</p><p className="text-xs text-[#555]">{desc}</p></div>
                <ArrowRight className="h-4 w-4 text-black/30 shrink-0 group-hover:translate-x-0.5 transition-transform" />
              </Link>
            ))}
          </div>
        </section>

        <div className="bg-black text-white rounded-3xl p-10 text-center">
          <h2 className="text-2xl font-semibold mb-3">Taxi à Bourg-en-Bresse — Réservez</h2>
          <p className="text-white/50 text-sm mb-8">Conventionné CPAM · Longue distance · 7j/7 24h/24</p>
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
        <p className="text-xs text-black/30">© 2026 SPM Taxi — Conventionné CPAM · Bourg-en-Bresse (Ain 01) · <Link href="/" className="underline underline-offset-2">Retour au site</Link></p>
      </footer>
    </div>
  );
}
