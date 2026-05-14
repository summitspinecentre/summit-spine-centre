// components/sections/BenefitsSection.tsx
// Server Component — icon-top benefit cards.
// Distinct from FeaturesListSection (icon-left inline rows).
//
// Used on: Home (benefits, scheme 4), condition pages (benefits, scheme 4),
//          service pages (benefits, scheme 4), About (benefits)

import {
  Activity, HandHeart, Dumbbell, Armchair,
  DoorOpen, CreditCard, Heart, Zap, TrendingUp,
  Smile, ClipboardList, Award, Stethoscope,
  Users, Leaf, Shield, Clock, MapPin, CheckCircle,
  type LucideIcon,
} from 'lucide-react'
import Image from 'next/image'
import { cn } from '@/lib/utils'
import type { BenefitsSection as BenefitsSectionData, ColorScheme } from '@/types/content'
import FadeIn from '@/components/ui/FadeIn'

// ── Icon registry ─────────────────────────────────────────────

const iconMap: Record<string, LucideIcon> = {
  Activity, HandHeart, Dumbbell, Armchair,
  DoorOpen, CreditCard, Heart, Zap, TrendingUp,
  Smile, ClipboardList, Award, Stethoscope,
  Users, Leaf, Shield, Clock, MapPin, CheckCircle,
}

// ── Types ────────────────────────────────────────────────────

export interface BenefitsSectionProps {
  data:       BenefitsSectionData
  className?: string
}

// ── Scheme config ─────────────────────────────────────────────

interface SchemeTokens {
  section:     string
  headline:    string
  subheadline: string
  card:        string
  iconWrap:    string
  icon:        string
  title:       string
  body:        string
}

const schemeMap: Record<ColorScheme, SchemeTokens> = {
  1: {
    section:     'bg-neutral-0',
    headline:    'text-eerie-black',
    subheadline: 'text-text-muted',
    card:        'bg-neutral-100',
    iconWrap:    'bg-hemlock-50',
    icon:        'text-hemlock-500',
    title:       'text-eerie-black',
    body:        'text-text-muted',
  },
  2: {
    section:     'bg-neutral-100',
    headline:    'text-eerie-black',
    subheadline: 'text-text-muted',
    card:        'bg-neutral-0',
    iconWrap:    'bg-hemlock-50',
    icon:        'text-hemlock-500',
    title:       'text-eerie-black',
    body:        'text-text-muted',
  },
  3: {
    section:     'bg-hemlock-50',
    headline:    'text-eerie-black',
    subheadline: 'text-text-muted',
    card:        'bg-neutral-0',
    iconWrap:    'bg-hemlock-100',
    icon:        'text-hemlock-500',
    title:       'text-eerie-black',
    body:        'text-text-muted',
  },
  4: {
    section:     'bg-hemlock-400',
    headline:    'text-neutral-0',
    subheadline: 'text-neutral-0/80',
    card:        'bg-hemlock-600/40',
    iconWrap:    'bg-hemlock-600',
    icon:        'text-neutral-0/80',
    title:       'text-neutral-0',
    body:        'text-neutral-0/70',
  },
}

// ── Helpers ──────────────────────────────────────────────────

function gridColsClass(count: number): string {
  if (count === 1) return ''
  if (count === 2) return 'sm:grid-cols-2'
  if (count === 3) return 'sm:grid-cols-2 lg:grid-cols-3'
  return 'sm:grid-cols-2'  // 4+ → 2×2
}

// ── Sub-component: benefit card ───────────────────────────────

interface CardProps {
  icon?:      string
  title:      string
  body:       string
  cfg:        SchemeTokens
  className?: string
}

function BenefitCard({ icon, title, body, cfg, className }: CardProps) {
  const Icon = icon ? iconMap[icon] : null

  return (
    <li className={cn('rounded-lg p-6 md:p-8', cfg.card, className)}>
      {Icon && (
        <div
          aria-hidden="true"
          className={cn(
            'mb-4 flex h-10 w-10 items-center justify-center rounded-lg',
            cfg.iconWrap,
          )}
        >
          <Icon size={20} strokeWidth={1.75} className={cfg.icon} />
        </div>
      )}
      <h3 className={cn('text-base font-semibold leading-snug md:text-lg', cfg.title)}>
        {title}
      </h3>
      <p className={cn('mt-2 text-sm leading-relaxed md:text-base', cfg.body)}>
        {body}
      </p>
    </li>
  )
}

// ── Component ─────────────────────────────────────────────────

export default function BenefitsSection({ data, className }: BenefitsSectionProps) {
  const { headline, subheadline, items, image, scheme = 1 } = data
  const cfg      = schemeMap[scheme]
  const gridCols = gridColsClass(items.length)

  return (
    <section
      aria-label={headline}
      className={cn('py-section lg:py-section-lg', cfg.section, className)}
    >
      <div className="mx-auto w-full max-w-screen-xl px-6 md:px-12 lg:px-20">

        {image ? (
          /* ── Two-column: image left, header + cards right ── */
          <FadeIn>
            <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-2 lg:gap-20">

              <div className="relative aspect-[4/3] w-full overflow-hidden rounded-lg">
                <Image
                  src={image.src}
                  alt={image.alt}
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  priority={image.priority}
                />
              </div>

              <div>
                <div className="mb-8">
                  <h2
                    className={cn(
                      'font-heading font-bold leading-tight tracking-tighter',
                      'text-3xl md:text-4xl lg:text-h2',
                      cfg.headline,
                    )}
                  >
                    {headline}
                  </h2>
                  {subheadline && (
                    <p className={cn('mt-4 text-lg leading-relaxed', cfg.subheadline)}>
                      {subheadline}
                    </p>
                  )}
                </div>

                <ul role="list" className={cn('grid grid-cols-1 gap-4', gridCols)}>
                  {items.map((item) => (
                    <BenefitCard key={item.title} {...item} cfg={cfg} />
                  ))}
                </ul>
              </div>

            </div>
          </FadeIn>
        ) : (
          /* ── No image: header left-aligned + full-width grid ── */
          <>
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
                {subheadline && (
                  <p className={cn('mt-4 text-lg leading-relaxed', cfg.subheadline)}>
                    {subheadline}
                  </p>
                )}
              </div>
            </FadeIn>

            <FadeIn delay={0.15}>
              <ul role="list" className={cn('grid grid-cols-1 gap-6 md:gap-8', gridCols)}>
                {items.map((item) => (
                  <BenefitCard key={item.title} {...item} cfg={cfg} />
                ))}
              </ul>
            </FadeIn>
          </>
        )}

      </div>
    </section>
  )
}
