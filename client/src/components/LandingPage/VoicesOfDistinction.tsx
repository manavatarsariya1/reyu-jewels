import React, { useRef } from "react";
import img1 from "../../assets/LandingPage/voiceofdistinction-image1.png";

const cards = [
  { id: 1, src: "https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?w=400&q=80", alt: "Client 1" },
  { id: 2, src: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=400&q=80", alt: "Client 2" },
  { id: 3, src: "https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e?w=400&q=80", alt: "Client 3" },
  { id: 4, src: "https://images.unsplash.com/photo-1524504388940-b1c1722653e1?w=400&q=80", alt: "Client 4" },
  { id: 5, src: "https://images.unsplash.com/photo-1488426862026-3ee34a7d66df?w=400&q=80", alt: "Client 5" },
  { id: 6, src: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=400&q=80", alt: "Client 6" },
];

const allCards = [...cards, ...cards];

interface TestimonialCardProps {
  src: string;
  alt: string;
}

const TestimonialCard: React.FC<TestimonialCardProps> = ({ src, alt }) => {
  return (
    <div className="relative flex-shrink-0 w-[160px] h-[220px] sm:w-[200px] sm:h-[300px] md:w-[240px] md:h-[370px] lg:w-[280px] lg:h-[440px] rounded overflow-hidden group cursor-pointer">
      <img
        src={src}
        alt={alt}
        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
      />
      {/* Gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
      {/* Play button */}
      <div className="absolute top-2 right-2 sm:top-3 sm:right-3 w-6 h-6 sm:w-7 sm:h-7 rounded-full bg-white/20 backdrop-blur-sm border border-white/30 flex items-center justify-center">
        <svg viewBox="0 0 10 10" className="w-2 h-2 sm:w-2.5 sm:h-2.5 fill-white ml-0.5">
          <polygon points="2,1 9,5 2,9" />
        </svg>
      </div>
    </div>
  );
};

const VoicesOfDistinction: React.FC = () => {
  const mobileTrackRef = useRef<HTMLDivElement>(null);

  return (
    <section className="w-full bg-[#000000] overflow-hidden rounded-b-3xl border">

      {/* ── MOBILE & TABLET: Stacked layout (below lg) ── */}
      <div className="flex flex-col lg:hidden">
        {/* Hero image — full width */}
        <div className="relative w-full h-[280px] sm:h-[380px] md:h-[440px] overflow-hidden">
          <img
            src={img1}
            alt="Model wearing diamond jewelry"
            className="w-full h-full object-cover object-top"
          />
          {/* Bottom fade into black */}
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black/80" />
        </div>

        {/* Heading */}
        <div className="text-center px-5 sm:px-10 pt-6 pb-4">
          <h2 className="text-[1.7rem] sm:text-[2rem] md:text-[2.3rem] text-white mb-2 font-gilroy font-semibold">
            Voices of Distinction
          </h2>
          <p className="text-[0.73rem] sm:text-[0.8rem] md:text-[0.82rem] text-[#d6d6d6] max-w-[560px] mx-auto font-montserrat font-normal leading-relaxed">
            Discover what our esteemed clients say about their Reyu experience.
            From bespoke creations to timeless diamond investments, hear
            firsthand stories of trust, brilliance, and uncompromising
            craftsmanship.
          </p>
        </div>

        {/* Scrolling Cards */}
        <div
          className="w-full overflow-hidden pb-8 pt-3"
          style={{
            WebkitMaskImage:
              "linear-gradient(to right, transparent 0%, black 6%, black 94%, transparent 100%)",
            maskImage:
              "linear-gradient(to right, transparent 0%, black 6%, black 94%, transparent 100%)",
          }}
        >
          <div
            ref={mobileTrackRef}
            className="flex gap-3 w-max"
            style={{ animation: "scrollLeft 22s linear infinite" }}
            onMouseEnter={() => {
              if (mobileTrackRef.current)
                mobileTrackRef.current.style.animationPlayState = "paused";
            }}
            onMouseLeave={() => {
              if (mobileTrackRef.current)
                mobileTrackRef.current.style.animationPlayState = "running";
            }}
          >
            {allCards.map((card, index) => (
              <TestimonialCard
                key={`mobile-${card.id}-${index}`}
                src={card.src}
                alt={card.alt}
              />
            ))}
          </div>
        </div>
      </div>

      {/* ── DESKTOP: Side-by-side layout (lg and above) ── */}
      <div className="hidden lg:grid grid-cols-[45%_55%] min-h-[670px]">
        {/* Left: Big Image */}
        <div className="relative overflow-hidden">
          <img
            src={img1}
            alt="Model wearing diamond jewelry"
            className="h-[670px] w-[670px] object-cover object-top"
          />
        </div>

        {/* Right: Content + Scrolling Cards */}
        <div className="flex flex-col justify-between overflow-hidden">
          {/* Heading */}
          <div className="text-center px-12 mb-9">
            <h2 className="text-[2.6rem] text-white mb-3 font-gilroy font-semibold">
              Voices of Distinction
            </h2>
            <p className="text-[0.82rem] text-center text-[#d6d6d6] max-w-[600px] mx-auto font-montserrat font-normal">
              Discover what our esteemed clients say about their Reyu
              experience. From bespoke creations to timeless diamond
              investments, hear firsthand stories of trust, brilliance, and
              uncompromising craftsmanship.
            </p>
          </div>

          {/* Scrolling Cards */}
          <div
            className="w-full overflow-hidden"
            style={{
            //   WebkitMaskImage:
            //     "linear-gradient(to right, transparent 0%, black 2%, black 92%, transparent 100%)",
            //   maskImage:
            //     "linear-gradient(to right, transparent 0%, black 4%, black 92%, transparent 100%)",
            }}
          >
            <div
              className="flex gap-4 w-max"
              style={{ animation: "scrollLeft 28s linear infinite" }}
              onMouseEnter={(e) => {
                (e.currentTarget as HTMLDivElement).style.animationPlayState =
                  "paused";
              }}
              onMouseLeave={(e) => {
                (e.currentTarget as HTMLDivElement).style.animationPlayState =
                  "running";
              }}
            >
              {allCards.map((card, index) => (
                <TestimonialCard
                  key={`desktop-${card.id}-${index}`}
                  src={card.src}
                  alt={card.alt}
                />
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Keyframes */}
      <style>{`
        @keyframes scrollLeft {
          0%   { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
      `}</style>
    </section>
  );
};

export default VoicesOfDistinction;