export default function Hero() {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center bg-forest overflow-hidden"
    >
      {/* Subtle texture overlay */}
      <div className="absolute inset-0 opacity-10"
        style={{
          backgroundImage: `radial-gradient(circle at 20% 80%, #C9A55A 0%, transparent 50%),
                            radial-gradient(circle at 80% 20%, #1E3A5F 0%, transparent 50%)`
        }}
      />

      <div className="relative z-10 max-w-4xl mx-auto px-6 text-center flex flex-col items-center gap-8">
        {/* Eyebrow */}
        <p className="text-gold text-sm font-medium tracking-[0.2em] uppercase">
          Emagrecimento · Performance · Estilo de Vida
        </p>

        {/* Main headline */}
        <h1 className="font-serif text-white text-4xl md:text-5xl lg:text-6xl leading-tight font-medium max-w-3xl">
          Sua melhor versão está mais perto{' '}
          <em className="text-gold not-italic">do que você imagina.</em>
        </h1>

        {/* Divider */}
        <div className="w-16 h-px bg-gold" />

        {/* Subtitle */}
        <p className="text-white/70 text-lg md:text-xl font-light max-w-xl leading-relaxed">
          Resultados reais. Sem atalhos, sem promessas vazias.
        </p>

      </div>

    </section>
  )
}
