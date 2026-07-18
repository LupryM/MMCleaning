import Sparkle from "./sparkle";

export default function PartnerBanner() {
  return (
    <section className="bg-background pb-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="relative overflow-hidden bg-dark text-background rounded-3xl px-8 py-12 md:px-14 md:py-14">
          <Sparkle
            className="pointer-events-none absolute -right-6 -top-6 w-32 h-32 text-lime/15"
          />
          <div className="relative flex flex-col lg:flex-row items-center justify-between gap-8">
            <div className="flex flex-col md:flex-row items-center gap-6 text-center md:text-left">
              <div className="flex gap-3">
                <div className="w-16 h-16 bg-background/10 flex items-center justify-center rounded-2xl text-[10px] text-center p-2 font-semibold text-background/70">
                  Airbnb
                </div>
                <div className="w-16 h-16 bg-background/10 flex items-center justify-center rounded-2xl text-[10px] text-center p-2 font-semibold text-background/70">
                  Booking
                </div>
              </div>
              <h2 className="text-3xl md:text-4xl font-extrabold font-heading tracking-tight text-balance">
                Reliable Airbnb &amp;{" "}
                <span className="text-lime">Booking.com</span> services!
              </h2>
            </div>
            <a
              href="#contact"
              className="group inline-flex items-center gap-2 bg-lime text-lime-foreground pl-7 pr-5 py-4 rounded-full font-bold whitespace-nowrap hover:brightness-95 transition"
            >
              Request a quote
              <span className="flex items-center justify-center w-6 h-6 rounded-full bg-foreground text-background text-xs transition-transform group-hover:translate-x-0.5">
                →
              </span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
