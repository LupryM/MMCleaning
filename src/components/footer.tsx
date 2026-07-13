import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="bg-footer-bg text-gray-300 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8 border-b border-gray-600 pb-8">
          <div>
            <h3 className="text-white text-xl font-bold font-heading mb-4">MM Cleaners</h3>
            <p className="text-sm">
              Professional house cleaning services based in Centurion, dedicated to making your home shine.
            </p>
          </div>
          <div>
            <h3 className="text-white text-xl font-bold font-heading mb-4">Quick Links</h3>
            <ul className="space-y-2 text-sm">
              <li><Link href="#services" className="hover:text-white transition">Our Services</Link></li>
              <li><Link href="#about" className="hover:text-white transition">About Us</Link></li>
              <li><Link href="#gallery" className="hover:text-white transition">Gallery</Link></li>
              <li><Link href="#contact" className="hover:text-white transition">Contact</Link></li>
            </ul>
          </div>
          <div>
            <h3 className="text-white text-xl font-bold font-heading mb-4">Contact</h3>
            <p className="text-sm mb-2">Phone: +27 78 392 8061</p>
            <p className="text-sm">Location: Centurion, South Africa</p>
          </div>
        </div>
        <div className="text-center text-sm">
          <p>&copy; {new Date().getFullYear()} MM Cleaners. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
