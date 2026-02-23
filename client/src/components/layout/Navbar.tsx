import { useState } from "react";
import logo from "../../assets/LandingPage/logo.png";
import { Link } from "react-router-dom";

const navLinks = [
    { label: "About Us", scrollTo: "about" },
    { label: "Diamonds", scrollTo: "diamonds" },
    { label: "Collection", scrollTo: "collection", isNew: true },
    { label: "Services", scrollTo: "services" },
    { label: "Certificates", scrollTo: "certificates" },
    { label: "Contact", scrollTo: "contact" },
];

const Navbar = () => {
    const [menuOpen, setMenuOpen] = useState(false);

    return (
        <div className="sticky top-0 px-5 sm:px-10 xl:px-20 py-5 z-50 bg-[#202020] ">
            <div className="flex justify-between items-center w-full">

                {/* Logo */}
                <div className="flex-shrink-0 cursor-pointer "
                  onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })} >
                    <img
                        src={logo}
                        alt="Reyu Jewels logo"
                        className="w-[120px] sm:w-[150px] md:w-[180px] xl:w-[208px] h-auto"
                    />
                </div>

                {/* Desktop Nav Links */}
                <div className="hidden xl:flex font-sans font-normal gap-[24px] 2xl:gap-[32px] justify-center items-center text-base 2xl:text-xl">
                    {navLinks.map((link) => (
                        <div key={link.label} className="flex items-center gap-2">
                            {link.scrollTo ? (
                                <button
                                    className="hover:text-[#CEA574] text-[#FFFFFF] transition-colors cursor-pointer"
                                    onClick={() => {
                                        document.getElementById(link.scrollTo!)?.scrollIntoView({ behavior: 'smooth' });
                                    }}
                                >
                                    {link.label}
                                </button>
                            ) : (
                                <Link
                                    className="hover:text-[#CEA574] text-[#FFFFFF] transition-colors cursor-pointer"
                                    to={link.to}
                                >
                                    {link.label}
                                </Link>
                            )}
                            {link.isNew && (
                                <span className="bg-[#B88F5F] text-xs w-10 text-center rounded-2xl h-4 leading-4 text-white font-medium">
                                    NEW
                                </span>
                            )}
                        </div>
                    ))}
                </div>

                {/* Right side: Enquire + Hamburger */}
                <div className="flex items-center gap-4">
                    {/* Enquire Now Button */}
                    <div className="bg-[#B88F5F] flex justify-center items-center h-9 sm:h-11 xl:h-13 px-3 xl:w-40 rounded-3xl ml-4">
                        <Link
                            className="inline-block uppercase text-white text-xs xl:text-base whitespace-nowrap "
                            to="/"
                        >
                            Enquire Now
                        </Link>
                    </div>

                    {/* Hamburger — visible below xl */}
                    <button
                        className="xl:hidden flex flex-col justify-center items-center w-9 h-9 gap-[5px] focus:outline-none"
                        onClick={() => setMenuOpen((prev) => !prev)}
                        aria-label="Toggle menu"
                    >
                        <span
                            className={`block w-6 h-[2px] bg-white rounded transition-all duration-300 ${menuOpen ? "rotate-45 translate-y-[7px]" : ""
                                }`}
                        />
                        <span
                            className={`block w-6 h-[2px] bg-white rounded transition-all duration-300 ${menuOpen ? "opacity-0" : ""
                                }`}
                        />
                        <span
                            className={`block w-6 h-[2px] bg-white rounded transition-all duration-300 ${menuOpen ? "-rotate-45 -translate-y-[7px]" : ""
                                }`}
                        />
                    </button>
                </div>
            </div>

            {/* Mobile Dropdown Menu */}
            <div
                style={{
                    maxHeight: menuOpen ? "400px" : "0px",
                    opacity: menuOpen ? 1 : 0,
                    overflow: "hidden",
                    transition: "max-height 300ms ease-in-out, opacity 200ms ease-in-out",
                }}
                className="xl:hidden mt-2"
            >
                <div className="flex flex-col bg-black/80 backdrop-blur-md rounded-2xl px-6 py-4 gap-4">
                    {navLinks.map((link) => (
                        <div key={link.label} className="flex items-center gap-2">
                            <Link
                                className="text-white hover:text-[#CEA574] transition-colors text-base font-sans"
                                to={link.to}
                                onClick={() => setMenuOpen(false)}
                            >
                                {link.label}
                            </Link>
                            {link.isNew && (
                                <span className="bg-[#B88F5F] text-xs w-10 text-center rounded-2xl h-4 leading-4 text-white font-medium">
                                    NEW
                                </span>
                            )}
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Navbar;