'use client'

import { useState, useEffect, useCallback } from 'react'
import Image from 'next/image'
import Reveal from './Reveal'

const slides = [
  '/clinica/1.jpeg',
  '/clinica/2.jpeg',
  '/clinica/3.jpeg',
  '/clinica/4.jpeg',
  '/clinica/5.jpeg',
  '/clinica/6.jpeg',
  '/clinica/7.jpeg',
  '/clinica/8.jpeg',
  '/clinica/9.jpeg',
  '/clinica/10.jpeg',
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
    <section className="py-20 md:py-44 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <Reveal className="max-w-xl mb-14 mx-auto text-center">
          <p className="flex items-center justify-center gap-3 text-gold/80 text-xs font-medium tracking-[0.25em] uppercase mb-5">
            <span className="h-px w-8 bg-gold/40" />
            Nossa clínica
          </p>
          <h2 className="font-display text-white text-4xl md:text-5xl lg:text-6xl font-light leading-[1.08]">
            Um espaço pensado para você.
          </h2>
        </Reveal>
      </div>

      {/* Carousel */}
      <div className="relative">
        <div className="max-w-7xl mx-auto px-6">
          <div className="relative h-[460px] md:h-[560px] rounded-2xl overflow-hidden">
            {slides.map((src, i) => (
              <div
                key={i}
                className={`absolute inset-0 transition-all duration-1000 ease-out ${
                  i === current ? 'opacity-100 scale-100' : 'opacity-0 scale-105'
                }`}
              >
                <Image
                  src={src}
                  alt={`Clínica Forza — ambiente ${i + 1}`}
                  fill
                  sizes="(max-width: 1280px) 100vw, 1280px"
                  className="object-cover"
                  priority={i === 0}
                />
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
