import type { MetadataRoute } from 'next'
import { clinic } from '@/lib/clinic'

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: clinic.site,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 1,
    },
  ]
}
