'use client'

import { useEffect } from 'react'

/**
 * Drives a continuous, scroll-linked background shade on the <html> element —
 * the colour glides between these dark, on-brand stops as the page scrolls,
 * with no hard borders between sections (the infiniah.tech effect).
 */
const STOPS: [number, number, number][] = [
  [8, 12, 17], // #080C11 — night
  [12, 26, 38], // #0C1A26 — forest blue
  [13, 31, 28], // #0D1F1C — deep green
  [26, 20, 12], // #1A140C — warm dark (gold undertone)
  [9, 13, 18], // #090D12 — back to night
]

export default function ScrollBackground() {
  useEffect(() => {
    const root = document.documentElement

    // Respect reduced-motion: hold a single mid shade, no scroll listener.
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      root.style.backgroundColor = 'rgb(11, 22, 32)'
      return
    }

    let raf = 0

    const paint = () => {
      raf = 0
      const max = root.scrollHeight - window.innerHeight
      const f = max > 0 ? Math.min(Math.max(window.scrollY / max, 0), 1) : 0
      const seg = f * (STOPS.length - 1)
      const i = Math.floor(seg)
      const t = seg - i
      const a = STOPS[i]
      const b = STOPS[Math.min(i + 1, STOPS.length - 1)]
      const c = a.map((v, k) => Math.round(v + (b[k] - v) * t))
      root.style.backgroundColor = `rgb(${c[0]}, ${c[1]}, ${c[2]})`
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

  return null
}
