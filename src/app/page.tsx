import ScrollBackground from '@/components/ScrollBackground'
import CursorGlow from '@/components/CursorGlow'
import HeroLogo from '@/components/HeroLogo'
import Header from '@/components/Header'
import Hero from '@/components/Hero'
import Services from '@/components/Services'
import PhotoCarousel from '@/components/PhotoCarousel'
import Doctor from '@/components/Doctor'
import Pricing from '@/components/Pricing'
import ContactSection from '@/components/ContactSection'
import MapSection from '@/components/MapSection'
import Footer from '@/components/Footer'

export default function Home() {
  return (
    <>
      <ScrollBackground />
      <div aria-hidden className="ambient-glow animate-drift" />
      <CursorGlow />
      <HeroLogo />
      <Header />
      <main>
        <Hero />
        <MapSection />
        <Services />
        <PhotoCarousel />
        <Doctor />
        <Pricing />
        <ContactSection />
      </main>
      <Footer />
    </>
  )
}
