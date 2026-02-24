import { useState } from "react";
import img1 from "../../assets/LandingPage/img1.png";
import img2 from "../../assets/LandingPage/img2.png";
import img3 from "../../assets/LandingPage/img3.png";
import img4 from "../../assets/LandingPage/img4.png";
import img5 from "../../assets/LandingPage/img5.png";
import img6 from "../../assets/LandingPage/img6.png";
import play_circle from "../../assets/LandingPage/play_circle.png";

/* ─────────────────────────────────────────────────────────────────
   DATA
───────────────────────────────────────────────────────────────── */
const ceoPosts = [
  { id: 1, src: img1 },
  { id: 2, src: img2 },
  { id: 3, src: img3 },
  { id: 4, src: img4 },
  { id: 5, src: img5 },
  { id: 6, src: img6 },
];

/* Duplicate once for seamless loop */
const loopedPosts = [...ceoPosts, ...ceoPosts];

/* ─────────────────────────────────────────────────────────────────
   CARD
───────────────────────────────────────────────────────────────── */
const PostCard = ({ post }: { post: (typeof ceoPosts)[0] }) => (
  <div
    className="relative flex-shrink-0
               w-[240px] sm:w-[280px] md:w-[311px]
               aspect-square overflow-hidden bg-neutral-800"
  >
    <img
      src={post.src}
      alt={`CEO post ${post.id}`}
      className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
    />

    {/* Bottom gradient */}
    <div
      className="absolute inset-x-0 bottom-0 h-1/3
                    bg-gradient-to-t from-black/30 to-transparent pointer-events-none"
    />

    {/* Play button */}
    <div className="absolute top-3 right-3 w-8 h-8 md:w-10 md:h-10">
      <img
        src={play_circle}
        alt="Play"
        className="w-full h-full object-contain cursor-pointer hover:scale-110 transition-transform duration-300"
      />
    </div>
  </div>
);

/* ─────────────────────────────────────────────────────────────────
   MAIN SECTION
───────────────────────────────────────────────────────────────── */
const CEOSection = () => {
  const [paused, setPaused] = useState(false);

  return (
    <section className="bg-[#202020] pt-20 sm:pb-0 pb-8   overflow-hidden">
      {/* Infinite Marquee Animation */}
      <style>{`
        @keyframes marquee {
          0%   { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }

        .marquee-track {
          animation: marquee 28s linear infinite;
          will-change: transform;
        }
      `}</style>

      <div className="w-full mx-auto px-4 sm:px-6">
        {/* ── Header ──────────────────────────────────────────── */}
        <div className="flex justify-between items-center mb-8 md:mb-10 gap-4">
          <h2
            className="text-white text-[22px] sm:text-[28px] md:text-[42px]
                       font-gilroy leading-tight"
          >
            What our CEO has to say
          </h2>

          <a
            href="https://www.instagram.com/reyujewels"
            target="_blank"
            rel="noopener noreferrer"
            className="flex-shrink-0 text-white/60 text-base sm:text-lg 
             hover:text-white font-montserrat transition-colors
              pb-0.5 whitespace-nowrap"
          >
            Shop Instagram
          </a>
        </div>

        {/* ── Carousel ─────────────────────────────────────────── */}
        <div
          className="relative"
          onMouseEnter={() => setPaused(true)}
          onMouseLeave={() => setPaused(false)}
        >
          <div
            className="marquee-track flex gap-3 md:gap-4"
            style={{
              width: "max-content",
              animationPlayState: paused ? "paused" : "running",
            }}
          >
            {loopedPosts.map((post, index) => (
              <PostCard key={`${post.id}-${index}`} post={post} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default CEOSection;
