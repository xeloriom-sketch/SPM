import type { Metadata } from "next";
import Link from "next/link";
import { ArrowLeft, Phone, MapPin, Clock, CheckCircle, ArrowRight, Shield, Globe } from "lucide-react";

export const metadata: Metadata = {
  title: "Taxi Genève depuis Ain & Lyon — SPM Taxi | Aéroport GVA · 7j/7",
  description:
    "Taxi pour Genève depuis Villebois, Ambérieu, Lyon, Ain & Isère. Transfert aéroport Genève-Cointrin (GVA), hôtels, entreprises. Volkswagen Tiguan 7 places, tarif fixe, 7j/7 24h/24. ☎ 07 67 75 18 98.",
  keywords: [
    "taxi Genève depuis Ain", "taxi Genève depuis Lyon", "taxi Genève Cointrin",
    "transfert aéroport Genève GVA", "taxi Genève depuis Villebois",
    "taxi Genève depuis Ambérieu-en-Bugey", "taxi Genève hôtel",
    "taxi Genève entreprise", "taxi Genève congrès",
    "chauffeur privé Genève depuis France", "taxi transfrontalier Genève Ain",
    "taxi Genève Tignieu-Jameyzieu", "VTC Genève depuis Ain",
    "taxi Genève 7 places", "taxi Genève 24h24 7j7",
    "navette Genève depuis France Ain", "taxi longue distance Genève",
  ],
  alternates: { canonical: "https://taxispm.fr/taxi-geneve/" },
  openGraph: {
    title: "Taxi Genève depuis Ain & Lyon — SPM Taxi | Aéroport GVA",
    description:
      "Transfert vers Genève depuis l'Ain, Lyon et l'Isère Nord. Aéroport GVA, hôtels, entreprises. Tiguan 7 places, tarif fixe. ☎ 07 67 75 18 98.",
    url: "https://taxispm.fr/taxi-geneve/",
    type: "website",
    locale: "fr_FR",
    images: [{ url: "/image/tiguan-front-quarter.webp", alt: "Taxi SPM vers Genève — Volkswagen Tiguan 7 places" }],
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": ["LocalBusiness", "TaxiService"],
      "@id": "https://taxispm.fr/#business",
      name: "SPM Taxi",
      telephone: "+33767751898",
      url: "https://taxispm.fr",
      address: {
        "@type": "PostalAddress",
        streetAddress: "951 route des hauts fourneaux",
        addressLocality: "Villebois",
        postalCode: "01150",
        addressRegion: "Auvergne-Rhône-Alpes",
        addressCountry: "FR",
      },
      aggregateRating: {
        "@type": "AggregateRating",
        ratingValue: "4.9",
        ratingCount: "9",
        bestRating: "5",
        worstRating: "1",
      },
      areaServed: [
        { "@type": "City", name: "Genève" },
        { "@type": "City", name: "Villebois" },
        { "@type": "City", name: "Ambérieu-en-Bugey" },
        { "@type": "City", name: "Lyon" },
      ],
      openingHoursSpecification: [{
        "@type": "OpeningHoursSpecification",
        dayOfWeek: ["Monday","Tuesday","Wednesday","Thursday","Friday","Saturday","Sunday"],
        opens: "00:00", closes: "23:59",
      }],
    },
    {
      "@type": "BreadcrumbList",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Accueil", item: "https://taxispm.fr" },
        { "@type": "ListItem", position: 2, name: "Taxi Genève", item: "https://taxispm.fr/taxi-geneve/" },
      ],
    },
    {
      "@type": "FAQPage",
      mainEntity: [
        {
          "@type": "Question",
          name: "Combien coûte un taxi de Villebois à Genève ?",
          acceptedAnswer: { "@type": "Answer", text: "Depuis Villebois (Ain 01), un taxi pour Genève est estimé entre 160 € et 200 € selon l'heure et les conditions. Tarif fixe garanti, sans surprise. Appelez le 07 67 75 18 98 pour un devis gratuit." },
        },
        {
          "@type": "Question",
          name: "SPM Taxi peut-il me déposer directement à l'aéroport de Genève (GVA) ?",
          acceptedAnswer: { "@type": "Answer", text: "Oui, SPM Taxi assure les transferts vers l'aéroport international de Genève-Cointrin (GVA). Suivi de vol disponible pour adapter l'horaire de prise en charge." },
        },
        {
          "@type": "Question",
          name: "Y a-t-il des formalités à la frontière pour un taxi France-Genève ?",
          acceptedAnswer: { "@type": "Answer", text: "La frontière franco-suisse est généralement fluide. Munissez-vous d'une pièce d'identité valide. Pour les ressortissants non-UE, un passeport valide est requis." },
        },
      ],
    },
  ],
};

const services = [
  {
    icon: Globe,
    title: "Transfert aéroport Genève (GVA)",
    desc: "Prise en charge à domicile, dépôt direct au terminal GVA. Retour possible depuis l'aéroport. Suivi de vol en temps réel pour les arrivées.",
  },
  {
    icon: MapPin,
    title: "Genève depuis Ain & Isère Nord",
    desc: "Depuis Villebois, Ambérieu, Tignieu-Jameyzieu, Bourgoin-Jallieu, La Tour-du-Pin. Tarif fixe, confort premium, ponctualité garantie.",
  },
  {
    icon: Shield,
    title: "Voyages professionnels & affaires",
    desc: "Taxi discret et ponctuel pour vos déplacements professionnels vers Genève : congrès, hôtels d'affaires, sièges sociaux internationaux.",
  },
  {
    icon: Clock,
    title: "Disponible 7j/7 — 24h/24",
    desc: "Y compris les vols du soir et du matin. Réservation anticipée conseillée pour les départs tôt le matin ou les retours de nuit.",
  },
];

const destinations = [
  { from: "Villebois (Ain 01)", to: "Genève Centre", time: "~1h40" },
  { from: "Villebois (Ain 01)", to: "Aéroport GVA", time: "~1h45" },
  { from: "Ambérieu-en-Bugey", to: "Genève Centre", time: "~1h30" },
  { from: "Tignieu-Jameyzieu", to: "Genève Centre", time: "~1h45" },
  { from: "Lyon Centre", to: "Genève Centre", time: "~2h00" },
  { from: "Aéroport Lyon (LYS)", to: "Aéroport GVA", time: "~1h50" },
];

export default function GenevePage() {
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
            Taxi · Genève (Suisse) depuis Ain, Lyon & Isère
          </span>
          <h1 className="text-4xl sm:text-5xl font-semibold tracking-tight text-black leading-tight mb-6">
            Taxi pour<br />
            <span className="text-black/30">Genève</span>
          </h1>
          <p className="text-base text-[#555] leading-relaxed max-w-2xl mb-8">
            SPM Taxi assure vos transferts vers Genève depuis l'Ain et la région lyonnaise.
            Aéroport de Genève-Cointrin (GVA), hôtels d'affaires, congrès internationaux.
            Volkswagen Tiguan Allspace 7 places. Tarif fixe garanti, 7j/7, 24h/24. Note 4,9/5.
          </p>
          <div className="flex flex-wrap gap-3">
            <a
              href="tel:+33767751898"
              className="inline-flex items-center gap-2 rounded-full bg-black text-white px-6 py-3 text-sm font-semibold hover:bg-[#111] transition-colors"
            >
              <Phone className="h-4 w-4" />
              07 67 75 18 98
            </a>
            <a
              href="https://wa.me/33767751898?text=Bonjour%2C%20je%20souhaite%20r%C3%A9server%20un%20taxi%20pour%20Gen%C3%A8ve."
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-full bg-[#25D366] text-white px-6 py-3 text-sm font-semibold hover:bg-[#20bb5a] transition-colors"
            >
              WhatsApp
              <ArrowRight className="h-4 w-4" />
            </a>
            <a
              href="/#contact"
              className="inline-flex items-center gap-2 rounded-full border border-black/15 text-black px-6 py-3 text-sm font-semibold hover:border-black/30 transition-colors"
            >
              Devis gratuit
              <ArrowRight className="h-4 w-4" />
            </a>
          </div>
        </div>

        <section className="mb-16">
          <h2 className="text-2xl font-semibold tracking-tight text-black mb-8">Nos services vers Genève</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {services.map(({ icon: Icon, title, desc }) => (
              <div key={title} className="bg-white rounded-2xl p-6 border border-black/[0.06]">
                <Icon className="h-6 w-6 text-black mb-4" />
                <h3 className="text-sm font-semibold text-black mb-2">{title}</h3>
                <p className="text-xs text-[#555] leading-relaxed">{desc}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="mb-16">
          <h2 className="text-2xl font-semibold tracking-tight text-black mb-8">Temps de trajet vers Genève</h2>
          <div className="bg-white rounded-2xl border border-black/[0.06] overflow-hidden">
            {destinations.map((d, i) => (
              <div key={d.from} className={`flex items-center justify-between px-6 py-4 ${i !== destinations.length - 1 ? "border-b border-black/[0.06]" : ""}`}>
                <div className="flex items-center gap-3">
                  <MapPin className="h-4 w-4 text-black/25 shrink-0" />
                  <span className="text-sm font-medium text-black">{d.from} → {d.to}</span>
                </div>
                <span className="text-sm font-semibold text-black/50">{d.time}</span>
              </div>
            ))}
          </div>
          <p className="text-xs text-[#888] mt-3">Temps indicatifs hors trafic et contrôle frontalier.</p>
        </section>

        <section className="mb-16">
          <h2 className="text-2xl font-semibold tracking-tight text-black mb-8">Questions fréquentes</h2>
          <div className="space-y-4">
            {[
              {
                q: "Combien coûte un taxi de Villebois à Genève ?",
                a: "Depuis Villebois (Ain 01), un taxi pour Genève est estimé entre 160 € et 200 € selon l'heure. Tarif fixe garanti, pas de surprise en fin de trajet. Demandez un devis gratuit au 07 67 75 18 98.",
              },
              {
                q: "SPM Taxi dessert-il l'aéroport de Genève (GVA) ?",
                a: "Oui, nous assurons les transferts vers l'aéroport international de Genève-Cointrin (GVA). Pour les arrivées, nous suivons votre vol en temps réel et adaptons l'heure de prise en charge.",
              },
              {
                q: "Faut-il des documents particuliers pour traverser la frontière ?",
                a: "Une pièce d'identité (carte nationale ou passeport) est requise pour les ressortissants UE. Pour les non-ressortissants UE, le passeport valide est obligatoire.",
              },
              {
                q: "Le taxi peut-il transporter mes bagages volumineux pour Genève ?",
                a: "Oui, le Volkswagen Tiguan Allspace 7 places dispose d'un grand coffre. Idéal pour les voyages d'affaires ou familiaux vers Genève avec plusieurs bagages.",
              },
            ].map(({ q, a }) => (
              <div key={q} className="bg-white rounded-2xl p-6 border border-black/[0.06]">
                <h3 className="text-sm font-semibold text-black mb-2">{q}</h3>
                <p className="text-sm text-[#555] leading-relaxed">{a}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="mb-16">
          <h2 className="text-2xl font-semibold tracking-tight text-black mb-8">Autres destinations</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {[
              { href: "/transfert-aeroport-lyon", label: "Aéroport Lyon Saint-Exupéry", desc: "À partir de 65 € · suivi des vols en temps réel" },
              { href: "/taxi-longue-distance", label: "Longue distance France", desc: "Paris, Marseille, Nice — tarif fixe sur devis" },
              { href: "/taxi-grenoble", label: "Taxi Grenoble", desc: "CHU Grenoble · CPAM · Isère" },
              { href: "/taxi-lyon", label: "Taxi Lyon", desc: "Gare Part-Dieu, hôpitaux, aéroport LYS" },
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
          <h2 className="text-2xl font-semibold mb-3">Taxi Genève — Réservez maintenant</h2>
          <p className="text-white/50 text-sm mb-8">Tarif fixe · 7j/7 24h/24 · Aéroport GVA · Note 4,9/5 ⭐</p>
          <div className="flex flex-wrap gap-3 justify-center">
            <a href="tel:+33767751898" className="inline-flex items-center gap-2 rounded-full bg-white text-black px-6 py-3 text-sm font-semibold hover:bg-white/90 transition-colors">
              <Phone className="h-4 w-4" />
              07 67 75 18 98
            </a>
            <a
              href="https://wa.me/33767751898?text=Bonjour%2C%20je%20souhaite%20r%C3%A9server%20un%20taxi%20pour%20Gen%C3%A8ve."
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-full bg-[#25D366] text-white px-6 py-3 text-sm font-semibold hover:bg-[#20bb5a] transition-colors"
            >
              WhatsApp
            </a>
          </div>
        </div>

      </main>

      <footer className="border-t border-black/[0.06] px-6 py-8 text-center">
        <p className="text-xs text-black/30">
          © 2026 SPM — Taxi · Villebois (Ain 01) · Tignieu-Jameyzieu (Isère 38) ·{" "}
          <Link href="/" className="underline underline-offset-2">Retour au site</Link>
        </p>
      </footer>
    </div>
  );
}
