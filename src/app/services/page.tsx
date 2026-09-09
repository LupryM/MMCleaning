import type { Metadata } from "next";
import Navbar from "@/components/navbar";
import ServicesGrid from "@/components/services-grid";
import AdditionalServices from "@/components/additional-services";
import Footer from "@/components/footer";
import WhatsappButton from "@/components/whatsapp-button";

export const metadata: Metadata = {
  title: "Our Services | MM Cleaners - Professional Cleaning in Centurion",
  description:
    "Explore all cleaning services offered by MM Cleaners, including commercial cleaning, deep cleaning, move-in/out cleaning, carpet cleaning, and more in Centurion.",
};

export default function ServicesPage() {
  return (
    <main className="min-h-screen">
      <Navbar />
      
      {/* Services Page Hero */}
      <section className="bg-foreground text-background pt-36 pb-20">
        <div className="max-w-[1600px] mx-auto px-4 sm:px-8 lg:px-12 text-center">
          <h1 className="text-background font-heading font-extrabold text-4xl md:text-5xl lg:text-6xl tracking-tight mb-6">
            Professional Cleaning <span className="text-lime">Services</span>
          </h1>
          <p className="text-lg md:text-xl text-background/80 max-w-2xl mx-auto">
            From deep cleaning to regular maintenance, we provide comprehensive cleaning solutions tailored to your specific needs. Explore our full range of services below.
          </p>
        </div>
      </section>

      <ServicesGrid showViewAllButton={false} />
      <AdditionalServices />
      <Footer />
      <WhatsappButton />
    </main>
  );
}
