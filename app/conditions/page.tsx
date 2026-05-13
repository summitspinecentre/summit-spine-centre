// app/conditions/page.tsx — Conditions Hub
// Server Component. Hero → conditions grid → education callout → FAQs → CTA.

import type { Metadata } from 'next'
import { conditionsPage } from '@/content/pages'
import { conditionEntries } from '@/content/sitemap'
import Hero from '@/components/sections/Hero'
import ConditionsGrid from '@/components/sections/ConditionsGrid'
import FAQSection from '@/components/sections/FAQSection'
import CTASection from '@/components/sections/CTASection'
import { cn } from '@/lib/utils'

// ── Metadata ─────────────────────────────────────────────────

export function generateMetadata(): Metadata {
  const { meta } = conditionsPage
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

export default function ConditionsHubPage() {
  const { hero, conditionsList, educationFeature, faqs, cta } = conditionsPage

  const conditionCards = conditionEntries.map((entry) => ({
    label: entry.title,
    slug:  entry.slug,
  }))

  return (
    <>
      <Hero data={hero} eyebrow="Conditions Treated" />

      <ConditionsGrid
        headline={conditionsList.headline}
        subheadline={conditionsList.subheadline}
        conditions={conditionCards}
        scheme={conditionsList.scheme}
        columns={4}
      />

      {/* Education callout — prose section explaining the diagnostic approach */}
      <section
        aria-label={educationFeature.title}
        className="bg-neutral-100 py-section lg:py-section-lg"
      >
        <div className="mx-auto w-full max-w-screen-xl px-6 md:px-12 lg:px-20">
          <div className="mx-auto max-w-3xl">
            <h2
              className={cn(
                'mb-6 font-heading font-bold leading-tight tracking-tighter',
                'text-3xl md:text-4xl lg:text-h2',
                'text-eerie-black',
              )}
            >
              {educationFeature.title}
            </h2>
            {educationFeature.body.split('\n\n').map((paragraph, i) => (
              <p key={i} className="mt-4 text-base leading-relaxed text-text-body md:text-lg">
                {paragraph}
              </p>
            ))}
          </div>
        </div>
      </section>

      {faqs && faqs.items.length > 0 && <FAQSection data={faqs} />}

      <CTASection data={cta} />
    </>
  )
}
