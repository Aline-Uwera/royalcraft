'use client'
import { ClientContainer } from "@/components/containers/ClientContainer";
import { ConsultationContainer } from "@/components/containers/ConsultationContainer";
import { HeroContainer } from "@/components/containers/HeroContainer";
import { NavContainer } from "@/components/containers/NavContainer";
import { ServicesContainer } from "@/components/containers/ServicesContainer";
import { TestimonyContainer } from "@/components/containers/TestimonyContainer";
import BackToTopButton from "@/components/ui/BackToTopButton";
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
        <div className={`fixed w-full top-0 left-0 z-50 bg-white ${shadow ? 'shadow-md' : ''} transition-shadow duration-300`}>
          <NavContainer />
        </div>
        <HeroContainer />
        <ClientContainer />
        <div className="bg-[#f6f8fb]">
          <ServicesContainer />
        </div>
        <ConsultationContainer />
        <TestimonyContainer/>
        <BackToTopButton/>
      </div>
    </main>
  )
}
