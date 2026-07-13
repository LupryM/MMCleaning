import Navbar from "@/components/navbar";
import Hero from "@/components/hero";
import Features from "@/components/features";
import TrustReviews from "@/components/trust-reviews";
import PartnerBanner from "@/components/partner-banner";
import Introduction from "@/components/introduction";
import ServicesGrid from "@/components/services-grid";
import AdditionalServices from "@/components/additional-services";
import Footer from "@/components/footer";
import WhatsappButton from "@/components/whatsapp-button";

export default function Home() {
  return (
    <main className="min-h-screen">
      <Navbar />
      <Hero />
      <Features />
      <TrustReviews />
      <PartnerBanner />
      <Introduction />
      <ServicesGrid />
      <AdditionalServices />
      <Footer />
      <WhatsappButton />
    </main>
  );
}
