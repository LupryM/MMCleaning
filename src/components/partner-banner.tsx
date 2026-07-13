export default function PartnerBanner() {
  return (
    <div className="bg-text-dark text-white py-16 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-8">
          <div className="flex flex-col md:flex-row items-center gap-6 text-center md:text-left">
            <div className="flex gap-4">
              <div className="w-20 h-20 bg-gray-600 flex items-center justify-center rounded text-xs text-center p-2 font-bold text-gray-300">
                [AIRBNB LOGO]
              </div>
              <div className="w-20 h-20 bg-gray-600 flex items-center justify-center rounded text-xs text-center p-2 font-bold text-gray-300">
                [BOOKING LOGO]
              </div>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold font-heading">
              Reliable Airbnb & Booking.com Services!
            </h2>
          </div>
          <div>
            <button className="bg-accent text-white px-8 py-4 rounded-md font-bold text-lg hover:bg-opacity-90 transition shadow-lg whitespace-nowrap">
              REQUEST A QUOTE
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
