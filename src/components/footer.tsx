import Link from "next/link";
import Sparkle from "./sparkle";

export default function Footer() {
  return (
    <>
      <div className="bg-lime py-8 px-4">
        <div className="max-w-[1600px] mx-auto flex flex-col sm:flex-row items-center justify-between gap-4 sm:px-8 lg:px-12">
          <h3 className="font-heading font-extrabold text-2xl md:text-3xl text-lime-foreground">
            Ready for a spotless home? Let&apos;s get in touch.
          </h3>
          <Link
            href="/#contact"
            className="group inline-flex items-center gap-2 bg-dark text-background px-8 py-4 font-semibold hover:bg-dark/90 transition whitespace-nowrap"
          >
            Contact Us
            <span className="group-hover:translate-x-1 transition-transform">
              →
            </span>
          </Link>
        </div>
      </div>
      <footer
        id="contact"
        className="relative overflow-hidden bg-dark text-background/70"
      >
      <Sparkle className="pointer-events-none absolute -left-10 top-10 w-40 h-40 text-lime/10" />
      <div className="max-w-[1600px] mx-auto px-4 sm:px-8 lg:px-12 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-12 border-b border-background/10 pb-12">
          <div className="max-w-sm">
            <div className="flex items-center gap-1.5 text-background font-heading font-extrabold text-2xl tracking-tight">
              MM Cleaners
              <Sparkle className="w-4 h-4 text-lime" />
            </div>
            <p className="mt-4 text-sm leading-relaxed">
              Professional house cleaning services based in Centurion, dedicated
              to making your home shine.
            </p>
            <ul className="mt-6 flex flex-wrap gap-4 text-sm">
              <li>
                <Link
                  href="/services"
                  className="hover:text-lime transition"
                >
                  Our Services
                </Link>
              </li>
              <li>
                <Link href="/#about" className="hover:text-lime transition">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/#areas" className="hover:text-lime transition">
                  Service Areas
                </Link>
              </li>
            </ul>
          </div>

          <div className="lg:text-right">
            <h3 className="text-background font-heading font-extrabold text-3xl md:text-4xl tracking-tight">
              Contact us
            </h3>
            <div className="mt-6 flex flex-col gap-3 lg:items-end">
              <a
                href="tel:+27783928061"
                className="group inline-flex items-center gap-3 text-background hover:text-lime transition"
              >
                <svg
                  className="w-6 h-6 text-lime shrink-0 group-hover:scale-110 transition-transform"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M6.6 10.8a15.5 15.5 0 006.6 6.6l2.2-2.2c.3-.3.7-.4 1-.2 1.1.4 2.3.6 3.6.6.6 0 1 .4 1 1V20c0 .6-.4 1-1 1A17 17 0 013 4c0-.6.4-1 1-1h3.5c.6 0 1 .4 1 1 0 1.2.2 2.4.6 3.6.1.4 0 .8-.3 1l-2.2 2.2z" />
                </svg>
                +27 78 392 8061
              </a>
              <span className="group inline-flex items-center gap-3 lg:justify-end text-background hover:text-lime transition">
                <svg
                  className="w-6 h-6 text-lime shrink-0 group-hover:scale-110 transition-transform"
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
                Centurion, South Africa
              </span>
            </div>
          </div>
        </div>

        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 text-sm">
          <p>
            &copy; {new Date().getFullYear()} MM Cleaners. All rights reserved.
          </p>
          <a
            href="#"
            className="inline-flex items-center gap-2 text-background/80 hover:text-lime transition"
          >
            Scroll to top
            <span className="flex items-center justify-center w-8 h-8 rounded-none bg-lime text-lime-foreground text-xs">
              ↑
            </span>
          </a>
        </div>
      </div>
    </footer>
    </>
  );
}
