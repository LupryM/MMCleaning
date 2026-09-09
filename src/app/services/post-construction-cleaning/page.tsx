import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import Navbar from "@/components/navbar";
import Footer from "@/components/footer";
import WhatsappButton from "@/components/whatsapp-button";
import Sparkle from "@/components/sparkle";

export const metadata: Metadata = {
  title: "Post Construction Cleaning in Centurion | MM Cleaners",
  description:
    "Professional post construction cleaning across Centurion, Pretoria, and Johannesburg. Get your property spotless after renovations.",
};

const faqs = [
  ["Can I leave your cleaners unsupervised?", "All our cleaners are fully trained, vetted, insured and dedicated. You can leave them at the property to carry out their job, as long as you are there at the beginning of the service to let them in and towards the end to inspect their work."],
  ["How do you select your cleaners?", "It is our policy to only employ professional and experienced cleaning technicians. All our cleaners follow a rigorous interview process. We also test communication skills and seek references from previous employers."],
  ["What happens if I am not happy with the quality of the cleaning service?", "If you are not satisfied with our cleaning service, please tell us straight away and we will address it, including doing the same job for no charge next time if the complaint is referred to our cleaning duties and no damages occurred on the first place before the technicians started the cleaning. Terms and conditions apply."],
  ["How can I change my cleaning day or cancel the service?", "If you need to change the day of the cleaning session we will need at least 48 hours notice. If you would like to cancel the cleaning service we will need at least 48 hours notice."],
  ["Do I pay you or the cleaner? And is there any agency fee that applies?", "If you have booked a regular cleaning service we prefer it if you pay your cleaner directly for the first few visits. After that you can set up a direct payment to our account. If you have booked a one off clean, payment has to be made the day of the clean or before. There is no agency fee or additional charges on top of what you have been quoted. Parking fees may apply."],
  ["Do you provide cleaning products and equipment?", "No. You will be responsible for providing the cleaning products and equipment. We can also provide all necessary professional equipment and materials upon your request. Extra charges will apply."],
  ["Can I specify the day of the cleaning?", "Yes. You can specify the day of your cleaning session and we will make every effort to meet your requirement. Subject to availability."],
  ["Are your workers insured?", "Yes, our experts are fully insured."],
];

export default function PostConstructionCleaningPage() {
  return (
    <main className="min-h-screen overflow-hidden">
      <Navbar />

      <section className="bg-cream">
        <div className="mx-auto grid max-w-[1600px] gap-12 px-4 pb-16 pt-8 sm:px-8 lg:grid-cols-[0.9fr_1.1fr] lg:items-center lg:gap-20 lg:px-12 lg:pb-24 lg:pt-12">
          <div>
            <div className="mb-8 flex items-center gap-2 text-sm font-semibold text-muted-foreground">
              <Link href="/services" className="transition hover:text-foreground">Our services</Link>
              <span>/</span>
              <span className="text-foreground">Post Construction</span>
            </div>
            <p className="mb-5 flex items-center gap-3 text-sm font-bold uppercase tracking-[0.18em] text-muted-foreground">
              <span className="h-px w-8 bg-lime" /> Keep your property spotless
            </p>
            <h1 className="max-w-3xl text-5xl font-extrabold leading-[0.98] tracking-[-0.05em] sm:text-6xl lg:text-7xl">
              Post Construction <span className="text-lime">Cleaning.</span>
            </h1>
            <p className="mt-7 max-w-xl text-lg leading-8 text-muted-foreground">
              After builders are finished with their work, the final cleaning is required. We tidy up after home renovations and handle the mess thoroughly.
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
            <Image src="/Service Images/post construction cleaning.avif" alt="Professional post construction cleaning" fill priority className="object-cover" sizes="(max-width: 1024px) 100vw, 55vw" />
            <div className="absolute inset-0 bg-gradient-to-t from-dark/65 via-transparent to-transparent" />
            <div className="absolute bottom-0 left-0 right-0 flex items-end justify-between p-6 text-background sm:p-8">
              <div><p className="text-sm font-semibold text-background/70">MM Cleaners</p><p className="mt-1 text-2xl font-extrabold">Since 2008.</p></div>
              <Sparkle className="h-12 w-12 text-lime" />
            </div>
          </div>
        </div>
      </section>

      <section className="border-b border-border bg-background">
        <div className="mx-auto grid max-w-[1600px] gap-6 px-4 py-7 sm:grid-cols-2 sm:px-8 lg:grid-cols-4 lg:px-12">
          {[
            ['100% Quality', 'Consistent and reliable results for every property.'],
            ['Experienced Cleaners', 'Trained professionals equipped with modern technology.'],
            ['Tailored Services', 'Customized solutions available 7 days a week.'],
            ['Free Surveys', 'Get a free online price survey for your cleaning needs.']
          ].map(([title, text]) => <div key={title} className="border-l-2 border-lime pl-4"><h2 className="font-bold">{title}</h2><p className="mt-1 text-sm leading-6 text-muted-foreground">{text}</p></div>)}
        </div>
      </section>

      <section className="mx-auto max-w-[1600px] px-4 py-20 sm:px-8 lg:px-12 lg:py-28">
        <div className="grid gap-12 lg:grid-cols-[0.75fr_1.25fr] lg:gap-24">
          <div><p className="text-sm font-bold uppercase tracking-[0.18em] text-muted-foreground">Why choose us</p><h2 className="mt-4 text-4xl font-extrabold leading-tight tracking-[-0.04em] sm:text-5xl">Extensive <span className="text-lime">experience.</span></h2></div>
          <div className="max-w-2xl"><p className="text-xl leading-8">As a builder, property developer, construction firm or a landlord, you know a property needs to be spotless before a homeowner or a tenant can move in.</p><p className="mt-6 leading-7 text-muted-foreground">If you are a homeowner who has recently had work completed on your home, you likely want to get back to normal quickly. Our post construction cleaning team handles your property cleaning. We do a final clean ensuring your property is clear of building rubbish and dust.</p></div>
        </div>
      </section>

      <section className="bg-cream" id="included">
        <div className="mx-auto max-w-[1600px] px-4 py-20 sm:px-8 lg:px-12 lg:py-28">
          <div className="grid gap-12 lg:grid-cols-[0.75fr_1.25fr] lg:gap-24">
            <div className="max-w-2xl"><p className="text-xl leading-8">Renovating your home can be messy with constructors around. Builders tramp into and out of your property, leaving bags of demolished tiles and dust.</p><p className="mt-6 leading-7 text-muted-foreground">The last step is to clean the property. Cleaning after builders requires professional machines and detergents. We are available to help with the cleaning and getting the property ready to use. Dust covers the property after building or renovating, which can cause health issues, especially if you are allergic or asthmatic.</p><p className="mt-6 leading-7 text-muted-foreground">In a busy home with kids, pets and social gatherings, it is easy for your upholstery to get stained and marked. Replacing furniture and curtains can be costly. We also provide upholstery cleaning services.</p></div>
            <div><p className="text-sm font-bold uppercase tracking-[0.18em] text-muted-foreground">Useful information</p><h2 className="mt-4 text-4xl font-extrabold leading-tight tracking-[-0.04em] sm:text-5xl">Trusted by <span className="text-lime">experts.</span></h2><p className="mt-6 leading-7 text-muted-foreground">Construction companies trust MM Cleaners to carry out a professional post construction cleaning service. Our cleaning technicians are experienced, quick and thorough. A typical post construction cleaning will include a wipe down of all surfaces such as work tops, shelves, skirting boards, vacuuming carpeted areas, and cleaning inside and outside cabinets and drawers.</p></div>
          </div>
        </div>
      </section>

      <section className="bg-dark text-background" id="quote">
        <div className="mx-auto grid max-w-[1600px] gap-10 px-4 py-16 sm:px-8 lg:grid-cols-[1fr_auto] lg:items-center lg:px-12 lg:py-20"><div><p className="text-sm font-bold uppercase tracking-[0.18em] text-lime">Ready to clear the dust?</p><h2 className="mt-3 max-w-3xl text-4xl font-extrabold leading-tight tracking-[-0.04em] text-background sm:text-5xl">Let&apos;s get your property ready.</h2><p className="mt-4 max-w-xl leading-7 text-background/65">Serving Centurion, Pretoria, and Johannesburg. Cleaning equipment and materials can be supplied upon request.</p></div><div className="flex flex-col gap-3 sm:flex-row lg:flex-col"><Link href="/#contact" className="inline-flex items-center justify-center bg-lime px-7 py-4 font-bold text-lime-foreground transition hover:bg-lime/85">Request a quote <span className="ml-3">→</span></Link><a href="tel:+27783928061" className="inline-flex items-center justify-center border border-background/20 px-7 py-4 font-bold text-background transition hover:border-lime hover:text-lime">Call us directly</a></div></div>
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
              ["Apartment cleaning", "/services/apartment-cleaning", "Reliable cleaning tailored to apartment living.", "/Service Images/apartment clean.jpg"],
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
