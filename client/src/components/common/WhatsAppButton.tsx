import { useState, useEffect } from "react";
import { MdOutlineWhatsapp } from "react-icons/md";

const WhatsAppButton = () => {
    const [isVisible, setIsVisible] = useState(false);
    const phoneNumber = "919898076868"; // +91 98980 76868 formatted for URL
    const message = encodeURIComponent("Hello! I'm interested in your jewellery collection.");

    useEffect(() => {
        const toggleVisibility = () => {
            const aboutSection = document.getElementById("about");
            if (aboutSection) {
                const rect = aboutSection.getBoundingClientRect();
                // Show button when the top of AboutSection reaches the top of viewport
                if (rect.top <= 0) {
                    setIsVisible(true);
                } else {
                    setIsVisible(false);
                }
            }
        };

        window.addEventListener("scroll", toggleVisibility);
        return () => window.removeEventListener("scroll", toggleVisibility);
    }, []);

    return (
        <a
            href={`https://wa.me/${phoneNumber}?text=${message}`}
            target="_blank"
            rel="noopener noreferrer"
            className={`fixed bottom-4 sm:bottom-6 md:bottom-8 right-4 sm:right-6 md:right-10 z-[9999] flex items-center justify-center w-13 h-13 sm:w-13 sm:h-13 md:w-15 md:h-15 bg-[#25D366] text-white rounded-full shadow-lg hover:bg-[#20bd5a] transition-all duration-500 hover:scale-110 group focus:outline-none ${isVisible ? "opacity-100 translate-y-0 pointer-events-auto" : "opacity-0 translate-y-10 pointer-events-none"
                }`}
            aria-label="Contact us on WhatsApp"
        >
            <MdOutlineWhatsapp className="w-8 h-8 sm:w-7 sm:h-7 md:w-8 md:h-8" />

            {/* Tooltip or Label - hidden on small mobile for cleaner UI */}
            <span className="absolute right-14 sm:right-16 md:right-20 bg-black/80 text-white text-[10px] sm:text-xs py-1 px-3 rounded-md opacity-0 group-hover:opacity-100 transition-opacity hidden sm:block whitespace-nowrap pointer-events-none">
                Chat with us
            </span>
        </a>
    );
};

export default WhatsAppButton;
