import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import Navbar from "@/components/navbar";
import Footer from "@/components/footer";
import WhatsappButton from "@/components/whatsapp-button";
import Sparkle from "@/components/sparkle";

export const metadata: Metadata = {
  title: "Deep Cleaning Services in Centurion | MM Cleaners",
  description:
    "Give your home a fresh start with MM Cleaners deep cleaning services in Centurion. Detailed kitchen, bathroom, bedroom and living area cleaning.",
};

const rooms = [
  {
    number: "01",
    title: "Kitchen",
    description: "Degreasing and detailing for the places where everyday mess builds up.",
    items: ["Cabinets and cupboard fronts", "Appliances and splashbacks", "Sinks, taps and counters", "Floors and skirting boards"],
  },
  {
    number: "02",
    title: "Bathrooms",
    description: "A hygienic reset that leaves every surface bright, clean and fresh.",
    items: ["Showers, baths and basins", "Toilets and fittings", "Tiles and grout", "Mirrors, floors and fixtures"],
  },
  {
    number: "03",
    title: "Bedrooms",
    description: "Careful cleaning for a calmer, more comfortable place to rest.",
    items: ["Dusting and wiping surfaces", "Doors, frames and handles", "Skirting boards", "Floors and hard-to-reach areas"],
  },
  {
    number: "04",
    title: "Living areas",
    description: "The finishing touch for shared spaces, entertaining areas and hallways.",
    items: ["Furniture and surfaces", "Windowsills and ledges", "Light fittings and fans", "Floors, corners and edges"],
  },
];

const faqs = [
  ["What is included in a deep clean?", "A deep clean is a detailed, top-to-bottom service across your selected rooms. We focus on built-up dirt, overlooked surfaces, edges, fixtures and the areas that regular maintenance cleaning cannot always reach."],
  ["How long does deep cleaning take?", "The time depends on the size and condition of your home. Once we know more about your space, we can give you a clear estimate and tailor the service to your priorities."],
  ["Do I need to provide cleaning products?", "No. Our team arrives with the professional cleaning supplies needed for the service. If you have a preferred product or a surface with special care instructions, let us know before your booking."],
  ["Can I book a deep clean before moving in?", "Absolutely. Deep cleaning is ideal before moving into a new home, after renovations or whenever you want a thorough reset before regular cleaning begins."],
];

export default function DeepCleaningPage() {
  return (
    <main className="min-h-screen overflow-hidden">
      <Navbar />

      <section className="bg-cream">
        <div className="mx-auto grid max-w-[1600px] gap-12 px-4 pb-16 pt-8 sm:px-8 lg:grid-cols-[0.9fr_1.1fr] lg:items-center lg:gap-20 lg:px-12 lg:pb-24 lg:pt-12">
          <div>
            <div className="mb-8 flex items-center gap-2 text-sm font-semibold text-muted-foreground">
              <Link href="/services" className="transition hover:text-foreground">Our services</Link>
              <span>/</span>
              <span className="text-foreground">Deep cleaning</span>
            </div>
            <p className="mb-5 flex items-center gap-3 text-sm font-bold uppercase tracking-[0.18em] text-muted-foreground">
              <span className="h-px w-8 bg-lime" /> A complete reset for your home
            </p>
            <h1 className="max-w-3xl text-5xl font-extrabold leading-[0.98] tracking-[-0.05em] sm:text-6xl lg:text-7xl">
              The clean you notice <span className="text-lime">everywhere.</span>
            </h1>
            <p className="mt-7 max-w-xl text-lg leading-8 text-muted-foreground">
              Our deep cleaning service reaches the corners, surfaces and details that everyday cleaning can miss. A fresh, thorough reset for homes in Centurion and nearby areas.
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
            <Image src="/Service Images/Deep-Cleaning-Company.jpg" alt="Professional cleaner deep cleaning a home" fill priority className="object-cover" sizes="(max-width: 1024px) 100vw, 55vw" />
            <div className="absolute inset-0 bg-gradient-to-t from-dark/65 via-transparent to-transparent" />
            <div className="absolute bottom-0 left-0 right-0 flex items-end justify-between p-6 text-background sm:p-8">
              <div><p className="text-sm font-semibold text-background/70">MM Cleaners</p><p className="mt-1 text-2xl font-extrabold">Fresh feels good.</p></div>
              <Sparkle className="h-12 w-12 text-lime" />
            </div>
          </div>
        </div>
      </section>

      <section className="border-b border-border bg-background">
        <div className="mx-auto grid max-w-[1600px] gap-6 px-4 py-7 sm:grid-cols-3 sm:px-8 lg:grid-cols-3 lg:px-12">
          {[['01', 'Detailed, not rushed', 'We focus on the overlooked areas that make the biggest difference.'], ['02', 'Built around your home', 'Choose the rooms and priorities that matter most to you.'], ['03', 'Local and dependable', 'Proudly serving Centurion with care you can count on.']].map(([number, title, text]) => <div key={number} className="flex gap-4 border-l-2 border-lime pl-4"><span className="font-mono text-sm text-muted-foreground">{number}</span><div><h2 className="font-bold">{title}</h2><p className="mt-1 text-sm leading-6 text-muted-foreground">{text}</p></div></div>)}
        </div>
      </section>

      <section className="mx-auto max-w-[1600px] px-4 py-20 sm:px-8 lg:px-12 lg:py-28">
        <div className="grid gap-12 lg:grid-cols-[0.75fr_1.25fr] lg:gap-24">
          <div><p className="text-sm font-bold uppercase tracking-[0.18em] text-muted-foreground">Why deep clean?</p><h2 className="mt-4 text-4xl font-extrabold leading-tight tracking-[-0.04em] sm:text-5xl">A reset you can <span className="text-lime">feel.</span></h2></div>
          <div className="max-w-2xl"><p className="text-xl leading-8">Whether you are preparing for a special occasion, moving into a new home or simply ready for a proper refresh, our deep clean gives your space the attention it deserves.</p><p className="mt-6 leading-7 text-muted-foreground">We work room by room, carefully cleaning high-touch points, built-up grime, fixtures, edges and hard-to-reach areas. The result is a home that looks brighter, feels healthier and is easier to maintain.</p></div>
        </div>
      </section>

      <section className="bg-cream" id="included">
        <div className="mx-auto max-w-[1600px] px-4 py-20 sm:px-8 lg:px-12 lg:py-28">
          <div className="mb-12 flex flex-col justify-between gap-6 sm:flex-row sm:items-end"><div><p className="text-sm font-bold uppercase tracking-[0.18em] text-muted-foreground">What we cover</p><h2 className="mt-3 text-4xl font-extrabold tracking-[-0.04em] sm:text-5xl">Every room, <span className="text-lime">properly done.</span></h2></div><p className="max-w-sm text-sm leading-6 text-muted-foreground">Our checklist is detailed, but your priorities come first. Tell us what needs extra attention when you request your quote.</p></div>
          <div className="grid gap-px bg-border sm:grid-cols-2 lg:grid-cols-4">{rooms.map((room) => <article key={room.number} className="bg-background p-7 sm:p-8"><span className="font-mono text-sm text-muted-foreground">{room.number}</span><h3 className="mt-12 text-2xl font-extrabold">{room.title}</h3><p className="mt-3 min-h-14 text-sm leading-6 text-muted-foreground">{room.description}</p><ul className="mt-6 space-y-3 border-t border-border pt-5 text-sm">{room.items.map((item) => <li key={item} className="flex gap-2"><span className="text-lime">✓</span>{item}</li>)}</ul></article>)}</div>
        </div>
      </section>

      <section className="bg-dark text-background" id="quote">
        <div className="mx-auto grid max-w-[1600px] gap-10 px-4 py-16 sm:px-8 lg:grid-cols-[1fr_auto] lg:items-center lg:px-12 lg:py-20"><div><p className="text-sm font-bold uppercase tracking-[0.18em] text-lime">Ready for the reset?</p><h2 className="mt-3 max-w-3xl text-4xl font-extrabold leading-tight tracking-[-0.04em] text-background sm:text-5xl">Let&apos;s make your home feel brand new.</h2><p className="mt-4 max-w-xl leading-7 text-background/65">Tell us a little about your home and we will send you a clear, no-obligation quote.</p></div><div className="flex flex-col gap-3 sm:flex-row lg:flex-col"><Link href="/contact" className="inline-flex items-center justify-center bg-lime px-7 py-4 font-bold text-lime-foreground transition hover:bg-lime/85">Request a quote <span className="ml-3">→</span></Link><a href="tel:+27783928061" className="inline-flex items-center justify-center border border-background/20 px-7 py-4 font-bold text-background transition hover:border-lime hover:text-lime">Call us directly</a></div></div>
      </section>

      <section className="mx-auto max-w-3xl px-4 py-20 sm:px-8 lg:py-28"><p className="text-sm font-bold uppercase tracking-[0.18em] text-muted-foreground">Good to know</p><h2 className="mt-3 text-4xl font-extrabold tracking-[-0.04em] sm:text-5xl">Deep cleaning FAQs</h2><div className="mt-10 divide-y divide-border border-y border-border">{faqs.map(([question, answer]) => <details key={question} className="group py-5"><summary className="flex cursor-pointer list-none items-center justify-between gap-6 text-lg font-bold [&::-webkit-details-marker]:hidden"><span>{question}</span><span className="text-2xl font-normal text-lime transition group-open:rotate-45">+</span></summary><p className="max-w-2xl pt-4 leading-7 text-muted-foreground">{answer}</p></details>)}</div></section>

      <Footer />
      <WhatsappButton />
    </main>
  );
}
