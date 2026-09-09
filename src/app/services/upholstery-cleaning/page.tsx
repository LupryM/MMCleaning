import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import Navbar from "@/components/navbar";
import Footer from "@/components/footer";
import WhatsappButton from "@/components/whatsapp-button";
import Sparkle from "@/components/sparkle";

export const metadata: Metadata = {
  title: "Upholstery Cleaning in Centurion | MM Cleaners",
  description:
    "Professional upholstery steam cleaning across Centurion, Pretoria, and Johannesburg. Deep fabric restoration for your furniture.",
};

const faqs = [
  ["What does upholstery steam cleaning include?", "It includes a pre treating process, a stain removal system suitable for your fabrics, steam cleaning, and water extraction."],
  ["How long will take for the upholstery to dry after cleaning?", "The upholstery may take from three to eight hours to dry, based on the nature of the upholstery."],
  ["Do you use chemicals in the upholstery steam cleaning?", "Yes, we do. However, our cleaning products are safe to be used in domestic households. Please let us know in advance if you are sensitive to any specific chemicals, so we can provide you with an alternative way to treat your upholstery."],
  ["What is your availability?", "We provide a 7 days a week upholstery steam cleaning service. Subject to availability."],
  ["What area do you cover?", "We serve Centurion, Pretoria, and Johannesburg. Subject to availability."],
  ["Do I have to pay for parking?", "Yes, parking fees may apply where applicable."],
  ["Are you insured?", "Yes, we are fully insured and we work with fully qualified upholstery cleaning experts."],
];

export default function UpholsteryCleaningPage() {
  return (
    <main className="min-h-screen overflow-hidden">
      <Navbar />

      <section className="bg-cream">
        <div className="mx-auto grid max-w-[1600px] gap-12 px-4 pb-16 pt-8 sm:px-8 lg:grid-cols-[0.9fr_1.1fr] lg:items-center lg:gap-20 lg:px-12 lg:pb-24 lg:pt-12">
          <div>
            <div className="mb-8 flex items-center gap-2 text-sm font-semibold text-muted-foreground">
              <Link href="/services" className="transition hover:text-foreground">Our services</Link>
              <span>/</span>
              <span className="text-foreground">Upholstery Cleaning</span>
            </div>
            <p className="mb-5 flex items-center gap-3 text-sm font-bold uppercase tracking-[0.18em] text-muted-foreground">
              <span className="h-px w-8 bg-lime" /> Deep fabric restoration
            </p>
            <h1 className="max-w-3xl text-5xl font-extrabold leading-[0.98] tracking-[-0.05em] sm:text-6xl lg:text-7xl">
              Upholstery <span className="text-lime">Cleaning.</span>
            </h1>
            <p className="mt-7 max-w-xl text-lg leading-8 text-muted-foreground">
              How do we approach upholstery steam cleaning? There is no one size fits all solution. Our experienced technicians will look at the needs of each piece of furniture before deciding on the most effective treatment.
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
            <Image src="/placeholder.svg?height=1000&width=800&query=upholstery+cleaning" alt="Professional upholstery cleaning" fill priority className="object-cover" sizes="(max-width: 1024px) 100vw, 55vw" />
            <div className="absolute inset-0 bg-gradient-to-t from-dark/65 via-transparent to-transparent" />
            <div className="absolute bottom-0 left-0 right-0 flex items-end justify-between p-6 text-background sm:p-8">
              <div><p className="text-sm font-semibold text-background/70">MM Cleaners</p><p className="mt-1 text-2xl font-extrabold">Since 2008.</p></div>
              <Sparkle className="h-12 w-12 text-lime" />
            </div>
          </div>
        </div>
      </section>

      <section className="border-b border-border bg-background">
        <div className="mx-auto grid max-w-[1600px] gap-6 px-4 py-7 sm:grid-cols-2 lg:grid-cols-5 sm:px-8 lg:px-12">
          {[
            ['100% Quality', 'Consistent and reliable service result.'],
            ['Trained Technicians', 'Fully trained and professionally equipped.'],
            ['Stain Treatment', 'Specialized stain treatment every time.'],
            ['Careful & Methodical', 'Gentle cleaning for folds and crevices.'],
            ['Competitive Cost', 'A less expensive option than replacing.']
          ].map(([title, text]) => <div key={title} className="border-l-2 border-lime pl-4"><h2 className="font-bold">{title}</h2><p className="mt-1 text-sm leading-6 text-muted-foreground">{text}</p></div>)}
        </div>
      </section>

      <section className="mx-auto max-w-[1600px] px-4 py-20 sm:px-8 lg:px-12 lg:py-28">
        <div className="grid gap-12 lg:grid-cols-[0.75fr_1.25fr] lg:gap-24">
          <div><p className="text-sm font-bold uppercase tracking-[0.18em] text-muted-foreground">Tailored services</p><h2 className="mt-4 text-4xl font-extrabold leading-tight tracking-[-0.04em] sm:text-5xl">Why choose <span className="text-lime">us.</span></h2></div>
          <div className="max-w-2xl"><p className="text-xl leading-8">No matter how hard or frequently we clean, we cannot escape the dust, soot, grime, soil, crumbs, and clutter that settle in our homes.</p><p className="mt-6 leading-7 text-muted-foreground">We do our best when we provide you with our cleaning services. You can rest assured our upholstery cleaning team will choose the right upholstery cleaning solution for your furniture and use specially designed tools so they can gently clean folds and crevices.</p><p className="mt-6 leading-7 text-muted-foreground">We look at the fabric type, colourfastness, dimensional stability, the area to be cleaned and the stuffing and lining before any cleaning takes place. All our cleaners are specially trained to care for all fabric types, including the most delicate.</p></div>
        </div>
      </section>

      <section className="bg-cream" id="included">
        <div className="mx-auto max-w-[1600px] px-4 py-20 sm:px-8 lg:px-12 lg:py-28">
          <div className="grid gap-12 lg:grid-cols-[0.75fr_1.25fr] lg:gap-24">
            <div className="max-w-2xl"><p className="text-xl leading-8">Deciding whether to hire an independent cleaner or an upholstery cleaning company service.</p><p className="mt-6 leading-7 text-muted-foreground">There are several reasons to choose a professional cleaning company. A cleaning company always has available cleaners when you need them. We use professional cleaning machines and technologies. We have a team of professionals who know what they are doing to protect your home. You can rely on us to work towards your satisfaction.</p><p className="mt-6 leading-7 text-muted-foreground">In a busy home with kids, pets and social gatherings, it is easy for your upholstery to get stained and marked. Replacing furniture and curtains can be costly. That is why professional upholstery cleaning is the service you need.</p></div>
            <div><p className="text-sm font-bold uppercase tracking-[0.18em] text-muted-foreground">Useful information</p><h2 className="mt-4 text-4xl font-extrabold leading-tight tracking-[-0.04em] sm:text-5xl">Protecting your <span className="text-lime">home.</span></h2><p className="mt-6 leading-7 text-muted-foreground">A less expensive option than replacing is to call in upholstery cleaning experts to get your items looking like new again. Get in touch with us. Our upholstery cleaning team is here for you.</p><p className="mt-6 leading-7 text-muted-foreground">As professional furniture cleaners, we specialize in the careful and methodical cleaning of sofas, chairs, and curtains to ensure you get the safest and longest lasting results. Our deep fabric restoration process removes contaminants effectively and extends the life of your upholstered furniture.</p></div>
          </div>
        </div>
      </section>

      <section className="bg-dark text-background" id="quote">
        <div className="mx-auto grid max-w-[1600px] gap-10 px-4 py-16 sm:px-8 lg:grid-cols-[1fr_auto] lg:items-center lg:px-12 lg:py-20"><div><p className="text-sm font-bold uppercase tracking-[0.18em] text-lime">Restore your fabrics</p><h2 className="mt-3 max-w-3xl text-4xl font-extrabold leading-tight tracking-[-0.04em] text-background sm:text-5xl">Let&apos;s clean your upholstery.</h2><p className="mt-4 max-w-xl leading-7 text-background/65">Serving Centurion, Pretoria, and Johannesburg. Get your furniture looking like new again.</p></div><div className="flex flex-col gap-3 sm:flex-row lg:flex-col"><Link href="/#contact" className="inline-flex items-center justify-center bg-lime px-7 py-4 font-bold text-lime-foreground transition hover:bg-lime/85">Request a quote <span className="ml-3">→</span></Link><a href="tel:+27783928061" className="inline-flex items-center justify-center border border-background/20 px-7 py-4 font-bold text-background transition hover:border-lime hover:text-lime">Call us directly</a></div></div>
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
              ["Move-in/out cleaning", "/services/move-in-move-out-cleaning", "Start fresh in a home that is ready for you.", "/Service Images/Move in cleaning.jpg"],
              ["Post-construction", "/services/post-construction-cleaning", "Thorough cleaning after building or renovation work.", "/Service Images/post construction cleaning.avif"],
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
