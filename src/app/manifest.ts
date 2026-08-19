import type { MetadataRoute } from 'next'
import { clinic } from '@/lib/clinic'

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: `${clinic.name} — Emagrecimento em ${clinic.address.city}`,
    short_name: clinic.name,
    description: `Clínica médica especializada em emagrecimento, performance e longevidade na ${clinic.address.district}, ${clinic.address.city}.`,
    start_url: '/',
    display: 'standalone',
    lang: 'pt-BR',
    background_color: '#0D1B2A',
    theme_color: '#0D1B2A',
    icons: [
      { src: '/icon.svg', sizes: 'any', type: 'image/svg+xml' },
      { src: '/favicon.ico', sizes: 'any', type: 'image/x-icon' },
    ],
  }
}
