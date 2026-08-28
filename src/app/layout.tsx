import type { Metadata, Viewport } from 'next'
import { Jost, Geist } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import { SpeedInsights } from '@vercel/speed-insights/next'
import { clinic, homeTitle } from '@/lib/clinic'
import { homeJsonLd } from '@/lib/schema'
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

// O titulo da home e absoluto de proposito, e mora em `homeTitle`
// (src/lib/clinic.ts) junto com a explicacao do limite de 60 caracteres.
//
// maximumScale/userScalable sairam daqui (estavam desde ee7155d): bloqueavam
// o pinch-zoom, o que reprova o criterio 1.4.4 da WCAG e derruba o audit de
// acessibilidade do Lighthouse. Nao readicionar — zoom acidental no mobile
// incomoda menos do que impedir alguem de ler a pagina.
export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  themeColor: '#0D1B2A',
}

export const metadata: Metadata = {
  metadataBase: new URL(clinic.site),
  title: {
    absolute: homeTitle,
    template: `%s | ${clinic.name}`,
  },
  description: `Clínica de nutrologia e emagrecimento na Savassi, em Belo Horizonte. Avaliação com bioimpedância e acompanhamento médico contínuo com ${clinic.doctor.name}.`,
  keywords: [
    'nutrologia Belo Horizonte',
    'clínica de nutrologia BH',
    'nutrologia Savassi',
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
  // Verificacao de propriedade do Google Search Console. Nao e segredo: a
  // meta tag e publica por design, e so serve para provar a posse do dominio.
  // Nao remover — se sair, a propriedade no Search Console desverifica.
  verification: {
    google: 'dm9R1pbV27hRU9YaCXxbUSX8HVsPgenQjZSh1rV_5o8',
  },
  openGraph: {
    type: 'website',
    locale: 'pt_BR',
    url: clinic.site,
    siteName: clinic.name,
    title: homeTitle,
    description: 'Nutrologia e emagrecimento na Savassi, em Belo Horizonte. Avaliação com bioimpedância e acompanhamento médico contínuo.',
  },
  twitter: {
    card: 'summary_large_image',
    title: homeTitle,
    description: 'Nutrologia e emagrecimento na Savassi, em Belo Horizonte. Avaliação com bioimpedância e acompanhamento médico contínuo.',
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
          // Dados estaticos vindos de src/lib/schema.ts — nao ha entrada de usuario aqui.
          dangerouslySetInnerHTML={{ __html: JSON.stringify(homeJsonLd) }}
        />
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  )
}
