import Header from '@/components/Header'
import Hero from '@/components/Hero'
// A promocao por tempo limitado saiu do ar. O componente continua no repo,
// inteiro, junto com o `plan` em `src/lib/clinic.ts` — descomentar as duas
// linhas abaixo devolve a secao exatamente como ela era.
// import Plan from '@/components/Plan'
import Pricing from '@/components/Pricing'
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
        {/* <Plan /> */}
        <Services />
        <Doctor />
        {/* Valores vem depois do medico de proposito: a pessoa decide se
            confia em quem assina antes de olhar o numero. */}
        <Pricing />
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
