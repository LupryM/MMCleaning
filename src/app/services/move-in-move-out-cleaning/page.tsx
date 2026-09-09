import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import Navbar from "@/components/navbar";
import Footer from "@/components/footer";
import WhatsappButton from "@/components/whatsapp-button";
import Sparkle from "@/components/sparkle";

export const metadata: Metadata = {
  title: "Move In & Move Out Cleaning in Centurion | MM Cleaners",
  description:
    "Landlord approved deep cleans across Centurion, Pretoria, and Johannesburg, backed by a 72 hour re-clean guarantee. Get a quote.",
};

const rooms = [
  {
    title: "Kitchen",
    description: "Deep cleaning and sanitisation of all surfaces, appliances, and cupboards.",
    items: [
      "Wash, polish, and sanitise worktops and sink",
      "Clean inside/out of cupboards and drawers",
      "Clean fridge, freezer, microwave, and oven",
      "Wipe light fittings, switches, and interior windows",
    ],
  },
  {
    title: "Bathroom",
    description: "Thorough descaling, washing, and sanitisation of all bathroom fixtures.",
    items: [
      "Remove limescale from tiles and shower screens",
      "Wash and polish bathtubs, basins, and taps",
      "Sanitise toilet bowls and seats inside out",
      "Clean cabinets, mirrors, and mop floors",
    ],
  },
  {
    title: "Bedroom",
    description: "Detailed dusting, polishing, and vacuuming to prepare the room for rest.",
    items: [
      "Clean inside/out of wardrobes and drawers",
      "Dust surfaces, picture frames, and lampshades",
      "Wipe skirting boards, doors, and switches",
      "Vacuum, mop, and sanitise floors",
    ],
  },
  {
    title: "Lounge & Hallway",
    description: "Comprehensive dusting and cleaning of all communal and passage areas.",
    items: [
      "Dust all furniture, surfaces, and wall hangings",
      "Vacuum under/behind furniture and on sofas",
      "Wipe skirting boards, radiators, and handrails",
      "Remove cobwebs and mop/sanitise floors",
    ],
  },
];

const faqs = [
  ["What is move in, move out cleaning?", "It is a professional cleaning service that takes place at the end or beginning of a rental contract, following a specific task list to meet acceptable conditions for estate agencies and landlords."],
  ["Can I do the cleaning myself?", "Yes, but a move in, move out cleaning requires a deep, thorough clean using professional products and equipment to achieve the best results and ensure a deposit return."],
  ["How long does it take?", "There is no time limit. It may take 2 to 6 hours or more depending on property condition, size, and the number of technicians on site."],
  ["Do you have a guarantee?", "Yes, our service is guaranteed for 72 hours. Complaints are accepted if the property has not been occupied after cleaning, damages did not pre-exist, the guarantee was not voided due to poor initial condition or pets, and no personal belongings remain inside."],
  ["Do I have to clear personal belongings?", "Yes, we advise clearing all belongings prior to the scheduled cleaning time."],
  ["Is oven cleaning included?", "A single door oven is included. Extra costs apply for a double door oven."],
  ["Do you clean carpets and upholstery?", "We vacuum these areas. Steam cleaning is available at an extra cost. A 5 percent discount applies if booked with the move in, move out cleaning."],
];

export default function MoveInOutCleaningPage() {
  return (
    <main className="min-h-screen overflow-hidden">
      <Navbar />

      <section className="bg-cream">
        <div className="mx-auto grid max-w-[1600px] gap-12 px-4 pb-16 pt-8 sm:px-8 lg:grid-cols-[0.9fr_1.1fr] lg:items-center lg:gap-20 lg:px-12 lg:pb-24 lg:pt-12">
          <div>
            <div className="mb-8 flex items-center gap-2 text-sm font-semibold text-muted-foreground">
              <Link href="/services" className="transition hover:text-foreground">Our services</Link>
              <span>/</span>
              <span className="text-foreground">Move In / Move Out</span>
            </div>
            <p className="mb-5 flex items-center gap-3 text-sm font-bold uppercase tracking-[0.18em] text-muted-foreground">
              <span className="h-px w-8 bg-lime" /> Landlord approved deep cleans
            </p>
            <h1 className="max-w-3xl text-5xl font-extrabold leading-[0.98] tracking-[-0.05em] sm:text-6xl lg:text-7xl">
              Move In, Move Out <span className="text-lime">Cleaning.</span>
            </h1>
            <p className="mt-7 max-w-xl text-lg leading-8 text-muted-foreground">
              We focus on achieving thorough cleaning results for your property. 100% quality result guarantee, backed by a 72-hour re-clean promise.
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
              <span className="flex items-center gap-2"><span className="text-lime">★</span> 4.9 Google rating (254 reviews)</span>
              <span className="flex items-center gap-2"><span className="text-lime">✓</span> 72-hour guarantee</span>
            </div>
          </div>
          <div className="relative min-h-[440px] overflow-hidden bg-dark sm:min-h-[560px]">
            <Image src="/Service Images/Move in cleaning.jpg" alt="Professional move in, move out cleaning" fill priority className="object-cover" sizes="(max-width: 1024px) 100vw, 55vw" />
            <div className="absolute inset-0 bg-gradient-to-t from-dark/65 via-transparent to-transparent" />
            <div className="absolute bottom-0 left-0 right-0 flex items-end justify-between p-6 text-background sm:p-8">
              <div><p className="text-sm font-semibold text-background/70">MM Cleaners</p><p className="mt-1 text-2xl font-extrabold">Since 2008.</p></div>
              <Sparkle className="h-12 w-12 text-lime" />
            </div>
          </div>
        </div>
      </section>

      <section className="border-b border-border bg-background">
        <div className="mx-auto grid max-w-[1600px] gap-6 px-4 py-7 sm:grid-cols-3 sm:px-8 lg:grid-cols-4 lg:px-12">
          {[['Tenants', 'Ensuring satisfactory results for your deposit return.'], ['Landlords', 'Preparing properties to an immaculate standard.'], ['Owners', 'Thorough cleaning for newly purchased properties.'], ['Estate Agencies', 'Maintaining high standards for managed properties.']].map(([title, text]) => <div key={title} className="border-l-2 border-lime pl-4"><h2 className="font-bold">{title}</h2><p className="mt-1 text-sm leading-6 text-muted-foreground">{text}</p></div>)}
        </div>
      </section>

      <section className="mx-auto max-w-[1600px] px-4 py-20 sm:px-8 lg:px-12 lg:py-28">
        <div className="grid gap-12 lg:grid-cols-[0.75fr_1.25fr] lg:gap-24">
          <div><p className="text-sm font-bold uppercase tracking-[0.18em] text-muted-foreground">Our standards</p><h2 className="mt-4 text-4xl font-extrabold leading-tight tracking-[-0.04em] sm:text-5xl">Professional <span className="text-lime">quality.</span></h2></div>
          <div className="max-w-2xl"><p className="text-xl leading-8">We pay attention to detail and use professional detergents and machines. Our technicians are insured, trained, and well-mannered.</p><p className="mt-6 leading-7 text-muted-foreground">We serve private tenants, landlords, owners, and rental agents across Centurion, Pretoria, and Johannesburg. Next day and tailor-made cleaning services are available 7 days a week. Our detailed checklist is approved by rental agents and landlords.</p></div>
        </div>
      </section>

      <section className="bg-cream" id="included">
        <div className="mx-auto max-w-[1600px] px-4 py-20 sm:px-8 lg:px-12 lg:py-28">
          <div className="mb-12 flex flex-col justify-between gap-6 sm:flex-row sm:items-end"><div><p className="text-sm font-bold uppercase tracking-[0.18em] text-muted-foreground">Check List</p><h2 className="mt-3 text-4xl font-extrabold tracking-[-0.04em] sm:text-5xl">Our detailed <span className="text-lime">check list.</span></h2></div><p className="max-w-sm text-sm leading-6 text-muted-foreground">Compatible with estate agency and landlord requirements. We work to an immaculate standard.</p></div>
          <div className="grid gap-px bg-border sm:grid-cols-2 lg:grid-cols-4">{rooms.map((room) => <article key={room.title} className="bg-background p-7 sm:p-8"><h3 className="text-2xl font-extrabold">{room.title}</h3><p className="mt-3 min-h-14 text-sm leading-6 text-muted-foreground">{room.description}</p><ul className="mt-6 space-y-3 border-t border-border pt-5 text-sm">{room.items.map((item) => <li key={item} className="flex gap-2"><span className="text-lime">✓</span>{item}</li>)}</ul></article>)}</div>
        </div>
      </section>

      <section className="bg-dark text-background" id="quote">
        <div className="mx-auto grid max-w-[1600px] gap-10 px-4 py-16 sm:px-8 lg:grid-cols-[1fr_auto] lg:items-center lg:px-12 lg:py-20"><div><p className="text-sm font-bold uppercase tracking-[0.18em] text-lime">Useful Information</p><h2 className="mt-3 max-w-3xl text-4xl font-extrabold leading-tight tracking-[-0.04em] text-background sm:text-5xl">Prepare your property.</h2><p className="mt-4 max-w-xl leading-7 text-background/65">We recommend clearing all personal belongings and refuse before the clean. Look out for damages and inform us for the best results.</p></div><div className="flex flex-col gap-3 sm:flex-row lg:flex-col"><Link href="/#contact" className="inline-flex items-center justify-center bg-lime px-7 py-4 font-bold text-lime-foreground transition hover:bg-lime/85">Request a quote <span className="ml-3">→</span></Link><a href="tel:+27783928061" className="inline-flex items-center justify-center border border-background/20 px-7 py-4 font-bold text-background transition hover:border-lime hover:text-lime">Call us directly</a></div></div>
      </section>

      <section className="mx-auto max-w-3xl px-4 py-20 sm:px-8 lg:py-28"><p className="text-sm font-bold uppercase tracking-[0.18em] text-muted-foreground">Good to know</p><h2 className="mt-3 text-4xl font-extrabold tracking-[-0.04em] sm:text-5xl">Frequently Asked Questions</h2><div className="mt-10 divide-y divide-border border-y border-border">{faqs.map(([question, answer]) => <details key={question} className="group py-5"><summary className="flex cursor-pointer list-none items-center justify-between gap-6 text-lg font-bold [&::-webkit-details-marker]:hidden"><span>{question}</span><span className="text-2xl font-normal text-lime transition group-open:rotate-45">+</span></summary><p className="max-w-2xl pt-4 leading-7 text-muted-foreground">{answer}</p></details>)}</div></section>

      <section className="bg-cream" aria-labelledby="other-services-heading">
        <div className="mx-auto max-w-[1600px] px-4 py-20 sm:px-8 lg:px-12 lg:py-24">
          <div className="mb-10 flex flex-col justify-between gap-5 sm:flex-row sm:items-end">
            <div>
              <p className="text-sm font-bold uppercase tracking-[0.18em] text-muted-foreground">More ways we can help</p>
              <h2 id="other-services-heading" className="mt-3 text-4xl font-extrabold tracking-[-0.04em] sm:text-5xl">Other services we <span className="text-lime">offer.</span></h2>
            </div>
            <Link href="/services" className="font-bold transition hover:text-lime">View all services <span className="ml-2 text-lime">→</span></Link>
          </div>
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {[
              ["Deep cleaning", "/services/deep-cleaning", "A complete reset for your home.", "/Service Images/Deep-Cleaning-Company.jpg"],
              ["Apartment cleaning", "/services/apartment-cleaning", "Reliable cleaning tailored to apartment living.", "/Service Images/apartment clean.jpg"],
              ["Commercial cleaning", "/services/commercial-cleaning", "A clean, professional space for your team and customers.", "/Service Images/Office Cleaning.jpg"],
              ["Post-construction", "/services/post-construction-cleaning", "Thorough cleaning after building or renovation work.", "/Service Images/post construction cleaning.avif"],
            ].map(([title, href, description, image]) => (
              <Link key={title} href={href} className="group overflow-hidden border border-border bg-background transition hover:-translate-y-1 hover:border-lime hover:shadow-lg">
                <div className="relative aspect-[4/3] overflow-hidden bg-muted">
                  <Image src={image} alt="" fill className="object-cover transition duration-500 group-hover:scale-105" sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw" />
                </div>
                <div className="flex min-h-48 flex-col justify-between p-6">
                  <div><h3 className="text-xl font-extrabold">{title}</h3><p className="mt-3 text-sm leading-6 text-muted-foreground">{description}</p></div>
                  <span className="mt-8 flex items-center justify-between border-t border-border pt-4 text-sm font-bold">Explore service <span className="text-xl text-lime transition group-hover:translate-x-1">→</span></span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <Footer />
      <WhatsappButton />
    </main>
  );
}
