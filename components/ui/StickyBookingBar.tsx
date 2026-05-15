'use client'

import { useEffect, useState } from 'react'
import { usePathname } from 'next/navigation'
import Link from 'next/link'
import { CalendarCheck } from 'lucide-react'
import { fireGAEvent } from '@/lib/analytics'

interface StickyBookingBarProps {
  label: string
  href:  string
}

// Show the bar after scrolling this many px — clears the hero CTA on all pages
const SCROLL_THRESHOLD = 350

export default function StickyBookingBar({ label, href }: StickyBookingBarProps) {
  const [visible, setVisible] = useState(false)
  const pathname = usePathname()

  useEffect(() => {
    // Reset bar whenever the page changes
    setVisible(false)

    const check = () => setVisible(window.scrollY > SCROLL_THRESHOLD)

    // Handle pages that are already scrolled (e.g. back-navigation)
    check()

    window.addEventListener('scroll', check, { passive: true })
    return () => window.removeEventListener('scroll', check)
  }, [pathname])

  return (
    <div
      aria-hidden={!visible}
      className={[
        'fixed left-0 right-0 z-40 top-nav',
        'flex items-center justify-center px-6 py-3',
        'transition-all duration-300 ease-out',
        visible
          ? 'opacity-100 translate-y-0 pointer-events-auto'
          : 'opacity-0 -translate-y-1 pointer-events-none',
      ].join(' ')}
    >
      <Link
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        onClick={() => fireGAEvent('booking_cta_click', { label, source: 'sticky_bar' })}
        className={[
          'inline-flex items-center gap-2 rounded-full',
          'bg-cerulean px-6 py-2',
          'text-sm font-semibold text-neutral-0',
          'transition-colors duration-200 hover:bg-cerulean/80',
          'focus-visible:outline-none focus-visible:ring-2',
          'focus-visible:ring-cerulean focus-visible:ring-offset-2',
          'focus-visible:ring-offset-eerie-black',
        ].join(' ')}
        aria-label={label}
      >
        <CalendarCheck size={16} aria-hidden="true" />
        {label}
      </Link>
    </div>
  )
}
