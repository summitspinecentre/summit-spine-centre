// app/accessibility/page.tsx — Accessibility Statement

import type { Metadata } from 'next'
import { accessibilityPage } from '@/content/pages'
import UtilityPageTemplate from '@/components/templates/UtilityPageTemplate'

export function generateMetadata(): Metadata {
  const { meta } = accessibilityPage
  return {
    title:       { absolute: meta.title },
    description: meta.description,
    keywords:    meta.keywords.join(', '),
    alternates:  { canonical: meta.canonicalPath },
  }
}

export default function AccessibilityPage() {
  return <UtilityPageTemplate data={accessibilityPage} />
}
