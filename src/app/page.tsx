import Header from '@/components/Header'
import Hero from '@/components/Hero'
import Plan from '@/components/Plan'
import Services from '@/components/Services'
import Doctor from '@/components/Doctor'
import Testimonials from '@/components/Testimonials'
import Faq from '@/components/Faq'
import MapSection from '@/components/MapSection'
import ContactSection from '@/components/ContactSection'
import Footer from '@/components/Footer'
import WhatsAppButton from '@/components/WhatsAppButton'

export default function Home() {
  return (
    <>
      <Header />
      <main id="top">
        <Hero />
        <Plan />
        <Services />
        <Doctor />
        <Testimonials />
        <Faq />
        <MapSection />
        <ContactSection />
      </main>
      <Footer />
      <WhatsAppButton />
    </>
  )
}
