// app/page.tsx — Home page
// Sections with ✅ are fully built. Sections with 🔲 are placeholders
// showing the correct background colour and rhythm until built.

import type { Metadata } from 'next'
import Hero from '@/components/sections/Hero'
import ConditionsGrid from '@/components/sections/ConditionsGrid'
import DemographicTabBar from '@/components/sections/DemographicTabBar'
import ServicesGrid from '@/components/sections/ServicesGrid'
import FeaturesListSection from '@/components/sections/FeaturesListSection'
import BenefitsSection from '@/components/sections/BenefitsSection'
import TeamSection from '@/components/sections/TeamSection'
import TestimonialsSection from '@/components/sections/TestimonialsSection'
import FAQSection from '@/components/sections/FAQSection'
import CTASection from '@/components/sections/CTASection'
import WhySummitSection from '@/components/sections/WhySummitSection'
import { homePage } from '@/content/pages'

// ── Metadata ─────────────────────────────────────────────────

export function generateMetadata(): Metadata {
  const { meta } = homePage
  return {
    title:       meta.title,
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

// ── Service items — hrefs added at page level ─────────────────
// homePage.services.items are FeatureItem[] (no href field).
// ServicesGrid expects ServiceCardItem[] which adds optional href.

const SERVICE_HREFS = [
  '/services/cox-flexion-distraction',
  '/services/chiropractic-adjustments',
  '/services/summits-of-recovery/targeted-exercise',
  '/services/summits-of-recovery/ergonomic-support',
] as const

const serviceItems = homePage.services.items.map((item, i) => ({
  ...item,
  href: SERVICE_HREFS[i],
}))

// ── Page ─────────────────────────────────────────────────────

export default function HomePage() {
  return (
    <main>

      {/* ✅ Hero — scheme 4 (dark) */}
      <Hero
        data={homePage.hero}
        eyebrow="Airdrie's Spine Specialists"
        statsBar={homePage.stats.items}
        scrollFade="bg-neutral-100"
      />

      {/* ✅ Why Summit — scheme 2 (light grey) */}
      <WhySummitSection data={homePage.whySummit} />

      {/* ✅ Conditions bar — scheme 1 (white) — photo pill mode */}
      <ConditionsGrid
        headline={homePage.conditionsBar.headline}
        conditions={homePage.conditionsBar.conditions}
        scheme={1}
        columns={3}
        pillMode
      />

      {/* ✅ Who we help — scheme 1 (white) */}
      <DemographicTabBar data={homePage.demographicTabBar} />

      {/* ✅ Services — scheme 2 (grey) */}
      <ServicesGrid
        headline={homePage.services.headline}
        subheadline={homePage.services.subheadline}
        items={serviceItems}
        scheme={homePage.services.scheme}
        columns={2}
      />

      {/* ✅ Why us — scheme 1 (white) */}
      <FeaturesListSection
        headline={homePage.featuresList.headline}
        items={homePage.featuresList.items}
        scheme={homePage.featuresList.scheme}
        columns={3}
      />

      {/* ✅ Benefits — scheme 4 (dark) */}
      <BenefitsSection data={homePage.benefits} />

      {/* ✅ Team — scheme 1 (white) — renders when members populated */}
      <TeamSection data={homePage.team} />

      {/* ✅ Testimonials — scheme 3 (hemlock light) — renders when items populated */}
      <TestimonialsSection data={homePage.testimonials} />

      {/* ✅ FAQ — scheme 2 (grey) */}
      <FAQSection data={homePage.faqs} />

      {/* ✅ CTASection — scheme 4 (dark) */}
      <CTASection data={homePage.cta} />


    </main>
  )
}
