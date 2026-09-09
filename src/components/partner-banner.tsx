import Image from "next/image";
import Sparkle from "./sparkle";

export default function PartnerBanner() {
  return (
    <section className="bg-background pb-20">
      <div className="max-w-[1600px] mx-auto px-4 sm:px-8 lg:px-12">
        <div className="relative overflow-hidden bg-dark text-background rounded-none px-8 py-12 md:px-14 md:py-14">
          <Sparkle
            className="pointer-events-none absolute -right-6 -top-6 w-32 h-32 text-lime/15"
          />

          <div className="relative flex flex-col lg:flex-row items-center justify-between gap-10">
            {/* Left: Heading & subtext */}
            <div className="flex flex-col gap-3 text-center lg:text-left">
              <p className="text-lime text-sm font-semibold uppercase tracking-widest">
                Not just Airbnb
              </p>
              <h2 className="text-3xl md:text-4xl font-extrabold font-heading tracking-tight text-balance text-background">
                We clean for <span className="text-lime">any property.</span>
              </h2>
              <p className="text-background/60 text-sm md:text-base max-w-xl">
                Homeowners, landlords, short-term rental hosts. Same great clean, every time.
              </p>
            </div>

            {/* Right: Platform logos + CTA */}
            <div className="flex flex-col items-center gap-6 shrink-0">
              <div className="flex flex-col items-center gap-2">
                <p className="text-background/40 text-xs uppercase tracking-wider font-medium">
                  Also compatible with
                </p>
                <div className="flex items-center gap-4">
                  <div className="relative w-24 h-10 bg-white flex items-center justify-center p-2">
                    <Image
                      src="/Images/Logo_airbnb.png"
                      alt="Airbnb"
                      fill
                      className="object-contain p-1"
                    />
                  </div>
                  <div className="relative w-32 h-10 bg-white flex items-center justify-center p-2">
                    <Image
                      src="/Images/kisspng-booking-com-hotel-logo-discounts-and-allowances-ro-booking-com-hunter-mason-5c88a13ddbf9c1.296745251552458045901.jpg"
                      alt="Booking.com"
                      fill
                      className="object-contain p-1"
                    />
                  </div>
                </div>
              </div>

              <a
                href="#contact"
                className="group inline-flex items-center gap-2 bg-lime text-lime-foreground pl-7 pr-5 py-4 rounded-none font-bold whitespace-nowrap hover:brightness-95 transition"
              >
                Request a quote
                <span className="flex items-center justify-center w-6 h-6 rounded-none bg-foreground text-background text-xs transition-transform group-hover:translate-x-0.5">
                  →
                </span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
