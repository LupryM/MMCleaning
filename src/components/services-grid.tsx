import Image from "next/image";
import Link from "next/link";

interface ServicesGridProps {
  showViewAllButton?: boolean;
}

export default function ServicesGrid({ showViewAllButton = false }: ServicesGridProps) {
  const services = [
    { title: "Commercial Cleaning", href: "/services/commercial-cleaning" },
    { title: "Deep Cleaning", href: "/services/deep-cleaning" },
    { title: "Move In/Out Cleaning", href: "/services/move-in-move-out-cleaning" },
    { title: "Apartment Cleaning", href: "/services/apartment-cleaning" },
    { title: "Post Construction Cleaning", href: "/services/post-construction-cleaning" },
    { title: "Upholstery Cleaning", href: "/services/upholstery-cleaning" },
    { title: "Carpet Cleaning", href: "/services/carpet-cleaning" },
  ];

  return (
    <section id="services" className="bg-cream py-20">
      <div className="max-w-[1600px] mx-auto px-4 sm:px-8 lg:px-12">
        <div className="text-center max-w-3xl mx-auto mb-14">
          <span className="inline-flex bg-lime text-lime-foreground text-xs font-semibold uppercase tracking-wide px-4 py-1.5 rounded-none">
            Services
          </span>
          <h2 className="mt-5 font-heading font-extrabold text-3xl md:text-4xl tracking-tight text-balance">
            House cleaning services in Centurion
          </h2>
          <p className="mt-4 text-lg text-muted-foreground">
            As house cleaning specialists, we provide reliable, professional
            service to meet your house cleaning needs.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service) => (
            <Link
              key={service.title}
              href={service.href}
              className="group block bg-card rounded-none overflow-hidden border border-border hover:shadow-lg transition"
            >
              <div className="relative h-52 overflow-hidden">
                <Image
                  src={`/placeholder.svg?height=208&width=420&query=${encodeURIComponent(
                    service.title + " cleaning"
                  )}`}
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
            <Link
              href="/services"
              className="inline-flex items-center justify-center bg-lime text-lime-foreground font-semibold px-8 py-4 text-lg transition hover:bg-lime/90 hover:scale-105 duration-300"
            >
              View All Services
              <span className="ml-3 text-xl leading-none">→</span>
            </Link>
          </div>
        )}
      </div>
    </section>
  );
}
