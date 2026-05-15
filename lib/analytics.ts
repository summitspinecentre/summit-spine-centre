// lib/analytics.ts
// Safe GA4 event helper — guards against gtag not yet loaded or GA_ID absent.
// All booking CTA clicks fire 'booking_cta_click' with a source label so
// GA4 reports can distinguish sticky bar, hero, and in-page CTAs.

declare global {
  interface Window {
    gtag?: (...args: unknown[]) => void
  }
}

type GaParams = Record<string, string | number | boolean>

export function fireGAEvent(name: string, params?: GaParams): void {
  if (typeof window === 'undefined') return
  if (typeof window.gtag !== 'function') return
  window.gtag('event', name, params)
}

export const BOOKING_URL_FRAGMENT = '/booking/'

export function isBookingHref(href: string): boolean {
  return href.includes(BOOKING_URL_FRAGMENT)
}
