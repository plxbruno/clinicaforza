export default function Hero() {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      <div className="relative z-10 max-w-4xl mx-auto px-6 text-center flex flex-col items-center gap-8">
        {/* Eyebrow */}
        <p
          className="text-gold text-sm font-medium tracking-[0.2em] uppercase animate-fade-up"
          style={{ animationDelay: '0.1s' }}
        >
          Emagrecimento · Performance
          <span className="hidden md:inline"> · </span>
          <span className="block md:inline">Estilo de Vida</span>
        </p>

        {/* Main headline */}
        <h1
          className="font-display text-white text-5xl md:text-6xl lg:text-7xl leading-[1.05] font-light max-w-3xl animate-fade-up"
          style={{ animationDelay: '0.25s' }}
        >
          Sua melhor versão está mais perto{' '}
          <em className="text-gold not-italic">do que você imagina.</em>
        </h1>

        {/* Divider */}
        <div
          className="w-16 h-px bg-gold animate-grow-line"
          style={{ animationDelay: '0.5s' }}
        />

        {/* Subtitle */}
        <p
          className="text-white/70 text-lg md:text-xl font-light max-w-xl leading-relaxed animate-fade-up"
          style={{ animationDelay: '0.65s' }}
        >
          Resultados reais. Sem atalhos, sem promessas vazias.
        </p>

        {/* CTA */}
        <div
          className="flex items-center justify-center mt-2 animate-fade-up"
          style={{ animationDelay: '0.8s' }}
        >
          <a
            id="hero-cta"
            href="https://wa.me/5531983239199?text=Olá.%20Quero%20agendar%20uma%20consulta%20com%20o%20Dr.%20Bruno."
            target="_blank"
            rel="noopener noreferrer"
            className="group inline-flex items-center gap-2 bg-gold text-forest font-semibold text-base px-7 py-3.5 rounded-full hover:bg-gold-light transition-colors duration-200"
          >
            Agendar consulta
            <span className="transition-transform duration-200 group-hover:translate-x-1">→</span>
          </a>
        </div>

      </div>

    </section>
  )
}
