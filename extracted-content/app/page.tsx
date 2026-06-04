import { Navbar } from "@/components/navbar"
import { HeroSection, AboutSection, RolesSection, Footer } from "@/components/sections"

export default function HomePage() {
  return (
    <main className="relative">
      <Navbar />
      <HeroSection />
      <AboutSection />
      <RolesSection />
      <Footer />
    </main>
  )
}
