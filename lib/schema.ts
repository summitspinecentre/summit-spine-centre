// /lib/schema.ts
// Schema.org structured data helpers — returns plain objects for JSON.stringify()
// Usage: <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema()) }} />

import type { ContactInfo } from '@/types/content'
import { CLINIC_INFO } from '@/content/pages'

const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL ?? 'https://summitspine.ca'

// ── INPUT TYPES ──────────────────────────────────────────────

export interface ConditionSchemaData {
  conditionName: string
  description: string
  possibleTreatment: string
}

export interface ProcedureSchemaData {
  name: string
  description: string
  canonicalPath: string
}

// ── PRIVATE HELPERS ──────────────────────────────────────────

function postalAddress(info: ContactInfo) {
  return {
    '@type':          'PostalAddress',
    ...(info.address    && { streetAddress: info.address }),
    addressLocality:  info.city,
    addressRegion:    info.province,
    ...(info.postalCode && { postalCode: info.postalCode }),
    addressCountry:   'CA',
  }
}

function clinicIdentity() {
  return {
    '@type':                 'MedicalClinic',
    name:                    'Summit Spine Centre',
    url:                     SITE_URL,
    ...(CLINIC_INFO.phone && { telephone: CLINIC_INFO.phone }),
    ...(CLINIC_INFO.email && { email:     CLINIC_INFO.email }),
    address:                 postalAddress(CLINIC_INFO),
  }
}

// ── PUBLIC SCHEMA HELPERS ────────────────────────────────────

/** LocalBusiness + MedicalClinic — used on the Home page */
export function localBusinessSchema() {
  return {
    '@context':          'https://schema.org',
    ...clinicIdentity(),
    priceRange:          '$$',
    currenciesAccepted:  'CAD',
    areaServed: {
      '@type':             'City',
      name:                'Airdrie',
      containedInPlace:    'Alberta, Canada',
    },
  }
}

/** MedicalClinic with services — used on the About page */
export function medicalClinicSchema() {
  return {
    '@context':       'https://schema.org',
    ...clinicIdentity(),
    medicalSpecialty: 'Chiropractic',
    availableService: [
      { '@type': 'MedicalTherapy', name: 'Cox Flexion-Distraction' },
      { '@type': 'MedicalTherapy', name: 'Chiropractic Adjustments' },
      { '@type': 'MedicalTherapy', name: 'Targeted Exercise' },
      { '@type': 'MedicalTherapy', name: 'Ergonomic Support' },
    ],
  }
}

/** MedicalCondition — used on each condition page */
export function medicalConditionSchema(data: ConditionSchemaData) {
  return {
    '@context':    'https://schema.org',
    '@type':       'MedicalCondition',
    name:          data.conditionName,
    ...(data.description && { description: data.description }),
    possibleTreatment: {
      '@type': 'MedicalTherapy',
      name:    data.possibleTreatment,
    },
    relevantSpecialty: { '@type': 'MedicalSpecialty', name: 'Chiropractor' },
    recognizingAuthority: {
      '@type': 'MedicalClinic',
      name:    'Summit Spine Centre',
      url:     SITE_URL,
    },
  }
}

/** MedicalProcedure — used on each service page */
export function medicalProcedureSchema(data: ProcedureSchemaData) {
  return {
    '@context':   'https://schema.org',
    '@type':      'MedicalProcedure',
    name:         data.name,
    ...(data.description && { description: data.description }),
    url:          `${SITE_URL}${data.canonicalPath}`,
    performer:    clinicIdentity(),
  }
}
