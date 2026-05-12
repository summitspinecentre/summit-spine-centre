import { notFound } from 'next/navigation'
import type { Metadata } from 'next'
import {
  pillarAdjustmentsPage,
  pillarExercisePage,
  pillarLifestylePage,
  pillarErgonomicsPage,
} from '@/content/pages'
import type { PillarPage } from '@/types/content'
import PillarPageTemplate from '@/components/templates/PillarPageTemplate'

interface Props {
  params: Promise<{ pillar: string }>
}

const pillarPages: Record<string, PillarPage> = {
  'professional-adjustments': pillarAdjustmentsPage,
  'targeted-exercise':        pillarExercisePage,
  'lifestyle-wisdom':         pillarLifestylePage,
  'ergonomic-support':        pillarErgonomicsPage,
}

export function generateStaticParams() {
  return Object.keys(pillarPages).map((pillar) => ({ pillar }))
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { pillar } = await params
  const page = pillarPages[pillar]
  if (!page) return {}
  const { meta } = page
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

export default async function PillarPage({ params }: Props) {
  const { pillar } = await params
  const page = pillarPages[pillar]
  if (!page || !page.meta.published) notFound()

  const jsonLd = {
    '@context':    'https://schema.org',
    '@type':       'MedicalProcedure',
    name:          page.meta.title.split(' | ')[0].replace(' Airdrie', ''),
    description:   page.meta.description,
    procedureType: 'Chiropractic Care',
    isPartOf: {
      '@type': 'MedicalProcedure',
      name:    'Summits of Recovery',
    },
  }

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <PillarPageTemplate data={page} />
    </>
  )
}
