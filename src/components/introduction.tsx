import Link from "next/link";
import Sparkle from "./sparkle";

export default function Introduction() {
  return (
    <section id="about" className="bg-background py-16 sm:py-20 lg:py-24 border-b border-border">
      <div className="max-w-[1600px] mx-auto px-4 sm:px-8 lg:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-start">
          
          {/* Left Column: Headline & Action */}
          <div className="lg:col-span-5">
            <span className="inline-flex bg-lime text-lime-foreground text-xs font-semibold uppercase tracking-wide px-4 py-1.5 rounded-none">
              About us
            </span>
            <h2 className="mt-5 font-heading font-extrabold text-3xl sm:text-4xl md:text-5xl tracking-tight leading-[1.15] text-foreground">
              Built on honest, hardworking values
            </h2>
            
            <div className="mt-8 flex flex-wrap gap-2.5">
              {["Family Owned", "Centurion Based", "Managed by Sisters", "Trained Staff"].map(
                (tag) => (
                  <span
                    key={tag}
                    className="bg-cream text-foreground px-3.5 py-1.5 rounded-none text-xs font-semibold uppercase tracking-wide border border-border"
                  >
                    {tag}
                  </span>
                )
              )}
            </div>

            <div className="mt-8 sm:mt-10">
              <Link
                href="/about"
                className="group inline-flex items-center gap-2 bg-foreground text-background pl-6 pr-4 py-3.5 rounded-none font-semibold hover:bg-foreground/90 transition text-sm"
              >
                Read our full story
                <span className="flex items-center justify-center w-6 h-6 rounded-none bg-lime text-lime-foreground text-xs transition-transform group-hover:translate-x-0.5">
                  →
                </span>
              </Link>
            </div>
          </div>

          {/* Right Column: Story Text */}
          <div className="lg:col-span-7 bg-cream p-6 sm:p-8 md:p-10 border border-border relative">
            <Sparkle className="absolute top-6 right-6 w-5 h-5 text-lime" />
            
            <p className="text-base sm:text-lg text-foreground font-medium leading-relaxed">
              MM Cleaners is a family-owned business based in Centurion, managed directly by two sisters. When we built this company, we didn&apos;t look far for our business model. We built it around the standards of our grandmother, Angie.
            </p>
            
            <div className="my-6 border-t border-border/60" />
            
            <p className="text-base sm:text-lg text-muted-foreground leading-relaxed">
              Angie didn&apos;t believe in shortcuts. She was practical, hardworking, and knew that doing a job right the first time meant paying attention to the details most people ignore. She passed that no-nonsense approach down to her daughters.
            </p>
            
            <div className="my-6 border-t border-border/60" />
            
            <p className="text-base sm:text-lg text-muted-foreground leading-relaxed">
              Today, that is exactly how we operate. We aren&apos;t a massive, faceless franchise. We are a local team that values reliability, efficiency, and honest work. We train our staff rigorously and oversee the work to make sure it hits the mark. When you hire us, you get a crew that shows up on time, works hard, and leaves your space genuinely clean.
            </p>
          </div>

        </div>
      </div>
    </section>
  );
}
