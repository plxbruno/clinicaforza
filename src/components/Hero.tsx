import HeroSlideshow from './HeroSlideshow'
import WhatsAppLink from './WhatsAppLink'

export default function Hero() {
  return (
    <section className="relative min-h-[100svh] flex items-center overflow-hidden">
      <HeroSlideshow />

      <div className="relative z-10 w-full max-w-6xl mx-auto px-6 pt-28 pb-28 md:pt-40 md:pb-32 text-center">
        <p
          className="text-gold text-xs font-medium tracking-[0.25em] uppercase mb-6 animate-fade-in"
          style={{ animationDelay: '120ms' }}
        >
          Clínica Forza · Savassi
        </p>

        <h1
          className="font-display text-white text-[2.05rem] leading-[1.08] sm:text-5xl md:text-6xl lg:text-7xl font-medium max-w-4xl mx-auto text-balance animate-fade-up"
          style={{ animationDelay: '200ms' }}
        >
          Clínica de Nutrologia e{' '}
          <span className="text-gold">emagrecimento</span> em Belo Horizonte.
        </h1>

        <div
          className="mt-9 hidden sm:flex justify-center animate-fade-up"
          style={{ animationDelay: '340ms' }}
        >
          <WhatsAppLink
            source="hero"
            className="group inline-flex items-center justify-center gap-2 rounded-full bg-gold px-8 py-4 text-navy text-sm font-semibold transition-all duration-200 hover:bg-white hover:scale-[1.02]"
          >
            Agendar consulta
            <span className="transition-transform duration-200 group-hover:translate-x-1">
              →
            </span>
          </WhatsAppLink>
        </div>
      </div>
    </section>
  )
}
