// /content/sitemap.ts
// Sitemap registry for Summit Spine Centre — 35 pages
// Single source of truth for: nav generation, sitemap.xml,
// robots.txt, breadcrumbs, and page priority
// ─────────────────────────────────────────────────────────────

import type { SitemapEntry } from '@/types/content'

export const sitemap: SitemapEntry[] = [

  // ── CORE ────────────────────────────────────────────────────
  {
    slug:       'home',
    path:       '/',
    title:      'Home',
    type:       'home',
    priority:   'P1',
    published:  true,
    changefreq: 'weekly',
  },
  {
    slug:       'about',
    path:       '/about',
    title:      'About Us',
    type:       'about',
    priority:   'P1',
    published:  true,
    changefreq: 'monthly',
  },
  {
    slug:       'team',
    path:       '/team',
    title:      'Meet the Team',
    type:       'team',
    priority:   'P1',
    published:  true,
    changefreq: 'monthly',
  },
  {
    slug:       'contact',
    path:       '/contact',
    title:      'Contact',
    type:       'contact',
    priority:   'P1',
    published:  true,
    changefreq: 'monthly',
  },
  {
    slug:       'book',
    path:       '/book',
    title:      'Book Your Visit',
    type:       'book',
    priority:   'P1',
    published:  true,
    changefreq: 'monthly',
  },

  // ── SERVICES ────────────────────────────────────────────────
  {
    slug:       'services',
    path:       '/services',
    title:      'Services',
    type:       'service-hub',
    priority:   'P1',
    published:  true,
    changefreq: 'monthly',
  },
  {
    slug:       'cox-flexion-distraction',
    path:       '/services/cox-flexion-distraction',
    title:      'Cox Flexion-Distraction',
    type:       'service',
    priority:   'P1',
    published:  true,
    changefreq: 'monthly',
    parentSlug: 'services',
  },
  {
    slug:       'chiropractic-adjustments',
    path:       '/services/chiropractic-adjustments',
    title:      'Chiropractic Adjustments',
    type:       'service',
    priority:   'P2',
    published:  true,
    changefreq: 'monthly',
    parentSlug: 'services',
  },
  {
    slug:       'summits-of-recovery',
    path:       '/services/summits-of-recovery',
    title:      'Summits of Recovery',
    type:       'service',
    priority:   'P2',
    published:  true,
    changefreq: 'monthly',
    parentSlug: 'services',
  },

  // ── PILLARS (Summits of Recovery sub-pages) ─────────────────
  {
    slug:       'professional-adjustments',
    path:       '/services/summits-of-recovery/professional-adjustments',
    title:      'Professional Adjustments',
    type:       'pillar',
    priority:   'P2',
    published:  true,
    changefreq: 'monthly',
    parentSlug: 'summits-of-recovery',
  },
  {
    slug:       'targeted-exercise',
    path:       '/services/summits-of-recovery/targeted-exercise',
    title:      'Targeted Exercise',
    type:       'pillar',
    priority:   'P2',
    published:  true,
    changefreq: 'monthly',
    parentSlug: 'summits-of-recovery',
  },
  {
    slug:       'lifestyle-wisdom',
    path:       '/services/summits-of-recovery/lifestyle-wisdom',
    title:      'Lifestyle Wisdom',
    type:       'pillar',
    priority:   'P2',
    published:  true,
    changefreq: 'monthly',
    parentSlug: 'summits-of-recovery',
  },
  {
    slug:       'ergonomic-support',
    path:       '/services/summits-of-recovery/ergonomic-support',
    title:      'Ergonomic Support',
    type:       'pillar',
    priority:   'P2',
    published:  true,
    changefreq: 'monthly',
    parentSlug: 'summits-of-recovery',
  },

  // ── CONDITIONS HUB ──────────────────────────────────────────
  {
    slug:       'conditions',
    path:       '/conditions',
    title:      'Conditions Treated',
    type:       'condition-hub',
    priority:   'P1',
    published:  true,
    changefreq: 'monthly',
  },

  // ── CONDITIONS — P1 (SEO priority) ──────────────────────────
  {
    slug:       'low-back-pain',
    path:       '/conditions/low-back-pain',
    title:      'Low Back Pain',
    type:       'condition',
    priority:   'P1',
    published:  true,
    changefreq: 'monthly',
    parentSlug: 'conditions',
  },
  {
    slug:       'sciatica',
    path:       '/conditions/sciatica',
    title:      'Sciatica',
    type:       'condition',
    priority:   'P1',
    published:  true,
    changefreq: 'monthly',
    parentSlug: 'conditions',
  },
  {
    slug:       'disc-herniation',
    path:       '/conditions/disc-herniation',
    title:      'Disc Herniation & Bulges',
    type:       'condition',
    priority:   'P1',
    published:  true,
    changefreq: 'monthly',
    parentSlug: 'conditions',
  },
  {
    slug:       'neck-pain',
    path:       '/conditions/neck-pain',
    title:      'Neck Pain',
    type:       'condition',
    priority:   'P1',
    published:  true,
    changefreq: 'monthly',
    parentSlug: 'conditions',
  },
  {
    slug:       'back-pain',
    path:       '/conditions/back-pain',
    title:      'Back Pain',
    type:       'condition',
    priority:   'P1',
    published:  true,
    changefreq: 'monthly',
    parentSlug: 'conditions',
  },

  // ── CONDITIONS — P2 ─────────────────────────────────────────
  {
    slug:       'headaches-migraines',
    path:       '/conditions/headaches-migraines',
    title:      'Headaches & Migraines',
    type:       'condition',
    priority:   'P2',
    published:  true,
    changefreq: 'monthly',
    parentSlug: 'conditions',
  },
  {
    slug:       'spinal-stenosis',
    path:       '/conditions/spinal-stenosis',
    title:      'Spinal Stenosis',
    type:       'condition',
    priority:   'P2',
    published:  true,
    changefreq: 'monthly',
    parentSlug: 'conditions',
  },
  {
    slug:       'tech-neck',
    path:       '/conditions/tech-neck',
    title:      'Tech Neck',
    type:       'condition',
    priority:   'P2',
    published:  true,
    changefreq: 'monthly',
    parentSlug: 'conditions',
  },
  {
    slug:       'whiplash',
    path:       '/conditions/whiplash',
    title:      'Whiplash',
    type:       'condition',
    priority:   'P2',
    published:  true,
    changefreq: 'monthly',
    parentSlug: 'conditions',
  },
  {
    slug:       'upper-back-shoulder-pain',
    path:       '/conditions/upper-back-shoulder-pain',
    title:      'Upper Back & Shoulder Pain',
    type:       'condition',
    priority:   'P2',
    published:  true,
    changefreq: 'monthly',
    parentSlug: 'conditions',
  },

  // ── CONDITIONS — P3 ─────────────────────────────────────────
  {
    slug:       'tmj',
    path:       '/conditions/tmj',
    title:      'TMJ',
    type:       'condition',
    priority:   'P3',
    published:  true,
    changefreq: 'monthly',
    parentSlug: 'conditions',
  },
  {
    slug:       'sports-injuries',
    path:       '/conditions/sports-injuries',
    title:      'Sports Injuries',
    type:       'condition',
    priority:   'P3',
    published:  true,
    changefreq: 'monthly',
    parentSlug: 'conditions',
  },
  {
    slug:       'postpartum-back-pain',
    path:       '/conditions/postpartum-back-pain',
    title:      'Postpartum Back Pain',
    type:       'condition',
    priority:   'P3',
    published:  true,
    changefreq: 'monthly',
    parentSlug: 'conditions',
  },
  {
    slug:       'chronic-pain',
    path:       '/conditions/chronic-pain',
    title:      'Chronic Pain',
    type:       'condition',
    priority:   'P3',
    published:  true,
    changefreq: 'monthly',
    parentSlug: 'conditions',
  },
  {
    slug:       'mva-whiplash',
    path:       '/conditions/mva-whiplash',
    title:      'MVA / Whiplash',
    type:       'condition',
    priority:   'P3',
    published:  false, // draft — publish when ready
    changefreq: 'monthly',
    parentSlug: 'conditions',
  },

  // ── RESOURCES ───────────────────────────────────────────────
  {
    slug:       'resources',
    path:       '/resources',
    title:      'Resources',
    type:       'resources',
    priority:   'P3',
    published:  false, // draft — publish when ready
    changefreq: 'weekly',
  },

  // ── UTILITY ─────────────────────────────────────────────────
  {
    slug:       'privacy',
    path:       '/privacy',
    title:      'Privacy Policy',
    type:       'utility',
    priority:   'P3',
    published:  true,
    changefreq: 'yearly',
  },
  {
    slug:       'terms',
    path:       '/terms',
    title:      'Terms of Service',
    type:       'utility',
    priority:   'P3',
    published:  true,
    changefreq: 'yearly',
  },
  {
    slug:       'accessibility',
    path:       '/accessibility',
    title:      'Accessibility',
    type:       'utility',
    priority:   'P3',
    published:  true,
    changefreq: 'yearly',
  },
]

// ── DERIVED HELPERS ──────────────────────────────────────────
// Computed views used by nav, sitemap.xml generator, and breadcrumbs

export const publishedPages = sitemap.filter(p => p.published)

export const conditionEntries = sitemap.filter(
  p => p.type === 'condition' && p.published
)

export const navPages = sitemap.filter(
  p => p.published && !['utility', 'condition', 'pillar'].includes(p.type)
)

export const sitemapXmlEntries = publishedPages.map(p => ({
  url:        p.path,
  changefreq: p.changefreq,
  priority:   p.priority === 'P1' ? '1.0' : p.priority === 'P2' ? '0.7' : '0.5',
}))

export function getBreadcrumbs(slug: string): SitemapEntry[] {
  const entry = sitemap.find(p => p.slug === slug)
  if (!entry) return []
  if (!entry.parentSlug) return [entry]
  const parent = sitemap.find(p => p.slug === entry.parentSlug)
  if (!parent) return [entry]
  return [...getBreadcrumbs(parent.slug), entry]
}
