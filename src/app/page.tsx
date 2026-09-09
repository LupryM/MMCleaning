import Navbar from "@/components/navbar";
import Hero from "@/components/hero";
import TrustReviews from "@/components/trust-reviews";
import PartnerBanner from "@/components/partner-banner";
import ServicesGrid from "@/components/services-grid";
import Introduction from "@/components/introduction";
import Footer from "@/components/footer";
import LocationsSection from "@/components/locations-section";
import WhatsappButton from "@/components/whatsapp-button";

export default function Home() {
  return (
    <main className="min-h-screen">
      <Navbar />
      <Hero />
      <ServicesGrid showViewAllButton={true} />
      <TrustReviews />
      <PartnerBanner />
      <Introduction />
      <LocationsSection />
      <Footer />
      <WhatsappButton />
    </main>
  );
}
