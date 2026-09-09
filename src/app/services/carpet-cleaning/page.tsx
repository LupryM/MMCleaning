import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import Navbar from "@/components/navbar";
import Footer from "@/components/footer";
import WhatsappButton from "@/components/whatsapp-button";
import Sparkle from "@/components/sparkle";

export const metadata: Metadata = {
  title: "Carpet Cleaning in Centurion | MM Cleaners",
  description:
    "Professional carpet cleaning services in Centurion, Pretoria, and Johannesburg. Deep steam cleaning and hot water extraction for your carpets.",
};

const faqs = [
  ["What is the best method to clean and wash my carpets?", "Hot water extraction, also known as carpet steam cleaning, is standard. A dry compound cleaning may be used for specific carpet fibers."],
  ["What is hot water extracting carpet cleaning?", "It is a method that allows deep carpet fiber cleaning. It removes stains, grease, and odors. It also helps remove bacteria and microorganisms. This requires specific equipment and trained technicians."],
  ["How does hot water extraction work?", "The technology injects pressured water mixed with detergent into the carpet. The extractor then removes the moisture and dislodged dirt. Professional equipment reduces drying time, which helps prevent microbial growth."],
  ["Are the detergents dangerous for human health?", "We use eco friendly cleaning solutions that are safe for humans and animals. The hot water extraction method relies primarily on pressured water and extraction capacity, requiring only a small amount of detergent."],
  ["Could the detergents damage the fabric structure of rugs or carpets?", "Our professionals use appropriate doses of detergents to clean effectively without damaging the carpet texture."],
  ["Can regular vacuuming replace professional cleaning?", "No. Vacuuming removes surface dust and hair, but professional hot water extraction is necessary to remove microscopic contaminants and deep stains."],
  ["How long will it take for my carpets to dry?", "It usually takes from 3 to 6 hours for carpets to dry completely, though it may occasionally take longer."],
  ["How often should I have my carpets professionally cleaned?", "Experts recommend at least once a year, depending on your needs."],
  ["Can you guarantee that all stains will be removed?", "Steam cleaning is effective for deep cleaning, but stagnant stains from substances like blood, tea, coffee, oils, or wine may permanently alter the carpet structure. There is no absolute guarantee these will disappear."],
  ["Do you steam clean sisal or seagrass carpets?", "Hot water extraction is not recommended for natural materials like sisal or seagrass, as high temperatures and water pressure can damage them. Alternative cleaning methods are required."],
  ["Do you move furniture when you clean carpets?", "We move light furniture to reach necessary areas and ensure an even clean across the room."],
  ["How soon can you send a carpet cleaner?", "We respond to bookings and schedule technicians according to availability and your requirements."],
  ["What is your availability?", "We provide carpet cleaning services 7 days a week, subject to availability."],
  ["Which areas do you serve?", "We serve Centurion, Pretoria, and Johannesburg."],
];

export default function CarpetCleaningPage() {
  return (
    <main className="min-h-screen overflow-hidden">
      <Navbar />

      <section className="bg-cream">
        <div className="mx-auto grid max-w-[1600px] gap-12 px-4 pb-16 pt-8 sm:px-8 lg:grid-cols-[0.9fr_1.1fr] lg:items-center lg:gap-20 lg:px-12 lg:pb-24 lg:pt-12">
          <div>
            <div className="mb-8 flex items-center gap-2 text-sm font-semibold text-muted-foreground">
              <Link href="/services" className="transition hover:text-foreground">Our services</Link>
              <span>/</span>
              <span className="text-foreground">Carpet Cleaning</span>
            </div>
            <p className="mb-5 flex items-center gap-3 text-sm font-bold uppercase tracking-[0.18em] text-muted-foreground">
              <span className="h-px w-8 bg-lime" /> Landlord approved deep cleans
            </p>
            <h1 className="max-w-3xl text-5xl font-extrabold leading-[0.98] tracking-[-0.05em] sm:text-6xl lg:text-7xl">
              Carpet <span className="text-lime">Cleaning.</span>
            </h1>
            <p className="mt-7 max-w-xl text-lg leading-8 text-muted-foreground">
              Our process is designed to thoroughly clean your carpets. We utilize a steam cleaning method, also known as hot water extraction, to reach deep into carpet fibers and remove dirt and stains.
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
            <Image src="/placeholder.svg?height=1000&width=800&query=carpet+cleaning" alt="Professional carpet cleaning services" fill priority className="object-cover" sizes="(max-width: 1024px) 100vw, 55vw" />
            <div className="absolute inset-0 bg-gradient-to-t from-dark/65 via-transparent to-transparent" />
            <div className="absolute bottom-0 left-0 right-0 flex items-end justify-between p-6 text-background sm:p-8">
              <div><p className="text-sm font-semibold text-background/70">MM Cleaners</p><p className="mt-1 text-2xl font-extrabold">Since 2008.</p></div>
              <Sparkle className="h-12 w-12 text-lime" />
            </div>
          </div>
        </div>
      </section>

      <section className="border-b border-border bg-background">
        <div className="mx-auto grid max-w-[1600px] gap-6 px-4 py-7 sm:grid-cols-2 lg:grid-cols-4 sm:px-8 lg:px-12">
          {[
            ['Non-toxic & Eco-friendly', 'Hypoallergenic and biodegradable solutions.'],
            ['Hot Water Extraction', 'Deep steam cleaning for dirt and stains.'],
            ['Trained Technicians', 'Knowledgeable in standard cleaning procedures.'],
            ['7 Days a Week', 'Coverage across Centurion, Pretoria, and Johannesburg.']
          ].map(([title, text]) => <div key={title} className="border-l-2 border-lime pl-4"><h2 className="font-bold">{title}</h2><p className="mt-1 text-sm leading-6 text-muted-foreground">{text}</p></div>)}
        </div>
      </section>

      <section className="mx-auto max-w-[1600px] px-4 py-20 sm:px-8 lg:px-12 lg:py-28">
        <div className="grid gap-12 lg:grid-cols-[0.75fr_1.25fr] lg:gap-24">
          <div><p className="text-sm font-bold uppercase tracking-[0.18em] text-muted-foreground">Deep fiber cleaning</p><h2 className="mt-4 text-4xl font-extrabold leading-tight tracking-[-0.04em] sm:text-5xl">Breathe <span className="text-lime">easier.</span></h2></div>
          <div className="max-w-2xl"><p className="text-xl leading-8">Carpets absorb dirt, dust, and grime from the air and shoes. Uncleaned carpets can experience wear on their fibers and color.</p><p className="mt-6 leading-7 text-muted-foreground">Sticky substances cause fibers to mat, affecting the carpet&apos;s texture. Standard vacuuming does not remove all deep particles. Many carpet manufacturers recommend professional steam cleaning every 12 months to maintain warranties.</p><p className="mt-6 leading-7 text-muted-foreground">Professional cleaning helps manage indoor air quality and removes accumulated dust and allergens. We are available for bedrooms, living rooms, dining rooms, lounges, hallways, and stairs.</p></div>
        </div>
      </section>

      <section className="bg-cream" id="included">
        <div className="mx-auto max-w-[1600px] px-4 py-20 sm:px-8 lg:px-12 lg:py-28">
          <div className="grid gap-12 lg:grid-cols-[0.75fr_1.25fr] lg:gap-24">
            <div className="max-w-2xl"><p className="text-xl leading-8">Using professional equipment ensures that steam reaches deep into the carpet and that moisture is properly extracted.</p><p className="mt-6 leading-7 text-muted-foreground">Inadequate moisture extraction can lead to mold growth. Professional machines are required to properly extract the moisture after cleaning. Our extracting machines are designed to give your carpets the safest, most thorough clean possible, ensuring fast drying times.</p></div>
            <div><p className="text-sm font-bold uppercase tracking-[0.18em] text-muted-foreground">Quality results</p><h2 className="mt-4 text-4xl font-extrabold leading-tight tracking-[-0.04em] sm:text-5xl">Professional <span className="text-lime">machines.</span></h2><p className="mt-6 leading-7 text-muted-foreground">Our chemicals and shampoos are non-toxic, hypoallergenic, and biodegradable, making them safe for children and pets. Combine that with our hot water extraction method, and your carpets are left thoroughly refreshed and deeply cleaned.</p></div>
          </div>
        </div>
      </section>

      <section className="bg-dark text-background" id="quote">
        <div className="mx-auto grid max-w-[1600px] gap-10 px-4 py-16 sm:px-8 lg:grid-cols-[1fr_auto] lg:items-center lg:px-12 lg:py-20"><div><p className="text-sm font-bold uppercase tracking-[0.18em] text-lime">Refresh your carpets</p><h2 className="mt-3 max-w-3xl text-4xl font-extrabold leading-tight tracking-[-0.04em] text-background sm:text-5xl">Let&apos;s reach deep into the fibers.</h2><p className="mt-4 max-w-xl leading-7 text-background/65">A minimum charge applies per visit. Serving Centurion, Pretoria, and Johannesburg 7 days a week.</p></div><div className="flex flex-col gap-3 sm:flex-row lg:flex-col"><Link href="/#contact" className="inline-flex items-center justify-center bg-lime px-7 py-4 font-bold text-lime-foreground transition hover:bg-lime/85">Request a quote <span className="ml-3">→</span></Link><a href="tel:+27783928061" className="inline-flex items-center justify-center border border-background/20 px-7 py-4 font-bold text-background transition hover:border-lime hover:text-lime">Call us directly</a></div></div>
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
              ["Upholstery cleaning", "/services/upholstery-cleaning", "Deep fabric restoration for your furniture.", "/placeholder.svg?height=1000&width=800&query=upholstery+cleaning"],
              ["Move-in/out cleaning", "/services/move-in-move-out-cleaning", "Start fresh in a home that is ready for you.", "/Service Images/Move in cleaning.jpg"],
              ["Commercial cleaning", "/services/commercial-cleaning", "A clean, professional space for your team and customers.", "/Service Images/Office Cleaning.jpg"],
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
