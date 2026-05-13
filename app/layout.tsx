import type { Metadata } from 'next'
import { Manrope, Inter } from 'next/font/google'
import Script from 'next/script'
import './globals.css'
import Navbar from '@/components/layout/Navbar'
import Footer from '@/components/layout/Footer'
import NavThemeProvider from '@/components/layout/NavThemeProvider'
import StickyBookingBar from '@/components/ui/StickyBookingBar'
import { navConfig } from '@/content/pages'

const manrope = Manrope({
  subsets:  ['latin'],
  variable: '--font-manrope',
  display:  'swap',
})

const inter = Inter({
  subsets:  ['latin'],
  variable: '--font-inter',
  display:  'swap',
})

const GA_ID = process.env.NEXT_PUBLIC_GA_ID ?? ''

export const metadata: Metadata = {
  metadataBase: new URL('https://summitspinecentre.ca'),
  title: {
    default:  'Chiropractor Airdrie | Summit Spine Centre',
    template: '%s | Summit Spine Centre',
  },
  description:
    'Summit Spine Centre — Airdrie\'s trusted chiropractic clinic. ' +
    'Walk-in appointments, direct billing, and Cox Flexion-Distraction therapy.',
  keywords: ['chiropractor Airdrie', 'chiropractic Airdrie', 'Summit Spine Centre'],
  openGraph: {
    siteName: 'Summit Spine Centre',
    locale:   'en_CA',
    type:     'website',
  },
  robots: {
    index:  true,
    follow: true,
  },
}

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html
      lang="en-CA"
      className={`${manrope.variable} ${inter.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-background text-text font-body">
        <div id="nav-scroll-sentinel" className="absolute top-2 left-0 w-px h-px pointer-events-none" aria-hidden="true" />
        <NavThemeProvider>
          <Navbar />
          <StickyBookingBar label={navConfig.stickyCtaLabel ?? navConfig.cta.label} href={navConfig.cta.href} />
          <main className="flex-1">
            {children}
          </main>
        </NavThemeProvider>
        <Footer />
      </body>

      {GA_ID && (
        <>
          <Script
            src={`https://www.googletagmanager.com/gtag/js?id=${GA_ID}`}
            strategy="afterInteractive"
          />
          <Script id="gtag-init" strategy="afterInteractive">
            {`
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', '${GA_ID}');
            `}
          </Script>
        </>
      )}
    </html>
  )
}
