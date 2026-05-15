'use client'

// components/ui/ConditionPillGrid.tsx
// Staggered photo-pill grid for the "What brings you in?" home section.
// Each pill shows the condition page's hero photo as a full-bleed background
// with a bottom-up gradient overlay and a subtle zoom on hover.
// prefers-reduced-motion: stagger and y-slide are skipped; opacity still fades.

import Image from 'next/image'
import Link from 'next/link'
import { ArrowRight } from 'lucide-react'
import { motion, useReducedMotion } from 'framer-motion'
import { cn } from '@/lib/utils'

// ── Types ────────────────────────────────────────────────────

export interface ConditionPillItem {
  label: string
  slug:  string
  image?: string
}

interface ConditionPillGridProps {
  conditions: ConditionPillItem[]
  columns:    2 | 3 | 4
}

// ── Animation variants ───────────────────────────────────────

const columnsMap: Record<2 | 3 | 4, string> = {
  2: 'lg:grid-cols-2',
  3: 'lg:grid-cols-3',
  4: 'lg:grid-cols-4',
}

// ── Component ────────────────────────────────────────────────

export default function ConditionPillGrid({ conditions, columns }: ConditionPillGridProps) {
  const reduced = useReducedMotion()

  const container = {
    hidden: {},
    show: {
      transition: {
        staggerChildren: reduced ? 0 : 0.12,
        delayChildren:   reduced ? 0 : 0.1,
      },
    },
  }

  const item = {
    hidden: { opacity: 0, y: reduced ? 0 : 28 },
    show:   {
      opacity: 1,
      y: 0,
      transition: { duration: 0.55, ease: [0.0, 0.0, 0.2, 1] as [number, number, number, number] },
    },
  }

  return (
    <motion.ul
      role="list"
      variants={container}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, margin: '-100px' }}
      className={cn(
        'grid grid-cols-1 gap-4 sm:grid-cols-2',
        columnsMap[columns],
      )}
    >
      {conditions.map(({ label, slug, image }) => (
        <motion.li key={slug} variants={item}>
          <Link
            href={`/conditions/${slug}`}
            aria-label={`Learn about ${label}`}
            className={cn(
              'group relative flex overflow-hidden rounded-xl',
              'aspect-[3/2]',
              'focus-visible:outline-none focus-visible:ring-2',
              'focus-visible:ring-cerulean focus-visible:ring-offset-2',
            )}
          >
            {/* Background photo */}
            {image && (
              <Image
                src={image}
                alt=""
                fill
                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                className={cn(
                  'object-cover',
                  'transition-transform duration-700 ease-out',
                  'group-hover:scale-[1.06]',
                )}
              />
            )}

            {/* Fallback background when no image */}
            {!image && (
              <div
                aria-hidden="true"
                className="absolute inset-0 bg-hemlock-400"
              />
            )}

            {/* Dark gradient overlay — lightens slightly on hover */}
            <div
              aria-hidden="true"
              className={cn(
                'absolute inset-0',
                'bg-gradient-to-t from-eerie-black/85 via-eerie-black/35 to-eerie-black/10',
                'transition-opacity duration-400',
                'group-hover:opacity-85',
              )}
            />

            {/* Label + arrow */}
            <div className="absolute inset-x-0 bottom-0 flex items-end justify-between p-5">
              <p className="text-lg font-semibold leading-snug text-neutral-0 drop-shadow-sm">
                {label}
              </p>
              <span
                aria-hidden="true"
                className={cn(
                  'flex shrink-0 items-center text-neutral-0/70',
                  'transition-[transform,opacity] duration-300',
                  'group-hover:translate-x-0.5 group-hover:opacity-100',
                )}
              >
                <ArrowRight size={18} strokeWidth={2} />
              </span>
            </div>
          </Link>
        </motion.li>
      ))}
    </motion.ul>
  )
}
