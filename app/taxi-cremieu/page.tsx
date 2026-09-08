import type { Metadata } from "next";
import Link from "next/link";
import { ArrowLeft, Phone, MapPin, Clock, CheckCircle, ArrowRight, Shield } from "lucide-react";

export const metadata: Metadata = {
  title: "Taxi Crémieu — Conventionné CPAM · Isère 38 | SPM Taxi",
  description:
    "Taxi à Crémieu (Isère 38460) : conventionné CPAM, transport médical remboursé, aéroport Lyon Saint-Exupéry. Volkswagen Tiguan 7 places. 7j/7 24h/24. ☎ 07 67 75 18 98.",
  keywords: [
    "taxi Crémieu", "taxi Crémieu Isère", "taxi Crémieu 38460",
    "taxi conventionné Crémieu", "taxi CPAM Crémieu",
    "taxi médical Crémieu", "taxi VSL Crémieu",
    "transport médical Crémieu CPAM", "taxi Crémieu aéroport Lyon",
    "taxi Crémieu Lyon", "taxi Crémieu Bourgoin-Jallieu",
    "taxi Crémieu Morestel", "taxi Crémieu tiers payant",
    "taxi Crémieu nuit week-end", "réserver taxi Crémieu",
    "chauffeur taxi Crémieu", "taxi Nord-Isère Crémieu",
  ],
  alternates: { canonical: "https://taxispm.fr/taxi-cremieu/" },
  openGraph: {
    title: "Taxi Crémieu — Conventionné CPAM | SPM Taxi · 7j/7 24h/24",
    description: "Taxi conventionné CPAM à Crémieu (38460). Aéroport Lyon, transport médical remboursé. Volkswagen Tiguan 7 places. ☎ 07 67 75 18 98.",
    url: "https://taxispm.fr/taxi-cremieu/",
    type: "website",
    locale: "fr_FR",
    images: [{ url: "/image/tiguan-front-quarter.webp", alt: "Taxi Crémieu — SPM Taxi Isère" }],
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": ["LocalBusiness", "TaxiService"],
      "@id": "https://taxispm.fr/#business",
      name: "SPM Taxi — Crémieu",
      telephone: "+33767751898",
      url: "https://taxispm.fr/taxi-cremieu/",
      description: "SPM Taxi assure des courses depuis Crémieu et dans tout le secteur Nord-Isère. Taxi conventionné CPAM, transport médical, transferts aéroport Lyon. 7j/7 24h/24.",
      address: { "@type": "PostalAddress", streetAddress: "951 route des hauts fourneaux", addressLocality: "Villebois", postalCode: "01150", addressRegion: "Auvergne-Rhône-Alpes", addressCountry: "FR" },
      areaServed: [
        { "@type": "City", name: "Crémieu", containedInPlace: { "@type": "AdministrativeArea", name: "Isère" } },
        { "@type": "City", name: "Morestel" },
        { "@type": "City", name: "Bourgoin-Jallieu" },
        { "@type": "City", name: "Lyon" },
        { "@type": "Airport", name: "Aéroport Lyon Saint-Exupéry", iataCode: "LYS" },
      ],
      aggregateRating: { "@type": "AggregateRating", ratingValue: 4.6, reviewCount: 12, bestRating: 5, worstRating: 1 },
      openingHoursSpecification: [{ "@type": "OpeningHoursSpecification", dayOfWeek: ["Monday","Tuesday","Wednesday","Thursday","Friday","Saturday","Sunday"], opens: "00:00", closes: "23:59" }],
    },
    {
      "@type": "FAQPage",
      mainEntity: [
        { "@type": "Question", name: "Y a-t-il un taxi conventionné CPAM à Crémieu ?", acceptedAnswer: { "@type": "Answer", text: "Oui. SPM Taxi est agréé CPAM et intervient à Crémieu pour les transports médicaux sur prescription. Zéro avance de frais — tiers payant avec l'Assurance Maladie. Appelez le 07 67 75 18 98." } },
        { "@type": "Question", name: "Combien coûte un taxi de Crémieu à l'aéroport Lyon ?", acceptedAnswer: { "@type": "Answer", text: "Depuis Crémieu, le transfert vers l'aéroport Lyon Saint-Exupéry est à partir de 55 €. Tarif fixe garanti, suivi des vols. Devis gratuit au 07 67 75 18 98." } },
        { "@type": "Question", name: "SPM Taxi dessert-il Morestel depuis Crémieu ?", acceptedAnswer: { "@type": "Answer", text: "Oui, SPM Taxi assure les trajets entre Crémieu et Morestel, ainsi que toutes les communes du secteur Nord-Isère. Appelez le 07 67 75 18 98." } },
      ],
    },
    { "@type": "BreadcrumbList", itemListElement: [{ "@type": "ListItem", position: 1, name: "Accueil", item: "https://taxispm.fr" }, { "@type": "ListItem", position: 2, name: "Taxi Crémieu", item: "https://taxispm.fr/taxi-cremieu/" }] },
  ],
};

const destinations = [
  { to: "Aéroport Lyon Saint-Exupéry", time: "~40 min", price: "à partir de 55 €" },
  { to: "Lyon Centre", time: "~40 min", price: "à partir de 55 €" },
  { to: "Bourgoin-Jallieu", time: "~25 min", price: "à partir de 35 €" },
  { to: "Morestel", time: "~20 min", price: "à partir de 30 €" },
  { to: "Tignieu-Jameyzieu", time: "~20 min", price: "à partir de 30 €" },
  { to: "Villebois", time: "~25 min", price: "à partir de 35 €" },
];

export default function TaxiCremieuPage() {
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
          <span className="text-[10px] font-bold tracking-[0.3em] uppercase text-black/40 mb-4 block">Taxi · Crémieu (38460 — Isère)</span>
          <h1 className="text-4xl sm:text-5xl font-semibold tracking-tight text-black leading-tight mb-6">
            Taxi à<br /><span className="text-black/30">Crémieu</span>
          </h1>
          <p className="text-base text-[#555] leading-relaxed max-w-2xl mb-4">
            SPM Taxi dessert Crémieu, Morestel et tout le secteur Nord-Isère. Taxi conventionné CPAM agréé — zéro avance de frais pour vos transports médicaux sur prescription. Transferts vers l'aéroport Lyon Saint-Exupéry et les gares lyonnaises.
          </p>
          <p className="text-base text-[#555] leading-relaxed max-w-2xl mb-8">
            Volkswagen Tiguan Allspace 7 places — confort premium, Wi-Fi. Disponible 7j/7, 24h/24. Devis gratuit sous 2h.
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
          <h2 className="text-2xl font-semibold tracking-tight text-black mb-4">Transport médical CPAM à Crémieu</h2>
          <p className="text-sm text-[#555] leading-relaxed mb-4">
            SPM Taxi est conventionné CPAM pour les transports médicaux assis à Crémieu. Sur prescription médicale, tiers payant intégral : <strong>vous ne payez rien</strong>.
          </p>
          <ul className="text-sm text-[#555] space-y-2 mb-6">
            <li className="flex items-start gap-2"><CheckCircle className="h-4 w-4 text-black shrink-0 mt-0.5" />Crémieu → CHU Lyon (Edouard Herriot, Croix-Rousse, Lyon-Sud)</li>
            <li className="flex items-start gap-2"><CheckCircle className="h-4 w-4 text-black shrink-0 mt-0.5" />Crémieu → Centre de dialyse Nord-Isère</li>
            <li className="flex items-start gap-2"><CheckCircle className="h-4 w-4 text-black shrink-0 mt-0.5" />Crémieu → Cliniques et centres anticancéreux de Lyon</li>
            <li className="flex items-start gap-2"><CheckCircle className="h-4 w-4 text-black shrink-0 mt-0.5" />Crémieu → Hôpitaux de Bourgoin-Jallieu et La Tour-du-Pin</li>
          </ul>
          <a href="tel:+33767751898" className="inline-flex items-center gap-2 rounded-full bg-black text-white px-5 py-2.5 text-sm font-semibold hover:bg-[#111] transition-colors">
            <Phone className="h-4 w-4" />Appeler pour un transport CPAM
          </a>
        </section>

        <section className="mb-16">
          <h2 className="text-2xl font-semibold tracking-tight text-black mb-3">Tarifs taxi depuis Crémieu</h2>
          <p className="text-sm text-[#555] mb-8">Tarifs indicatifs — devis gratuit au 07 67 75 18 98.</p>
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
          <h2 className="text-2xl font-semibold tracking-tight text-black mb-8">Questions fréquentes</h2>
          <div className="space-y-4">
            {[
              { q: "Y a-t-il un taxi conventionné CPAM à Crémieu ?", a: "Oui. SPM Taxi est agréé CPAM et intervient à Crémieu pour les transports médicaux sur prescription. Zéro avance de frais — tiers payant direct avec l'Assurance Maladie. Appelez le 07 67 75 18 98." },
              { q: "Combien coûte un taxi de Crémieu à l'aéroport Lyon Saint-Exupéry ?", a: "Depuis Crémieu, le transfert vers l'aéroport Lyon Saint-Exupéry est à partir de 55 €. Tarif fixe garanti, suivi des vols inclus, pas de supplément en cas de retard." },
              { q: "SPM Taxi dessert-il Morestel et le secteur Nord-Isère depuis Crémieu ?", a: "Oui. SPM Taxi intervient à Crémieu, Morestel, Saint-Romain-de-Jalionas, Villemoirieu, Optevoz et toutes les communes du secteur Nord-Isère. Appelez le 07 67 75 18 98." },
              { q: "Peut-on réserver un taxi de nuit à Crémieu ?", a: "Oui, SPM Taxi est disponible 7j/7, 24h/24 depuis Crémieu. Nuits, week-ends et jours fériés compris. Réservation recommandée la veille pour les vols matinaux." },
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
              { href: "/taxi-bourgoin-jallieu", label: "Taxi Bourgoin-Jallieu", desc: "Nord-Isère — conventionné CPAM" },
              { href: "/taxi-la-tour-du-pin", label: "Taxi La Tour-du-Pin", desc: "Nord-Isère — conventionné CPAM" },
              { href: "/taxi-conventionne-cpam", label: "Transport médical CPAM", desc: "Zéro avance de frais, tiers payant" },
              { href: "/transfert-aeroport-lyon", label: "Aéroport Lyon Saint-Exupéry", desc: "Depuis Crémieu à partir de 55 €" },
            ].map(({ href, label, desc }) => (
              <Link key={href} href={href} className="flex items-center justify-between gap-4 bg-white rounded-2xl p-5 border border-black/[0.06] hover:border-black/15 transition-colors group">
                <div><p className="text-sm font-semibold text-black mb-1">{label}</p><p className="text-xs text-[#555]">{desc}</p></div>
                <ArrowRight className="h-4 w-4 text-black/30 shrink-0 group-hover:translate-x-0.5 transition-transform" />
              </Link>
            ))}
          </div>
        </section>

        <div className="bg-black text-white rounded-3xl p-10 text-center">
          <h2 className="text-2xl font-semibold mb-3">Taxi à Crémieu — Réservez</h2>
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
        <p className="text-xs text-black/30">© 2026 SPM Taxi — Conventionné CPAM · Crémieu (38) · <Link href="/" className="underline underline-offset-2">Retour au site</Link></p>
      </footer>
    </div>
  );
}
