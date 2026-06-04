import { Navbar } from "@/components/navbar"
import { HeroSection, ProjectSection, RolesSection, Footer } from "@/components/sections"

export default function HomePage() {
  return (
    <main className="relative">
      <Navbar />
      <HeroSection />
      <ProjectSection />
      <RolesSection />
      <Footer />
    </main>
  )
}
