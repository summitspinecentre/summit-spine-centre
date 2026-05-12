import { notFound } from 'next/navigation'
import type { Metadata } from 'next'
import { conditionPages } from '@/content/pages'
import ConditionPageTemplate from '@/components/templates/ConditionPageTemplate'

interface Props {
  params: Promise<{ slug: string }>
}

export async function generateStaticParams() {
  return Object.keys(conditionPages)
    .filter((slug) => conditionPages[slug].meta.published)
    .map((slug) => ({ slug }))
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params
  const page = conditionPages[slug]
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

export default async function ConditionPage({ params }: Props) {
  const { slug } = await params
  const page = conditionPages[slug]
  if (!page || !page.meta.published) notFound()

  const jsonLd = {
    '@context':          'https://schema.org',
    '@type':             'MedicalCondition',
    name:                page.structuredData.conditionName,
    description:         page.structuredData.description,
    possibleTreatment:   page.structuredData.possibleTreatment,
    relevantSpecialty: {
      '@type': 'MedicalSpecialty',
      name:    'Chiropractor',
    },
  }

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <ConditionPageTemplate data={page} />
    </>
  )
}
