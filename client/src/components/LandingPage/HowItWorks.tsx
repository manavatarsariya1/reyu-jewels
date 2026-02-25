import { useState, useEffect, useRef } from "react";

// ── Icons ────────────────────────────────────────────────────────────────────
const UploadIcon = () => (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8"
        strokeLinecap="round" strokeLinejoin="round" className="w-7 h-7">
        <path d="M4 12v8a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-8" />
        <polyline points="16 6 12 2 8 6" />
        <line x1="12" y1="2" x2="12" y2="15" />
    </svg>
);

const PaletteIcon = () => (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8"
        strokeLinecap="round" strokeLinejoin="round" className="w-7 h-7">
        <circle cx="13.5" cy="6.5" r="1" fill="currentColor" stroke="none" />
        <circle cx="17.5" cy="10.5" r="1" fill="currentColor" stroke="none" />
        <circle cx="8.5" cy="7.5" r="1" fill="currentColor" stroke="none" />
        <circle cx="6.5" cy="12.5" r="1" fill="currentColor" stroke="none" />
        <path d="M12 2C6.5 2 2 6.5 2 12s4.5 10 10 10c.926 0 1.648-.746 1.648-1.688 0-.437-.18-.835-.437-1.125-.29-.289-.438-.652-.438-1.125a1.64 1.64 0 0 1 1.668-1.668h1.996c3.051 0 5.555-2.503 5.555-5.554C21.965 6.012 17.461 2 12 2z" />
    </svg>
);

const CheckCircleIcon = () => (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8"
        strokeLinecap="round" strokeLinejoin="round" className="w-7 h-7">
        <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
        <polyline points="22 4 12 14.01 9 11.01" />
    </svg>
);

const GearIcon = () => (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8"
        strokeLinecap="round" strokeLinejoin="round" className="w-7 h-7">
        <circle cx="12" cy="12" r="3" />
        <path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1-2.83 2.83l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-4 0v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83-2.83l.06-.06A1.65 1.65 0 0 0 4.68 15a1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1 0-4h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 2.83-2.83l.06.06A1.65 1.65 0 0 0 9 4.68a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 4 0v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 2.83l-.06.06A1.65 1.65 0 0 0 19.4 9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 0 4h-.09a1.65 1.65 0 0 0-1.51 1z" />
    </svg>
);

const BoxIcon = () => (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8"
        strokeLinecap="round" strokeLinejoin="round" className="w-7 h-7">
        <path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z" />
        <polyline points="3.27 6.96 12 12.01 20.73 6.96" />
        <line x1="12" y1="22.08" x2="12" y2="12" />
    </svg>
);

const ChevronIcon = () => (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"
        strokeLinecap="round" strokeLinejoin="round" className="w-4 h-4">
        <polyline points="9 18 15 12 9 6" />
    </svg>
);

// ── Data ─────────────────────────────────────────────────────────────────────
const steps = [
    {
        number: "01",
        icon: <UploadIcon />,
        title: "Share Shape or\nReference",
        description: "Drawing, CAD, photo, or sample.",
    },
    {
        number: "02",
        icon: <PaletteIcon />,
        title: "Approve mm Size\n& Ratio",
        description: "We confirm dimensions + tolerances.",
    },
    {
        number: "03",
        icon: <CheckCircleIcon />,
        title: "Select Color &\nClarity",
        description: "D – K, VVS – SI, Certified or non-certified.",
    },
    {
        number: "04",
        icon: <GearIcon />,
        title: "Manufacturing\nBegins",
        description: "Cutting, polishing, QC, measurement.",
    },
    {
        number: "05",
        icon: <BoxIcon />,
        title: "Delivery &\nCertification",
        description: "Worldwide secure logistics.",
    },
];

// ── Arrow bubble between cards ────────────────────────────────────────────────
function ArrowBubble() {
    return (
        <div
            className="absolute flex-shrink-0 flex items-center justify-center rounded-full z-10 "
            style={{
                width: 36,
                height: 36,
                background: "#B88F5F",
                boxShadow: "0 0 0 4px rgba(180,140,70,0.15)",
                color: "#ffffff",
                marginLeft: -16,
                marginRight: -10,
            }}
        >
            <ChevronIcon />
        </div>
    );
}

// ── Individual Step Card ──────────────────────────────────────────────────────
function StepCard({ step, visible, index }) {
    return (
        <div
            className="flex-1 mx-2 flex flex-col items-center text-center py-7 bg-[#5C47304D] rounded-2xl relative overflow-hidden transition-all duration-700 group md:h-80 xl:w-40"
            style={{
                // background: "linear-gradient(180deg, #2a2017 0%, #1e1810 100%)",
                // border: "1px solid rgba(255,255,255,0.06)",
                minWidth: 0,
                opacity: visible ? 1 : 0,
                transform: visible ? "translateY(0px)" : "translateY(28px)",
                transition: `opacity 0.55s cubic-bezier(.4,0,.2,1) ${index * 100}ms, transform 0.55s cubic-bezier(.4,0,.2,1) ${index * 100}ms`,
            }}
        >
            {/* Subtle inner glow on hover */}
            <div
                className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 pointer-events-none transition-opacity duration-400"
                style={{ boxShadow: "inset 0 0 0 1px rgba(180,140,70,0.3)" }}
            />

            {/* Step number */}
            <span
                className="text-4xl mb-5  block font-gilroy font-normal text-[#B88F5F]"
            >
                {step.number}
            </span>

            {/* Icon container — darker square rounded */}
            <div
                className="flex items-center justify-center rounded-3xl mb-4 bg-[#B88F5F33] fill-[#B88F5F] "
                style={{
                    minWidth: 75,
                    minHeight: 75,
                    //   background: "linear-gradient(145deg, #3a2e1a, #2a2212)",
                    border: "1px solid rgba(180,140,70,0.25)",
                    color: "#B88F5F",
                }}
            >
                {step.icon}
            </div>

            {/* Title */}
            <p
                className="font-semibold text-2xl leading-snug  whitespace-pre-line font-gilroy text-[#ffffff]"
            >
                {step.title}
            </p>

            {/* Description */}
            <p
                className="text-[18px]  font-montserrat text-[#d7d7d7] font-normal  w-70"
                
            >
                {step.description}
            </p>
        </div>
    );
}

// ── Main Section ──────────────────────────────────────────────────────────────
export default function HowItWorks() {
    const [visible, setVisible] = useState([]);
    const ref = useRef(null);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    steps.forEach((_, i) =>
                        setTimeout(() => setVisible((prev) => [...prev, i]), i * 110)
                    );
                    observer.disconnect();
                }
            },
            { threshold: 0.15 }
        );
        if (ref.current) observer.observe(ref.current);
        return () => observer.disconnect();
    }, []);

    return (
        <section
            className="w-full flex items-center justify-center py-15  px-3 "
        //   style={{ backgroundColor: "#111009", minHeight: "100vh" }}
        >
            <div className="w-full " ref={ref}>

                {/* ── Header ── */}
                <div className="text-center mb-16">
                    <h2
                        className="text-4xl sm:text-5xl font-bold mb-3 font-gilroy text-[#FFFFFF]"
                        
                    >
                        How It Works
                    </h2>
                    <p
                        className="text-lg font-montserrat font-normal text-[#d7d7d7]"
                       
                    >
                        Simple 5-Step Process
                    </p>
                </div>

                {/* ── Desktop layout: single row ── */}
                <div className="hidden xl:flex gap-0 ">
                    {steps.map((step, i) => (
                        <div key={i} className="flex items-center flex-1 ">
                            <StepCard step={step} visible={visible.includes(i)} index={i} />
                            <div className="a">

                                {i < steps.length - 1 && <ArrowBubble />}
                            </div>
                        </div>
                    ))}
                </div>

                {/* ── Tablet layout: 2-col + centered last ── */}
                <div className="hidden sm:grid xl:hidden grid-cols-2 gap-5 ">
                    {steps.map((step, i) => (
                        <div key={i} className={i === 4 ? "col-span-2 max-w-xl mx-auto w-full" : ""}>
                            <StepCard step={step} visible={visible.includes(i)} index={i} />
                        </div>
                    ))}
                </div>

                {/* ── Mobile layout: stacked ── */}
                <div className="flex flex-col gap-4 sm:hidden">
                    {steps.map((step, i) => (
                        <StepCard key={i} step={step} visible={visible.includes(i)} index={i} />
                    ))}
                </div>

            </div>
        </section>
    );
}