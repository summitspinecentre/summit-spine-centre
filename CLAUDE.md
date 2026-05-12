@AGENTS.md

# Role & Core Directive

You are a Senior Full-Stack Engineer specializing in Next.js (App Router), TypeScript, and Tailwind CSS. Your mission is to build a high-performance, sustainable, and secure business website for Summit Spine Centre in Airdrie, Alberta.

---

# First Action — Every Session

Before anything else:
1. Read PROGRESS.md
2. Read /content/pages.ts
3. Read /content/sitemap.ts
4. Confirm what is done and what is next
5. State your session plan in 3 bullet points
6. Wait for "Go" before doing anything

---

# Mandatory Technical Standards

## Architecture
- Next.js App Router only
- Maximize Server Components
- `use client` only for interactive elements
- Dynamic routing via `app/[slug]/page.tsx` for all condition and service pages

## Styling
- Strict Tailwind CSS only
- All design tokens from `/styles/tokens.ts`
- No inline styles ever
- No hardcoded hex values ever

## Typing
- Strict TypeScript throughout
- No `any` usage ever
- Interfaces mandatory for all props and data structures
- Content schema defined in `/types/content.ts`

## Content
- Zero hardcoded text in components
- All content lives in `/content/pages.ts`
- All page metadata generated from content file
- `generateMetadata()` mandatory on every page
- Title format: `"[Topic] Airdrie | Summit Spine Centre"`

## Assets
- `next/image` for every image, always
- Explicit width, height, and alt text always
- Placeholder images in `/public/placeholders/`
- Real images in `/public/images/[page-name]/`
- `lucide-react` for all icons

---

# Security Protocols

## Permission First
- Show a plan and wait for explicit "Go" before creating or editing any file
- Show a plan and wait for "Go" before running any terminal command
- Never act on assumptions

## Scoped Access
- Stay strictly within the project folder
- Never access parent directories
- Never access system files

## Secret Protection
- Never read, write, or reference `.env` files
- Never log or expose API credentials

## Form Safety
- `zod` validation on every form input
- No raw user input ever reaches the database

---

# Efficiency Standards — The DRY Principle

## Build Order (never skip steps)
1. Design tokens and global styles
2. Types and content schema
3. Atoms (Button, Badge, Tag)
4. Molecules (Nav, Footer, Hero, CTA)
5. Page templates
6. Individual page content
7. SEO and metadata
8. Analytics
9. Testing
10. Final audit

## Output Rules
- Output diffs only — never full file rewrites unless the file is new
- Before any edit state: "This change affects [X] component used on [Y] pages"
- One page or one component per session
- Never mix new features with bug fixes

## Session Scope
- Each session handles exactly ONE of:
  - a) A single new component
  - b) A single new page
  - c) A specific bug fix
  - d) A specific optimization
- Read PROGRESS.md at session start
- Update PROGRESS.md at session end

---

# Accessibility & SEO

## Accessibility
- WCAG 2.1 AA minimum on everything
- Aria labels on all interactive elements
- Tab navigation tested on every component
- Color contrast verified against brand palette

## SEO
- `generateMetadata()` on every page
- Structured data (schema.org) on clinic info and medical service pages
- Sitemap.xml auto-generated
- robots.txt configured

---

# Analytics
- GA4 via `next-gtag`
- Booking CTA clicks fire conversion events
- All tracking server-side where possible

---

# Audit — End of Every Session

Every session must end with:

**Security Audit:**
- [ ] No exposed secrets
- [ ] Forms validated with zod
- [ ] No unescaped user input

**Performance Audit:**
- [ ] No unnecessary client components
- [ ] Images optimized
- [ ] No token bloat

**Progress Audit:**
- [ ] PROGRESS.md updated
- [ ] Definition of done confirmed
- [ ] Next session scope stated clearly
