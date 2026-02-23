import { useEffect, useRef, useState } from 'react';

const reviews = [
    {
        id: 0,
        stars: 5,
        quote: "Reyu Jewels is a name I rely on for premium diamonds. Their service, clarity in dealings, and product quality are world-class.",
        name: "Emily Johnson",
        avatar: "https://i.pravatar.cc/80?img=47",
        dark: true,
    },
    {
        id: 1,
        stars: 5,
        quote: "The craftsmanship and consistency of Reyu Jewels are remarkable. Every stone speaks of trust and expertise. Highly recommended for long-term business.",
        name: "Michael Smith",
        avatar: "https://i.pravatar.cc/80?img=53",
        dark: false,
    },
    {
        id: 2,
        stars: 5,
        quote: "Reyu Jewels combines exceptional diamond quality with transparent communication. Even from overseas, the process felt secure and seamless.",
        name: "Jessica Brown",
        avatar: "https://i.pravatar.cc/80?img=45",
        dark: true,
    },
    {
        id: 3,
        stars: 5,
        quote: "Clarity, elegance, and service beyond expectations. Every piece finds its way to our finest collections and our most important clients.",
        name: "David Williams",
        avatar: "https://i.pravatar.cc/80?img=60",
        dark: false,
    },
    {
        id: 4,
        stars: 5,
        quote: "From selection to delivery, Reyu Jewels made the entire experience feel effortless. The diamonds exceeded every expectation we had.",
        name: "Sarah Chen",
        avatar: "https://i.pravatar.cc/80?img=44",
        dark: true,
    },
    {
        id: 5,
        stars: 5,
        quote: "Exceptional quality and unmatched transparency. I have never felt more confident purchasing diamonds than I do with Reyu Jewels.",
        name: "Robert Kim",
        avatar: "https://i.pravatar.cc/80?img=59",
        dark: false,
    },
];

const TRACK = [...reviews, ...reviews, ...reviews];

// Breakpoint config — returns card/track dimensions based on viewport width
const getConfig = (w: number) => {
    if (w < 400) return {
        cardW: 160, cardH: 260, trackH: 340,
        yOffset: 12, top: '50%',
        starSize: 16, fontSize: '11px',
        avatarSize: 38, quoteMt: '16px',
        quoteFontSize: '32px', padding: '16px 14px',
    };
    if (w < 640) return {
        cardW: 190, cardH: 300, trackH: 390,
        yOffset: 14, top: '50%',
        starSize: 18, fontSize: '12px',
        avatarSize: 44, quoteMt: '20px',
        quoteFontSize: '36px', padding: '18px 16px',
    };
    if (w < 768) return {
        cardW: 220, cardH: 340, trackH: 440,
        yOffset: 16, top: '50%',
        starSize: 20, fontSize: '13px',
        avatarSize: 50, quoteMt: '28px',
        quoteFontSize: '38px', padding: '20px 18px',
    };
    if (w < 1024) return {
        cardW: 260, cardH: 390, trackH: 520,
        yOffset: 22, top: '50%',
        starSize: 24, fontSize: '15px',
        avatarSize: 58, quoteMt: '44px',
        quoteFontSize: '40px', padding: '22px 20px',
    };
    // Desktop 1024+
    return {
        cardW: 320, cardH: 480, trackH: 720,
        yOffset: 28, top: '20%',
        starSize: 30, fontSize: '20px',
        avatarSize: 70, quoteMt: '80px',
        quoteFontSize: '40px', padding: '24px 20px',
    };
};

const Stars = ({ count, dark, size }: { count: number; dark: boolean; size: number }) => (
    <div className="flex gap-1 mb-4 mt-4 justify-center">
        {Array.from({ length: count }).map((_, i) => (
            <svg
                key={i}
                width={size}
                height={size}
                viewBox="0 0 20 20"
                className={dark ? 'bg-[#B88F5F]' : 'bg-[#ffffff]'}
                fill={dark ? '#ffffff' : '#000000'}
            >
                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
            </svg>
        ))}
    </div>
);

const ClientReviewSection = () => {
    const trackRef = useRef<HTMLDivElement>(null);
    const animFrameRef = useRef<number | null>(null);
    const posRef = useRef(0);
    const pausedRef = useRef(false);
    const SPEED = 0.6;

    const [cfg, setCfg] = useState(() => getConfig(
        typeof window !== 'undefined' ? window.innerWidth : 1024
    ));
    const [isDesktop, setIsDesktop] = useState(
        typeof window !== 'undefined' ? window.innerWidth >= 1024 : true
    );

    useEffect(() => {
        const update = () => {
            const w = window.innerWidth;
            setIsDesktop(w >= 1024);
            setCfg(getConfig(w));
        };
        update();
        window.addEventListener('resize', update);
        return () => window.removeEventListener('resize', update);
    }, []);

    const { cardW, cardH, trackH, yOffset, top, starSize, fontSize, avatarSize, quoteMt, quoteFontSize, padding } = cfg;
    const ONE_SET_W = reviews.length * (cardW + 4);

    useEffect(() => {
        posRef.current = -ONE_SET_W;
        const animate = () => {
            if (!pausedRef.current) {
                posRef.current += SPEED;
                if (posRef.current >= 0) posRef.current = -ONE_SET_W;
                if (trackRef.current) {
                    trackRef.current.style.transform = `translateX(${posRef.current}px) translateY(-50%)`;
                }
            }
            animFrameRef.current = requestAnimationFrame(animate);
        };
        animFrameRef.current = requestAnimationFrame(animate);
        return () => { if (animFrameRef.current) cancelAnimationFrame(animFrameRef.current); };
    }, [ONE_SET_W]);

    return (
        <div
            id="testimonials"
            className="w-full bg-[#5C4730]"
            style={{ borderRadius: '24px', overflow: 'hidden' }}
        >
            <div className="flex flex-col lg:flex-row w-full pb-20 ">

                {/* ── LEFT: Title block ── */}
                <div className="w-full lg:w-[35%] flex-shrink-0 px-6 sm:px-10 xl:px-16 pt-8 sm:pt-10 pb-6 lg:py-0 flex flex-col justify-center mb-7 sm:mb-0">
                    <h2 className="font-gilroy font-bold text-white text-2xl sm:text-3xl mb-3 leading-snug lg:text-start text-center">
                        What Our Clients Say
                    </h2>
                    <p className="font-montserrat font-medium text-white/65 text-xs sm:text-sm leading-relaxed">
                        Discover why discerning customers choose Reyu Jewels for their most precious moments.
                    </p>
                </div>

                {/* ── RIGHT: Infinite scroll cards ── */}
                <div
                    className="w-full lg:w-[65%] relative"
                    style={{ overflow: 'hidden', height: `${trackH}px` }}
                    onMouseEnter={() => { pausedRef.current = true; }}
                    onMouseLeave={() => { pausedRef.current = false; }}
                    onTouchStart={() => { pausedRef.current = true; }}
                    onTouchEnd={() => { pausedRef.current = false; }}
                >
                    {/* Left edge fade */}
                    
   
                    <div
                        ref={trackRef}
                        className="flex absolute left-0 sm:top-[55%] top-[50%]  "
                        style={{
                            // top,
                            // width: `${TRACK.length * (cardW + 4)}px`,
                            // width:"100%",
                            willChange: 'transform',
                            transform: 'translateY(-50%)',
                        }}
                    >
                        {TRACK.map((review, i) => {
                            const isDark = review.dark;
                            const cardYOffset = isDark ? -yOffset : yOffset;

                            return (
                                <div
                                    key={i}
                                    style={{
                                        width: `${cardW}px`,
                                        flexShrink: 0,
                                        transform: `translateY(${cardYOffset}px)`,
                                        backgroundColor: isDark ? '#000000' : '#B88F5F',
                                        borderRadius: '20px',
                                        padding,
                                        minHeight: `${cardH}px`,
                                        display: 'flex',
                                        flexDirection: 'column',
                                        justifyContent: 'space-between',
                                        marginLeft: '2px',
                                        marginRight: '2px',
                                    }}
                                >
                                    <div>
                                        <Stars count={review.stars} dark={isDark} size={starSize} />

                                        {/* Quote mark */}
                                        <div
                                            className="font-roboto font-bold"
                                            style={{
                                                fontSize: quoteFontSize,
                                                lineHeight: 1,
                                                marginTop: quoteMt,
                                                color: isDark ? '#B88F5F' : 'rgba(20,15,5,0.5)',
                                            }}
                                        >
                                            "
                                        </div>

                                        <p
                                            className="font-roboto font-medium"
                                            style={{
                                                fontSize,
                                                color: isDark ? 'rgba(255,255,255,0.85)' : 'rgba(20,15,5,0.9)',
                                                lineHeight: 1.5,
                                            }}
                                        >
                                            {review.quote}
                                        </p>
                                    </div>

                                    {/* Avatar + Name */}
                                    <div className="flex flex-col items-center mt-6 gap-2">
                                        <img
                                            src={review.avatar}
                                            alt={review.name}
                                            style={{
                                                width: `${avatarSize}px`,
                                                height: `${avatarSize}px`,
                                                borderRadius: '30%',
                                                objectFit: 'cover',
                                                border: isDark
                                                    ? '2px solid #B88F5F'
                                                    : '2px solid rgba(20,15,5,0.4)',
                                            }}
                                        />
                                        <span
                                            className="font-roboto font-normal text-center text-white"
                                            style={{ fontSize }}
                                        >
                                            {review.name}
                                        </span>
                                    </div>
                                </div>
                            );
                        })}
                    </div>
                </div>

            </div>
        </div>
    );
};

export default ClientReviewSection;