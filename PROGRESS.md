# Summit Spine Centre — Build Progress

**Project:** Summit Spine Centre Website
**Stack:** Next.js (App Router) · TypeScript · Tailwind CSS
**Location:** Airdrie, Alberta
**Last Updated:** 2026-05-12

---

## Initialization

- [x] Folder structure scaffolded
- [x] Next.js project created (`create-next-app`)
- [x] `/styles/tokens.ts` — design tokens (colors, fonts, spacing, radius, animation)
- [x] `/types/content.ts` — all TypeScript interfaces
- [x] `/content/pages.ts` — fully typed content scaffold (35 pages, all stubs)
- [x] `/content/sitemap.ts` — sitemap registry with derived helpers
- [x] `/lib/utils.ts` — cn(), formatDate(), toSlug(), fromSlug()
- [x] `/lib/schema.ts` — schema.org structured data helpers (localBusiness, medicalClinic, medicalCondition, medicalProcedure)
- [x] `content/pages.ts` — added `navConfig` (NavConfig) and `footerConfig` exports
- [x] `public/logo/logo-dark.svg` — placeholder SVG (replace when real logo is ready)
- [x] `public/logo/logo-light.svg` — placeholder SVG (replace when real logo is ready)
- [x] `app/globals.css` — Tailwind v4 `@theme inline` block with all brand tokens (NOTE: project uses Tailwind v4 — no tailwind.config.ts needed; config lives in globals.css)
- [x] `app/layout.tsx` — root layout, Manrope + Inter via next/font, GA4 scaffold (reads NEXT_PUBLIC_GA_ID env var)

---

## Components

### Atoms
- [x] `components/ui/Button.tsx` — primary/secondary/ghost variants, sm/md/lg sizes, Link + anchor + button rendering
- [x] `components/ui/Badge.tsx` — default/accent/muted variants, Server Component
- [x] `components/ui/Tag.tsx` — link/static variants, active state, Server Component

### Layout
- [x] `components/layout/Navbar.tsx` — fixed, scroll-aware, desktop dropdowns, mobile menu, WCAG aria
- [x] `components/layout/Footer.tsx` — 4-col grid, contact info, legal links, Server Component; real clinic data populated (address, phone, email, 7-day hours with split sessions, Google Maps embed)

### Sections
- [x] `components/sections/Hero.tsx`
- [x] `components/sections/DemographicTabBar.tsx`
- [x] `components/sections/ConditionsGrid.tsx`
- [x] `components/sections/ServicesGrid.tsx`
- [x] `components/sections/StatsSection.tsx`
- [x] `components/sections/FeaturesListSection.tsx`
- [x] `components/sections/BenefitsSection.tsx`
- [x] `components/sections/HowItWorksSection.tsx`
- [x] `components/sections/TeamSection.tsx`
- [x] `components/sections/TestimonialsSection.tsx`
- [x] `components/sections/FAQSection.tsx`
- [x] `components/sections/CTASection.tsx`
- [ ] `components/sections/NewsletterSection.tsx` *(skipped — not needed)*
- [x] `components/sections/GallerySection.tsx`

### Page Templates
- [x] `components/templates/ConditionPageTemplate.tsx`
- [x] `components/templates/ServicePageTemplate.tsx`
- [x] `components/templates/PillarPageTemplate.tsx`

---

## Pages

### Core
- [x] `app/page.tsx` — Home
- [x] `app/about/page.tsx` — About Us
- [x] `app/team/page.tsx` — Meet the Team
- [ ] `app/contact/page.tsx` — Contact
- [ ] `app/book/page.tsx` — Book Your Visit

### Services
- [ ] `app/services/page.tsx` — Services Hub
- [x] `app/services/[slug]/page.tsx` — cox, chiropractic-adjustments, summits-of-recovery (dynamic)
- [x] `app/services/summits-of-recovery/[pillar]/page.tsx` — 4 pillar pages (dynamic)
- [x] Content: `cox-flexion-distraction` — fully populated
- [x] Content: `chiropractic-adjustments` — fully populated
- [x] Content: `lifestyle-wisdom` (pillar) — fully populated

### Conditions
- [ ] `app/conditions/page.tsx` — Conditions Hub
- [x] `app/conditions/[slug]/page.tsx` — Dynamic condition route
- [x] Content: `low-back-pain`
- [x] Content: `sciatica`
- [x] Content: `disc-herniation`
- [x] Content: `neck-pain`
- [ ] Content: `back-pain`
- [x] Content: `headaches-migraines`
- [x] Content: `spinal-stenosis`
- [ ] Content: `tech-neck`
- [ ] Content: `whiplash`
- [ ] Content: `upper-back-shoulder-pain`
- [ ] Content: `tmj`
- [ ] Content: `sports-injuries`
- [ ] Content: `postpartum-back-pain`
- [ ] Content: `chronic-pain`
- [ ] Content: `mva-whiplash` *(draft — publish when ready)*

### Utility
- [ ] `app/resources/page.tsx` *(draft — publish when ready)*
- [ ] `app/privacy/page.tsx`
- [ ] `app/terms/page.tsx`
- [ ] `app/accessibility/page.tsx`

---

## SEO & Metadata
- [ ] `generateMetadata()` on every page
- [x] `app/sitemap.ts` — auto-generated sitemap.xml (31 published pages, priority mapped from P1/P2/P3)
- [x] `app/robots.ts` — robots.txt (allow all, disallow /api/, sitemap directive)
- [ ] Schema.org: LocalBusiness on Home
- [ ] Schema.org: MedicalClinic on About
- [ ] Schema.org: MedicalCondition on each condition page
- [ ] Schema.org: MedicalProcedure on each service page
- [ ] Open Graph images configured

---

## Analytics
- [ ] GA4 via `next-gtag` installed
- [ ] GA4 wired in `app/layout.tsx`
- [ ] Booking CTA click events firing
- [ ] Server-side tracking configured

---

## Assets
- [ ] `/public/logo/logo-light.svg` — uploaded
- [ ] `/public/logo/logo-dark.svg` — uploaded
- [ ] `/public/placeholders/` — placeholder images added
- [ ] `/public/images/home/` — real images added
- [ ] `/public/images/about/` — real images added
- [ ] `/public/images/team/` — real images added
- [ ] `/public/images/services/` — real images added
- [ ] `/public/images/conditions/` — real images added

---

## Final Audit
- [ ] WCAG 2.1 AA verified — all pages
- [ ] Tab navigation tested — all interactive components
- [ ] Color contrast verified — all text/background combos
- [ ] Lighthouse score ≥ 90 — Performance, Accessibility, SEO
- [ ] LCP < 2.5s on mobile
- [ ] No exposed secrets
- [ ] All forms validated with zod
- [ ] robots.txt configured correctly
- [ ] sitemap.xml submitted to Google Search Console

---

## Session Log

| Date | Session | Completed |
|------|---------|-----------|
| 2026-05-06 | Initialization | Steps 1–6: folder structure, tokens, types, content scaffold, sitemap, PROGRESS.md |
| 2026-05-07 | Initialization (continued) | globals.css (@theme inline), lib/utils.ts, app/layout.tsx; installed clsx + tailwind-merge + lucide-react |
| 2026-05-07 | Components — Atoms + Layout | Button, Badge, Tag atoms; Navbar (client, scroll-aware, dropdowns, mobile menu), Footer (server, 4-col); navConfig + footerConfig added to content/pages.ts; placeholder logos created; layout.tsx wired; 0 TS errors |
| 2026-05-07 | Content Population — Sciatica | conditionPages['sciatica'] fully populated: meta, hero, overview, symptoms (7), causes (6), treatments (5 items), benefits (3 items), faqs (18 items), cta, structuredData; 0 TS errors. Schema flags logged: causes[] lacks title+body struct, no stats field on ConditionPage, no symptom/cause section intros, testimonial placeholder pending real copy. |
| 2026-05-07 | Section — Hero | components/sections/Hero.tsx: Server Component, scheme-aware (1–4), two-col with image / single-col centered / video background, eyebrow + headline + subheadline + body + cta + secondaryCta; 0 TS errors. |
| 2026-05-07 | Section — DemographicTabBar | components/sections/DemographicTabBar.tsx: Client Component (useState + ARIA keyboard nav), scheme-aware (1–4), 6 demographic tabs, horizontal-scroll tab bar, 2-col pain points grid on md+, per-tab CTA; 0 TS errors. |
| 2026-05-07 | Section — ConditionsGrid | components/sections/ConditionsGrid.tsx: Server Component, scheme-aware (1–4), configurable columns (2/3/4), card lift + border + shadow on hover, ArrowRight affordance slides on hover, full-card Link with aria-label, optional headline/subheadline header, optional body teaser per card; 0 TS errors. |
| 2026-05-07 | Section — ServicesGrid | components/sections/ServicesGrid.tsx: Server Component, scheme-aware (1–4), icon map (19 lucide-react icons), static cards (no href) and linked cards (full-card Link + ArrowRight) from same props, configurable columns (2/3/4); verified: 4 schemes correct bg colors, 12 linked + 5 static cards, 0 TS errors. |
| 2026-05-07 | Section — StatsSection | components/sections/StatsSection.tsx: Server Component, scheme-aware (1–4), 2-col grid mobile → single flex row md+, vertical dividers between items (first:border-l-0 pattern), optional headline, optional suffix rendered inline; verified: all 4 scheme bg tokens correct, first item border 0px / second item 1px, 0 TS errors. |
| 2026-05-07 | Section — FeaturesListSection | components/sections/FeaturesListSection.tsx: Server Component, scheme-aware (1–4), icon-left inline layout (distinct from ServicesGrid cards), 1/2/3 col grid, graceful icon-less fallback; verified: all 4 scheme bg tokens correct, scheme 4 renders 0 icon circles, 0 TS errors. |
| 2026-05-07 | Page — Home | app/page.tsx: real Home page with generateMetadata(); homePage content fully populated (hero, conditionsBar, demographicTabBar × 6 tabs, stats, services, featuresList, benefits, faqs, cta, newsletter); 6 built sections wired, 6 placeholder divs showing correct scheme rhythm; 0 TS errors. |
| 2026-05-07 | Section — BenefitsSection | components/sections/BenefitsSection.tsx: Server Component, scheme-aware (1–4), icon-top card layout (distinct from FeaturesListSection icon-left rows), optional image branch (2-col split on lg+), auto column count from items.length, BenefitsSectionData type alias resolves naming collision; wired into app/page.tsx; 0 TS errors. |
| 2026-05-07 | Section — HowItWorksSection | components/sections/HowItWorksSection.tsx: Server Component, scheme-aware (1–4), numbered circles (icon fallback), flex-row mobile / flex-col desktop, returns null for empty steps (all stubs), auto column count 2–4; 0 TS errors. |
| 2026-05-07 | Section — TeamSection | components/sections/TeamSection.tsx: Server Component, scheme-aware (1–4), 4:3 image with object-top crop, initials fallback when image.src empty, role + credentials inline, specialty pill tags, returns null for empty members; wired into app/page.tsx; 0 TS errors. |
| 2026-05-07 | Section — TestimonialsSection | components/sections/TestimonialsSection.tsx: Server Component, scheme-aware (1–4), Quote icon decoration, optional StarRating sub-component (fill-current, aria-label), blockquote with curly quotes, author avatar (circular image or initials fallback), optional role, returns null for empty items; wired into app/page.tsx; 0 TS errors. |
| 2026-05-07 | Section — FAQSection | components/sections/FAQSection.tsx: Server Component, scheme-aware (1–4), native <details>/<summary> accordion (zero JS), ChevronDown rotates via group-open:rotate-180, 2-col layout (headline 1fr + list 2fr) on lg when headline present, returns null for empty items; wired into app/page.tsx; verified 3 items in accessibility tree; 0 TS errors. |
| 2026-05-07 | Section — CTASection | components/sections/CTASection.tsx: Server Component, scheme-aware (1–4), centred max-w-2xl layout, responsive headline (text-h3 mobile → text-h2 md+), optional body, primary lg Button + optional ghost secondary; scheme-4 ghost override (text-neutral-0) via tailwind-merge className; wired into app/page.tsx replacing placeholder; verified bg-scheme-4 (#8F907A), white headline (48px Manrope 700), correct CTA link, 0 TS errors, 0 console errors. |
| 2026-05-07 | Section — GallerySection | components/sections/GallerySection.tsx: Server Component, scheme-aware (1–4), returns null for empty images, auto grid (1/2/3/4-col based on image count), aspect-[4/3] with object-cover + hover scale-105, optional headline + per-image figcaption, next/image with fill + sizes; NewsletterSection skipped (not needed), newsletter placeholder removed from app/page.tsx; 0 TS errors. |
| 2026-05-07 | Templates — ServicePageTemplate + PillarPageTemplate + service routes | ServicePageTemplate: composes Hero→FeatureHighlight?→FeaturesList?→Benefits?→HowItWorks?→Testimonials?→Gallery?→FAQs?→CTA; slotAfterHero prop for pillar injection; all sections guard empty items; PillarPageTemplate: wraps ServicePageTemplate, injects sibling-pillars nav (scheme-3 strip, 3 links from sitemap) via slotAfterHero; app/services/[slug]: 3 static params, title.absolute, MedicalProcedure JSON-LD; app/services/summits-of-recovery/[pillar]: 4 static params, isPartOf Summits of Recovery; verified /services/cox: title correct, 1 main, JSON-LD OK; /services/summits-of-recovery/targeted-exercise: sibling links correct (professional-adjustments, lifestyle-wisdom, ergonomic-support), 0 TS errors. |
| 2026-05-07 | Template — ConditionPageTemplate + dynamic route | components/templates/ConditionPageTemplate.tsx: composes Hero→Overview→Symptoms+Causes→Treatments→Benefits→HowItWorks?→Testimonials?→RelatedConditions?→FAQs?→CTA; inline symptoms checklist (CheckCircle2) + numbered causes with label/desc split; app/conditions/[slug]/page.tsx: generateStaticParams (13 published slugs), generateMetadata with title:{absolute} to bypass layout template, JSON-LD MedicalCondition schema; fixed nested <main> → fragment; verified /conditions/sciatica: title correct, 1 main landmark, JSON-LD present, all 10 sections rendered, 0 TS errors. |
| 2026-05-08 | Hero redesign — "Life is the Summit." | content/pages.ts: headline/subheadline/body/secondaryCta updated to brand tagline; stats items updated to 140+ reviews, 35+ yrs, 2 DCs, 6 days; Hero.tsx: added statsBar? prop (StatItem[]), left-align layout when bgImage, min-h-screen on section, pill-badge eyebrow (cerulean dot + backdrop-blur), subheadline uses cfg.subheadline (italic text-dun on scheme 4), bottom stats bar with border-top + vertical dividers; app/page.tsx: eyebrow updated, statsBar passed, StatsSection removed (absorbed into Hero); mountain bg image confirmed rendering; 0 TS errors. |
| 2026-05-08 | Section — WhySummitSection | types/content.ts: added TreatmentBox + WhySummitSection interfaces, added whySummit to HomePage; content/pages.ts: homePage.whySummit populated (sectionLabel, headline, body, 2 treatment boxes for Decompression + Adjustments); components/sections/WhySummitSection.tsx: Server Component, scheme-aware (1–4), centered eyebrow + headline + story paragraph + two side-by-side editorial boxes (cerulean left-border, white on scheme-2-grey, label/subheading/body); wired into app/page.tsx between Hero and ConditionsGrid; 0 TS errors, verified in browser. |
| 2026-05-08 | Content — Cox, Chiropractic, Lifestyle pages | content/pages.ts: coxPage fully populated (meta desc + keywords, hero, featureHighlight, featuresList 6 items, benefits 4 items, howItWorks 5 steps, faqs 12 items, cta); chiropracticPage fully populated (meta, hero, featureHighlight hook story, featuresList 6 conditions, benefits 5 items, howItWorks 5 steps, faqs 10 items, cta); pillarLifestylePage fully populated (meta, hero, featureHighlight, featuresList 7 exercises, benefits 4 lifestyle items, howItWorks 4 ergonomics steps, faqs 6 items, cta with secondaryCta phone link); 0 TS errors. |
| 2026-05-08 | SEO Infrastructure | lib/schema.ts: 4 typed helpers (localBusinessSchema, medicalClinicSchema, medicalConditionSchema, medicalProcedureSchema); app/sitemap.ts: 31-URL sitemap.xml auto-generated from content/sitemap.ts, P1=1.0/P2=0.7/P3=0.5; app/robots.ts: allow all, disallow /api/, sitemap directive; verified both routes return 200 in browser; 0 TS errors. |
| 2026-05-08 | Page — About | types/content.ts: added pullQuote to HeroSection, callout to AboutPage.story, context (before/after) to Testimonial; Hero.tsx: pull quote right-panel support (hasPullQuote branch, cerulean border card, italic quote); TestimonialsSection.tsx: BEFORE/AFTER label rendering when context present; content/pages.ts: aboutPage fully populated (hero+pullQuote, story+callout, 2 doctors, 3 values, 4 stats, 4 services, 1 before/after testimonial, CTA); app/about/page.tsx: generateMetadata (title.absolute), MedicalClinic JSON-LD, 8-section composition; verified in browser: all sections render, 0 TS errors, 0 console errors. |
| 2026-05-08 | Page — Meet the Team | types/content.ts: added cta to TeamPage interface; content/pages.ts: teamPage fully populated (meta, hero with body blurb, 6 members — 2 DCs + 4 support staff placeholders with initials fallback, cta); app/team/page.tsx: generateMetadata (title.absolute), Hero + TeamSection (scheme 2, 2×3 grid) + CTASection; verified in browser: all 3 sections render, 6 cards with initials fallback, 0 TS errors, 0 console errors. |
| 2026-05-08 | Home page polish — iteration 2 | Hero.tsx: overlay changed from flat bg-eerie-black/55 to gradient (from-eerie-black/65 via-eerie-black/55 to-eerie-black/10) so photo bleeds through naturally at bottom; bottomFade height reduced h-48→h-20 (stops white climbing into photo); stats pt-8→pt-12 + label mb-1→mb-2 for more breathing room. DemographicTabBar.tsx: buttons enlarged py-4/px-5→py-5/px-6, text-base→text-lg; inactive = hemlock-50 bg + dun border; active = cerulean bg/border/shadow-lg; ChevronRight icon added (rotate-90 when active, translate-x-0.5 on hover); 0 TS errors. |
| 2026-05-08 | Home page polish — Hero + Sound Familiar redesign | Hero.tsx: added bottomFade prop (Tailwind to-* class renders gradient overlay at bottom of bgImage heroes for smooth section transition); stats bar: mt-auto anchoring, pt-8 top padding, text-4xl numbers, mb-1 label gap, gap-x-8/gap-y-6 spacing; app/page.tsx: bottomFade="to-neutral-100" passed to Hero; types/content.ts: DemographicCondition interface added (label, slug?, description), DemographicTab replaced painPoints:DemographicPainMap with conditions:DemographicCondition[]; content/pages.ts: all 6 demographic tabs rewritten with 6 condition cards each + 1 "other" (no slug, welcoming copy), conditions link to /conditions/[slug] for 10 condition slugs; DemographicTabBar.tsx: full redesign — 2-col/3-col large button grid replaces thin tab strip, condition cards with Link (slug present) or div (other), other card styled with border-dashed + cerulean tint, initial state null (no tab selected) with prompt text; 0 TS errors. |
| 2026-05-12 | Mobile layout fixes — Hero stats + Navbar accordion | Hero.tsx: changed py-10 → pt-10 pb-36 for hasBgImage content container on mobile, clearing the 112px mountain SVG silhouettes so stats bar is fully visible; Navbar.tsx: added activeMobileSection state, replaced always-visible mobile children lists with collapsible accordion — Services and Conditions are now ChevronDown toggle buttons (only one open at a time), plain links (About/Team/Contact) unchanged, activeMobileSection resets on menu close; 0 TS errors, 0 console errors, verified in browser at 375px. |
| 2026-05-12 | Conditions Content — low-back-pain, disc-herniation, neck-pain, headaches-migraines | conditionPages: 4 stubs fully populated from uploaded source docs; each entry has meta (SEO title/desc/keywords), hero (H1+subheadline verbatim from source), overview, 9–11 symptoms, 6–9 causes, 5 treatments (Exam→Cox→Adjustments→Exercises→Lifestyle), 3 benefits (35yrs/Cox/personalized), 4-step howItWorks, 9–14 FAQs verbatim from source, CTA, relatedConditions, structuredData; 0 TS errors, 0 console errors, all 4 routes verified in browser. Arthritis.txt noted — maps to back-pain (next session). |
| 2026-05-12 | Footer — real clinic data + Google Maps embed | types/content.ts: added hours2?: string to ContactInfo.hours[] item for split-session days; content/pages.ts: CLINIC_INFO fully populated (214 Main St N, Airdrie AB T4B 0R6, 403-948-4440, info@summitspine.ca, all 7 days — Mon/Wed two-slot); Footer.tsx: Hours of Operation heading added, hours2 rendered when present, Google Maps iframe embed added below 4-col grid (lazy-loaded, accessible title, no API key); 0 TS errors, 0 console errors. |
