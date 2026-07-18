const featureIcons = [
  // Same Day Service — clock
  <path
    key="clock"
    strokeLinecap="round"
    strokeLinejoin="round"
    d="M12 6v6l4 2m6-2a10 10 0 11-20 0 10 10 0 0120 0z"
  />,
  // Fast Response — bolt
  <path
    key="bolt"
    strokeLinecap="round"
    strokeLinejoin="round"
    d="M13 2L4.5 13.5H11l-1 8.5L19.5 10H13l0-8z"
  />,
  // Guarantee — shield check
  <path
    key="shield"
    strokeLinecap="round"
    strokeLinejoin="round"
    d="M12 3l7 3v6c0 4.5-3 8-7 9-4-1-7-4.5-7-9V6l7-3zM9 12l2 2 4-4"
  />,
  // High Quality — star
  <path
    key="star"
    strokeLinecap="round"
    strokeLinejoin="round"
    d="M12 3l2.6 5.6 6.1.8-4.5 4.2 1.2 6-5.4-3-5.4 3 1.2-6L3.3 9.4l6.1-.8L12 3z"
  />,
];

export default function Features() {
  const features = [
    {
      title: "Same Day Service",
      description:
        "We offer convenient and efficient same-day cleaning solutions for your urgent needs in Centurion.",
    },
    {
      title: "Fast Response",
      description:
        "Our dedicated team of professionals is always on standby, ensuring swift action to address your home cleaning needs promptly.",
    },
    {
      title: "Our 100% Guarantee",
      description:
        "With a promise of 100% guaranteed service, we ensure complete customer satisfaction in every cleaning task we undertake.",
    },
    {
      title: "High Quality",
      description:
        "High quality service is the cornerstone of our commitment. We go above and beyond to deliver exceptional cleaning solutions.",
    },
  ];

  return (
    <section className="bg-background py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-14">
          <span className="inline-flex bg-lime text-lime-foreground text-xs font-semibold uppercase tracking-wide px-4 py-1.5 rounded-full">
            Why us
          </span>
          <h2 className="mt-5 font-heading font-extrabold text-3xl md:text-4xl tracking-tight text-balance">
            A cleaning service you can rely on
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, idx) => (
            <div
              key={feature.title}
              className="group relative bg-card rounded-3xl p-8 border border-border hover:border-foreground/15 hover:shadow-lg transition"
            >
              <span className="absolute top-6 right-7 font-heading font-extrabold text-2xl text-lime">
                {`0${idx + 1}`}
              </span>
              <div className="w-14 h-14 rounded-2xl bg-lime flex items-center justify-center mb-6">
                <svg
                  className="w-7 h-7 text-lime-foreground"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={1.75}
                >
                  {featureIcons[idx]}
                </svg>
              </div>
              <h3 className="text-lg font-bold font-heading mb-3">
                {feature.title}
              </h3>
              <p className="text-muted-foreground text-sm leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
