import Link from 'next/link';

export default function Introduction() {
  return (
    <div id="about" className="bg-white py-20">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-3xl md:text-4xl font-bold font-heading mb-6">
          Reliable Maid Services
        </h2>
        <p className="text-lg text-gray-600 mb-8 leading-relaxed">
          MM Cleaners provides maid cleaning services in the Centurion area. Our staff wipes down all areas of the living space to maintain a dust-free environment. We are efficient and reliable.
        </p>
        <div className="flex flex-wrap justify-center gap-4 mb-10">
          <span className="bg-gray-100 text-text-dark px-4 py-2 rounded-full text-sm font-medium">Cleaning Service</span>
          <span className="bg-gray-100 text-text-dark px-4 py-2 rounded-full text-sm font-medium">Apartment Cleaning</span>
          <span className="bg-gray-100 text-text-dark px-4 py-2 rounded-full text-sm font-medium">Janitorial Service</span>
        </div>
        <Link href="#services" className="inline-flex items-center text-primary font-bold hover:text-blue-700 transition">
          LEARN MORE 
          <span className="ml-2">→</span> 
          <span className="ml-2">OUR SERVICES</span>
        </Link>
      </div>
    </div>
  );
}
