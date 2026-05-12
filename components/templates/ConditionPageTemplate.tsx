import { CheckCircle2 } from 'lucide-react'
import Link from 'next/link'
import { cn } from '@/lib/utils'
import type { ConditionPage } from '@/types/content'
import { conditionPages } from '@/content/pages'
import Hero from '@/components/sections/Hero'
import FeaturesListSection from '@/components/sections/FeaturesListSection'
import BenefitsSection from '@/components/sections/BenefitsSection'
import HowItWorksSection from '@/components/sections/HowItWorksSection'
import TestimonialsSection from '@/components/sections/TestimonialsSection'
import FAQSection from '@/components/sections/FAQSection'
import CTASection from '@/components/sections/CTASection'

interface ConditionPageTemplateProps {
  data: ConditionPage
}

// Splits "Label — description" cause strings into their parts.
// Returns { label, desc } when a separator is present, else { label: null, desc: full string }.
function parseCause(raw: string): { label: string | null; desc: string } {
  const idx = raw.indexOf(' — ')
  if (idx === -1) return { label: null, desc: raw }
  return { label: raw.slice(0, idx), desc: raw.slice(idx + 3) }
}

export default function ConditionPageTemplate({ data }: ConditionPageTemplateProps) {
  const {
    hero, overview, symptoms, causes, treatments,
    benefits, howItWorks, testimonials, faqs, cta,
    relatedConditions,
  } = data

  const hasSymptoms = symptoms && symptoms.length > 0
  const hasCauses   = causes   && causes.length   > 0
  const hasRelated  = relatedConditions && relatedConditions.length > 0

  return (
    <>

      {/* ── Hero ───────────────────────────────────────────── */}
      <Hero data={hero} />

      {/* ── Overview ───────────────────────────────────────── */}
      {overview && (
        <section
          aria-label="About this condition"
          className="bg-neutral-100 py-section lg:py-section-lg"
        >
          <div className="mx-auto max-w-screen-xl px-6 md:px-12 lg:px-20">
            <div className="mx-auto max-w-3xl">
              <p className="text-lg leading-relaxed text-text-muted md:text-xl">
                {overview}
              </p>
            </div>
          </div>
        </section>
      )}

      {/* ── Symptoms + Causes ──────────────────────────────── */}
      {(hasSymptoms || hasCauses) && (
        <section
          aria-label="Symptoms and causes"
          className="bg-neutral-0 py-section lg:py-section-lg"
        >
          <div className="mx-auto max-w-screen-xl px-6 md:px-12 lg:px-20">
            <div className={cn(
              'grid gap-12',
              hasSymptoms && hasCauses ? 'lg:grid-cols-2 lg:gap-16' : 'max-w-2xl',
            )}>

              {hasSymptoms && (
                <div>
                  <h2 className="mb-6 font-heading text-3xl font-bold leading-tight tracking-tight text-eerie-black md:text-h3">
                    Common Symptoms
                  </h2>
                  <ul role="list" className="space-y-3">
                    {symptoms!.map((s) => (
                      <li key={s} className="flex gap-3">
                        <CheckCircle2
                          size={20}
                          strokeWidth={1.75}
                          aria-hidden="true"
                          className="mt-0.5 flex-shrink-0 text-hemlock-500"
                        />
                        <span className="text-base leading-relaxed text-text-muted">
                          {s}
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              {hasCauses && (
                <div>
                  <h2 className="mb-6 font-heading text-3xl font-bold leading-tight tracking-tight text-eerie-black md:text-h3">
                    Common Causes
                  </h2>
                  <ul role="list" className="space-y-4">
                    {causes!.map((c, i) => {
                      const { label, desc } = parseCause(c)
                      return (
                        <li key={i} className="flex gap-3">
                          <span
                            aria-hidden="true"
                            className="mt-0.5 flex h-6 w-6 flex-shrink-0 items-center justify-center rounded-full bg-hemlock-50 text-xs font-bold text-hemlock-500"
                          >
                            {i + 1}
                          </span>
                          <span className="text-base leading-relaxed text-text-muted">
                            {label
                              ? <><strong className="font-semibold text-eerie-black">{label}</strong> — {desc}</>
                              : desc
                            }
                          </span>
                        </li>
                      )
                    })}
                  </ul>
                </div>
              )}

            </div>
          </div>
        </section>
      )}

      {/* ── Treatments ─────────────────────────────────────── */}
      <FeaturesListSection
        headline={treatments.headline}
        subheadline={treatments.subheadline}
        items={treatments.items}
        scheme={treatments.scheme}
        columns={treatments.items.length <= 2 ? 2 : 3}
      />

      {/* ── Benefits ───────────────────────────────────────── */}
      <BenefitsSection data={benefits} />

      {/* ── How It Works (optional) ────────────────────────── */}
      {howItWorks && <HowItWorksSection data={howItWorks} />}

      {/* ── Testimonials (optional) ────────────────────────── */}
      {testimonials && <TestimonialsSection data={testimonials} />}

      {/* ── Related Conditions (optional) ──────────────────── */}
      {hasRelated && (
        <section
          aria-label="Related conditions"
          className="bg-neutral-100 py-section lg:py-section-lg"
        >
          <div className="mx-auto max-w-screen-xl px-6 md:px-12 lg:px-20">
            <h2 className="mb-8 font-heading text-3xl font-bold leading-tight tracking-tight text-eerie-black md:text-h3">
              Related Conditions
            </h2>
            <ul role="list" className="flex flex-wrap gap-3">
              {relatedConditions!.map((slug) => {
                const page = conditionPages[slug]
                if (!page?.meta.published) return null
                return (
                  <li key={slug}>
                    <Link
                      href={`/conditions/${slug}`}
                      className="inline-flex items-center rounded-md border border-dun bg-neutral-0 px-4 py-2 text-sm font-medium text-eerie-black transition-colors duration-150 hover:border-hemlock-400 hover:bg-hemlock-50 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2"
                    >
                      {page.meta.title.split(' | ')[0].replace(' Airdrie', '')}
                    </Link>
                  </li>
                )
              })}
            </ul>
          </div>
        </section>
      )}

      {/* ── FAQs (optional) ────────────────────────────────── */}
      {faqs && <FAQSection data={faqs} />}

      {/* ── CTA ────────────────────────────────────────────── */}
      <CTASection data={cta} />

    </>
  )
}
