import { useState, useRef, useEffect } from "react";
import cert1 from "../../assets/LandingPage/cert1.png";
import cert2 from "../../assets/LandingPage/cert2.png";
import cert3 from "../../assets/LandingPage/cert3.png";
import { FiArrowLeft, FiArrowRight } from "react-icons/fi";

const certificates = [
  {
    id: 1,
    image: cert1,
    file: "/certificates/LG739505913.pdf",
    title: "Lab-Grown Diamond Certification – 3.02 Carat Marquise",
    description:
      "IGI-certified marquise brilliant diamond grown through CVD technology. Graded G color, VS2 clarity, with excellent finish and no fluorescence.",
  },
  {
    id: 2,
    image: cert2,
    file: "/certificates/LG739576025.pdf",
    title: "Lab-Grown Diamond Certification – 2.00 Carat Round",
    description:
      "IGI laboratory report for a D-color VVS1 round brilliant grown via HPHT method. Ideal cut with excellent polish and symmetry.",
  },
  {
    id: 3,
    image: cert3,
    file: "/certificates/LG742510222.pdf",
    title: "Lab-Grown Diamond Certification – 1.75 Carat Cushion",
    description:
      "IGI-certified cushion brilliant diamond graded F color, VS2 clarity with no fluorescence and excellent craftsmanship.",
  },
  {
    id: 4,
    image: cert3,
    file: "/certificates/LG742516947.pdf",
    title: "Lab-Grown Diamond Certification – 1.75 Carat Cushion",
    description:
      "IGI-certified cushion brilliant diamond graded F color, VS2 clarity with no fluorescence and excellent craftsmanship.",
  },
  {
    id: 5,
    image: cert3,
    file: "/certificates/LG775524822.pdf",
    title: "Lab-Grown Diamond Certification – 1.75 Carat Cushion",
    description:
      "IGI-certified cushion brilliant diamond graded F color, VS2 clarity with no fluorescence and excellent craftsmanship.",
  },
  {
    id: 6,
    image: cert3,
    file: "/certificates/LG777514224.pdf",
    title: "Lab-Grown Diamond Certification – 1.75 Carat Cushion",
    description:
      "IGI-certified cushion brilliant diamond graded F color, VS2 clarity with no fluorescence and excellent craftsmanship.",
  },

];

const VISIBLE_DESKTOP = 3;

const Certifications = () => {
  const [index, setIndex] = useState(0);
  const scrollRef = useRef<HTMLDivElement>(null);
  const [visibleCount, setVisibleCount] = useState(VISIBLE_DESKTOP);

  useEffect(() => {
    const update = () => {
      if (window.innerWidth < 640) setVisibleCount(1);
      else if (window.innerWidth < 1024) setVisibleCount(2);
      else setVisibleCount(VISIBLE_DESKTOP);
    };
    update();
    window.addEventListener("resize", update);
    return () => window.removeEventListener("resize", update);
  }, []);

  const total = certificates.length;
  const maxIndex = Math.max(0, total - visibleCount);

  const scrollToCard = (i: number) => {
    const container = scrollRef.current;
    if (!container) return;
    const card = container.children[i] as HTMLElement;
    if (!card) return;

    // Use offsetLeft directly — most reliable across zoom levels
    container.scrollTo({
      left: card.offsetLeft - container.offsetLeft,
      behavior: "smooth",
    });
  };

  const goTo = (i: number) => {
    const clamped = Math.max(0, Math.min(i, maxIndex));
    setIndex(clamped);
    scrollToCard(clamped);
  };

  // Sync index when user manually scrolls (mobile swipe)
  useEffect(() => {
    const container = scrollRef.current;
    if (!container) return;

    const handleScroll = () => {
      const card = container.children[0] as HTMLElement;
      if (!card) return;
      const cardWidth = card.offsetWidth;
      const gap = 32; // lg:gap-8
      const newIndex = Math.round(container.scrollLeft / (cardWidth + gap));
      setIndex(Math.max(0, Math.min(newIndex, maxIndex)));
    };

    container.addEventListener("scroll", handleScroll, { passive: true });
    return () => container.removeEventListener("scroll", handleScroll);
  }, [maxIndex]);

  const atStart = index === 0;
  const atEnd = index >= maxIndex;

  return (
    <section className="w-full bg-[#202020] py-10 sm:py-12 lg:py-16 px-4 sm:px-8 lg:px-16 ">
      <div className="max-w-[1440px] mx-auto">
        {/* Header */}
        <div className="flex flex-col sm:flex-row  sm:justify-between sm:items-start gap-5 sm:gap-4 mb-8 sm:mb-10 lg:mb-12">
          <div>
            <h2 className="text-white text-2xl sm:text-3xl lg:text-4xl font-gilroy">
              Our Certifications
            </h2>
            <p className="text-[#949391] mt-2 sm:mt-3 max-w-full sm:max-w-[500px] lg:max-w-[700px] text-sm sm:text-base font-montserrat">
              We are proud to showcase our certifications and accreditations
              that demonstrate our commitment to quality, authenticity, and
              excellence in every piece we create.
            </p>
          </div>

          {total > visibleCount && (
            <div className="flex items-center gap-[10px] self-start sm:self-center shrink-0">
              <button
                onClick={() => goTo(index - 1)}
                disabled={atStart}
                className={`w-[50px] h-[50px] flex items-center justify-center rounded-full transition-all duration-300
                  ${
                    atStart
                      ? "bg-[#2A2A2A] text-white/30 "
                      : "bg-[#2A2A2A] text-white hover:bg-[#3a3a3a]"
                  }`}
              >
                <FiArrowLeft className="text-[18px]" />
              </button>

              <button
                onClick={() => goTo(index + 1)}
                disabled={atEnd}
                className={`w-[50px] h-[50px] flex items-center justify-center rounded-full transition-all duration-300
                  ${
                    atEnd
                      ? "bg-[#C6A96B]/30 text-black/30 "
                      : "bg-[#C6A96B] text-black hover:bg-[#b8953a]"
                  }`}
              >
                <FiArrowRight className="text-[18px]" />
              </button>
            </div>
          )}
        </div>

        {/* Cards */}
        <div
          ref={scrollRef}
          className="flex gap-5 sm:gap-6 lg:gap-8
                     overflow-x-auto scroll-smooth snap-x snap-mandatory
                     lg:overflow-x-hidden
                     pb-4 lg:pb-0
                     -mx-4 px-4 sm:-mx-8 sm:px-8 lg:mx-0 lg:px-0"
          style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
        >
          {certificates.map((cert, i) => (
            <div
              key={i}
              className="group snap-center shrink-0 font-gilroy
                         bg-[#EFEFEF] rounded-3xl overflow-hidden
                         transition-all duration-500 ease-[cubic-bezier(0.4,0,0.2,1)]
                         hover:-translate-y-2 hover:shadow-2xl hover:shadow-black/40"
              style={{
                width: `clamp(280px, calc((100% - ${VISIBLE_DESKTOP - 1} * 2rem) / ${VISIBLE_DESKTOP}), 480px)`,
              }}
            >
              <div className="bg-white p-4 sm:p-5 lg:p-6 overflow-hidden">
                <img
                  src={cert.image}
                  alt={cert.title}
                  className="w-full object-contain transition-transform duration-700 group-hover:scale-105"
                />
              </div>

              <div className="p-4 sm:p-5 lg:p-6">
                <h3 className="text-[#141414] font-semibold text-lg sm:text-xl lg:text-2xl leading-tight transition-colors duration-300 group-hover:text-[#C6A96B]">
                  {cert.title}
                </h3>
                <p
                  className="mt-3 lg:mt-4 h-[80px] overflow-hidden
              text-[#949391] text-sm sm:text-[15px] lg:text-base
              leading-relaxed font-poppins"
                >
                  {cert.description}
                </p>
                <button
                  onClick={() =>
                    window.open(cert.file, "_blank", "noopener,noreferrer")
                  }
                  className="mt-4 lg:mt-6 bg-black text-white text-xs sm:text-sm
                             px-5 sm:px-6 py-2.5 sm:py-3 rounded-full
                             transition-all duration-300 ease-in-out
                             hover:scale-100 font-gilroy"
                >
                  VIEW CERTIFICATE
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Mobile dots */}
        <div className="flex justify-center gap-2 mt-5 lg:hidden">
          {certificates.map((_, i) => (
            <button
              key={i}
              onClick={() => goTo(i)}
              className={`h-2 rounded-full transition-all duration-300 ${
                i === index ? "bg-[#C6A96B] w-4" : "bg-[#444] w-2"
              }`}
              aria-label={`Go to certificate ${i + 1}`}
            />
          ))}
        </div>

        {/* Desktop progress dots */}
        {total > VISIBLE_DESKTOP && (
          <div className="hidden lg:flex justify-center gap-2 mt-8">
            {Array.from({ length: maxIndex + 1 }).map((_, i) => (
              <button
                key={i}
                onClick={() => goTo(i)}
                className={`h-1.5 rounded-full transition-all duration-300 ${
                  i === index ? "bg-[#C6A96B] w-8" : "bg-[#444] w-2"
                }`}
                aria-label={`Go to position ${i + 1}`}
              />
            ))}
          </div>
        )}
      </div>
    </section>
  );
};

export default Certifications;
