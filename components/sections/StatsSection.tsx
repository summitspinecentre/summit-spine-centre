// components/sections/StatsSection.tsx
// Server Component — horizontal row of key stat metrics.
// Used on: Home (stats, scheme 4), About (stats, scheme 1)
//
// Layout: 2-col grid on mobile, single flex row on md+.
// Vertical dividers between items appear at md+ only.

import { cn } from '@/lib/utils'
import type { ColorScheme, StatItem } from '@/types/content'

// ── Types ────────────────────────────────────────────────────

export interface StatsSectionProps {
  headline?:  string
  items:      StatItem[]
  scheme?:    ColorScheme  // defaults to 1
  className?: string
}

// ── Scheme config ─────────────────────────────────────────────

interface SchemeTokens {
  section:    string
  headline:   string
  value:      string
  suffix:     string
  label:      string
  itemBorder: string  // border-l color applied between items at md+
}

const schemeMap: Record<ColorScheme, SchemeTokens> = {
  1: {
    section:    'bg-neutral-0',
    headline:   'text-eerie-black',
    value:      'text-eerie-black',
    suffix:     'text-cerulean',
    label:      'text-text-muted',
    itemBorder: 'border-dun',
  },
  2: {
    section:    'bg-neutral-100',
    headline:   'text-eerie-black',
    value:      'text-eerie-black',
    suffix:     'text-cerulean',
    label:      'text-text-muted',
    itemBorder: 'border-dun',
  },
  3: {
    section:    'bg-hemlock-50',
    headline:   'text-eerie-black',
    value:      'text-eerie-black',
    suffix:     'text-cerulean',
    label:      'text-text-muted',
    itemBorder: 'border-hemlock-100',
  },
  4: {
    section:    'bg-hemlock-400',
    headline:   'text-neutral-0',
    value:      'text-neutral-0',
    suffix:     'text-neutral-0/60',
    label:      'text-neutral-0/70',
    itemBorder: 'border-hemlock-600',
  },
}

// ── Component ─────────────────────────────────────────────────

export default function StatsSection({
  headline,
  items,
  scheme = 1,
  className,
}: StatsSectionProps) {
  const cfg = schemeMap[scheme]

  return (
    <section
      aria-label={headline ?? 'Our impact in numbers'}
      className={cn('py-section lg:py-section-lg', cfg.section, className)}
    >
      <div className="mx-auto w-full max-w-screen-xl px-6 md:px-12 lg:px-20">

        {/* ── Optional section heading ─────────────────────── */}
        {headline && (
          <h2
            className={cn(
              'mb-10 max-w-2xl font-heading font-bold leading-tight tracking-tighter',
              'text-3xl md:text-4xl lg:text-h2',
              cfg.headline,
            )}
          >
            {headline}
          </h2>
        )}

        {/* ── Stats row ────────────────────────────────────── */}
        {/* Mobile: 2-col grid. md+: single flex row with dividers. */}
        <ul
          role="list"
          className="grid grid-cols-2 gap-x-6 gap-y-12 md:flex"
        >
          {items.map((item) => (
            <li
              key={item.label}
              className={cn(
                // Layout
                'flex flex-col items-center justify-center gap-2 text-center',
                // md+: equal-width flex cells, horizontal padding, left border divider
                'md:flex-1 md:px-8 md:border-l',
                // First item: no left border at any breakpoint, no left pad at md+
                'first:border-l-0 md:first:pl-0',
                cfg.itemBorder,
              )}
            >
              {/* Value + optional suffix — large display number */}
              <p
                className={cn(
                  'font-heading font-bold leading-none tracking-tighter',
                  'text-h3 lg:text-h2',
                  cfg.value,
                )}
              >
                {item.value}
                {item.suffix && (
                  <span className={cn('ml-1 text-h4 font-semibold', cfg.suffix)}>
                    {item.suffix}
                  </span>
                )}
              </p>

              {/* Label */}
              <p className={cn('text-sm leading-snug md:text-base', cfg.label)}>
                {item.label}
              </p>
            </li>
          ))}
        </ul>

      </div>
    </section>
  )
}
