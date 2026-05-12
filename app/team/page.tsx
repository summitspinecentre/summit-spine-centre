import type { Metadata } from 'next'
import { teamPage } from '@/content/pages'
import Hero         from '@/components/sections/Hero'
import TeamSection  from '@/components/sections/TeamSection'
import CTASection   from '@/components/sections/CTASection'

export function generateMetadata(): Metadata {
  const { meta } = teamPage
  return {
    title: { absolute: meta.title },
    description: meta.description,
    keywords:    meta.keywords,
    alternates:  { canonical: meta.canonicalPath },
  }
}

export default function TeamPage() {
  return (
    <main>
      <Hero data={teamPage.hero} />
      <TeamSection data={teamPage.team} />
      <CTASection data={teamPage.cta} />
    </main>
  )
}
