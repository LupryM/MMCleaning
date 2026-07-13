export default function AdditionalServices() {
  const services = [
    { title: "Carpet Cleaning" },
    { title: "Upholstery Cleaning" },
    { title: "Mattress Cleaning" },
  ];

  return (
    <div className="bg-white py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold font-heading">
            We Also Provide
          </h2>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {services.map((service, idx) => (
            <div key={idx} className="bg-gray-50 rounded-lg shadow-sm overflow-hidden hover:shadow-md transition border border-gray-100">
              <div className="h-40 bg-gray-200 flex items-center justify-center">
                <span className="text-gray-500 font-bold tracking-widest text-sm">[IMAGE PLACEHOLDER]</span>
              </div>
              <div className="p-5 text-center">
                <h3 className="text-lg font-bold font-heading">{service.title}</h3>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
