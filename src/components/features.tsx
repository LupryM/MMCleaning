export default function Features() {
  const features = [
    {
      title: "Same Day Service",
      description: "We offer convenient and efficient same-day cleaning solutions for your urgent needs in Centurion.",
    },
    {
      title: "Fast Response",
      description: "Our dedicated team of professionals is always on standby, ensuring swift action to address your home cleaning needs promptly.",
    },
    {
      title: "Our 100% Guarantee",
      description: "With a promise of 100% guaranteed service, we ensure complete customer satisfaction in every cleaning task we undertake.",
    },
    {
      title: "High Quality",
      description: "High quality service is the cornerstone of our commitment. We go above and beyond to deliver exceptional cleaning solutions.",
    },
  ];

  return (
    <div className="bg-white py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, idx) => (
            <div key={idx} className="bg-gray-50 rounded-lg p-8 text-center shadow-sm border border-gray-100 hover:shadow-md transition">
              <div className="w-16 h-16 mx-auto bg-gray-200 rounded-full flex items-center justify-center mb-6 text-xl font-bold text-gray-500">
                [ICON]
              </div>
              <h3 className="text-xl font-bold font-heading mb-4">{feature.title}</h3>
              <p className="text-gray-600 text-sm leading-relaxed">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
