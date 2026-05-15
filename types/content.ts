// /types/content.ts
// TypeScript interfaces for all Summit Spine Centre content types
// Every component prop and content entry must use these — no inline types, no 'any'

// ── PRIMITIVES ───────────────────────────────────────────────

export type Priority = 'P1' | 'P2' | 'P3'
export type ColorScheme = 1 | 2 | 3 | 4
export type LogoVariant = 'light' | 'dark'

export type PageType =
  | 'home'
  | 'about'
  | 'team'
  | 'contact'
  | 'book'
  | 'service'
  | 'service-hub'
  | 'pillar'
  | 'condition'
  | 'condition-hub'
  | 'resources'
  | 'utility'

// ── PAGE METADATA ────────────────────────────────────────────

export interface PageMeta {
  slug: string
  title: string         // Format: "[Topic] Airdrie | Summit Spine Centre"
  description: string   // 150–160 chars for SEO
  keywords: string[]
  ogImage?: string
  published: boolean    // false = draft (MVA, Blog)
  priority: Priority
  type: PageType
  canonicalPath: string // e.g. "/conditions/sciatica"
  lastModified?: string // ISO date string
}

// ── SHARED BUILDING BLOCKS ───────────────────────────────────

export interface CTAButton {
  label: string
  href: string
  external?: boolean
  variant?: 'primary' | 'secondary' | 'ghost'
}

export interface ImageAsset {
  src: string
  alt: string
  width: number
  height: number
  priority?: boolean  // true = LCP candidate, disables lazy load
}

export interface StatItem {
  value: string   // e.g. "500+"
  label: string   // e.g. "Patients helped"
  suffix?: string // e.g. "yrs"
}

export interface FeatureItem {
  icon?: string   // lucide-react icon name as string (e.g. "HeartPulse")
  title: string
  body: string
}

export interface BenefitItem {
  icon?: string
  title: string
  body: string
}

export interface HowItWorksStep {
  step: number
  title: string
  body: string
  icon?: string
}

export interface GalleryImage extends ImageAsset {
  caption?: string
}

// ── SECTION TYPES ────────────────────────────────────────────

export interface HeroSection {
  headline: string
  subheadline?: string
  body?: string
  cta: CTAButton
  secondaryCta?: CTAButton
  image?: ImageAsset
  videoUrl?: string     // ambient background video (muted, looping)
  bgImage?: { src: string; alt: string; blurDataURL?: string }  // full-bleed background image with zoom effect
  pullQuote?: { text: string; attribution: string }  // right-panel quote card (two-col, no image)
  scheme: ColorScheme
}

export interface StatsSection {
  headline?: string
  items: StatItem[]
  scheme: ColorScheme
}

export interface FeaturesListSection {
  headline: string
  subheadline?: string
  items: FeatureItem[]
  scheme: ColorScheme
}

export interface BenefitsSection {
  headline: string
  subheadline?: string
  items: BenefitItem[]
  image?: ImageAsset
  scheme: ColorScheme
}

export interface HowItWorksSection {
  headline: string
  subheadline?: string
  steps: HowItWorksStep[]
  scheme: ColorScheme
}

export interface CTASection {
  headline: string
  body?: string
  cta: CTAButton
  secondaryCta?: CTAButton
  scheme: ColorScheme
}

export interface NewsletterSection {
  headline: string
  body?: string
  placeholder?: string
  scheme: ColorScheme
}

export interface TreatmentBox {
  label: string
  subheading: string
  body: string
}

export interface WhySummitSection {
  sectionLabel: string
  headline: string
  body: string
  boxes: [TreatmentBox, TreatmentBox]
  scheme: ColorScheme
}

export interface GallerySection {
  headline?: string
  images: GalleryImage[]
  scheme: ColorScheme
}

// ── TESTIMONIAL ──────────────────────────────────────────────

export interface Testimonial {
  quote: string
  author: string
  role?: string        // e.g. "Patient" or "Airdrie Resident"
  context?: string     // "before" statement for before/after testimonials
  image?: ImageAsset
  rating?: 1 | 2 | 3 | 4 | 5
}

export interface TestimonialsSection {
  headline?: string
  items: Testimonial[]
  scheme: ColorScheme
}

// ── FAQ ──────────────────────────────────────────────────────

export interface FAQItem {
  question: string
  answer: string
}

export interface FAQSection {
  headline?: string
  items: FAQItem[]
  scheme: ColorScheme
}

// ── TEAM ─────────────────────────────────────────────────────

export interface TeamMember {
  id: string
  name: string
  role: string           // e.g. "Doctor of Chiropractic"
  credentials: string    // e.g. "DC, BSc"
  bio: string
  image: ImageAsset
  specialties?: string[]
}

export interface TeamSection {
  headline?: string
  subheadline?: string
  members: TeamMember[]
  scheme: ColorScheme
}

// ── DEMOGRAPHIC TAB BAR (Homepage) ───────────────────────────
// UX Vision: 6 demographics, each with a list of conditions they commonly see

export interface DemographicCondition {
  label: string       // e.g. "Low Back Pain"
  slug?: string       // if present, renders as Link to /conditions/[slug]
  description: string // 1–2 sentences explaining why this demographic gets this condition
}

export interface DemographicTab {
  id: string
  label: string               // e.g. "Desk Worker"
  empathyStatement: string    // 1–2 sentence intro shown when tab is active
  conditions: DemographicCondition[]  // 5–6 conditions + 1 "other" (no slug)
  cta: CTAButton
}

export interface DemographicTabBarSection {
  headline?: string
  tabs: DemographicTab[]
  scheme: ColorScheme
}

// ── CONDITION PAGE ───────────────────────────────────────────

export interface ConditionPage {
  meta: PageMeta
  hero: HeroSection
  overview: string
  causes?: string[]
  symptoms?: string[]
  treatments: FeaturesListSection
  benefits: BenefitsSection
  howItWorks?: HowItWorksSection
  testimonials?: TestimonialsSection
  faqs?: FAQSection
  cta: CTASection
  relatedConditions?: string[]  // slugs — for internal linking
  structuredData: {
    conditionName: string       // schema.org MedicalCondition
    description: string
    possibleTreatment: string
  }
}

// ── SERVICE PAGE ─────────────────────────────────────────────

export interface ServicePage {
  meta: PageMeta
  hero: HeroSection
  featureHighlight?: FeatureItem
  featuresList?: FeaturesListSection
  benefits?: BenefitsSection
  howItWorks?: HowItWorksSection
  testimonials?: TestimonialsSection
  faqs?: FAQSection
  gallery?: GallerySection
  cta: CTASection
}

// ── PILLAR PAGE (Summits of Recovery sub-pages) ───────────────

export interface PillarPage extends ServicePage {
  pillarIndex: 1 | 2 | 3 | 4
  siblingPillars: string[]  // slugs of the other 3 pillars
}

// ── HOME PAGE ────────────────────────────────────────────────

export interface HomePage {
  meta: PageMeta
  hero: HeroSection
  conditionsBar: {
    headline: string
    conditions: Array<{ label: string; slug: string }>
  }
  demographicTabBar: DemographicTabBarSection
  stats: StatsSection
  whySummit: WhySummitSection
  services: FeaturesListSection
  featuresList: FeaturesListSection
  benefits: BenefitsSection
  team: TeamSection
  testimonials: TestimonialsSection
  faqs: FAQSection
  cta: CTASection
  newsletter: NewsletterSection
}

// ── ABOUT PAGE ───────────────────────────────────────────────

export interface AboutPage {
  meta: PageMeta
  hero: HeroSection
  story: {
    headline: string
    callout?: string
    body: string
  }
  team: TeamSection
  values: FeaturesListSection
  stats: StatsSection
  services: FeaturesListSection
  testimonials: TestimonialsSection
  cta: CTASection
}

// ── MEET THE TEAM PAGE ───────────────────────────────────────

export interface TeamPage {
  meta: PageMeta
  hero: HeroSection
  team: TeamSection
  testimonials: TestimonialsSection
  faqs: FAQSection
  cta: CTASection
}

// ── CONTACT PAGE ─────────────────────────────────────────────

export interface ContactInfo {
  address: string
  city: string
  province: string
  postalCode: string
  phone: string
  email: string
  mapEmbedUrl: string
  hours: Array<{ days: string; hours: string; hours2?: string }>
}

export interface ContactPage {
  meta: PageMeta
  hero: HeroSection
  contact: ContactInfo
  cta: CTASection
  faqs?: FAQSection
}

// ── BOOK PAGE ────────────────────────────────────────────────

export interface BookPage {
  meta: PageMeta
  hero: HeroSection
  bookingEmbedUrl: string  // AtlasHub URL
  contact: ContactInfo
  faqs?: FAQSection
  cta: CTASection
}

// ── RESOURCES / BLOG PAGE ────────────────────────────────────

export interface ResourceItem {
  title: string
  type: 'video' | 'download' | 'article'
  href: string
  description: string
  thumbnail?: ImageAsset
}

export interface ResourcesPage {
  meta: PageMeta
  hero: HeroSection
  categories: FeaturesListSection
  resources: ResourceItem[]
  faqs?: FAQSection
  newsletter: NewsletterSection
  cta: CTASection
}

// ── CONDITIONS HUB ───────────────────────────────────────────

export interface ConditionsHubPage {
  meta: PageMeta
  hero: HeroSection
  conditionsList: FeaturesListSection
  educationFeature: FeatureItem
  faqs?: FAQSection
  cta: CTASection
}

// ── SERVICES HUB ─────────────────────────────────────────────

export interface ServicesHubPage {
  meta: PageMeta
  hero: HeroSection
  featuresList: FeaturesListSection
  featureHighlight: FeatureItem
  services: FeaturesListSection
  testimonials?: TestimonialsSection
  cta: CTASection
}

// ── UTILITY PAGES (Privacy, Terms, Accessibility) ────────────

export interface UtilityPage {
  meta: PageMeta
  title: string
  lastUpdated: string
  sections: Array<{
    heading: string
    body: string
  }>
}

// ── GLOBAL CONTENT UNION ─────────────────────────────────────
// Used in pages.ts — one entry per page, discriminated by type

export type PageContent =
  | HomePage
  | AboutPage
  | TeamPage
  | ContactPage
  | BookPage
  | ServicePage
  | PillarPage
  | ConditionPage
  | ConditionsHubPage
  | ServicesHubPage
  | ResourcesPage
  | UtilityPage

// ── SITEMAP ENTRY ────────────────────────────────────────────
// Used in sitemap.ts

export interface SitemapEntry {
  slug: string
  path: string
  title: string
  type: PageType
  priority: Priority
  published: boolean
  changefreq: 'always' | 'hourly' | 'daily' | 'weekly' | 'monthly' | 'yearly' | 'never'
  parentSlug?: string  // for breadcrumbs + nested nav
}

// ── NAV STRUCTURE ────────────────────────────────────────────

export interface NavItem {
  label: string
  href: string
  children?: NavItem[]
}

export interface NavConfig {
  items: NavItem[]
  cta: CTAButton
  stickyCtaLabel?: string
}
