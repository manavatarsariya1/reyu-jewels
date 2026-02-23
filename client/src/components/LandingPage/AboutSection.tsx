import { useState, useEffect } from 'react';
import ring1 from "../../assets/LandingPage/AboutSection-img-1.png";
import ring2 from "../../assets/LandingPage/AboutSection-img-2.png";
import ring3 from "../../assets/LandingPage/AboutSection-img-3.png";

const cards = [
    {
        number: "1.",
        title: "Ethically Created",
        image: ring1,
        description: "Every diamond is responsibly grown using advanced technology, ensuring a conflict-free origin while maintaining the same fire, clarity, and strength as natural diamonds.",
    },
    {
        number: "2.",
        title: "Expertly Crafted",
        image: ring2,
        description: "Our master artisans precisely cut and polish each diamond to maximize brilliance, symmetry, and elegance — delivering perfection in every detail.",
    },
    {
        number: "3.",
        title: "Worn with Pride",
        image: ring3,
        description: "Designed for discerning individuals, our diamonds represent success, sophistication, and a conscious commitment to modern luxury.",
    },
];

const CARD_COLLAPSED_H = 270;
const CARD_EXPANDED_H = 370;

const AboutSection = () => {
    const [activeIndex, setActiveIndex] = useState<number | null>(null);
    const [isMobile, setIsMobile] = useState<boolean>(false);

    useEffect(() => {
        // xl = 1280px — everything below is mobile/tablet vertical layout
        const checkMobile = () => setIsMobile(window.innerWidth < 1280);
        checkMobile();
        window.addEventListener('resize', checkMobile);
        return () => window.removeEventListener('resize', checkMobile);
    }, []);

    const handleClick = (index: number) => {
        if (!isMobile) return;
        setActiveIndex(prev => (prev === index ? null : index));
    };

    const handleMouseEnter = (index: number) => {
        if (isMobile) return;
        setActiveIndex(index);
    };

    const handleMouseLeave = () => {
        if (isMobile) return;
        setActiveIndex(null);
    };

    return (
        <div id="about" className=" w-full xl:px-20 px-5 xl:py-40 py-15">
            <div className="flex flex-col xl:flex-row gap-10 xl:gap-16 items-start">

                {/* ===== LEFT — About Text ===== */}
                <div className="w-full xl:w-[30%] flex-shrink-0 xl:pt-4">
                    <h2 className="font-gilroy font-semibold text-white text-2xl xl:text-3xl 2xl:text-4xl mb-5 leading-snug text-center xl:text-start">
                        About Reyu Jewels
                    </h2>
                    <p className="font-montserrat font-medium text-white text-sm xl:text-base text-center xl:text-start">
                        At Reyu Jewels, we believe every diamond begins with a conscious choice. For over two decades, we have specialized in premium lab-grown diamonds that combine exceptional brilliance, precision craftsmanship, and responsible sourcing created for those who value refinement, exclusivity, and modern luxury.
                    </p>
                </div>

                {/* ===== RIGHT — Cards ===== */}
                {/*
                  Mobile + Tablet (< 1280px): vertical stack, each card full width, capped at 500px
                  Desktop (≥ 1280px): horizontal row, 1/3 width each, grows upward on hover
                */}
                <div className="w-full xl:w-[70%] flex flex-col xl:flex-row gap-4 xl:items-end">
                    {cards.map((card, index) => {
                        const isActive = activeIndex === index;

                        return (
                            <div
                                key={index}
                                onClick={() => handleClick(index)}
                                onMouseEnter={() => handleMouseEnter(index)}
                                onMouseLeave={handleMouseLeave}
                                className={`
                                    relative flex flex-col w-full xl:w-1/3 rounded-3xl overflow-hidden cursor-pointer mx-auto
                                    ${isActive
                                        ? 'bg-[#AE885B] border-2 border-[#AE885B] shadow-2xl'
                                        : 'bg-[#D9D9D933] border-2 border-transparent'
                                    }
                                `}
                                style={
                                    isMobile
                                        ? {
                                            height: isActive ? `${CARD_EXPANDED_H}px` : `${CARD_COLLAPSED_H}px`,
                                            maxWidth: 500,
                                            transition: 'height 500ms cubic-bezier(0.4, 0, 0.2, 1), background-color 400ms ease-in-out, border-color 400ms ease-in-out, box-shadow 400ms ease-in-out',
                                        }
                                        : {
                                            height: isActive ? '420px' : '280px',
                                            marginTop: isActive ? '-140px' : '0px',
                                            transition: 'height 400ms ease-in-out, margin-top 400ms ease-in-out, background-color 400ms ease-in-out, border-color 400ms ease-in-out, box-shadow 400ms ease-in-out',
                                        }
                                }
                            >
                                {/* Card Number + Title */}
                                <div className="px-5 pt-5 pb-3 flex-shrink-0">
                                    <h3 className="font-gilroy font-semibold text-base xl:text-lg text-white">
                                        {card.number}&nbsp; {card.title}
                                    </h3>
                                </div>

                                {/* Image */}
                                <div className="px-4 flex-shrink-0 mt-7">
                                    <img
                                        src={card.image}
                                        alt={card.title}
                                        className="w-full h-[160px] object-cover rounded-xl transition-transform duration-500"
                                        style={{ transform: isActive ? 'scale(1.03)' : 'scale(1)' }}
                                    />
                                </div>

                                {/* Description */}
                                <div
                                    className="px-5 pt-4 overflow-hidden"
                                    style={{
                                        opacity: isActive ? 1 : 0,
                                        transition: 'opacity 350ms ease-in-out',
                                        transitionDelay: isActive ? '150ms' : '0ms',
                                    }}
                                >
                                    <p className="font-montserrat font-medium text-white text-sm leading-relaxed pb-5">
                                        {card.description}
                                    </p>
                                </div>
                            </div>
                        );
                    })}
                </div>

            </div>
        </div>
    );
};

export default AboutSection;