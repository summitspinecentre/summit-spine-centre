// components/sections/HowItWorksSection.tsx
// Server Component — numbered step sequence.
// Returns null when steps array is empty (all pages start with stubs).
//
// Used on: service pages (howItWorks), condition pages (howItWorks),
//          pillar pages (howItWorks)

import {
  Activity, HandHeart, Dumbbell, Armchair,
  DoorOpen, CreditCard, Heart, Zap, TrendingUp,
  Smile, ClipboardList, Award, Stethoscope,
  Users, Leaf, Shield, Clock, MapPin, CheckCircle,
  type LucideIcon,
} from 'lucide-react'
import { cn } from '@/lib/utils'
import type { HowItWorksSection as HowItWorksSectionData, ColorScheme } from '@/types/content'

// ── Icon registry ─────────────────────────────────────────────

const iconMap: Record<string, LucideIcon> = {
  Activity, HandHeart, Dumbbell, Armchair,
  DoorOpen, CreditCard, Heart, Zap, TrendingUp,
  Smile, ClipboardList, Award, Stethoscope,
  Users, Leaf, Shield, Clock, MapPin, CheckCircle,
}

// ── Types ────────────────────────────────────────────────────

export interface HowItWorksSectionProps {
  data:       HowItWorksSectionData
  className?: string
}

// ── Scheme config ─────────────────────────────────────────────

interface SchemeTokens {
  section:     string
  headline:    string
  subheadline: string
  numBg:       string
  numText:     string
  icon:        string
  title:       string
  body:        string
}

const schemeMap: Record<ColorScheme, SchemeTokens> = {
  1: {
    section:     'bg-neutral-0',
    headline:    'text-eerie-black',
    subheadline: 'text-text-muted',
    numBg:       'bg-hemlock-50',
    numText:     'text-hemlock-500',
    icon:        'text-hemlock-500',
    title:       'text-eerie-black',
    body:        'text-text-muted',
  },
  2: {
    section:     'bg-neutral-100',
    headline:    'text-eerie-black',
    subheadline: 'text-text-muted',
    numBg:       'bg-neutral-0',
    numText:     'text-hemlock-500',
    icon:        'text-hemlock-500',
    title:       'text-eerie-black',
    body:        'text-text-muted',
  },
  3: {
    section:     'bg-hemlock-50',
    headline:    'text-eerie-black',
    subheadline: 'text-text-muted',
    numBg:       'bg-neutral-0',
    numText:     'text-hemlock-500',
    icon:        'text-hemlock-500',
    title:       'text-eerie-black',
    body:        'text-text-muted',
  },
  4: {
    section:     'bg-hemlock-400',
    headline:    'text-neutral-0',
    subheadline: 'text-neutral-0/80',
    numBg:       'bg-hemlock-600',
    numText:     'text-neutral-0',
    icon:        'text-neutral-0/80',
    title:       'text-neutral-0',
    body:        'text-neutral-0/70',
  },
}

// ── Grid column helper ────────────────────────────────────────

function gridColsClass(count: number): string {
  if (count <= 2) return 'sm:grid-cols-2'
  if (count === 3) return 'sm:grid-cols-3'
  if (count === 4) return 'sm:grid-cols-2 lg:grid-cols-4'
  return 'sm:grid-cols-2 lg:grid-cols-3'
}

// ── Component ─────────────────────────────────────────────────

export default function HowItWorksSection({ data, className }: HowItWorksSectionProps) {
  const { headline, subheadline, steps, scheme = 1 } = data
  const cfg = schemeMap[scheme]

  if (steps.length === 0) return null

  const cols = gridColsClass(steps.length)

  return (
    <section
      aria-label={headline}
      className={cn('py-section lg:py-section-lg', cfg.section, className)}
    >
      <div className="mx-auto w-full max-w-screen-xl px-6 md:px-12 lg:px-20">

        {/* ── Section header ────────────────────────────────── */}
        <div className="mb-12 max-w-2xl lg:mb-16">
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

        {/* ── Steps ─────────────────────────────────────────── */}
        <ol className={cn('grid grid-cols-1 gap-8 md:gap-10', cols)}>
          {steps.map((step) => {
            const Icon = step.icon ? iconMap[step.icon] : null

            return (
              <li
                key={step.step}
                className="flex flex-row gap-5 sm:flex-col sm:gap-0"
              >
                {/* Circle: step number or icon */}
                <div
                  aria-hidden="true"
                  className={cn(
                    'flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-full',
                    'sm:mb-5',
                    cfg.numBg,
                  )}
                >
                  {Icon ? (
                    <Icon size={20} strokeWidth={1.75} className={cfg.icon} />
                  ) : (
                    <span className={cn('text-sm font-bold tabular-nums', cfg.numText)}>
                      {String(step.step).padStart(2, '0')}
                    </span>
                  )}
                </div>

                {/* Text */}
                <div>
                  <h3 className={cn('text-base font-semibold leading-snug md:text-lg', cfg.title)}>
                    {step.title}
                  </h3>
                  <p className={cn('mt-2 text-sm leading-relaxed md:text-base', cfg.body)}>
                    {step.body}
                  </p>
                </div>
              </li>
            )
          })}
        </ol>

      </div>
    </section>
  )
}
