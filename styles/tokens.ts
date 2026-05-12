// /styles/tokens.ts
// Design tokens for Summit Spine Centre
// Source: Brand Kit 2025 + UX Vision Doc + Relume DESIGN.md
// ─────────────────────────────────────────────────────────────
// FONT NOTE: Brand spec = Augustine (display) + Buvera (sans)
// Web implementation = Manrope + Inter (Google Fonts, Option B)
// To switch to custom fonts: update FONT_HEADING and FONT_BODY
// and wire font files in app/layout.tsx via next/font/local
// ─────────────────────────────────────────────────────────────

// ── FONTS ────────────────────────────────────────────────────
export const FONT_HEADING = 'var(--font-heading)' // Augustine → Manrope
export const FONT_BODY    = 'var(--font-body)'    // Buvera    → Inter

// ── BRAND COLORS ─────────────────────────────────────────────
// Primary palette — source: Brand Kit p.22 + UX Vision
export const COLOR = {
  // Core brand
  alabaster:  '#EEEEE7', // 30% weight — page backgrounds, hero sections
  dun:        '#CFC2AB', // 15% weight — dividers, card borders, subtle UI
  ebony:      '#606141', // 15% weight — subheadings, icon fills, accents
  eerieBlack: '#121F1B', // 25% weight — body copy, headings, footers
  cerulean:   '#167287', // 15% weight — CTAs, links, highlights (use sparingly)

  // Extended hemlock scale (source: Relume DESIGN.md)
  hemlock: {
    50:  '#EFEFEC',
    100: '#DFDFD9',
    400: '#8F907A',
    500: '#606141', // = ebony
    600: '#4C4D34',
    800: '#26261A',
    900: '#1C1D13',
  },

  // Extended cararra scale (source: Relume DESIGN.md)
  cararra: {
    50:  '#FDFDFC',
    100: '#FBFBFA',
    200: '#F3F3EE',
    300: '#EEEEE7', // = alabaster
    400: '#BEBEB8',
    600: '#5F5F5C',
    700: '#474745',
  },

  // Neutral scale
  neutral: {
    0:   '#FFFFFF',
    100: '#F2F2F2',
    200: '#D9D9D9',
    300: '#B4B4B3',
    400: '#828281',
    500: '#50504E',
    600: '#1E1E1C',
    700: '#050503',
    white: '#FFFFFF',
  },

  // Semantic aliases
  background:    '#EEEEE7', // alabaster
  backgroundAlt: '#FFFFFF', // white sections
  text:          '#121F1B', // eerieBlack
  textMuted:     '#606141', // ebony
  textSubtle:    '#CFC2AB', // dun
  accent:        '#167287', // cerulean
  border:        '#CFC2AB', // dun
  borderSubtle:  'rgba(5, 5, 3, 0.15)',
} as const

// ── COLOR SCHEMES ─────────────────────────────────────────────
// Maps to Relume scheme system (sitemap.md assigns scheme per section)
export const SCHEME = {
  1: { bg: '#FFFFFF',  fg: '#F2F2F2',  text: '#050503', accent: '#606141' }, // White
  2: { bg: '#F2F2F2',  fg: '#FFFFFF',  text: '#050503', accent: '#606141' }, // Light grey
  3: { bg: '#EFEFEC',  fg: '#DFDFD9',  text: '#050503', accent: '#606141' }, // Hemlock light (footer)
  4: { bg: '#8F907A',  fg: '#606141',  text: '#FFFFFF', accent: '#FFFFFF' }, // Hemlock mid (dark sections)
} as const

// ── COLOR WEIGHTS ─────────────────────────────────────────────
// Brand Kit p.23: apply these ratios across the site
export const COLOR_WEIGHT = {
  alabaster:  '30%',
  eerieBlack: '25%',
  ebony:      '15%',
  dun:        '15%',
  cerulean:   '15%',
} as const

// ── TYPOGRAPHY SCALE ─────────────────────────────────────────
// Source: UX Vision + Relume DESIGN.md (reconciled)
export const FONT_SIZE = {
  desktop: {
    hero: '72px',  // Page title / hero headline (Augustine Bold)
    h1:   '64px',  // H1 section (Augustine Uppercase)
    h2:   '48px',  // H2 subheading (Augustine Bold)
    h3:   '36px',
    h4:   '28px',
    h5:   '22px',
    h6:   '18px',
    xl:   '22px',  // Large body text
    lg:   '18px',  // Medium body
    base: '16px',  // Standard body (Buvera Regular)
    sm:   '14px',  // Captions, labels
    xs:   '12px',  // Tiny labels
  },
  mobile: {
    hero: '44px',
    h1:   '40px',
    h2:   '32px',
    h3:   '26px',
    h4:   '22px',
    h5:   '20px',
    h6:   '18px',
    xl:   '18px',
    lg:   '16px',
    base: '16px',
    sm:   '13px',
    xs:   '11px',
  },
} as const

export const FONT_WEIGHT = {
  light:     '300',
  regular:   '400',
  medium:    '500',
  semibold:  '600',
  bold:      '700',
  extrabold: '800',
} as const

export const LINE_HEIGHT = {
  tight:   '1.1',  // Headlines
  snug:    '1.25', // Subheadings
  normal:  '1.5',  // Body
  relaxed: '1.75', // Long-form
} as const

export const LETTER_SPACING = {
  tighter: '-0.02em', // Hero headlines
  tight:   '-0.01em',
  normal:  '0em',
  wide:    '0.05em',  // Augustine Uppercase labels
  wider:   '0.1em',   // SPINE CENTRE small caps
} as const

// ── SPACING ──────────────────────────────────────────────────
// Base unit: 4px. All values are multiples.
export const SPACING = {
  px:  '1px',
  0:   '0px',
  1:   '4px',
  2:   '8px',
  3:   '12px',
  4:   '16px',
  5:   '20px',
  6:   '24px',
  8:   '32px',
  10:  '40px',
  12:  '48px',
  16:  '64px',
  20:  '80px',  // Min vertical section padding (UX Vision)
  24:  '96px',
  32:  '128px',
  40:  '160px',
} as const

// ── LAYOUT ───────────────────────────────────────────────────
export const LAYOUT = {
  maxWidth:          '1200px', // UX Vision: max content width
  maxWidthWide:      '1440px',
  containerPadX:     '24px',  // Mobile horizontal padding
  containerPadXMd:   '48px',  // Tablet
  containerPadXLg:   '80px',  // Desktop
  sectionPadY:       '80px',  // UX Vision: min 80px between sections
  sectionPadYLg:     '120px',
  navHeight:         '80px',
  navHeightScrolled: '64px',
} as const

// ── BORDER RADIUS ─────────────────────────────────────────────
// Source: Relume DESIGN.md ui object
export const RADIUS = {
  none: '0px',
  sm:   '4px',    // Tags (tagRadius)
  md:   '6px',    // Buttons, inputs (buttonRadius, inputRadius)
  lg:   '8px',    // Cards (radiusMedium, radiusLarge)
  xl:   '12px',
  '2xl': '16px',
  '3xl': '24px',
  full: '9999px', // Pills / circular
} as const

// ── BORDERS ──────────────────────────────────────────────────
export const BORDER = {
  width:  '1px',
  color:  '#CFC2AB',             // dun
  subtle: 'rgba(5, 5, 3, 0.15)',
} as const

// ── SHADOWS ──────────────────────────────────────────────────
export const SHADOW = {
  sm:        '0 1px 3px rgba(18, 31, 27, 0.08)',
  md:        '0 4px 12px rgba(18, 31, 27, 0.10)',
  lg:        '0 8px 24px rgba(18, 31, 27, 0.12)',
  card:      '0 2px 8px rgba(18, 31, 27, 0.08)',
  cardHover: '0 8px 24px rgba(18, 31, 27, 0.14)', // translateY(-4px) on hover
} as const

// ── ANIMATION ────────────────────────────────────────────────
// Source: UX Vision — "300ms ease fade-up on enter viewport"
export const ANIMATION = {
  durationFast:    '150ms',
  durationBase:    '300ms', // Section entrance animations
  durationSlow:    '500ms',
  durationHero:    '800ms', // Word-by-word hero headline
  easing:          'ease',
  easingSmooth:    'cubic-bezier(0.4, 0, 0.2, 1)',
  easingEntrance:  'cubic-bezier(0.0, 0.0, 0.2, 1)',
  hoverTranslateY: '-4px',  // Card lift on hover (UX Vision)
} as const

// ── BREAKPOINTS ──────────────────────────────────────────────
export const BREAKPOINT = {
  sm:   '375px',  // UX Vision: test at 375px first
  md:   '768px',
  lg:   '1024px',
  xl:   '1200px', // Max content width
  '2xl': '1440px',
} as const

// ── Z-INDEX ──────────────────────────────────────────────────
export const Z = {
  base:    0,
  raised:  10,
  overlay: 20,
  nav:     30,  // Sticky nav
  modal:   40,
  toast:   50,
} as const

// ── LOGO ─────────────────────────────────────────────────────
export const LOGO = {
  minSizePx: 20,                    // Brand Kit: minimum 20px screen size
  lightSrc:  '/logo/Logomark_1-Summit-Spine-Centre-289x300.png', // Icon mark — transparent bg, for dark/transparent nav
  darkSrc:   '/logo/logo-wordmark.png',  // Full wordmark — white bg, for scrolled white nav
  alt:       'Summit Spine Centre',
} as const

// ── CTA ──────────────────────────────────────────────────────
// UX Vision: button label and booking URL are fixed brand constants
export const CTA = {
  label:      'Book Your Visit',
  bookingUrl: 'https://summitspine.ca/booking/',
} as const

// ── TAGLINES ─────────────────────────────────────────────────
// Brand Kit: must appear exactly as approved — no alterations
export const TAGLINE     = 'Reach Your Peak' as const
export const TAGLINE_ALT = 'Life is the Summit. We Keep You Climbing.' as const
