import Image from "next/image";

export default function AdditionalServices() {
  const services = [
    { title: "Carpet Cleaning" },
    { title: "Upholstery Cleaning" },
    { title: "Mattress Cleaning" },
  ];

  return (
    <section className="bg-background py-20">
      <div className="max-w-[1600px] mx-auto px-4 sm:px-8 lg:px-12">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <span className="inline-flex bg-lime text-lime-foreground text-xs font-semibold uppercase tracking-wide px-4 py-1.5 rounded-none">
            Extras
          </span>
          <h2 className="mt-5 font-heading font-extrabold text-3xl md:text-4xl tracking-tight">
            We also provide
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {services.map((service) => (
            <div
              key={service.title}
              className="group bg-cream rounded-none overflow-hidden border border-border hover:shadow-lg transition"
            >
              <div className="relative h-44 overflow-hidden">
                <Image
                  src={`/placeholder.svg?height=176&width=420&query=${encodeURIComponent(
                    service.title
                  )}`}
                  alt={service.title}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </div>
              <div className="p-5 flex items-center justify-between gap-4">
                <h3 className="text-base font-bold font-heading">
                  {service.title}
                </h3>
                <span className="flex items-center justify-center w-8 h-8 rounded-none bg-lime text-lime-foreground text-sm shrink-0 transition-transform group-hover:translate-x-0.5">
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
