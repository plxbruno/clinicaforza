'use client'

import { useEffect, useState } from 'react'
import Logo from './Logo'
import { testimonials } from '@/lib/testimonials'
import WhatsAppLink from './WhatsAppLink'

// Depoimentos so entra quando ha depoimentos cadastrados — senao o link
// apontaria para uma ancora que nao existe no HTML.
const LINKS = [
  { href: '#plano', label: 'Plano' },
  { href: '#tratamentos', label: 'Tratamentos' },
  { href: '#sobre', label: 'Dr. Bruno' },
  ...(testimonials.length > 0
    ? [{ href: '#depoimentos', label: 'Depoimentos' }]
    : []),
  { href: '#duvidas', label: 'Dúvidas' },
  { href: '#localizacao', label: 'Localização' },
]

export default function Header() {
  // `solid` = ja saiu do hero, o header vira branco com sombra.
  const [solid, setSolid] = useState(false)

  useEffect(() => {
    let raf = 0

    const compute = () => {
      raf = 0
      setSolid(window.scrollY > window.innerHeight * 0.75)
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
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        solid
          ? // No celular a navbar sai de cena depois do hero — o botao flutuante
            // do WhatsApp assume o papel de CTA e a tela fica livre para o conteudo.
            'bg-paper/95 backdrop-blur-md border-b border-line shadow-sm max-md:pointer-events-none max-md:-translate-y-full max-md:opacity-0'
          : 'bg-transparent border-b border-transparent translate-y-0 opacity-100'
      }`}
    >
      <div className="max-w-6xl mx-auto px-6 h-16 md:h-20 flex items-center justify-between gap-6">
        <a
          href="#top"
          aria-label="Clínica Forza — início"
          className={`-m-2 p-2 transition-colors duration-300 ${
            solid ? 'text-navy' : 'text-white'
          }`}
        >
          <Logo className="h-6 md:h-7 w-auto" />
        </a>

        <nav className="hidden md:flex items-center gap-8">
          {LINKS.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className={`text-sm transition-colors duration-200 ${
                solid
                  ? 'text-ink-soft hover:text-navy'
                  : 'text-white/75 hover:text-white'
              }`}
            >
              {link.label}
            </a>
          ))}
        </nav>

        <WhatsAppLink
          source="header"
          className={`shrink-0 rounded-full px-5 py-3 text-sm font-semibold transition-all duration-200 hover:scale-[1.03] ${
            solid
              ? 'bg-navy text-white hover:bg-gold hover:text-navy'
              : 'bg-gold text-navy hover:bg-white'
          }`}
        >
          Agendar
        </WhatsAppLink>
      </div>
    </header>
  )
}
