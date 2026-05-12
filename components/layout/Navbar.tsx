'use client'

import { useState, useEffect, useRef } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { Menu, X, ChevronDown } from 'lucide-react'
import { cn } from '@/lib/utils'
import { LOGO } from '@/styles/tokens'
import { navConfig } from '@/content/pages'
import Button from '@/components/ui/Button'
import { useNavTheme } from './NavThemeProvider'

export default function Navbar() {
  const [mobileOpen, setMobileOpen]           = useState(false)
  const [scrolled, setScrolled]               = useState(false)
  const [activeDropdown, setActiveDropdown]   = useState<string | null>(null)
  const [activeMobileSection, setActiveMobileSection] = useState<string | null>(null)
  const [logoError, setLogoError]             = useState(false)
  const { variant } = useNavTheme()
  const navRef = useRef<HTMLDivElement>(null)

  const isHero = variant === 'hero'

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        setActiveDropdown(null)
        setMobileOpen(false)
      }
    }
    document.addEventListener('keydown', onKey)
    return () => document.removeEventListener('keydown', onKey)
  }, [])

  useEffect(() => {
    const onOutsideClick = (e: MouseEvent) => {
      if (navRef.current && !navRef.current.contains(e.target as Node)) {
        setActiveDropdown(null)
      }
    }
    document.addEventListener('mousedown', onOutsideClick)
    return () => document.removeEventListener('mousedown', onOutsideClick)
  }, [])

  const toggleDropdown = (href: string) =>
    setActiveDropdown((prev) => (prev === href ? null : href))

  return (
    <header
      className={cn(
        'fixed top-0 left-0 right-0 z-30 transition-all duration-700',
        scrolled
          ? 'bg-neutral-0 shadow-md h-16'
          : 'bg-transparent h-20',
      )}
    >
      <div className="max-w-[1200px] mx-auto px-6 h-full flex items-center justify-between">

        {/* Logo */}
        <Link href="/" aria-label={`${LOGO.alt} — Home`} className="flex-shrink-0">
          {logoError ? (
            <span className="font-heading font-bold text-xl text-text">
              {LOGO.alt}
            </span>
          ) : (
            <div className="relative h-12 w-60">
              <Image
                src={LOGO.darkSrc}
                alt={LOGO.alt}
                fill
                sizes="240px"
                priority
                onError={() => setLogoError(true)}
                className="object-contain object-left"
              />
            </div>
          )}
        </Link>

        {/* Desktop nav */}
        <nav ref={navRef} aria-label="Main navigation" className="hidden lg:flex items-center gap-8">
          {navConfig.items.map((item) => (
            <div key={item.href} className="relative">
              {item.children ? (
                <>
                  <button
                    type="button"
                    onClick={() => toggleDropdown(item.href)}
                    aria-expanded={activeDropdown === item.href}
                    aria-haspopup="menu"
                    className={cn(
                      'flex items-center gap-1 text-base font-medium transition-colors duration-300 outline-none',
                      scrolled || !isHero
                        ? 'text-text hover:text-accent focus-visible:text-accent'
                        : 'text-neutral-0 hover:text-neutral-0/70 focus-visible:text-neutral-0/70',
                    )}
                  >
                    {item.label}
                    <ChevronDown
                      className={cn(
                        'w-4 h-4 transition-transform duration-150',
                        activeDropdown === item.href && 'rotate-180',
                      )}
                      aria-hidden="true"
                    />
                  </button>

                  {activeDropdown === item.href && (
                    <div
                      role="menu"
                      aria-label={`${item.label} submenu`}
                      className="absolute top-full left-0 mt-2 py-2 bg-neutral-0 rounded-lg shadow-lg border border-border min-w-[240px] z-20"
                    >
                      {item.children.map((child) => (
                        <Link
                          key={child.href}
                          href={child.href}
                          role="menuitem"
                          onClick={() => setActiveDropdown(null)}
                          className="block px-4 py-2 text-sm text-text hover:bg-hemlock-50 hover:text-accent transition-colors duration-150 outline-none focus-visible:bg-hemlock-50 focus-visible:text-accent"
                        >
                          {child.label}
                        </Link>
                      ))}
                    </div>
                  )}
                </>
              ) : (
                <Link
                  href={item.href}
                  className={cn(
                    'text-base font-medium transition-colors duration-300 outline-none',
                    scrolled || !isHero
                      ? 'text-text hover:text-accent focus-visible:text-accent'
                      : 'text-neutral-0 hover:text-neutral-0/70 focus-visible:text-neutral-0/70',
                  )}
                >
                  {item.label}
                </Link>
              )}
            </div>
          ))}
        </nav>

        {/* CTA + mobile toggle */}
        <div className="flex items-center gap-3">
          <div className="hidden lg:block">
            <Button
              label={navConfig.cta.label}
              href={navConfig.cta.href}
              external={navConfig.cta.external}
              variant="primary"
              size="sm"
            />
          </div>
          <button
            type="button"
            className={cn(
              'lg:hidden p-2 transition-colors duration-300 outline-none',
              scrolled || !isHero
                ? 'text-text hover:text-accent focus-visible:text-accent'
                : 'text-neutral-0 hover:text-neutral-0/70 focus-visible:text-neutral-0/70',
            )}
            onClick={() => { setMobileOpen((prev) => !prev); setActiveMobileSection(null) }}
            aria-expanded={mobileOpen}
            aria-label={mobileOpen ? 'Close navigation menu' : 'Open navigation menu'}
            aria-controls="mobile-menu"
          >
            {mobileOpen
              ? <X className="w-6 h-6" aria-hidden="true" />
              : <Menu className="w-6 h-6" aria-hidden="true" />
            }
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {mobileOpen && (
        <div
          id="mobile-menu"
          role="dialog"
          aria-modal="true"
          aria-label="Navigation menu"
          className="lg:hidden fixed inset-x-0 top-16 bottom-0 bg-neutral-0 z-20 overflow-y-auto border-t border-border"
        >
          <nav aria-label="Mobile navigation" className="px-6 py-8 flex flex-col gap-1">
            {navConfig.items.map((item) => (
              <div key={item.href}>
                {item.children ? (
                  <>
                    <button
                      type="button"
                      onClick={() =>
                        setActiveMobileSection((prev) => (prev === item.href ? null : item.href))
                      }
                      aria-expanded={activeMobileSection === item.href}
                      aria-controls={`mobile-section-${item.href.replace(/\//g, '-')}`}
                      className="flex w-full items-center justify-between py-3 text-lg font-medium text-text hover:text-accent border-b border-border/40 transition-colors duration-150"
                    >
                      {item.label}
                      <ChevronDown
                        className={cn(
                          'w-5 h-5 transition-transform duration-200',
                          activeMobileSection === item.href && 'rotate-180',
                        )}
                        aria-hidden="true"
                      />
                    </button>
                    {activeMobileSection === item.href && (
                      <div
                        id={`mobile-section-${item.href.replace(/\//g, '-')}`}
                        className="pl-4 py-2 flex flex-col gap-1 border-b border-border/40"
                      >
                        {item.children.map((child) => (
                          <Link
                            key={child.href}
                            href={child.href}
                            onClick={() => { setMobileOpen(false); setActiveMobileSection(null) }}
                            className="block py-2 text-base text-text-muted hover:text-accent transition-colors duration-150"
                          >
                            {child.label}
                          </Link>
                        ))}
                      </div>
                    )}
                  </>
                ) : (
                  <Link
                    href={item.href}
                    onClick={() => setMobileOpen(false)}
                    className="block py-3 text-lg font-medium text-text hover:text-accent border-b border-border/40 transition-colors duration-150"
                  >
                    {item.label}
                  </Link>
                )}
              </div>
            ))}
            <div className="pt-6">
              <Button
                label={navConfig.cta.label}
                href={navConfig.cta.href}
                external={navConfig.cta.external}
                variant="primary"
                size="md"
                className="w-full justify-center"
              />
            </div>
          </nav>
        </div>
      )}
    </header>
  )
}
