// app/about/page.tsx — About Us
// Server Component throughout. MedicalClinic JSON-LD injected in <head>.

import type { Metadata } from 'next'
import { cn } from '@/lib/utils'
import { medicalClinicSchema } from '@/lib/schema'
import { aboutPage } from '@/content/pages'
import Hero from '@/components/sections/Hero'
import TeamSection from '@/components/sections/TeamSection'
import FeaturesListSection from '@/components/sections/FeaturesListSection'
import StatsSection from '@/components/sections/StatsSection'
import TestimonialsSection from '@/components/sections/TestimonialsSection'
import CTASection from '@/components/sections/CTASection'

// ── Metadata ─────────────────────────────────────────────────

export function generateMetadata(): Metadata {
  const { meta } = aboutPage
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

export default function AboutPage() {
  const { hero, story, team, values, stats, services, testimonials, cta } = aboutPage

  return (
    <>
      {/* MedicalClinic JSON-LD */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(medicalClinicSchema()) }}
      />

      {/* Hero — two-col with pull quote panel */}
      <Hero
        data={hero}
        eyebrow="Airdrie, Alberta"
      />

      {/* Our Story */}
      <section
        aria-label="Our story"
        className="bg-neutral-0 py-section lg:py-section-lg"
      >
        <div className="mx-auto w-full max-w-screen-xl px-6 md:px-12 lg:px-20">
          <div className="mx-auto max-w-3xl">
            <h2
              className={cn(
                'mb-8 font-heading font-bold leading-tight tracking-tighter',
                'text-3xl md:text-4xl lg:text-h2',
                'text-eerie-black',
              )}
            >
              {story.headline}
            </h2>

            {story.callout && (
              <blockquote className="mb-8 border-l-4 border-cerulean bg-neutral-100 px-6 py-5 rounded-r-lg">
                <p className="font-heading text-lg font-medium italic leading-relaxed text-eerie-black md:text-xl">
                  {story.callout}
                </p>
              </blockquote>
            )}

            <div className="space-y-5">
              {story.body.split('\n\n').map((paragraph, i) => (
                <p key={i} className="text-base leading-relaxed text-text-body md:text-lg">
                  {paragraph}
                </p>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Meet the Team */}
      <TeamSection data={team} />

      {/* Values */}
      <FeaturesListSection {...values} />

      {/* Trust Bar */}
      <StatsSection
        items={stats.items}
        scheme={stats.scheme}
        headline={stats.headline}
      />

      {/* Services */}
      <FeaturesListSection {...services} />

      {/* Patient Transformation */}
      <TestimonialsSection data={testimonials} />

      {/* CTA */}
      <CTASection data={cta} />
    </>
  )
}
