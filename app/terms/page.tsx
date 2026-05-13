// app/terms/page.tsx — Terms of Service

import type { Metadata } from 'next'
import { termsPage } from '@/content/pages'
import UtilityPageTemplate from '@/components/templates/UtilityPageTemplate'

export function generateMetadata(): Metadata {
  const { meta } = termsPage
  return {
    title:       { absolute: meta.title },
    description: meta.description,
    keywords:    meta.keywords.join(', '),
    alternates:  { canonical: meta.canonicalPath },
  }
}

export default function TermsPage() {
  return <UtilityPageTemplate data={termsPage} />
}
