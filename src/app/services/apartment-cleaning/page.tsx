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
  title: "Apartment Cleaning Services in Centurion | MM Cleaners",
  description:
    "Keep your apartment spotless with MM Cleaners. We provide reliable and thorough apartment cleaning services in Centurion.",
};

const rooms = [
  {
    title: "Kitchen",
    description: "Keeping your kitchen hygienic and ready for your next meal.",
    items: ["Wiping countertops and appliances", "Cleaning the sink and taps", "Wiping cabinet fronts", "Sweeping and mopping floors"],
  },
  {
    title: "Bathrooms",
    description: "A sparkling clean for your personal sanctuary.",
    items: ["Scrubbing showers, baths and sinks", "Disinfecting toilets", "Cleaning mirrors and glass", "Mopping floors"],
  },
  {
    title: "Bedrooms",
    description: "Creating a relaxing environment for a good night's rest.",
    items: ["Dusting furniture and surfaces", "Making beds (upon request)", "Vacuuming or sweeping floors", "Tidying up general clutter"],
  },
  {
    title: "Living Areas",
    description: "A tidy and welcoming space for you and your guests.",
    items: ["Dusting electronics and décor", "Vacuuming carpets and rugs", "Mopping hard floors", "Fluffing pillows and folding blankets"],
  },
];

const faqs = [
  ["Do I need to be home during the cleaning?", "No, you don't need to be home. Many of our clients provide a spare key or access code so we can clean while they are out."],
  ["What if my apartment is very small or very large?", "We adapt our services to the size of your apartment, ensuring everything is thoroughly cleaned whether it's a cozy studio or a large penthouse."],
  ["Are cleaning supplies included?", "Yes, we bring all the necessary professional cleaning supplies and equipment with us."],
  ["Can I request special tasks like oven cleaning?", "Yes! Let us know what extra tasks you need, like oven or fridge interior cleaning, and we can include them in your service for an additional fee."],
];

export default function ApartmentCleaningPage() {
  return (
    <main className="min-h-screen overflow-hidden">
      <Navbar />

      <section className="bg-cream">
        <div className="mx-auto grid max-w-[1600px] gap-12 px-4 pb-16 pt-8 sm:px-8 lg:grid-cols-[0.9fr_1.1fr] lg:items-center lg:gap-20 lg:px-12 lg:pb-24 lg:pt-12">
          <div>
            <div className="mb-8 flex items-center gap-2 text-sm font-semibold text-muted-foreground">
              <Link href="/services" className="transition hover:text-foreground">Our services</Link>
              <span>/</span>
              <span className="text-foreground">Apartment cleaning</span>
            </div>
            <p className="mb-5 flex items-center gap-3 text-sm font-bold uppercase tracking-[0.18em] text-muted-foreground">
              <span className="h-px w-8 bg-lime" /> Tailored for apartment living
            </p>
            <h1 className="max-w-3xl text-5xl font-extrabold leading-[0.98] tracking-[-0.05em] sm:text-6xl lg:text-7xl">
              Come home to <span className="text-lime">spotless.</span>
            </h1>
            <p className="mt-7 max-w-xl text-lg leading-8 text-muted-foreground">
              Our apartment cleaning services are designed to keep your living space fresh and comfortable. Reliable, detail-oriented cleaning for apartments of all sizes in Centurion.
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
            <Image src="/Service Images/apartment clean.jpg" alt="Professional apartment cleaning" fill priority className="object-cover" sizes="(max-width: 1024px) 100vw, 55vw" />
            <div className="absolute inset-0 bg-gradient-to-t from-dark/65 via-transparent to-transparent" />
            <div className="absolute bottom-0 left-0 right-0 flex items-end justify-between p-6 text-background sm:p-8">
              <div><p className="text-sm font-semibold text-background/70">MM Cleaners</p><p className="mt-1 text-2xl font-extrabold">Cozy & Clean.</p></div>
              <Sparkle className="h-12 w-12 text-lime" />
            </div>
          </div>
        </div>
      </section>

      <section className="border-b border-border bg-background">
        <div className="mx-auto grid max-w-[1600px] gap-6 px-4 py-7 sm:grid-cols-3 sm:px-8 lg:grid-cols-3 lg:px-12">
          {[['Consistent Quality', 'We deliver the same high standard of cleaning every single time.'], ['Flexible Scheduling', 'Choose weekly, bi-weekly, or monthly cleaning that fits your lifestyle.'], ['Trusted Professionals', 'Our cleaners are vetted and trained to respect your privacy and space.']].map(([title, text]) => <div key={title} className="border-l-2 border-lime pl-4"><h2 className="font-bold">{title}</h2><p className="mt-1 text-sm leading-6 text-muted-foreground">{text}</p></div>)}
        </div>
      </section>

      <section className="mx-auto max-w-[1600px] px-4 py-20 sm:px-8 lg:px-12 lg:py-28">
        <div className="grid gap-12 lg:grid-cols-[0.75fr_1.25fr] lg:gap-24">
          <div><p className="text-sm font-bold uppercase tracking-[0.18em] text-muted-foreground">Why apartment cleaning?</p><h2 className="mt-4 text-4xl font-extrabold leading-tight tracking-[-0.04em] sm:text-5xl">Reclaim your <span className="text-lime">free time.</span></h2></div>
          <div className="max-w-2xl"><p className="text-xl leading-8">Apartment living should be convenient. Don&apos;t spend your weekends scrubbing floors and cleaning bathrooms.</p><p className="mt-6 leading-7 text-muted-foreground">We handle all the chores so you can simply enjoy your home. From studios to large penthouses, we treat your apartment with the care and attention it deserves, ensuring it&apos;s always a refreshing place to return to.</p></div>
        </div>
      </section>

      <section className="bg-cream" id="included">
        <div className="mx-auto max-w-[1600px] px-4 py-20 sm:px-8 lg:px-12 lg:py-28">
          <div className="mb-12 flex flex-col justify-between gap-6 sm:flex-row sm:items-end"><div><p className="text-sm font-bold uppercase tracking-[0.18em] text-muted-foreground">What we cover</p><h2 className="mt-3 text-4xl font-extrabold tracking-[-0.04em] sm:text-5xl">Every room, <span className="text-lime">properly done.</span></h2></div><p className="max-w-sm text-sm leading-6 text-muted-foreground">Our checklist is detailed, ensuring every part of your apartment gets the attention it needs.</p></div>
          <div className="grid gap-px bg-border sm:grid-cols-2 lg:grid-cols-4">{rooms.map((room) => <article key={room.title} className="bg-background p-7 sm:p-8"><h3 className="text-2xl font-extrabold">{room.title}</h3><p className="mt-3 min-h-14 text-sm leading-6 text-muted-foreground">{room.description}</p><ul className="mt-6 space-y-3 border-t border-border pt-5 text-sm">{room.items.map((item) => <li key={item} className="flex gap-2"><span className="text-lime">✓</span>{item}</li>)}</ul></article>)}</div>
        </div>
      </section>

      <section className="bg-cream" aria-labelledby="gallery-heading">
        <div className="mx-auto max-w-[1600px] px-4 py-20 sm:px-8 lg:px-12 lg:py-28">
          <div className="mb-12 flex flex-col justify-between gap-6 sm:flex-row sm:items-end">
            <div>
              <p className="text-sm font-bold uppercase tracking-[0.18em] text-muted-foreground">The MM Cleaners finish</p>
              <h2 id="gallery-heading" className="mt-3 max-w-2xl text-4xl font-extrabold tracking-[-0.04em] sm:text-5xl">A closer look at <span className="text-lime">properly clean.</span></h2>
            </div>
            <p className="max-w-sm text-sm leading-6 text-muted-foreground">Thoughtful detail, fresh surfaces and a finish you can see the moment you walk in.</p>
          </div>
          <ServiceGallery
            images={[
              { src: "/Service Images/apartment clean.jpg", alt: "MM Cleaners team completing an apartment clean", caption: "Cozy & Clean.", subcaption: "Detail from top to bottom" },
              { src: "/Service Images/Deep-Cleaning-Company.jpg", alt: "Freshly cleaned apartment interior" },
              { src: "/Service Images/Move in cleaning.jpg", alt: "Professional apartment cleaning service" },
            ]}
          />
        </div>
      </section>

      <section className="bg-dark text-background" id="quote">
        <div className="mx-auto grid max-w-[1600px] gap-10 px-4 py-16 sm:px-8 lg:grid-cols-[1fr_auto] lg:items-center lg:px-12 lg:py-20"><div><p className="text-sm font-bold uppercase tracking-[0.18em] text-lime">Ready for the reset?</p><h2 className="mt-3 max-w-3xl text-4xl font-extrabold leading-tight tracking-[-0.04em] text-background sm:text-5xl">Let&apos;s make your apartment feel brand new.</h2><p className="mt-4 max-w-xl leading-7 text-background/65">Tell us a little about your apartment and we will send you a clear, no-obligation quote.</p></div><div className="flex flex-col gap-3 sm:flex-row lg:flex-col"><Link href="/#contact" className="inline-flex items-center justify-center bg-lime px-7 py-4 font-bold text-lime-foreground transition hover:bg-lime/85">Request a quote <span className="ml-3">→</span></Link><a href="tel:+27783928061" className="inline-flex items-center justify-center border border-background/20 px-7 py-4 font-bold text-background transition hover:border-lime hover:text-lime">Call us directly</a></div></div>
      </section>

      <section className="mx-auto max-w-3xl px-4 py-20 sm:px-8 lg:py-28"><p className="text-sm font-bold uppercase tracking-[0.18em] text-muted-foreground">Good to know</p><h2 className="mt-3 text-4xl font-extrabold tracking-[-0.04em] sm:text-5xl">Apartment cleaning FAQs</h2><div className="mt-10 divide-y divide-border border-y border-border">{faqs.map(([question, answer]) => <details key={question} className="group py-5"><summary className="flex cursor-pointer list-none items-center justify-between gap-6 text-lg font-bold [&::-webkit-details-marker]:hidden"><span>{question}</span><span className="text-2xl font-normal text-lime transition group-open:rotate-45">+</span></summary><p className="max-w-2xl pt-4 leading-7 text-muted-foreground">{answer}</p></details>)}</div></section>

            <ServicesGrid 
        showViewAllButton={true}
        badge="More ways we can help"
        title="Other services we offer."
        subtitle=""
        exclude="/services/apartment-cleaning"
      />
      <Footer />
      <WhatsappButton />
    </main>
  );
}
