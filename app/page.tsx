'use client'
import { HeroContainer } from "@/components/containers/HeroContainer";
import { NavContainer } from "@/components/containers/NavContainer";
import BackToTopButton from "@/components/ui/BackToTopButton";

export default function Home() {
  return (
    <main className="flex min-h-screen 2xl:max-w-[1320px] xl:max-w-[1140px] lg:max-w-[960px] md:max-w-full max-w-full flex-col items-center mx-auto px-4 py-2">
      <div className="w-full">
        <NavContainer />
        <HeroContainer />
      </div>
    </main>
  )
}
