import Link from "next/link";

export default function Introduction() {
  return (
    <section id="about" className="bg-background py-20">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <span className="inline-flex bg-lime text-lime-foreground text-xs font-semibold uppercase tracking-wide px-4 py-1.5 rounded-full">
          About us
        </span>
        <h2 className="mt-5 font-heading font-extrabold text-3xl md:text-4xl tracking-tight text-balance">
          Reliable maid services
        </h2>
        <p className="mt-6 text-lg text-muted-foreground leading-relaxed">
          MM Cleaners provides maid cleaning services in the Centurion area. Our
          staff wipes down all areas of the living space to maintain a dust-free
          environment. We are efficient and reliable.
        </p>
        <div className="mt-8 flex flex-wrap justify-center gap-3">
          {["Cleaning Service", "Apartment Cleaning", "Janitorial Service"].map(
            (tag) => (
              <span
                key={tag}
                className="bg-cream text-foreground px-5 py-2 rounded-full text-sm font-medium border border-border"
              >
                {tag}
              </span>
            )
          )}
        </div>
        <Link
          href="#services"
          className="group mt-10 inline-flex items-center gap-2 bg-foreground text-background pl-6 pr-4 py-3.5 rounded-full font-semibold hover:bg-foreground/90 transition"
        >
          Learn more — our services
          <span className="flex items-center justify-center w-6 h-6 rounded-full bg-lime text-lime-foreground text-xs transition-transform group-hover:translate-x-0.5">
            →
          </span>
        </Link>
      </div>
    </section>
  );
}
