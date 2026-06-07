import Loader from "@/components/Loader";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Services from "@/components/Services";
import Vehicle from "@/components/Vehicle";
import Coverage from "@/components/Coverage";
import Testimonials from "@/components/Testimonials";
import FAQ from "@/components/FAQ";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": ["LocalBusiness", "TaxiService"],
      "@id": "https://www.spm-taxi.fr/#business",
      name: "SPM — Taxi Conventionné",
      alternateName: "SPM Taxi Tignieu",
      description:
        "SPM, taxi conventionné CPAM basé à Tignieu-Jameyzieu. Transport de personnes, colis urgents, transferts aéroport Lyon Saint-Exupéry, gares TGV. Volkswagen Tiguan Allspace 7 places. Remorque disponible.",
      url: "https://www.spm-taxi.fr",
      telephone: "+33600000000",
      email: "contact@spm-taxi.fr",
      priceRange: "€€",
      address: {
        "@type": "PostalAddress",
        streetAddress: "Tignieu-Jameyzieu",
        addressLocality: "Tignieu-Jameyzieu",
        postalCode: "38230",
        addressRegion: "Auvergne-Rhône-Alpes",
        addressCountry: "FR",
      },
      geo: { "@type": "GeoCoordinates", latitude: 45.72, longitude: 5.17 },
      areaServed: [
        { "@type": "AdministrativeArea", name: "Ain" },
        { "@type": "AdministrativeArea", name: "Isère" },
        { "@type": "AdministrativeArea", name: "Rhône" },
        { "@type": "City", name: "Lyon" },
        { "@type": "City", name: "Grenoble" },
        { "@type": "City", name: "Bourg-en-Bresse" },
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
      },
      hasOfferCatalog: {
        "@type": "OfferCatalog",
        name: "Services de taxi SPM",
        itemListElement: [
          { "@type": "Offer", itemOffered: { "@type": "Service", name: "Transfert aéroport Lyon Saint-Exupéry" } },
          { "@type": "Offer", itemOffered: { "@type": "Service", name: "Transport médical conventionné CPAM" } },
          { "@type": "Offer", itemOffered: { "@type": "Service", name: "Transport de colis urgent" } },
          { "@type": "Offer", itemOffered: { "@type": "Service", name: "Déplacement longue distance France entière" } },
        ],
      },
      aggregateRating: {
        "@type": "AggregateRating",
        ratingValue: "5",
        reviewCount: "47",
        bestRating: "5",
      },
    },
  ],
};

export default function Home() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <Loader />
      <Navbar />
      <main className="w-full overflow-hidden">
        <Hero />
        <Services />
        <Vehicle />
        <Coverage />
        <Testimonials />
        <FAQ />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
