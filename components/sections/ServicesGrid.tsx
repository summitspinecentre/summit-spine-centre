// components/sections/ServicesGrid.tsx
// Server Component — icon + title + body service/feature cards.
// Supports static cards (e.g. condition treatments) and linked cards
// (e.g. home services section). Pass `href` on each item to make it a Link.
//
// Used on: Home (services, featuresList, benefits)
//          Services Hub, individual service pages (featuresList, treatments)
//          Condition pages (treatments section)

import Link from 'next/link'
import {
  Activity, HandHeart, Dumbbell, Armchair,
  DoorOpen, CreditCard, Heart, Zap, TrendingUp,
  Smile, ClipboardList, Award, Stethoscope,
  Users, Leaf, Shield, Clock, MapPin, ArrowRight,
  type LucideIcon,
} from 'lucide-react'
import { cn } from '@/lib/utils'
import type { ColorScheme } from '@/types/content'

// ── Icon registry ─────────────────────────────────────────────
// Add new icons here as content requires them.

const iconMap: Record<string, LucideIcon> = {
  Activity, HandHeart, Dumbbell, Armchair,
  DoorOpen, CreditCard, Heart, Zap, TrendingUp,
  Smile, ClipboardList, Award, Stethoscope,
  Users, Leaf, Shield, Clock, MapPin,
}

// ── Types ────────────────────────────────────────────────────

export interface ServiceCardItem {
  icon?:  string   // key into iconMap — e.g. "Activity"
  title:  string
  body:   string
  href?:  string   // if present, the card renders as a <Link>
}

export interface ServicesGridProps {
  headline?:    string
  subheadline?: string
  items:        ServiceCardItem[]
  scheme?:      ColorScheme  // defaults to 1
  columns?:     2 | 3 | 4   // lg-breakpoint columns; defaults to 3
  className?:   string
}

// ── Scheme config ─────────────────────────────────────────────

interface SchemeTokens {
  section:     string
  headline:    string
  subheadline: string
  card:        string
  border:      string
  borderHover: string  // only applied on linked cards
  title:       string
  body:        string
  iconWrap:    string
  icon:        string
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
    title:       'text-eerie-black',
    body:        'text-text-muted',
    iconWrap:    'bg-hemlock-50',
    icon:        'text-hemlock-500',
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
    title:       'text-eerie-black',
    body:        'text-text-muted',
    iconWrap:    'bg-hemlock-50',
    icon:        'text-hemlock-500',
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
    title:       'text-eerie-black',
    body:        'text-text-muted',
    iconWrap:    'bg-hemlock-100',
    icon:        'text-hemlock-500',
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
    title:       'text-neutral-0',
    body:        'text-neutral-0/70',
    iconWrap:    'bg-hemlock-600',
    icon:        'text-neutral-0/80',
    arrow:       'text-neutral-0/70',
    ring:        'focus-visible:ring-neutral-0',
  },
}

const columnsMap: Record<2 | 3 | 4, string> = {
  2: 'lg:grid-cols-2',
  3: 'lg:grid-cols-3',
  4: 'lg:grid-cols-4',
}

// ── Sub-components ────────────────────────────────────────────

interface CardInnerProps {
  item: ServiceCardItem
  cfg:  SchemeTokens
  linked: boolean
}

function CardInner({ item, cfg, linked }: CardInnerProps) {
  const Icon = item.icon ? iconMap[item.icon] : null

  return (
    <>
      {/* Icon */}
      {Icon && (
        <div
          aria-hidden="true"
          className={cn(
            'flex h-11 w-11 flex-shrink-0 items-center justify-center rounded-lg',
            cfg.iconWrap,
          )}
        >
          <Icon size={22} strokeWidth={1.75} className={cfg.icon} />
        </div>
      )}

      {/* Text */}
      <div className="flex-1">
        <h3 className={cn('text-lg font-semibold leading-snug', cfg.title)}>
          {item.title}
        </h3>
        <p className={cn('mt-2 text-sm leading-relaxed', cfg.body)}>
          {item.body}
        </p>
      </div>

      {/* Arrow — only on linked cards, slides right on hover */}
      {linked && (
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
      )}
    </>
  )
}

// ── Shared card shell classes ─────────────────────────────────

function cardShell(cfg: SchemeTokens, linked: boolean): string {
  return cn(
    'flex h-full flex-col gap-5 rounded-lg border p-6',
    cfg.card,
    cfg.border,
    linked && [
      'group',
      cfg.borderHover,
      'hover:-translate-y-1 hover:shadow-card-hover',
      'transition-all duration-300',
      'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2',
      cfg.ring,
    ],
  )
}

// ── Component ─────────────────────────────────────────────────

export default function ServicesGrid({
  headline,
  subheadline,
  items,
  scheme = 1,
  columns = 3,
  className,
}: ServicesGridProps) {
  const cfg = schemeMap[scheme]

  return (
    <section
      aria-label={headline ?? 'Our services'}
      className={cn('py-section lg:py-section-lg', cfg.section, className)}
    >
      <div className="mx-auto w-full max-w-screen-xl px-6 md:px-12 lg:px-20">

        {/* ── Optional section header ──────────────────────── */}
        {(headline || subheadline) && (
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
        )}

        {/* ── Card grid ────────────────────────────────────── */}
        <ul
          role="list"
          className={cn(
            'grid grid-cols-1 gap-4 sm:grid-cols-2',
            columnsMap[columns],
          )}
        >
          {items.map((item) => {
            const linked = !!item.href

            return (
              <li key={item.title}>
                {linked ? (
                  <Link
                    href={item.href!}
                    aria-label={`Learn more about ${item.title}`}
                    className={cardShell(cfg, true)}
                  >
                    <CardInner item={item} cfg={cfg} linked />
                  </Link>
                ) : (
                  <div className={cardShell(cfg, false)}>
                    <CardInner item={item} cfg={cfg} linked={false} />
                  </div>
                )}
              </li>
            )
          })}
        </ul>

      </div>
    </section>
  )
}
