import Link from 'next/link'
import Image from 'next/image'
import { Phone, Mail, MapPin, Clock } from 'lucide-react'
import { LOGO, TAGLINE } from '@/styles/tokens'
import { CLINIC_INFO, navConfig, footerConfig } from '@/content/pages'

export default function Footer() {
  return (
    <footer className="bg-hemlock-50 border-t border-border">
      <div className="max-w-[1200px] mx-auto px-6 py-10 lg:py-14">

        {/*
          Mobile:  2-col grid — Brand (full), Navigate + Services (half each), Contact (full)
          Desktop: 4-col grid — one column each
        */}
        <div className="grid grid-cols-2 gap-x-8 gap-y-8 lg:grid-cols-4 lg:gap-x-10 lg:gap-y-0">

          {/* Brand */}
          <div className="col-span-2 lg:col-span-1">
            <Link href="/" aria-label={`${LOGO.alt} — Home`}>
              <Image src={LOGO.darkSrc} alt={LOGO.alt} width={160} height={36} />
            </Link>
            <p className="mt-3 text-sm text-text-muted leading-relaxed italic">
              {TAGLINE}
            </p>
          </div>

          {/* Navigate */}
          <div>
            <h3 className="text-xs font-semibold text-text uppercase tracking-wide mb-3">
              {footerConfig.sections.navigate}
            </h3>
            <ul className="flex flex-col gap-1.5" role="list">
              {navConfig.items.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="text-sm text-text-muted hover:text-accent transition-colors duration-150"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-xs font-semibold text-text uppercase tracking-wide mb-3">
              {footerConfig.sections.services}
            </h3>
            <ul className="flex flex-col gap-1.5" role="list">
              {footerConfig.services.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="text-sm text-text-muted hover:text-accent transition-colors duration-150"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact + Hours */}
          <div className="col-span-2 lg:col-span-1">
            <h3 className="text-xs font-semibold text-text uppercase tracking-wide mb-3">
              {footerConfig.sections.contact}
            </h3>
            <ul className="flex flex-col gap-1.5" role="list">
              {CLINIC_INFO.phone && (
                <li className="flex items-center gap-2">
                  <Phone className="w-3.5 h-3.5 text-accent shrink-0" aria-hidden="true" />
                  <a
                    href={`tel:${CLINIC_INFO.phone}`}
                    className="text-sm text-text-muted hover:text-accent transition-colors duration-150"
                  >
                    {CLINIC_INFO.phone}
                  </a>
                </li>
              )}
              {CLINIC_INFO.email && (
                <li className="flex items-center gap-2">
                  <Mail className="w-3.5 h-3.5 text-accent shrink-0" aria-hidden="true" />
                  <a
                    href={`mailto:${CLINIC_INFO.email}`}
                    className="text-sm text-text-muted hover:text-accent transition-colors duration-150"
                  >
                    {CLINIC_INFO.email}
                  </a>
                </li>
              )}
              {CLINIC_INFO.address && (
                <li className="flex items-start gap-2">
                  <MapPin className="w-3.5 h-3.5 text-accent mt-0.5 shrink-0" aria-hidden="true" />
                  <span className="text-sm text-text-muted">
                    {CLINIC_INFO.address}, {CLINIC_INFO.city}, {CLINIC_INFO.province} {CLINIC_INFO.postalCode}
                  </span>
                </li>
              )}
            </ul>

            {CLINIC_INFO.hours.some((h) => h.hours) && (
              <div className="mt-4">
                <div className="flex items-center gap-2 mb-2">
                  <Clock className="w-3.5 h-3.5 text-accent shrink-0" aria-hidden="true" />
                  <span className="text-xs font-semibold text-text uppercase tracking-wide">
                    Hours of Operation
                  </span>
                </div>
                <div className="flex flex-col gap-0 pl-[22px]">
                  {CLINIC_INFO.hours.map((h) => (
                    <div key={h.days} className="grid grid-cols-[5.5rem_1fr] text-xs text-text-muted leading-5">
                      <span className="font-medium">{h.days}</span>
                      <span>
                        {h.hours}
                        {h.hours2 && <>, {h.hours2}</>}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>

        {/* Map embed */}
        {CLINIC_INFO.mapEmbedUrl && (
          <div className="mt-8 rounded-lg overflow-hidden border border-border">
            <iframe
              title="Summit Spine Centre location on Google Maps"
              src={CLINIC_INFO.mapEmbedUrl}
              width="100%"
              height="220"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="block w-full"
              aria-label="Google Maps showing Summit Spine Centre at 214 Main St N, Airdrie, AB"
            />
          </div>
        )}

        {/* Bottom bar */}
        <div className="mt-8 pt-5 border-t border-border flex flex-col sm:flex-row justify-between items-center gap-3">
          <p className="text-xs text-text-muted">
            © {new Date().getFullYear()} {LOGO.alt}. All rights reserved.
          </p>
          <nav aria-label="Legal links" className="flex items-center gap-5">
            {footerConfig.legal.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="text-xs text-text-muted hover:text-accent transition-colors duration-150"
              >
                {item.label}
              </Link>
            ))}
          </nav>
        </div>

      </div>
    </footer>
  )
}
