import Sparkle from "./sparkle";

const locations = [
  {
    name: "Centurion",
    description:
      "Serving all neighbourhoods across Centurion, from Lyttelton to Rooihuiskraal.",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="w-10 h-10"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        strokeWidth={2.5}
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z"
        />
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z"
        />
      </svg>
    ),
  },
  {
    name: "Midstream Estate",
    description:
      "Premium cleaning for Midstream Estate's residential and cluster homes.",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="w-10 h-10"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        strokeWidth={2.5}
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M2.25 12l8.954-8.955a1.126 1.126 0 011.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25"
        />
      </svg>
    ),
  },
  {
    name: "Eco-Park",
    description:
      "Trusted cleaning services throughout the Eco-Park Estate community.",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="w-10 h-10"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        strokeWidth={2.5}
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M12 21a9.004 9.004 0 008.716-6.747M12 21a9.004 9.004 0 01-8.716-6.747M12 21c2.485 0 4.5-4.03 4.5-9S14.485 3 12 3m0 18c-2.485 0-4.5-4.03-4.5-9S9.515 3 12 3m0 0a8.997 8.997 0 017.843 4.582M12 3a8.997 8.997 0 00-7.843 4.582m15.686 0A11.953 11.953 0 0112 10.5c-2.998 0-5.74-1.1-7.843-2.918m15.686 0A8.959 8.959 0 0121 12c0 .778-.099 1.533-.284 2.253m0 0A17.919 17.919 0 0112 16.5a17.919 17.919 0 01-8.716-2.247m0 0A9.015 9.015 0 013 12c0-1.605.42-3.113 1.157-4.418"
        />
      </svg>
    ),
  },
  {
    name: "Southdowns",
    description:
      "Reliable home cleaning for Southdowns Ridge and surrounding areas.",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="w-10 h-10"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        strokeWidth={2.5}
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M3.75 21h16.5M4.5 3h15M5.25 3v18m13.5-18v18M9 6.75h1.5m-1.5 3h1.5m-1.5 3h1.5m3-6H15m-1.5 3H15m-1.5 3H15M9 21v-3.375c0-.621.504-1.125 1.125-1.125h3.75c.621 0 1.125.504 1.125 1.125V21"
        />
      </svg>
    ),
  },
];

export default function LocationsSection() {
  return (
    <section className="bg-cream py-20 px-4 sm:px-8 lg:px-12">
      <div className="max-w-[1600px] mx-auto">
        {/* Header */}
        <div className="mb-12">
          <p className="text-lime font-semibold text-sm uppercase tracking-widest mb-3">
            Where We Operate
          </p>
          <div className="flex items-center gap-2">
            <h2 className="font-heading font-extrabold text-4xl md:text-5xl text-foreground tracking-tight">
              Our Service Areas
            </h2>
            <Sparkle className="w-7 h-7 text-lime" />
          </div>
          <p className="mt-4 text-foreground/60 text-base max-w-xl">
            We proudly serve homeowners across four key areas in and around
            Centurion. Book a clean wherever you are.
          </p>
        </div>

        {/* Location blocks */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {locations.map((loc) => (
            <div
              key={loc.name}
              className="group relative bg-background border border-border p-8 overflow-hidden transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:border-lime/40"
            >
              {/* Accent bar */}
              <div className="absolute top-0 left-0 w-full h-1 bg-lime opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

              <div className="text-lime mb-6 group-hover:text-lime/80 transition-colors duration-300">
                {loc.icon}
              </div>

              <h3 className="font-heading font-extrabold text-xl text-foreground mb-3 tracking-tight">
                {loc.name}
              </h3>
              <p className="text-foreground/60 text-sm leading-relaxed">
                {loc.description}
              </p>

              <div className="mt-6 flex items-center gap-1.5 text-lime text-sm font-semibold opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                Book in this area
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-4 h-4"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M17 8l4 4m0 0l-4 4m4-4H3"
                  />
                </svg>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
