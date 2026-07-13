"use client";

export default function Hero() {
  return (
    <div className="relative bg-gray-50 border-b border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6">
              Professional House Cleaning in Centurion
            </h1>
            <p className="text-lg mb-8 text-gray-600">
              We specialize in house cleaning services in Centurion and surrounding areas, dedicated to giving you fast, friendly, and reliable service.
            </p>
          </div>
          
          <div className="bg-white rounded-lg shadow-xl overflow-hidden border border-gray-100">
            <div className="bg-primary px-6 py-4">
              <h2 className="text-white text-2xl font-bold font-heading text-center">Request a Quote</h2>
            </div>
            <form className="p-6 space-y-4" onSubmit={(e) => e.preventDefault()}>
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <input type="text" placeholder="First Name *" className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-md focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent" required />
                </div>
                <div>
                  <input type="text" placeholder="Last Name *" className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-md focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent" required />
                </div>
              </div>
              <div>
                <input type="email" placeholder="Email *" className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-md focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent" required />
              </div>
              <div>
                <input type="tel" placeholder="Phone *" className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-md focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent" required />
              </div>
              <div>
                <select className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-md focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent text-gray-600">
                  <option value="">What service do you need?</option>
                  <option value="house-cleaning">House Cleaning</option>
                  <option value="deep-cleaning">Deep Cleaning</option>
                  <option value="move-in-out">Move In/Out Cleaning</option>
                  <option value="apartment-cleaning">Apartment Cleaning</option>
                </select>
              </div>
              <button type="submit" className="w-full bg-accent text-white font-bold py-4 rounded-md hover:bg-opacity-90 transition mt-4 text-lg shadow-md">
                REQUEST A QUOTE
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
