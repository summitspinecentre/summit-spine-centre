// components/sections/TestimonialsSection.tsx
// Server Component — patient testimonial cards with optional rating + avatar.
// Returns null when items array is empty (safe for all current stubs).
//
// Used on: Home (scheme 3), About, Team page, condition pages (scheme 4),
//          service pages (scheme 4)

import Image from 'next/image'
import { Quote, Star } from 'lucide-react'
import { cn } from '@/lib/utils'
import type { TestimonialsSection as TestimonialsSectionData, ColorScheme } from '@/types/content'
import FadeIn from '@/components/ui/FadeIn'

// ── Types ────────────────────────────────────────────────────

export interface TestimonialsSectionProps {
  data:       TestimonialsSectionData
  className?: string
}

// ── Scheme config ─────────────────────────────────────────────

interface SchemeTokens {
  section:    string
  headline:   string
  card:       string
  quoteIcon:  string
  quote:      string
  divider:    string
  author:     string
  role:       string
  starFilled: string
  starEmpty:  string
  imgFallback: string
  initials:   string
}

const schemeMap: Record<ColorScheme, SchemeTokens> = {
  1: {
    section:     'bg-neutral-0',
    headline:    'text-eerie-black',
    card:        'bg-neutral-100',
    quoteIcon:   'text-hemlock-100',
    quote:       'text-eerie-black',
    divider:     'border-hemlock-100',
    author:      'text-eerie-black',
    role:        'text-text-muted',
    starFilled:  'text-hemlock-500 fill-current',
    starEmpty:   'text-hemlock-100',
    imgFallback: 'bg-hemlock-50',
    initials:    'text-hemlock-500',
  },
  2: {
    section:     'bg-neutral-100',
    headline:    'text-eerie-black',
    card:        'bg-neutral-0',
    quoteIcon:   'text-hemlock-100',
    quote:       'text-eerie-black',
    divider:     'border-hemlock-100',
    author:      'text-eerie-black',
    role:        'text-text-muted',
    starFilled:  'text-hemlock-500 fill-current',
    starEmpty:   'text-hemlock-100',
    imgFallback: 'bg-hemlock-50',
    initials:    'text-hemlock-500',
  },
  3: {
    section:     'bg-hemlock-50',
    headline:    'text-eerie-black',
    card:        'bg-neutral-0',
    quoteIcon:   'text-hemlock-100',
    quote:       'text-eerie-black',
    divider:     'border-hemlock-100',
    author:      'text-eerie-black',
    role:        'text-text-muted',
    starFilled:  'text-hemlock-500 fill-current',
    starEmpty:   'text-hemlock-100',
    imgFallback: 'bg-hemlock-50',
    initials:    'text-hemlock-500',
  },
  4: {
    section:     'bg-hemlock-400',
    headline:    'text-neutral-0',
    card:        'bg-hemlock-600/40',
    quoteIcon:   'text-neutral-0/20',
    quote:       'text-neutral-0',
    divider:     'border-neutral-0/10',
    author:      'text-neutral-0',
    role:        'text-neutral-0/60',
    starFilled:  'text-neutral-0 fill-current',
    starEmpty:   'text-neutral-0/20',
    imgFallback: 'bg-hemlock-600',
    initials:    'text-neutral-0/80',
  },
}

// ── Grid columns helper ────────────────────────────────────────

function gridColsClass(count: number): string {
  if (count === 1) return 'max-w-xl'
  if (count === 2) return 'sm:grid-cols-2'
  return 'sm:grid-cols-2 lg:grid-cols-3'
}

// ── Star rating ───────────────────────────────────────────────

interface StarRatingProps {
  rating:      1 | 2 | 3 | 4 | 5
  filledClass: string
  emptyClass:  string
}

function StarRating({ rating, filledClass, emptyClass }: StarRatingProps) {
  return (
    <div role="img" aria-label={`${rating} out of 5 stars`} className="flex gap-0.5">
      {Array.from({ length: 5 }, (_, i) => (
        <Star
          key={i}
          size={14}
          strokeWidth={1.5}
          className={i < rating ? filledClass : emptyClass}
        />
      ))}
    </div>
  )
}

// ── Component ─────────────────────────────────────────────────

export default function TestimonialsSection({ data, className }: TestimonialsSectionProps) {
  const { headline, items, scheme = 1 } = data
  const cfg = schemeMap[scheme]

  if (items.length === 0) return null

  const cols = gridColsClass(items.length)

  return (
    <section
      aria-label={headline ?? 'Patient testimonials'}
      className={cn('py-section lg:py-section-lg', cfg.section, className)}
    >
      <div className="mx-auto w-full max-w-screen-xl px-6 md:px-12 lg:px-20">

        {/* ── Optional headline ─────────────────────────────── */}
        {headline && (
          <FadeIn>
            <div className="mb-10 max-w-2xl lg:mb-14">
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

        {/* ── Testimonial grid ──────────────────────────────── */}
        <FadeIn delay={0.15}>
        <ul role="list" className={cn('grid grid-cols-1 gap-6 md:gap-8', cols)}>
          {items.map((testimonial, index) => (
            <li
              key={`${testimonial.author}-${index}`}
              className={cn(
                'flex flex-col rounded-lg p-6 md:p-8',
                cfg.card,
              )}
            >
              {/* Decorative quote mark */}
              <Quote
                size={32}
                strokeWidth={1.5}
                aria-hidden="true"
                className={cn('mb-4 flex-shrink-0', cfg.quoteIcon)}
              />

              {/* Optional star rating */}
              {testimonial.rating && (
                <StarRating
                  rating={testimonial.rating}
                  filledClass={cfg.starFilled}
                  emptyClass={cfg.starEmpty}
                />
              )}

              {/* Optional "before" context for before/after testimonials */}
              {testimonial.context && (
                <div className="mt-4 space-y-1">
                  <p className={cn('text-xs font-semibold uppercase tracking-wider', cfg.role)}>Before</p>
                  <p className={cn('text-sm italic leading-relaxed opacity-80', cfg.quote)}>
                    {testimonial.context}
                  </p>
                  <div className={cn('my-3 border-t', cfg.divider)} />
                  <p className={cn('text-xs font-semibold uppercase tracking-wider', cfg.role)}>After</p>
                </div>
              )}

              {/* Quote text — grows to fill card height */}
              <blockquote
                className={cn(
                  'flex-1 text-base leading-relaxed md:text-lg',
                  testimonial.context ? 'mt-2' : 'mt-4',
                  cfg.quote,
                )}
              >
                &ldquo;{testimonial.quote}&rdquo;
              </blockquote>

              {/* Divider */}
              <div className={cn('my-5 border-t', cfg.divider)} />

              {/* Author row */}
              <div className="flex items-center gap-3">

                {/* Avatar */}
                {testimonial.image ? (
                  <div className="relative h-10 w-10 flex-shrink-0 overflow-hidden rounded-full">
                    <Image
                      src={testimonial.image.src}
                      alt={testimonial.image.alt}
                      fill
                      className="object-cover"
                      sizes="40px"
                    />
                  </div>
                ) : (
                  <div
                    aria-hidden="true"
                    className={cn(
                      'flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-full',
                      cfg.imgFallback,
                    )}
                  >
                    <span className={cn('text-sm font-bold select-none', cfg.initials)}>
                      {testimonial.author.charAt(0)}
                    </span>
                  </div>
                )}

                {/* Name + role */}
                <div>
                  <p className={cn('text-sm font-semibold leading-tight', cfg.author)}>
                    {testimonial.author}
                  </p>
                  {testimonial.role && (
                    <p className={cn('text-xs leading-tight', cfg.role)}>
                      {testimonial.role}
                    </p>
                  )}
                </div>

              </div>
            </li>
          ))}
        </ul>
        </FadeIn>

      </div>
    </section>
  )
}
