"use client";

import { useState } from "react";
import Image from "next/image";
import Sparkle from "./sparkle";

export default function Hero() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<{ type: 'success' | 'error', message: string } | null>(null);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus(null);
    
    const formData = new FormData(e.currentTarget);
    const payload = Object.fromEntries(formData.entries());
    
    try {
      const response = await fetch('/api/quote', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload),
      });
      
      const data = await response.json();
      
      if (response.ok) {
        setSubmitStatus({ type: 'success', message: 'Quote request sent!' });
        e.currentTarget.reset();
      } else {
        setSubmitStatus({ type: 'error', message: data.error || 'Failed to send quote request.' });
      }
    } catch (err) {
      setSubmitStatus({ type: 'error', message: 'An unexpected error occurred.' });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section className="relative overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/Images/hero image angies cleaning best cleaners in centurion.jpg"
          alt="Angie's Cleaning Centurion"
          fill
          className="object-cover object-[50%_75%]"
          priority
        />
        <div className="absolute inset-0 bg-black/60" />
      </div>

      <div className="relative z-10 max-w-[1600px] mx-auto px-4 sm:px-8 lg:px-12 py-16 md:py-24">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="relative">
            <span className="inline-flex items-center gap-2 bg-lime text-lime-foreground text-xs font-semibold uppercase tracking-wide px-4 py-1.5 rounded-none shadow-sm">
              Welcome — Centurion&apos;s cleaners
            </span>

            <h1 className="mt-6 font-heading font-extrabold leading-[0.95] tracking-tight text-5xl md:text-6xl lg:text-7xl text-balance text-white">
              Professional House{" "}
              <span className="relative inline-block">
                Cleaning
                <Sparkle className="hidden md:block absolute -right-12 -top-6 w-9 h-9 text-lime" />
              </span>{" "}
              in Centurion
            </h1>

            <p className="mt-6 text-lg text-white/90 max-w-xl leading-relaxed">
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
            <div className="relative bg-card rounded-none shadow-xl overflow-hidden">
              <div className="bg-foreground px-7 py-6">
                <h2 className="text-background text-2xl font-extrabold font-heading">
                  Request a quote
                </h2>
                <p className="text-background/60 text-sm mt-1">
                  Free, no-obligation estimate.
                </p>
              </div>
              <form className="p-7 space-y-4" onSubmit={handleSubmit}>
                {submitStatus && (
                  <div className={`p-3 text-sm font-semibold ${submitStatus.type === 'success' ? 'bg-green-100 text-green-800' : 'bg-red-100 text-red-800'}`}>
                    {submitStatus.message}
                  </div>
                )}
                <div className="grid grid-cols-2 gap-4">
                  <input
                    type="text"
                    name="firstName"
                    placeholder="First name *"
                    className="w-full px-4 py-3 bg-cream border border-border rounded-none text-sm focus:outline-none focus:ring-2 focus:ring-lime focus:border-transparent text-foreground"
                    required
                  />
                  <input
                    type="text"
                    name="lastName"
                    placeholder="Last name *"
                    className="w-full px-4 py-3 bg-cream border border-border rounded-none text-sm focus:outline-none focus:ring-2 focus:ring-lime focus:border-transparent text-foreground"
                    required
                  />
                </div>
                <input
                  type="email"
                  name="email"
                  placeholder="Email *"
                  className="w-full px-4 py-3 bg-cream border border-border rounded-none text-sm focus:outline-none focus:ring-2 focus:ring-lime focus:border-transparent text-foreground"
                  required
                />
                <input
                  type="tel"
                  name="phone"
                  placeholder="Phone *"
                  className="w-full px-4 py-3 bg-cream border border-border rounded-none text-sm focus:outline-none focus:ring-2 focus:ring-lime focus:border-transparent text-foreground"
                  required
                />
                <select
                  name="service"
                  className="w-full px-4 py-3 bg-cream border border-border rounded-none text-sm text-foreground focus:outline-none focus:ring-2 focus:ring-lime focus:border-transparent"
                  defaultValue=""
                  required
                >
                  <option value="" disabled>What service do you need?</option>
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
                  disabled={isSubmitting}
                  className="group w-full inline-flex items-center justify-center gap-2 bg-lime text-lime-foreground font-bold py-4 rounded-none hover:brightness-95 transition mt-2 disabled:opacity-70"
                >
                  {isSubmitting ? "Sending..." : "Request a quote"}
                  {!isSubmitting && (
                    <span className="transition-transform group-hover:translate-x-0.5">
                      →
                    </span>
                  )}
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
