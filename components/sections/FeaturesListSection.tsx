// components/sections/FeaturesListSection.tsx
// Server Component — borderless icon-left feature rows.
// Distinct from ServicesGrid (which uses bordered icon-top cards).
//
// Used on: Home (featuresList, benefits), Services Hub (featuresList),
//          individual service pages (featuresList), pillar pages (featuresList)
//
// iconMap mirrors ServicesGrid — extract to lib/icons.ts when a third
// component needs the same map.

import {
  Activity, HandHeart, Dumbbell, Armchair,
  DoorOpen, CreditCard, Heart, Zap, TrendingUp,
  Smile, ClipboardList, Award, Stethoscope,
  Users, Leaf, Shield, Clock, MapPin, CheckCircle,
  type LucideIcon,
} from 'lucide-react'
import { cn } from '@/lib/utils'
import type { ColorScheme, FeatureItem } from '@/types/content'
import FadeIn from '@/components/ui/FadeIn'

// ── Icon registry ─────────────────────────────────────────────

const iconMap: Record<string, LucideIcon> = {
  Activity, HandHeart, Dumbbell, Armchair,
  DoorOpen, CreditCard, Heart, Zap, TrendingUp,
  Smile, ClipboardList, Award, Stethoscope,
  Users, Leaf, Shield, Clock, MapPin, CheckCircle,
}

// ── Types ────────────────────────────────────────────────────

export interface FeaturesListSectionProps {
  headline?:    string
  subheadline?: string
  items:        FeatureItem[]
  scheme?:      ColorScheme  // defaults to 1
  columns?:     1 | 2 | 3   // lg-breakpoint column count; defaults to 3
  className?:   string
}

// ── Scheme config ─────────────────────────────────────────────

interface SchemeTokens {
  section:    string
  headline:   string
  subheadline: string
  iconWrap:   string
  icon:       string
  title:      string
  body:       string
}

const schemeMap: Record<ColorScheme, SchemeTokens> = {
  1: {
    section:     'bg-neutral-0',
    headline:    'text-eerie-black',
    subheadline: 'text-text-muted',
    iconWrap:    'bg-hemlock-50',
    icon:        'text-hemlock-500',
    title:       'text-eerie-black',
    body:        'text-text-muted',
  },
  2: {
    section:     'bg-neutral-100',
    headline:    'text-eerie-black',
    subheadline: 'text-text-muted',
    iconWrap:    'bg-hemlock-50',
    icon:        'text-hemlock-500',
    title:       'text-eerie-black',
    body:        'text-text-muted',
  },
  3: {
    section:     'bg-hemlock-50',
    headline:    'text-eerie-black',
    subheadline: 'text-text-muted',
    iconWrap:    'bg-neutral-0',
    icon:        'text-hemlock-500',
    title:       'text-eerie-black',
    body:        'text-text-muted',
  },
  4: {
    section:     'bg-hemlock-400',
    headline:    'text-neutral-0',
    subheadline: 'text-neutral-0/80',
    iconWrap:    'bg-hemlock-600',
    icon:        'text-neutral-0/80',
    title:       'text-neutral-0',
    body:        'text-neutral-0/70',
  },
}

const columnsMap: Record<1 | 2 | 3, string> = {
  1: 'max-w-2xl',
  2: 'sm:grid-cols-2',
  3: 'sm:grid-cols-2 lg:grid-cols-3',
}

// ── Component ─────────────────────────────────────────────────

export default function FeaturesListSection({
  headline,
  subheadline,
  items,
  scheme = 1,
  columns = 3,
  className,
}: FeaturesListSectionProps) {
  const cfg = schemeMap[scheme]

  return (
    <section
      aria-label={headline ?? 'Features'}
      className={cn('py-section lg:py-section-lg', cfg.section, className)}
    >
      <div className="mx-auto w-full max-w-screen-xl px-6 md:px-12 lg:px-20">

        {/* ── Optional section header ──────────────────────── */}
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

        {/* ── Feature list ─────────────────────────────────── */}
        <FadeIn delay={0.15}>
        <ul
          role="list"
          className={cn('grid grid-cols-1 gap-8', columnsMap[columns])}
        >
          {items.map((item) => {
            const Icon = item.icon ? iconMap[item.icon] : null

            return (
              <li key={item.title} className="flex gap-4">

                {/* Icon circle */}
                {Icon && (
                  <div
                    aria-hidden="true"
                    className={cn(
                      'mt-0.5 flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-lg',
                      cfg.iconWrap,
                    )}
                  >
                    <Icon size={20} strokeWidth={1.75} className={cfg.icon} />
                  </div>
                )}

                {/* Text */}
                <div className={cn('flex flex-col gap-1', !Icon && 'pl-0')}>
                  <h3 className={cn('text-base font-semibold leading-snug md:text-lg', cfg.title)}>
                    {item.title}
                  </h3>
                  <p className={cn('text-sm leading-relaxed md:text-base', cfg.body)}>
                    {item.body}
                  </p>
                </div>

              </li>
            )
          })}
        </ul>
        </FadeIn>

      </div>
    </section>
  )
}
