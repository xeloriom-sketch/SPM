import type { Metadata } from "next";
import Link from "next/link";
import { ArrowLeft, Phone, MapPin, Clock, CheckCircle, ArrowRight, Star } from "lucide-react";

export const metadata: Metadata = {
  title: "Taxi Ambérieu-en-Bugey — SPM Taxi | Conventionné CPAM · 7j/7",
  description:
    "Taxi à Ambérieu-en-Bugey (01500). Conventionné CPAM, aéroport Lyon Saint-Exupéry, gare TGV, transport médical remboursé. Volkswagen Tiguan 7 places. Disponible 7j/7 24h/24. ☎ 07 67 75 18 98.",
  keywords: [
    "taxi Ambérieu-en-Bugey", "taxi Ambérieu", "taxi Ambérieu 01500",
    "taxi conventionné CPAM Ambérieu", "transport médical Ambérieu",
    "taxi aéroport Lyon depuis Ambérieu", "taxi gare Ambérieu",
    "taxi Ambérieu-en-Bugey CPAM", "taxi médical Ambérieu Ain",
    "VTC Ambérieu-en-Bugey", "chauffeur taxi Ambérieu",
    "taxi Ambérieu Lyon Saint-Exupéry", "taxi Ambérieu nuit week-end",
    "réserver taxi Ambérieu", "taxi 01500",
  ],
  alternates: { canonical: "https://taxispm.fr/taxi-amberieu-en-bugey" },
  openGraph: {
    title: "Taxi Ambérieu-en-Bugey — SPM Taxi | Ain (01) · Conventionné CPAM",
    description:
      "Taxi à Ambérieu-en-Bugey. Transport médical CPAM, aéroport Lyon, gare TGV. Volkswagen Tiguan 7 places. 7j/7 24h/24. ☎ 07 67 75 18 98.",
    url: "https://taxispm.fr/taxi-amberieu-en-bugey",
    type: "website",
    locale: "fr_FR",
    images: [{ url: "/image/tiguan-front-quarter.webp", alt: "Taxi Ambérieu-en-Bugey — SPM Taxi Ain" }],
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": ["LocalBusiness", "TaxiService"],
      "@id": "https://taxispm.fr/#business",
      name: "SPM Taxi — Taxi Ambérieu-en-Bugey",
      telephone: "+33767751898",
      url: "https://taxispm.fr/taxi-amberieu-en-bugey",
      description:
        "SPM Taxi intervient à Ambérieu-en-Bugey (01500) pour vos courses locales, transferts vers l'aéroport Lyon Saint-Exupéry, la gare TGV d'Ambérieu, et les transports médicaux conventionnés CPAM. Volkswagen Tiguan 7 places, disponible 7j/7 24h/24.",
      address: {
        "@type": "PostalAddress",
        streetAddress: "951 route des hauts fourneaux",
        addressLocality: "Villebois",
        postalCode: "01150",
        addressRegion: "Auvergne-Rhône-Alpes",
        addressCountry: "FR",
      },
      areaServed: [
        { "@type": "City", name: "Ambérieu-en-Bugey", containedInPlace: { "@type": "AdministrativeArea", name: "Ain" } },
        { "@type": "City", name: "Lagnieu" },
        { "@type": "City", name: "Villebois" },
        { "@type": "City", name: "Lyon" },
        { "@type": "Airport", name: "Aéroport Lyon Saint-Exupéry", iataCode: "LYS" },
        { "@type": "TrainStation", name: "Gare d'Ambérieu-en-Bugey" },
      ],
      aggregateRating: { "@type": "AggregateRating", ratingValue: 4.9, reviewCount: 9, bestRating: 5, worstRating: 1 },
      openingHoursSpecification: [
        {
          "@type": "OpeningHoursSpecification",
          dayOfWeek: ["Monday","Tuesday","Wednesday","Thursday","Friday","Saturday","Sunday"],
          opens: "00:00", closes: "23:59",
        },
      ],
    },
    {
      "@type": "BreadcrumbList",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Accueil", item: "https://taxispm.fr" },
        { "@type": "ListItem", position: 2, name: "Taxi Ambérieu-en-Bugey", item: "https://taxispm.fr/taxi-amberieu-en-bugey" },
      ],
    },
    {
      "@type": "FAQPage",
      mainEntity: [
        {
          "@type": "Question",
          name: "Combien coûte un taxi d'Ambérieu-en-Bugey à l'aéroport de Lyon ?",
          acceptedAnswer: { "@type": "Answer", text: "Le transfert d'Ambérieu-en-Bugey vers l'aéroport Lyon Saint-Exupéry est à partir de 65 €. Tarif fixe garanti, sans compteur. Suivi des vols en temps réel inclus, aucun frais pour les retards. Devis gratuit au 07 67 75 18 98." },
        },
        {
          "@type": "Question",
          name: "Y a-t-il un taxi conventionné CPAM à Ambérieu-en-Bugey ?",
          acceptedAnswer: { "@type": "Answer", text: "Oui. SPM Taxi est conventionné par l'Assurance Maladie et intervient à Ambérieu-en-Bugey (01500) pour tous vos transports médicaux sur prescription : chimiothérapie, dialyse, hospitalisation, ALD. Zéro avance de frais." },
        },
        {
          "@type": "Question",
          name: "Peut-on prendre un taxi de nuit à Ambérieu-en-Bugey ?",
          acceptedAnswer: { "@type": "Answer", text: "Oui, SPM Taxi est disponible 7j/7, 24h/24 à Ambérieu-en-Bugey, y compris la nuit, les week-ends et jours fériés. Idéal pour les vols tôt le matin ou les retours tardifs de Lyon Saint-Exupéry." },
        },
      ],
    },
  ],
};

const trajets = [
  { dest: "Aéroport Lyon Saint-Exupéry", duree: "~40 min", prix: "à partir de 65 €" },
  { dest: "Lyon Centre / Part-Dieu", duree: "~45 min", prix: "à partir de 55 €" },
  { dest: "Lyon Perrache", duree: "~50 min", prix: "à partir de 55 €" },
  { dest: "Gare TGV Ambérieu", duree: "5 min", prix: "sur devis" },
  { dest: "Bourg-en-Bresse", duree: "~35 min", prix: "à partir de 45 €" },
  { dest: "Villebois / Lagnieu", duree: "~10 min", prix: "sur devis" },
];

export default function TaxiAmBerieuPage() {
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

        {/* Hero */}
        <div className="mb-16">
          <span className="text-[10px] font-bold tracking-[0.3em] uppercase text-black/40 mb-4 block">
            Taxi · Ambérieu-en-Bugey · Ain 01500
          </span>
          <h1 className="text-4xl sm:text-5xl font-semibold tracking-tight text-black leading-tight mb-6">
            Taxi Ambérieu-en-Bugey<br />
            <span className="text-black/30">Conventionné CPAM · 7j/7</span>
          </h1>
          <p className="text-base text-[#555] leading-relaxed max-w-2xl mb-4">
            SPM Taxi assure vos déplacements depuis et vers Ambérieu-en-Bugey — aéroport Lyon
            Saint-Exupéry, gare TGV, hôpitaux, transports médicaux remboursés CPAM.
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

        {/* Stats */}
        <div className="grid grid-cols-3 gap-4 mb-16">
          {[
            { icon: Clock, label: "Disponibilité", value: "24h/24 · 7j/7" },
            { icon: MapPin, label: "Départ", value: "Ambérieu & Ain" },
            { icon: CheckCircle, label: "Conventionné", value: "CPAM 100%" },
          ].map(({ icon: Icon, label, value }) => (
            <div key={label} className="bg-white rounded-2xl p-5 border border-black/[0.06]">
              <Icon className="h-5 w-5 text-black/30 mb-3" />
              <p className="text-[10px] font-semibold tracking-wider uppercase text-black/40 mb-1">{label}</p>
              <p className="text-sm font-semibold text-black">{value}</p>
            </div>
          ))}
        </div>

        {/* Trajets & tarifs */}
        <section className="mb-16">
          <h2 className="text-2xl font-semibold tracking-tight text-black mb-8">
            Prix et durées depuis Ambérieu-en-Bugey
          </h2>
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

        {/* Services à Ambérieu */}
        <section className="mb-16">
          <h2 className="text-2xl font-semibold tracking-tight text-black mb-8">
            Nos services à Ambérieu-en-Bugey
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {[
              { title: "Transport médical CPAM", desc: "Chimiothérapie, dialyse, ALD, hospitalisations. Prise en charge Assurance Maladie sur ordonnance. Zéro avance de frais." },
              { title: "Aéroport Lyon Saint-Exupéry", desc: "Prise en charge à domicile à Ambérieu. Suivi des vols en temps réel. Aucun frais pour les retards de vol." },
              { title: "Gare TGV Ambérieu", desc: "Dépose et récupération à la gare d'Ambérieu. Idéal pour les correspondances TGV vers Paris ou Marseille." },
              { title: "Courses locales & longue distance", desc: "Courses dans l'Ain, vers Lyon, Bourg-en-Bresse, Genève. Tarif fixe négocié avant le départ." },
              { title: "Transport 7 places", desc: "Volkswagen Tiguan Allspace — parfait pour les familles, groupes, ou bagages volumineux." },
              { title: "Nuit, week-end & jours fériés", desc: "Disponible à toute heure pour vos vols matinaux ou retours tardifs, sans supplément de réservation." },
            ].map(({ title, desc }) => (
              <div key={title} className="bg-white rounded-2xl p-5 border border-black/[0.06]">
                <div className="flex items-start gap-3">
                  <CheckCircle className="h-4 w-4 text-black/40 shrink-0 mt-0.5" />
                  <div>
                    <p className="text-sm font-semibold text-black mb-1">{title}</p>
                    <p className="text-xs text-[#555] leading-relaxed">{desc}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* FAQ */}
        <section className="mb-16">
          <h2 className="text-2xl font-semibold tracking-tight text-black mb-8">
            Questions fréquentes — Taxi Ambérieu-en-Bugey
          </h2>
          <div className="space-y-4">
            {[
              {
                q: "Combien coûte un taxi d'Ambérieu-en-Bugey à l'aéroport de Lyon ?",
                a: "Le transfert depuis Ambérieu-en-Bugey vers l'aéroport Lyon Saint-Exupéry est à partir de 65 €. Tarif fixe garanti avant le départ. Le suivi des vols est inclus — aucun frais en cas de retard. Devis gratuit au 07 67 75 18 98.",
              },
              {
                q: "Y a-t-il un taxi conventionné CPAM à Ambérieu-en-Bugey ?",
                a: "Oui. SPM Taxi est agréé par l'Assurance Maladie pour les transports médicaux à Ambérieu-en-Bugey et dans tout l'Ain (01). Chimiothérapie, dialyse, hospitalisation, ALD — zéro avance de frais, facturation directe à l'Assurance Maladie.",
              },
              {
                q: "Le taxi est-il disponible la nuit à Ambérieu-en-Bugey ?",
                a: "Oui. SPM Taxi est disponible 7 jours sur 7 et 24 heures sur 24 à Ambérieu-en-Bugey, y compris la nuit, les week-ends et les jours fériés.",
              },
              {
                q: "Peut-on réserver un taxi pour la gare TGV d'Ambérieu ?",
                a: "Oui. SPM Taxi assure les navettes vers la gare TGV d'Ambérieu-en-Bugey pour vos correspondances vers Paris, Marseille, Lyon et le reste de la France.",
              },
            ].map(({ q, a }) => (
              <div key={q} className="bg-white rounded-2xl p-6 border border-black/[0.06]">
                <h3 className="text-sm font-semibold text-black mb-2">{q}</h3>
                <p className="text-sm text-[#555] leading-relaxed">{a}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Liens internes */}
        <section className="mb-16">
          <h2 className="text-2xl font-semibold tracking-tight text-black mb-6">Voir aussi</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {[
              { href: "/transfert-aeroport-lyon", label: "Transfert aéroport Lyon", desc: "SPM Taxi · Suivi des vols inclus" },
              { href: "/taxi-conventionne-cpam", label: "Transport médical CPAM", desc: "Zéro avance de frais · ordonnance médicale" },
              { href: "/taxi-lyon", label: "Taxi Lyon depuis l'Ain", desc: "Centre, hôpitaux, Part-Dieu, Perrache" },
              { href: "/taxi-tignieu-jameyzieu", label: "Taxi Tignieu-Jameyzieu", desc: "Zone Isère · Ain · départ immédiat" },
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

        {/* CTA */}
        <div className="bg-black text-white rounded-3xl p-10 text-center">
          <h2 className="text-2xl font-semibold mb-3">Votre taxi à Ambérieu-en-Bugey</h2>
          <p className="text-white/50 text-sm mb-8">Tarif fixe · 7j/7 24h/24 · Réponse sous 2h</p>
          <div className="flex flex-wrap justify-center gap-4">
            <a href="tel:+33767751898" className="inline-flex items-center gap-2 rounded-full bg-white text-black px-6 py-3 text-sm font-semibold hover:bg-white/90 transition-colors">
              <Phone className="h-4 w-4" />
              07 67 75 18 98
            </a>
            <a href="/#contact" className="inline-flex items-center gap-2 rounded-full border border-white/25 text-white px-6 py-3 text-sm font-semibold hover:border-white/50 transition-colors">
              Devis gratuit en ligne
            </a>
          </div>
        </div>

      </main>

      <footer className="border-t border-black/[0.06] px-6 py-8 text-center">
        <p className="text-xs text-black/30">
          © 2026 SPM — Taxi Ambérieu-en-Bugey · Ain (01) ·{" "}
          <Link href="/" className="underline underline-offset-2">Retour au site</Link>
        </p>
      </footer>
    </div>
  );
}
