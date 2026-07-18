import Image from "next/image";

export default function ServicesGrid() {
  const services = [
    { title: "Commercial Cleaning" },
    { title: "Deep Cleaning" },
    { title: "Move-out Cleaning" },
    { title: "Move-in Cleaning" },
    { title: "Apartment Cleaning" },
  ];

  return (
    <section id="services" className="bg-cream py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-14">
          <span className="inline-flex bg-lime text-lime-foreground text-xs font-semibold uppercase tracking-wide px-4 py-1.5 rounded-full">
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
            <div
              key={service.title}
              className="group bg-card rounded-3xl overflow-hidden border border-border hover:shadow-lg transition"
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
                <span className="flex items-center justify-center w-9 h-9 rounded-full bg-lime text-lime-foreground text-sm shrink-0 transition-transform group-hover:translate-x-0.5">
                  →
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
