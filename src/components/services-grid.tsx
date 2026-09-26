"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

interface ServicesGridProps {
  showViewAllButton?: boolean;
  title?: string;
  subtitle?: string;
  badge?: string;
  exclude?: string;
}

export default function ServicesGrid({ 
  showViewAllButton = false,
  title = "House cleaning services in Centurion",
  subtitle = "As house cleaning specialists, we provide reliable, professional service to meet your house cleaning needs.",
  badge = "Services",
  exclude
}: ServicesGridProps) {
  const [isExpanded, setIsExpanded] = useState(!showViewAllButton);

  const allServices = [
    { title: "Commercial Cleaning", href: "/services/commercial-cleaning", image: "/Service Images/Office Cleaning.jpg" },
    { title: "Deep Cleaning", href: "/services/deep-cleaning", image: "/Service Images/Deep-Cleaning-Company.jpg" },
    { title: "Move In/Out Cleaning", href: "/services/move-in-move-out-cleaning", image: "/Service Images/Move in cleaning.jpg" },
    { title: "Apartment Cleaning", href: "/services/apartment-cleaning", image: "/Service Images/apartment clean.jpg" },
    { title: "Post Construction Cleaning", href: "/services/post-construction-cleaning", image: "/Service Images/post construction cleaning.avif" },
    { title: "Upholstery Cleaning", href: "/services/upholstery-cleaning", image: "/Service Images/upholstery-cleaning.jpeg" },
    { title: "Carpet Cleaning", href: "/services/carpet-cleaning", image: "/Service Images/carpet cleaning.jpg" },
  ];

  const services = allServices.filter(s => s.href !== exclude);
  const displayedServices = isExpanded ? services : services.slice(0, 3);

  return (
    <section id="services" className="bg-cream py-20">
      <div className="max-w-[1600px] mx-auto px-4 sm:px-8 lg:px-12">
        <div className="text-center max-w-3xl mx-auto mb-14">
          {badge && (
            <span className="inline-flex bg-lime text-lime-foreground text-xs font-semibold uppercase tracking-wide px-4 py-1.5 rounded-none">
              {badge}
            </span>
          )}
          <h2 className="mt-5 font-heading font-extrabold text-3xl md:text-4xl tracking-tight text-balance">
            {title}
          </h2>
          {subtitle && (
            <p className="mt-4 text-lg text-muted-foreground">
              {subtitle}
            </p>
          )}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {displayedServices.map((service) => (
            <Link
              key={service.title}
              href={service.href}
              className="group block bg-card rounded-none overflow-hidden border border-border hover:shadow-lg transition"
            >
              <div className="relative h-52 overflow-hidden">
                <Image
                  src={service.image}
                  alt={service.title}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </div>
              <div className="p-6 flex items-center justify-between gap-4">
                <h3 className="text-lg font-bold font-heading">
                  {service.title}
                </h3>
                <span className="flex items-center justify-center w-9 h-9 rounded-none bg-lime text-lime-foreground text-sm shrink-0 transition-transform group-hover:translate-x-0.5">
                  →
                </span>
              </div>
            </Link>
          ))}
        </div>

        {showViewAllButton && (
          <div className="mt-14 flex justify-center">
            <button
              onClick={() => {
                if (isExpanded) {
                  document.getElementById('services')?.scrollIntoView({ behavior: 'smooth' });
                }
                setIsExpanded(!isExpanded);
              }}
              className="inline-flex items-center justify-center bg-lime text-lime-foreground font-semibold px-8 py-4 text-lg transition hover:bg-lime/90 hover:scale-105 duration-300 cursor-pointer"
            >
              {isExpanded ? "Show Less" : "View All Services"}
              <span className="ml-3 text-xl leading-none">{isExpanded ? "↑" : "↓"}</span>
            </button>
          </div>
        )}
      </div>
    </section>
  );
}
