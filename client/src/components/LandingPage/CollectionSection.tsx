import img1 from "../../assets/LandingPage/collection-img-1.png";
import img2 from "../../assets/LandingPage/collection-img-2.png";
import img3 from "../../assets/LandingPage/collection-img-3.png";
import img4 from "../../assets/LandingPage/collection-img-4.png";
import img5 from "../../assets/LandingPage/collection-img-5.png";

const ALL_CARDS = [
    { id: 0, title: "Emerald Cut Elegance", description: "Timeless emerald cuts with exceptional clarity and refined brilliance.", image: img1 },
    { id: 1, title: "Loose Diamond Selection", description: "Certified loose diamonds available in premium cuts and carat sizes.", image: img2 },
    { id: 2, title: "Diamond Shapes Collection", description: "Explore iconic diamond shapes crafted for maximum sparkle and beauty.", image: img3 },
    { id: 3, title: "Signature Cut Series", description: "Precision-crafted diamonds designed for brilliance, balance, and elegance.", image: img4 },
    { id: 4, title: "Premium Featured Diamonds", description: "Hand-selected diamonds showcasing superior fire and radiant shine.", image: img5 },
];

const ROW1 = [0, 1, 2];
const ROW2 = [3, 4];

const CollectionSection = () => {
    return (
        <div id="collection" className="w-full py-12 px-4 sm:px-6 lg:px-8">

            {/* Heading */}
            <div className="text-center mb-8">
                <h2 className="font-gilroy text-white text-2xl sm:text-3xl lg:text-[28px] mb-2 font-bold">
                    Our Lab-Grown Collection
                </h2>
                <p className="font-montserrat text-[#FFFFFF] text-sm max-w-xl mx-auto font-normal ">
                    A refined selection of lab-grown diamond jewellery, crafted with precision, purity, and modern elegance.                </p>
            </div>

            {/* ===== DESKTOP GRID ===== */}
            <div className="hidden md:flex flex-col gap-3 max-w-6xl mx-auto">

                {/* ROW 1 — 3 equal cards: image on top, text panel below */}
                <div className="flex gap-3" style={{ height: '300px' }}>
                    {ROW1.map((cardId) => {
                        const card = ALL_CARDS[cardId];
                        return (
                            <div
                                key={cardId}
                                className="flex-1 rounded-2xl overflow-hidden flex flex-col"
                                style={{ backgroundColor: '#f5efe6' }}
                            >
                                {/* Image — fills remaining space */}
                                <div className="flex-1 overflow-hidden">
                                    <img
                                        src={card.image}
                                        alt={card.title}
                                        className="w-full h-full object-cover"
                                    />
                                </div>
                                {/* Text panel below image */}
                                <div className="px-4 py-3 flex-shrink-0" style={{ backgroundColor: '#faf6f0' }}>
                                    <h3 className="font-gilroy font-bold text-[#141414] text-[14px] mb-1 text-center">
                                        {card.title}
                                    </h3>
                                    <p className="font-montserrat text-[##000000] text-xs text-center font-normal">
                                        {card.description}
                                    </p>
                                </div>
                            </div>
                        );
                    })}
                </div>

                {/* ROW 2 — 2 equal cards: image on one side, text on the other */}
                <div className="flex gap-3" style={{ height: '330px' }}>

                    {/* Card 3 — Signature Cut Series: image LEFT, text RIGHT */}
                    <div
                        className="flex-1 rounded-2xl overflow-hidden flex flex-row"
                        style={{ backgroundColor: '#f0e8d8' }}
                    >
                        {/* Image — left 55% */}
                        <div className="overflow-hidden" style={{ width: '50%', height: "" }}>
                            <img
                                src={ALL_CARDS[3].image}
                                alt={ALL_CARDS[3].title}
                                className="w-full h-full object-cover"
                            />
                        </div>
                        {/* Text — right 45% */}
                        <div
                            className="flex flex-col justify-center px-5 py-6"
                            style={{ width: '50%', backgroundColor: '#faf6f0' }}
                        >
                            <h3 className="font-gilroy font-bold text-[#1a1a1a] text-[15px] mb-2 text-center">
                                {ALL_CARDS[3].title}
                            </h3>
                            <p className="font-montserrat text-[#555] text-xs text-center">
                                {ALL_CARDS[3].description}
                            </p>
                        </div>
                    </div>

                    {/* Card 4 — Premium Featured Diamonds: text LEFT, image RIGHT */}
                    <div
                        className="flex-1 rounded-2xl overflow-hidden flex flex-row"
                        style={{ backgroundColor: '#f0e8d8' }}
                    >
                        {/* Text — left 45% */}
                        {/* Image — right 55% */}
                        <div className="overflow-hidden" style={{ width: '50%' }}>
                            <img
                                src={ALL_CARDS[4].image}
                                alt={ALL_CARDS[4].title}
                                className="w-full h-full object-cover"
                            />
                        </div>
                        <div
                            className="flex flex-col justify-center px-4 py-6"
                            style={{ width: '50%', backgroundColor: '#faf6f0' }}
                        >
                            <h3 className="font-gilroy font-bold text-[#141414] text-sm mb-2 text-center ">
                                {ALL_CARDS[4].title}
                            </h3>
                            <p className="font-montserrat text-[#000000] text-xs text-center font-normal">
                                {ALL_CARDS[4].description}
                            </p>
                        </div>
                    </div>

                </div>

            </div>

            {/* ===== MOBILE ===== */}
            <div className="flex flex-col gap-3 md:hidden">
                {ALL_CARDS.map((card) => (
                    <div key={card.id} className="rounded-2xl overflow-hidden" style={{ backgroundColor: '#f5efe6' }}>
                        <div className="h-[200px]">
                            <img src={card.image} alt={card.title} className="w-full h-full object-cover" />
                        </div>
                        <div className="px-4 py-3" style={{ backgroundColor: '#faf6f0' }}>
                            <h3 className="font-gilroy font-bold text-[#1a1a1a] text-base mb-1">{card.title}</h3>
                            <p className="font-roboto text-[#666] text-sm leading-relaxed">{card.description}</p>
                        </div>
                    </div>
                ))}
            </div>

        </div>
    );
};

export default CollectionSection;