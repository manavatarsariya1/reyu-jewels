import logo from "../../assets/Landingpage/logo.png";

const Footer = () => {
  return (
    <div className="w-full flex flex-col items-center bg-[#202020] pt-6 sm:pt-8 lg:pt-10">

      {/* Black Footer */}
      <footer className="w-full bg-black rounded-[20px] sm:rounded-[30px] flex items-center justify-center px-4 sm:px-8 lg:px-12 py-10 lg:py-0 lg:h-auto">

        <div className="w-full max-w-[1306px] flex flex-col lg:flex-row justify-between gap-10 lg:gap-[110px] py-10 lg:py-12">

          {/* Left Section */}
          <div className="flex flex-col max-w-full lg:max-w-[420px]">
            <img
              src={logo}
              alt="Reyu Jewels Logo"
              className="w-[200px] sm:w-[250px] lg:w-[302px] h-auto object-contain"
            />

            <p className="text-white text-[22px] sm:text-[26px] lg:text-[32px] font-semibold mt-6 lg:mt-8">
              Certified Excellence
            </p>

            <p className="font-montserrat text-gray-400 text-[15px] sm:text-[16px] lg:text-[17px] leading-relaxed mt-3 lg:mt-4">
              Crafting timeless diamond elegance since 1999. Every piece tells a
              story of love, celebration, and the pursuit of perfection.
            </p>
          </div>

          {/* Middle + Right on mobile: side by side, on desktop: separate columns */}
          <div className="flex flex-row sm:flex-row lg:contents gap-10 sm:gap-16">

            {/* Quick Links */}
            <div className="flex flex-col text-white min-w-[120px]">
              <h3 className="text-[17px] sm:text-[18px] lg:text-[20px] font-semibold mb-5 lg:mb-8">
                Quick Links
              </h3>
              <ul className="space-y-3 lg:space-y-5 text-gray-400 text-[14px] sm:text-[15px]">
                <li className="hover:text-[#C6A76A] cursor-pointer transition-colors">About Us</li>
                <li className="hover:text-[#C6A76A] cursor-pointer transition-colors">Collection</li>
                <li className="hover:text-[#C6A76A] cursor-pointer transition-colors">Diamonds</li>
                <li className="hover:text-[#C6A76A] cursor-pointer transition-colors">Services</li>
                <li className="hover:text-[#C6A76A] cursor-pointer transition-colors">Contact</li>
              </ul>
            </div>

            {/* Contact Section */}
            <div className="flex flex-col text-white max-w-full lg:max-w-[320px]">
              <h3 className="text-[17px] sm:text-[18px] lg:text-[20px] font-semibold mb-5 lg:mb-8">
                Contact
              </h3>

              <p className="text-gray-400 text-[14px] sm:text-[15px] mb-3 lg:mb-4">
                +91 98980 76868
              </p>

              <p className="text-gray-400 text-[14px] sm:text-[15px] mb-3 lg:mb-4">
                info@reyujewels.com
              </p>

              <p className="text-gray-400 text-[13px] sm:text-[14px] leading-relaxed">
                335, Silver Stone Arcade, Causeway Rd, Katargam,
                Surat, Gujarat 395004
              </p>

              <div className="flex gap-5 sm:gap-6 mt-5 lg:mt-6 text-white">
                <span className="hover:text-[#C6A76A] cursor-pointer transition-colors text-[14px] sm:text-[15px]">
                  Instagram
                </span>
                <span className="hover:text-[#C6A76A] cursor-pointer transition-colors text-[14px] sm:text-[15px]">
                  Facebook
                </span>
              </div>
            </div>

          </div>
        </div>
      </footer>

      {/* Brown Bottom Strip */}
      <div className="w-full bg-[#5D4830] rounded-[14px] sm:rounded-[20px] px-5 sm:px-10 lg:px-[100px] py-4 lg:py-[25px] flex items-center mt-3 sm:mt-4">
        <div className="w-full flex flex-col sm:flex-row justify-between items-center gap-3 sm:gap-0">

          <p className="text-white text-[13px] sm:text-[14px] lg:text-[16px] font-normal text-center sm:text-left">
            Copyright ©️2026 Reyu Jewels®
          </p>

          <div className="flex flex-wrap justify-center gap-4 sm:gap-8 lg:gap-[80px] text-white text-[12px] sm:text-[14px] lg:text-[16px]">
            <span className="cursor-pointer hover:opacity-80 transition-opacity">
              Terms of Service
            </span>
            <span className="cursor-pointer hover:opacity-80 transition-opacity">
              Privacy Policy
            </span>
            <span className="cursor-pointer hover:opacity-80 transition-opacity">
              Site credit
            </span>
          </div>

        </div>
      </div>

    </div>
  );
};

export default Footer;