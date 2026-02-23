import { useEffect, useRef } from 'react';

// Import your diamond shape images
import round from "../../assets/LandingPage/shape-1.png";
import oval from "../../assets/LandingPage/shape-2.png";
import emerald from "../../assets/LandingPage/shape-3.png";
import cushion from "../../assets/LandingPage/shape-4.png";
import pear from "../../assets/LandingPage/shape-5.png";
import radiant from "../../assets/LandingPage/shape-6.png";
import princess from "../../assets/LandingPage/shape-7.png";
import marquise from "../../assets/LandingPage/shape-8.png";
import asscher from "../../assets/LandingPage/shape-9.png";
import heart from "../../assets/LandingPage/shape-10.png";

const diamonds = [
    { name: "Round",    image: round },
    { name: "Oval",     image: oval },
    { name: "Emerald",  image: emerald },
    { name: "Cushion",  image: cushion },
    { name: "Pear",     image: pear },
    { name: "Radiant",  image: radiant },
    { name: "Princess", image: princess },
    { name: "Marquise", image: marquise },
    { name: "Asscher",  image: asscher },
    { name: "Heart",    image: heart },
];

// Triple the array for seamless infinite loop
const infiniteDiamonds = [...diamonds, ...diamonds, ...diamonds];

const DiamondShapes = () => {
    const trackRef = useRef<HTMLDivElement>(null);
    const animationRef = useRef<number>(0);
    const positionRef = useRef<number>(0);
    const isPausedRef = useRef<boolean>(false);

    const CARD_WIDTH = 160;  // px per card including gap
    const SPEED = 0.5;       // px per frame
    const TOTAL_WIDTH = diamonds.length * CARD_WIDTH;

    useEffect(() => {
        const animate = () => {
            if (!isPausedRef.current) {
                positionRef.current += SPEED;
                // Reset when one full set scrolled — seamless loop
                if (positionRef.current >= TOTAL_WIDTH) {
                    positionRef.current = 0;
                }
                if (trackRef.current) {
                    trackRef.current.style.transform = `translateX(-${positionRef.current}px)`;
                }
            }
            animationRef.current = requestAnimationFrame(animate);
        };

        animationRef.current = requestAnimationFrame(animate);
        return () => cancelAnimationFrame(animationRef.current);
    }, []);

    return (
        <div className="w-full bg-[#141414] py-15 overflow-hidden">

            {/* ===== Heading ===== */}
            <div className="text-center mb-10 px-4">
                <h2 className="font-gilroy font-bold text-white text-2xl sm:text-3xl lg:text-4xl mb-3">
                    Lab-Grown Diamond Shapes
                </h2>
                <p className="font-montserrat text-white text-sm sm:text-base max-w-md mx-auto ">
                    Discover beautifully crafted lab-grown diamond cuts, designed for
                    modern elegance and conscious luxury.
                </p>
            </div>

            {/* ===== Infinite Carousel ===== */}
            <div
                className="relative w-full overflow-hidden"
                onMouseEnter={() => { isPausedRef.current = true; }}
                onMouseLeave={() => { isPausedRef.current = false; }}
            >
                {/* Left fade */}
                <div className="absolute left-0 top-0 h-full w-20 sm:w-32 z-10 pointer-events-none"
                    style={{ background: 'linear-gradient(to right, #111 0%, transparent 100%)' }} />
                {/* Right fade */}
                <div className="absolute right-0 top-0 h-full w-20 sm:w-32 z-10 pointer-events-none"
                    style={{ background: 'linear-gradient(to left, #111 0%, transparent 100%)' }} />

                {/* Scrolling Track */}
                <div
                    ref={trackRef}
                    className="flex gap-4 will-change-transform"
                    style={{ width: `${infiniteDiamonds.length * CARD_WIDTH}px` }}
                >
                    {infiniteDiamonds.map((diamond, index) => (
                        <div
                            key={index}
                            className="flex-shrink-0 flex flex-col items-center gap-3 group cursor-pointer"
                            style={{ width: `${CARD_WIDTH - 16}px` }}
                        >
                            {/* Card */}
                            <div className="w-full aspect-square bg-[#D9D9D933] rounded-2xl flex items-center justify-center p-4 border border-transparent group-hover:border-[#d9d9d96f] transition-all duration-300 group-hover:bg-[#d9d9d963]">
                                <img
                                    src={diamond.image}
                                    alt={diamond.name}
                                    className="w-full h-full object-contain drop-shadow-lg group-hover:scale-110 transition-transform duration-300"
                                />
                            </div>
                            {/* Label */}
                            <span className="font-gilroy text-white font-normal text-sm group-hover:text-[#d6ba99] transition-colors duration-300">
                                {diamond.name}
                            </span>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default DiamondShapes;