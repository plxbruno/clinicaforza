'use client'

import { useState, useEffect } from 'react'
import Image from 'next/image'

type NavState = 'hero' | 'nav' | 'hidden'

const WHATSAPP =
  'https://wa.me/5531983239199?text=Olá.%20Quero%20agendar%20uma%20consulta%20com%20o%20Dr.%20Bruno.'

export default function Header() {
  const [state, setState] = useState<NavState>('hero')

  useEffect(() => {
    let raf = 0

    const compute = () => {
      raf = 0
      const winH = window.innerHeight
      const cta = document.getElementById('hero-cta')
      const contact = document.getElementById('contato')

      // At the top while the hero's "Agendar consulta" button is still on screen.
      const atTop = cta
        ? cta.getBoundingClientRect().bottom > 8
        : window.scrollY < winH * 0.5

      // Reached the "Atendimento" section once its top crosses the middle of the viewport.
      const inContact = contact
        ? contact.getBoundingClientRect().top < winH * 0.5
        : false

      setState(atTop ? 'hero' : inContact ? 'hidden' : 'nav')
    }

    const onScroll = () => {
      if (!raf) raf = requestAnimationFrame(compute)
    }

    compute()
    window.addEventListener('scroll', onScroll, { passive: true })
    window.addEventListener('resize', onScroll)
    return () => {
      window.removeEventListener('scroll', onScroll)
      window.removeEventListener('resize', onScroll)
      if (raf) cancelAnimationFrame(raf)
    }
  }, [])

  return (
    <header className="fixed top-3 md:top-5 left-0 right-0 z-50 px-3 md:px-6">
      <div className="relative max-w-3xl mx-auto h-12">
        {/* State A — centered logo, shown at the top while the hero CTA is visible */}
        <div
          className={`absolute inset-0 flex items-center justify-center transition-all duration-500 ${
            state === 'hero'
              ? 'opacity-100'
              : 'opacity-0 pointer-events-none'
          }`}
        >
          <a href="#hero" aria-label="Clínica Forza">
            <Image
              src="/logo.svg"
              alt="Clínica Forza"
              width={140}
              height={56}
              className="h-[34px] w-auto object-contain brightness-0 invert"
              priority
            />
          </a>
        </div>

        {/* State B — pill navbar, appears once scrolled past the hero, hides at the contact section */}
        <div
          className={`absolute inset-0 flex items-center justify-between gap-3 rounded-full border pl-5 pr-2 bg-forest/80 border-white/10 backdrop-blur-md shadow-lg shadow-black/20 transition-all duration-500 ${
            state === 'nav'
              ? 'opacity-100 translate-y-0'
              : 'opacity-0 pointer-events-none -translate-y-2'
          }`}
        >
          <a href="#hero" className="flex items-center gap-3" aria-label="Clínica Forza">
            <Image
              src="/logo.svg"
              alt="Clínica Forza"
              width={116}
              height={46}
              className="h-[30px] w-auto object-contain brightness-0 invert"
            />
          </a>

          <a
            href={WHATSAPP}
            target="_blank"
            rel="noopener noreferrer"
            className="group inline-flex items-center gap-2 bg-gold text-forest text-sm font-semibold px-5 py-2.5 rounded-full hover:bg-gold-light transition-colors duration-200"
          >
            Agendar
            <span className="transition-transform duration-200 group-hover:translate-x-0.5">→</span>
          </a>
        </div>
      </div>
    </header>
  )
}
