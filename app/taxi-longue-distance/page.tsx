import type { Metadata } from "next";
import Link from "next/link";
import { ArrowLeft, Phone, MapPin, Clock, CheckCircle, ArrowRight } from "lucide-react";

export const metadata: Metadata = {
  title: "Taxi Longue Distance France — Tarif Fixe",
  description:
    "Taxi SPM : déplacements longue distance partout en France depuis l'Ain, Lyon, Isère. Paris, Marseille, Bordeaux, Genève, Nice, Strasbourg. Volkswagen Tiguan 7 places. Tarif fixe sur devis gratuit. ☎ 07 67 75 18 98.",
  keywords: [
    // France entière — grandes villes
    "taxi longue distance France depuis Ain", "taxi France entière depuis Lyon",
    "taxi Paris depuis Ain", "taxi Marseille depuis Ain", "taxi Bordeaux depuis Ain",
    "taxi Nice depuis Ain", "taxi Toulouse depuis Ain", "taxi Strasbourg depuis Ain",
    "taxi Nantes depuis Ain", "taxi Lille depuis Ain", "taxi Rennes depuis Ain",
    "taxi Montpellier depuis Ain", "taxi Dijon depuis Ain", "taxi Grenoble depuis Ain",
    "taxi Clermont-Ferrand depuis Ain", "taxi Lyon depuis Ain",
    "taxi Reims depuis Ain", "taxi Toulon depuis Ain", "taxi Aix-en-Provence depuis Ain",
    "taxi Angers depuis Ain", "taxi Brest depuis Ain", "taxi Le Mans depuis Ain",
    "taxi Nîmes depuis Ain", "taxi Perpignan depuis Ain", "taxi Besançon depuis Ain",
    "taxi Orléans depuis Ain", "taxi Metz depuis Ain", "taxi Nancy depuis Ain",
    "taxi Rouen depuis Ain", "taxi Caen depuis Ain", "taxi Limoges depuis Ain",
    "taxi Pau depuis Ain", "taxi Avignon depuis Ain", "taxi Mulhouse depuis Ain",
    "taxi Amiens depuis Ain", "taxi Poitiers depuis Ain", "taxi Tours depuis Ain",
    "taxi Le Havre depuis Ain", "taxi Saint-Étienne depuis Ain",
    // Europe
    "taxi Genève depuis Ain", "taxi Lausanne depuis Ain", "taxi Zurich depuis Ain",
    "taxi Bâle depuis Ain", "taxi Milan depuis Ain", "taxi Turin depuis Ain",
    "taxi Monaco depuis Ain", "taxi Bruxelles depuis Ain", "taxi Barcelona depuis Ain",
    "taxi Luxembourg depuis Ain", "taxi Annecy depuis Ain", "taxi Chambéry depuis Ain",
    // Générique
    "taxi longue distance Villebois", "chauffeur privé longue distance Ain",
    "taxi Paris depuis Ain 01", "taxi interurbain Lyon Ain", "taxi grande distance Ain 01",
    "taxi Lyon Bordeaux Ain", "taxi Lyon Nice Ain",
    "taxi aller retour France Ain", "tarif fixe taxi longue distance Ain",
    "taxi privatif longue distance Ain Isère", "taxi 7 places longue distance",
  ],
  alternates: { canonical: "https://taxispm.fr/taxi-longue-distance/" },
  openGraph: {
    title: "Taxi Longue Distance France Entière — SPM Ain | Tarif Fixe Devis Gratuit",
    description: "Paris, Marseille, Genève, Bordeaux depuis l'Ain — tarif fixe sur devis. Volkswagen Tiguan 7 places, confort SUV. SPM Taxi Villebois (Ain 01). 07 67 75 18 98.",
    url: "https://taxispm.fr/taxi-longue-distance/",
    type: "website",
    locale: "fr_FR",
    images: [{ url: "/image/tiguan-front-quarter.webp", alt: "Taxi longue distance France SPM Ain Villebois" }],
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "Taxi Longue Distance France Entière",
  provider: {
    "@type": "TaxiService",
    name: "SPM — Taxi Conventionné",
    telephone: "+33767751898",
    address: {
      "@type": "PostalAddress",
      streetAddress: "951 route des hauts fourneaux",
      addressLocality: "Villebois",
      postalCode: "01150",
      addressCountry: "FR",
    },
  },
  areaServed: { "@type": "Country", name: "France" },
  serviceType: "Taxi longue distance",
  description: "Transport en taxi longue distance partout en France depuis l'Ain, Lyon et l'Isère.",
};

const destinations = [
  // Ile-de-France
  { city: "Paris (toutes gares)", distance: "~460 km", approx: "~4h30" },
  { city: "Paris CDG Roissy (aéroport)", distance: "~450 km", approx: "~4h15" },
  { city: "Paris Orly (aéroport)", distance: "~470 km", approx: "~4h30" },
  { city: "Versailles", distance: "~480 km", approx: "~4h45" },
  // Sud
  { city: "Marseille", distance: "~310 km", approx: "~3h" },
  { city: "Aix-en-Provence", distance: "~290 km", approx: "~2h45" },
  { city: "Nice", distance: "~430 km", approx: "~4h" },
  { city: "Toulon", distance: "~360 km", approx: "~3h30" },
  { city: "Montpellier", distance: "~290 km", approx: "~2h45" },
  { city: "Nîmes", distance: "~260 km", approx: "~2h30" },
  { city: "Avignon", distance: "~220 km", approx: "~2h15" },
  { city: "Perpignan", distance: "~450 km", approx: "~4h" },
  { city: "Monaco", distance: "~440 km", approx: "~4h" },
  // Ouest
  { city: "Bordeaux", distance: "~560 km", approx: "~5h" },
  { city: "Toulouse", distance: "~520 km", approx: "~4h30" },
  { city: "Nantes", distance: "~660 km", approx: "~6h" },
  { city: "Rennes", distance: "~750 km", approx: "~7h" },
  { city: "Brest", distance: "~940 km", approx: "~8h30" },
  { city: "Le Mans", distance: "~620 km", approx: "~5h30" },
  { city: "Tours", distance: "~540 km", approx: "~5h" },
  { city: "Poitiers", distance: "~530 km", approx: "~4h45" },
  { city: "Limoges", distance: "~430 km", approx: "~4h" },
  { city: "Pau", distance: "~590 km", approx: "~5h15" },
  // Nord & Est
  { city: "Strasbourg", distance: "~540 km", approx: "~4h45" },
  { city: "Mulhouse", distance: "~450 km", approx: "~4h" },
  { city: "Besançon", distance: "~310 km", approx: "~3h" },
  { city: "Dijon", distance: "~190 km", approx: "~2h" },
  { city: "Metz", distance: "~560 km", approx: "~5h" },
  { city: "Nancy", distance: "~560 km", approx: "~5h" },
  { city: "Reims", distance: "~540 km", approx: "~5h" },
  { city: "Lille", distance: "~630 km", approx: "~5h30" },
  { city: "Amiens", distance: "~590 km", approx: "~5h30" },
  { city: "Rouen", distance: "~590 km", approx: "~5h30" },
  { city: "Caen", distance: "~650 km", approx: "~6h" },
  { city: "Le Havre", distance: "~640 km", approx: "~6h" },
  // Centre
  { city: "Clermont-Ferrand", distance: "~210 km", approx: "~2h15" },
  { city: "Saint-Étienne", distance: "~115 km", approx: "~1h15" },
  { city: "Orléans", distance: "~490 km", approx: "~4h30" },
  { city: "Angers", distance: "~620 km", approx: "~5h45" },
  // Europe proche
  { city: "Genève (Suisse)", distance: "~150 km", approx: "~1h30" },
  { city: "Lausanne (Suisse)", distance: "~200 km", approx: "~2h" },
  { city: "Zurich (Suisse)", distance: "~320 km", approx: "~3h" },
  { city: "Bâle (Suisse)", distance: "~400 km", approx: "~3h30" },
  { city: "Annecy / Chambéry", distance: "~130 km", approx: "~1h15" },
  { city: "Milan (Italie)", distance: "~390 km", approx: "~4h" },
  { city: "Turin (Italie)", distance: "~310 km", approx: "~3h" },
  { city: "Bruxelles (Belgique)", distance: "~630 km", approx: "~6h" },
  { city: "Luxembourg", distance: "~580 km", approx: "~5h30" },
  { city: "Barcelona (Espagne)", distance: "~660 km", approx: "~6h30" },
];

export default function LongueDistancePage() {
  return (
    <div className="min-h-screen bg-[#f8f9fa] font-sans">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <header className="bg-black text-white px-6 py-4 flex items-center gap-4">
        <Link href="/" className="flex items-center gap-2 text-white/60 hover:text-white transition-colors text-sm">
          <ArrowLeft className="h-4 w-4" />
          SPM Taxi
        </Link>
      </header>

      <main className="max-w-4xl mx-auto px-6 py-16">

        <div className="mb-16">
          <span className="text-[10px] font-bold tracking-[0.3em] uppercase text-black/40 mb-4 block">
            Service · Longue Distance
          </span>
          <h1 className="text-4xl sm:text-5xl font-semibold tracking-tight text-black leading-tight mb-6">
            Taxi Longue Distance<br />
            <span className="text-black/30">France Entière</span>
          </h1>
          <p className="text-base text-[#555] leading-relaxed max-w-2xl mb-8">
            Besoin de rejoindre Paris, Marseille, Genève ou n&apos;importe quelle ville française ?
            Taxi SPM assure vos déplacements longue distance au départ de l&apos;Ain, Lyon et l&apos;Isère.
            Volkswagen Tiguan Allspace 7 places, confort absolu, tarif fixe sur devis.
          </p>
          <div className="flex flex-wrap gap-3">
            <a
              href="tel:+33767751898"
              className="inline-flex items-center gap-2 rounded-full bg-black text-white px-6 py-3 text-sm font-semibold hover:bg-[#111] transition-colors"
            >
              <Phone className="h-4 w-4" />
              Obtenir un devis
            </a>
            <a
              href="/#contact"
              className="inline-flex items-center gap-2 rounded-full border border-black/15 text-black px-6 py-3 text-sm font-semibold hover:border-black/30 transition-colors"
            >
              Formulaire de contact
              <ArrowRight className="h-4 w-4" />
            </a>
          </div>
        </div>

        {/* Points forts */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-16">
          {[
            { icon: CheckCircle, title: "Tarif fixe", desc: "Prix convenu à l'avance, sans surprise. Le tarif est établi lors du devis et ne change pas." },
            { icon: MapPin, title: "Porte-à-porte", desc: "Prise en charge à votre domicile et dépôt à votre destination finale, peu importe la distance." },
            { icon: Clock, title: "Disponibilité", desc: "Départ à l'heure qui vous convient, 24h/24 et 7j/7, y compris les jours fériés." },
            { icon: CheckCircle, title: "7 passagers", desc: "Volkswagen Tiguan Allspace 7 places — idéal pour les groupes et les familles nombreuses." },
          ].map(({ icon: Icon, title, desc }) => (
            <div key={title} className="bg-white rounded-2xl p-6 border border-black/[0.06] flex gap-4">
              <Icon className="h-5 w-5 text-black shrink-0 mt-0.5" />
              <div>
                <h3 className="text-sm font-semibold text-black mb-1">{title}</h3>
                <p className="text-xs text-[#555] leading-relaxed">{desc}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Destinations */}
        <section className="mb-16">
          <h2 className="text-2xl font-semibold tracking-tight text-black mb-8">
            Destinations populaires depuis Lyon / l&apos;Ain
          </h2>
          <div className="bg-white rounded-2xl border border-black/[0.06] overflow-hidden">
            {destinations.map((d, i) => (
              <div
                key={d.city}
                className={`flex items-center justify-between px-6 py-4 ${i !== destinations.length - 1 ? "border-b border-black/[0.06]" : ""}`}
              >
                <div className="flex items-center gap-3">
                  <MapPin className="h-4 w-4 text-black/25" />
                  <span className="text-sm font-medium text-black">{d.city}</span>
                  <span className="text-xs text-black/30">{d.distance}</span>
                </div>
                <span className="text-sm font-semibold text-black/50">{d.approx}</span>
              </div>
            ))}
          </div>
          <p className="text-xs text-[#888] mt-3">Toute destination en France et en Europe sur devis. Aller simple ou aller-retour.</p>
        </section>

        {/* Villes France complète */}
        <section className="mb-16">
          <h2 className="text-2xl font-semibold tracking-tight text-black mb-4">SPM Taxi dessert toute la France</h2>
          <p className="text-sm text-[#555] leading-relaxed mb-6">
            Depuis Villebois (Ain 01), l'Isère ou Lyon, SPM Taxi vous emmène dans toutes les villes de France,
            en Europe et vers tous les aéroports internationaux. Voici quelques destinations fréquentes :
          </p>
          <div className="bg-white rounded-2xl p-6 border border-black/[0.06]">
            <h3 className="text-xs font-bold tracking-widest uppercase text-black/40 mb-4">Île-de-France & Nord</h3>
            <p className="text-sm text-[#555] leading-relaxed mb-4">
              <strong>Paris</strong> (Gare de Lyon, Gare Montparnasse, Gare du Nord, Gare de l'Est, Gare Saint-Lazare, Gare d'Austerlitz),
              <strong> Roissy-CDG</strong>, <strong>Orly</strong>, <strong>Versailles</strong>, <strong>Vincennes</strong>, <strong>Boulogne-Billancourt</strong>,
              <strong> Saint-Denis</strong>, <strong>Nanterre</strong>, <strong>Créteil</strong>, <strong>Colombes</strong>, <strong>Argenteuil</strong>,
              <strong> Montreuil</strong>, <strong>Champigny-sur-Marne</strong>, <strong>Vitry-sur-Seine</strong>, <strong>Rueil-Malmaison</strong>,
              <strong> Asnières</strong>, <strong>Courbevoie</strong>, <strong>Neuilly-sur-Seine</strong>, <strong>Clichy</strong>, <strong>Saint-Maur</strong>,
              <strong> Amiens</strong>, <strong>Rouen</strong>, <strong>Caen</strong>, <strong>Le Havre</strong>, <strong>Lille</strong>, <strong>Roubaix</strong>,
              <strong> Tourcoing</strong>, <strong>Dunkerque</strong>, <strong>Valenciennes</strong>, <strong>Reims</strong>.
            </p>
            <h3 className="text-xs font-bold tracking-widest uppercase text-black/40 mb-4 mt-6">Sud & Méditerranée</h3>
            <p className="text-sm text-[#555] leading-relaxed mb-4">
              <strong>Marseille</strong>, <strong>Aix-en-Provence</strong>, <strong>Nice</strong>, <strong>Toulon</strong>, <strong>Cannes</strong>,
              <strong> Antibes</strong>, <strong>Grasse</strong>, <strong>Monaco</strong>, <strong>Montpellier</strong>, <strong>Nîmes</strong>,
              <strong> Avignon</strong>, <strong>Arles</strong>, <strong>Perpignan</strong>, <strong>Sète</strong>, <strong>Béziers</strong>,
              <strong> Narbonne</strong>, <strong>Carcassonne</strong>, <strong>Alès</strong>, <strong>Fréjus</strong>, <strong>Hyères</strong>,
              <strong> Martigues</strong>, <strong>Salon-de-Provence</strong>, <strong>Istres</strong>, <strong>Aubagne</strong>, <strong>Cassis</strong>.
            </p>
            <h3 className="text-xs font-bold tracking-widest uppercase text-black/40 mb-4 mt-6">Sud-Ouest & Atlantique</h3>
            <p className="text-sm text-[#555] leading-relaxed mb-4">
              <strong>Bordeaux</strong>, <strong>Toulouse</strong>, <strong>Nantes</strong>, <strong>Rennes</strong>, <strong>Brest</strong>,
              <strong> Lorient</strong>, <strong>Quimper</strong>, <strong>Saint-Nazaire</strong>, <strong>Vannes</strong>, <strong>Le Mans</strong>,
              <strong> Tours</strong>, <strong>Angers</strong>, <strong>Poitiers</strong>, <strong>La Rochelle</strong>, <strong>Niort</strong>,
              <strong> Limoges</strong>, <strong>Périgueux</strong>, <strong>Agen</strong>, <strong>Pau</strong>, <strong>Bayonne</strong>,
              <strong> Biarritz</strong>, <strong>Mont-de-Marsan</strong>, <strong>Tarbes</strong>, <strong>Rodez</strong>, <strong>Albi</strong>,
              <strong> Castres</strong>, <strong>Cahors</strong>, <strong>Montauban</strong>, <strong>Auch</strong>.
            </p>
            <h3 className="text-xs font-bold tracking-widest uppercase text-black/40 mb-4 mt-6">Centre & Massif Central</h3>
            <p className="text-sm text-[#555] leading-relaxed mb-4">
              <strong>Clermont-Ferrand</strong>, <strong>Saint-Étienne</strong>, <strong>Orléans</strong>, <strong>Dijon</strong>,
              <strong> Chalon-sur-Saône</strong>, <strong>Mâcon</strong>, <strong>Bourges</strong>, <strong>Châteauroux</strong>,
              <strong> Vichy</strong>, <strong>Moulins</strong>, <strong>Nevers</strong>, <strong>Auxerre</strong>, <strong>Troyes</strong>,
              <strong> Sens</strong>, <strong>Montluçon</strong>, <strong>Thiers</strong>, <strong>Issoire</strong>, <strong>Riom</strong>,
              <strong> Le Puy-en-Velay</strong>, <strong>Aurillac</strong>, <strong>Tulle</strong>, <strong>Brive-la-Gaillarde</strong>.
            </p>
            <h3 className="text-xs font-bold tracking-widest uppercase text-black/40 mb-4 mt-6">Est & Alsace-Lorraine</h3>
            <p className="text-sm text-[#555] leading-relaxed mb-4">
              <strong>Strasbourg</strong>, <strong>Mulhouse</strong>, <strong>Colmar</strong>, <strong>Haguenau</strong>, <strong>Besançon</strong>,
              <strong> Belfort</strong>, <strong>Montbéliard</strong>, <strong>Metz</strong>, <strong>Nancy</strong>, <strong>Thionville</strong>,
              <strong> Épinal</strong>, <strong>Verdun</strong>, <strong>Bar-le-Duc</strong>, <strong>Châlons-en-Champagne</strong>.
            </p>
            <h3 className="text-xs font-bold tracking-widest uppercase text-black/40 mb-4 mt-6">Europe proche</h3>
            <p className="text-sm text-[#555] leading-relaxed">
              <strong>Genève</strong> (aéroport GVA, centre-ville, CERN, OMS, ONU), <strong>Lausanne</strong>, <strong>Zurich</strong>,
              <strong> Berne</strong>, <strong>Bâle</strong>, <strong>Lugano</strong>, <strong>Milan</strong> (Malpensa, Linate, centre),
              <strong> Turin</strong>, <strong>Monaco</strong>, <strong>San Remo</strong>, <strong>Vintimille</strong>,
              <strong> Bruxelles</strong>, <strong>Luxembourg</strong>, <strong>Francfort</strong>, <strong>Munich</strong>,
              <strong> Barcelona</strong>, <strong>Madrid</strong>, <strong>Amsterdam</strong>, <strong>Londres</strong> (via Eurotunnel).
            </p>
          </div>
        </section>

        {/* CPAM longue distance */}
        <section className="mb-16 bg-white rounded-2xl p-8 border border-black/[0.06]">
          <h2 className="text-2xl font-semibold tracking-tight text-black mb-4">Transport médical longue distance — CPAM</h2>
          <p className="text-sm text-[#555] leading-relaxed mb-4">
            Pour les trajets médicaux longue distance (supérieurs à 150 km aller), la CPAM peut prendre en charge
            le transport sur <strong>accord préalable</strong> de votre médecin et de la caisse d'Assurance Maladie.
            SPM Taxi vous accompagne dans vos démarches.
          </p>
          <ul className="text-sm text-[#555] space-y-2 mb-4">
            <li className="flex items-start gap-2"><CheckCircle className="h-4 w-4 text-black shrink-0 mt-0.5" />Hospitalisation hors département (CHU Paris, Montpellier, Bordeaux, Marseille…)</li>
            <li className="flex items-start gap-2"><CheckCircle className="h-4 w-4 text-black shrink-0 mt-0.5" />Traitement spécialisé introuvable localement (chimiothérapie, greffe, neurologie…)</li>
            <li className="flex items-start gap-2"><CheckCircle className="h-4 w-4 text-black shrink-0 mt-0.5" />Patients ALD (Affection de Longue Durée)</li>
            <li className="flex items-start gap-2"><CheckCircle className="h-4 w-4 text-black shrink-0 mt-0.5" />Transport PMR et TPMR (personnes à mobilité réduite)</li>
          </ul>
          <p className="text-xs text-[#777]">
            Demandez l'accord préalable à votre médecin traitant. SPM Taxi peut accompagner votre dossier CPAM.
          </p>
        </section>

        {/* FAQ */}
        <section className="mb-16">
          <h2 className="text-2xl font-semibold tracking-tight text-black mb-8">Questions fréquentes</h2>
          <div className="space-y-4">
            {[
              {
                q: "Comment est calculé le tarif longue distance ?",
                a: "Le tarif est établi sur devis en fonction du kilométrage, de la durée estimée et des éventuels péages. Le prix est fixe et convenu avant le trajet.",
              },
              {
                q: "Puis-je effectuer des arrêts en cours de route ?",
                a: "Oui, des arrêts peuvent être organisés (repas, escale). Indiquez-le lors de la réservation pour intégrer ces étapes au devis.",
              },
              {
                q: "Puis-je réserver un aller-retour ?",
                a: "Absolument. Un forfait aller-retour est souvent plus avantageux qu'un double trajet aller simple. Demandez un devis combiné.",
              },
            ].map(({ q, a }) => (
              <div key={q} className="bg-white rounded-2xl p-6 border border-black/[0.06]">
                <h3 className="text-sm font-semibold text-black mb-2">{q}</h3>
                <p className="text-sm text-[#555] leading-relaxed">{a}</p>
              </div>
            ))}
          </div>
        </section>

        <div className="bg-black text-white rounded-3xl p-10 text-center">
          <h2 className="text-2xl font-semibold mb-3">Où voulez-vous aller ?</h2>
          <p className="text-white/50 text-sm mb-8">Devis gratuit en 2h · Tarif fixe · France entière</p>
          <div className="flex flex-wrap justify-center gap-4">
            <a
              href="tel:+33767751898"
              className="inline-flex items-center gap-2 rounded-full bg-white text-black px-6 py-3 text-sm font-semibold hover:bg-white/90 transition-colors"
            >
              <Phone className="h-4 w-4" />
              07 67 75 18 98
            </a>
            <a
              href="/#contact"
              className="inline-flex items-center gap-2 rounded-full border border-white/25 text-white px-6 py-3 text-sm font-semibold hover:border-white/50 transition-colors"
            >
              Demander un devis en ligne
            </a>
          </div>
        </div>

      </main>

      <footer className="border-t border-black/[0.06] px-6 py-8 text-center">
        <p className="text-xs text-black/30">
          © 2026 SPM — Taxi Conventionné · Villebois (Ain 01) ·{" "}
          <Link href="/" className="underline underline-offset-2">Retour au site</Link>
        </p>
      </footer>
    </div>
  );
}
