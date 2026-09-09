"use client";

import Sparkle from "./sparkle";

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-background">
      {/* sharp geometric cream backdrop */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -top-32 -left-40 w-[46rem] h-[46rem] bg-cream rotate-12 transform"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute top-24 right-0 w-[38rem] h-[38rem] bg-cream/70 -rotate-6 transform"
      />

      <div className="relative max-w-[1600px] mx-auto px-4 sm:px-8 lg:px-12 py-16 md:py-24">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="relative">
            <span className="inline-flex items-center gap-2 bg-lime text-lime-foreground text-xs font-semibold uppercase tracking-wide px-4 py-1.5 rounded-none">
              Welcome — Centurion&apos;s cleaners
            </span>

            <h1 className="mt-6 font-heading font-extrabold leading-[0.95] tracking-tight text-5xl md:text-6xl lg:text-7xl text-balance">
              Professional House{" "}
              <span className="relative inline-block">
                Cleaning
                <Sparkle className="hidden md:block absolute -right-12 -top-6 w-9 h-9 text-lime" />
              </span>{" "}
              in Centurion
            </h1>

            <p className="mt-6 text-lg text-muted-foreground max-w-xl leading-relaxed">
              We specialize in house cleaning services in Centurion and
              surrounding areas, dedicated to giving you fast, friendly, and
              reliable service.
            </p>
          </div>

          {/* Quote form */}
          <div className="relative">
            <Sparkle
              className="hidden lg:block absolute -top-8 -left-6 w-10 h-10 text-lime"
            />
            <div className="relative bg-card rounded-none shadow-xl border border-border overflow-hidden">
              <div className="bg-foreground px-7 py-6">
                <h2 className="text-background text-2xl font-extrabold font-heading">
                  Request a quote
                </h2>
                <p className="text-background/60 text-sm mt-1">
                  Free, no-obligation estimate.
                </p>
              </div>
              <form className="p-7 space-y-4" onSubmit={(e) => e.preventDefault()}>
                <div className="grid grid-cols-2 gap-4">
                  <input
                    type="text"
                    placeholder="First name *"
                    className="w-full px-4 py-3 bg-cream border border-border rounded-none text-sm focus:outline-none focus:ring-2 focus:ring-lime focus:border-transparent"
                    required
                  />
                  <input
                    type="text"
                    placeholder="Last name *"
                    className="w-full px-4 py-3 bg-cream border border-border rounded-none text-sm focus:outline-none focus:ring-2 focus:ring-lime focus:border-transparent"
                    required
                  />
                </div>
                <input
                  type="email"
                  placeholder="Email *"
                  className="w-full px-4 py-3 bg-cream border border-border rounded-none text-sm focus:outline-none focus:ring-2 focus:ring-lime focus:border-transparent"
                  required
                />
                <input
                  type="tel"
                  placeholder="Phone *"
                  className="w-full px-4 py-3 bg-cream border border-border rounded-none text-sm focus:outline-none focus:ring-2 focus:ring-lime focus:border-transparent"
                  required
                />
                <select
                  className="w-full px-4 py-3 bg-cream border border-border rounded-none text-sm text-muted-foreground focus:outline-none focus:ring-2 focus:ring-lime focus:border-transparent"
                  defaultValue=""
                >
                  <option value="">What service do you need?</option>
                  <option value="house-cleaning">House Cleaning</option>
                  <option value="deep-cleaning">Deep Cleaning</option>
                  <option value="move-in-out">Move In/Out Cleaning</option>
                  <option value="apartment-cleaning">Apartment Cleaning</option>
                  <option value="post-construction">Post Construction Cleaning</option>
                  <option value="upholstery-cleaning">Upholstery Cleaning</option>
                  <option value="carpet-cleaning">Carpet Cleaning</option>
                </select>
                <button
                  type="submit"
                  className="group w-full inline-flex items-center justify-center gap-2 bg-lime text-lime-foreground font-bold py-4 rounded-none hover:brightness-95 transition mt-2"
                >
                  Request a quote
                  <span className="transition-transform group-hover:translate-x-0.5">
                    →
                  </span>
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
