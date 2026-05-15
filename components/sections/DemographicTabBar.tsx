'use client'

// components/sections/DemographicTabBar.tsx
// "Sound Familiar?" — 6 large demographic selector buttons, each revealing
// a panel of condition cards that link to the conditions pages.
// Client Component: active-tab state + ARIA keyboard navigation.

import { useState, useRef, useCallback } from 'react'
import Link from 'next/link'
import { ArrowRight, ChevronRight } from 'lucide-react'
import { cn } from '@/lib/utils'
import Button from '@/components/ui/Button'
import type { ColorScheme, DemographicTabBarSection } from '@/types/content'

// ── Props ────────────────────────────────────────────────────

interface DemographicTabBarProps {
  data: DemographicTabBarSection
  className?: string
}

// ── Scheme tokens ────────────────────────────────────────────

interface SchemeTokens {
  section:         string
  heading:         string
  // Inactive selector button
  btnBase:         string
  btnHover:        string
  // Active selector button
  btnActive:       string
  // Panel
  panelBg:         string
  empathy:         string
  // Condition card — standard
  cardBg:          string
  cardBorder:      string
  cardHoverBorder: string
  cardLabel:       string
  cardBody:        string
  cardArrow:       string
  // "Other" condition card
  otherBg:         string
  otherBorder:     string
  otherLabel:      string
  otherBody:       string
  darkMode:        boolean
}

const schemeTokens: Record<ColorScheme, SchemeTokens> = {
  1: {
    section:         'bg-neutral-0',
    heading:         'text-eerie-black',
    btnBase:         'bg-hemlock-50 border border-dun text-eerie-black',
    btnHover:        'hover:bg-cerulean/8 hover:border-cerulean hover:text-cerulean hover:shadow-sm',
    btnActive:       'bg-cerulean border border-cerulean text-neutral-0 shadow-lg',
    panelBg:         'bg-neutral-100',
    empathy:         'text-text-muted',
    cardBg:          'bg-neutral-0',
    cardBorder:      'border-border',
    cardHoverBorder: 'hover:border-cerulean',
    cardLabel:       'text-eerie-black',
    cardBody:        'text-text-muted',
    cardArrow:       'text-cerulean',
    otherBg:         'bg-cerulean/5',
    otherBorder:     'border-cerulean/40',
    otherLabel:      'text-cerulean',
    otherBody:       'text-text-muted',
    darkMode:        false,
  },
  2: {
    section:         'bg-neutral-100',
    heading:         'text-eerie-black',
    btnBase:         'bg-hemlock-50 border border-dun text-eerie-black',
    btnHover:        'hover:bg-cerulean/8 hover:border-cerulean hover:text-cerulean hover:shadow-sm',
    btnActive:       'bg-cerulean border border-cerulean text-neutral-0 shadow-lg',
    panelBg:         'bg-neutral-0',
    empathy:         'text-text-muted',
    cardBg:          'bg-neutral-100',
    cardBorder:      'border-border',
    cardHoverBorder: 'hover:border-cerulean',
    cardLabel:       'text-eerie-black',
    cardBody:        'text-text-muted',
    cardArrow:       'text-cerulean',
    otherBg:         'bg-cerulean/5',
    otherBorder:     'border-cerulean/40',
    otherLabel:      'text-cerulean',
    otherBody:       'text-text-muted',
    darkMode:        false,
  },
  3: {
    section:         'bg-hemlock-50',
    heading:         'text-eerie-black',
    btnBase:         'bg-neutral-0 border border-dun text-eerie-black',
    btnHover:        'hover:bg-cerulean/8 hover:border-cerulean hover:text-cerulean hover:shadow-sm',
    btnActive:       'bg-cerulean border border-cerulean text-neutral-0 shadow-lg',
    panelBg:         'bg-neutral-0',
    empathy:         'text-text-muted',
    cardBg:          'bg-hemlock-50',
    cardBorder:      'border-border',
    cardHoverBorder: 'hover:border-cerulean',
    cardLabel:       'text-eerie-black',
    cardBody:        'text-text-muted',
    cardArrow:       'text-cerulean',
    otherBg:         'bg-cerulean/5',
    otherBorder:     'border-cerulean/40',
    otherLabel:      'text-cerulean',
    otherBody:       'text-text-muted',
    darkMode:        false,
  },
  4: {
    section:         'bg-hemlock-400',
    heading:         'text-neutral-0',
    btnBase:         'bg-hemlock-500/40 border border-neutral-0/20 text-neutral-0/80',
    btnHover:        'hover:border-cerulean hover:bg-cerulean/20 hover:text-neutral-0',
    btnActive:       'bg-cerulean border border-cerulean text-neutral-0 shadow-lg',
    panelBg:         'bg-hemlock-500',
    empathy:         'text-neutral-0/80',
    cardBg:          'bg-hemlock-400/60',
    cardBorder:      'border-neutral-0/20',
    cardHoverBorder: 'hover:border-neutral-0/60',
    cardLabel:       'text-neutral-0',
    cardBody:        'text-neutral-0/70',
    cardArrow:       'text-neutral-0/60',
    otherBg:         'bg-neutral-0/10',
    otherBorder:     'border-neutral-0/30',
    otherLabel:      'text-neutral-0',
    otherBody:       'text-neutral-0/70',
    darkMode:        true,
  },
}

// ── Component ────────────────────────────────────────────────

export default function DemographicTabBar({ data, className }: DemographicTabBarProps) {
  const { headline, tabs, scheme } = data

  const [activeIndex, setActiveIndex] = useState<number | null>(null)
  const btnRefs = useRef<(HTMLButtonElement | null)[]>([])

  const cfg = schemeTokens[scheme]

  // ARIA keyboard navigation
  const handleKeyDown = useCallback(
    (e: React.KeyboardEvent<HTMLButtonElement>, index: number) => {
      let next: number | null = null
      if (e.key === 'ArrowRight') next = (index + 1) % tabs.length
      if (e.key === 'ArrowLeft')  next = (index - 1 + tabs.length) % tabs.length
      if (e.key === 'Home')       next = 0
      if (e.key === 'End')        next = tabs.length - 1
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

        {/* ── Demographic selector buttons ─────────────────── */}
        <div
          role="tablist"
          aria-label="Patient demographics"
          className="mb-8 grid grid-cols-2 gap-3 md:grid-cols-3"
        >
          {tabs.map((tab, i) => {
            const isActive = i === activeIndex
            return (
              <button
                key={tab.id}
                id={`tab-${tab.id}`}
                role="tab"
                aria-selected={isActive}
                aria-controls={`panel-${tab.id}`}
                tabIndex={isActive || activeIndex === null ? 0 : -1}
                ref={el => { btnRefs.current[i] = el }}
                onClick={() => setActiveIndex(isActive ? null : i)}
                onKeyDown={e => handleKeyDown(e, i)}
                className={cn(
                  'group rounded-xl px-6 py-5 text-left text-lg font-semibold',
                  'transition-colors duration-200 outline-none',
                  'focus-visible:ring-2 focus-visible:ring-cerulean focus-visible:ring-offset-2',
                  isActive
                    ? cfg.btnActive
                    : cn(cfg.btnBase, cfg.btnHover),
                )}
              >
                <span className="flex items-center justify-between gap-3">
                  {tab.label}
                  <ChevronRight
                    size={18}
                    aria-hidden="true"
                    className={cn(
                      'shrink-0 transition-[transform,opacity] duration-200',
                      isActive
                        ? 'rotate-90 opacity-100'
                        : 'opacity-40 group-hover:opacity-80 group-hover:translate-x-0.5',
                    )}
                  />
                </span>
              </button>
            )
          })}
        </div>

        {/* ── Tab panels ────────────────────────────────────── */}
        {tabs.map((tab, i) => {
          const isActive = i === activeIndex
          return (
            <div
              key={tab.id}
              id={`panel-${tab.id}`}
              role="tabpanel"
              aria-labelledby={`tab-${tab.id}`}
              hidden={!isActive}
              className={cn(
                'rounded-2xl p-6 md:p-8 lg:p-10',
                cfg.panelBg,
              )}
            >
              {/* Empathy statement */}
              {tab.empathyStatement && (
                <p className={cn('mb-8 max-w-2xl text-lg leading-relaxed', cfg.empathy)}>
                  {tab.empathyStatement}
                </p>
              )}

              {/* Condition cards — 2-col grid */}
              {tab.conditions.length > 0 && (
                <ul
                  aria-label={`Common conditions for ${tab.label}`}
                  className="mb-8 grid grid-cols-1 gap-3 sm:grid-cols-2"
                >
                  {tab.conditions.map((condition, j) => {
                    const isOther = !condition.slug
                    const cardInner = (
                      <div
                        className={cn(
                          'flex h-full flex-col gap-2 rounded-xl border p-5 transition-colors duration-150',
                          isOther
                            ? cn('border-dashed', cfg.otherBg, cfg.otherBorder)
                            : cn(cfg.cardBg, cfg.cardBorder, condition.slug && cfg.cardHoverBorder),
                        )}
                      >
                        <p
                          className={cn(
                            'text-sm font-semibold',
                            isOther ? cfg.otherLabel : cfg.cardLabel,
                          )}
                        >
                          {condition.label}
                        </p>
                        <p
                          className={cn(
                            'text-sm leading-relaxed',
                            isOther ? cfg.otherBody : cfg.cardBody,
                          )}
                        >
                          {condition.description}
                        </p>
                        {condition.slug && (
                          <span
                            aria-hidden="true"
                            className={cn(
                              'mt-auto flex items-center gap-1 text-xs font-semibold',
                              cfg.cardArrow,
                            )}
                          >
                            Learn more <ArrowRight size={12} />
                          </span>
                        )}
                      </div>
                    )

                    return (
                      <li key={j}>
                        {condition.slug ? (
                          <Link
                            href={`/conditions/${condition.slug}`}
                            aria-label={`Learn about ${condition.label}`}
                            className="block h-full"
                          >
                            {cardInner}
                          </Link>
                        ) : (
                          cardInner
                        )}
                      </li>
                    )
                  })}
                </ul>
              )}

              {/* CTA */}
              <Button
                label={tab.cta.label}
                href={tab.cta.href}
                external={tab.cta.external ?? true}
                variant={tab.cta.variant ?? (cfg.darkMode ? 'secondary' : 'primary')}
                size="md"
                className={
                  cfg.darkMode
                    ? 'border-neutral-0 text-neutral-0 hover:bg-neutral-0/10'
                    : undefined
                }
              />
            </div>
          )
        })}

        {/* Prompt shown when no demographic is selected */}
        {activeIndex === null && (
          <p className={cn('text-sm', cfg.empathy)}>
            Select a category above to see common conditions we treat.
          </p>
        )}

      </div>
    </section>
  )
}
