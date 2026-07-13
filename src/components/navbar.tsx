"use client";
import Link from 'next/link';

export default function Navbar() {
  return (
    <nav className="bg-white shadow-sm sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          <div className="flex-shrink-0 flex items-center">
            <Link href="/" className="text-primary font-heading font-bold text-2xl tracking-tight">
              MM Cleaners
            </Link>
          </div>
          <div className="hidden md:flex space-x-8 items-center">
            <Link href="#services" className="text-text-dark hover:text-primary transition font-medium">Our Services</Link>
            <div className="relative group">
              <button className="text-text-dark hover:text-primary transition font-medium flex items-center">
                Service Areas
                <svg className="ml-1 h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              <div className="absolute left-0 mt-2 w-48 bg-white border border-gray-100 rounded-md shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-50">
                <div className="py-1">
                  <span className="block px-4 py-2 text-sm text-text-dark hover:bg-gray-50 hover:text-primary cursor-pointer">Centurion</span>
                  <span className="block px-4 py-2 text-sm text-text-dark hover:bg-gray-50 hover:text-primary cursor-pointer">Midstream-Estate</span>
                  <span className="block px-4 py-2 text-sm text-text-dark hover:bg-gray-50 hover:text-primary cursor-pointer">Eco-Park</span>
                  <span className="block px-4 py-2 text-sm text-text-dark hover:bg-gray-50 hover:text-primary cursor-pointer">Southdowns</span>
                </div>
              </div>
            </div>
            <Link href="#about" className="text-text-dark hover:text-primary transition font-medium">About</Link>
            <Link href="#gallery" className="text-text-dark hover:text-primary transition font-medium">Cleaning Gallery</Link>
            <Link href="#contact" className="text-text-dark hover:text-primary transition font-medium">Contact</Link>
          </div>
          <div className="hidden md:flex items-center">
            <a href="tel:+27783928061" className="bg-accent text-white px-6 py-3 rounded-md font-bold hover:bg-opacity-90 transition shadow-md">
              CALL NOW: +27 78 392 8061
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
}
