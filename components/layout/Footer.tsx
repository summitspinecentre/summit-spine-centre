import Link from 'next/link'
import Image from 'next/image'
import { Phone, Mail, MapPin, Clock } from 'lucide-react'
import { LOGO, TAGLINE } from '@/styles/tokens'
import { CLINIC_INFO, navConfig, footerConfig } from '@/content/pages'

export default function Footer() {
  return (
    <footer className="bg-hemlock-50 border-t border-border">
      <div className="max-w-[1200px] mx-auto px-6 py-16 lg:py-20">

        {/* 4-column grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">

          {/* Brand */}
          <div>
            <Link href="/" aria-label={`${LOGO.alt} — Home`}>
              <Image src={LOGO.darkSrc} alt={LOGO.alt} width={200} height={44} />
            </Link>
            <p className="mt-4 text-sm text-text-muted leading-relaxed italic">
              {TAGLINE}
            </p>
          </div>

          {/* Navigate */}
          <div>
            <h3 className="text-sm font-semibold text-text uppercase tracking-wide mb-4">
              {footerConfig.sections.navigate}
            </h3>
            <ul className="flex flex-col gap-2" role="list">
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
            <h3 className="text-sm font-semibold text-text uppercase tracking-wide mb-4">
              {footerConfig.sections.services}
            </h3>
            <ul className="flex flex-col gap-2" role="list">
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

          {/* Contact */}
          <div>
            <h3 className="text-sm font-semibold text-text uppercase tracking-wide mb-4">
              {footerConfig.sections.contact}
            </h3>
            <ul className="flex flex-col gap-3" role="list">
              {CLINIC_INFO.phone && (
                <li className="flex items-start gap-2">
                  <Phone className="w-4 h-4 text-accent mt-0.5 shrink-0" aria-hidden="true" />
                  <a
                    href={`tel:${CLINIC_INFO.phone}`}
                    className="text-sm text-text-muted hover:text-accent transition-colors duration-150"
                  >
                    {CLINIC_INFO.phone}
                  </a>
                </li>
              )}
              {CLINIC_INFO.email && (
                <li className="flex items-start gap-2">
                  <Mail className="w-4 h-4 text-accent mt-0.5 shrink-0" aria-hidden="true" />
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
                  <MapPin className="w-4 h-4 text-accent mt-0.5 shrink-0" aria-hidden="true" />
                  <span className="text-sm text-text-muted">
                    {CLINIC_INFO.address}<br />
                    {CLINIC_INFO.city}, {CLINIC_INFO.province} {CLINIC_INFO.postalCode}
                  </span>
                </li>
              )}
              {CLINIC_INFO.hours.some((h) => h.hours) && (
                <li className="flex items-start gap-2">
                  <Clock className="w-4 h-4 text-accent mt-0.5 shrink-0" aria-hidden="true" />
                  <div className="flex flex-col gap-1">
                    {CLINIC_INFO.hours.filter((h) => h.hours).map((h) => (
                      <span key={h.days} className="text-sm text-text-muted">
                        {h.days}: {h.hours}
                      </span>
                    ))}
                  </div>
                </li>
              )}
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-12 pt-8 border-t border-border flex flex-col sm:flex-row justify-between items-center gap-4">
          <p className="text-sm text-text-muted">
            © {new Date().getFullYear()} {LOGO.alt}. All rights reserved.
          </p>
          <nav aria-label="Legal links" className="flex items-center gap-6">
            {footerConfig.legal.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="text-sm text-text-muted hover:text-accent transition-colors duration-150"
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
