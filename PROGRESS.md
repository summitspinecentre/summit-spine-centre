# Summit Spine Centre — Build Progress

**Project:** Summit Spine Centre Website
**Stack:** Next.js (App Router) · TypeScript · Tailwind CSS
**Location:** Airdrie, Alberta
**Last Updated:** 2026-05-13

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
- [x] `app/contact/page.tsx` — Contact
- [x] `app/book/page.tsx` — Book Your Visit

### Services
- [x] `app/services/page.tsx` — Services Hub
- [x] `app/services/[slug]/page.tsx` — cox, chiropractic-adjustments, summits-of-recovery (dynamic)
- [x] `app/services/summits-of-recovery/[pillar]/page.tsx` — 4 pillar pages (dynamic)
- [x] Content: `cox-flexion-distraction` — fully populated
- [x] Content: `chiropractic-adjustments` — fully populated
- [x] Content: `summits-of-recovery` (hub) — fully populated
- [x] Content: `lifestyle-wisdom` (pillar) — fully populated

### Conditions
- [x] `app/conditions/page.tsx` — Conditions Hub
- [x] `app/conditions/[slug]/page.tsx` — Dynamic condition route
- [x] Content: `low-back-pain`
- [x] Content: `sciatica`
- [x] Content: `disc-herniation`
- [x] Content: `neck-pain`
- [x] Content: `back-pain` (Arthritis / DDD / DJD)
- [x] Content: `headaches-migraines`
- [x] Content: `spinal-stenosis`
- [x] Content: `tech-neck`
- [x] Content: `whiplash`
- [x] Content: `upper-back-shoulder-pain`
- [ ] Content: `tmj` *(no source doc yet)*
- [x] Content: `sports-injuries`
- [x] Content: `postpartum-back-pain`
- [x] Content: `chronic-pain`
- [ ] Content: `mva-whiplash` *(draft — publish when ready)*

### Utility
- [ ] `app/resources/page.tsx` *(draft — publish when ready)*
- [x] `app/privacy/page.tsx`
- [x] `app/terms/page.tsx`
- [x] `app/accessibility/page.tsx`

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
- [x] GA4 script loaded in `app/layout.tsx` (conditional on `NEXT_PUBLIC_GA_ID`, `strategy="afterInteractive"`)
- [x] Pageview tracking auto-fires on every route change
- [x] `lib/analytics.ts` — typed `fireGAEvent()` safe wrapper; `isBookingHref()` helper
- [x] `components/ui/Button.tsx` — auto-fires `booking_cta_click` (`source: 'cta_button'`) on any href containing `/booking/`
- [x] `components/ui/StickyBookingBar.tsx` — fires `booking_cta_click` (`source: 'sticky_bar'`) on click
- [x] Server-side tracking — N/A (Measurement Protocol overkill for clinic site; all meaningful events covered client-side)

---

## Assets
- [x] `/public/logo/logo-colour-primary.png` — real logo, light backgrounds (nav scrolled, footer)
- [x] `/public/logo/logo-inverted-primary.png` — real logo, dark backgrounds (nav on hero)
- [x] `/public/logo/logo-colour-secondary.png` — real secondary logo, light backgrounds
- [x] `/public/logo/logo-inverted-secondary.png` — real secondary logo, dark backgrounds
- [ ] `/public/placeholders/` — placeholder images added
- [ ] `/public/images/home/` — real images added
- [x] `/public/images/about/hero.jpg` — added (4928×3264)
- [ ] `/public/images/team/` — real images added
- [x] `/public/images/services/hero.jpg` — added (3840×2160)
- [x] `/public/images/services/chiropractic-adjustments/hero.jpg` — added, replaced with new photo
- [x] `/public/images/services/summits-of-recovery/hero.jpg` — added
- [x] `/public/images/conditions/hero.jpg` — added (6000×3376)
- [x] `/public/images/conditions/back-pain/hero.jpg` — added
- [x] `/public/images/conditions/disc-herniation/hero.jpg` — added
- [x] `/public/images/conditions/headaches-migraines/hero.jpg` — added
- [x] `/public/images/conditions/neck-pain/hero.jpg` — added
- [x] `/public/images/conditions/sciatica/hero.jpg` — added
- [x] `/public/images/conditions/spinal-stenosis/hero.webp` — added
- [x] `/public/images/contact/hero.jpg` — replaced with new photo
- [ ] `/public/images/conditions/tech-neck/` — needs higher-res photo (current: 300×168px)
- [ ] `/public/images/conditions/whiplash/` — needs higher-res photo (current: 624×351px)

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

## Animation System
- [x] `framer-motion` v12 installed
- [x] `components/ui/FadeIn.tsx` — 'use client' viewport-triggered fade + slide-up wrapper (whileInView, once, prefers-reduced-motion safe)
- [x] `app/globals.css` — hero text entrance CSS animation sequence (eyebrow 80ms → headline 260ms → subheadline 440ms → body 580ms → CTAs 720ms → stats 900ms; fill-mode: both; reduced-motion override)
- [x] `components/sections/Hero.tsx` — hero-eyebrow / hero-headline / hero-sub / hero-body / hero-cta-row / hero-stats classes applied; Hero stays pure Server Component
- [x] `app/page.tsx` — all 10 below-fold sections wrapped in FadeIn; 0 TS errors, 0 console errors

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
| 2026-05-12 | Feature — StickyBookingBar | components/ui/StickyBookingBar.tsx: new 'use client' component, IntersectionObserver on #hero-cta sentinel, opacity+translate transition (300ms), dark eerie-black/95 bar with cerulean pill button, CalendarCheck icon, pointer-events-none when hidden, aria-hidden synced to visibility; Hero.tsx: id="hero-cta" added to CTA row div (Server Component, no interactivity added); app/layout.tsx: StickyBookingBar mounted once in root layout, label+href from navConfig.cta; 0 TS errors, 0 console errors, verified in browser — hidden at top of page, visible and correctly positioned below navbar after scrolling past hero. |
| 2026-05-13 | Service Hub — Summits of Recovery | summitsPage fully populated: meta, hero, featureHighlight, featuresList (4 pillars), howItWorks (4 steps), faqs (5 items), cta; 0 TS errors, all 6 sections verified in browser. |
| 2026-05-13 | Hub Pages — Services + Conditions | app/services/page.tsx and app/conditions/page.tsx built; servicesPage and conditionsPage stubs fully populated; ServicesGrid (3 linked cards), FeaturesListSection (4 differentiators), CTASection on services hub; ConditionsGrid (14 published conditions from sitemap), education prose section, FAQSection (5 items), CTASection on conditions hub; 0 TS errors, 0 console errors, both routes verified in browser. |
| 2026-05-13 | Conditions Content — 7 stubs populated | back-pain (Arthritis/DDD/DJD), tech-neck, whiplash, upper-back-shoulder-pain, sports-injuries, postpartum-back-pain, chronic-pain — all fully populated from source docs (meta, hero, overview, symptoms, causes, 5 treatments, 3 benefits, 4 howItWorks steps, 6 FAQs, CTA, relatedConditions, structuredData); 0 TS errors, routes verified in browser. Remaining stubs: tmj (no source doc), mva-whiplash (draft). Disc Bulge.txt and Summits of Recovery.txt flagged for separate sessions. |
| 2026-05-13 | Lighthouse Performance Pass | Navbar.tsx: replaced window.scrollY scroll listener with IntersectionObserver on #nav-scroll-sentinel (eliminates scroll event overhead, fixes forced reflow flag); app/layout.tsx: added 1×1px aria-hidden sentinel div #nav-scroll-sentinel at top of body; Hero.tsx: added sizes="(max-width: 768px) 100vw, 50vw" to right-column image for correct srcset generation; confirmed Google Maps iframe already had loading="lazy" and GA4 already used strategy="afterInteractive" — no changes needed there; 0 TS errors, 0 console errors, IntersectionObserver verified in browser (header class confirms bg-neutral-0 shadow-md h-16 at scrollY=15). |
| 2026-05-13 | Nav + Sticky Bar bug fixes | Navbar.tsx: raised header z-index z-30→z-50 (sticky bar at z-40 was painting over dropdown menus and mobile menu, blocking clicks — root cause of mobile "About" link not responding); desktop nav items with children (Services, Conditions) converted from click-only button to hover-triggered dropdown + clickable Link — onMouseEnter/onMouseLeave on wrapper div opens/closes dropdown, label is now a Next.js Link to the hub page (/services, /conditions), mt-2→mt-1 to reduce hover gap; StickyBookingBar.tsx: replaced unreliable scroll+getBoundingClientRect approach with IntersectionObserver on #hero-cta (same pattern as navbar sentinel — fires reliably on intersection change with no scroll event overhead); added immediate setVisible(true) fallback for pages without #hero-cta; replaced [animation:fade-in] with transition-all duration-300 ease-out + translate-y classes for reliable CSS transition every time; 0 TS errors, 0 console errors. |
| 2026-05-13 | Page — Contact | contactPage stub fully populated (meta, hero, cta, 6 contact FAQs); app/contact/page.tsx: generateMetadata (title.absolute), LocalBusiness JSON-LD, Hero (scheme 1, eyebrow "Airdrie, Alberta"), two-col contact info section (Phone/Email/Address/Hours cards + Google Maps iframe with aria-label), FAQSection (scheme 2, 6 questions: referral, walk-ins, parking, first visit prep, appointment length, cancellation), CTASection (scheme 4, dual CTAs: Book + Call); 0 TS errors, all 4 sections verified in browser accessibility tree. |
| 2026-05-13 | Page — Book Your Visit | bookPage stub fully populated (meta, hero with dual CTAs, 5 booking FAQs, cta); app/book/page.tsx: generateMetadata (title.absolute), LocalBusiness JSON-LD, Hero (scheme 1, "Book Your Visit.", Book Online Now + Call ghost CTA), booking section (scheme neutral-100) — 2-col lg: left=AtlasHub iframe in rounded card with header bar + "open in new tab" + fallback text, right=Phone card + Hours table + walk-in notice; FAQSection (scheme 2, 5 Qs: speed, AHC coverage, cancellation, first visit prep, direct billing); CTASection (scheme 4, Book + Contact Us); 0 TS errors, all sections verified in browser accessibility tree. |
| 2026-05-13 | Pages — Utility (Privacy, Terms, Accessibility) | privacyPage (9 sections: PIPA/PIPEDA), termsPage (10 sections: Alberta law), accessibilityPage (6 sections: WCAG 2.1 AA) — all stubs fully populated; components/templates/UtilityPageTemplate.tsx: Server Component, centered max-w-3xl prose layout, H1 + last-updated <time>, section list (h2 + \n\n-split paragraphs, dividers); app/privacy, /terms, /accessibility: generateMetadata (title.absolute), each wraps UtilityPageTemplate; 0 TS errors, all 3 routes verified in browser. |
| 2026-05-14 | Animation System — FadeIn + Hero entrance | framer-motion v12 installed; FadeIn.tsx (whileInView fade+slide-up, useReducedMotion, viewport once); hero CSS stagger sequence (6 elements, 80ms–900ms delays, fill-mode:both, reduced-motion override); Hero.tsx: hero-* classes applied, stays pure Server Component; app/page.tsx: all 10 below-fold sections wrapped in FadeIn; 0 TS errors, 0 console errors, verified in browser. |
| 2026-05-14 | Hero images — 5 pages | Copied 5 real photos into public/images/[page]/hero.jpg (about, services, services/chiropractic-adjustments, conditions, contact); updated content/pages.ts hero.bgImage + scheme:4 for all 5 pages; full-bleed dark-overlay layout matches homepage; 0 TS errors, 0 console errors, all 5 pages verified in browser. |
| 2026-05-15 | Analytics — GA4 booking CTA tracking | lib/analytics.ts: typed fireGAEvent() safe wrapper + isBookingHref() helper; Button.tsx: auto-fires booking_cta_click (source: cta_button) on any href containing /booking/ — zero call-site changes needed; StickyBookingBar.tsx: fires booking_cta_click (source: sticky_bar) on click; server-side tracking marked N/A; 0 TS errors, dev server clean. |
| 2026-05-15 | Lighthouse performance — image delivery + non-composited animations | next.config.ts: added images.formats ['image/avif','image/webp'] + minimumCacheTTL:60 (addresses 72 KiB image delivery saving); scoped transition-all → specific properties in 5 components (7 instances total): Navbar transition-[background-color,box-shadow] duration-300 (was transition-all duration-700 — height was forcing layout); StickyBookingBar transition-[opacity,transform]; ConditionsGrid + ServicesGrid cards transition-[transform,box-shadow,border-color]; DemographicTabBar buttons transition-colors, chevron transition-[transform,opacity], condition cards transition-colors; 0 TS errors, 0 console errors, verified in browser. |
| 2026-05-15 | Navbar UX — dropdown sensitivity + adaptive text colour | Navbar.tsx: added closeTimeoutRef + openDropdown/scheduleCloseDropdown (150ms delay) so diagonal mouse movement from trigger to dropdown no longer dismisses the menu; dropdown panel also gets onMouseEnter/onMouseLeave to keep it open; Hero.tsx: added SetNavVariant rendered inside the section — variant='hero' (white text) when hasBgImage or cfg.darkMode, variant='page' (dark text) otherwise; all dark-hero pages now auto-set white nav text with zero per-page wiring; removed redundant manual SetNavVariant from app/page.tsx; 0 TS errors, 0 console errors, verified home (white text on dark), team (dark text on white), neck-pain condition (white text on dark). |
| 2026-05-15 | Logo integration — real brand PNGs | 4 PNGs copied to public/logo/ (colour-primary, colour-secondary, inverted-primary, inverted-secondary); styles/tokens.ts: LOGO.lightSrc/darkSrc replaced with colourSrc/invertedSrc/colourSecondarySrc/invertedSecondarySrc; Navbar.tsx: logo src switches on isHero && !scrolled — invertedSrc on dark hero, colourSrc on white scrolled nav; Footer.tsx: updated to colourSrc (light hemlock-50 background); 0 TS errors, verified in browser — inverted logo on homepage hero, colour logo on /team light nav and in footer. |
