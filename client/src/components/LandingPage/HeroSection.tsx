import handImage from "../../assets/LandingPage/image1.png";
import diamondImage from "../../assets/LandingPage/diamond.png";

// Mobile image panel height — seam sits exactly here
const MOBILE_H = 320;

const HeroSection = () => {
  return (
    <div className="w-full px-2 py-5">
      <div className="relative w-full flex flex-col md:flex-row gap-2">

        {/* ===== LEFT — Jewelry Image ===== */}
        <div
          className="relative w-full md:w-[45%] md:min-h-[620px] flex-shrink-0 rounded-3xl overflow-hidden"
          style={{ height: `${MOBILE_H}px` }}
        >
          <img
            src={handImage}
            alt="Jewelry"
            className="w-full h-full object-cover"
          />
        </div>

        {/* ===== RIGHT — Content ===== */}
        {/* height matches left panel on mobile; pt reserves diamond overlap space */}
        <div
          className="relative md:w-[55%] bg-[#f5ede0] flex flex-col justify-center md:min-h-[620px]
                     px-8 sm:px-12 lg:px-16 pb-8 md:py-14 z-0 rounded-3xl"
          style={{
            height: `${MOBILE_H}px`,
            paddingTop: '64px',
            backgroundColor: '#f5ede0',
            backgroundImage: `
              radial-gradient(circle at 50% 100% , rgba(255, 128, 0, 0.17) 0%, rgba(255, 128, 0, 0) 55%),
              radial-gradient(circle at 85% 100%, rgba(184, 143, 95, 0.10) 0%, rgba(184, 143, 95, 0) 55%)
            `,
          }}
        >
          <h1 className="font-gilroy font-bold text-[#1a2744] text-2xl sm:text-3xl lg:text-4xl xl:text-5xl leading-tight mb-1 text-center">
            Exquisite. Rare. Timeless.
          </h1>
          <h2 className="font-gilroy font-bold text-[#B88F5F] text-base sm:text-2xl lg:text-3xl xl:text-4xl mb-3 text-center">
            Reyu Diamonds
          </h2>

          <p className="font-roboto text-[#002834] text-[11px] sm:text-sm max-w-md mb-3 text-center font-normal mx-auto">
            Where exceptional diamonds meet uncompromising standards. Hand-selected stones of remarkable brilliance, crafted for those who value legacy over luxury.          </p>

          <p className="font-gilroy font-bold text-[#1a2744] text-xs sm:text-2xl mb-5 text-center">
            Own the Extraordinary.
          </p>

          {/* Stats */}
          <div className="flex flex-row justify-center gap-6 sm:gap-20 md:mt-20">
            <div className="flex flex-col items-center md:items-start">
              <span className="font-gilroy font-semibold text-[#1a2744] text-base sm:text-2xl lg:text-3xl">100%</span>
              <span className="font-roboto text-[#777] text-[9px] sm:text-xs mt-0.5 text-center md:text-left">Certified Diamonds</span>
            </div>
            <div className="flex flex-col items-center md:items-start">
              <span className="font-gilroy font-semibold text-[#1a2744] text-base sm:text-2xl lg:text-3xl">10k+</span>
              <span className="font-roboto text-[#777] text-[9px] sm:text-xs mt-0.5 text-center md:text-left">Happy Customers</span>
            </div>
            <div className="flex flex-col items-center md:items-start">
              <span className="font-gilroy font-semibold text-[#1a2744] text-base sm:text-2xl lg:text-3xl">100%</span>
              <span className="font-roboto text-[#777] text-[9px] sm:text-xs mt-0.5 text-center md:text-left">Secure Delivery</span>
            </div>
          </div>
        </div>

        {/* ===== DIAMOND — centered on the seam ===== */}
        {/* Mobile: top = MOBILE_H, translateY -50% straddles the horizontal seam */}
        {/* Desktop: left = 45% (vertical seam), top = 50% of full height     */}
        <div
          className="
            absolute z-10 pointer-events-none

            /* ── Mobile: sit on the horizontal seam ── */
            left-1/2  -translate-x-1/2
            top-[320px] -translate-y-1/2

            /* ── Desktop: sit on the vertical seam ── */
            md:left-[45.25%]
            md:top-1/2  md:-translate-y-1/2
          "
        >
          <img
            src={diamondImage}
            alt="Diamond"
            className="w-40 md:w-50 lg:w-60 xl:w-72 h-auto drop-shadow-2xl"
          />
        </div>

        {/* </div> */}

      </div>
    </div>
  );
};

export default HeroSection;