// app/privacy/page.tsx — Privacy Policy

import type { Metadata } from 'next'
import { privacyPage } from '@/content/pages'
import UtilityPageTemplate from '@/components/templates/UtilityPageTemplate'

export function generateMetadata(): Metadata {
  const { meta } = privacyPage
  return {
    title:       { absolute: meta.title },
    description: meta.description,
    keywords:    meta.keywords.join(', '),
    alternates:  { canonical: meta.canonicalPath },
  }
}

export default function PrivacyPage() {
  return <UtilityPageTemplate data={privacyPage} />
}
