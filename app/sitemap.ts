import type { MetadataRoute } from 'next'
import { sitemapXmlEntries } from '@/content/sitemap'

const BASE_URL = process.env.NEXT_PUBLIC_SITE_URL ?? 'https://summitspine.ca'

export default function sitemap(): MetadataRoute.Sitemap {
  return sitemapXmlEntries.map((entry) => ({
    url:             `${BASE_URL}${entry.url}`,
    lastModified:    new Date(),
    changeFrequency: entry.changefreq,
    priority:        parseFloat(entry.priority),
  }))
}
