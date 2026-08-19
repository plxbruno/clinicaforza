import type { MetadataRoute } from 'next'
import { clinic } from '@/lib/clinic'
import { faqLastReviewed } from '@/lib/faq'

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: clinic.site,
      // Data fixa, nao `new Date()`. Com `new Date()` o lastmod mudava a cada
      // deploy sem o conteudo mudar — o Google aprende a ignorar o campo.
      // Atualizar junto com uma mudanca real de conteudo da home.
      lastModified: faqLastReviewed,
      changeFrequency: 'monthly',
      priority: 1,
    },
  ]
}
