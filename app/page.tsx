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

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": ["LocalBusiness", "TaxiService"],
      "@id": "https://www.spm-taxi.fr/#business",
      name: "SPM — Taxi Conventionné",
      alternateName: ["SPM Taxi Villebois", "Taxi SPM Ain"],
      description:
        "Taxi SPM, taxi conventionné CPAM basé à Villebois (Ain 01). Volkswagen Tiguan Allspace 7 places. Transferts aéroport Lyon Saint-Exupéry, gares TGV, transport médical CPAM, colis urgents, remorque. Disponible 7j/7 24h/24.",
      url: "https://www.spm-taxi.fr",
      telephone: "+33767751898",
      email: "contact@spm-taxi.fr",
      priceRange: "€€",
      currenciesAccepted: "EUR",
      paymentAccepted: "Cash, Credit Card, Check",
      address: {
        "@type": "PostalAddress",
        streetAddress: "951 route des hauts fourneaux",
        addressLocality: "Villebois",
        postalCode: "01150",
        addressRegion: "Auvergne-Rhône-Alpes",
        addressCountry: "FR",
      },
      geo: { "@type": "GeoCoordinates", latitude: 45.8, longitude: 5.45 },
      areaServed: [
        { "@type": "AdministrativeArea", name: "Ain" },
        { "@type": "AdministrativeArea", name: "Isère" },
        { "@type": "AdministrativeArea", name: "Rhône" },
        { "@type": "City", name: "Lyon" },
        { "@type": "City", name: "Grenoble" },
        { "@type": "City", name: "Bourg-en-Bresse" },
        { "@type": "City", name: "Ambérieu-en-Bugey" },
        { "@type": "Airport", name: "Aéroport Lyon Saint-Exupéry" },
        { "@type": "Country", name: "France" },
      ],
      openingHoursSpecification: [
        {
          "@type": "OpeningHoursSpecification",
          dayOfWeek: ["Monday","Tuesday","Wednesday","Thursday","Friday","Saturday","Sunday"],
          opens: "00:00",
          closes: "23:59",
        },
      ],
      availableVehicle: {
        "@type": "Vehicle",
        name: "Volkswagen Tiguan Allspace",
        vehicleSeatingCapacity: 7,
        vehicleConfiguration: "SUV",
      },
      hasOfferCatalog: {
        "@type": "OfferCatalog",
        name: "Services de taxi SPM",
        itemListElement: [
          { "@type": "Offer", itemOffered: { "@type": "Service", name: "Transfert aéroport Lyon Saint-Exupéry", url: "https://www.spm-taxi.fr/transfert-aeroport-lyon" } },
          { "@type": "Offer", itemOffered: { "@type": "Service", name: "Transport médical conventionné CPAM", url: "https://www.spm-taxi.fr/taxi-conventionné-cpam" } },
          { "@type": "Offer", itemOffered: { "@type": "Service", name: "Transport de colis urgent", url: "https://www.spm-taxi.fr/taxi-remorque-ain" } },
          { "@type": "Offer", itemOffered: { "@type": "Service", name: "Déplacement longue distance France entière", url: "https://www.spm-taxi.fr/taxi-longue-distance" } },
        ],
      },
      aggregateRating: {
        "@type": "AggregateRating",
        ratingValue: "4.9",
        reviewCount: "9",
        bestRating: "5",
      },
      review: [
        { "@type": "Review", author: { "@type": "Person", name: "F.I TAXI" }, reviewRating: { "@type": "Rating", ratingValue: "5" }, reviewBody: "Très professionnel et ponctuel. Je recommande vivement." },
        { "@type": "Review", author: { "@type": "Person", name: "Chloé Burguiere" }, reviewRating: { "@type": "Rating", ratingValue: "5" }, reviewBody: "Super chauffeur, très sympa et à l'heure. Parfait pour l'aéroport." },
        { "@type": "Review", author: { "@type": "Person", name: "Khalid El ouazzani" }, reviewRating: { "@type": "Rating", ratingValue: "5" }, reviewBody: "Service impeccable, véhicule propre et confortable. Merci !" },
      ],
    },
    {
      "@type": "FAQPage",
      mainEntity: [
        {
          "@type": "Question",
          name: "Qu'est-ce qu'un taxi conventionné ?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Un taxi conventionné est agréé par la CPAM pour les transports médicaux. Les trajets peuvent être pris en charge partiellement ou totalement par l'Assurance Maladie sur prescription médicale.",
          },
        },
        {
          "@type": "Question",
          name: "Comment obtenir un devis pour un taxi SPM ?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Remplissez le formulaire de contact ou appelez directement au 07 67 75 18 98. Je réponds sous 2h avec une estimation de prix. Devis gratuits et sans engagement.",
          },
        },
        {
          "@type": "Question",
          name: "Quelles zones couvre le taxi SPM ?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "SPM est basé à Villebois et intervient dans l'Ain, à Lyon et en Isère. Pour les longues distances, déplacements partout en France sur devis.",
          },
        },
        {
          "@type": "Question",
          name: "Puis-je réserver un taxi SPM à l'avance ?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Absolument — la réservation anticipée est recommandée pour les aéroports et rendez-vous médicaux. Les réservations de dernière minute sont aussi acceptées selon disponibilité.",
          },
        },
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
        <Vehicle />
        <WhyUs />
        <Coverage />
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
