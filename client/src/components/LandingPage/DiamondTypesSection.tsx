import { useState } from 'react';
import cvdImage from "../../assets/LandingPage/cvd type.png";
import naturalImage from "../../assets/LandingPage/natural.jpg";
import hphtImage from "../../assets/LandingPage/hpht.png";

const cards = [
    {
        id: 0,
        title: "CVD Diamonds",
        image: cvdImage,
        description: "Chemical Vapor Deposition (CVD) grows diamonds by depositing carbon atoms layer-by-layer inside a controlled chamber. This advanced process creates crystals with exceptional purity and brilliance.",
        subDescription: "CVD diamonds are loved for their ethical sourcing, consistent quality, and high clarity. Each stone is certified and carries the same physical, chemical, and optical properties as natural diamonds—delivering beauty with sustainability.",
        tags: [
            { label: "High", sub: "Clarity & Purity" },
            { label: "Eco-Friendly", sub: "Sustainable Process" },
        ],
    },
    {
        id: 1,
        title: "Natural Diamonds",
        image: naturalImage,
        description: "Formed deep within the Earth over billions of years under extreme heat and pressure, natural diamonds are nature's most extraordinary creation — rare, timeless, and irreplaceable.",
        subDescription: "Each natural diamond is a unique fingerprint of the Earth, prized for its unmatched rarity and heritage value. Our hand-selected stones meet the highest standards of cut, clarity, colour, and carat.",
        tags: [
            { label: "Rare", sub: "Earth Formed" },
            { label: "Timeless", sub: "Heritage Value" },
        ],
    },
    {
        id: 2,
        title: "HPHT Diamonds",
        image: hphtImage,
        description: "High Pressure High Temperature (HPHT) replicates the natural diamond-forming conditions deep in the Earth. Carbon is subjected to extreme pressure and heat to crystallize into a perfect diamond.",
        subDescription: "HPHT diamonds are known for their exceptional hardness and brilliance. This method produces stones indistinguishable from mined diamonds, certified and graded to the same international standards.",
        tags: [
            { label: "Maximum", sub: "Hardness" },
            { label: "Certified", sub: "IGI / GIA Graded" },
        ],
    },
];

const DiamondTypesSection = () => {
    const [hoveredId, setHoveredId] = useState<number | null>(null);

    return (
        <div id='diamonds' className="w-full py-15 px-5 xl:px-20">

            {/* ===== Heading ===== */}
            <div className="text-center mb-10">
                <h2 className="font-gilroy font-bold text-white text-2xl sm:text-3xl lg:text-4xl mb-3">
                    CVD & HPHT Diamonds
                </h2>
                <p className="font-montserrat text-[#FFFFFF] text-sm sm:text-base max-w-xl mx-auto ">
                    Discover the two advanced methods we use to create our ethically sourced, brilliant lab-grown diamonds.
                </p>
            </div>

            {/* ===== Desktop Cards ===== */}
            <div className="hidden md:flex gap-4 w-full" style={{ height: '480px' }}>
                {cards.map((card) => {
                    const isHovered = hoveredId === card.id;
                    const isCollapsed = hoveredId !== null && !isHovered;

                    return (
                        <div
                            key={card.id}
                            onMouseEnter={() => setHoveredId(card.id)}
                            onMouseLeave={() => setHoveredId(null)}
                            className="relative rounded-2xl overflow-hidden cursor-pointer flex-shrink-0"
                            style={{
                                flex: isHovered ? '2 0 0%' : isCollapsed ? '0.5 0 0%' : '1 0 0%',
                                transition: 'flex 0.5s cubic-bezier(0.4, 0, 0.2, 1)',
                            }}
                        >
                            {/* Background Image */}
                            <img
                                src={card.image}
                                alt={card.title}
                                className="absolute inset-0 w-full h-full object-cover transition-transform duration-500"
                                style={{ transform: isHovered ? 'scale(1.05)' : 'scale(1)' }}
                            />

                            {/* Default overlay gradient (bottom title always visible) */}
                            <div
                                className="absolute inset-0 transition-opacity duration-500"
                                style={{
                                    background: isHovered
                                        ? 'linear-gradient(to top, rgba(0,0,0,0.52) 30%, rgba(0,0,0,0.15) 90%) '
                                        : 'linear-gradient(to top, rgba(0,0,0,0.75) 1%, rgba(0,0,0,0.05) 25%)',
                                }}
                            />

                            {/* Content */}
                            <div className="absolute inset-0 flex flex-col justify-end p-6">

                                {/* Title — always visible */}
                                <h3 className="font-gilroy font-bold text-white text-xl lg:text-2xl mb-0 whitespace-nowrap">
                                    {card.title}
                                </h3>

                                {/* Expanded content on hover */}
                                <div
                                    className="overflow-hidden transition-all duration-500 ease-in-out"
                                    style={{
                                        maxHeight: isHovered ? '190px' : '0px',
                                        opacity: isHovered ? 1 : 0,
                                        marginTop: isHovered ? '12px' : '0px',
                                    }}
                                >
                                    <p className="font-montserrat text-[#ffffff] text-sm leading-relaxed mb-3">
                                        {card.description}
                                    </p>
                                    <p className="font-montserrat text-[#ffffff] text-sm leading-relaxed mb-4">
                                        {card.subDescription}
                                    </p>

                                    {/* Tags */}
                                    <div className="flex gap-2 flex-wrap">
                                        {card.tags.map((tag, i) => (
                                            <div
                                                key={i}
                                                className="bg-[#B88F5F] rounded-md px-3 py-2"
                                            >
                                                <p className="font-gilroy font-bold text-white text-sm leading-none">
                                                    {tag.label}
                                                </p>
                                                <p className="font-gilroy text-white/80 text-xs mt-1.5">
                                                    {tag.sub}
                                                </p>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        </div>
                    );
                })}
            </div>

            {/* ===== Mobile Cards (expand height on hover) ===== */}
            <div className="flex flex-col gap-4 md:hidden">
                {cards.map((card) => {
                    const isHovered = hoveredId === card.id;

                    return (
                        <div
                            key={card.id}
                            onMouseEnter={() => setHoveredId(card.id)}
                            onMouseLeave={() => setHoveredId(null)}
                            onTouchStart={() => setHoveredId(isHovered ? null : card.id)}
                            className="relative rounded-2xl overflow-hidden cursor-pointer w-full transition-all duration-500 ease-in-out"
                            style={{ height: isHovered ? '420px' : '220px' }}
                        >
                            {/* Background Image */}
                            <img
                                src={card.image}
                                alt={card.title}
                                className="absolute inset-0 w-full h-full object-cover transition-transform duration-500"
                                style={{ transform: isHovered ? 'scale(1.05)' : 'scale(1)' }}
                            />

                            {/* Overlay */}
                            <div
                                className="absolute inset-0 transition-opacity duration-500"
                                style={{
                                    background: isHovered
                                          ? 'linear-gradient(to top, rgba(0,0,0,0.52) 30%, rgba(0,0,0,0.15) 90%) '
                                        : 'linear-gradient(to top, rgba(0,0,0,0.75) 1%, rgba(0,0,0,0.05) 25%)',
                                }}
                            />

                            {/* Content */}
                            <div className="absolute inset-0 flex flex-col justify-end p-5">
                                <h3 className="font-gilroy font-bold text-white text-xl">
                                    {card.title}
                                </h3>

                                <div
                                    className="overflow-hidden transition-all duration-500 ease-in-out"
                                    style={{
                                        maxHeight: isHovered ? '300px' : '0px',
                                        opacity: isHovered ? 1 : 0,
                                        marginTop: isHovered ? '10px' : '0px',
                                    }}
                                >
                                    <p className="font-roboto text-[#ddd] text-sm leading-relaxed mb-3">
                                        {card.description}
                                    </p>
                                    <div className="flex gap-2 flex-wrap">
                                        {card.tags.map((tag, i) => (
                                            <div key={i} className="bg-[#B88F5F] rounded-md px-3 py-1.5">
                                                <p className="font-montserrat font-bold text-white text-xs">{tag.label}</p>
                                                <p className="font-roboto text-white/80 text-[10px]">{tag.sub}</p>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        </div>
                    );
                })}
            </div>
        </div>
    );
};

export default DiamondTypesSection;