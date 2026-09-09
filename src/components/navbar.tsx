"use client";
import Link from "next/link";
import { useState } from "react";
import Sparkle from "./sparkle";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  return (
    <nav className="bg-background/90 backdrop-blur-md sticky top-0 z-50 border-b border-border">
      <div className="max-w-[1600px] mx-auto px-4 sm:px-8 lg:px-12">
        <div className="flex justify-between items-center h-20">
          <div className="flex-shrink-0 flex items-center">
            <Link
              href="/"
              className="flex items-center gap-2 font-heading font-extrabold text-3xl md:text-4xl tracking-tight text-foreground"
            >
              MM Cleaners
              <Sparkle className="w-6 h-6 text-lime" />
            </Link>
          </div>

          {/* Desktop menu */}
          <div className="hidden md:flex gap-8 items-center">
            <Link href="/services" className="text-foreground/80 hover:text-foreground transition font-medium text-sm">
              Our Services
            </Link>
            <div className="relative group">
              <button className="text-foreground/80 hover:text-foreground transition font-medium text-sm flex items-center">
                Service Areas
                <svg className="ml-1 h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              <div className="absolute left-0 mt-2 w-48 bg-card border border-border rounded-none shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-50 overflow-hidden">
                <div className="py-2">
                  {["Centurion", "Midstream-Estate", "Eco-Park", "Southdowns"].map((area) => (
                    <span key={area} className="block px-4 py-2 text-sm text-foreground/80 hover:bg-cream hover:text-foreground cursor-pointer transition">
                      {area}
                    </span>
                  ))}
                </div>
              </div>
            </div>
            <Link href="#about" className="text-foreground/80 hover:text-foreground transition font-medium text-sm">
              About
            </Link>
            <Link href="#gallery" className="text-foreground/80 hover:text-foreground transition font-medium text-sm">
              Gallery
            </Link>
            <Link href="#contact" className="text-foreground/80 hover:text-foreground transition font-medium text-sm">
              Contact
            </Link>
          </div>

          {/* Call button */}
          <div className="hidden md:flex items-center">
            <a
              href="tel:+27783928061"
              className="inline-flex items-center gap-2 bg-foreground text-background px-5 py-3 rounded-none font-semibold text-sm hover:bg-foreground/90 transition"
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4 text-lime flex-shrink-0" viewBox="0 0 24 24" fill="currentColor">
                <path d="M6.6 10.8c1.4 2.8 3.8 5.1 6.6 6.6l2.2-2.2c.3-.3.7-.4 1-.2 1.1.4 2.3.6 3.6.6.6 0 1 .4 1 1V20c0 .6-.4 1-1 1-9.4 0-17-7.6-17-17 0-.6.4-1 1-1h3.5c.6 0 1 .4 1 1 0 1.3.2 2.5.6 3.6.1.3 0 .7-.2 1L6.6 10.8z"/>
              </svg>
              Call: 078 392 8061
            </a>
          </div>

          {/* Mobile burger */}
          <div className="flex md:hidden items-center">
            <button onClick={() => setMenuOpen(!menuOpen)} className="text-foreground focus:outline-none">
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={menuOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"} />
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile menu */}
        {menuOpen && (
          <div className="border-t border-border md:hidden">
            <div className="flex flex-col gap-4 p-4">
              <Link href="/services" className="text-foreground hover:text-lime transition font-medium text-sm">Our Services</Link>
              <Link href="#about" className="text-foreground hover:text-lime transition font-medium text-sm">About</Link>
              <Link href="#gallery" className="text-foreground hover:text-lime transition font-medium text-sm">Gallery</Link>
              <Link href="#contact" className="text-foreground hover:text-lime transition font-medium text-sm">Contact</Link>
              <a href="tel:+27783928061" className="inline-flex items-center gap-2 text-foreground hover:text-lime transition font-medium text-sm">
                <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4 text-lime flex-shrink-0" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M6.6 10.8c1.4 2.8 3.8 5.1 6.6 6.6l2.2-2.2c.3-.3.7-.4 1-.2 1.1.4 2.3.6 3.6.6.6 0 1 .4 1 1V20c0 .6-.4 1-1 1-9.4 0-17-7.6-17-17 0-.6.4-1 1-1h3.5c.6 0 1 .4 1 1 0 1.3.2 2.5.6 3.6.1.3 0 .7-.2 1L6.6 10.8z"/>
                </svg>
                Call: 078 392 8061
              </a>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}
