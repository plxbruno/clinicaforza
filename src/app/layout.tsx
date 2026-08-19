import type { Metadata, Viewport } from 'next'
import { Jost, Geist } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import { SpeedInsights } from '@vercel/speed-insights/next'
import { brl, clinic, plan } from '@/lib/clinic'
import './globals.css'

// Jost para display, Geist para corpo. Ambas variaveis — sem pesos explicitos.
const jost = Jost({
  subsets: ['latin'],
  variable: '--font-jost',
  display: 'swap',
})

const geist = Geist({
  subsets: ['latin'],
  variable: '--font-geist',
  display: 'swap',
})

// O titulo da home e absoluto de proposito: um sufixo de marca empurraria
// o "R$ 599" para fora do corte de ~60 caracteres no resultado de busca.
// Vindo de ee7155d. Atencao: maximumScale/userScalable bloqueiam o pinch-zoom
// e reprovam o criterio 1.4.4 da WCAG (e o audit de acessibilidade do Lighthouse).
export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 1,
  userScalable: false,
}

export const metadata: Metadata = {
  metadataBase: new URL(clinic.site),
  title: {
    absolute: `Emagrecimento em Belo Horizonte | Tirzepatida R$ ${brl(plan.firstMonth)}`,
    template: `%s | ${clinic.name}`,
  },
  description: `Plano de emagrecimento com tirzepatida inclusa: R$ ${brl(plan.firstMonth)} no 1º mês. Acompanhamento médico com ${clinic.doctor.name} na Savassi, Belo Horizonte.`,
  keywords: [
    'emagrecimento Belo Horizonte',
    'clínica de emagrecimento BH',
    'tirzepatida Belo Horizonte',
    'Mounjaro BH',
    'tratamento para obesidade BH',
    'emagrecimento Savassi',
    'médico emagrecimento Belo Horizonte',
    'Dr. Bruno Galdino',
    'Clínica Forza',
  ],
  applicationName: clinic.name,
  authors: [{ name: clinic.doctor.name }],
  alternates: { canonical: '/' },
  openGraph: {
    type: 'website',
    locale: 'pt_BR',
    url: clinic.site,
    siteName: clinic.name,
    title: `Emagrecimento em Belo Horizonte | Tirzepatida R$ ${brl(plan.firstMonth)}`,
    description: `Plano com tirzepatida inclusa e acompanhamento médico: R$ ${brl(plan.firstMonth)} no 1º mês, na Savassi.`,
  },
  twitter: {
    card: 'summary_large_image',
    title: `Emagrecimento em Belo Horizonte | Tirzepatida R$ ${brl(plan.firstMonth)}`,
    description: `Plano com tirzepatida inclusa e acompanhamento médico: R$ ${brl(plan.firstMonth)} no 1º mês, na Savassi.`,
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-snippet': -1,
      'max-image-preview': 'large',
      'max-video-preview': -1,
    },
  },
}

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'MedicalClinic',
  '@id': `${clinic.site}/#clinica`,
  name: clinic.name,
  url: clinic.site,
  description: `Clínica médica especializada em emagrecimento, performance e longevidade em ${clinic.address.city}.`,
  image: `${clinic.site}/opengraph-image`,
  priceRange: `R$ ${brl(plan.firstMonth)} - R$ ${brl(plan.nextMonths)}`,
  address: {
    '@type': 'PostalAddress',
    streetAddress: `${clinic.address.street}, ${clinic.address.unit}`,
    addressLocality: clinic.address.city,
    addressRegion: clinic.address.state,
    addressCountry: clinic.address.country,
  },
  geo: {
    '@type': 'GeoCoordinates',
    latitude: clinic.geo.lat,
    longitude: clinic.geo.lng,
  },
  hasMap: clinic.mapsUrl,
  areaServed: {
    '@type': 'City',
    name: clinic.address.city,
  },
  medicalSpecialty: ['Nutrition', 'PrimaryCare'],
  sameAs: [
    `https://instagram.com/${clinic.instagram.clinic}`,
    `https://instagram.com/${clinic.instagram.doctor}`,
  ],
  employee: {
    '@type': 'Physician',
    name: clinic.doctor.name,
    identifier: clinic.doctor.crm,
    ...(clinic.doctor.photo && { image: `${clinic.site}${clinic.doctor.photo}` }),
    medicalSpecialty: ['Nutrition', 'PrimaryCare'],
    areaServed: { '@type': 'City', name: clinic.address.city },
  },
  makesOffer: {
    '@type': 'Offer',
    name: `${plan.name} — 1º mês`,
    description: `Acompanhamento médico de ${plan.months} meses com tirzepatida inclusa, bioimpedância e monitoramento semanal. R$ ${brl(plan.firstMonth)} no primeiro mês e 2× R$ ${brl(plan.nextMonths)}.`,
    price: plan.firstMonth,
    priceCurrency: 'BRL',
    availability: 'https://schema.org/InStock',
    areaServed: { '@type': 'City', name: clinic.address.city },
    itemOffered: {
      '@type': 'MedicalTherapy',
      name: plan.name,
    },
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="pt-BR" className={`${jost.variable} ${geist.variable}`}>
      <body className="min-h-screen flex flex-col antialiased">
        {children}
        <script
          type="application/ld+json"
          // Dados estaticos vindos de src/lib/clinic.ts — nao ha entrada de usuario aqui.
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  )
}
