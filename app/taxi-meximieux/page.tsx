import type { Metadata } from "next";
import Link from "next/link";
import { ArrowLeft, Phone, MapPin, Clock, CheckCircle, ArrowRight, Star } from "lucide-react";

export const metadata: Metadata = {
  title: "Taxi Meximieux — SPM Taxi | Conventionné CPAM · Ain 01800",
  description:
    "Taxi à Meximieux (01800). Conventionné CPAM, aéroport Lyon Saint-Exupéry, transport médical remboursé, longue distance. Tiguan 7 places. 7j/7 24h/24. ☎ 07 67 75 18 98.",
  keywords: [
    "taxi Meximieux", "taxi Meximieux 01800", "taxi conventionné CPAM Meximieux",
    "transport médical Meximieux", "taxi aéroport Lyon Meximieux",
    "taxi Meximieux Ain", "taxi Meximieux Lyon", "taxi Meximieux nuit",
    "réserver taxi Meximieux", "chauffeur Meximieux", "VTC Meximieux",
    "taxi Meximieux Saint-Exupéry", "taxi médical Meximieux CPAM",
  ],
  alternates: { canonical: "https://taxispm.fr/taxi-meximieux" },
  openGraph: {
    title: "Taxi Meximieux — SPM Taxi | Ain (01800) · Conventionné CPAM",
    description: "Taxi à Meximieux. CPAM, aéroport Lyon, transport médical. Tiguan 7 places. 7j/7 24h/24. ☎ 07 67 75 18 98.",
    url: "https://taxispm.fr/taxi-meximieux",
    type: "website",
    locale: "fr_FR",
    images: [{ url: "/image/tiguan-front-quarter.webp", alt: "Taxi Meximieux — SPM Taxi Ain" }],
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": ["LocalBusiness", "TaxiService"],
      "@id": "https://taxispm.fr/#business",
      name: "SPM Taxi — Taxi Meximieux",
      telephone: "+33767751898",
      url: "https://taxispm.fr/taxi-meximieux",
      description:
        "SPM Taxi intervient à Meximieux (01800) pour vos transferts vers l'aéroport Lyon Saint-Exupéry, les gares, et les transports médicaux conventionnés CPAM. Volkswagen Tiguan 7 places, disponible 7j/7 24h/24.",
      address: {
        "@type": "PostalAddress",
        streetAddress: "951 route des hauts fourneaux",
        addressLocality: "Villebois",
        postalCode: "01150",
        addressRegion: "Auvergne-Rhône-Alpes",
        addressCountry: "FR",
      },
      areaServed: [
        { "@type": "City", name: "Meximieux", containedInPlace: { "@type": "AdministrativeArea", name: "Ain" } },
        { "@type": "City", name: "Pérouges" },
        { "@type": "City", name: "Montluel" },
        { "@type": "City", name: "Lyon" },
        { "@type": "Airport", name: "Aéroport Lyon Saint-Exupéry", iataCode: "LYS" },
      ],
      aggregateRating: { "@type": "AggregateRating", ratingValue: 4.9, reviewCount: 9, bestRating: 5, worstRating: 1 },
      openingHoursSpecification: [
        { "@type": "OpeningHoursSpecification", dayOfWeek: ["Monday","Tuesday","Wednesday","Thursday","Friday","Saturday","Sunday"], opens: "00:00", closes: "23:59" },
      ],
    },
    {
      "@type": "BreadcrumbList",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Accueil", item: "https://taxispm.fr" },
        { "@type": "ListItem", position: 2, name: "Taxi Meximieux", item: "https://taxispm.fr/taxi-meximieux" },
      ],
    },
    {
      "@type": "FAQPage",
      mainEntity: [
        {
          "@type": "Question",
          name: "Combien coûte un taxi de Meximieux à l'aéroport de Lyon ?",
          acceptedAnswer: { "@type": "Answer", text: "Le transfert de Meximieux vers l'aéroport Lyon Saint-Exupéry est à partir de 45 €. Tarif fixe garanti, suivi des vols inclus, aucun frais pour les retards. Devis gratuit au 07 67 75 18 98." },
        },
        {
          "@type": "Question",
          name: "Y a-t-il un taxi conventionné CPAM à Meximieux ?",
          acceptedAnswer: { "@type": "Answer", text: "Oui. SPM Taxi est conventionné par l'Assurance Maladie et prend en charge vos transports médicaux à Meximieux (01800) sur prescription médicale. Chimiothérapie, dialyse, hospitalisation. Zéro avance de frais." },
        },
      ],
    },
  ],
};

const trajets = [
  { dest: "Aéroport Lyon Saint-Exupéry", duree: "~25 min", prix: "à partir de 45 €" },
  { dest: "Lyon Centre", duree: "~30 min", prix: "à partir de 40 €" },
  { dest: "Ambérieu-en-Bugey", duree: "~25 min", prix: "sur devis" },
  { dest: "Bourg-en-Bresse", duree: "~45 min", prix: "à partir de 55 €" },
  { dest: "Montluel / Pérouges", duree: "~10 min", prix: "sur devis" },
  { dest: "Villebois / Lagnieu", duree: "~20 min", prix: "sur devis" },
];

export default function TaxiMeximieuxPage() {
  return (
    <div className="min-h-screen bg-[#f8f9fa] font-sans">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />

      <header className="bg-black text-white px-6 py-4 flex items-center gap-4">
        <Link href="/" className="flex items-center gap-2 text-white/60 hover:text-white transition-colors text-sm">
          <ArrowLeft className="h-4 w-4" />
          SPM Taxi
        </Link>
      </header>

      <main className="max-w-4xl mx-auto px-6 py-16">

        <div className="mb-16">
          <span className="text-[10px] font-bold tracking-[0.3em] uppercase text-black/40 mb-4 block">
            Taxi · Meximieux · Ain 01800
          </span>
          <h1 className="text-4xl sm:text-5xl font-semibold tracking-tight text-black leading-tight mb-6">
            Taxi Meximieux<br />
            <span className="text-black/30">Conventionné CPAM · 7j/7</span>
          </h1>
          <p className="text-base text-[#555] leading-relaxed max-w-2xl mb-4">
            SPM Taxi dessert Meximieux et ses environs — aéroport Lyon Saint-Exupéry à 25 min,
            transport médical CPAM remboursé, courses longue distance partout en France.
            Volkswagen Tiguan Allspace 7 places. Disponible 7j/7 24h/24.
          </p>
          <div className="flex items-center gap-2 mb-8">
            {[1,2,3,4,5].map((s) => <Star key={s} className="h-4 w-4 fill-black text-black" />)}
            <span className="text-sm font-semibold ml-1">4,9/5</span>
            <span className="text-sm text-[#888]">· 9 avis Google vérifiés</span>
          </div>
          <div className="flex flex-wrap gap-3">
            <a href="tel:+33767751898" className="inline-flex items-center gap-2 rounded-full bg-black text-white px-6 py-3 text-sm font-semibold hover:bg-[#111] transition-colors">
              <Phone className="h-4 w-4" />
              07 67 75 18 98
            </a>
            <a href="/#contact" className="inline-flex items-center gap-2 rounded-full border border-black/15 text-black px-6 py-3 text-sm font-semibold hover:border-black/30 transition-colors">
              Devis gratuit <ArrowRight className="h-4 w-4" />
            </a>
          </div>
        </div>

        <div className="grid grid-cols-3 gap-4 mb-16">
          {[
            { icon: Clock, label: "Disponibilité", value: "24h/24 · 7j/7" },
            { icon: MapPin, label: "Aéroport", value: "~25 min" },
            { icon: CheckCircle, label: "Conventionné", value: "CPAM 100%" },
          ].map(({ icon: Icon, label, value }) => (
            <div key={label} className="bg-white rounded-2xl p-5 border border-black/[0.06]">
              <Icon className="h-5 w-5 text-black/30 mb-3" />
              <p className="text-[10px] font-semibold tracking-wider uppercase text-black/40 mb-1">{label}</p>
              <p className="text-sm font-semibold text-black">{value}</p>
            </div>
          ))}
        </div>

        <section className="mb-16">
          <h2 className="text-2xl font-semibold tracking-tight text-black mb-8">Prix depuis Meximieux</h2>
          <div className="bg-white rounded-2xl border border-black/[0.06] overflow-hidden">
            {trajets.map((t, i) => (
              <div key={t.dest} className={`flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2 px-6 py-4 ${i !== trajets.length - 1 ? "border-b border-black/[0.06]" : ""}`}>
                <div className="flex items-center gap-3">
                  <MapPin className="h-4 w-4 text-black/25 shrink-0" />
                  <span className="text-sm font-medium text-black">{t.dest}</span>
                </div>
                <div className="flex items-center gap-4 shrink-0">
                  <span className="text-sm text-black/50">{t.duree}</span>
                  <span className="text-sm font-semibold text-black">{t.prix}</span>
                </div>
              </div>
            ))}
          </div>
          <p className="text-xs text-[#888] mt-3">Tarifs indicatifs · devis exact gratuit sous 2h.</p>
        </section>

        <section className="mb-16">
          <h2 className="text-2xl font-semibold tracking-tight text-black mb-8">FAQ — Taxi Meximieux</h2>
          <div className="space-y-4">
            {[
              { q: "Combien coûte un taxi de Meximieux à Lyon ?", a: "Le trajet Meximieux–Lyon Centre est à partir de 40 €. Tarif fixe, sans compteur. Pour un devis exact et gratuit, appelez le 07 67 75 18 98 ou remplissez le formulaire en ligne." },
              { q: "Y a-t-il un taxi conventionné CPAM à Meximieux ?", a: "Oui. SPM Taxi est agréé par l'Assurance Maladie pour les transports médicaux à Meximieux. Vos trajets vers les centres de soins (chimiothérapie, dialyse, hospitalisation) peuvent être pris en charge sur ordonnance médicale." },
              { q: "SPM Taxi dessert-il Pérouges depuis Meximieux ?", a: "Oui. Meximieux et Pérouges sont à 10 minutes l'un de l'autre. SPM Taxi couvre toute la zone Ain Est — Montluel, Meximieux, Pérouges, Ambérieu — avec un tarif fixe sur devis." },
            ].map(({ q, a }) => (
              <div key={q} className="bg-white rounded-2xl p-6 border border-black/[0.06]">
                <h3 className="text-sm font-semibold text-black mb-2">{q}</h3>
                <p className="text-sm text-[#555] leading-relaxed">{a}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="mb-16">
          <h2 className="text-2xl font-semibold tracking-tight text-black mb-6">Voir aussi</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {[
              { href: "/transfert-aeroport-lyon", label: "Transfert aéroport Lyon", desc: "25 min depuis Meximieux · suivi des vols" },
              { href: "/taxi-conventionne-cpam", label: "Transport médical CPAM", desc: "Zéro avance de frais · ordonnance médicale" },
              { href: "/taxi-amberieu-en-bugey", label: "Taxi Ambérieu-en-Bugey", desc: "Zone Ain · gare TGV · transport médical" },
              { href: "/taxi-montluel", label: "Taxi Montluel", desc: "Proche de Meximieux · aéroport 20 min" },
            ].map(({ href, label, desc }) => (
              <Link key={href} href={href} className="flex items-center justify-between gap-4 bg-white rounded-2xl p-5 border border-black/[0.06] hover:border-black/15 transition-colors group">
                <div>
                  <p className="text-sm font-semibold text-black mb-1">{label}</p>
                  <p className="text-xs text-[#555]">{desc}</p>
                </div>
                <ArrowRight className="h-4 w-4 text-black/30 shrink-0 group-hover:translate-x-0.5 transition-transform" />
              </Link>
            ))}
          </div>
        </section>

        <div className="bg-black text-white rounded-3xl p-10 text-center">
          <h2 className="text-2xl font-semibold mb-3">Votre taxi à Meximieux</h2>
          <p className="text-white/50 text-sm mb-8">Tarif fixe · 7j/7 24h/24 · Réponse sous 2h</p>
          <div className="flex flex-wrap justify-center gap-4">
            <a href="tel:+33767751898" className="inline-flex items-center gap-2 rounded-full bg-white text-black px-6 py-3 text-sm font-semibold hover:bg-white/90 transition-colors">
              <Phone className="h-4 w-4" />07 67 75 18 98
            </a>
            <a href="/#contact" className="inline-flex items-center gap-2 rounded-full border border-white/25 text-white px-6 py-3 text-sm font-semibold hover:border-white/50 transition-colors">
              Devis gratuit en ligne
            </a>
          </div>
        </div>

      </main>

      <footer className="border-t border-black/[0.06] px-6 py-8 text-center">
        <p className="text-xs text-black/30">
          © 2026 SPM — Taxi Meximieux · Ain (01800) ·{" "}
          <Link href="/" className="underline underline-offset-2">Retour au site</Link>
        </p>
      </footer>
    </div>
  );
}
