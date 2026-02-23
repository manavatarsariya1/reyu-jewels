import React from 'react'
import Navbar from '../components/layout/Navbar'
import HeroSection from '../components/LandingPage/HeroSection'
import AboutSection from '../components/LandingPage/AboutSection'
import DiamondShapes from '../components/LandingPage/DiamondShapes'
import DiamondTypesSection from '../components/LandingPage/DiamondTypesSection'
import CollectionSection from '../components/LandingPage/CollectionSection'
import HowItWorks from '../components/LandingPage/HowItWorks'
import ClientReviewSection from '../components/LandingPage/ClientReviewSection'
import VoicesOfDistinction from '../components/LandingPage/VoicesOfDistinction'

const LandingPage = () => {
  return (
    <div className='bg-[#202020] '>
      <Navbar />
      <HeroSection />
      <AboutSection />
      <DiamondShapes />
      <DiamondTypesSection />
      <CollectionSection />
      <HowItWorks />
      <div className=' bg-black mx-3 rounded-3xl flex  flex-col gap-10 mt-10'>

        <ClientReviewSection />
        <VoicesOfDistinction />

      </div>
    </div>
  )
}

export default LandingPage