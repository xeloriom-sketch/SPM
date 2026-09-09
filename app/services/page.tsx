import type { Metadata } from "next";
import Link from "next/link";
import { Phone, MapPin, ArrowRight, Clock, Shield, CheckCircle, Car, Package, Anchor, Route, Stethoscope } from "lucide-react";

export const metadata: Metadata = {
  title: "Services SPM Taxi — Aéroport, CPAM, Remorque, Longue Distance | Ain (01)",
  description:
    "SPM Taxi propose 5 services professionnels : transferts aéroport Lyon Saint-Exupéry, transport médical CPAM remboursé, colis urgents, taxi avec remorque, longue distance France entière. Villebois Ain 01. ☎ 07 67 75 18 98. Devis gratuit sous 2h.",
  keywords: [
    "services taxi Ain", "taxi aéroport Lyon Saint-Exupéry", "taxi médical CPAM Ain",
    "transport médical conventionné Ain", "colis urgent taxi Ain", "taxi remorque Ain 01",
    "taxi longue distance Lyon", "taxi conventionné prescription médicale",
    "taxi 7 places services", "taxi Villebois services", "transfert gare TGV Ain",
    "taxi chimiothérapie Ain", "taxi dialyse Ain", "VSL taxi Ain",
  ],
  openGraph: {
    title: "Services SPM Taxi — Aéroport, CPAM, Colis, Remorque | Ain 01",
    description: "5 services professionnels : transferts aéroport, transport médical CPAM remboursé, colis urgents, remorque, longue distance. Villebois Ain. 7j/7 24h/24.",
    url: "https://taxispm.fr/services/",
    type: "website", locale: "fr_FR",
    images: [{ url: "/image/tiguan-front-quarter.webp", alt: "SPM Taxi Services — Ain 01" }],
  },
  alternates: { canonical: "https://taxispm.fr/services/" },
  robots: { index: true, follow: true },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": ["LocalBusiness", "TaxiService"],
      "@id": "https://taxispm.fr/#business",
      name: "SPM Taxi",
      telephone: "+33767751898",
      url: "https://taxispm.fr/services/",
      description: "SPM Taxi — 5 services professionnels depuis Villebois (Ain 01) : transferts aéroport, transport médical CPAM, colis urgents, remorque, longue distance. 7j/7 24h/24.",
      address: { "@type": "PostalAddress", streetAddress: "951 route des hauts fourneaux", addressLocality: "Villebois", postalCode: "01150", addressRegion: "Auvergne-Rhône-Alpes", addressCountry: "FR" },
      hasOfferCatalog: {
        "@type": "OfferCatalog",
        name: "Services SPM Taxi",
        itemListElement: [
          { "@type": "Offer", itemOffered: { "@type": "Service", name: "Transfert Aéroport Lyon Saint-Exupéry", description: "Prise en charge à domicile, suivi des vols en temps réel, tarif fixe garanti." } },
          { "@type": "Offer", itemOffered: { "@type": "Service", name: "Transport médical conventionné CPAM", description: "Zéro avance de frais sur prescription médicale. Dialyse, chimiothérapie, consultations." } },
          { "@type": "Offer", itemOffered: { "@type": "Service", name: "Colis et courriers urgents", description: "Livraison rapide porte-à-porte. Traçabilité garantie partout en France." } },
          { "@type": "Offer", itemOffered: { "@type": "Service", name: "Taxi avec remorque", description: "Attache-remorque homologuée. Transport de matériel lourd, véhicules en panne." } },
          { "@type": "Offer", itemOffered: { "@type": "Service", name: "Longue distance France entière", description: "De Lyon à Paris, Marseille, Bordeaux, Genève. Sur devis, confort absolu." } },
        ],
      },
      aggregateRating: { "@type": "AggregateRating", ratingValue: "4.9", reviewCount: "9", bestRating: "5", worstRating: "1" },
      openingHoursSpecification: [{ "@type": "OpeningHoursSpecification", dayOfWeek: ["Monday","Tuesday","Wednesday","Thursday","Friday","Saturday","Sunday"], opens: "00:00", closes: "23:59" }],
    },
    {
      "@type": "FAQPage",
      mainEntity: [
        { "@type": "Question", name: "SPM Taxi est-il conventionné CPAM ?", acceptedAnswer: { "@type": "Answer", text: "Oui. SPM Taxi est agréé CPAM pour les transports médicaux assis (TAP). Sur prescription de votre médecin, vous ne payez rien — l'Assurance Maladie règle directement. Zéro avance de frais." } },
        { "@type": "Question", name: "SPM Taxi fait-il les transferts vers l'aéroport Lyon Saint-Exupéry ?", acceptedAnswer: { "@type": "Answer", text: "Oui. SPM Taxi assure les transferts vers l'aéroport Lyon Saint-Exupéry depuis toute la région Ain/Isère. Prise en charge à domicile, suivi des vols en temps réel, tarif fixe garanti." } },
        { "@type": "Question", name: "SPM Taxi peut-il transporter des colis urgents ?", acceptedAnswer: { "@type": "Answer", text: "Oui. SPM Taxi livre vos colis et courriers urgents porte-à-porte, même de nuit. Traçabilité garantie, départ immédiat possible. Appelez le 07 67 75 18 98." } },
        { "@type": "Question", name: "SPM Taxi dispose-t-il d'une remorque ?", acceptedAnswer: { "@type": "Answer", text: "Oui. Le Volkswagen Tiguan de SPM Taxi est équipé d'une attache-remorque homologuée pour transporter matériels lourds, véhicules en panne ou équipements de déménagement." } },
      ],
    },
    { "@type": "BreadcrumbList", itemListElement: [{ "@type": "ListItem", position: 1, name: "Accueil", item: "https://taxispm.fr" }, { "@type": "ListItem", position: 2, name: "Services", item: "https://taxispm.fr/services/" }] },
  ],
};

const services = [
  {
    id: "aeroport",
    icon: Car,
    label: "Transferts",
    title: "Aéroport & Gare",
    subtitle: "Lyon Saint-Exupéry · Part-Dieu · Genève",
    desc: "Prise en charge à domicile, suivi des vols en temps réel, aucun supplément retard. Volkswagen Tiguan Allspace 7 places pour les familles et groupes.",
    points: [
      "Aéroport Lyon Saint-Exupéry (LYS)", "Aéroport Genève-Cointrin (GVA)",
      "Gare Lyon Part-Dieu & Perrache", "Gare Ambérieu-en-Bugey & Bourg",
      "Tarif fixe garanti — aucune surprise", "Suivi des vols en temps réel",
    ],
    href: "/transfert-aeroport-lyon/",
    cta: "Voir les tarifs aéroport",
    price: "À partir de 45 €",
  },
  {
    id: "cpam",
    icon: Stethoscope,
    label: "Transport médical",
    title: "Conventionné CPAM",
    subtitle: "Zéro avance de frais sur prescription",
    desc: "SPM Taxi est agréé CPAM pour les transports médicaux assis (TAP). Sur prescription de votre médecin, vous ne payez rien — tiers payant intégral avec la Sécurité Sociale.",
    points: [
      "Dialyse — séances régulières", "Chimiothérapie & radiothérapie",
      "Consultations spécialistes Lyon", "Hospitalisations programmées",
      "Rhumatologie, cardiologie, neurologie", "ALD — Affection Longue Durée",
    ],
    href: "/taxi-conventionne-cpam/",
    cta: "En savoir plus — CPAM",
    price: "Remboursé à 100 %",
  },
  {
    id: "colis",
    icon: Package,
    label: "Livraison urgente",
    title: "Colis & Courriers",
    subtitle: "Porte-à-porte · Départ immédiat",
    desc: "Besoin de livrer un colis urgent, un dossier médical ou un document officiel ? SPM Taxi part dans l'heure, de jour comme de nuit. Traçabilité garantie.",
    points: [
      "Départ immédiat possible", "Livraison de nuit et week-end",
      "Dossiers médicaux & juridiques", "Pièces détachées urgentes",
      "Colis fragiles avec soin", "Confirmation de livraison",
    ],
    href: "/#contact",
    cta: "Demander un devis",
    price: "Sur devis — réponse 2h",
  },
  {
    id: "remorque",
    icon: Anchor,
    label: "Remorque",
    title: "Taxi avec Remorque",
    subtitle: "Attache-remorque homologuée",
    desc: "Le Volkswagen Tiguan Allspace de SPM Taxi est équipé d'une attache-remorque homologuée. Transport de matériel lourd, véhicules en panne, équipements sportifs.",
    points: [
      "Attache-remorque homologuée", "Véhicules en panne",
      "Matériel BTP & agricole", "Équipements sportifs (bateaux, motos)",
      "Déménagement partiel", "Transport d'animaux (avec remorque adaptée)",
    ],
    href: "/taxi-remorque-ain/",
    cta: "En savoir plus",
    price: "Sur devis",
  },
  {
    id: "longue-distance",
    icon: Route,
    label: "Longue distance",
    title: "France Entière",
    subtitle: "Paris · Marseille · Bordeaux · Genève",
    desc: "SPM Taxi vous emmène partout en France et en Europe. Confort absolu, Wi-Fi à bord, arrêts à la demande. Tarif fixe convenu à l'avance — aucune surprise.",
    points: [
      "Paris, Marseille, Bordeaux, Nantes", "Genève, Lausanne, Bâle, Milan",
      "Aéroports Roissy CDG, Orly, Nice", "Wi-Fi & chargeurs à bord",
      "Arrêts à la demande", "Retour le même jour possible",
    ],
    href: "/taxi-longue-distance/",
    cta: "Tarifs longue distance",
    price: "Devis personnalisé",
  },
];

export default function ServicesPage() {
  return (
    <div className="min-h-screen bg-[#f8f9fa] font-sans">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />

      {/* Header */}
      <header className="bg-black text-white px-6 py-4 flex items-center justify-between">
        <Link href="/" className="text-white/60 hover:text-white transition-colors text-sm flex items-center gap-2">
          ← SPM Taxi
        </Link>
        <a href="tel:+33767751898" className="text-sm font-semibold text-white flex items-center gap-2 hover:opacity-80 transition-opacity">
          <Phone className="h-4 w-4" />07 67 75 18 98
        </a>
      </header>

      <main className="max-w-4xl mx-auto px-6 py-16">
        {/* Hero */}
        <div className="mb-16">
          <span className="text-[10px] font-bold tracking-[0.3em] uppercase text-black/40 mb-4 block">Services · Villebois (01150 — Ain)</span>
          <h1 className="text-4xl sm:text-5xl font-semibold tracking-tight text-black leading-tight mb-6">
            5 services.<br /><span className="text-black/30">Un seul numéro.</span>
          </h1>
          <p className="text-base text-[#555] leading-relaxed max-w-2xl mb-4">
            SPM Taxi est bien plus qu'un taxi — c'est votre chauffeur professionnel
            pour tous vos déplacements depuis l'Ain et l'Isère.
            Conventionné CPAM, équipé d'une remorque, disponible 7j/7 24h/24.
          </p>
          <p className="text-base text-[#555] leading-relaxed max-w-2xl mb-8">
            Volkswagen Tiguan Allspace 7 places, Wi-Fi à bord, attache-remorque homologuée.
            Devis gratuit sous 2h — appelez directement le 07 67 75 18 98.
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

        {/* Badges */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mb-16">
          {[
            { icon: Shield, label: "Conventionné CPAM", desc: "Zéro avance de frais" },
            { icon: Clock, label: "7j/7 24h/24", desc: "Même les jours fériés" },
            { icon: Car, label: "7 places", desc: "Volkswagen Tiguan Allspace" },
            { icon: CheckCircle, label: "4,9★ Google", desc: "9 avis vérifiés" },
          ].map(({ icon: Icon, label, desc }) => (
            <div key={label} className="bg-white rounded-2xl p-4 border border-black/[0.06] text-center">
              <Icon className="h-5 w-5 text-black mx-auto mb-2" />
              <p className="text-xs font-semibold text-black">{label}</p>
              <p className="text-[10px] text-[#555] mt-0.5">{desc}</p>
            </div>
          ))}
        </div>

        {/* Services */}
        <div className="space-y-8 mb-16">
          {services.map((s) => {
            const Icon = s.icon;
            return (
              <div key={s.id} className="bg-white rounded-3xl p-8 border border-black/[0.06]">
                <div className="flex items-start gap-4 mb-6">
                  <div className="w-10 h-10 rounded-full bg-black/5 flex items-center justify-center shrink-0">
                    <Icon className="h-5 w-5 text-black" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <span className="text-[10px] font-bold tracking-[0.25em] uppercase text-black/40">{s.label}</span>
                    <h2 className="text-xl font-semibold text-black mt-0.5">{s.title}</h2>
                    <p className="text-sm text-black/40 mt-0.5">{s.subtitle}</p>
                  </div>
                  <span className="shrink-0 text-sm font-semibold text-black bg-black/5 px-3 py-1 rounded-full">{s.price}</span>
                </div>
                <p className="text-sm text-[#555] leading-relaxed mb-5">{s.desc}</p>
                <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2 mb-6">
                  {s.points.map((p) => (
                    <li key={p} className="flex items-center gap-2 text-sm text-[#555]">
                      <CheckCircle className="h-3.5 w-3.5 text-black shrink-0" />{p}
                    </li>
                  ))}
                </ul>
                <Link href={s.href} className="inline-flex items-center gap-2 text-sm font-semibold text-black hover:opacity-70 transition-opacity">
                  {s.cta}<ArrowRight className="h-4 w-4" />
                </Link>
              </div>
            );
          })}
        </div>

        {/* FAQ */}
        <section className="mb-16">
          <h2 className="text-2xl font-semibold tracking-tight text-black mb-8">Questions fréquentes</h2>
          <div className="space-y-4">
            {[
              { q: "SPM Taxi est-il conventionné CPAM ?", a: "Oui. SPM Taxi est agréé CPAM pour les transports médicaux assis (TAP). Sur prescription de votre médecin, vous ne payez rien — l'Assurance Maladie règle directement SPM Taxi. Zéro avance de frais, tiers payant intégral." },
              { q: "SPM Taxi fait-il les transferts vers l'aéroport Lyon ?", a: "Oui. SPM Taxi assure les transferts vers l'aéroport Lyon Saint-Exupéry depuis toute la région Ain/Isère/Nord-Isère. Prise en charge à domicile, suivi des vols, tarif fixe garanti. Depuis Villebois : à partir de 65 €." },
              { q: "SPM Taxi peut-il livrer un colis urgent de nuit ?", a: "Oui. SPM Taxi intervient 7j/7, 24h/24, pour les livraisons urgentes porte-à-porte. Départ possible dans l'heure. Appelez directement le 07 67 75 18 98 pour un départ immédiat." },
              { q: "SPM Taxi peut-il aller jusqu'à Paris ou Marseille ?", a: "Oui. SPM Taxi effectue des trajets longue distance partout en France et en Europe (Genève, Milan, Bruxelles). Tarif fixe convenu à l'avance, Wi-Fi à bord, arrêts à la demande. Devis gratuit sous 2h." },
            ].map(({ q, a }) => (
              <div key={q} className="bg-white rounded-2xl p-6 border border-black/[0.06]">
                <h3 className="text-sm font-semibold text-black mb-2">{q}</h3>
                <p className="text-sm text-[#555] leading-relaxed">{a}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Links */}
        <section className="mb-16">
          <h2 className="text-2xl font-semibold tracking-tight text-black mb-6">Pages utiles</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {[
              { href: "/transfert-aeroport-lyon/", label: "Aéroport Lyon Saint-Exupéry", desc: "Tarifs et détails transferts" },
              { href: "/taxi-conventionne-cpam/", label: "Transport médical CPAM", desc: "Comment fonctionne le tiers payant" },
              { href: "/taxi-remorque-ain/", label: "Taxi avec remorque", desc: "Détails et capacités de charge" },
              { href: "/taxi-longue-distance/", label: "Longue distance France", desc: "Paris, Marseille, Genève et plus" },
              { href: "/tarifs/", label: "Tableau des tarifs", desc: "Tous les prix détaillés" },
              { href: "/#contact", label: "Demander un devis", desc: "Réponse garantie sous 2h" },
            ].map(({ href, label, desc }) => (
              <Link key={href} href={href} className="flex items-center justify-between gap-4 bg-white rounded-2xl p-5 border border-black/[0.06] hover:border-black/15 transition-colors group">
                <div><p className="text-sm font-semibold text-black mb-1">{label}</p><p className="text-xs text-[#555]">{desc}</p></div>
                <ArrowRight className="h-4 w-4 text-black/30 shrink-0 group-hover:translate-x-0.5 transition-transform" />
              </Link>
            ))}
          </div>
        </section>

        {/* CTA */}
        <div className="bg-black text-white rounded-3xl p-10 text-center">
          <h2 className="text-2xl font-semibold mb-3">Réservez SPM Taxi</h2>
          <p className="text-white/50 text-sm mb-2">Conventionné CPAM · 7j/7 24h/24 · Devis gratuit sous 2h</p>
          <div className="flex items-center justify-center gap-1 text-white/30 text-xs mb-8">
            <MapPin className="h-3 w-3" />Villebois, Ain (01) — dessert Ain, Isère, Lyon et France entière
          </div>
          <div className="flex flex-wrap gap-3 justify-center">
            <a href="tel:+33767751898" className="inline-flex items-center gap-2 rounded-full bg-white text-black px-6 py-3 text-sm font-semibold hover:bg-white/90 transition-colors">
              <Phone className="h-4 w-4" />07 67 75 18 98
            </a>
            <a
              href="https://wa.me/33767751898?text=Bonjour%2C%20je%20souhaite%20r%C3%A9server%20un%20taxi."
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-full bg-[#25D366] text-white px-6 py-3 text-sm font-semibold hover:bg-[#20bb5a] transition-colors"
            >
              WhatsApp
            </a>
            <a href="/#contact" className="inline-flex items-center gap-2 rounded-full border border-white/25 text-white px-6 py-3 text-sm font-semibold hover:border-white/50 transition-colors">
              Formulaire de contact<ArrowRight className="h-4 w-4" />
            </a>
          </div>
        </div>
      </main>

      <footer className="border-t border-black/[0.06] px-6 py-8 text-center">
        <p className="text-xs text-black/30">© 2026 SPM Taxi — 5 services · Villebois (01) · <Link href="/" className="underline underline-offset-2">Retour au site</Link></p>
      </footer>
    </div>
  );
}
