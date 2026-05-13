'use client'

// Appears below the navbar once the hero CTA scrolls out of view.
// Watches #hero-cta via scroll listener; silently absent on pages with no hero.

import { useEffect, useState } from 'react'
import Link from 'next/link'
import { CalendarCheck } from 'lucide-react'

interface StickyBookingBarProps {
  label: string
  href:  string
}

export default function StickyBookingBar({ label, href }: StickyBookingBarProps) {
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const sentinel = document.getElementById('hero-cta')
    if (!sentinel) return

    const check = () => setVisible(sentinel.getBoundingClientRect().bottom < 0)

    check()
    window.addEventListener('scroll', check, { passive: true })
    return () => window.removeEventListener('scroll', check)
  }, [])

  return (
    <div
      aria-hidden={!visible}
      className={[
        'fixed left-0 right-0 z-40',
        'top-nav',
        'flex items-center justify-center',
        'px-6 py-3',
        visible
          ? 'opacity-100 pointer-events-auto [animation:fade-in_700ms_ease_both]'
          : 'opacity-0 pointer-events-none',
      ].join(' ')}
    >
      <Link
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        className={[
          'inline-flex items-center gap-2',
          'rounded-full',
          'bg-cerulean px-6 py-2',
          'text-sm font-semibold text-neutral-0',
          'transition-colors duration-200',
          'hover:bg-cerulean/80',
          'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cerulean focus-visible:ring-offset-2 focus-visible:ring-offset-eerie-black',
        ].join(' ')}
        aria-label={label}
      >
        <CalendarCheck size={16} aria-hidden="true" />
        {label}
      </Link>
    </div>
  )
}
