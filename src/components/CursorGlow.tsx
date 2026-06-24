'use client'

import { useEffect, useRef } from 'react'

/**
 * A soft radial glow that follows the cursor on desktop (pointer: fine),
 * mirroring the infiniah.tech spotlight. Disabled on touch devices.
 */
export default function CursorGlow() {
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const el = ref.current
    if (!el) return
    if (!window.matchMedia('(pointer: fine)').matches) return

    let raf = 0
    let x = window.innerWidth / 2
    let y = window.innerHeight / 2

    const paint = () => {
      raf = 0
      el.style.setProperty('--mx', `${x}px`)
      el.style.setProperty('--my', `${y}px`)
    }

    const onMove = (e: MouseEvent) => {
      x = e.clientX
      y = e.clientY
      if (!raf) raf = requestAnimationFrame(paint)
    }

    paint()
    el.style.opacity = '1'
    window.addEventListener('mousemove', onMove, { passive: true })
    return () => {
      window.removeEventListener('mousemove', onMove)
      if (raf) cancelAnimationFrame(raf)
    }
  }, [])

  return <div ref={ref} aria-hidden className="cursor-glow" />
}
