'use client'
import { HeroContainer } from "@/components/containers/HeroContainer";
import { NavContainer } from "@/components/containers/NavContainer";
import BackToTopButton from "@/components/ui/BackToTopButton";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center px-20 py-2">
      <div className="w-full">
        <NavContainer />
      </div>
    </main>
  );
}
