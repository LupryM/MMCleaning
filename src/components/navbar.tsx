"use client";
import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import { usePathname } from "next/navigation";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const pathname = usePathname();

  const isActive = (path: string) => {
    if (path === "/") return pathname === "/";
    if (path.startsWith("/#")) return false;
    return pathname === path || pathname?.startsWith(`${path}/`);
  };

  const desktopLinkClass = (path: string) => 
    `transition font-medium text-sm inline-flex items-center gap-1 py-4 border-b-2 ${
      isActive(path) ? "text-foreground font-bold border-lime" : "text-foreground/80 hover:text-foreground border-transparent"
    }`;

  const dropdownLinkClass = (path: string) =>
    `block px-4 py-2.5 text-sm transition ${
      isActive(path) ? "bg-foreground text-lime font-bold" : "text-foreground/80 hover:bg-foreground hover:text-lime"
    }`;

  const mobileLinkClass = (path: string) =>
    `px-6 py-5 border-b border-white/10 text-lg font-heading font-bold uppercase tracking-wide transition block ${
      isActive(path) ? "text-lime bg-white/5" : "hover:text-lime hover:bg-white/5"
    }`;

  const mobileDropdownLinkClass = (path: string) =>
    `px-8 py-4 border-b border-white/5 text-sm font-medium transition block ${
      isActive(path) ? "text-lime bg-white/5" : "hover:text-lime hover:bg-white/5"
    }`;

  return (
    <>
      <nav className="bg-background/90 backdrop-blur-md sticky top-0 z-50 border-b border-border">
        <div className="max-w-[1600px] mx-auto px-4 sm:px-8 lg:px-12">
        <div className="flex justify-between items-center h-20">
          <div className="flex-shrink-0 flex items-center">
            <Link href="/" className="flex items-center">
              <Image
                src="/logo/header logo.png"
                alt="Angie's Cleaning"
                width={280}
                height={90}
                className="h-16 w-auto object-contain"
                priority
              />
            </Link>
          </div>

          {/* Desktop menu */}
          <div className="hidden md:flex gap-8 items-center h-full">
            <div className="relative group h-full flex items-center">
              <Link href="/services" className={desktopLinkClass("/services")}>
                Our Services
                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 transition-transform group-hover:rotate-180" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </Link>
              <div className="absolute left-0 top-full w-56 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 bg-background border border-border shadow-lg z-50 transform origin-top-left group-hover:translate-y-0 translate-y-2">
                <div className="py-2 flex flex-col">
                  <Link href="/services/apartment-cleaning" className={dropdownLinkClass("/services/apartment-cleaning")}>Apartment Cleaning</Link>
                  <Link href="/services/carpet-cleaning" className={dropdownLinkClass("/services/carpet-cleaning")}>Carpet Cleaning</Link>
                  <Link href="/services/commercial-cleaning" className={dropdownLinkClass("/services/commercial-cleaning")}>Commercial Cleaning</Link>
                  <Link href="/services/deep-cleaning" className={dropdownLinkClass("/services/deep-cleaning")}>Deep Cleaning</Link>
                  <Link href="/services/move-in-move-out-cleaning" className={dropdownLinkClass("/services/move-in-move-out-cleaning")}>Move In/Out Cleaning</Link>
                  <Link href="/services/post-construction-cleaning" className={dropdownLinkClass("/services/post-construction-cleaning")}>Post Construction Cleaning</Link>
                  <Link href="/services/upholstery-cleaning" className={dropdownLinkClass("/services/upholstery-cleaning")}>Upholstery Cleaning</Link>
                </div>
              </div>
            </div>
            <Link href="/#areas" className={desktopLinkClass("/#areas")}>
              Service Areas
            </Link>
            <Link href="/about" className={desktopLinkClass("/about")}>
              About
            </Link>
            <Link href="/contact" className={desktopLinkClass("/contact")}>
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
        </div>
      </nav>

      {/* Mobile menu overlay */}
      <div 
        className={`fixed inset-0 bg-black/50 z-[60] md:hidden transition-opacity duration-300 ${menuOpen ? "opacity-100 visible" : "opacity-0 invisible"}`}
        onClick={() => setMenuOpen(false)}
      />

      {/* Mobile menu panel */}
      <div 
        className={`fixed top-0 right-0 h-full w-4/5 max-w-sm bg-foreground text-background z-[70] transform transition-transform duration-300 ease-in-out flex flex-col md:hidden overflow-hidden ${menuOpen ? "translate-x-0" : "translate-x-full"}`}
      >
          <div className="flex justify-end p-6 border-b border-white/10">
            <button onClick={() => setMenuOpen(false)} className="text-background hover:text-lime focus:outline-none transition">
              <svg className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>
          
          <div className="flex-1 overflow-y-auto">
            <div className="flex flex-col">
              {/* Home */}
              <Link href="/" onClick={() => setMenuOpen(false)} className={mobileLinkClass("/")}>
                Home
              </Link>
              
              {/* Services Dropdown */}
              <div>
                <div className={`flex justify-between items-center border-b border-white/10 ${isActive("/services") ? "bg-white/5" : ""}`}>
                  <Link
                    href="/services"
                    onClick={() => setMenuOpen(false)}
                    className={`flex-1 px-6 py-5 text-lg font-heading font-bold uppercase tracking-wide transition ${isActive("/services") ? "text-lime" : "hover:text-lime hover:bg-white/5"}`}
                  >
                    Our Services
                  </Link>
                  <button
                    onClick={() => setServicesOpen(!servicesOpen)}
                    className={`px-5 py-5 transition hover:text-lime hover:bg-white/5 ${isActive("/services") ? "text-lime" : ""}`}
                    aria-label="Toggle services dropdown"
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" className={`h-5 w-5 transition-transform duration-300 ${servicesOpen ? "rotate-180" : ""}`} fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                  </button>
                </div>
                
                {/* Services Expanded */}
                <div className={`flex flex-col overflow-hidden transition-all duration-300 bg-black/20 ${servicesOpen ? "max-h-[600px]" : "max-h-0"}`}>
                  <Link href="/services/apartment-cleaning" onClick={() => setMenuOpen(false)} className={mobileDropdownLinkClass("/services/apartment-cleaning")}>Apartment Cleaning</Link>
                  <Link href="/services/carpet-cleaning" onClick={() => setMenuOpen(false)} className={mobileDropdownLinkClass("/services/carpet-cleaning")}>Carpet Cleaning</Link>
                  <Link href="/services/commercial-cleaning" onClick={() => setMenuOpen(false)} className={mobileDropdownLinkClass("/services/commercial-cleaning")}>Commercial Cleaning</Link>
                  <Link href="/services/deep-cleaning" onClick={() => setMenuOpen(false)} className={mobileDropdownLinkClass("/services/deep-cleaning")}>Deep Cleaning</Link>
                  <Link href="/services/move-in-move-out-cleaning" onClick={() => setMenuOpen(false)} className={mobileDropdownLinkClass("/services/move-in-move-out-cleaning")}>Move In/Out Cleaning</Link>
                  <Link href="/services/post-construction-cleaning" onClick={() => setMenuOpen(false)} className={mobileDropdownLinkClass("/services/post-construction-cleaning")}>Post Construction Cleaning</Link>
                  <Link href="/services/upholstery-cleaning" onClick={() => setMenuOpen(false)} className={mobileDropdownLinkClass("/services/upholstery-cleaning")}>Upholstery Cleaning</Link>
                </div>
              </div>
              
              {/* Service Areas */}
              <Link href="/#areas" onClick={() => setMenuOpen(false)} className={mobileLinkClass("/#areas")}>
                Service Areas
              </Link>
              
              {/* About */}
              <Link href="/about" onClick={() => setMenuOpen(false)} className={mobileLinkClass("/about")}>
                About
              </Link>
              
              {/* Contact */}
              <Link href="/contact" onClick={() => setMenuOpen(false)} className={mobileLinkClass("/contact")}>
                Contact
              </Link>
            </div>
          </div>
          
          <div className="p-6 mt-auto">
            <a
              href="tel:+27783928061"
              className="flex justify-center items-center gap-3 bg-lime text-lime-foreground px-6 py-4 rounded-none font-heading font-bold uppercase tracking-wide hover:bg-lime/90 transition w-full"
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5 flex-shrink-0" viewBox="0 0 24 24" fill="currentColor">
                <path d="M6.6 10.8c1.4 2.8 3.8 5.1 6.6 6.6l2.2-2.2c.3-.3.7-.4 1-.2 1.1.4 2.3.6 3.6.6.6 0 1 .4 1 1V20c0 .6-.4 1-1 1-9.4 0-17-7.6-17-17 0-.6.4-1 1-1h3.5c.6 0 1 .4 1 1 0 1.3.2 2.5.6 3.6.1.3 0 .7-.2 1L6.6 10.8z"/>
              </svg>
              Call Us
            </a>
          </div>
        </div>
      </>
  );
}
