'use client'

import { useEffect, useRef, useState, type ReactNode } from 'react'

type RevealProps = {
  children: ReactNode
  className?: string
  /** Direction the element travels in from. Defaults to "up". */
  variant?: 'up' | 'left' | 'right' | 'scale'
  /** Delay in milliseconds — useful for staggering siblings. */
  delay?: number
}

const variantClass = {
  up: '',
  left: 'reveal-left',
  right: 'reveal-right',
  scale: 'reveal-scale',
} as const

export default function Reveal({
  children,
  className = '',
  variant = 'up',
  delay = 0,
}: RevealProps) {
  const ref = useRef<HTMLDivElement>(null)
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const node = ref.current
    if (!node) return

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setVisible(true)
            observer.unobserve(entry.target)
          }
        })
      },
      { threshold: 0.15, rootMargin: '0px 0px -10% 0px' }
    )

    observer.observe(node)
    return () => observer.disconnect()
  }, [])

  return (
    <div
      ref={ref}
      className={`reveal ${variantClass[variant]} ${visible ? 'is-visible' : ''} ${className}`}
      style={delay ? { transitionDelay: `${delay}ms` } : undefined}
    >
      {children}
    </div>
  )
}
