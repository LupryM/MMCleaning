import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import Navbar from "@/components/navbar";
import ServicesGrid from "@/components/services-grid";
import ServiceGallery from "@/components/service-gallery";
import Footer from "@/components/footer";
import WhatsappButton from "@/components/whatsapp-button";
import Sparkle from "@/components/sparkle";

export const metadata: Metadata = {
  title: "Commercial Cleaning Services in Centurion | Angie's Cleaning",
  description:
    "Maintain a professional and clean workspace with Angie's Cleaning commercial cleaning services in Centurion. Tailored for offices, retail spaces, and businesses.",
};

const areas = [
  {
    title: "Reception & Waiting Areas",
    description: "Create a great first impression for your clients and guests.",
    items: ["Dusting and wiping all surfaces", "Vacuuming and mopping floors", "Cleaning glass doors and windows", "Tidying magazines and displays"],
  },
  {
    title: "Offices & Workspaces",
    description: "A clean environment for improved focus and productivity.",
    items: ["Emptying bins and recycling", "Wiping desks and communal tables", "Cleaning monitors and equipment gently", "Vacuuming carpets and mopping hard floors"],
  },
  {
    title: "Breakrooms & Kitchens",
    description: "Hygienic and welcoming spaces for your team to recharge.",
    items: ["Cleaning microwaves, fridges and appliances", "Wiping down counters and tables", "Sanitizing sinks and taps", "Restocking supplies if required"],
  },
  {
    title: "Restrooms",
    description: "Spotless and sanitized facilities maintained to the highest standards.",
    items: ["Thorough sanitization of toilets and urinals", "Cleaning mirrors and sinks", "Restocking soap and paper towels", "Mopping and disinfecting floors"],
  },
];

const faqs = [
  ["Do you provide cleaning supplies and equipment?", "Yes, we bring all the necessary commercial-grade cleaning supplies and equipment to ensure a high-quality clean for your business."],
  ["Can you clean after office hours?", "Absolutely. We offer flexible scheduling, including evenings and weekends, to minimize disruption to your business operations."],
  ["Do you offer customized cleaning plans?", "Yes, we work with you to develop a tailored cleaning schedule that fits the specific needs and budget of your business."],
  ["Are your cleaners insured and trained?", "Yes, our team is fully trained, insured, and experienced in commercial cleaning to provide peace of mind and excellent results."],
];

export default function CommercialCleaningPage() {
  return (
    <main className="min-h-screen overflow-hidden">
      <Navbar />

      <section className="bg-cream">
        <div className="mx-auto grid max-w-[1600px] gap-12 px-4 pb-16 pt-8 sm:px-8 lg:grid-cols-[0.9fr_1.1fr] lg:items-center lg:gap-20 lg:px-12 lg:pb-24 lg:pt-12">
          <div>
            <div className="mb-8 flex items-center gap-2 text-sm font-semibold text-muted-foreground">
              <Link href="/services" className="transition hover:text-foreground">Our services</Link>
              <span>/</span>
              <span className="text-foreground">Commercial cleaning</span>
            </div>
            <p className="mb-5 flex items-center gap-3 text-sm font-bold uppercase tracking-[0.18em] text-muted-foreground">
              <span className="h-px w-8 bg-lime" /> Professional workspaces
            </p>
            <h1 className="max-w-3xl text-5xl font-extrabold leading-[0.98] tracking-[-0.05em] sm:text-6xl lg:text-7xl">
              A workspace you can be <span className="text-lime">proud of.</span>
            </h1>
            <p className="mt-7 max-w-xl text-lg leading-8 text-muted-foreground">
              Our commercial cleaning service ensures your business always looks its best. Reliable, thorough, and flexible cleaning for offices and commercial spaces in Centurion.
            </p>
            <div className="mt-9 flex flex-col gap-3 sm:flex-row">
              <Link href="#quote" className="inline-flex items-center justify-center gap-3 bg-foreground px-7 py-4 font-bold text-background transition hover:bg-foreground/85">
                Get your free quote <span className="text-lime">→</span>
              </Link>
              <a href="tel:+27783928061" className="inline-flex items-center justify-center border border-foreground/15 px-7 py-4 font-bold transition hover:border-foreground hover:bg-background">
                Call 078 392 8061
              </a>
            </div>
            <div className="mt-10 flex flex-wrap gap-x-7 gap-y-3 text-sm font-semibold">
              <span className="flex items-center gap-2"><span className="text-lime">★</span> 5-star service</span>
              <span className="flex items-center gap-2"><span className="text-lime">✓</span> 100% satisfaction guarantee</span>
            </div>
          </div>
          <div className="relative min-h-[440px] overflow-hidden bg-dark sm:min-h-[560px]">
            <Image src="/Service Images/Office Cleaning.jpg" alt="Professional commercial cleaning" fill priority className="object-cover" sizes="(max-width: 1024px) 100vw, 55vw" />
            <div className="absolute inset-0 bg-gradient-to-t from-dark/65 via-transparent to-transparent" />
            <div className="absolute bottom-0 left-0 right-0 flex items-end justify-between p-6 text-background sm:p-8">
              <div><p className="text-sm font-semibold text-background/70">Angie's Cleaning</p><p className="mt-1 text-2xl font-extrabold">Professional spaces.</p></div>
              <Sparkle className="h-12 w-12 text-lime" />
            </div>
          </div>
        </div>
      </section>

      <section className="border-b border-border bg-background">
        <div className="mx-auto grid max-w-[1600px] gap-6 px-4 py-7 sm:grid-cols-3 sm:px-8 lg:grid-cols-3 lg:px-12">
          {[['Consistent Quality', 'We deliver the same high standard of cleaning every single time.'], ['Flexible Scheduling', 'We work around your business hours to minimize disruptions.'], ['Customized Plans', 'Services tailored specifically to your facility and requirements.']].map(([title, text]) => <div key={title} className="border-l-2 border-lime pl-4"><h2 className="font-bold">{title}</h2><p className="mt-1 text-sm leading-6 text-muted-foreground">{text}</p></div>)}
        </div>
      </section>

      <section className="mx-auto max-w-[1600px] px-4 py-20 sm:px-8 lg:px-12 lg:py-28">
        <div className="grid gap-12 lg:grid-cols-[0.75fr_1.25fr] lg:gap-24">
          <div><p className="text-sm font-bold uppercase tracking-[0.18em] text-muted-foreground">Why commercial cleaning?</p><h2 className="mt-4 text-4xl font-extrabold leading-tight tracking-[-0.04em] sm:text-5xl">Boost morale and <span className="text-lime">productivity.</span></h2></div>
          <div className="max-w-2xl"><p className="text-xl leading-8">A clean workspace is essential for employee wellbeing and making a great impression on visiting clients or customers.</p><p className="mt-6 leading-7 text-muted-foreground">We handle all the daily or weekly cleaning tasks so you and your team can focus on what you do best. From sparkling floors to sanitized restrooms, we ensure your business environment is healthy and inviting.</p></div>
        </div>
      </section>

      <section className="bg-cream" id="included">
        <div className="mx-auto max-w-[1600px] px-4 py-20 sm:px-8 lg:px-12 lg:py-28">
          <div className="mb-12 flex flex-col justify-between gap-6 sm:flex-row sm:items-end"><div><p className="text-sm font-bold uppercase tracking-[0.18em] text-muted-foreground">What we cover</p><h2 className="mt-3 text-4xl font-extrabold tracking-[-0.04em] sm:text-5xl">Every area, <span className="text-lime">expertly maintained.</span></h2></div><p className="max-w-sm text-sm leading-6 text-muted-foreground">We customize our cleaning checklist to suit your specific office or retail layout.</p></div>
          <div className="grid gap-px bg-border sm:grid-cols-2 lg:grid-cols-4">{areas.map((area) => <article key={area.title} className="bg-background p-7 sm:p-8"><h3 className="text-2xl font-extrabold">{area.title}</h3><p className="mt-3 min-h-14 text-sm leading-6 text-muted-foreground">{area.description}</p><ul className="mt-6 space-y-3 border-t border-border pt-5 text-sm">{area.items.map((item) => <li key={item} className="flex gap-2"><span className="text-lime">✓</span>{item}</li>)}</ul></article>)}</div>
        </div>
      </section>

      <section className="bg-cream" aria-labelledby="gallery-heading">
        <div className="mx-auto max-w-[1600px] px-4 py-20 sm:px-8 lg:px-12 lg:py-28">
          <div className="mb-12 flex flex-col justify-between gap-6 sm:flex-row sm:items-end">
            <div>
              <p className="text-sm font-bold uppercase tracking-[0.18em] text-muted-foreground">The Angie's Cleaning finish</p>
              <h2 id="gallery-heading" className="mt-3 max-w-2xl text-4xl font-extrabold tracking-[-0.04em] sm:text-5xl">A closer look at <span className="text-lime">professional standards.</span></h2>
            </div>
            <p className="max-w-sm text-sm leading-6 text-muted-foreground">Immaculate workspaces that reflect the quality of your business.</p>
          </div>
          <ServiceGallery
            images={[
              { src: "/Service Images/Office Cleaning.jpg", alt: "Commercial space cleaning", caption: "Professional spaces.", subcaption: "Spotless and ready for business" },
              { src: "/Service Images/commercial-cleaning-services.jpg", alt: "Cleaning office spaces" },
              { src: "/Service Images/Deep-Cleaning-Company.jpg", alt: "Detailed commercial cleaning" },
            ]}
          />
        </div>
      </section>

      <section className="bg-dark text-background" id="quote">
        <div className="mx-auto grid max-w-[1600px] gap-10 px-4 py-16 sm:px-8 lg:grid-cols-[1fr_auto] lg:items-center lg:px-12 lg:py-20"><div><p className="text-sm font-bold uppercase tracking-[0.18em] text-lime">Upgrade your workspace</p><h2 className="mt-3 max-w-3xl text-4xl font-extrabold leading-tight tracking-[-0.04em] text-background sm:text-5xl">Let&apos;s elevate your business environment.</h2><p className="mt-4 max-w-xl leading-7 text-background/65">Contact us today to discuss your commercial cleaning needs and receive a custom quote.</p></div><div className="flex flex-col gap-3 sm:flex-row lg:flex-col"><Link href="/#contact" className="inline-flex items-center justify-center bg-lime px-7 py-4 font-bold text-lime-foreground transition hover:bg-lime/85">Request a quote <span className="ml-3">→</span></Link><a href="tel:+27783928061" className="inline-flex items-center justify-center border border-background/20 px-7 py-4 font-bold text-background transition hover:border-lime hover:text-lime">Call us directly</a></div></div>
      </section>

      <section className="mx-auto max-w-3xl px-4 py-20 sm:px-8 lg:py-28"><p className="text-sm font-bold uppercase tracking-[0.18em] text-muted-foreground">Good to know</p><h2 className="mt-3 text-4xl font-extrabold tracking-[-0.04em] sm:text-5xl">Commercial cleaning FAQs</h2><div className="mt-10 divide-y divide-border border-y border-border">{faqs.map(([question, answer]) => <details key={question} className="group py-5"><summary className="flex cursor-pointer list-none items-center justify-between gap-6 text-lg font-bold [&::-webkit-details-marker]:hidden"><span>{question}</span><span className="text-2xl font-normal text-lime transition group-open:rotate-45">+</span></summary><p className="max-w-2xl pt-4 leading-7 text-muted-foreground">{answer}</p></details>)}</div></section>

            <ServicesGrid 
        showViewAllButton={true}
        badge="More ways we can help"
        title="Other services we offer."
        subtitle=""
        exclude="/services/commercial-cleaning"
      />
      <Footer />
      <WhatsappButton />
    </main>
  );
}
