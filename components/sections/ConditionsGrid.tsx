// components/sections/ConditionsGrid.tsx
// Server Component — grid of linked condition cards.
// Used on: Home conditionsBar (6 conditions, no body copy)
//          Conditions Hub conditionsList (all conditions, optional body copy)

import Link from 'next/link'
import { ArrowRight } from 'lucide-react'
import { cn } from '@/lib/utils'
import type { ColorScheme } from '@/types/content'
import FadeIn from '@/components/ui/FadeIn'

// ── Types ────────────────────────────────────────────────────

export interface ConditionCardItem {
  label: string   // display name — e.g. "Sciatica"
  slug:  string   // URL slug     — e.g. "sciatica"
  body?: string   // optional teaser shown on Hub page; omitted on Home bar
}

export interface ConditionsGridProps {
  headline?:    string
  subheadline?: string
  conditions:   ConditionCardItem[]
  scheme?:      ColorScheme   // defaults to 1
  columns?:     2 | 3 | 4    // columns at lg breakpoint; defaults to 3
  className?:   string
}

// ── Scheme config ────────────────────────────────────────────

interface SchemeTokens {
  section:     string
  headline:    string
  subheadline: string
  card:        string
  border:      string
  borderHover: string
  label:       string
  body:        string
  arrow:       string
  ring:        string
}

const schemeMap: Record<ColorScheme, SchemeTokens> = {
  1: {
    section:     'bg-neutral-0',
    headline:    'text-eerie-black',
    subheadline: 'text-text-muted',
    card:        'bg-neutral-100',
    border:      'border-dun',
    borderHover: 'hover:border-ebony',
    label:       'text-eerie-black',
    body:        'text-text-muted',
    arrow:       'text-cerulean',
    ring:        'focus-visible:ring-cerulean',
  },
  2: {
    section:     'bg-neutral-100',
    headline:    'text-eerie-black',
    subheadline: 'text-text-muted',
    card:        'bg-neutral-0',
    border:      'border-dun',
    borderHover: 'hover:border-ebony',
    label:       'text-eerie-black',
    body:        'text-text-muted',
    arrow:       'text-cerulean',
    ring:        'focus-visible:ring-cerulean',
  },
  3: {
    section:     'bg-hemlock-50',
    headline:    'text-eerie-black',
    subheadline: 'text-text-muted',
    card:        'bg-neutral-0',
    border:      'border-dun',
    borderHover: 'hover:border-ebony',
    label:       'text-eerie-black',
    body:        'text-text-muted',
    arrow:       'text-cerulean',
    ring:        'focus-visible:ring-cerulean',
  },
  4: {
    section:     'bg-hemlock-400',
    headline:    'text-neutral-0',
    subheadline: 'text-neutral-0/80',
    card:        'bg-hemlock-500',
    border:      'border-hemlock-600',
    borderHover: 'hover:border-neutral-0/30',
    label:       'text-neutral-0',
    body:        'text-neutral-0/70',
    arrow:       'text-neutral-0/70',
    ring:        'focus-visible:ring-neutral-0',
  },
}

const columnsMap: Record<2 | 3 | 4, string> = {
  2: 'lg:grid-cols-2',
  3: 'lg:grid-cols-3',
  4: 'lg:grid-cols-4',
}

// ── Component ────────────────────────────────────────────────

export default function ConditionsGrid({
  headline,
  subheadline,
  conditions,
  scheme = 1,
  columns = 3,
  className,
}: ConditionsGridProps) {
  const cfg = schemeMap[scheme]

  return (
    <section
      aria-label={headline ?? 'Conditions we treat'}
      className={cn('py-section lg:py-section-lg', cfg.section, className)}
    >
      <div className="mx-auto w-full max-w-screen-xl px-6 md:px-12 lg:px-20">

        {/* ── Optional section header ────────────────────────── */}
        {(headline || subheadline) && (
          <FadeIn>
            <div className="mb-10 max-w-2xl lg:mb-14">
              {headline && (
                <h2
                  className={cn(
                    'font-heading font-bold leading-tight tracking-tighter',
                    'text-3xl md:text-4xl lg:text-h2',
                    cfg.headline,
                  )}
                >
                  {headline}
                </h2>
              )}
              {subheadline && (
                <p className={cn('mt-4 text-lg leading-relaxed', cfg.subheadline)}>
                  {subheadline}
                </p>
              )}
            </div>
          </FadeIn>
        )}

        {/* ── Card grid ─────────────────────────────────────── */}
        <FadeIn delay={0.15}>
        <ul
          role="list"
          className={cn(
            'grid grid-cols-1 gap-4 sm:grid-cols-2',
            columnsMap[columns],
          )}
        >
          {conditions.map(({ label, slug, body }) => (
            <li key={slug}>
              <Link
                href={`/conditions/${slug}`}
                aria-label={`Learn about ${label}`}
                className={cn(
                  // Layout
                  'group flex h-full flex-col justify-between gap-6 rounded-lg border p-6',
                  // Colours
                  cfg.card,
                  cfg.border,
                  // Hover: border colour + card lift + shadow
                  cfg.borderHover,
                  'hover:-translate-y-1 hover:shadow-card-hover',
                  // Transition
                  'transition-all duration-300',
                  // Focus
                  'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2',
                  cfg.ring,
                )}
              >
                {/* Card content */}
                <div>
                  <p className={cn('text-lg font-semibold leading-snug', cfg.label)}>
                    {label}
                  </p>
                  {body && (
                    <p className={cn('mt-2 text-sm leading-relaxed', cfg.body)}>
                      {body}
                    </p>
                  )}
                </div>

                {/* Arrow affordance — slides right on hover */}
                <div
                  aria-hidden="true"
                  className={cn(
                    'flex items-center gap-1 text-sm font-medium',
                    'transition-transform duration-300 group-hover:translate-x-1',
                    cfg.arrow,
                  )}
                >
                  <span>Learn more</span>
                  <ArrowRight size={16} strokeWidth={2} />
                </div>
              </Link>
            </li>
          ))}
        </ul>
        </FadeIn>

      </div>
    </section>
  )
}
