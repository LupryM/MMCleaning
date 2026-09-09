export default function WhatsappButton() {
  return (
    <a
      href="https://wa.me/27783928061"
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 w-14 h-14 bg-[#25D366] text-white flex items-center justify-center hover:bg-[#128C7E] hover:scale-110 transition-all z-50 shadow-lg rounded-full"
      aria-label="Contact on WhatsApp"
    >
      <i className="fa-brands fa-whatsapp text-3xl"></i>
    </a>
  );
}

