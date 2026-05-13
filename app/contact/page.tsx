// app/contact/page.tsx — Contact Us
// Server Component throughout. LocalBusiness JSON-LD injected in <head>.

import type { Metadata } from 'next'
import { Phone, Mail, MapPin, Clock } from 'lucide-react'
import { cn } from '@/lib/utils'
import { localBusinessSchema } from '@/lib/schema'
import { contactPage } from '@/content/pages'
import Hero from '@/components/sections/Hero'
import FAQSection from '@/components/sections/FAQSection'
import CTASection from '@/components/sections/CTASection'

// ── Metadata ─────────────────────────────────────────────────

export function generateMetadata(): Metadata {
  const { meta } = contactPage
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

export default function ContactPage() {
  const { hero, contact, faqs, cta } = contactPage

  return (
    <>
      {/* LocalBusiness JSON-LD */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema()) }}
      />

      {/* Hero */}
      <Hero
        data={hero}
        eyebrow="Airdrie, Alberta"
      />

      {/* Contact Details + Map */}
      <section
        aria-label="Contact information"
        className="bg-neutral-0 py-section lg:py-section-lg"
      >
        <div className="mx-auto w-full max-w-screen-xl px-6 md:px-12 lg:px-20">
          <div className="grid grid-cols-1 gap-12 lg:grid-cols-2 lg:gap-16">

            {/* ── Left: contact cards ─────────────────────── */}
            <div className="flex flex-col gap-8">

              {/* Phone */}
              <div className="flex items-start gap-4">
                <div className="mt-0.5 flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-hemlock-50">
                  <Phone className="h-5 w-5 text-cerulean" aria-hidden="true" />
                </div>
                <div>
                  <p className="mb-1 text-sm font-semibold uppercase tracking-widest text-ebony">
                    Phone
                  </p>
                  <a
                    href="tel:4039484440"
                    className="text-lg font-medium text-eerie-black underline-offset-2 hover:text-cerulean hover:underline transition-colors"
                  >
                    {contact.phone}
                  </a>
                </div>
              </div>

              {/* Email */}
              <div className="flex items-start gap-4">
                <div className="mt-0.5 flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-hemlock-50">
                  <Mail className="h-5 w-5 text-cerulean" aria-hidden="true" />
                </div>
                <div>
                  <p className="mb-1 text-sm font-semibold uppercase tracking-widest text-ebony">
                    Email
                  </p>
                  <a
                    href={`mailto:${contact.email}`}
                    className="text-lg font-medium text-eerie-black underline-offset-2 hover:text-cerulean hover:underline transition-colors"
                  >
                    {contact.email}
                  </a>
                </div>
              </div>

              {/* Address */}
              <div className="flex items-start gap-4">
                <div className="mt-0.5 flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-hemlock-50">
                  <MapPin className="h-5 w-5 text-cerulean" aria-hidden="true" />
                </div>
                <div>
                  <p className="mb-1 text-sm font-semibold uppercase tracking-widest text-ebony">
                    Address
                  </p>
                  <address className="not-italic text-lg font-medium leading-snug text-eerie-black">
                    {contact.address}<br />
                    {contact.city}, {contact.province} {contact.postalCode}
                  </address>
                </div>
              </div>

              {/* Hours */}
              <div className="flex items-start gap-4">
                <div className="mt-0.5 flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-hemlock-50">
                  <Clock className="h-5 w-5 text-cerulean" aria-hidden="true" />
                </div>
                <div className="flex-1">
                  <p className="mb-3 text-sm font-semibold uppercase tracking-widest text-ebony">
                    Hours of Operation
                  </p>
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
                          <td className="py-2 pr-4 font-medium text-eerie-black">{days}</td>
                          <td className="py-2 text-text-body tabular-nums">
                            {hours}
                            {hours2 && (
                              <span className="block text-text-body">{hours2}</span>
                            )}
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            </div>

            {/* ── Right: Google Maps embed ─────────────────── */}
            <div className="overflow-hidden rounded-xl border border-dun shadow-md">
              <iframe
                src={contact.mapEmbedUrl}
                title="Summit Spine Centre location on Google Maps"
                className="h-full min-h-[400px] w-full lg:min-h-[520px]"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                aria-label="Interactive map showing Summit Spine Centre at 214 Main St N, Airdrie, AB"
              />
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
