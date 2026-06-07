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
      "@id": "https://www.taxi-tignieu.fr/#business",
      name: "Taxi Tignieu — Taxi Conventionné",
      description: "Taxi conventionné à Tignieu-Jameyzieu. Volkswagen Tiguan 7 places. Transferts aéroport, colis urgents, remorque.",
      url: "https://www.taxi-tignieu.fr",
      telephone: "+33600000000",
      email: "contact@taxi-tignieu.fr",
      address: { "@type": "PostalAddress", addressLocality: "Tignieu-Jameyzieu", postalCode: "38230", addressRegion: "Auvergne-Rhône-Alpes", addressCountry: "FR" },
      areaServed: [
        { "@type": "State", name: "Ain" },
        { "@type": "State", name: "Isère" },
        { "@type": "City", name: "Lyon" },
        { "@type": "Country", name: "France" },
      ],
      openingHoursSpecification: [{ "@type": "OpeningHoursSpecification", dayOfWeek: ["Monday","Tuesday","Wednesday","Thursday","Friday","Saturday","Sunday"], opens: "00:00", closes: "23:59" }],
      availableVehicle: { "@type": "Vehicle", name: "Volkswagen Tiguan", vehicleSeatingCapacity: 7 },
      aggregateRating: { "@type": "AggregateRating", ratingValue: "5", reviewCount: "47" },
    },
  ],
};

export default function Home() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
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
