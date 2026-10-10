import Navbar from "@/components/navbar";
import Footer from "@/components/footer";
import ContactForm from "@/components/contact-form";
import WhatsappButton from "@/components/whatsapp-button";
import { Metadata } from "next";
import Image from "next/image";

export const metadata: Metadata = {
  title: "Contact Us | Angie's Cleaning",
  description: "Get in touch with Angie's Cleaning for professional house cleaning services in Centurion.",
};

export default function ContactPage() {
  return (
    <main className="min-h-screen flex flex-col bg-background">
      <Navbar />
      
      {/* Header Section */}
      <section className="relative h-[380px] md:h-[460px] flex items-center justify-center overflow-hidden">
        {/* Background image */}
        <Image
          src="/Service Images/Deep-Cleaning-Company.jpg"
          alt="Professional cleaning team at work"
          fill
          className="object-cover object-center"
          priority
        />
        {/* Dark overlay */}
        <div className="absolute inset-0 bg-foreground/75" />
        {/* Geometric decoration */}
        <div
          aria-hidden="true"
          className="pointer-events-none absolute -top-24 -right-24 w-[30rem] h-[30rem] bg-lime/10 rotate-12 transform"
        />
        <div className="relative z-10 max-w-[1600px] mx-auto px-4 md:px-8 text-center">
          <span className="inline-flex items-center gap-2 bg-lime text-lime-foreground text-xs font-semibold uppercase tracking-wide px-4 py-1.5 rounded-none mb-6">
            Get In Touch
          </span>
          <h1 className="text-background font-heading font-extrabold leading-[0.95] tracking-tight text-5xl md:text-6xl text-balance mb-6">
            Contact <span className="text-lime">Us</span>
          </h1>
          <p className="text-background/80 text-lg max-w-2xl mx-auto leading-relaxed">
            Ready to experience a spotless home? Send us a message and we&apos;ll get back to you as soon as possible.
          </p>
        </div>
      </section>

      {/* Form Section */}
      <section className="py-20 px-4 md:px-8 flex-grow relative overflow-hidden">
        <div
          aria-hidden="true"
          className="pointer-events-none absolute -bottom-32 -left-40 w-[46rem] h-[46rem] bg-cream rotate-12 transform"
        />

        <div className="relative max-w-4xl mx-auto">
          <ContactForm />
          
          <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="p-8 bg-card border border-border flex flex-col items-center text-center">
              <div className="w-12 h-12 bg-lime text-lime-foreground flex items-center justify-center mb-4 text-xl">
                <i className="fa-solid fa-phone"></i>
              </div>
              <h3 className="font-heading font-extrabold text-foreground mb-2 text-xl">Call Us</h3>
              <p className="text-muted-foreground text-sm">064 511 0847</p>
            </div>
            
            <div className="p-8 bg-card border border-border flex flex-col items-center text-center">
              <div className="w-12 h-12 bg-lime text-lime-foreground flex items-center justify-center mb-4 text-xl">
                <i className="fa-solid fa-envelope"></i>
              </div>
              <h3 className="font-heading font-extrabold text-foreground mb-2 text-xl">Email Us</h3>
              <p className="text-muted-foreground text-sm">info@angiescleaning.co.za</p>
            </div>
            
            <div className="p-8 bg-card border border-border flex flex-col items-center text-center">
              <div className="w-12 h-12 bg-lime text-lime-foreground flex items-center justify-center mb-4 text-xl">
                <i className="fa-solid fa-location-dot"></i>
              </div>
              <h3 className="font-heading font-extrabold text-foreground mb-2 text-xl">Location</h3>
              <p className="text-muted-foreground text-sm">Centurion, South Africa</p>
            </div>
          </div>
        </div>
      </section>

      <Footer />
      <WhatsappButton />
    </main>
  );
}
