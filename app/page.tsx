'use client'
import { ClientContainer } from "@/components/containers/ClientContainer";
import { ConsultationContainer } from "@/components/containers/ConsultationContainer";
import Footer from "@/components/containers/Footer";
import { HeroContainer } from "@/components/containers/HeroContainer";
import { NavContainer } from "@/components/containers/NavContainer";
import PortfolioContainer from "@/components/containers/PortfolioContainer";
import { ServicesContainer } from "@/components/containers/ServicesContainer";
import SoftwareSolutions from "@/components/containers/SoftwareSolution";
import TalkToExperts from "@/components/containers/TalkToExpertsContainer";
import TechnologyStack from "@/components/containers/TechnologyStack";
import { TestimonyContainer } from "@/components/containers/TestimonyContainer";
import BackToTopButton from "@/components/ui/BackToTopButton";
import FeaturedIn from "@/components/ui/FeaturedIn";
import { useEffect, useState } from "react";

export default function Home() {
  const [shadow, setShadow] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setShadow(true)
      } else {
        setShadow(false)
      }
    }
    window.addEventListener('scroll', handleScroll)
    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [])

  return (
    <main className="flex min-h-screen max-w-full flex-col items-center">
      <div className="w-full">
        <div className={`fixed w-full h-[70px] top-0 left-0 z-50 bg-white ${shadow ? 'shadow-md' : ''} transition-shadow duration-300`}>
          <NavContainer />
        </div>
        <HeroContainer />
        <ClientContainer />
        <div className="bg-[#f6f8fb]">
          <ServicesContainer />
        </div>
        <ConsultationContainer />
        <TestimonyContainer />
        <TalkToExperts />
        <PortfolioContainer />
        <FeaturedIn />
        <SoftwareSolutions />
        <TechnologyStack />
        <Footer/>
        <BackToTopButton/>
      </div>

    </main>
  )
}
