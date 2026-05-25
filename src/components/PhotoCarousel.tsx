'use client'

import { useState, useEffect, useCallback } from 'react'

const slides = [
  {
    gradient: 'from-forest to-forest-mid',
    label: 'Recepção',
    description: 'Ambiente acolhedor e exclusivo',
  },
  {
    gradient: 'from-forest-mid to-[#2A4A7F]',
    label: 'Consultório',
    description: 'Equipamentos modernos para sua avaliação',
  },
  {
    gradient: 'from-[#1E3A5F] to-forest',
    label: 'Área de Avaliação',
    description: 'Protocolos avançados de diagnóstico',
  },
  {
    gradient: 'from-[#0D1B2A] to-[#2A4A7F]',
    label: 'Espaço de Bem-estar',
    description: 'Conforto e cuidado em cada detalhe',
  },
  {
    gradient: 'from-forest-mid to-forest',
    label: 'Sala de Acompanhamento',
    description: 'Suporte contínuo em sua jornada',
  },
]

export default function PhotoCarousel() {
  const [current, setCurrent] = useState(0)
  const [isTransitioning, setIsTransitioning] = useState(false)

  const goTo = useCallback(
    (index: number) => {
      if (isTransitioning) return
      setIsTransitioning(true)
      setTimeout(() => {
        setCurrent(index)
        setIsTransitioning(false)
      }, 300)
    },
    [isTransitioning]
  )

  const next = useCallback(() => {
    goTo((current + 1) % slides.length)
  }, [current, goTo])

  useEffect(() => {
    const timer = setInterval(next, 4000)
    return () => clearInterval(timer)
  }, [next])

  return (
    <section className="py-28 bg-sand-dark overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <div className="max-w-xl mb-14">
          <p className="text-gold text-sm font-medium tracking-[0.2em] uppercase mb-4">
            Nossa clínica
          </p>
          <h2 className="font-serif text-forest text-4xl md:text-5xl font-medium leading-tight">
            Um espaço pensado para você.
          </h2>
        </div>
      </div>

      {/* Carousel */}
      <div className="relative">
        <div className="max-w-7xl mx-auto px-6">
          <div className="relative h-[460px] md:h-[560px] rounded-2xl overflow-hidden">
            {slides.map((slide, i) => (
              <div
                key={i}
                className={`absolute inset-0 bg-gradient-to-br ${slide.gradient} transition-opacity duration-500 ${
                  i === current ? 'opacity-100' : 'opacity-0'
                }`}
              >
                {/* Overlay pattern */}
                <div className="absolute inset-0 opacity-5"
                  style={{
                    backgroundImage: `repeating-linear-gradient(
                      45deg,
                      #C9A55A,
                      #C9A55A 1px,
                      transparent 1px,
                      transparent 40px
                    )`
                  }}
                />


                {/* Placeholder label */}
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-white/20 text-center">
                  <p className="text-xs tracking-widest uppercase">Foto real em breve</p>
                </div>
              </div>
            ))}

            {/* Arrows */}
            <button
              onClick={() => goTo((current - 1 + slides.length) % slides.length)}
              className="absolute left-4 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-white/10 hover:bg-white/20 backdrop-blur-sm flex items-center justify-center text-white transition-colors"
              aria-label="Anterior"
            >
              ←
            </button>
            <button
              onClick={() => goTo((current + 1) % slides.length)}
              className="absolute right-4 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-white/10 hover:bg-white/20 backdrop-blur-sm flex items-center justify-center text-white transition-colors"
              aria-label="Próximo"
            >
              →
            </button>
          </div>

          {/* Dots */}
          <div className="flex justify-center gap-2 mt-6">
            {slides.map((_, i) => (
              <button
                key={i}
                onClick={() => goTo(i)}
                className={`rounded-full transition-all duration-300 ${
                  i === current
                    ? 'w-8 h-2 bg-gold'
                    : 'w-2 h-2 bg-border hover:bg-gold/40'
                }`}
                aria-label={`Ir para slide ${i + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
