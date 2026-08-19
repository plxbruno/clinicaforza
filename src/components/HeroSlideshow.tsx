'use client'

import Image from 'next/image'
import { useEffect, useState } from 'react'

/** Fotos reais da clinica, em public/clinica/. */
const PHOTOS = Array.from({ length: 10 }, (_, i) => `/clinica/${i + 1}.jpeg`)

const HOLD_MS = 4000

export default function HeroSlideshow() {
  const [active, setActive] = useState(0)

  /**
   * Quantos slides ja foram montados no DOM. Comeca em 1 de proposito.
   *
   * Antes os 10 <Image> eram renderizados de uma vez. Como todos ficam em
   * `absolute inset-0`, ou seja dentro da viewport, o loading="lazy" nao
   * adiava nada — o navegador baixava as 10 fotos no primeiro paint e
   * competia com o LCP do proprio hero. Agora cada foto so entra no DOM
   * pouco antes de aparecer.
   */
  const [mounted, setMounted] = useState(1)

  useEffect(() => {
    // Quem pediu menos movimento fica na primeira foto, sem troca e sem Ken Burns.
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return

    // Updater funcional: o intervalo e registrado uma unica vez e nao se recria
    // a cada troca de slide (era o bug do carrossel antigo).
    const id = setInterval(() => {
      setActive((i) => {
        const next = (i + 1) % PHOTOS.length
        // Monta um slide de vantagem, para a proxima foto ja estar decodificada
        // quando o cross-fade comecar.
        setMounted((n) => Math.max(n, next + 2))
        return next
      })
    }, HOLD_MS)
    return () => clearInterval(id)
  }, [])

  return (
    <div aria-hidden className="absolute inset-0 overflow-hidden bg-navy">
      {PHOTOS.slice(0, mounted).map((src, i) => (
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
            // A primeira foto e o elemento LCP. `priority` foi depreciado no
            // Next 16 — a recomendacao agora e eager + fetchPriority alto.
            loading={i === 0 ? 'eager' : 'lazy'}
            fetchPriority={i === 0 ? 'high' : 'auto'}
            className="object-cover animate-ken-burns"
          />
        </div>
      ))}

      {/* Escurece o suficiente para o texto branco passar em AA sobre qualquer foto */}
      <div className="absolute inset-0 bg-gradient-to-b from-navy/85 via-navy/70 to-navy/90" />
    </div>
  )
}
