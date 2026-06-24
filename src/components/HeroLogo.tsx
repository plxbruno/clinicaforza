'use client'

import { useEffect, useRef } from 'react'
import Image from 'next/image'

/**
 * Clínica Forza logo pinned to the top of the page (fixed), shown above the hero.
 * It fades out as the user scrolls down and fades back in on the way up — no movement.
 * Separate from the navbar, which keeps its own logo.
 */
export default function HeroLogo() {
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const el = ref.current
    if (!el) return

    let raf = 0
    const paint = () => {
      raf = 0
      const threshold = window.innerHeight * 0.4
      const o = Math.max(0, 1 - window.scrollY / threshold)
      el.style.opacity = String(o)
      el.style.pointerEvents = o < 0.05 ? 'none' : 'auto'
    }

    const onScroll = () => {
      if (!raf) raf = requestAnimationFrame(paint)
    }

    paint()
    window.addEventListener('scroll', onScroll, { passive: true })
    window.addEventListener('resize', onScroll)
    return () => {
      window.removeEventListener('scroll', onScroll)
      window.removeEventListener('resize', onScroll)
      if (raf) cancelAnimationFrame(raf)
    }
  }, [])

  return (
    <div
      ref={ref}
      className="fixed top-6 md:top-8 left-1/2 -translate-x-1/2 z-40"
    >
      <a href="#hero" aria-label="Clínica Forza">
        <Image
          src="/logo.svg"
          alt="Clínica Forza"
          width={160}
          height={64}
          priority
          className="h-10 md:h-12 w-auto object-contain brightness-0 invert"
        />
      </a>
    </div>
  )
}
