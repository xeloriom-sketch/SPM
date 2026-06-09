import Loader from "@/components/Loader";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import SmoothScroll from "@/components/SmoothScroll";
import Services from "@/components/Services";
import HowItWorks from "@/components/HowItWorks";
import Vehicle from "@/components/Vehicle";
import WhyUs from "@/components/WhyUs";
import Coverage from "@/components/Coverage";
import Testimonials from "@/components/Testimonials";
import FAQ from "@/components/FAQ";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import PowerStation from "@/components/PowerStation";
import CommunityCTA from "@/components/CommunityCTA";
import NewsUpdates from "@/components/NewsUpdates";
import CPAMGuide from "@/components/CPAMGuide";
import Entreprises from "@/components/Entreprises";

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    // ── WebSite ────────────────────────────────────────────────────────────
    {
      "@type": "WebSite",
      "@id": "https://www.spm-taxi.fr/#website",
      url: "https://www.spm-taxi.fr",
      name: "SPM Taxi — Taxi Conventionné Villebois",
      description: "Taxi conventionné CPAM basé à Villebois (Ain 01). Volkswagen Tiguan 7 places. Disponible 7j/7 24h/24.",
      inLanguage: "fr-FR",
      publisher: { "@id": "https://www.spm-taxi.fr/#business" },
    },

    // ── LocalBusiness + TaxiService ────────────────────────────────────────
    {
      "@type": ["LocalBusiness", "TaxiService", "ProfessionalService"],
      "@id": "https://www.spm-taxi.fr/#business",
      name: "SPM Taxi",
      legalName: "SPM Taxi",
      alternateName: [
        "SPM Taxi Villebois", "Taxi SPM Ain", "Taxi Conventionné SPM",
        "SPM — Taxi Conventionné", "Taxi Villebois Ain",
      ],
      description:
        "SPM Taxi est un taxi conventionné CPAM basé à Villebois dans l'Ain (01150). Chauffeur professionnel avec carte professionnelle de taxi, agrément CPAM et assurance responsabilité civile professionnelle. Volkswagen Tiguan Allspace 7 places. Note Google 4,9/5. Disponible 7j/7 24h/24 pour transferts aéroport Lyon Saint-Exupéry, transport médical conventionné CPAM remboursé, transport de colis urgent, déplacements avec remorque et longue distance partout en France.",
      url: "https://www.spm-taxi.fr",
      telephone: "+33767751898",
      email: "contact@spm-taxi.fr",
      priceRange: "€€",
      currenciesAccepted: "EUR",
      paymentAccepted: "Cash, Credit Card, Check, CPAM",
      address: {
        "@type": "PostalAddress",
        streetAddress: "951 route des hauts fourneaux",
        addressLocality: "Villebois",
        addressSubregion: "Ain",
        postalCode: "01150",
        addressRegion: "Auvergne-Rhône-Alpes",
        addressCountry: "FR",
      },
      geo: {
        "@type": "GeoCoordinates",
        latitude: 45.8,
        longitude: 5.45,
      },
      hasMap: "https://maps.google.com/?q=Villebois+Ain+01150+France",
      openingHoursSpecification: [
        {
          "@type": "OpeningHoursSpecification",
          dayOfWeek: ["Monday","Tuesday","Wednesday","Thursday","Friday","Saturday","Sunday"],
          opens: "00:00",
          closes: "23:59",
        },
      ],
      areaServed: [
        { "@type": "City", name: "Villebois", containedInPlace: { "@type": "AdministrativeArea", name: "Ain" } },
        { "@type": "City", name: "Tignieu-Jameyzieu" },
        { "@type": "City", name: "Ambérieu-en-Bugey" },
        { "@type": "City", name: "Bourg-en-Bresse" },
        { "@type": "City", name: "Meximieux" },
        { "@type": "City", name: "Montluel" },
        { "@type": "City", name: "Pérouges" },
        { "@type": "City", name: "Belley" },
        { "@type": "City", name: "Lyon" },
        { "@type": "City", name: "Grenoble" },
        { "@type": "City", name: "Bourgoin-Jallieu" },
        { "@type": "City", name: "Vienne" },
        { "@type": "City", name: "Genève" },
        { "@type": "Airport", name: "Aéroport Lyon Saint-Exupéry", iataCode: "LYS" },
        { "@type": "TrainStation", name: "Gare Lyon Part-Dieu" },
        { "@type": "TrainStation", name: "Gare Lyon Perrache" },
        { "@type": "AdministrativeArea", name: "Ain", alternateName: "01" },
        { "@type": "AdministrativeArea", name: "Isère", alternateName: "38" },
        { "@type": "AdministrativeArea", name: "Rhône", alternateName: "69" },
        { "@type": "Country", name: "France" },
      ],
      availableVehicle: {
        "@type": "Vehicle",
        name: "Volkswagen Tiguan Allspace",
        description: "SUV 7 places, climatisation bi-zone, Wi-Fi, attache-remorque homologuée",
        vehicleSeatingCapacity: 7,
        vehicleConfiguration: "SUV 7 places",
        brand: { "@type": "Brand", name: "Volkswagen" },
        model: "Tiguan Allspace",
      },
      hasOfferCatalog: {
        "@type": "OfferCatalog",
        name: "Services de taxi SPM",
        itemListElement: [
          {
            "@type": "Offer",
            name: "Transfert aéroport et gare",
            description: "Prise en charge à domicile, suivi des vols en temps réel. Lyon Saint-Exupéry, Part-Dieu, Perrache, Genève-Cointrin.",
            itemOffered: { "@type": "Service", name: "Transfert aéroport Lyon Saint-Exupéry depuis Ain", url: "https://www.spm-taxi.fr/transfert-aeroport-lyon" },
          },
          {
            "@type": "Offer",
            name: "Transport médical conventionné CPAM",
            description: "Agréé par l'Assurance Maladie. Chimiothérapie, dialyse, hospitalisation. Zéro avance de frais.",
            itemOffered: { "@type": "Service", name: "Taxi conventionné CPAM Ain", url: "https://www.spm-taxi.fr/taxi-conventionné-cpam" },
          },
          {
            "@type": "Offer",
            name: "Transport de colis urgent",
            description: "Livraison express porte à porte avec confirmation de remise. B2B et particuliers.",
            itemOffered: { "@type": "Service", name: "Transport colis urgent Ain" },
          },
          {
            "@type": "Offer",
            name: "Taxi avec remorque",
            description: "Attache-remorque homologuée. Transport matériel lourd, véhicules en panne.",
            itemOffered: { "@type": "Service", name: "Taxi remorque Ain", url: "https://www.spm-taxi.fr/taxi-remorque-ain" },
          },
          {
            "@type": "Offer",
            name: "Longue distance France entière",
            description: "Paris, Marseille, Bordeaux, Nice, Strasbourg, Genève. Tarif fixe sur devis.",
            itemOffered: { "@type": "Service", name: "Taxi longue distance Lyon Ain", url: "https://www.spm-taxi.fr/taxi-longue-distance" },
          },
        ],
      },
      aggregateRating: {
        "@type": "AggregateRating",
        ratingValue: "4.9",
        reviewCount: "9",
        bestRating: "5",
        worstRating: "1",
      },
      review: [
        { "@type": "Review", author: { "@type": "Person", name: "F.I TAXI" }, reviewRating: { "@type": "Rating", ratingValue: "5", bestRating: "5" }, reviewBody: "Excellent collaborateur. Toujours ponctuel, sérieux et respectueux des clients. Travail de qualité, je recommande sans hésiter.", datePublished: "2025-12-01" },
        { "@type": "Review", author: { "@type": "Person", name: "sabrina selini" }, reviewRating: { "@type": "Rating", ratingValue: "5", bestRating: "5" }, reviewBody: "Sérieux, ponctuel, disponible. Trajet très agréable. Conventionné pour tous les trajets médicaux. Je recommande vivement.", datePublished: "2025-08-01" },
        { "@type": "Review", author: { "@type": "Person", name: "Chloé Burguiere" }, reviewRating: { "@type": "Rating", ratingValue: "5", bestRating: "5" }, reviewBody: "Taxi très accueillant, accepte les personnes en situation de handicap. Je recommande.", datePublished: "2025-09-01" },
        { "@type": "Review", author: { "@type": "Person", name: "Khalid El ouazzani" }, reviewRating: { "@type": "Rating", ratingValue: "5", bestRating: "5" }, reviewBody: "Société professionnelle, chauffeur ponctuel. Trajet agréable. Je recommande vivement.", datePublished: "2025-07-01" },
        { "@type": "Review", author: { "@type": "Person", name: "SOSO 01" }, reviewRating: { "@type": "Rating", ratingValue: "5", bestRating: "5" }, reviewBody: "Taxi très sérieux et ponctuel, à l'écoute de ses clients. Vous pouvez y aller les yeux fermés.", datePublished: "2025-07-01" },
      ],
      image: [
        { "@type": "ImageObject", url: "https://www.spm-taxi.fr/image/tiguan-hero.jpeg", caption: "SPM Taxi — Volkswagen Tiguan R-Line Allspace", width: 9500, height: 6333 },
        { "@type": "ImageObject", url: "https://www.spm-taxi.fr/image/tiguan-front-quarter.png", caption: "Volkswagen Tiguan Allspace 7 places — SPM Taxi Villebois" },
      ],
      sameAs: [
        "https://www.google.com/maps/search/SPM+Taxi+Villebois",
      ],
      knowsLanguage: "fr",
    },

    // ── FAQPage ────────────────────────────────────────────────────────────
    {
      "@type": "FAQPage",
      "@id": "https://www.spm-taxi.fr/#faq",
      mainEntity: [
        {
          "@type": "Question",
          name: "Qu'est-ce qu'un taxi conventionné CPAM ?",
          acceptedAnswer: { "@type": "Answer", text: "Un taxi conventionné est un taxi agréé par la CPAM (Caisse Primaire d'Assurance Maladie) pour les transports médicaux sur prescription médicale. SPM Taxi est taxi conventionné basé à Villebois dans l'Ain (01). Les trajets médicaux peuvent être pris en charge partiellement ou totalement par l'Assurance Maladie. Zéro avance de frais." },
        },
        {
          "@type": "Question",
          name: "Comment réserver le taxi SPM à Villebois ?",
          acceptedAnswer: { "@type": "Answer", text: "Appelez le 07 67 75 18 98 ou remplissez le formulaire de contact sur le site. SPM Taxi répond sous 2h avec un devis gratuit et sans engagement. Disponible 7j/7, 24h/24, y compris jours fériés et la nuit." },
        },
        {
          "@type": "Question",
          name: "Quelles villes dessert le taxi SPM depuis Villebois ?",
          acceptedAnswer: { "@type": "Answer", text: "SPM Taxi est basé à Villebois (Ain 01150) et dessert Lyon, Ambérieu-en-Bugey, Bourg-en-Bresse, Meximieux, Montluel, Pérouges, Belley, Grenoble, Bourgoin-Jallieu, l'aéroport Lyon Saint-Exupéry, les gares Part-Dieu et Perrache. Déplacements longue distance dans toute la France et vers Genève sur devis." },
        },
        {
          "@type": "Question",
          name: "Quel est le prix d'un taxi de Villebois à l'aéroport Lyon Saint-Exupéry ?",
          acceptedAnswer: { "@type": "Answer", text: "Le transfert de Villebois à l'aéroport Lyon Saint-Exupéry est à partir de 65 €. Un devis gratuit et personnalisé est disponible sous 2h en appelant le 07 67 75 18 98. Le prix est fixe et garanti, sans surprises." },
        },
        {
          "@type": "Question",
          name: "SPM Taxi transporte-t-il des personnes à mobilité réduite ?",
          acceptedAnswer: { "@type": "Answer", text: "Oui, SPM Taxi accueille les personnes à mobilité réduite et en situation de handicap dans le Volkswagen Tiguan Allspace 7 places, confortable et spacieux. Le taxi est conventionné CPAM pour les transports médicaux." },
        },
        {
          "@type": "Question",
          name: "Quels modes de paiement accepte SPM Taxi ?",
          acceptedAnswer: { "@type": "Answer", text: "SPM Taxi accepte les espèces, la carte bancaire (CB, Visa, Mastercard) et les chèques. Pour les transports médicaux CPAM, la facturation est gérée directement avec l'Assurance Maladie, sans avance de frais pour le patient." },
        },
      ],
    },

    // ── BreadcrumbList homepage ─────────────────────────────────────────────
    {
      "@type": "BreadcrumbList",
      "@id": "https://www.spm-taxi.fr/#breadcrumb",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Accueil", item: "https://www.spm-taxi.fr" },
      ],
    },
  ],
};

export default function Home() {
  return (
    <SmoothScroll>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <Loader />
      <Navbar />
      <main className="w-full overflow-x-clip">
        <Hero />
        <Services />
        <HowItWorks />
        <CPAMGuide />
        <Vehicle />
        <WhyUs />
        <Coverage />
        <Entreprises />
        <PowerStation />
        <NewsUpdates />
        <CommunityCTA />
        <Testimonials />
        <FAQ />
        <Contact />
      </main>
      <Footer />
    </SmoothScroll>
  );
}
