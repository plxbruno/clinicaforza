'use client'

import Image from 'next/image'
import { useEffect, useState } from 'react'

/** Fotos reais da clinica, em public/clinica/. */
const PHOTOS = Array.from({ length: 10 }, (_, i) => `/clinica/${i + 1}.jpeg`)

const HOLD_MS = 4000

export default function HeroSlideshow() {
  const [active, setActive] = useState(0)

  useEffect(() => {
    // Quem pediu menos movimento fica na primeira foto, sem troca e sem Ken Burns.
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return

    // Updater funcional: o intervalo e registrado uma unica vez e nao se recria
    // a cada troca de slide (era o bug do carrossel antigo).
    const id = setInterval(
      () => setActive((i) => (i + 1) % PHOTOS.length),
      HOLD_MS
    )
    return () => clearInterval(id)
  }, [])

  return (
    <div aria-hidden className="absolute inset-0 overflow-hidden bg-navy">
      {PHOTOS.map((src, i) => (
        <div
          key={src}
          className={`hero-slide absolute inset-0 transition-opacity duration-[1400ms] ease-in-out ${
            i === active ? 'opacity-100' : 'opacity-0'
          }`}
        >
          <Image
            src={src}
            alt=""
            fill
            sizes="100vw"
            priority={i === 0}
            loading={i === 0 ? 'eager' : 'lazy'}
            className="object-cover animate-ken-burns"
          />
        </div>
      ))}

      {/* Escurece o suficiente para o texto branco passar em AA sobre qualquer foto */}
      <div className="absolute inset-0 bg-gradient-to-b from-navy/85 via-navy/70 to-navy/90" />
    </div>
  )
}
