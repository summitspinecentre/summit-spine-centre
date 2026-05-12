// components/sections/Hero.tsx
// Server Component — no interactivity, used on every page in the site.
// Scheme 4 = dark (hemlock-400 bg), Schemes 1–3 = light.
// Layout: two-column when `data.image` is present, single-col centered otherwise.
// Video background: absolute-positioned behind content (scheme 4 only in practice).

import Image from 'next/image'
import { cn } from '@/lib/utils'
import Button from '@/components/ui/Button'
import type { ColorScheme, HeroSection, StatItem } from '@/types/content'

// ── Props ────────────────────────────────────────────────────

interface HeroProps {
  data: HeroSection
  eyebrow?: string
  /** Stat items rendered as a bottom bar inside the hero (bgImage heroes only) */
  statsBar?: StatItem[]
  /** Tailwind `to-*` class for the bottom gradient fade into the next section, e.g. "to-neutral-100" */
  bottomFade?: string
  /** Tailwind `bg-*` class for the scroll-driven full-overlay fade, e.g. "bg-neutral-100" */
  scrollFade?: string
  className?: string
}

// ── Scheme config ────────────────────────────────────────────

type SchemeTokens = {
  section:     string
  eyebrow:     string
  headline:    string
  subheadline: string
  body:        string
  overlay:     string
  darkMode:    boolean
  statsText:   string
  statsDivider: string
}

const schemeTokens: Record<ColorScheme, SchemeTokens> = {
  1: {
    section:      'bg-neutral-0',
    eyebrow:      'text-cerulean',
    headline:     'text-eerie-black',
    subheadline:  'text-text-muted',
    body:         'text-text-muted',
    overlay:      '',
    darkMode:     false,
    statsText:    'text-eerie-black',
    statsDivider: 'border-border',
  },
  2: {
    section:      'bg-neutral-100',
    eyebrow:      'text-cerulean',
    headline:     'text-eerie-black',
    subheadline:  'text-text-muted',
    body:         'text-text-muted',
    overlay:      '',
    darkMode:     false,
    statsText:    'text-eerie-black',
    statsDivider: 'border-border',
  },
  3: {
    section:      'bg-hemlock-50',
    eyebrow:      'text-cerulean',
    headline:     'text-eerie-black',
    subheadline:  'text-text-muted',
    body:         'text-text-muted',
    overlay:      '',
    darkMode:     false,
    statsText:    'text-eerie-black',
    statsDivider: 'border-border',
  },
  4: {
    section:      'bg-hemlock-400',
    eyebrow:      'text-neutral-0/70',
    headline:     'text-neutral-0',
    subheadline:  'text-dun italic',
    body:         'text-neutral-0/80',
    overlay:      'bg-eerie-black/50',
    darkMode:     true,
    statsText:    'text-neutral-0',
    statsDivider: 'border-neutral-0/20',
  },
}

// ── Component ────────────────────────────────────────────────

export default function Hero({ data, eyebrow, statsBar, bottomFade, scrollFade, className }: HeroProps) {
  const {
    headline,
    subheadline,
    body,
    cta,
    secondaryCta,
    image,
    videoUrl,
    bgImage,
    pullQuote,
    scheme,
  } = data

  const cfg           = schemeTokens[scheme]
  const hasImage      = Boolean(image && !videoUrl)
  const hasBgImage    = Boolean(bgImage && !videoUrl)
  const hasPullQuote  = Boolean(pullQuote && !image && !bgImage && !videoUrl)
  const hasStatsBar   = hasBgImage && Array.isArray(statsBar) && statsBar.length > 0

  return (
    <section
      aria-label={eyebrow ?? headline}
      className={cn(
        'relative overflow-hidden',
        'pt-nav',
        cfg.section,
        hasBgImage && 'min-h-screen',
        className,
      )}
    >
      {/* ── Full-bleed background image with zoom effect ──── */}
      {hasBgImage && bgImage && (
        <>
          <Image
            src={bgImage.src}
            alt={bgImage.alt}
            fill
            priority
            sizes="100vw"
            className="object-cover animate-hero-zoom"
          />
          <div aria-hidden="true" className="absolute inset-0 bg-gradient-to-b from-eerie-black/65 via-eerie-black/55 to-eerie-black/10" />
          {/* Option B: bottom-rise dark vignette — darkens lower half for editorial depth */}
          <div aria-hidden="true" className="absolute bottom-0 left-0 right-0 h-1/2 bg-gradient-to-t from-eerie-black/70 to-transparent" />
          {bottomFade && (
            <div
              aria-hidden="true"
              className={cn(
                'absolute bottom-0 left-0 right-0 h-80 bg-gradient-to-b from-transparent',
                bottomFade,
              )}
            />
          )}
          {/* ── Mountain silhouette layers ───────────────────── */}
          <div aria-hidden="true" className="absolute bottom-0 left-0 right-0 h-28 pointer-events-none overflow-hidden">
            {/* Back ridge — highest peaks, lowest z (hemlock-400 shows in the top band) */}
            <svg
              viewBox="0 0 1440 200"
              preserveAspectRatio="none"
              className="absolute inset-x-0 bottom-0 w-full h-28 fill-hemlock-400"
            >
              <path d="M0,80 C160,55 340,70 520,45 C700,20 880,58 1080,38 C1220,22 1340,42 1440,30 L1440,200 L0,200 Z" />
            </svg>
            {/* Mid ridge — medium peaks, covers back below its ridge (neutral-200 shows in the middle band) */}
            <svg
              viewBox="0 0 1440 200"
              preserveAspectRatio="none"
              className="absolute inset-x-0 bottom-0 w-full h-28 fill-neutral-200"
            >
              <path d="M0,122 C180,104 380,120 600,106 C820,92 1020,112 1240,98 C1340,92 1400,96 1440,94 L1440,200 L0,200 Z" />
            </svg>
            {/* Front ridge — lowest peaks, highest z (neutral-100 shows in the bottom band) */}
            <svg
              viewBox="0 0 1440 200"
              preserveAspectRatio="none"
              className="absolute inset-x-0 bottom-0 w-full h-28 fill-neutral-100"
            >
              <path d="M0,148 C240,136 500,145 740,138 C980,131 1220,143 1440,137 L1440,200 L0,200 Z" />
            </svg>
          </div>

          {scrollFade && (
            <div
              aria-hidden="true"
              className={cn(
                'absolute inset-0',
                'animate-hero-scroll-fade',
                '[animation-timeline:scroll(root)]',
                '[animation-range:0_80vh]',
                scrollFade,
              )}
            />
          )}
        </>
      )}

      {/* ── Ambient video background ──────────────────────── */}
      {videoUrl && (
        <>
          <video
            src={videoUrl}
            autoPlay
            muted
            loop
            playsInline
            aria-hidden="true"
            className="absolute inset-0 h-full w-full object-cover"
          />
          {cfg.overlay && (
            <div aria-hidden="true" className={cn('absolute inset-0', cfg.overlay)} />
          )}
        </>
      )}

      {/* ── Content container ─────────────────────────────── */}
      <div
        className={cn(
          'relative mx-auto w-full max-w-screen-xl px-6 md:px-12 lg:px-20',
          hasImage || hasPullQuote
            ? 'grid grid-cols-1 items-center gap-12 py-section lg:py-section-lg md:grid-cols-2'
            : hasBgImage
              ? 'flex flex-col py-10 md:py-16 lg:py-24 md:min-h-[calc(100vh-5rem)]'
              : 'flex flex-col items-center text-center py-section lg:py-section-lg',
        )}
      >
        {/* ── Text block ──────────────────────────────────── */}
        <div className={cn(hasImage || hasPullQuote ? '' : hasBgImage ? 'max-w-2xl' : 'max-w-3xl')}>
          {eyebrow && (
            hasBgImage ? (
              <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-neutral-0/25 bg-eerie-black/30 px-4 py-1.5 backdrop-blur-sm">
                <span className="h-1.5 w-1.5 rounded-full bg-cerulean flex-shrink-0" aria-hidden="true" />
                <span className="text-xs font-semibold uppercase tracking-[0.12em] text-neutral-0/90">{eyebrow}</span>
              </div>
            ) : (
              <p className={cn('mb-4 text-sm font-semibold uppercase tracking-wider', cfg.eyebrow)}>
                {eyebrow}
              </p>
            )
          )}

          <h1
            className={cn(
              'mb-6 font-heading font-bold leading-tight tracking-tighter',
              'text-[2.5rem] md:text-[3.25rem] lg:text-hero',
              cfg.headline,
            )}
          >
            {headline}
          </h1>

          {subheadline && (
            <p
              className={cn(
                'mb-4 leading-snug',
                hasBgImage ? 'text-2xl md:text-3xl font-medium' : 'text-xl font-medium',
                cfg.subheadline,
              )}
            >
              {subheadline}
            </p>
          )}

          {body && (
            <p
              className={cn(
                'mb-8 text-base leading-relaxed md:text-lg',
                cfg.body,
              )}
            >
              {body}
            </p>
          )}

          {/* CTA row */}
          <div
            className={cn(
              'flex flex-wrap gap-4',
              !hasImage && !hasPullQuote && 'justify-center',
            )}
          >
            <Button
              label={cta.label}
              href={cta.href}
              external={cta.external}
              variant={cta.variant ?? 'primary'}
              size="lg"
            />

            {secondaryCta && (
              <Button
                label={secondaryCta.label}
                href={secondaryCta.href}
                external={secondaryCta.external}
                variant={secondaryCta.variant ?? 'secondary'}
                size="lg"
                // On dark scheme: invert secondary button to white border + text
                className={
                  cfg.darkMode
                    ? 'border border-neutral-0 text-neutral-0 hover:bg-neutral-0 hover:text-eerie-black'
                    : undefined
                }
              />
            )}
          </div>
        </div>

        {/* ── Optional image (right column) ───────────────── */}
        {hasImage && image && (
          <div className="relative overflow-hidden rounded-2xl shadow-lg">
            <Image
              src={image.src}
              alt={image.alt}
              width={image.width}
              height={image.height}
              priority={image.priority ?? true}
              className="w-full object-cover"
            />
          </div>
        )}

        {/* ── Pull quote panel (right column, no image) ───── */}
        {hasPullQuote && pullQuote && (
          <blockquote
            className={cn(
              'flex flex-col justify-center rounded-2xl border-l-4 border-cerulean px-8 py-10',
              cfg.darkMode ? 'bg-neutral-0/10' : 'bg-neutral-100',
            )}
          >
            <p
              className={cn(
                'mb-6 font-heading text-xl font-medium italic leading-relaxed md:text-2xl',
                cfg.darkMode ? 'text-neutral-0' : 'text-eerie-black',
              )}
            >
              &ldquo;{pullQuote.text}&rdquo;
            </p>
            <footer
              className={cn(
                'text-sm font-semibold uppercase tracking-wider',
                cfg.darkMode ? 'text-neutral-0/60' : 'text-text-muted',
              )}
            >
              — {pullQuote.attribution}
            </footer>
          </blockquote>
        )}

        {/* ── Stats bar (bgImage heroes only) ─────────────── */}
        {hasStatsBar && statsBar && (
          <div
            className={cn(
              'mt-auto border-t pt-12',
              cfg.statsDivider,
            )}
          >
            <dl className="grid grid-cols-2 gap-x-8 gap-y-6 md:flex md:flex-row md:gap-0 md:divide-x md:divide-neutral-0/20">
              {statsBar.map((stat, i) => (
                <div
                  key={stat.label}
                  className={cn(
                    'flex flex-col items-start md:flex-1 md:px-8 md:first:pl-0',
                    i % 2 === 1 && 'border-l border-neutral-0/20 pl-8 md:border-l-0',
                  )}
                >
                  <dt className={cn('mb-2 text-xs font-semibold uppercase tracking-widest opacity-60', cfg.statsText)}>
                    {stat.label}
                  </dt>
                  <dd className={cn('text-4xl font-bold font-heading leading-none', cfg.statsText)}>
                    {stat.value}{stat.suffix && <span className="text-xl font-medium ml-1">{stat.suffix}</span>}
                  </dd>
                </div>
              ))}
            </dl>
          </div>
        )}
      </div>
    </section>
  )
}
