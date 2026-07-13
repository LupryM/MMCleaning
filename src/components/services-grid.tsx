export default function ServicesGrid() {
  const services = [
    { title: "Commercial Cleaning" },
    { title: "Deep Cleaning" },
    { title: "Move-out Cleaning" },
    { title: "Move-in Cleaning" },
    { title: "Apartment Cleaning" },
  ];

  return (
    <div id="services" className="bg-gray-50 py-20 border-t border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold font-heading mb-4">
            House Cleaning Services Centurion
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            As house cleaning specialists, we provide reliable, professional service to meet your house cleaning needs.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 justify-center">
          {services.map((service, idx) => (
            <div key={idx} className="bg-white rounded-lg shadow-sm overflow-hidden hover:shadow-md transition">
              <div className="h-48 bg-gray-200 flex items-center justify-center">
                <span className="text-gray-500 font-bold tracking-widest">[IMAGE PLACEHOLDER]</span>
              </div>
              <div className="p-6 text-center">
                <h3 className="text-xl font-bold font-heading text-primary">{service.title}</h3>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
