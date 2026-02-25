import { MdOutlineWhatsapp } from "react-icons/md";

const WhatsAppButton = () => {
    const phoneNumber = "919898076868"; // +91 98980 76868 formatted for URL
    const message = encodeURIComponent("Hello! I'm interested in your jewellery collection.");

    return (
        <a
            href={`https://wa.me/${phoneNumber}?text=${message}`}
            target="_blank"
            rel="noopener noreferrer"
            className="fixed bottom-6 sm:right-9 right-8 z-[9999] flex items-center justify-center w-14 h-14 bg-[#25D366] text-white rounded-full shadow-lg hover:bg-[#20bd5a] transition-all duration-300 hover:scale-110 group focus:outline-none"
            aria-label="Contact us on WhatsApp"
        >
            <MdOutlineWhatsapp size={32} />

            {/* Tooltip or Label - optional, but helps with UX */}
            <span className="absolute right-16 bg-black/80 text-white text-xs py-1 px-3 rounded-md opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap pointer-events-none">
                Chat with us
            </span>
        </a>
    );
};

export default WhatsAppButton;
