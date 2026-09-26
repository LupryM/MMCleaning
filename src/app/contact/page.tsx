import Navbar from "@/components/navbar";
import Footer from "@/components/footer";
import Sparkle from "@/components/sparkle";
import WhatsappButton from "@/components/whatsapp-button";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact Us | MM Cleaners",
  description: "Get in touch with MM Cleaners for professional house cleaning services in Centurion.",
};

export default function ContactPage() {
  return (
    <main className="min-h-screen flex flex-col bg-background">
      <Navbar />
      
      {/* Header Section */}
      <section className="relative bg-foreground text-background py-20 px-4 md:px-8 overflow-hidden">
        {/* Geometric decorations */}
        <div
          aria-hidden="true"
          className="pointer-events-none absolute -top-24 -right-24 w-[30rem] h-[30rem] bg-lime/10 rotate-12 transform"
        />
        <div className="relative max-w-[1600px] mx-auto text-center">
          <span className="inline-flex items-center gap-2 bg-lime text-lime-foreground text-xs font-semibold uppercase tracking-wide px-4 py-1.5 rounded-none mb-6">
            Get In Touch
          </span>
          <h1 className="text-background font-heading font-extrabold leading-[0.95] tracking-tight text-5xl md:text-6xl text-balance mb-6">
            Contact <span className="text-lime">Us</span>
          </h1>
          <p className="text-background/80 text-lg max-w-2xl mx-auto leading-relaxed">
            Ready to experience a spotless home? Send us a message and we'll get back to you as soon as possible.
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
          <div className="bg-card shadow-xl border border-border overflow-hidden">
            <div className="bg-lime px-8 py-6 text-lime-foreground flex justify-between items-center">
              <div>
                <h2 className="text-2xl font-extrabold font-heading">Send a Message</h2>
                <p className="opacity-90 text-sm mt-1">Fill out the form below and we will be in touch.</p>
              </div>
              <Sparkle className="w-8 h-8 text-foreground hidden sm:block" />
            </div>
            
            <form className="p-8 space-y-6" action="#">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-semibold text-foreground mb-2">Full Name *</label>
                  <input 
                    type="text" 
                    id="name" 
                    name="name" 
                    className="w-full px-4 py-3 bg-cream border border-border rounded-none text-sm focus:outline-none focus:ring-2 focus:ring-lime focus:border-transparent text-foreground"
                    placeholder="John Doe"
                    required
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-semibold text-foreground mb-2">Email Address *</label>
                  <input 
                    type="email" 
                    id="email" 
                    name="email" 
                    className="w-full px-4 py-3 bg-cream border border-border rounded-none text-sm focus:outline-none focus:ring-2 focus:ring-lime focus:border-transparent text-foreground"
                    placeholder="john@example.com"
                    required
                  />
                </div>
              </div>

              <div>
                <label htmlFor="phone" className="block text-sm font-semibold text-foreground mb-2">Phone Number *</label>
                <input 
                  type="tel" 
                  id="phone" 
                  name="phone" 
                  className="w-full px-4 py-3 bg-cream border border-border rounded-none text-sm focus:outline-none focus:ring-2 focus:ring-lime focus:border-transparent text-foreground"
                  placeholder="082 123 4567"
                  required
                />
              </div>

              <div>
                <label htmlFor="service" className="block text-sm font-semibold text-foreground mb-2">Service Needed</label>
                <select
                  id="service"
                  name="service"
                  className="w-full px-4 py-3 bg-cream border border-border rounded-none text-sm text-foreground focus:outline-none focus:ring-2 focus:ring-lime focus:border-transparent"
                  defaultValue=""
                >
                  <option value="" disabled>Select a service</option>
                  <option value="house-cleaning">House Cleaning</option>
                  <option value="deep-cleaning">Deep Cleaning</option>
                  <option value="move-in-out">Move In/Out Cleaning</option>
                  <option value="apartment-cleaning">Apartment Cleaning</option>
                  <option value="post-construction">Post Construction Cleaning</option>
                  <option value="upholstery-cleaning">Upholstery Cleaning</option>
                  <option value="carpet-cleaning">Carpet Cleaning</option>
                </select>
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-semibold text-foreground mb-2">Your Message *</label>
                <textarea 
                  id="message" 
                  name="message" 
                  rows={5}
                  className="w-full px-4 py-3 bg-cream border border-border rounded-none text-sm focus:outline-none focus:ring-2 focus:ring-lime focus:border-transparent resize-none text-foreground"
                  placeholder="How can we help you?"
                  required
                ></textarea>
              </div>

              <button 
                type="submit"
                className="group w-full inline-flex items-center justify-center gap-2 bg-foreground text-background font-bold py-4 rounded-none hover:bg-lime hover:text-lime-foreground transition-colors duration-300 mt-2"
              >
                Send Message
                <span className="transition-transform group-hover:translate-x-1">
                  →
                </span>
              </button>
            </form>
          </div>
          
          <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="p-8 bg-card border border-border flex flex-col items-center text-center">
              <div className="w-12 h-12 bg-lime text-lime-foreground flex items-center justify-center mb-4 text-xl">
                <i className="fa-solid fa-phone"></i>
              </div>
              <h3 className="font-heading font-extrabold text-foreground mb-2 text-xl">Call Us</h3>
              <p className="text-muted-foreground text-sm">082 123 4567</p>
            </div>
            
            <div className="p-8 bg-card border border-border flex flex-col items-center text-center">
              <div className="w-12 h-12 bg-lime text-lime-foreground flex items-center justify-center mb-4 text-xl">
                <i className="fa-solid fa-envelope"></i>
              </div>
              <h3 className="font-heading font-extrabold text-foreground mb-2 text-xl">Email Us</h3>
              <p className="text-muted-foreground text-sm">info@mmcleaners.co.za</p>
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
