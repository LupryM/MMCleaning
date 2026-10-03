import type { Metadata } from "next";
import Navbar from "@/components/navbar";
import ServicesGrid from "@/components/services-grid";
import Footer from "@/components/footer";
import WhatsappButton from "@/components/whatsapp-button";
import Image from "next/image";

export const metadata: Metadata = {
  title: "Our Services | Angie's Cleaning - Professional Cleaning in Centurion",
  description:
    "Explore all cleaning services offered by Angie's Cleaning, including commercial cleaning, deep cleaning, move-in/out cleaning, carpet cleaning, and more in Centurion.",
};

export default function ServicesPage() {
  return (
    <main className="min-h-screen">
      <Navbar />
      
      {/* Services Page Hero */}
      <section className="relative h-[420px] md:h-[520px] flex items-center justify-center overflow-hidden">
        {/* Background image */}
        <Image
          src="/services header.webp"
          alt="Professional cleaning services"
          fill
          className="object-cover object-center"
          priority
        />
        {/* Dark overlay */}
        <div className="absolute inset-0 bg-foreground/70" />
        {/* Content */}
        <div className="relative z-10 max-w-[1600px] mx-auto px-4 sm:px-8 lg:px-12 text-center">
          <h1 className="text-background font-heading font-extrabold text-4xl md:text-5xl lg:text-6xl tracking-tight mb-6">
            Professional Cleaning <span className="text-lime">Services</span>
          </h1>
          <p className="text-lg md:text-xl text-background/80 max-w-2xl mx-auto">
            From deep cleaning to regular maintenance, we provide comprehensive cleaning solutions tailored to your specific needs. Explore our full range of services below.
          </p>
        </div>
      </section>

      <ServicesGrid showViewAllButton={false} />
      <Footer />
      <WhatsappButton />
    </main>
  );
}
