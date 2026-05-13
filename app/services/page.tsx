// app/services/page.tsx — Services Hub
// Server Component. Hero → linked service cards → differentiators → CTA.

import type { Metadata } from 'next'
import { servicesPage } from '@/content/pages'
import Hero from '@/components/sections/Hero'
import ServicesGrid, { type ServiceCardItem } from '@/components/sections/ServicesGrid'
import FeaturesListSection from '@/components/sections/FeaturesListSection'
import CTASection from '@/components/sections/CTASection'

// ── Service href map ─────────────────────────────────────────

const SERVICE_HREFS: Record<string, string> = {
  'Cox Flexion-Distraction':  '/services/cox-flexion-distraction',
  'Chiropractic Adjustments': '/services/chiropractic-adjustments',
  'Summits of Recovery':      '/services/summits-of-recovery',
}

// ── Metadata ─────────────────────────────────────────────────

export function generateMetadata(): Metadata {
  const { meta } = servicesPage
  return {
    title:       { absolute: meta.title },
    description: meta.description,
    keywords:    meta.keywords.join(', '),
    alternates:  { canonical: meta.canonicalPath },
    openGraph: {
      title:       meta.title,
      description: meta.description,
      type:        'website',
    },
  }
}

// ── Page ─────────────────────────────────────────────────────

export default function ServicesHubPage() {
  const { hero, services, featuresList, cta } = servicesPage

  const linkedServices: ServiceCardItem[] = services.items.map((item) => ({
    ...item,
    href: SERVICE_HREFS[item.title],
  }))

  return (
    <>
      <Hero data={hero} eyebrow="Our Services" />

      <ServicesGrid
        headline={services.headline}
        subheadline={services.subheadline}
        items={linkedServices}
        scheme={services.scheme}
        columns={3}
      />

      <FeaturesListSection {...featuresList} />

      <CTASection data={cta} />
    </>
  )
}
