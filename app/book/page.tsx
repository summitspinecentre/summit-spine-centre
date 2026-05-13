// app/book/page.tsx — Book Your Visit
// Server Component throughout. MedicalClinic JSON-LD injected in <head>.

import type { Metadata } from 'next'
import { Phone, Clock, ExternalLink } from 'lucide-react'
import { cn } from '@/lib/utils'
import { localBusinessSchema } from '@/lib/schema'
import { bookPage } from '@/content/pages'
import Hero from '@/components/sections/Hero'
import FAQSection from '@/components/sections/FAQSection'
import CTASection from '@/components/sections/CTASection'

// ── Metadata ─────────────────────────────────────────────────

export function generateMetadata(): Metadata {
  const { meta } = bookPage
  return {
    title:       { absolute: meta.title },
    description: meta.description,
    keywords:    meta.keywords.join(', '),
    alternates:  { canonical: meta.canonicalPath },
    openGraph: {
      title:       meta.title,
      description: meta.description,
      type:        'website',
    },
  }
}

// ── Page ─────────────────────────────────────────────────────

export default function BookPage() {
  const { hero, bookingEmbedUrl, contact, faqs, cta } = bookPage

  return (
    <>
      {/* LocalBusiness JSON-LD */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema()) }}
      />

      {/* Hero */}
      <Hero data={hero} eyebrow="Airdrie, Alberta" />

      {/* Booking + Quick Contact */}
      <section
        aria-label="Online booking"
        className="bg-neutral-100 py-section lg:py-section-lg"
      >
        <div className="mx-auto w-full max-w-screen-xl px-6 md:px-12 lg:px-20">
          <div className="grid grid-cols-1 gap-10 lg:grid-cols-3 lg:gap-12">

            {/* ── Booking iframe (2/3 width on lg) ──────── */}
            <div className="lg:col-span-2">
              <div className="overflow-hidden rounded-xl border border-dun bg-neutral-0 shadow-md">
                {/* Iframe header bar */}
                <div className="flex items-center justify-between border-b border-dun px-6 py-4">
                  <p className="font-heading text-base font-semibold text-eerie-black">
                    Select a Date & Time
                  </p>
                  <a
                    href={bookingEmbedUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={cn(
                      'flex items-center gap-1.5 text-sm font-medium text-cerulean',
                      'underline-offset-2 hover:underline transition-colors',
                    )}
                    aria-label="Open booking page in a new tab"
                  >
                    Open in new tab
                    <ExternalLink className="h-3.5 w-3.5" aria-hidden="true" />
                  </a>
                </div>

                {/* Booking embed */}
                <iframe
                  src={bookingEmbedUrl}
                  title="Summit Spine Centre online booking"
                  className="h-[640px] w-full border-0"
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  aria-label="Online booking calendar for Summit Spine Centre"
                />
              </div>

              {/* Fallback notice */}
              <p className="mt-3 text-center text-sm text-text-body">
                If the booking calendar does not load,{' '}
                <a
                  href={bookingEmbedUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-medium text-cerulean underline-offset-2 hover:underline"
                >
                  open it directly
                </a>{' '}
                or call us at{' '}
                <a
                  href="tel:4039484440"
                  className="font-medium text-cerulean underline-offset-2 hover:underline"
                >
                  {contact.phone}
                </a>
                .
              </p>
            </div>

            {/* ── Quick contact sidebar (1/3 width on lg) ─ */}
            <div className="flex flex-col gap-6">

              {/* Phone card */}
              <div className="rounded-xl border border-dun bg-neutral-0 p-6 shadow-sm">
                <div className="mb-4 flex items-center gap-3">
                  <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-hemlock-50">
                    <Phone className="h-4 w-4 text-cerulean" aria-hidden="true" />
                  </div>
                  <p className="text-sm font-semibold uppercase tracking-widest text-ebony">
                    Prefer to Call?
                  </p>
                </div>
                <a
                  href="tel:4039484440"
                  className={cn(
                    'block text-xl font-bold text-eerie-black',
                    'underline-offset-2 hover:text-cerulean hover:underline transition-colors',
                  )}
                >
                  {contact.phone}
                </a>
                <p className="mt-1 text-sm text-text-body">
                  Walk-ins welcome — call ahead to confirm availability.
                </p>
              </div>

              {/* Hours card */}
              <div className="rounded-xl border border-dun bg-neutral-0 p-6 shadow-sm">
                <div className="mb-4 flex items-center gap-3">
                  <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-hemlock-50">
                    <Clock className="h-4 w-4 text-cerulean" aria-hidden="true" />
                  </div>
                  <p className="text-sm font-semibold uppercase tracking-widest text-ebony">
                    Hours
                  </p>
                </div>
                <table className="w-full text-sm" aria-label="Clinic hours">
                  <tbody>
                    {contact.hours.map(({ days, hours, hours2 }) => (
                      <tr
                        key={days}
                        className={cn(
                          'border-b border-dun/40 last:border-0',
                          hours === 'Closed' && 'opacity-50',
                        )}
                      >
                        <td className="py-1.5 pr-3 font-medium text-eerie-black">{days}</td>
                        <td className="py-1.5 text-right tabular-nums text-text-body">
                          {hours}
                          {hours2 && (
                            <span className="block text-right text-text-body">{hours2}</span>
                          )}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>

              {/* Walk-in notice */}
              <div className="rounded-xl border border-cerulean/30 bg-cerulean/5 p-5">
                <p className="text-sm leading-relaxed text-eerie-black">
                  <span className="font-semibold text-cerulean">Walk-ins welcome.</span>{' '}
                  No referral needed. First appointment includes a full assessment
                  and — in most cases — your first treatment.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQs */}
      {faqs && faqs.items.length > 0 && (
        <FAQSection data={faqs} />
      )}

      {/* CTA */}
      <CTASection data={cta} />
    </>
  )
}
