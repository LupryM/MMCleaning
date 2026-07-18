"use client";
import Link from "next/link";
import Sparkle from "./sparkle";

export default function Navbar() {
  return (
    <nav className="bg-background/90 backdrop-blur-md sticky top-0 z-50 border-b border-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          <div className="flex-shrink-0 flex items-center">
            <Link
              href="/"
              className="flex items-center gap-1.5 font-heading font-extrabold text-2xl tracking-tight text-foreground"
            >
              MM Cleaners
              <Sparkle className="w-4 h-4 text-lime" />
            </Link>
          </div>

          <div className="hidden md:flex gap-8 items-center">
            <Link
              href="#services"
              className="text-foreground/80 hover:text-foreground transition font-medium text-sm"
            >
              Our Services
            </Link>
            <div className="relative group">
              <button className="text-foreground/80 hover:text-foreground transition font-medium text-sm flex items-center">
                Service Areas
                <svg
                  className="ml-1 h-4 w-4"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M19 9l-7 7-7-7"
                  />
                </svg>
              </button>
              <div className="absolute left-0 mt-2 w-48 bg-card border border-border rounded-2xl shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-50 overflow-hidden">
                <div className="py-2">
                  {["Centurion", "Midstream-Estate", "Eco-Park", "Southdowns"].map(
                    (area) => (
                      <span
                        key={area}
                        className="block px-4 py-2 text-sm text-foreground/80 hover:bg-cream hover:text-foreground cursor-pointer transition"
                      >
                        {area}
                      </span>
                    )
                  )}
                </div>
              </div>
            </div>
            <Link
              href="#about"
              className="text-foreground/80 hover:text-foreground transition font-medium text-sm"
            >
              About
            </Link>
            <Link
              href="#gallery"
              className="text-foreground/80 hover:text-foreground transition font-medium text-sm"
            >
              Gallery
            </Link>
            <Link
              href="#contact"
              className="text-foreground/80 hover:text-foreground transition font-medium text-sm"
            >
              Contact
            </Link>
          </div>

          <div className="hidden md:flex items-center">
            <a
              href="tel:+27783928061"
              className="group inline-flex items-center gap-2 bg-foreground text-background pl-5 pr-4 py-3 rounded-full font-semibold text-sm hover:bg-foreground/90 transition"
            >
              Call now
              <span className="flex items-center justify-center w-6 h-6 rounded-full bg-lime text-lime-foreground text-xs transition-transform group-hover:translate-x-0.5">
                →
              </span>
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
}
