'use client'

import { useState, useEffect } from 'react'
import Image from 'next/image'

export default function Header() {
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? 'bg-forest shadow-lg py-3' : 'bg-transparent py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
        <a href="#hero" className="flex items-center gap-3">
          <Image
            src="/logo.svg"
            alt="Clínica Forza"
            width={116}
            height={46}
            className="h-[37px] w-auto object-contain brightness-0 invert"
            priority
          />
        </a>

        <a
          href="https://wa.me/5531988930840?text=Olá.%20Quero%20agendar%20uma%20consulta."
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 bg-gold text-forest text-sm font-semibold px-5 py-2.5 rounded-full hover:bg-gold-light transition-colors duration-200"
        >
          Agendar consulta
        </a>
      </div>
    </header>
  )
}
