import { Copyright } from "lucide-react";
import logo from "../../assets/Landingpage/logo.png";
import { FaInstagram, FaFacebookF } from "react-icons/fa";

const navLinks = [
    { label: "About Us", scrollTo: "about" },
    { label: "Diamonds", scrollTo: "diamonds" },
    { label: "Collection", scrollTo: "collection" },
    { label: "Testinomials", scrollTo: "services" },
    { label: "Contact", scrollTo: "contact" },
    { label: "Certificates", scrollTo: "certificates" },
];

const Footer = () => {

   const scrollToSection = (id: string) => {
        const element = document.getElementById(id);
        if (!element) return;
        const offset = 50;
        const top = element.getBoundingClientRect().top + window.scrollY - offset;
        window.scrollTo({ top, behavior: 'smooth' });
    };

  return (
    <div className="w-full flex flex-col items-center bg-[#202020] pt-6 sm:pt-8 lg:pt-10">
      
      {/* Main Black Footer */}
      <footer className="w-full bg-black flex items-center justify-center px-4 sm:px-8 lg:px-12 py-10 lg:py-12">
        <div className="w-full max-w-[1306px] flex flex-col lg:flex-row justify-between gap-10 lg:gap-[110px]">
          
          {/* Left Section */}
          <div className="flex flex-col items-center lg:items-start max-w-full lg:max-w-[420px] mx-auto lg:mx-0">
            <img
              src={logo}
              alt="Reyu Jewels Logo"
              className="w-[200px] sm:w-[250px] lg:w-[302px] h-auto object-contain"
            />

            <p className="text-white text-[22px] sm:text-[26px] lg:text-[32px] font-semibold mt-6 lg:mt-8 text-center lg:text-left font-gilroy">
              Certified Excellence
            </p>

            <p className="font-montserrat text-[#ebe9e9] text-[15px] sm:text-[16px] lg:text-[17px] leading-relaxed mt-3 lg:mt-4 text-center lg:text-left">
              Crafting timeless diamond elegance since 1999. Every piece tells a
              story of love, celebration, and the pursuit of perfection.
            </p>
          </div>

          {/* Right Section */}
          <div className="flex flex-row justify-center lg:contents gap-10 sm:gap-16">
            
            {/* Quick Links */}
            <div className="flex flex-col items-center lg:items-start text-white min-w-[120px] ">
              <h3 className="text-[17px] sm:text-[18px] lg:text-[20px] font-semibold mb-4 lg:mb-8 font-gilroy  text-start">
                Quick Links
              </h3>

              <ul className="sm:space-y-3 space-y-2  text-[#ebe9e9] text-[14px] sm:text-[15px] text-left lg:text-left font-montserrat ">
                 {navLinks.map((link) => (

                        <div key={link.label} className="flex items-center gap-2">
                            {link.scrollTo && (
                                <button
                                    className="text-[#ebe9e9] hover:text-[#CEA574] transition-colors  font-gilroy cursor-pointer"
                                    onClick={() => scrollToSection(link.scrollTo!)}
                                >
                                    {link.label}
                                </button>
                            ) }
                          
                        </div>
                    ))}
              </ul>
            </div>

            {/* Contact Section */}
            <div className="flex flex-col items-start lg:items-start text-white max-w-full lg:max-w-[320px] ">
              <h3 className="text-[17px] sm:text-[18px] lg:text-[20px] font-semibold mb-5 lg:mb-8 font-gilroy">
                Contact
              </h3>

              <p className="text-[#ebe9e9] text-[14px] sm:text-[15px] mb-3 lg:mb-4  lg:text-left font-gilroy">
                +91 98980 76868
              </p>

              <p className="text-[#ebe9e9] text-[14px] sm:text-[15px] mb-3 lg:mb-4  lg:text-left font-gilroy">
                info@reyujewels.com
              </p>

              <p className="text-[#ebe9e9] text-[13px] sm:text-[14px] leading-relaxed  lg:text-left font-gilroy text-start">
                335, Silver Stone Arcade, Causeway Rd, Katargam, Surat, Gujarat 395004
              </p>

              {/* Social Links */}
              <div className="flex gap-6 mt-6 text-white items-center justify-center lg:justify-start font-gilroy">

                {/* Instagram */}
                <a
                  href="https://www.instagram.com/reyujewels/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 hover:text-[#C6A76A] transition-colors"
                >
                  <FaInstagram className="text-lg sm:text-xl" />
                  <span className="text-[14px] sm:text-[17px]">Instagram</span>
                </a>

                {/* Facebook */}
                <a
                  href="https://www.facebook.com/profile.php?id=61584025920623"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 hover:text-[#C6A76A] transition-colors"
                >
                  <FaFacebookF className="text-lg sm:text-xl" />
                  <span className="text-[14px] sm:text-[17px]">Facebook</span>
                </a>

              </div>
            </div>
          </div>
        </div>
      </footer>

      {/* Bottom Strip */}
      <div className="w-full bg-[#5D4830] px-5 sm:px-10 lg:px-[100px] py-4 lg:py-[25px] font-gilroy">
        <div className="w-full flex flex-col sm:flex-row justify-between items-center gap-3 sm:gap-0">
          
          <p className="flex justify-center items-center gap-1 text-white text-[13px] sm:text-[14px] lg:text-[16px] text-center sm:text-left font-gilroy">
            Copyright  <Copyright size={12}/> 2026 Reyu Jewels®
          </p>

          <div className="flex flex-wrap sm:justify-center justify-center-safe  mt-2 sm:w-fit w-full gap-8 sm:gap-7  text-white text-[12px] sm:text-[14px] lg:text-[16px]">
            <span className="cursor-pointer hover:opacity-80 transition-opacity">Terms of Service</span>
            <span className="cursor-pointer hover:opacity-80 transition-opacity">Privacy Policy</span>
            <span className="cursor-pointer hover:opacity-80 transition-opacity">Site credit</span>
          </div>

        </div>
      </div>
    </div>
  );
};

export default Footer;