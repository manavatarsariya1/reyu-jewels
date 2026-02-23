import React from "react";
import Image1 from "../../assets/LandingPage/Image1.png";

const VoicesSection = () => {
  return (
    <section className="w-full overflow-x-hidden pt-20 mt-[-10px] bg-black">
      {/* Negative margin-top (mt-[-50px]) pulls this section UP to overlap the brown one.
        relative and z-10 ensure the black background covers the brown corner.
      */}
      <div className="mx-auto w-[1920px] flex bg-black relative z-10 mt-[-50px] overflow-hidden">
        
        {/* Left: Model image */}
        <div className="w-[864px] h-[850px] relative flex-shrink-0">
          <img
            src={Image1}
            alt="Model wearing jewelry"
            className="w-full h-full object-cover"
          />
        </div>

        {/* Right Content */}
        <div className="flex-1 flex flex-col items-center justify-center relative py-20">
          <div className="text-center w-[500px] mb-[48px]">
            <h2 className="text-white text-[36px] font-serif font-semibold mb-[16px]">
              Voices of Distinction
            </h2>
            <p className="text-white/60 text-[14px] leading-[24px] font-normal">
              Discover what our esteemed clients say about their Reyu
              experience. From bespoke creations to timeless diamond
              investments, hear firsthand stories of trust, brilliance, and
              uncompromising craftsmanship.
            </p>
          </div>

          <div className="flex gap-[6px] items-center">
            {[1, 2, 3].map((item) => (
              <div
                key={item}
                style={{ width: '320px', height: '464px' }}
                className="relative flex-shrink-0 bg-[#1a1a1a] overflow-hidden "
              >
                <img
                  src={`/path-to-reel-${item}.jpg`}
                  alt={`Jewelry Reel ${item}`}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute top-[20px] right-[20px] bg-white/20 backdrop-blur-md rounded-full p-[10px] border border-white/10">
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="white">
                    <path d="M8 5v14l11-7z" />
                  </svg>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default VoicesSection;