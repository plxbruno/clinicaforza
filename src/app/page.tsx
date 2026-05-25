import Header from '@/components/Header'
import Hero from '@/components/Hero'
import Services from '@/components/Services'
import PhotoCarousel from '@/components/PhotoCarousel'
import Doctor from '@/components/Doctor'
import Pricing from '@/components/Pricing'
import ContactSection from '@/components/ContactSection'
import MapSection from '@/components/MapSection'
import Footer from '@/components/Footer'
import WhatsAppButton from '@/components/WhatsAppButton'

export default function Home() {
  return (
    <>
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
      <WhatsAppButton />
    </>
  )
}
