import { useEffect, useState, useRef } from "react";
import CEOSection from "../components/LandingPage/CEOSection";
import Certificates from "../components/LandingPage/Certificates";
import Contact from "../components/LandingPage/Contact"
import Footer from "../components/layout/Footer";


import Navbar from '../components/layout/Navbar'
import HeroSection from '../components/LandingPage/HeroSection'
import AboutSection from '../components/LandingPage/AboutSection'
import DiamondShapes from '../components/LandingPage/DiamondShapes'
import DiamondTypesSection from '../components/LandingPage/DiamondTypesSection'
import CollectionSection from '../components/LandingPage/CollectionSection'
import HowItWorks from '../components/LandingPage/HowItWorks'
import ClientReviewSection from '../components/LandingPage/ClientReviewSection'
import VoicesOfDistinction from '../components/LandingPage/VoicesOfDistinction'
import WhatsAppButton from "../components/common/WhatsAppButton";

const LandingPage = () => {
  const [showWhatsApp, setShowWhatsApp] = useState(false);
  const aboutRef = useRef<HTMLDivElement>(null);

  // useEffect(() => {
  //   const observer = new IntersectionObserver(
  //     ([entry]) => {
  //       // Show button if AboutSection is intersecting OR if it's above the viewport (scrolled past)
  //       // Hide only if it's below the viewport (user in Hero section)
  //       if (entry.isIntersecting || entry.boundingClientRect.top <= 10) {
  //         setShowWhatsApp(true);
  //       } else {
  //         setShowWhatsApp(false);
  //       }
  //     },
  //     {
  //       threshold: 0, // Trigger as soon as the first pixel enters/leaves
  //     }
  //   );

  //   const currentRef = aboutRef.current;
  //   if (currentRef) {
  //     observer.observe(currentRef);
  //   }

  //   return () => {
  //     if (currentRef) {
  //       observer.unobserve(currentRef);
  //     }
  //   };
  // }, []);

  return (
    <div className='bg-[#202020] '>
      <Navbar />
      <HeroSection />
      <div ref={aboutRef}>
        <AboutSection />
      </div>
      <DiamondShapes />
      <DiamondTypesSection />
      <CollectionSection />
      <HowItWorks />
      <div className=' bg-black mx-3 rounded-3xl flex  flex-col gap-10 mt-10 '>

        <ClientReviewSection />
        {/* <VoicesOfDistinction /> */}

      </div>
      <CEOSection />
      <Contact />
      <Certificates />
      <Footer />
      <WhatsAppButton isVisible={showWhatsApp} />
    </div>
  )
}

export default LandingPage;
