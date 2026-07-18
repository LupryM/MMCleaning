import Link from "next/link";
import Sparkle from "./sparkle";

export default function Footer() {
  return (
    <footer
      id="contact"
      className="relative overflow-hidden bg-dark text-background/70"
    >
      <Sparkle className="pointer-events-none absolute -left-10 top-10 w-40 h-40 text-lime/10" />
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
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
                  href="#services"
                  className="hover:text-lime transition"
                >
                  Our Services
                </Link>
              </li>
              <li>
                <Link href="#about" className="hover:text-lime transition">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="#gallery" className="hover:text-lime transition">
                  Gallery
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
                className="inline-flex items-center gap-3 text-background hover:text-lime transition"
              >
                <span className="flex items-center justify-center w-9 h-9 rounded-full bg-lime text-lime-foreground shrink-0">
                  <svg
                    className="w-4 h-4"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M6.6 10.8a15.5 15.5 0 006.6 6.6l2.2-2.2c.3-.3.7-.4 1-.2 1.1.4 2.3.6 3.6.6.6 0 1 .4 1 1V20c0 .6-.4 1-1 1A17 17 0 013 4c0-.6.4-1 1-1h3.5c.6 0 1 .4 1 1 0 1.2.2 2.4.6 3.6.1.4 0 .8-.3 1l-2.2 2.2z" />
                  </svg>
                </span>
                +27 78 392 8061
              </a>
              <span className="inline-flex items-center gap-3 lg:justify-end">
                <span className="flex items-center justify-center w-9 h-9 rounded-full bg-lime text-lime-foreground shrink-0">
                  <svg
                    className="w-4 h-4"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={2}
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M3 7l9 6 9-6M4 5h16a1 1 0 011 1v12a1 1 0 01-1 1H4a1 1 0 01-1-1V6a1 1 0 011-1z"
                    />
                  </svg>
                </span>
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
            <span className="flex items-center justify-center w-8 h-8 rounded-full bg-lime text-lime-foreground text-xs">
              ↑
            </span>
          </a>
        </div>
      </div>
    </footer>
  );
}
