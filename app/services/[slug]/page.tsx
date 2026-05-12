import { notFound } from 'next/navigation'
import type { Metadata } from 'next'
import { coxPage, chiropracticPage, summitsPage } from '@/content/pages'
import type { ServicePage } from '@/types/content'
import ServicePageTemplate from '@/components/templates/ServicePageTemplate'

interface Props {
  params: Promise<{ slug: string }>
}

const servicePages: Record<string, ServicePage> = {
  'cox-flexion-distraction':  coxPage,
  'chiropractic-adjustments': chiropracticPage,
  'summits-of-recovery':      summitsPage,
}

export function generateStaticParams() {
  return Object.keys(servicePages).map((slug) => ({ slug }))
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params
  const page = servicePages[slug]
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

export default async function ServicePage({ params }: Props) {
  const { slug } = await params
  const page = servicePages[slug]
  if (!page || !page.meta.published) notFound()

  const jsonLd = {
    '@context':   'https://schema.org',
    '@type':      'MedicalProcedure',
    name:         page.meta.title.split(' | ')[0].replace(' Airdrie', ''),
    description:  page.meta.description,
    procedureType: 'Chiropractic Care',
  }

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <ServicePageTemplate data={page} />
    </>
  )
}
