// components/sections/TeamSection.tsx
// Server Component — team member card grid.
// Returns null when members array is empty (safe for all current stubs).
// Falls back to an initials circle when member.image.src is not yet set.
//
// Used on: Home (team, scheme 1), About (team), Meet the Team page (team)

import Image from 'next/image'
import { cn } from '@/lib/utils'
import type { TeamSection as TeamSectionData, ColorScheme } from '@/types/content'
import FadeIn from '@/components/ui/FadeIn'

// ── Types ────────────────────────────────────────────────────

export interface TeamSectionProps {
  data:       TeamSectionData
  className?: string
}

// ── Scheme config ─────────────────────────────────────────────

interface SchemeTokens {
  section:      string
  headline:     string
  subheadline:  string
  card:         string
  imgFallback:  string
  initials:     string
  name:         string
  role:         string
  credentials:  string
  bio:          string
  specialtyBg:  string
  specialtyText: string
}

const schemeMap: Record<ColorScheme, SchemeTokens> = {
  1: {
    section:       'bg-neutral-0',
    headline:      'text-eerie-black',
    subheadline:   'text-text-muted',
    card:          'bg-neutral-100',
    imgFallback:   'bg-hemlock-50',
    initials:      'text-hemlock-500',
    name:          'text-eerie-black',
    role:          'text-hemlock-500',
    credentials:   'text-text-muted',
    bio:           'text-text-muted',
    specialtyBg:   'bg-hemlock-50',
    specialtyText: 'text-hemlock-500',
  },
  2: {
    section:       'bg-neutral-100',
    headline:      'text-eerie-black',
    subheadline:   'text-text-muted',
    card:          'bg-neutral-0',
    imgFallback:   'bg-hemlock-50',
    initials:      'text-hemlock-500',
    name:          'text-eerie-black',
    role:          'text-hemlock-500',
    credentials:   'text-text-muted',
    bio:           'text-text-muted',
    specialtyBg:   'bg-hemlock-50',
    specialtyText: 'text-hemlock-500',
  },
  3: {
    section:       'bg-hemlock-50',
    headline:      'text-eerie-black',
    subheadline:   'text-text-muted',
    card:          'bg-neutral-0',
    imgFallback:   'bg-hemlock-100',
    initials:      'text-hemlock-500',
    name:          'text-eerie-black',
    role:          'text-hemlock-500',
    credentials:   'text-text-muted',
    bio:           'text-text-muted',
    specialtyBg:   'bg-hemlock-100',
    specialtyText: 'text-hemlock-500',
  },
  4: {
    section:       'bg-hemlock-400',
    headline:      'text-neutral-0',
    subheadline:   'text-neutral-0/80',
    card:          'bg-hemlock-600/40',
    imgFallback:   'bg-hemlock-600',
    initials:      'text-neutral-0/80',
    name:          'text-neutral-0',
    role:          'text-neutral-0/80',
    credentials:   'text-neutral-0/60',
    bio:           'text-neutral-0/70',
    specialtyBg:   'bg-hemlock-600',
    specialtyText: 'text-neutral-0/80',
  },
}

// ── Component ─────────────────────────────────────────────────

export default function TeamSection({ data, className }: TeamSectionProps) {
  const { headline, subheadline, members, scheme = 1 } = data
  const cfg = schemeMap[scheme]

  if (members.length === 0) return null

  const gridCols =
    members.length === 1 ? 'max-w-sm' :
    members.length === 2 ? 'sm:grid-cols-2 max-w-2xl' :
    'sm:grid-cols-2 lg:grid-cols-3'

  return (
    <section
      aria-label={headline ?? 'Meet the team'}
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

        {/* ── Member grid ───────────────────────────────────── */}
        <FadeIn delay={0.15}>
        <ul role="list" className={cn('grid grid-cols-1 gap-8', gridCols)}>
          {members.map((member) => (
            <li key={member.id} className={cn('overflow-hidden rounded-lg', cfg.card)}>

              {/* Photo */}
              <div className="relative aspect-[4/3] w-full overflow-hidden">
                {member.image.src ? (
                  <Image
                    src={member.image.src}
                    alt={member.image.alt}
                    fill
                    className="object-cover object-top"
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    priority={member.image.priority}
                  />
                ) : (
                  <div
                    className={cn(
                      'flex h-full w-full items-center justify-center',
                      cfg.imgFallback,
                    )}
                    aria-hidden="true"
                  >
                    <span
                      className={cn(
                        'font-heading text-4xl font-bold select-none',
                        cfg.initials,
                      )}
                    >
                      {member.name.charAt(0)}
                    </span>
                  </div>
                )}
              </div>

              {/* Info */}
              <div className="p-6">
                <div className="mb-3">
                  <h3 className={cn('text-lg font-semibold leading-snug', cfg.name)}>
                    {member.name}
                  </h3>
                  <p className={cn('mt-0.5 text-sm font-medium', cfg.role)}>
                    {member.role}
                    {member.credentials && (
                      <span className={cn('ml-2 font-normal', cfg.credentials)}>
                        {member.credentials}
                      </span>
                    )}
                  </p>
                </div>

                <p className={cn('text-sm leading-relaxed', cfg.bio)}>
                  {member.bio}
                </p>

                {member.specialties && member.specialties.length > 0 && (
                  <ul
                    role="list"
                    aria-label={`${member.name}'s specialties`}
                    className="mt-4 flex flex-wrap gap-2"
                  >
                    {member.specialties.map((specialty) => (
                      <li
                        key={specialty}
                        className={cn(
                          'rounded px-2 py-0.5 text-xs font-medium',
                          cfg.specialtyBg,
                          cfg.specialtyText,
                        )}
                      >
                        {specialty}
                      </li>
                    ))}
                  </ul>
                )}
              </div>

            </li>
          ))}
        </ul>
        </FadeIn>

      </div>
    </section>
  )
}
