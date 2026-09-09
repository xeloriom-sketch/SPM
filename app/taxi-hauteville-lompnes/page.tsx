import type { Metadata } from "next";
import Link from "next/link";
import { ArrowLeft, Phone, MapPin, Clock, CheckCircle, ArrowRight, Shield, Heart } from "lucide-react";

export const metadata: Metadata = {
  title: "Taxi Hauteville-Lompnes — Centre Médical CPAM · Ain · SPM Taxi",
  description:
    "Taxi conventionné CPAM pour Hauteville-Lompnes (01110) : Centre Médical de Hauteville, cures thermales, rééducation. Depuis Villebois, Ambérieu, Tignieu, Ain & Isère. Volkswagen Tiguan 7 places. 7j/7 24h/24. ☎ 07 67 75 18 98.",
  keywords: [
    "taxi Hauteville-Lompnes", "taxi Hauteville conventionné CPAM",
    "transport médical Hauteville-Lompnes", "taxi Centre Médical Hauteville",
    "taxi centre de rééducation Hauteville", "taxi Hauteville depuis Ain",
    "taxi Hauteville-Lompnes 01110", "taxi CPAM Hauteville-Lompnes",
    "taxi Hauteville depuis Ambérieu", "taxi Hauteville depuis Villebois",
    "taxi Hauteville depuis Tignieu-Jameyzieu", "taxi cure Hauteville-Lompnes",
    "transport sanitaire Hauteville CPAM", "taxi remboursé Hauteville",
    "taxi Hauteville Ain 01", "navette Centre Médical Hauteville",
  ],
  alternates: { canonical: "https://taxispm.fr/taxi-hauteville-lompnes/" },
  openGraph: {
    title: "Taxi Hauteville-Lompnes — Conventionné CPAM · Centre Médical · SPM Taxi",
    description:
      "Taxi pour le Centre Médical de Hauteville-Lompnes. Conventionné CPAM, remboursement Assurance Maladie sur prescription. Tiguan 7 places, 7j/7 24h/24. ☎ 07 67 75 18 98.",
    url: "https://taxispm.fr/taxi-hauteville-lompnes/",
    type: "website",
    locale: "fr_FR",
    images: [{ url: "/image/tiguan-front-quarter.webp", alt: "Taxi SPM vers Hauteville-Lompnes — Volkswagen Tiguan 7 places" }],
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
        { "@type": "City", name: "Hauteville-Lompnes" },
        { "@type": "City", name: "Villebois" },
        { "@type": "City", name: "Ambérieu-en-Bugey" },
        { "@type": "City", name: "Tignieu-Jameyzieu" },
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
        { "@type": "ListItem", position: 2, name: "Taxi Hauteville-Lompnes", item: "https://taxispm.fr/taxi-hauteville-lompnes/" },
      ],
    },
    {
      "@type": "FAQPage",
      mainEntity: [
        {
          "@type": "Question",
          name: "Le trajet en taxi vers Hauteville-Lompnes est-il remboursé par la CPAM ?",
          acceptedAnswer: { "@type": "Answer", text: "Oui, SPM Taxi est conventionné CPAM. Sur prescription médicale de transport (formulaire S3138), le trajet vers le Centre Médical de Hauteville-Lompnes peut être remboursé par l'Assurance Maladie jusqu'à 100% selon votre situation (ALD, invalidité...)." },
        },
        {
          "@type": "Question",
          name: "Combien coûte un taxi de Villebois à Hauteville-Lompnes ?",
          acceptedAnswer: { "@type": "Answer", text: "Depuis Villebois (Ain 01), un taxi pour Hauteville-Lompnes coûte entre 70 € et 90 €. Tarif fixe garanti. Sur prescription CPAM, le montant peut être pris en charge par l'Assurance Maladie. Appelez le 07 67 75 18 98 pour un devis." },
        },
        {
          "@type": "Question",
          name: "Peut-on prendre le taxi pour plusieurs séances de rééducation à Hauteville ?",
          acceptedAnswer: { "@type": "Answer", text: "Oui, SPM Taxi assure les transports réguliers pour les cures, hospitalisations et séances de rééducation au Centre Médical de Hauteville. Nous établissons un planning hebdomadaire pour simplifier vos déplacements." },
        },
        {
          "@type": "Question",
          name: "SPM Taxi peut-il transporter des patients en fauteuil roulant vers Hauteville ?",
          acceptedAnswer: { "@type": "Answer", text: "Oui, le Volkswagen Tiguan Allspace 7 places accepte les personnes à mobilité réduite. Merci de le préciser à la réservation pour une organisation optimale." },
        },
      ],
    },
  ],
};

const services = [
  {
    icon: Heart,
    title: "Centre Médical de Hauteville — CPAM",
    desc: "SPM Taxi est agréé CPAM. Vos trajets vers le Centre Médical de Hauteville-Lompnes (rééducation, cures, hospitalisation) sont remboursables sur prescription médicale.",
  },
  {
    icon: Shield,
    title: "Zéro avance de frais",
    desc: "En tiers payant, vous n'avancez rien. SPM Taxi facture directement l'Assurance Maladie. Apportez simplement votre bon de transport (formulaire S3138).",
  },
  {
    icon: Clock,
    title: "Transport régulier & planning",
    desc: "Pour les cures de plusieurs semaines, nous établissons un planning fixe aller-retour. Départ ponctuel garanti à l'heure choisie.",
  },
  {
    icon: CheckCircle,
    title: "Volkswagen Tiguan 7 places",
    desc: "Confort premium pour les trajets de montagne. PMR acceptés. Climatisation, espace bagages pour vos affaires personnelles lors des séjours prolongés.",
  },
];

const destinations = [
  { from: "Villebois (Ain 01)", to: "Hauteville-Lompnes", time: "~1h10" },
  { from: "Ambérieu-en-Bugey", to: "Hauteville-Lompnes", time: "~1h05" },
  { from: "Tignieu-Jameyzieu", to: "Hauteville-Lompnes", time: "~1h25" },
  { from: "Bourgoin-Jallieu", to: "Hauteville-Lompnes", time: "~1h30" },
  { from: "La Tour-du-Pin", to: "Hauteville-Lompnes", time: "~1h20" },
  { from: "Lyon Centre", to: "Hauteville-Lompnes", time: "~1h40" },
];

export default function HautevilleLompnesPage() {
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
            Taxi · Hauteville-Lompnes (Ain 01110) · Transport médical CPAM
          </span>
          <h1 className="text-4xl sm:text-5xl font-semibold tracking-tight text-black leading-tight mb-6">
            Taxi pour<br />
            <span className="text-black/30">Hauteville-Lompnes</span>
          </h1>
          <p className="text-base text-[#555] leading-relaxed max-w-2xl mb-8">
            SPM Taxi est conventionné CPAM pour vos transports vers le Centre Médical de Hauteville-Lompnes :
            rééducation, cures, hospitalisation. Depuis Villebois, Ambérieu-en-Bugey, Tignieu-Jameyzieu
            et toute l'Ain. Volkswagen Tiguan 7 places, 7j/7, 24h/24. Note Google 4,9/5.
          </p>

          {/* Badge CPAM */}
          <div className="inline-flex items-center gap-2 rounded-full bg-black/5 border border-black/10 px-4 py-2 mb-6">
            <Shield className="h-3.5 w-3.5 text-black" />
            <span className="text-xs font-semibold text-black">Conventionné CPAM — Transport remboursé Assurance Maladie</span>
          </div>

          <div className="flex flex-wrap gap-3">
            <a
              href="tel:+33767751898"
              className="inline-flex items-center gap-2 rounded-full bg-black text-white px-6 py-3 text-sm font-semibold hover:bg-[#111] transition-colors"
            >
              <Phone className="h-4 w-4" />
              07 67 75 18 98
            </a>
            <a
              href="https://wa.me/33767751898?text=Bonjour%2C%20je%20souhaite%20r%C3%A9server%20un%20taxi%20pour%20Hauteville-Lompnes."
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

        {/* Info CPAM box */}
        <div className="bg-black text-white rounded-2xl p-6 mb-10 flex gap-4">
          <Heart className="h-5 w-5 text-white/50 shrink-0 mt-0.5" />
          <div>
            <p className="text-sm font-semibold mb-1">Transport pris en charge par la CPAM</p>
            <p className="text-xs text-white/60 leading-relaxed">
              Sur prescription médicale (formulaire S3138), votre médecin prescrit le transport vers le Centre Médical de Hauteville-Lompnes. SPM Taxi facture directement l'Assurance Maladie. Prise en charge de 65% à 100% selon votre situation (ALD, maternité, accident du travail…).
            </p>
          </div>
        </div>

        <section className="mb-16">
          <h2 className="text-2xl font-semibold tracking-tight text-black mb-8">Nos services vers Hauteville-Lompnes</h2>
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
          <h2 className="text-2xl font-semibold tracking-tight text-black mb-8">Temps de trajet vers Hauteville-Lompnes</h2>
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
          <p className="text-xs text-[#888] mt-3">Temps indicatifs hors trafic.</p>
        </section>

        <section className="mb-16">
          <h2 className="text-2xl font-semibold tracking-tight text-black mb-8">Questions fréquentes</h2>
          <div className="space-y-4">
            {[
              {
                q: "Le trajet vers Hauteville-Lompnes est-il remboursé par la CPAM ?",
                a: "Oui, SPM Taxi est agréé CPAM. Sur prescription médicale (formulaire S3138), le transport vers le Centre Médical de Hauteville peut être remboursé de 65 % à 100 % selon votre situation (ALD, invalidité, maternité…). Renseignez-vous auprès de votre médecin.",
              },
              {
                q: "Combien coûte un taxi de Villebois à Hauteville-Lompnes ?",
                a: "Depuis Villebois (Ain 01), comptez entre 70 € et 90 € selon l'heure. En cas de prise en charge CPAM, vous n'avancez rien : SPM Taxi facture directement l'Assurance Maladie. Appelez le 07 67 75 18 98 pour un devis.",
              },
              {
                q: "Peut-on organiser des transports réguliers pour une cure à Hauteville ?",
                a: "Oui, nous gérons les plannings de transport sur plusieurs semaines ou mois. Un horaire fixe aller-retour est établi en accord avec vous. Idéal pour les hospitalisations longues ou les cures de rééducation.",
              },
              {
                q: "Comment demander un bon de transport CPAM pour Hauteville-Lompnes ?",
                a: "Demandez à votre médecin traitant de remplir un bon de transport (formulaire Cerfa S3138). Ce document est indispensable pour que la CPAM rembourse votre taxi. SPM Taxi se charge du reste.",
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
          <h2 className="text-2xl font-semibold tracking-tight text-black mb-8">Nos services CPAM & médicaux</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {[
              { href: "/taxi-conventionne-cpam", label: "Transport médical CPAM", desc: "Tous types de transports médicaux — prescriptions, dialyse, chimio" },
              { href: "/taxi-amberieu-en-bugey", label: "Taxi Ambérieu-en-Bugey", desc: "Hôpital Fleyriat, cliniques de l'Ain" },
              { href: "/taxi-grenoble", label: "Taxi Grenoble", desc: "CHU Grenoble, cliniques Isère · conventionné CPAM" },
              { href: "/taxi-lyon", label: "Taxi Lyon & Hôpitaux lyonnais", desc: "Hôpital Édouard-Herriot, HCL, Croix-Rousse" },
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
          <h2 className="text-2xl font-semibold mb-3">Taxi Hauteville-Lompnes — Réservez maintenant</h2>
          <p className="text-white/50 text-sm mb-8">Conventionné CPAM · 7j/7 24h/24 · Transport remboursable · Note 4,9/5 ⭐</p>
          <div className="flex flex-wrap gap-3 justify-center">
            <a href="tel:+33767751898" className="inline-flex items-center gap-2 rounded-full bg-white text-black px-6 py-3 text-sm font-semibold hover:bg-white/90 transition-colors">
              <Phone className="h-4 w-4" />
              07 67 75 18 98
            </a>
            <a
              href="https://wa.me/33767751898?text=Bonjour%2C%20je%20souhaite%20r%C3%A9server%20un%20taxi%20pour%20Hauteville-Lompnes."
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
          © 2026 SPM — Taxi Conventionné CPAM · Villebois (Ain 01) · Tignieu-Jameyzieu (Isère 38) ·{" "}
          <Link href="/" className="underline underline-offset-2">Retour au site</Link>
        </p>
      </footer>
    </div>
  );
}
