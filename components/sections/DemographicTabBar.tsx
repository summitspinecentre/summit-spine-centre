'use client'

// components/sections/DemographicTabBar.tsx
// "Sound Familiar?" — 3-col layout: vertical pill selector | demographic photo | condition list
// Client Component: active-tab state + ARIA keyboard navigation.

import { useState, useRef, useCallback } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import {
  Activity,
  ArrowDown,
  Baby,
  Brain,
  ChevronRight,
  Dumbbell,
  HelpCircle,
  Layers,
  Minimize2,
  Monitor,
  Trophy,
  Zap,
  type LucideIcon,
} from 'lucide-react'
import { cn } from '@/lib/utils'
import Button from '@/components/ui/Button'
import type { ColorScheme, DemographicTabBarSection } from '@/types/content'

// ── Icon map ─────────────────────────────────────────────────

const ICON_MAP: Record<string, LucideIcon> = {
  Activity,
  ArrowDown,
  Baby,
  Brain,
  Dumbbell,
  HelpCircle,
  Layers,
  Minimize2,
  Monitor,
  Trophy,
  Zap,
}

function getIcon(name: string | undefined): LucideIcon | null {
  if (!name) return null
  return ICON_MAP[name] ?? null
}

// ── Props ────────────────────────────────────────────────────

interface DemographicTabBarProps {
  data: DemographicTabBarSection
  className?: string
}

// ── Scheme tokens ────────────────────────────────────────────

interface SchemeTokens {
  section:           string
  heading:           string
  containerBorder:   string
  sidebarBg:         string
  sidebarLabel:      string
  sidebarDivider:    string
  btnBase:           string
  btnHover:          string
  btnActive:         string
  imageFallbackBg:   string
  imageFallbackText: string
  panelBg:           string
  empathy:           string
  rowBg:             string
  rowBorder:         string
  rowHover:          string
  rowLabel:          string
  rowDesc:           string
  rowArrow:          string
  iconBg:            string
  iconColor:         string
  otherRowBg:        string
  otherRowBorder:    string
  otherLabel:        string
  otherIconBg:       string
  otherIconColor:    string
  darkMode:          boolean
}

const schemeTokens: Record<ColorScheme, SchemeTokens> = {
  1: {
    section:           'bg-neutral-0',
    heading:           'text-eerie-black',
    containerBorder:   'border border-border-subtle shadow-card',
    sidebarBg:         'bg-hemlock-50',
    sidebarLabel:      'text-text-muted',
    sidebarDivider:    'border-border-subtle',
    btnBase:           'bg-neutral-0 border border-border text-eerie-black',
    btnHover:          'hover:bg-cerulean/8 hover:border-cerulean hover:text-cerulean',
    btnActive:         'bg-cerulean border-cerulean text-neutral-0 shadow-md',
    imageFallbackBg:   'bg-hemlock-100',
    imageFallbackText: 'text-hemlock-400',
    panelBg:           'bg-neutral-100',
    empathy:           'text-text-muted',
    rowBg:             'bg-neutral-0',
    rowBorder:         'border border-border',
    rowHover:          'hover:border-cerulean hover:shadow-sm',
    rowLabel:          'text-eerie-black',
    rowDesc:           'text-text-muted',
    rowArrow:          'text-cerulean',
    iconBg:            'bg-cerulean/10',
    iconColor:         'text-cerulean',
    otherRowBg:        'bg-cerulean/5',
    otherRowBorder:    'border border-dashed border-cerulean/30',
    otherLabel:        'text-cerulean',
    otherIconBg:       'bg-cerulean/10',
    otherIconColor:    'text-cerulean',
    darkMode:          false,
  },
  2: {
    section:           'bg-neutral-100',
    heading:           'text-eerie-black',
    containerBorder:   'border border-border-subtle shadow-card',
    sidebarBg:         'bg-neutral-0',
    sidebarLabel:      'text-text-muted',
    sidebarDivider:    'border-border-subtle',
    btnBase:           'bg-neutral-100 border border-border text-eerie-black',
    btnHover:          'hover:bg-cerulean/8 hover:border-cerulean hover:text-cerulean',
    btnActive:         'bg-cerulean border-cerulean text-neutral-0 shadow-md',
    imageFallbackBg:   'bg-hemlock-100',
    imageFallbackText: 'text-hemlock-400',
    panelBg:           'bg-neutral-0',
    empathy:           'text-text-muted',
    rowBg:             'bg-neutral-100',
    rowBorder:         'border border-border',
    rowHover:          'hover:border-cerulean hover:shadow-sm',
    rowLabel:          'text-eerie-black',
    rowDesc:           'text-text-muted',
    rowArrow:          'text-cerulean',
    iconBg:            'bg-cerulean/10',
    iconColor:         'text-cerulean',
    otherRowBg:        'bg-cerulean/5',
    otherRowBorder:    'border border-dashed border-cerulean/30',
    otherLabel:        'text-cerulean',
    otherIconBg:       'bg-cerulean/10',
    otherIconColor:    'text-cerulean',
    darkMode:          false,
  },
  3: {
    section:           'bg-hemlock-50',
    heading:           'text-eerie-black',
    containerBorder:   'border border-border-subtle shadow-card',
    sidebarBg:         'bg-neutral-0',
    sidebarLabel:      'text-text-muted',
    sidebarDivider:    'border-border-subtle',
    btnBase:           'bg-hemlock-50 border border-border text-eerie-black',
    btnHover:          'hover:bg-cerulean/8 hover:border-cerulean hover:text-cerulean',
    btnActive:         'bg-cerulean border-cerulean text-neutral-0 shadow-md',
    imageFallbackBg:   'bg-hemlock-100',
    imageFallbackText: 'text-hemlock-400',
    panelBg:           'bg-neutral-0',
    empathy:           'text-text-muted',
    rowBg:             'bg-hemlock-50',
    rowBorder:         'border border-border',
    rowHover:          'hover:border-cerulean hover:shadow-sm',
    rowLabel:          'text-eerie-black',
    rowDesc:           'text-text-muted',
    rowArrow:          'text-cerulean',
    iconBg:            'bg-cerulean/10',
    iconColor:         'text-cerulean',
    otherRowBg:        'bg-cerulean/5',
    otherRowBorder:    'border border-dashed border-cerulean/30',
    otherLabel:        'text-cerulean',
    otherIconBg:       'bg-cerulean/10',
    otherIconColor:    'text-cerulean',
    darkMode:          false,
  },
  4: {
    section:           'bg-hemlock-400',
    heading:           'text-neutral-0',
    containerBorder:   'border border-neutral-0/10 shadow-lg',
    sidebarBg:         'bg-hemlock-600',
    sidebarLabel:      'text-neutral-0/50',
    sidebarDivider:    'border-neutral-0/10',
    btnBase:           'bg-hemlock-500/40 border border-neutral-0/20 text-neutral-0/80',
    btnHover:          'hover:border-cerulean hover:bg-cerulean/20 hover:text-neutral-0',
    btnActive:         'bg-cerulean border-cerulean text-neutral-0 shadow-md',
    imageFallbackBg:   'bg-hemlock-600',
    imageFallbackText: 'text-neutral-0/30',
    panelBg:           'bg-hemlock-500',
    empathy:           'text-neutral-0/80',
    rowBg:             'bg-hemlock-400/60',
    rowBorder:         'border border-neutral-0/20',
    rowHover:          'hover:border-neutral-0/50',
    rowLabel:          'text-neutral-0',
    rowDesc:           'text-neutral-0/70',
    rowArrow:          'text-neutral-0/60',
    iconBg:            'bg-neutral-0/15',
    iconColor:         'text-neutral-0',
    otherRowBg:        'bg-neutral-0/8',
    otherRowBorder:    'border border-dashed border-neutral-0/25',
    otherLabel:        'text-neutral-0',
    otherIconBg:       'bg-neutral-0/15',
    otherIconColor:    'text-neutral-0/70',
    darkMode:          true,
  },
}

// ── Component ────────────────────────────────────────────────

export default function DemographicTabBar({ data, className }: DemographicTabBarProps) {
  const { headline, tabs, scheme } = data

  const [activeIndex, setActiveIndex] = useState<number>(0)
  const btnRefs = useRef<(HTMLButtonElement | null)[]>([])

  const cfg = schemeTokens[scheme]
  const activeTab = tabs[activeIndex]

  const handleKeyDown = useCallback(
    (e: React.KeyboardEvent<HTMLButtonElement>, index: number) => {
      let next: number | null = null
      if (e.key === 'ArrowDown' || e.key === 'ArrowRight') next = (index + 1) % tabs.length
      if (e.key === 'ArrowUp'   || e.key === 'ArrowLeft')  next = (index - 1 + tabs.length) % tabs.length
      if (e.key === 'Home') next = 0
      if (e.key === 'End')  next = tabs.length - 1
      if (next !== null) {
        e.preventDefault()
        setActiveIndex(next)
        btnRefs.current[next]?.focus()
      }
    },
    [tabs.length],
  )

  return (
    <section
      aria-label={headline ?? 'Who We Help'}
      className={cn('py-section lg:py-section-lg', cfg.section, className)}
    >
      <div className="mx-auto w-full max-w-screen-xl px-6 md:px-12 lg:px-20">

        {/* ── Section headline ──────────────────────────────── */}
        {headline && (
          <h2
            className={cn(
              'mb-10 font-heading font-bold leading-tight tracking-tighter',
              'text-[1.75rem] md:text-h3 lg:text-h2',
              cfg.heading,
            )}
          >
            {headline}
          </h2>
        )}

        {/* ── 3-col grid container ──────────────────────────── */}
        <div
          className={cn(
            'grid grid-cols-1 lg:grid-cols-[210px_1fr_340px]',
            'rounded-2xl overflow-hidden',
            cfg.containerBorder,
          )}
        >

          {/* ── Left: Vertical pill selector ──────────────── */}
          <div
            role="tablist"
            aria-label="Patient demographics"
            aria-orientation="vertical"
            className={cn(
              'flex flex-row lg:flex-col',
              'gap-2 p-4 lg:p-5',
              'overflow-x-auto lg:overflow-x-visible',
              cfg.sidebarBg,
              'border-b lg:border-b-0 lg:border-r',
              cfg.sidebarDivider,
            )}
          >
            <p
              aria-hidden="true"
              className={cn(
                'hidden lg:block mb-2 text-[10px] font-semibold uppercase tracking-wider',
                cfg.sidebarLabel,
              )}
            >
              I am a…
            </p>

            {tabs.map((tab, i) => {
              const isActive = i === activeIndex
              return (
                <button
                  key={tab.id}
                  id={`dtab-${tab.id}`}
                  role="tab"
                  aria-selected={isActive}
                  aria-controls={`dpanel-${tab.id}`}
                  tabIndex={isActive ? 0 : -1}
                  ref={el => { btnRefs.current[i] = el }}
                  onClick={() => setActiveIndex(i)}
                  onKeyDown={e => handleKeyDown(e, i)}
                  className={cn(
                    'shrink-0 lg:shrink rounded-xl px-4 py-3',
                    'text-sm font-semibold text-left whitespace-nowrap lg:whitespace-normal',
                    'transition-colors duration-200 outline-none',
                    'focus-visible:ring-2 focus-visible:ring-cerulean focus-visible:ring-offset-2',
                    isActive
                      ? cfg.btnActive
                      : cn(cfg.btnBase, cfg.btnHover),
                  )}
                >
                  <span className="flex items-center justify-between gap-2">
                    {tab.label}
                    <ChevronRight
                      size={14}
                      aria-hidden="true"
                      className={cn(
                        'shrink-0 transition-[transform,opacity] duration-200',
                        isActive ? 'opacity-100' : 'opacity-0 lg:opacity-25',
                      )}
                    />
                  </span>
                </button>
              )
            })}
          </div>

          {/* ── Middle: Demographic photo (opacity crossfade) ── */}
          <div className="relative min-h-[260px] lg:min-h-[560px]">
            {tabs.map((tab, i) => (
              <div
                key={i}
                aria-hidden="true"
                className={cn(
                  'absolute inset-0 transition-opacity duration-500',
                  i === activeIndex ? 'opacity-100 z-10' : 'opacity-0 z-0',
                )}
              >
                {tab.image ? (
                  <Image
                    src={tab.image}
                    alt=""
                    fill
                    sizes="(max-width: 1024px) 100vw, 40vw"
                    className="object-cover object-top"
                  />
                ) : (
                  <div
                    className={cn(
                      'h-full w-full flex items-center justify-center',
                      cfg.imageFallbackBg,
                    )}
                  >
                    <span
                      className={cn(
                        'font-heading font-bold text-6xl opacity-20',
                        cfg.imageFallbackText,
                      )}
                    >
                      {tab.label.charAt(0)}
                    </span>
                  </div>
                )}
              </div>
            ))}

            {/* Bottom gradient so label badge is legible */}
            <div
              aria-hidden="true"
              className="absolute inset-0 z-20 pointer-events-none bg-gradient-to-t from-eerie-black/50 via-transparent to-transparent"
            />

            {/* Active tab label badge */}
            <div aria-hidden="true" className="absolute bottom-4 left-4 z-30 pointer-events-none">
              <span className="text-xs font-semibold text-neutral-0 bg-eerie-black/60 backdrop-blur-sm rounded-full px-3 py-1.5">
                {activeTab.label}
              </span>
            </div>
          </div>

          {/* ── Right: Conditions panel wrapper (always 3rd column) ── */}
          <div className={cn(cfg.panelBg)}>
            {tabs.map((tab, i) => (
              <div
                key={tab.id}
                id={`dpanel-${tab.id}`}
                role="tabpanel"
                aria-labelledby={`dtab-${tab.id}`}
                className={cn(
                  'flex flex-col gap-5 p-6 lg:p-7 h-full',
                  'overflow-y-auto',
                  i !== activeIndex && 'hidden',
                )}
              >
                {/* Empathy statement */}
                {tab.empathyStatement && (
                  <p className={cn('text-sm leading-relaxed', cfg.empathy)}>
                    {tab.empathyStatement}
                  </p>
                )}

                {/* Condition rows */}
                <ul
                  aria-label={`Common conditions for ${tab.label}`}
                  className="flex flex-col gap-2"
                >
                  {tab.conditions.map((condition, j) => {
                    const isOther = !condition.slug
                    const Icon = getIcon(condition.icon)

                    const rowInner = (
                      <div
                        className={cn(
                          'flex items-start gap-3 rounded-xl px-4 py-3',
                          'transition-[border-color,box-shadow] duration-150',
                          isOther
                            ? cn(cfg.otherRowBg, cfg.otherRowBorder)
                            : cn(cfg.rowBg, cfg.rowBorder, cfg.rowHover),
                        )}
                      >
                        {/* Icon circle */}
                        <div
                          className={cn(
                            'mt-0.5 flex shrink-0 items-center justify-center',
                            'w-7 h-7 rounded-full',
                            isOther ? cfg.otherIconBg : cfg.iconBg,
                          )}
                        >
                          {Icon && (
                            <Icon
                              size={13}
                              aria-hidden="true"
                              className={isOther ? cfg.otherIconColor : cfg.iconColor}
                            />
                          )}
                        </div>

                        {/* Text */}
                        <div className="min-w-0 flex-1">
                          <p className={cn('text-sm font-semibold leading-snug', isOther ? cfg.otherLabel : cfg.rowLabel)}>
                            {condition.label}
                          </p>
                          <p className={cn('mt-0.5 text-xs leading-relaxed', cfg.rowDesc)}>
                            {condition.description}
                          </p>
                        </div>

                        {/* Arrow (linked rows only) */}
                        {!isOther && (
                          <ChevronRight
                            size={14}
                            aria-hidden="true"
                            className={cn('mt-1 shrink-0', cfg.rowArrow)}
                          />
                        )}
                      </div>
                    )

                    return (
                      <li key={j}>
                        {condition.slug ? (
                          <Link
                            href={`/conditions/${condition.slug}`}
                            aria-label={`Learn about ${condition.label}`}
                            className="block"
                          >
                            {rowInner}
                          </Link>
                        ) : (
                          rowInner
                        )}
                      </li>
                    )
                  })}
                </ul>

                {/* CTA */}
                <Button
                  label={tab.cta.label}
                  href={tab.cta.href}
                  external={tab.cta.external ?? true}
                  variant={tab.cta.variant ?? (cfg.darkMode ? 'secondary' : 'primary')}
                  size="md"
                  className={cn(
                    'mt-auto',
                    cfg.darkMode ? 'border-neutral-0 text-neutral-0 hover:bg-neutral-0/10' : undefined,
                  )}
                />
              </div>
            ))}
          </div>

        </div>
      </div>
    </section>
  )
}
