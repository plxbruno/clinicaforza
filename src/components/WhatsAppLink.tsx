'use client'

import { track } from '@vercel/analytics'
import type { ReactNode } from 'react'
import { whatsappUrl } from '@/lib/clinic'

type Props = {
  /** De qual CTA veio o clique — vira rotulo no analytics e utm_campaign. */
  source: string
  children: ReactNode
  className?: string
  'aria-label'?: string
}

/**
 * Todo CTA de WhatsApp do site passa por aqui: um unico numero (clinic.whatsapp)
 * e um evento de conversao por clique.
 */
export default function WhatsAppLink({
  source,
  children,
  className,
  ...rest
}: Props) {
  return (
    <a
      href={whatsappUrl(source)}
      target="_blank"
      rel="noopener noreferrer"
      className={className}
      onClick={() => track('whatsapp_click', { source })}
      {...rest}
    >
      {children}
    </a>
  )
}
