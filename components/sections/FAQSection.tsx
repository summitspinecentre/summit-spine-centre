// components/sections/FAQSection.tsx
// Server Component — native <details>/<summary> accordion.
// No JS required; browser handles keyboard nav and aria-expanded.
// Default marker hidden; custom ChevronDown rotates on open via group-open:.
//
// Used on: Home (faqs, scheme 2, 3 items), condition pages (scheme 1, up to 18 items),
//          service pages, Contact, Team, Book pages

import { ChevronDown } from 'lucide-react'
import { cn } from '@/lib/utils'
import type { FAQSection as FAQSectionData, ColorScheme } from '@/types/content'
import FadeIn from '@/components/ui/FadeIn'

// ── Types ────────────────────────────────────────────────────

export interface FAQSectionProps {
  data:       FAQSectionData
  className?: string
}

// ── Scheme config ─────────────────────────────────────────────

interface SchemeTokens {
  section:   string
  headline:  string
  listBorder: string  // border-t on the dl (top cap)
  divide:    string   // divide-y colour between items
  question:  string
  answer:    string
  chevron:   string
}

const schemeMap: Record<ColorScheme, SchemeTokens> = {
  1: {
    section:    'bg-neutral-0',
    headline:   'text-eerie-black',
    listBorder: 'border-t border-hemlock-100',
    divide:     'divide-y divide-hemlock-100',
    question:   'text-eerie-black',
    answer:     'text-text-muted',
    chevron:    'text-hemlock-500',
  },
  2: {
    section:    'bg-neutral-100',
    headline:   'text-eerie-black',
    listBorder: 'border-t border-neutral-200',
    divide:     'divide-y divide-neutral-200',
    question:   'text-eerie-black',
    answer:     'text-text-muted',
    chevron:    'text-hemlock-500',
  },
  3: {
    section:    'bg-hemlock-50',
    headline:   'text-eerie-black',
    listBorder: 'border-t border-hemlock-100',
    divide:     'divide-y divide-hemlock-100',
    question:   'text-eerie-black',
    answer:     'text-text-muted',
    chevron:    'text-hemlock-500',
  },
  4: {
    section:    'bg-hemlock-400',
    headline:   'text-neutral-0',
    listBorder: 'border-t border-neutral-0/10',
    divide:     'divide-y divide-neutral-0/10',
    question:   'text-neutral-0',
    answer:     'text-neutral-0/70',
    chevron:    'text-neutral-0/60',
  },
}

// ── Component ─────────────────────────────────────────────────

export default function FAQSection({ data, className }: FAQSectionProps) {
  const { headline, items, scheme = 1 } = data
  const cfg = schemeMap[scheme]

  if (items.length === 0) return null

  return (
    <section
      aria-label={headline ?? 'Frequently asked questions'}
      className={cn('py-section lg:py-section-lg', cfg.section, className)}
    >
      <div className="mx-auto w-full max-w-screen-xl px-6 md:px-12 lg:px-20">

        {/* Two-col on lg when headline present: headline left (1fr), list right (2fr) */}
        <div
          className={cn(
            'grid grid-cols-1 gap-10',
            headline && 'lg:grid-cols-[1fr_2fr] lg:gap-20',
          )}
        >

          {headline && (
            <FadeIn>
              <div className="lg:pt-1">
                <h2
                  className={cn(
                    'font-heading font-bold leading-tight tracking-tighter',
                    'text-3xl md:text-4xl lg:text-h2',
                    cfg.headline,
                  )}
                >
                  {headline}
                </h2>
              </div>
            </FadeIn>
          )}

          <FadeIn delay={headline ? 0.1 : 0}>
          <dl className={cn(cfg.listBorder, cfg.divide)}>
            {items.map((item, index) => (
              <details
                key={`faq-${index}`}
                className="group"
              >
                <summary
                  className="flex cursor-pointer list-none items-start justify-between gap-6 py-5 [&::-webkit-details-marker]:hidden"
                >
                  <dt className={cn('text-base font-semibold leading-snug md:text-lg', cfg.question)}>
                    {item.question}
                  </dt>
                  <ChevronDown
                    size={20}
                    strokeWidth={1.75}
                    aria-hidden="true"
                    className={cn(
                      'mt-0.5 flex-shrink-0 transition-transform duration-200 group-open:rotate-180',
                      cfg.chevron,
                    )}
                  />
                </summary>
                <dd className="pb-5">
                  <p className={cn('text-sm leading-relaxed md:text-base', cfg.answer)}>
                    {item.answer}
                  </p>
                </dd>
              </details>
            ))}
          </dl>
          </FadeIn>

        </div>
      </div>
    </section>
  )
}
