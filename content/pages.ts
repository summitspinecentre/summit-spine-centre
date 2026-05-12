// /content/pages.ts
// Content scaffold for Summit Spine Centre — 35 pages
// All string values are stubs — fill in session by session
// Every entry is strictly typed against /types/content.ts
// ─────────────────────────────────────────────────────────────
// DO NOT hardcode text in components. All copy lives here.

import type {
  HomePage,
  AboutPage,
  TeamPage,
  ContactPage,
  BookPage,
  ServicesHubPage,
  ServicePage,
  PillarPage,
  ConditionsHubPage,
  ConditionPage,
  ResourcesPage,
  UtilityPage,
  ContactInfo,
  NavConfig,
} from '@/types/content'

// ── SHARED CLINIC INFO ───────────────────────────────────────
// Used across Contact, Book, Footer, and structured data

export const CLINIC_INFO: ContactInfo = {
  address:     '',
  city:        'Airdrie',
  province:    'Alberta',
  postalCode:  '',
  phone:       '',
  email:       '',
  mapEmbedUrl: '',
  hours: [
    { days: 'Monday – Friday', hours: '' },
    { days: 'Saturday',        hours: '' },
    { days: 'Sunday',          hours: '' },
  ],
}

// ── HOME ─────────────────────────────────────────────────────

export const homePage: HomePage = {
  meta: {
    slug:          'home',
    title:         'Chiropractor Airdrie | Summit Spine Centre',
    description:   'Walk-in chiropractic care in Airdrie, Alberta. Specializing in back pain, sciatica, disc herniation, and neck pain. No referral needed. Serving Airdrie for 35+ years.',
    keywords:      ['chiropractor Airdrie', 'walk-in chiropractic Airdrie', 'spine care Airdrie'],
    published:     true,
    priority:      'P1',
    type:          'home',
    canonicalPath: '/',
  },
  hero: {
    headline:     'Life is the Summit.',
    subheadline:  'We Keep You Climbing.',
    body:         'Pain has a way of shrinking your world. We help you get it back. Specialized, gentle care in Airdrie — built around the life you actually want to be living.',
    cta:          { label: 'Book Your Visit', href: 'https://summitspine.ca/booking/' },
    secondaryCta: { label: 'Learn About Cox FD', href: '/services/cox-flexion-distraction', variant: 'ghost' },
    bgImage:      { src: '/devon-hawkins-_v0LMRZAtAo-unsplash-scaled.jpeg', alt: 'Summit Spine Centre chiropractic clinic in Airdrie, Alberta' },
    scheme:       4,
  },
  conditionsBar: {
    headline:   'What brings you in?',
    conditions: [
      { label: 'Low Back Pain',   slug: 'low-back-pain' },
      { label: 'Sciatica',        slug: 'sciatica' },
      { label: 'Neck Pain',       slug: 'neck-pain' },
      { label: 'Headaches',       slug: 'headaches-migraines' },
      { label: 'Disc Herniation', slug: 'disc-herniation' },
      { label: 'Tech Neck',       slug: 'tech-neck' },
    ],
  },
  demographicTabBar: {
    headline: 'Sound familiar?',
    scheme:   1,
    tabs: [
      {
        id:               'desk-worker',
        label:            'Desk Worker',
        empathyStatement: 'Hours at a desk take a real toll. If you\'re dealing with a stiff neck, tight shoulders, or a low back that aches by 3pm — you\'re in the right place.',
        conditions: [
          { label: 'Neck Pain',              slug: 'neck-pain',             description: 'Sustained forward-head posture strains the muscles and joints that support your neck — especially after hours in front of a screen.' },
          { label: 'Tech Neck',              slug: 'tech-neck',             description: 'The modern epidemic: hours looking down at devices compresses the lower cervical spine and accelerates wear.' },
          { label: 'Headaches',              slug: 'headaches-migraines',   description: 'Tension headaches that build through the afternoon are often driven by tight neck muscles and restricted cervical joints.' },
          { label: 'Low Back Pain',          slug: 'low-back-pain',         description: 'Prolonged sitting compresses spinal discs, tightens hip flexors, and slowly trains your low back to ache.' },
          { label: 'Sciatica',               slug: 'sciatica',              description: 'Disc pressure from long hours of sitting can irritate the sciatic nerve and send pain down the leg.' },
          { label: 'Upper Back & Shoulders', slug: 'upper-back-shoulder-pain', description: 'Rounded shoulders and a hunched upper back from keyboard work create chronic tension that rarely resolves on its own.' },
          { label: 'Something else?',        description: 'Pain doesn\'t follow job descriptions. Whatever you\'re dealing with, you\'re welcome here — even if it doesn\'t fit neatly on this list.' },
        ],
        cta: { label: 'Book Your Visit', href: 'https://summitspine.ca/booking/' },
      },
      {
        id:               'manual-labourer',
        label:            'Manual Labourer',
        empathyStatement: 'Your body earns a living every day. We help labourers recover faster, manage pain through a season, and stay on the job.',
        conditions: [
          { label: 'Low Back Pain',          slug: 'low-back-pain',         description: 'Repeated bending, lifting, and sustained awkward postures put cumulative stress on spinal discs and joints.' },
          { label: 'Disc Herniation',        slug: 'disc-herniation',       description: 'Heavy lifting and sudden strain are among the most common triggers for disc herniation in working-age adults.' },
          { label: 'Sciatica',               slug: 'sciatica',              description: 'Disc pressure from physical labour can compress the sciatic nerve, sending pain, numbness, or weakness into the leg.' },
          { label: 'Neck Pain',              slug: 'neck-pain',             description: 'Overhead work and awkward angles load the cervical spine throughout a shift in ways that add up fast.' },
          { label: 'Upper Back & Shoulders', slug: 'upper-back-shoulder-pain', description: 'Repetitive lifting and carrying strains the upper back and rotator cuff — often going unaddressed until it becomes a serious problem.' },
          { label: 'Something else?',        description: 'Your work puts demands on every part of your body. If you\'re hurting — even somewhere unexpected — we can help figure it out.' },
        ],
        cta: { label: 'Book Your Visit', href: 'https://summitspine.ca/booking/' },
      },
      {
        id:               'weekend-warrior',
        label:            'Weekend Warrior',
        empathyStatement: 'You push hard on weekends and pay for it on Monday. We help you recover faster and stay in the game longer.',
        conditions: [
          { label: 'Low Back Pain',          slug: 'low-back-pain',         description: 'Athletic loading compresses and rotates the spine in ways that everyday movement doesn\'t — and the cumulative effect catches up.' },
          { label: 'Sciatica',               slug: 'sciatica',              description: 'Sport-related disc injuries can put pressure on the sciatic nerve and shut down your training without warning.' },
          { label: 'Neck Pain',              slug: 'neck-pain',             description: 'Contact sports, cycling, and heavy lifts all load the cervical spine — and a stiff neck limits everything else.' },
          { label: 'Sports Injuries',        slug: 'sports-injuries',       description: 'Sprains, strains, and repetitive overuse injuries that flare up every time you try to push harder.' },
          { label: 'Upper Back & Shoulders', slug: 'upper-back-shoulder-pain', description: 'Overhead athletes and lifters are especially prone to upper back and shoulder dysfunction that limits performance.' },
          { label: 'Something else?',        description: 'Weekend warriors see it all. If something\'s been nagging you, don\'t wait for it to turn into something that forces you to stop.' },
        ],
        cta: { label: 'Book Your Visit', href: 'https://summitspine.ca/booking/' },
      },
      {
        id:               'parent',
        label:            'Parent',
        empathyStatement: 'Carrying kids, car seats, and everything that comes with them adds up fast. We see a lot of parents dealing with neck and back pain.',
        conditions: [
          { label: 'Neck Pain',              slug: 'neck-pain',             description: 'Looking down while nursing, feeding, or watching little ones adds real strain over thousands of hours.' },
          { label: 'Low Back Pain',          slug: 'low-back-pain',         description: 'Lifting, bending, carrying, and sleeping in awkward positions changes your spinal load completely.' },
          { label: 'Postpartum Back Pain',   slug: 'postpartum-back-pain',  description: 'Hormonal changes, core weakness, and new physical demands make postpartum back pain extremely common — and very treatable.' },
          { label: 'Sciatica',               slug: 'sciatica',              description: 'Altered posture during and after pregnancy can irritate the sciatic nerve and cause pain that radiates into the leg.' },
          { label: 'Upper Back & Shoulders', slug: 'upper-back-shoulder-pain', description: 'Carrying babies and toddlers strains the shoulder girdle in ways that don\'t resolve on their own with rest.' },
          { label: 'Something else?',        description: 'Parenting is physical. No matter what\'s hurting, if it\'s limiting what you can do with your kids — that\'s exactly what we\'re here for.' },
        ],
        cta: { label: 'Book Your Visit', href: 'https://summitspine.ca/booking/' },
      },
      {
        id:               'active-senior',
        label:            'Active Senior',
        empathyStatement: 'Staying active is one of the best things you can do for your body. We help you keep moving without pain getting in the way.',
        conditions: [
          { label: 'Low Back Pain',          slug: 'low-back-pain',         description: 'Age-related disc changes, arthritis, and years of use make low back pain increasingly common — and very responsive to the right care.' },
          { label: 'Sciatica',               slug: 'sciatica',              description: 'Spinal stenosis and degenerative disc changes are leading causes of sciatic pain in older adults.' },
          { label: 'Spinal Stenosis',        slug: 'spinal-stenosis',       description: 'Narrowing of the spinal canal compresses nerves and can limit how far you can walk, stand, or stay active.' },
          { label: 'Neck Pain',              slug: 'neck-pain',             description: 'Cervical degeneration and arthritis make neck stiffness and reduced range of motion increasingly common with age.' },
          { label: 'Headaches',              slug: 'headaches-migraines',   description: 'Cervicogenic headaches — originating from the neck — are more prevalent after decades of spinal wear.' },
          { label: 'Something else?',        description: 'Staying active is one of the best decisions you can make. Whatever comes up along the way, we\'re here to keep you moving.' },
        ],
        cta: { label: 'Book Your Visit', href: 'https://summitspine.ca/booking/' },
      },
      {
        id:               'tradesperson',
        label:            'Tradesperson',
        empathyStatement: 'Your work is physical and demanding. We help tradespeople manage pain, recover between jobs, and stay productive on site.',
        conditions: [
          { label: 'Low Back Pain',          slug: 'low-back-pain',         description: 'On-site demands — repeated bending, lifting, and sustained positions — strain the lumbar spine every single shift.' },
          { label: 'Disc Herniation',        slug: 'disc-herniation',       description: 'Tradespeople are among the highest-risk groups for disc herniation, and it\'s one of the leading causes of lost work days.' },
          { label: 'Neck Pain',              slug: 'neck-pain',             description: 'Overhead work, confined spaces, and sustained awkward positions load the cervical spine in ways that accumulate over a career.' },
          { label: 'Sciatica',               slug: 'sciatica',              description: 'Disc problems from trade work are a leading cause of sciatic pain — the kind that sends shooting pain down the leg.' },
          { label: 'Upper Back & Shoulders', slug: 'upper-back-shoulder-pain', description: 'Tool use, carrying materials, and repetitive reaching chronically strain the upper back and shoulders.' },
          { label: 'Something else?',        description: 'Tradespeople keep the world running. If something\'s hurting and slowing you down on the job, we want to help you stay on it.' },
        ],
        cta: { label: 'Book Your Visit', href: 'https://summitspine.ca/booking/' },
      },
    ],
  },
  stats: {
    scheme: 4,
    items: [
      { value: '140+', label: '5-Star Reviews' },
      { value: '35+',  label: 'Yrs in Airdrie' },
      { value: '2',    label: 'Expert DCs' },
      { value: '6',    label: 'Days a Week' },
    ],
  },
  whySummit: {
    sectionLabel: 'Why Summit Spine Centre',
    headline:     'Relief Is Just the Beginning.',
    body:         'Every patient who walks through our doors in Airdrie has a story. A hike they can\'t finish. A workday they can\'t get through. A moment with their kids they had to sit out. For over 35 years, this clinic has been helping Airdrie get back to living — and that\'s exactly what we\'re still here to do. Your story doesn\'t have to end with pain.',
    boxes: [
      {
        label:      'Decompression',
        subheading: 'That Deep, Pressurized Ache',
        body:       'The feeling that something is being squeezed that shouldn\'t be. Pressure that builds through the day, radiates down your leg, or just won\'t let up no matter what you try. We find what\'s compressed — and we take that pressure off.',
      },
      {
        label:      'Adjustments',
        subheading: 'Stiff, Stuck, and Out of Place',
        body:       'When your back locks up, your whole body compensates. Movements that used to be automatic now require thought. We restore what\'s stuck — and your body remembers how to move again.',
      },
    ],
    scheme: 2,
  },
  services: {
    headline:    'How We Help',
    subheadline: 'Evidence-based treatments built around your spine, your symptoms, and your goals.',
    scheme:      2,
    items: [
      { icon: 'Activity',   title: 'Cox Flexion-Distraction',  body: 'A gentle, low-force technique that decompresses affected discs and reduces nerve irritation — without forceful cracking or twisting.' },
      { icon: 'HandHeart',  title: 'Chiropractic Adjustments', body: 'Targeted spinal adjustments that restore proper movement, reduce pain, and improve overall function.' },
      { icon: 'Dumbbell',   title: 'Targeted Exercise',        body: 'Personalized home exercises that support your recovery between visits and reduce the risk of recurrence.' },
      { icon: 'Armchair',   title: 'Ergonomic Support',        body: 'Practical guidance on posture, workstation setup, and daily movement to protect your spine long-term.' },
    ],
  },
  featuresList: {
    headline: 'What Makes Us Different',
    scheme:   1,
    items: [
      { icon: 'DoorOpen',   title: 'Walk-In Convenience', body: 'No referral needed. Book same-day or just walk in — we work around your schedule, not the other way around.' },
      { icon: 'CreditCard', title: 'Direct Billing',      body: 'We bill your insurance directly so you can focus on getting better, not chasing paperwork.' },
      { icon: 'Heart',      title: 'Family-Like Care',    body: 'You\'re not a chart number here. We take the time to understand your symptoms, your goals, and your life.' },
    ],
  },
  benefits: {
    headline:    'Why Patients Choose Summit Spine Centre',
    subheadline: 'Results you can feel — from a team that actually listens.',
    scheme:      4,
    items: [
      { icon: 'Zap',        title: 'Faster Pain Relief',  body: 'Evidence-based techniques that target the root cause — not just the symptoms — so you feel better faster.' },
      { icon: 'TrendingUp', title: 'Long-Term Wellness',  body: 'We don\'t just treat what hurts today. We build a plan to keep you moving well for the long run.' },
      { icon: 'Smile',      title: 'Stress-Free Visits',  body: 'Clear communication, honest timelines, and a team that listens. No surprises, no pressure.' },
    ],
  },
  team: {
    headline:    'Meet Your Care Team',
    subheadline: 'Experienced, compassionate, and genuinely invested in your recovery.',
    scheme:      1,
    members:     [],
  },
  testimonials: {
    headline: 'What Our Patients Say',
    scheme:   3,
    items:    [],
  },
  faqs: {
    headline: 'Common Questions',
    scheme:   2,
    items: [
      { question: 'Do I need a referral to see a chiropractor?', answer: 'No referral is needed. You can book directly or walk in — chiropractic care in Alberta is accessible without a doctor\'s referral.' },
      { question: 'Do you offer direct billing to insurance?',   answer: 'Yes. We offer direct billing to most major insurance providers so you don\'t have to pay out of pocket and wait for reimbursement.' },
      { question: 'What should I expect on my first visit?',     answer: 'Your first visit includes a thorough health history and physical examination. We\'ll explain our findings clearly and outline a treatment plan before we do anything.' },
    ],
  },
  cta: {
    headline: 'Ready to feel like yourself again?',
    body:     'Book your visit today — no referral needed. Walk-ins welcome.',
    scheme:   4,
    cta:      { label: 'Book Your Visit', href: 'https://summitspine.ca/booking/' },
  },
  newsletter: {
    headline:    'Spine health tips, straight to your inbox.',
    body:        'Practical advice from our chiropractors — no fluff, no spam.',
    placeholder: 'Enter your email',
    scheme:      3,
  },
}

// ── ABOUT ────────────────────────────────────────────────────

export const aboutPage: AboutPage = {
  meta: {
    slug:          'about',
    title:         'About Summit Spine Centre | Chiropractors in Airdrie, Alberta',
    description:   'Two experienced chiropractors. One focused mission — specialized, evidence-informed spine care in Airdrie. Learn about our team, our story, and why patients choose Summit Spine Centre.',
    keywords:      ['about Summit Spine Centre', 'chiropractic clinic Airdrie', 'chiropractors Airdrie Alberta', 'Cox Flexion-Distraction Airdrie', 'Dr Karl Louder DC', 'Dr Ryan Lawrence DC'],
    published:     true,
    priority:      'P1',
    type:          'about',
    canonicalPath: '/about',
  },

  hero: {
    headline:    'Two Doctors. One Focused Mission.',
    subheadline: 'We left the generalist model behind. Summit Spine Centre exists because back pain deserves more than a rushed visit and a generic adjustment.',
    scheme:      1,
    cta:         { label: 'Book Your Visit', href: 'https://summitspine.ca/booking/' },
    pullQuote: {
      text:        'The spine is the architecture of everything you do. We treat it like it.',
      attribution: 'Dr. Louder & Dr. Lawrence',
    },
  },

  story: {
    headline: 'We built this clinic around the patients who felt like they\'d run out of options.',
    callout:  '"I\'ve tried everything. I don\'t know what else to do." That\'s what too many patients said to us before they found Summit Spine.',
    body:     'Formerly Lees Chiropractic — a trusted Airdrie practice with decades of roots in this community — Summit Spine Centre was reborn with a singular purpose: to bring specialized, evidence-informed spine care to people who need more than the standard approach can offer.\n\nCox Flexion-Distraction became our flagship because it works — especially for the cases that don\'t respond to traditional adjustments. Disc herniations, sciatica, spinal stenosis, chronic low back pain. Gentle, precise, and proven. No cracking required.',
  },

  team: {
    headline:    'Meet Your Care Team',
    subheadline: 'Two chiropractors. Complementary skill sets. One shared standard of care.',
    scheme:      2,
    members: [
      {
        id:          'dr-karl-louder',
        name:        'Dr. Karl Louder',
        role:        'Doctor of Chiropractic',
        credentials: 'DC',
        bio:         'Dr. Louder\'s primary focus is Cox Flexion-Distraction — a specialized, low-force technique that decompresses the spine without the twist and pop. If you\'ve been told surgery is your only option, he wants to see you first.',
        image:       { src: '', alt: 'Dr. Karl Louder, DC — Summit Spine Centre Airdrie', width: 480, height: 600 },
        specialties: ['Cox Flexion-Distraction', 'Disc Conditions', 'Sciatica', 'EN · FR · ES'],
      },
      {
        id:          'dr-ryan-lawrence',
        name:        'Dr. Ryan Lawrence',
        role:        'Doctor of Chiropractic',
        credentials: 'DC',
        bio:         'Dr. Lawrence brings a thorough, patient-centred approach to every visit. He takes the time to understand not just your symptoms, but your life — and builds a plan that gets you back to it.',
        image:       { src: '', alt: 'Dr. Ryan Lawrence, DC — Summit Spine Centre Airdrie', width: 480, height: 600 },
        specialties: ['Chiropractic Adjustments', 'Soft Tissue', 'Rehabilitation', 'EN'],
      },
    ],
  },

  values: {
    headline: 'What Sets the Standard Here',
    scheme:   1,
    items: [
      { icon: 'Award',      title: 'Specialized Expertise',   body: 'Cox Flexion-Distraction isn\'t offered at every clinic. It requires specific training, specific equipment, and a specific kind of commitment to complex cases. We made that commitment.' },
      { icon: 'DoorOpen',   title: 'No Barriers to Care',     body: 'Book online in under two minutes. No account creation, no intake wall, no referral needed. You decide when you\'re ready — we make it easy to start.' },
      { icon: 'Heart',      title: 'You\'re Not a Number',    body: 'We don\'t run a high-volume mill. Every patient gets a thorough exam, a clear explanation, and a plan built around their life — not a protocol on a shelf.' },
    ],
  },

  stats: {
    scheme: 3,
    items: [
      { value: '35+',  label: 'Years Combined Experience' },
      { value: '140+', label: 'Google Reviews' },
      { value: '2',    label: 'Expert Chiropractors' },
      { value: '6',    label: 'Days a Week' },
    ],
  },

  services: {
    headline:    'Care That Goes Beyond the Adjustment',
    subheadline: 'Every service is connected. We don\'t treat symptoms in isolation.',
    scheme:      2,
    items: [
      { icon: 'Activity',   title: 'Cox Flexion-Distraction', body: 'A certified, table-assisted spinal decompression technique. Reduces intradiscal pressure, clears nerve compression, and restores mobility — without cracking or forceful manipulation. Ideal for disc herniations, sciatica, stenosis, and post-surgical backs.' },
      { icon: 'HandHeart',  title: 'Chiropractic Care',       body: 'Manual adjustments, activator technique, soft tissue therapy, and custom orthotics. Full-scope chiropractic for spinal and joint health.' },
      { icon: 'TrendingUp', title: 'Pillars of Health',       body: 'Adjustments, exercise, ergonomics, sleep. We treat the whole picture — not just what brings you in the door.' },
      { icon: 'ClipboardList', title: 'Conditions Treated',  body: 'Low back pain, sciatica, disc herniations, tech neck, spinal stenosis, whiplash, and more.' },
    ],
  },

  testimonials: {
    headline: 'Patient Transformation',
    scheme:   4,
    items: [
      {
        context: '"I couldn\'t sit through a work meeting without shifting in pain. I\'d stopped hiking. I thought that was just my life now."',
        quote:   'Six weeks in, I did a 12km trail. No shooting pain. No numbness. I didn\'t think that was possible anymore.',
        author:  'Airdrie patient',
        role:    'L4–L5 disc herniation — 6 weeks of Cox FD treatment',
      },
    ],
  },

  cta: {
    headline: 'Ready to Meet Your Team?',
    body:     'Booking takes two minutes. No account needed, no referral required. Just a clear next step.',
    scheme:   4,
    cta:      { label: 'Book Your Visit at Summit Spine', href: 'https://summitspine.ca/booking/' },
  },
}

// ── MEET THE TEAM ────────────────────────────────────────────

export const teamPage: TeamPage = {
  meta: {
    slug:          'team',
    title:         'Meet the Team | Summit Spine Centre Airdrie',
    description:   'Meet the chiropractors and support team at Summit Spine Centre in Airdrie. Experienced, compassionate care from people who are genuinely invested in your recovery.',
    keywords:      ['Summit Spine Centre team', 'chiropractor Airdrie', 'Dr Karl Louder DC', 'Dr Ryan Lawrence DC', 'chiropractic team Airdrie'],
    published:     true,
    priority:      'P1',
    type:          'team',
    canonicalPath: '/team',
  },
  hero: {
    headline:    'The People Behind Your Care',
    subheadline: 'Experienced, focused, and genuinely invested in your recovery.',
    body:        'At Summit Spine Centre, care is personal. Our chiropractors take the time to understand your history, explain what\'s actually happening, and build a plan around the life you want to get back to. Our support team makes every visit as straightforward as possible — from booking to billing. Everyone here is working toward the same goal: getting you better.',
    scheme:      1,
    cta:         { label: 'Book Your Visit', href: 'https://summitspine.ca/booking/' },
  },
  team: {
    headline:    'Meet Your Team',
    subheadline: 'Two experienced chiropractors and a dedicated support team — here for every step of your care.',
    scheme:      2,
    members: [
      {
        id:          'dr-karl-louder',
        name:        'Dr. Karl Louder',
        role:        'Doctor of Chiropractic',
        credentials: 'DC',
        bio:         'Dr. Louder\'s primary focus is Cox Flexion-Distraction — a specialized, low-force technique that decompresses the spine without the twist and pop. If you\'ve been told surgery is your only option, he wants to see you first.',
        image:       { src: '', alt: 'Dr. Karl Louder, DC — Summit Spine Centre Airdrie', width: 480, height: 600 },
        specialties: ['Cox Flexion-Distraction', 'Disc Conditions', 'Sciatica', 'EN · FR · ES'],
      },
      {
        id:          'dr-ryan-lawrence',
        name:        'Dr. Ryan Lawrence',
        role:        'Doctor of Chiropractic',
        credentials: 'DC',
        bio:         'Dr. Lawrence brings a thorough, patient-centred approach to every visit. He takes the time to understand not just your symptoms, but your life — and builds a plan that gets you back to it.',
        image:       { src: '', alt: 'Dr. Ryan Lawrence, DC — Summit Spine Centre Airdrie', width: 480, height: 600 },
        specialties: ['Chiropractic Adjustments', 'Soft Tissue', 'Rehabilitation', 'EN'],
      },
      {
        id:          'team-member-3',
        name:        'Team Member',
        role:        'Chiropractic Assistant',
        credentials: '',
        bio:         'Placeholder bio — update when team information is available.',
        image:       { src: '', alt: 'Chiropractic Assistant — Summit Spine Centre Airdrie', width: 480, height: 600 },
        specialties: [],
      },
      {
        id:          'team-member-4',
        name:        'Team Member',
        role:        'Patient Care Coordinator',
        credentials: '',
        bio:         'Placeholder bio — update when team information is available.',
        image:       { src: '', alt: 'Patient Care Coordinator — Summit Spine Centre Airdrie', width: 480, height: 600 },
        specialties: [],
      },
      {
        id:          'team-member-5',
        name:        'Team Member',
        role:        'Front Desk & Billing',
        credentials: '',
        bio:         'Placeholder bio — update when team information is available.',
        image:       { src: '', alt: 'Front Desk & Billing — Summit Spine Centre Airdrie', width: 480, height: 600 },
        specialties: [],
      },
      {
        id:          'team-member-6',
        name:        'Team Member',
        role:        'Clinic Administrator',
        credentials: '',
        bio:         'Placeholder bio — update when team information is available.',
        image:       { src: '', alt: 'Clinic Administrator — Summit Spine Centre Airdrie', width: 480, height: 600 },
        specialties: [],
      },
    ],
  },
  testimonials: { scheme: 3, items: [] },
  faqs:         { scheme: 1, items: [] },
  cta: {
    headline: 'Ready to meet us in person?',
    body:     'Book your visit online in under two minutes. No referral needed, walk-ins welcome.',
    scheme:   4,
    cta:      { label: 'Book Your Visit', href: 'https://summitspine.ca/booking/' },
  },
}

// ── CONTACT ──────────────────────────────────────────────────

export const contactPage: ContactPage = {
  meta: {
    slug:          'contact',
    title:         'Contact Us | Summit Spine Centre Airdrie',
    description:   '',
    keywords:      ['contact Summit Spine Centre', 'chiropractic Airdrie contact'],
    published:     true,
    priority:      'P1',
    type:          'contact',
    canonicalPath: '/contact',
  },
  hero:    { headline: '', subheadline: '', scheme: 1, cta: { label: 'Book Your Visit', href: 'https://summitspine.ca/booking/' } },
  contact: CLINIC_INFO,
  cta:     { headline: '', scheme: 4, cta: { label: 'Book Your Visit', href: 'https://summitspine.ca/booking/' } },
  faqs:    { scheme: 1, items: [] },
}

// ── BOOK NOW ─────────────────────────────────────────────────

export const bookPage: BookPage = {
  meta: {
    slug:          'book',
    title:         'Book Your Visit | Summit Spine Centre Airdrie',
    description:   '',
    keywords:      ['book chiropractor Airdrie', 'walk-in chiropractic Airdrie'],
    published:     true,
    priority:      'P1',
    type:          'book',
    canonicalPath: '/book',
  },
  hero:            { headline: '', subheadline: '', scheme: 1, cta: { label: 'Book Your Visit', href: 'https://summitspine.ca/booking/' } },
  bookingEmbedUrl: 'https://summitspine.ca/booking/',
  contact:         CLINIC_INFO,
  faqs:            { scheme: 1, items: [] },
  cta:             { headline: '', scheme: 4, cta: { label: 'Book Your Visit', href: 'https://summitspine.ca/booking/' } },
}

// ── SERVICES HUB ─────────────────────────────────────────────

export const servicesPage: ServicesHubPage = {
  meta: {
    slug:          'services',
    title:         'Chiropractic Services Airdrie | Summit Spine Centre',
    description:   '',
    keywords:      ['chiropractic services Airdrie', 'Cox flexion distraction Airdrie'],
    published:     true,
    priority:      'P1',
    type:          'service-hub',
    canonicalPath: '/services',
  },
  hero:             { headline: '', subheadline: '', scheme: 1, cta: { label: 'Book Your Visit', href: 'https://summitspine.ca/booking/' } },
  featuresList:     { headline: '', scheme: 1, items: [] },
  featureHighlight: { icon: '', title: '', body: '' },
  services:         { headline: '', scheme: 1, items: [] },
  testimonials:     { scheme: 1, items: [] },
  cta:              { headline: '', scheme: 4, cta: { label: 'Book Your Visit', href: 'https://summitspine.ca/booking/' } },
}

// ── SERVICE: COX FLEXION-DISTRACTION ─────────────────────────

export const coxPage: ServicePage = {
  meta: {
    slug:          'cox-flexion-distraction',
    title:         'Cox Flexion-Distraction Airdrie | Summit Spine Centre',
    description:   'Cox Flexion-Distraction therapy at Summit Spine Centre in Airdrie — gentle, non-surgical disc decompression for sciatica, herniated discs, and nerve pain. Book your assessment today.',
    keywords:      ['Cox flexion distraction Airdrie', 'disc decompression Airdrie', 'chiropractic disc treatment Airdrie', 'sciatica treatment Airdrie', 'gentle disc therapy Airdrie Alberta'],
    published:     true,
    priority:      'P1',
    type:          'service',
    canonicalPath: '/services/cox-flexion-distraction',
  },
  hero: {
    headline:    'Cox Flexion-Distraction Therapy in Airdrie',
    subheadline: 'Gentle, hands-on disc decompression — no cracking, no twisting, no guessing. Just targeted relief for disc pain, sciatica, and nerve compression.',
    scheme:      1,
    cta:         { label: 'Book Your Assessment', href: 'https://summitspine.ca/booking/' },
  },
  featureHighlight: {
    title: 'A Different Kind of Relief',
    body:  'If you\'ve searched for help with disc pain and come away feeling like surgery or painkillers are your only options — you\'re not out of options. You just haven\'t tried this one yet. Cox Flexion-Distraction is a specialized chiropractic technique designed to gently take pressure off compressed discs and irritated nerves. It\'s slow, rhythmic, and highly controlled — no forceful cracking, no high-velocity twisting. Just a trained clinician, a specialized table, and a clear plan to help you get back to moving and feeling like yourself again.',
  },
  featuresList: {
    headline:    'Safe, Specialized Treatment for Disc Pain in Airdrie',
    subheadline: 'At Summit Spine Centre, we don\'t apply Cox Flexion-Distraction as a one-size-fits-all solution. Every patient gets a thorough assessment first — because understanding what\'s causing your pain is what makes the treatment actually work.',
    scheme:      1,
    items: [
      { icon: 'ClipboardList', title: 'Comprehensive Assessment',          body: 'We start by understanding your symptoms, your history, and how your problem is affecting your day-to-day life. We\'ll assess how you move, test your reflexes, check your strength, and perform the orthopedic tests needed to build a clear picture.' },
      { icon: 'Activity',      title: 'Cox Flexion-Distraction',           body: 'Gentle, targeted disc decompression performed on a specialized table. Designed to reduce nerve irritation and restore movement in the spine without forceful manipulation. Research shows it can reduce intradiscal pressure by up to 71%.' },
      { icon: 'HandHeart',     title: 'Chiropractic Adjustments',          body: 'When appropriate, targeted adjustments to support joint mobility and spinal function alongside the decompression work.' },
      { icon: 'Heart',         title: 'Soft Tissue Therapy',               body: 'Hands-on work targeting tight muscles, trigger points, and fascia that may be contributing to your symptoms or slowing your recovery.' },
      { icon: 'Dumbbell',      title: 'Personalized Exercise & Stretching', body: 'We\'ll give you a home routine that supports what we\'re doing in the clinic — not a generic handout, but exercises chosen specifically for your condition and your body.' },
      { icon: 'Armchair',      title: 'Lifestyle Modifications',           body: 'Practical, real-world guidance on posture, movement habits, ergonomics, and activity modifications that help you heal faster and reduce the chance of flare-ups.' },
    ],
  },
  benefits: {
    headline: 'Why Choose Summit Spine Centre for Cox Flexion-Distraction in Airdrie',
    scheme:   4,
    items: [
      { icon: 'Award',         title: 'Specialized Cox Technic Training', body: 'Not every chiropractor is trained in Cox Flexion-Distraction. Our team has dedicated training in this technique and uses it as part of a structured, evidence-informed approach to disc care.' },
      { icon: 'Stethoscope',   title: 'We Take the Time to Understand',   body: 'We don\'t rush assessments. Before we touch the table, we make sure we understand what\'s actually causing your symptoms — because the wrong treatment for the right symptom is still the wrong treatment.' },
      { icon: 'ClipboardList', title: 'A Clear Plan from Day One',        body: 'You\'ll leave your first visit knowing what we found, what we think is going on, and what the plan is to fix it. No mystery, no vague timelines.' },
      { icon: 'MapPin',        title: 'Rooted in Airdrie',                body: 'Summit Spine Centre has been serving the Airdrie community for over 35 years. We\'re not a franchise — we\'re your neighbours, and we care about the outcomes we deliver.' },
    ],
  },
  howItWorks: {
    headline: 'What Happens During a Cox Flexion-Distraction Session?',
    scheme:   1,
    steps: [
      { step: 1, icon: 'ClipboardList', title: 'Thorough Assessment',        body: 'Before anything else, we take the time to understand your symptoms, history, and goals. Movement analysis, reflex and strength testing, and orthopedic exam build the full clinical picture.' },
      { step: 2, icon: 'Activity',      title: 'Gentle Table Positioning',   body: 'You\'ll lie face-down on a specialized segmented table. Your chiropractor locates the affected spinal segment with precision before beginning.' },
      { step: 3, icon: 'Heart',         title: 'Flexion-Distraction Motion', body: 'Using slow, rhythmic, hands-on movements, the spine is gently flexed and distracted — creating space, reducing intradiscal pressure, and allowing irritated nerves to decompress.' },
      { step: 4, icon: 'HandHeart',     title: 'Supportive Care',            body: 'Adjustments, soft tissue work, or other manual techniques may be added based on your response and presentation that day.' },
      { step: 5, icon: 'Dumbbell',      title: 'Your Home Plan',             body: 'You\'ll leave with exercises, stretches, and lifestyle guidance chosen specifically for your condition — so the progress continues between visits.' },
    ],
  },
  testimonials: { scheme: 4, items: [] },
  faqs: {
    scheme: 1,
    items: [
      { question: 'What is Cox Flexion-Distraction therapy?',                           answer: 'Cox Flexion-Distraction is a specialized chiropractic technique that gently stretches and mobilizes the spine to reduce pressure on compressed or herniated discs and irritated nerves. It uses a segmented treatment table and slow, controlled movements — no cracking or twisting required.' },
      { question: 'Is Cox Flexion-Distraction the same as spinal decompression?',       answer: 'They\'re similar in goal but different in approach. Cox Flexion-Distraction is a hands-on, chiropractor-applied technique using a specialized table. Mechanical decompression (like traction machines) is more automated. Cox Technic allows the clinician to make real-time adjustments based on your response — which is one of the reasons we prefer it for disc cases.' },
      { question: 'Does Cox Flexion-Distraction hurt?',                                 answer: 'Most people are surprised by how comfortable it is. The technique is low-force and rhythmic by design. Some mild soreness is normal after the first few sessions as your body responds to treatment, but the treatment itself should never be painful. We always work within your comfort level.' },
      { question: 'How long does it take to see results with Cox Flexion-Distraction?', answer: 'Results vary depending on the severity of your condition and how long you\'ve been dealing with symptoms. Many people notice improvement within a few visits. A full course of care for disc-related conditions often runs 4–8 weeks, though some people recover faster and some require more time. We\'ll give you an honest timeline after your assessment.' },
      { question: 'Can Cox Flexion-Distraction help with a herniated disc?',             answer: 'Yes. Disc herniations are one of the primary conditions Cox Flexion-Distraction was designed for. By reducing intradiscal pressure and creating space around the affected nerve, the technique helps relieve the inflammation and pain associated with a herniated or bulging disc — often without surgery.' },
      { question: 'Can a chiropractor help with sciatica using this technique?',         answer: 'Absolutely. Sciatica caused by a disc herniation, stenosis, or other spinal compression often responds very well to Cox Flexion-Distraction. The technique directly targets the source of nerve irritation rather than just managing symptoms.' },
      { question: 'Is Cox Flexion-Distraction safe?',                                   answer: 'Yes. Cox Flexion-Distraction is one of the most researched and widely used techniques in chiropractic care for disc conditions. It\'s specifically designed to be gentle and low-force, making it appropriate for a wide range of patients — including seniors, post-surgical patients, and those with significant degeneration.' },
      { question: 'Who is a good candidate for Cox Flexion-Distraction?',                answer: 'Anyone dealing with disc-related back or neck pain, sciatica, nerve compression, or spinal stenosis may benefit from this technique. It\'s particularly well-suited for people who want a non-surgical option or who have been told they can\'t tolerate traditional chiropractic adjustments. The best way to know is to book an assessment.' },
      { question: 'How many sessions will I need?',                                      answer: 'That depends on your diagnosis, the severity of your symptoms, and how your body responds. After your first assessment, we\'ll give you a clear picture of what to expect. Most disc conditions require a series of visits — we\'ll check in regularly and adjust the plan based on how you\'re progressing.' },
      { question: 'Is Cox Flexion-Distraction covered by insurance in Alberta?',         answer: 'Chiropractic care in Alberta is not covered by Alberta Health Care (AHCIP), but many extended health benefit plans do cover chiropractic services. We recommend calling your provider to confirm your chiropractic benefits before your first visit.' },
      { question: 'Do I need a referral to see a chiropractor in Airdrie?',              answer: 'No referral is needed. You can book directly with Summit Spine Centre. If imaging or a specialist is required, we\'ll guide you through that process.' },
      { question: 'What should I expect at my first visit?',                             answer: 'Your first appointment will focus on understanding you — not just your pain, but your history, your lifestyle, and your goals. We\'ll do a thorough assessment including movement testing, orthopedic and neurological tests, and we\'ll discuss your imaging if you have any. If Cox Flexion-Distraction is the right fit, we may begin a gentle initial session. Either way, you\'ll leave with a clear plan.' },
    ],
  },
  cta: {
    headline: 'Don\'t Let Disc Pain Run Your Life. Book Today.',
    body:     'If you\'ve been dealing with back pain, leg pain, or nerve symptoms that just won\'t quit — there\'s a good chance Cox Flexion-Distraction can help. Let\'s figure out what\'s going on and build a plan to get you back to the things that matter.',
    scheme:   4,
    cta:      { label: 'Book Your Assessment', href: 'https://summitspine.ca/booking/' },
  },
}

// ── SERVICE: CHIROPRACTIC ADJUSTMENTS ────────────────────────

export const chiropracticPage: ServicePage = {
  meta: {
    slug:          'chiropractic-adjustments',
    title:         'Chiropractic Adjustments Airdrie | Summit Spine Centre',
    description:   'Targeted chiropractic adjustments in Airdrie, Alberta — addressing the root cause of back pain, neck pain, headaches, and more. No referral needed. Book your assessment today.',
    keywords:      ['chiropractic adjustments Airdrie', 'chiropractor walk-in Airdrie', 'spinal manipulation Airdrie', 'back pain chiropractor Airdrie', 'neck pain chiropractor Airdrie'],
    published:     true,
    priority:      'P2',
    type:          'service',
    canonicalPath: '/services/chiropractic-adjustments',
  },
  hero: {
    headline:    'Chiropractic Adjustments in Airdrie',
    subheadline: 'Targeted, hands-on care that addresses the root cause of your pain — not just the symptoms.',
    scheme:      1,
    cta:         { label: 'Book Your Visit', href: 'https://summitspine.ca/booking/' },
  },
  featureHighlight: {
    title: 'Sound Familiar?',
    body:  'You wake up stiff. You roll out of bed carefully — not like you used to. Maybe it\'s your neck. Maybe it\'s your lower back. Maybe it\'s both. You\'ve tried stretching. You\'ve Googled it. You\'ve taken the ibuprofen. And it helps — for a while. But the pain keeps coming back, and somewhere along the way you started thinking, "Maybe this is just how it is now." It doesn\'t have to be. Most of the people we see at Summit Spine Centre in Airdrie felt exactly the same way before their first visit. A chiropractic adjustment isn\'t about cracking your back. It\'s about restoring the way your spine moves — so your body can do what it\'s designed to do.',
  },
  featuresList: {
    headline:    'What Conditions Do Chiropractic Adjustments Treat?',
    subheadline: 'Chiropractic adjustments are one of the most researched forms of conservative care for musculoskeletal pain. They are commonly used to treat:',
    scheme:      1,
    items: [
      { icon: 'Activity',   title: 'Low Back Pain',                   body: 'One of the leading causes of disability worldwide — and one of the most responsive conditions to chiropractic care.' },
      { icon: 'HandHeart',  title: 'Neck Pain',                       body: 'Including pain from prolonged desk work, poor posture, or injury. Adjustments restore motion and reduce tension in the cervical spine.' },
      { icon: 'Zap',        title: 'Headaches & Tension Headaches',   body: 'Often rooted in restriction and tension in the upper cervical spine. Adjustments to this region can meaningfully reduce headache frequency and intensity.' },
      { icon: 'Heart',      title: 'Sciatica & Nerve Pain',           body: 'Adjustments can relieve pressure on irritated nerves running into the legs, complementing our Cox Flexion-Distraction care for disc conditions.' },
      { icon: 'Shield',     title: 'Hip & Pelvic Pain',               body: 'Imbalances in the pelvis often contribute to pain above and below. Correcting these imbalances addresses the root cause rather than chasing referred pain.' },
      { icon: 'TrendingUp', title: 'Joint Stiffness & Reduced Mobility', body: 'Especially common in desk workers, tradespeople, and aging adults. Restoring motion to restricted joints reduces compensatory muscle tension and pain.' },
    ],
  },
  benefits: {
    headline: 'Why Airdrie Chooses Summit Spine Centre',
    scheme:   4,
    items: [
      { icon: 'Award',         title: '35+ Years Serving Airdrie',         body: 'Decades of experience in spinal care built right here in our community — this is all we do, and we do it well.' },
      { icon: 'Stethoscope',   title: 'Thorough, Unhurried Assessments',   body: 'We don\'t guess. We evaluate. You\'ll receive a complete physical and orthopaedic exam before any treatment begins — your safety and outcomes depend on it.' },
      { icon: 'ClipboardList', title: 'Clear Communication',               body: 'You\'ll always know what\'s happening and why. We explain our findings in plain language — no jargon, no confusion.' },
      { icon: 'Activity',      title: 'Cox Flexion-Distraction Certified', body: 'A rare, highly specialized technique not widely available in Alberta — giving our patients access to disc decompression care that isn\'t on offer at most clinics.' },
      { icon: 'MapPin',        title: 'Local Roots',                       body: 'We\'re part of this community, and we treat our patients like it. You\'re not a chart number here.' },
    ],
  },
  howItWorks: {
    headline: 'Your First Visit — What to Expect',
    scheme:   1,
    steps: [
      { step: 1, icon: 'ClipboardList', title: 'Your Assessment',          body: 'We take the time to understand you. What\'s hurting, when it started, what makes it better or worse, and what you\'re hoping to get back to. We\'ll perform a thorough physical and orthopaedic exam and, if needed, refer for imaging.' },
      { step: 2, icon: 'Stethoscope',   title: 'Understanding Your Problem', body: 'We\'ll explain what we found in plain language — no jargon. You\'ll know what\'s going on, why it\'s happening, and what we think will help. You\'ll leave with clarity, not confusion.' },
      { step: 3, icon: 'CheckCircle',   title: 'A Plan That Makes Sense',   body: 'We build a care plan around your life — your schedule, your goals, and your budget. We don\'t believe in open-ended treatment. We believe in getting you better and keeping you there.' },
      { step: 4, icon: 'HandHeart',     title: 'Hands-On Treatment',        body: 'Your adjustment will be tailored to your spine specifically. We use the technique that\'s most appropriate for your condition — never a one-size-fits-all approach.' },
      { step: 5, icon: 'Dumbbell',      title: 'Support Between Visits',    body: 'Adjustments work best when paired with the right home exercises, movement habits, and lifestyle adjustments. We\'ll give you tools to stay ahead of your pain between appointments.' },
    ],
  },
  testimonials: { scheme: 4, items: [] },
  faqs: {
    scheme: 1,
    items: [
      { question: 'Is chiropractic care safe?',                                              answer: 'Yes. Chiropractic adjustments are one of the safest forms of treatment available for musculoskeletal pain. Serious complications are extremely rare. At Summit Spine Centre, every patient is thoroughly assessed before any treatment begins — your safety is the starting point, not an afterthought.' },
      { question: 'Does a chiropractic adjustment hurt?',                                    answer: 'Most people find adjustments to be relieving rather than painful. Some experience mild soreness afterward, similar to how you feel after a good workout. This typically resolves within 24 hours. If you\'re nervous, tell us — we\'ll walk you through everything before we begin.' },
      { question: 'How many adjustments will I need?',                                       answer: 'This depends entirely on what\'s causing your pain, how long it\'s been going on, and how your body responds to care. Some people feel significantly better after a handful of visits. Others with more complex or longstanding conditions require longer care. We\'ll give you an honest estimate at your first appointment — not a vague, open-ended treatment plan.' },
      { question: 'Is chiropractic care covered by insurance in Alberta?',                   answer: 'Most extended health benefit plans in Alberta include coverage for chiropractic care. We recommend checking your specific plan. We do not direct bill, but we\'ll provide you with everything you need to submit your own claim quickly and easily.' },
      { question: 'Can I see a chiropractor without a referral?',                            answer: 'Absolutely. In Alberta, chiropractors are primary care providers. You can book directly — no referral from a doctor is required.' },
      { question: 'What\'s the difference between a chiropractor and a physiotherapist?',    answer: 'Both professions treat musculoskeletal conditions, but the approach differs. Chiropractors specialize in the diagnosis and hands-on treatment of spinal and joint disorders, with a focus on restoring alignment and nervous system function. At Summit Spine Centre, our emphasis is specifically on the spine — it\'s our area of deep expertise.' },
      { question: 'Can chiropractic care help if I\'ve had surgery?',                        answer: 'In many cases, yes — though it depends on the type of surgery and how long ago it was. We\'ll review your history carefully and won\'t proceed with treatment unless we\'re confident it\'s appropriate for your situation.' },
      { question: 'Am I too old for chiropractic adjustments?',                              answer: 'Not at all. We regularly treat seniors and older adults. Techniques are adapted based on age, bone density, and comfort level. Gentle approaches — including low-force options — are available for patients who need them.' },
      { question: 'What if I\'m nervous about the cracking sound?',                          answer: 'That\'s completely understandable. The sound isn\'t required for an effective adjustment, and there are techniques that produce little to no noise. Tell us your concerns and we\'ll adjust our approach accordingly.' },
      { question: 'How is Summit Spine Centre different from other chiropractors in Airdrie?', answer: 'We specialize. Spinal health is the only thing we do, which means the depth of experience and the calibre of assessment you receive here is focused entirely on your spine and nervous system. We also offer Cox Flexion-Distraction — a specialized decompression technique not widely available in the area — giving our patients access to care that isn\'t on offer at most clinics.' },
    ],
  },
  cta: {
    headline: 'Your Back Has Been Patient Long Enough. Book Today.',
    body:     'Whether your pain is new or something you\'ve been managing for years — you deserve to know what\'s causing it and what can actually help. Book your assessment at Summit Spine Centre and take the first step toward moving freely again.',
    scheme:   4,
    cta:      { label: 'Book Your Visit', href: 'https://summitspine.ca/booking/' },
  },
}

// ── SERVICE: SUMMITS OF RECOVERY (HUB) ───────────────────────

export const summitsPage: ServicePage = {
  meta: {
    slug:          'summits-of-recovery',
    title:         'Summits of Recovery Airdrie | Summit Spine Centre',
    description:   '',
    keywords:      ['summits of recovery', 'chiropractic wellness Airdrie'],
    published:     true,
    priority:      'P2',
    type:          'service',
    canonicalPath: '/services/summits-of-recovery',
  },
  hero:         { headline: '', subheadline: '', scheme: 1, cta: { label: 'Book Your Visit', href: 'https://summitspine.ca/booking/' } },
  featuresList: { headline: '', scheme: 1, items: [] },
  howItWorks:   { headline: '', steps: [], scheme: 1 },
  cta:          { headline: '', scheme: 4, cta: { label: 'Book Your Visit', href: 'https://summitspine.ca/booking/' } },
}

// ── PILLAR: PROFESSIONAL ADJUSTMENTS ─────────────────────────

export const pillarAdjustmentsPage: PillarPage = {
  meta: {
    slug:          'professional-adjustments',
    title:         'Professional Adjustments Airdrie | Summit Spine Centre',
    description:   '',
    keywords:      ['professional chiropractic adjustments Airdrie'],
    published:     true,
    priority:      'P2',
    type:          'pillar',
    canonicalPath: '/services/summits-of-recovery/professional-adjustments',
  },
  pillarIndex:    1,
  siblingPillars: ['targeted-exercise', 'lifestyle-wisdom', 'ergonomic-support'],
  hero:           { headline: '', subheadline: '', scheme: 1, cta: { label: 'Book Your Visit', href: 'https://summitspine.ca/booking/' } },
  benefits:       { headline: '', scheme: 4, items: [] },
  faqs:           { scheme: 1, items: [] },
  cta:            { headline: '', scheme: 4, cta: { label: 'Book Your Visit', href: 'https://summitspine.ca/booking/' } },
}

// ── PILLAR: TARGETED EXERCISE ─────────────────────────────────

export const pillarExercisePage: PillarPage = {
  meta: {
    slug:          'targeted-exercise',
    title:         'Targeted Exercise Airdrie | Summit Spine Centre',
    description:   '',
    keywords:      ['chiropractic exercise Airdrie', 'spine rehab Airdrie'],
    published:     true,
    priority:      'P2',
    type:          'pillar',
    canonicalPath: '/services/summits-of-recovery/targeted-exercise',
  },
  pillarIndex:    2,
  siblingPillars: ['professional-adjustments', 'lifestyle-wisdom', 'ergonomic-support'],
  hero:           { headline: '', subheadline: '', scheme: 1, cta: { label: 'Book Your Visit', href: 'https://summitspine.ca/booking/' } },
  benefits:       { headline: '', scheme: 4, items: [] },
  testimonials:   { scheme: 4, items: [] },
  faqs:           { scheme: 1, items: [] },
  cta:            { headline: '', scheme: 4, cta: { label: 'Book Your Visit', href: 'https://summitspine.ca/booking/' } },
}

// ── PILLAR: LIFESTYLE WISDOM ──────────────────────────────────

export const pillarLifestylePage: PillarPage = {
  meta: {
    slug:          'lifestyle-wisdom',
    title:         'Home Exercises, Lifestyle & Ergonomics for Spine Health Airdrie | Summit Spine Centre',
    description:   'Practical home exercises, lifestyle habits, and ergonomics guidance from Summit Spine Centre in Airdrie — the strategies that keep you out of pain between visits.',
    keywords:      ['spine health lifestyle Airdrie', 'posture wellness Airdrie', 'home exercises back pain Airdrie', 'ergonomics spine health', 'chiropractic lifestyle advice Airdrie'],
    published:     true,
    priority:      'P2',
    type:          'pillar',
    canonicalPath: '/services/summits-of-recovery/lifestyle-wisdom',
  },
  pillarIndex:    3,
  siblingPillars: ['professional-adjustments', 'targeted-exercise', 'ergonomic-support'],
  hero: {
    headline:    'You\'re Doing Everything Right — So Why Does Your Back Still Hurt?',
    subheadline: 'The missing piece usually isn\'t more treatment. It\'s what happens between appointments — at your desk, in your bed, and in your daily routine. Here\'s what actually works.',
    scheme:      1,
    cta:         { label: 'Book a Free Consultation', href: 'https://summitspine.ca/booking/' },
  },
  featureHighlight: {
    title: 'Most People Treat Their Pain. Few People Change What\'s Causing It.',
    body:  'You\'ve stretched. You\'ve rested. Maybe you\'ve even had treatment before. And yet — a few weeks later, it comes back. The low back ache. The stiff neck in the morning. The leg that won\'t quite cooperate. Here\'s what we\'ve learned over 35 years of spine care in Airdrie: treatment gets you out of pain. Habits keep you there. The desk you sit at for eight hours, the way you pick up your kids, how you sleep, whether you\'re moving enough — these things are shaping your spine every single day, long after you leave our clinic. This page gives you the same guidance we give our patients.',
  },
  featuresList: {
    headline:    'The 20 Minutes That Can Change Everything',
    subheadline: 'These are the exercises we prescribe most often at Summit Spine Centre. They\'re gentle, evidence-informed, and effective for most people dealing with low back pain, sciatica, or general spinal stiffness.',
    scheme:      1,
    items: [
      { icon: 'Heart',      title: 'Knee-to-Chest Stretch',  body: 'Lie on your back and pull one knee gently toward your chest. Hold 20–30 seconds per side. Simple, effective — and something you can do before you even get out of bed. Releases low back tension and opens compressed lumbar joints.' },
      { icon: 'Activity',   title: 'Piriformis Stretch',     body: 'Lie on your back, cross one ankle over the opposite knee, and gently pull the uncrossed leg toward your chest. Hold 30 seconds per side. Particularly important if you\'re dealing with sciatic nerve irritation — the piriformis sits directly over the nerve.' },
      { icon: 'Leaf',       title: 'Hip Flexor Stretch',     body: 'Kneel on one knee, step the other foot forward, and push your hips gently forward until you feel a pull at the front of the kneeling hip. Hold 30 seconds per side. Non-negotiable for people who sit for work — tight hip flexors tilt your pelvis forward and compress your lumbar spine all day long.' },
      { icon: 'Armchair',   title: 'Child\'s Pose',          body: 'From kneeling, sit your hips back and reach your arms forward. Hold 30–60 seconds. One of the most effective low-force decompression stretches you can do without any equipment.' },
      { icon: 'Shield',     title: 'Dead Bug',               body: 'Lie on your back, arms at the ceiling, knees at 90°. Slowly lower one arm and the opposite leg without letting your low back lift off the floor. 2–3 sets of 8–10. This trains the deep stabilizers that protect your spine during movement.' },
      { icon: 'Dumbbell',   title: 'Bird Dog',               body: 'On hands and knees, extend one arm and the opposite leg simultaneously — back flat, no sagging. Hold 3–5 seconds, 2–3 sets of 8 per side. A foundational rehab exercise: it trains spinal stability in the exact position your spine needs during daily movement.' },
      { icon: 'TrendingUp', title: 'Glute Bridge',           body: 'Lie on your back, feet flat, knees bent. Drive through your heels and lift your hips to form a straight line from knees to shoulders. Hold 2–3 seconds at the top. 3 sets of 10–15. Weak glutes shift load to the lumbar spine — strengthening them directly reduces low back strain.' },
    ],
  },
  benefits: {
    headline:    'The Habits You Don\'t Notice Are Running the Show',
    subheadline: 'No stretch or adjustment can fully compensate for poor sleep position, a diet that drives inflammation, or a stress response that keeps your muscles locked up. These lifestyle factors have a bigger clinical impact than most people realize.',
    scheme:      4,
    items: [
      { icon: 'Clock',     title: 'Sleep Position Matters',         body: 'Side sleepers: place a pillow between your knees to align your hips and lumbar spine. Back sleepers: a pillow under your knees reduces joint compression. Stomach sleeping forces your neck into maximum rotation for hours — it\'s worth changing. Medium-firm mattress is the evidence-supported default for most people.' },
      { icon: 'Leaf',      title: 'Nutrition & Inflammation',       body: 'Disc degeneration, nerve irritation, and joint pain all have an inflammatory component. Diets high in processed foods and refined sugars amplify pain sensitivity and slow healing. Spinal discs are largely water-based — chronic mild dehydration contributes to disc degeneration over time. One more glass of water per day, consistently, makes a difference.' },
      { icon: 'Heart',     title: 'Stress & Your Nervous System',   body: 'Chronic stress keeps your nervous system in high alert — increasing muscle tension in the neck, upper back, and jaw, and amplifying pain signals. Diaphragmatic breathing (five minutes daily), consistent sleep and wake times, and reducing screen time before bed are neurological interventions with real clinical relevance.' },
      { icon: 'Activity',  title: 'Move More — Not Perfectly',      body: 'The spine is designed to move. The goal isn\'t to find the perfect posture and hold it — it\'s to cycle through many postures throughout the day. If you sit for work, set a timer every 30–45 minutes to stand, walk, or stretch briefly. This single habit can meaningfully reduce cumulative spinal load over a workday.' },
    ],
  },
  howItWorks: {
    headline:    'Your Environment Is Either Working For Your Spine or Against It',
    subheadline: 'Small misalignments — a monitor too low, a seat without lumbar support, a phone at chin level — add up to thousands of hours of accumulated strain over a year. Most high-leverage ergonomic changes cost nothing.',
    scheme:      1,
    steps: [
      { step: 1, icon: 'Shield',   title: 'Your Desk Setup',   body: 'Monitor top at or just below eye level. Feet flat on the floor, hips at or slightly above knee level. Lumbar support is non-negotiable. Laptop users: an external monitor or stand with a separate keyboard is the single highest-impact change you can make — the default laptop position is one of the most compromised setups in modern work life.' },
      { step: 2, icon: 'Zap',      title: 'Tech Neck',         body: 'At 45–60 degrees of forward head tilt, your neck is managing 40–60 lbs of effective load. For hours at a time. The fix: raise the phone to eye level rather than dropping your chin. If you\'re already experiencing neck pain, headaches, or upper back tension and spending significant time on a screen — this is almost certainly part of the picture.' },
      { step: 3, icon: 'Dumbbell', title: 'Lifting Mechanics', body: 'Load your legs, not your back. Keep the object close to your body. Turn with your feet rather than twisting your spine under load. Take your time — the majority of acute disc injuries happen when people are moving quickly and not thinking about their mechanics. This applies whether you\'re lifting materials on a job site or lifting a child out of a crib.' },
      { step: 4, icon: 'Armchair', title: 'Your Vehicle',      body: 'Sitting too far from the pedals forces your legs to extend and flattens the lumbar curve. A slight seat recline of 100–110 degrees is typically more comfortable and less compressive than fully upright. Add a small lumbar roll if your seat lacks support. Adjust your headrest to contact the back of your head — not your neck. On any drive over 45 minutes, stop and walk for two to three minutes.' },
    ],
  },
  faqs: {
    scheme: 1,
    items: [
      { question: 'How do I know which exercises are right for my specific problem?',      answer: 'The honest answer is that it depends on what\'s actually causing your pain. The same exercise that helps one type of disc problem can aggravate another. Book an assessment and we\'ll build a program for your diagnosis — not a generic spine condition.' },
      { question: 'I\'ve tried stretching before and it didn\'t help. Why would this be different?', answer: 'Because the right stretch for the wrong problem won\'t work — and can make things worse. Direction matters, timing matters, and sequencing matters. If previous stretching hasn\'t moved the needle, it\'s usually a signal that the underlying cause hasn\'t been properly identified. That\'s what we do first.' },
      { question: 'Is sitting or standing better for my spine?',                           answer: 'Neither — in isolation. The research consistently shows that prolonged static posture in either position increases spinal load and pain risk. The goal is regular, low-stakes movement throughout the day. A sit-stand desk is useful, but the most important thing is simply moving more frequently.' },
      { question: 'How quickly will I notice a difference from these changes?',            answer: 'Some patients notice meaningful improvement within a week of correcting their workstation setup or sleep position. Others take longer, especially if there\'s underlying dysfunction that needs to be addressed clinically. What\'s consistent: the people who combine good treatment with better daily habits recover faster and stay recovered longer.' },
      { question: 'Do I need expensive ergonomic equipment?',                              answer: 'Rarely. A folded towel as lumbar support, a stack of books under a monitor, a pillow between your knees — these cost nothing and can have an immediate impact. We\'ll always recommend the most cost-effective solution first.' },
      { question: 'Can a chiropractor help if I\'ve already been dealing with this for years?', answer: 'Yes — and often more effectively than people expect. Chronic pain patterns respond well to the right combination of manual therapy, targeted exercise, and lifestyle change. Long-standing problems take longer to resolve than acute ones, but they do resolve. Come in and let\'s look at the full picture.' },
    ],
  },
  cta: {
    headline: 'The Information Is Here. The Next Step Is Yours.',
    body:     'Everything on this page works — but it works best when it\'s built around a clear understanding of what\'s actually happening in your spine. We\'re in Airdrie. We offer same-week appointments. No referral needed. Come in, let us take a look, and leave with a plan — not just information.',
    scheme:   4,
    cta:         { label: 'Book Your Assessment', href: 'https://summitspine.ca/booking/' },
    secondaryCta: { label: 'Call Us at 403-948-4440', href: 'tel:+14039484440', variant: 'ghost' },
  },
}

// ── PILLAR: ERGONOMIC SUPPORT ─────────────────────────────────

export const pillarErgonomicsPage: PillarPage = {
  meta: {
    slug:          'ergonomic-support',
    title:         'Ergonomic Support Airdrie | Summit Spine Centre',
    description:   '',
    keywords:      ['ergonomics Airdrie', 'workplace posture Airdrie'],
    published:     true,
    priority:      'P2',
    type:          'pillar',
    canonicalPath: '/services/summits-of-recovery/ergonomic-support',
  },
  pillarIndex:    4,
  siblingPillars: ['professional-adjustments', 'targeted-exercise', 'lifestyle-wisdom'],
  hero:           { headline: '', subheadline: '', scheme: 1, cta: { label: 'Book Your Visit', href: 'https://summitspine.ca/booking/' } },
  featuresList:   { headline: '', scheme: 1, items: [] },
  benefits:       { headline: '', scheme: 4, items: [] },
  howItWorks:     { headline: '', steps: [], scheme: 1 },
  testimonials:   { scheme: 4, items: [] },
  cta:            { headline: '', scheme: 4, cta: { label: 'Book Your Visit', href: 'https://summitspine.ca/booking/' } },
}

// ── CONDITIONS HUB ───────────────────────────────────────────

export const conditionsPage: ConditionsHubPage = {
  meta: {
    slug:          'conditions',
    title:         'Conditions Treated Airdrie | Summit Spine Centre',
    description:   '',
    keywords:      ['conditions treated Airdrie chiropractor', 'back pain Airdrie'],
    published:     true,
    priority:      'P1',
    type:          'condition-hub',
    canonicalPath: '/conditions',
  },
  hero:             { headline: '', subheadline: '', scheme: 1, cta: { label: 'Book Your Visit', href: 'https://summitspine.ca/booking/' } },
  conditionsList:   { headline: '', scheme: 1, items: [] },
  educationFeature: { title: '', body: '' },
  faqs:             { scheme: 1, items: [] },
  cta:              { headline: '', scheme: 4, cta: { label: 'Book Your Visit', href: 'https://summitspine.ca/booking/' } },
}

// ── CONDITION PAGES ───────────────────────────────────────────
// Title format: "[Condition] Airdrie | Summit Spine Centre"

const conditionDefaults = {
  hero:         { headline: '', subheadline: '', scheme: 1 as const, cta: { label: 'Book Your Visit', href: 'https://summitspine.ca/booking/' } },
  treatments:   { headline: '', scheme: 1 as const, items: [] },
  benefits:     { headline: '', scheme: 4 as const, items: [] },
  howItWorks:   { headline: '', steps: [], scheme: 1 as const },
  testimonials: { scheme: 4 as const, items: [] },
  faqs:         { scheme: 1 as const, items: [] },
  cta:          { headline: '', scheme: 4 as const, cta: { label: 'Book Your Visit', href: 'https://summitspine.ca/booking/' } },
}

export const conditionPages: Record<string, ConditionPage> = {
  'low-back-pain': {
    meta: { slug: 'low-back-pain', title: 'Low Back Pain Airdrie | Summit Spine Centre', description: '', keywords: ['low back pain Airdrie', 'back pain chiropractor Airdrie'], published: true, priority: 'P1', type: 'condition', canonicalPath: '/conditions/low-back-pain' },
    overview: '', relatedConditions: ['sciatica', 'disc-herniation'],
    structuredData: { conditionName: 'Low Back Pain', description: '', possibleTreatment: 'Chiropractic Care, Cox Flexion-Distraction' },
    ...conditionDefaults,
  },
  'sciatica': {
    meta: {
      slug:          'sciatica',
      title:         'Sciatica and Low Back Pain Relief Airdrie | Summit Spine Centre',
      description:   'Non-surgical chiropractic treatment for sciatica and nerve pain in Airdrie, Alberta. Understand your symptoms and get a clear plan to recover.',
      keywords:      [
        'sciatica Airdrie',
        'sciatica chiropractor Airdrie',
        'sciatica treatment Airdrie',
        'low back pain sciatica Airdrie',
        'sciatic nerve pain Airdrie',
      ],
      published:     true,
      priority:      'P1',
      type:          'condition',
      canonicalPath: '/conditions/sciatica',
    },

    hero: {
      headline:    'Sciatica and Low Back Pain Relief in Airdrie',
      subheadline: 'Non-surgical treatment for sciatica, nerve pain, or any pain radiating from the low back.',
      cta:         { label: 'Book Your Visit', href: 'https://summitspine.ca/booking/' },
      scheme:      1,
    },

    overview:
      'Sciatica can show up when you least expect it — whether you\'re working in the yard, finishing a project at work, or putting the kids to bed. ' +
      'Sciatic nerves are the biggest nerves in your body. They control the muscles that help you walk, jump, and moonwalk. ' +
      'Sciatica is what happens when these nerves get compressed or irritated from things like bulging discs, joint changes, and tight muscles. ' +
      'It can be a literal "pain in the butt," sometimes even causing numbness, burning, or tingling down the legs. ' +
      'If you\'re dealing with sciatica in Airdrie, you\'re not alone — it\'s something we help people with every day. ' +
      'We\'ll work with you to understand what\'s causing your symptoms and build a clear plan to help you get back to living life fully.',

    symptoms: [
      'Sharp or shooting pain in the low back that radiates down one leg',
      'Burning or tingling down the leg',
      'Numbness or tingling in the glutes, legs, or feet',
      'Numbness or reduced feeling in the leg or foot',
      'Pain that gets worse with sitting, bending, or coughing',
      'Pain that gets worse with prolonged standing',
      'Weakness in the leg or foot',
    ],

    causes: [
      'Disc Problems — a bulging or herniated disc can press on the nearby sciatic nerve',
      'Narrowed Spine (Spinal Stenosis) — reduced space around spinal nerves, especially with standing or walking',
      'Bone Spurs — small bony growths that take up space in the spine and irritate nearby nerves',
      'Slipped Vertebrae (Spondylolisthesis) — a spinal bone shifts out of place, compressing the nerve',
      'Muscle Tightness or Spasm (Piriformis Syndrome) — tight glute or hip muscles press directly on the sciatic nerve',
      'Injuries — falls, lifting incidents, or motor vehicle accidents that inflame structures around the nerve',
    ],

    treatments: {
      headline: 'Safe Treatment for Your Sciatica in Airdrie',
      scheme:   1,
      items: [
        {
          icon:  'ClipboardList',
          title: 'Comprehensive Exam',
          body:  'We start by understanding exactly what\'s causing your symptoms. Sciatica isn\'t the same from person to person — knowing the cause shapes the entire plan.',
        },
        {
          icon:  'Activity',
          title: 'Cox Flexion-Distraction',
          body:  'A gentle, low-force technique that directly decompresses the affected discs and reduces nerve irritation — no forceful twisting, cracking, or popping.',
        },
        {
          icon:  'HandHeart',
          title: 'Chiropractic Adjustments',
          body:  'Targeted adjustments to restore proper spinal movement and reduce pressure around the sciatic nerve.',
        },
        {
          icon:  'Dumbbell',
          title: 'Targeted Exercises',
          body:  'Home exercises and stretches focused on the glutes, hamstrings, and low back to support recovery and reduce recurrence.',
        },
        {
          icon:  'Heart',
          title: 'Lifestyle Modifications',
          body:  'Practical guidance on posture, daily movement, and habits that support long-term relief and help prevent flare-ups.',
        },
      ],
    },

    benefits: {
      headline: 'Why Choose Summit Spine Centre for Sciatica Treatment',
      scheme:   4,
      items: [
        {
          icon:  'Award',
          title: '35 Years Serving Airdrie',
          body:  'Decades of experience treating sciatica and spine conditions right here in our community.',
        },
        {
          icon:  'Stethoscope',
          title: 'Specialized Sciatica Care',
          body:  'We use evidence-based techniques like Cox Flexion-Distraction, designed specifically for nerve and disc conditions.',
        },
        {
          icon:  'Users',
          title: 'A Plan Built Around You',
          body:  'We take the time to understand your symptoms and create a clear, personalized recovery plan — not a one-size-fits-all approach.',
        },
      ],
    },

    testimonials: {
      scheme: 4,
      items:  [], // placeholder — sciatica-specific testimonial copy needed before publish
    },

    faqs: {
      scheme: 1,
      items: [
        { question: 'What causes sciatica?',                                   answer: 'Sciatica is nerve pain caused by irritation or compression of the sciatic nerve, often leading to lower back and leg pain. Common causes include disc problems, spinal stenosis, bone spurs, muscle tightness, and injuries.' },
        { question: 'How do I know if my pain is sciatica?',                   answer: 'Sciatica typically involves pain that travels from the low back or hip down one leg. If your symptoms follow that pattern, it may be related to the sciatic nerve being inflamed or compressed.' },
        { question: 'How long does it take sciatica to heal?',                 answer: 'Sciatica can last anywhere from a few days to several weeks. Recovery time depends on the cause and how it\'s managed. Most cases fully resolve within 4–6 weeks with proper care.' },
        { question: 'When should I see a chiropractor for sciatica?',          answer: 'If your pain is persistent, worsening, or affecting your daily life, get assessed. If you begin to develop numbness or weakness in your legs or feet, see someone quickly. At Summit Spine Centre in Airdrie, we can help you understand what\'s causing your problem and what to do next.' },
        { question: 'How do you relieve sciatica?',                            answer: 'Sciatica is usually relieved by taking pressure off the sciatic nerve and reducing inflammation. Many people benefit from chiropractic adjustments and decompression therapy. If conservative care isn\'t enough, injections, nerve ablations, or surgical options may be available.' },
        { question: 'Can sciatica go away on its own?',                        answer: 'Yes, sciatica can improve on its own. However, if symptoms persist or keep coming back, it\'s important to address the underlying cause so it doesn\'t get worse.' },
        { question: 'What makes sciatica worse?',                              answer: 'This depends on the cause. It is often worse with prolonged sitting, bending, or lifting. In other cases it can be worse with prolonged standing.' },
        { question: 'Is walking good for sciatica?',                           answer: 'For many people, gentle walking can help reduce stiffness and improve circulation. However, it depends on the cause — listen to your body and consult your chiropractor.' },
        { question: 'Can a chiropractor help sciatica caused by a disc herniation?', answer: 'Yes. At Summit Spine Centre we often use Cox Flexion-Distraction — a gentle, low-force technique that directly reduces pressure on the affected discs and nerves without forceful cracking or popping.' },
        { question: 'Can sciatica cause foot numbness?',                       answer: 'Yes. If the sciatic nerve is compressed or irritated enough it can cause foot numbness. In more serious cases it may also cause weakness such as "foot drop."' },
        { question: 'How can I treat sciatic nerve pain at home?',             answer: 'Ice and heat therapy can help. Gentle stretching of the glutes, hamstrings, and low back may reduce pain. Low-impact movement like walking or swimming may also help. Understanding the cause will guide what you should or shouldn\'t do.' },
        { question: 'How long does sciatic nerve pain last?',                  answer: 'Sciatic nerve pain can last anywhere from a few days to a few months, depending on the cause and how long recovery takes.' },
        { question: 'What tests can diagnose sciatica?',                       answer: 'Our chiropractors assess sciatica using movement analysis, reflex testing, strength testing, and orthopedic tests. If needed, we may refer for X-ray, MRI, or CT scan.' },
        { question: 'What are common sciatica treatments?',                    answer: 'At Summit Spine Centre, treatment depends on the cause. Common options include Cox Flexion-Distraction, chiropractic adjustments, soft tissue work, stretching, exercises, and lifestyle modifications.' },
        { question: 'Is sciatica preventable?',                                answer: 'Not all sciatica is preventable, but regular movement, exercise, eating well, and sufficient rest can lower your risk. Preventive chiropractic care can help keep your spine functioning well.' },
        { question: 'Can sciatic pain go down both legs?',                     answer: 'Yes. This can signal spinal cord compression or that both sciatic nerves are affected. If you have leg pain down both legs, have it assessed promptly.' },
        { question: 'When should I see a doctor for sciatica?',                answer: 'If your pain lasts longer than a week or is worsening, get it checked. If you notice numbness, weakness, or any trouble controlling your bowel or bladder, seek care quickly — these can be signs of a more urgent issue.' },
        { question: 'Is sciatica worse at night?',                             answer: 'It can be. Some people notice sciatic pain worsens at night, especially in certain positions or after a full day of activity. Adjusting sleep positions and addressing the underlying cause can help.' },
      ],
    },

    cta: {
      headline: 'Don\'t live with it — book today.',
      scheme:   4,
      cta:      { label: 'Book Your Visit', href: 'https://summitspine.ca/booking/' },
    },

    relatedConditions: ['low-back-pain', 'disc-herniation'],

    structuredData: {
      conditionName:     'Sciatica',
      description:       'Sciatica is nerve pain caused by irritation or compression of the sciatic nerve, often leading to lower back and leg pain that radiates down one leg.',
      possibleTreatment: 'Chiropractic Care, Cox Flexion-Distraction',
    },
  },
  'disc-herniation': {
    meta: { slug: 'disc-herniation', title: 'Disc Herniation & Bulges Airdrie | Summit Spine Centre', description: '', keywords: ['disc herniation Airdrie', 'bulging disc chiropractor Airdrie'], published: true, priority: 'P1', type: 'condition', canonicalPath: '/conditions/disc-herniation' },
    overview: '', relatedConditions: ['low-back-pain', 'sciatica'],
    structuredData: { conditionName: 'Disc Herniation', description: '', possibleTreatment: 'Cox Flexion-Distraction, Chiropractic Care' },
    ...conditionDefaults,
  },
  'neck-pain': {
    meta: { slug: 'neck-pain', title: 'Neck Pain Relief Airdrie | Summit Spine Centre', description: '', keywords: ['neck pain Airdrie', 'neck pain chiropractor Airdrie'], published: true, priority: 'P1', type: 'condition', canonicalPath: '/conditions/neck-pain' },
    overview: '', relatedConditions: ['tech-neck', 'headaches-migraines'],
    structuredData: { conditionName: 'Neck Pain', description: '', possibleTreatment: 'Chiropractic Care, Cox Flexion-Distraction' },
    ...conditionDefaults,
  },
  'back-pain': {
    meta: { slug: 'back-pain', title: 'Back Pain Relief Airdrie | Summit Spine Centre', description: '', keywords: ['back pain Airdrie', 'back pain chiropractor Airdrie'], published: true, priority: 'P1', type: 'condition', canonicalPath: '/conditions/back-pain' },
    overview: '', relatedConditions: ['low-back-pain', 'disc-herniation'],
    structuredData: { conditionName: 'Back Pain', description: '', possibleTreatment: 'Chiropractic Care, Cox Flexion-Distraction' },
    ...conditionDefaults,
  },
  'headaches-migraines': {
    meta: { slug: 'headaches-migraines', title: 'Headache & Migraine Relief Airdrie | Summit Spine Centre', description: '', keywords: ['headache chiropractor Airdrie', 'migraine relief Airdrie'], published: true, priority: 'P2', type: 'condition', canonicalPath: '/conditions/headaches-migraines' },
    overview: '', relatedConditions: ['neck-pain', 'tech-neck'],
    structuredData: { conditionName: 'Headache / Migraine', description: '', possibleTreatment: 'Chiropractic Care' },
    ...conditionDefaults,
  },
  'spinal-stenosis': {
    meta: { slug: 'spinal-stenosis', title: 'Spinal Stenosis Airdrie | Summit Spine Centre', description: '', keywords: ['spinal stenosis Airdrie', 'spinal stenosis chiropractor'], published: true, priority: 'P2', type: 'condition', canonicalPath: '/conditions/spinal-stenosis' },
    overview: '', relatedConditions: ['low-back-pain', 'disc-herniation'],
    structuredData: { conditionName: 'Spinal Stenosis', description: '', possibleTreatment: 'Cox Flexion-Distraction, Chiropractic Care' },
    ...conditionDefaults,
  },
  'tech-neck': {
    meta: { slug: 'tech-neck', title: 'Tech Neck Treatment Airdrie | Summit Spine Centre', description: '', keywords: ['tech neck Airdrie', 'text neck chiropractor Airdrie'], published: true, priority: 'P2', type: 'condition', canonicalPath: '/conditions/tech-neck' },
    overview: '', relatedConditions: ['neck-pain', 'headaches-migraines'],
    structuredData: { conditionName: 'Tech Neck', description: '', possibleTreatment: 'Chiropractic Care, Ergonomic Support' },
    ...conditionDefaults,
  },
  'whiplash': {
    meta: { slug: 'whiplash', title: 'Whiplash Treatment Airdrie | Summit Spine Centre', description: '', keywords: ['whiplash Airdrie', 'whiplash chiropractor Airdrie'], published: true, priority: 'P2', type: 'condition', canonicalPath: '/conditions/whiplash' },
    overview: '', relatedConditions: ['neck-pain', 'upper-back-shoulder-pain'],
    structuredData: { conditionName: 'Whiplash', description: '', possibleTreatment: 'Chiropractic Care, Cox Flexion-Distraction' },
    ...conditionDefaults,
  },
  'upper-back-shoulder-pain': {
    meta: { slug: 'upper-back-shoulder-pain', title: 'Upper Back & Shoulder Pain Airdrie | Summit Spine Centre', description: '', keywords: ['upper back pain Airdrie', 'shoulder pain chiropractor Airdrie'], published: true, priority: 'P2', type: 'condition', canonicalPath: '/conditions/upper-back-shoulder-pain' },
    overview: '', relatedConditions: ['neck-pain', 'whiplash'],
    structuredData: { conditionName: 'Upper Back & Shoulder Pain', description: '', possibleTreatment: 'Chiropractic Care' },
    ...conditionDefaults,
  },
  'tmj': {
    meta: { slug: 'tmj', title: 'TMJ Treatment Airdrie | Summit Spine Centre', description: '', keywords: ['TMJ Airdrie', 'jaw pain chiropractor Airdrie'], published: true, priority: 'P3', type: 'condition', canonicalPath: '/conditions/tmj' },
    overview: '', relatedConditions: ['headaches-migraines', 'neck-pain'],
    structuredData: { conditionName: 'TMJ Dysfunction', description: '', possibleTreatment: 'Chiropractic Care' },
    ...conditionDefaults,
  },
  'sports-injuries': {
    meta: { slug: 'sports-injuries', title: 'Sports Injuries Airdrie | Summit Spine Centre', description: '', keywords: ['sports injury chiropractor Airdrie', 'sports rehab Airdrie'], published: true, priority: 'P3', type: 'condition', canonicalPath: '/conditions/sports-injuries' },
    overview: '', relatedConditions: ['low-back-pain', 'upper-back-shoulder-pain'],
    structuredData: { conditionName: 'Sports Injury', description: '', possibleTreatment: 'Chiropractic Care, Targeted Exercise' },
    ...conditionDefaults,
  },
  'postpartum-back-pain': {
    meta: { slug: 'postpartum-back-pain', title: 'Postpartum Back Pain Airdrie | Summit Spine Centre', description: '', keywords: ['postpartum back pain Airdrie', 'postnatal chiropractor Airdrie'], published: true, priority: 'P3', type: 'condition', canonicalPath: '/conditions/postpartum-back-pain' },
    overview: '', relatedConditions: ['low-back-pain', 'upper-back-shoulder-pain'],
    structuredData: { conditionName: 'Postpartum Back Pain', description: '', possibleTreatment: 'Chiropractic Care' },
    ...conditionDefaults,
  },
  'chronic-pain': {
    meta: { slug: 'chronic-pain', title: 'Chronic Pain Relief Airdrie | Summit Spine Centre', description: '', keywords: ['chronic pain Airdrie', 'chronic pain chiropractor Airdrie'], published: true, priority: 'P3', type: 'condition', canonicalPath: '/conditions/chronic-pain' },
    overview: '', relatedConditions: ['low-back-pain', 'sciatica'],
    structuredData: { conditionName: 'Chronic Pain', description: '', possibleTreatment: 'Chiropractic Care, Cox Flexion-Distraction' },
    ...conditionDefaults,
  },
  'mva-whiplash': {
    meta: { slug: 'mva-whiplash', title: 'MVA & Whiplash Airdrie | Summit Spine Centre', description: '', keywords: ['MVA whiplash Airdrie', 'motor vehicle accident chiropractor'], published: false, priority: 'P3', type: 'condition', canonicalPath: '/conditions/mva-whiplash' },
    overview: '', relatedConditions: ['whiplash', 'neck-pain'],
    structuredData: { conditionName: 'MVA Whiplash Injury', description: '', possibleTreatment: 'Chiropractic Care, Cox Flexion-Distraction' },
    ...conditionDefaults,
  },
}

// ── RESOURCES / BLOG ─────────────────────────────────────────

export const resourcesPage: ResourcesPage = {
  meta: {
    slug:          'resources',
    title:         'Patient Resources | Summit Spine Centre Airdrie',
    description:   '',
    keywords:      ['chiropractic resources Airdrie', 'spine health tips'],
    published:     false, // draft — publish when ready
    priority:      'P3',
    type:          'resources',
    canonicalPath: '/resources',
  },
  hero:       { headline: '', subheadline: '', scheme: 1, cta: { label: 'Book Your Visit', href: 'https://summitspine.ca/booking/' } },
  categories: { headline: '', scheme: 1, items: [] },
  resources:  [],
  newsletter: { headline: '', scheme: 4 },
  cta:        { headline: '', scheme: 4, cta: { label: 'Book Your Visit', href: 'https://summitspine.ca/booking/' } },
}

// ── UTILITY PAGES ────────────────────────────────────────────

export const privacyPage: UtilityPage = {
  meta: {
    slug: 'privacy', title: 'Privacy Policy | Summit Spine Centre', description: '', keywords: [],
    published: true, priority: 'P3', type: 'utility', canonicalPath: '/privacy',
  },
  title: 'Privacy Policy', lastUpdated: '', sections: [],
}

export const termsPage: UtilityPage = {
  meta: {
    slug: 'terms', title: 'Terms of Service | Summit Spine Centre', description: '', keywords: [],
    published: true, priority: 'P3', type: 'utility', canonicalPath: '/terms',
  },
  title: 'Terms of Service', lastUpdated: '', sections: [],
}

export const accessibilityPage: UtilityPage = {
  meta: {
    slug: 'accessibility', title: 'Accessibility | Summit Spine Centre', description: '', keywords: [],
    published: true, priority: 'P3', type: 'utility', canonicalPath: '/accessibility',
  },
  title: 'Accessibility Statement', lastUpdated: '', sections: [],
}

// ── NAV CONFIG ───────────────────────────────────────────────
// All nav labels live here — zero text in Navbar component

export const navConfig: NavConfig = {
  items: [
    { label: 'About', href: '/about' },
    {
      label: 'Services',
      href: '/services',
      children: [
        { label: 'Cox Flexion-Distraction',  href: '/services/cox-flexion-distraction' },
        { label: 'Chiropractic Adjustments', href: '/services/chiropractic-adjustments' },
        { label: 'Summits of Recovery',      href: '/services/summits-of-recovery' },
      ],
    },
    {
      label: 'Conditions',
      href: '/conditions',
      children: [
        { label: 'Low Back Pain',              href: '/conditions/low-back-pain' },
        { label: 'Sciatica',                   href: '/conditions/sciatica' },
        { label: 'Disc Herniation',            href: '/conditions/disc-herniation' },
        { label: 'Neck Pain',                  href: '/conditions/neck-pain' },
        { label: 'Back Pain',                  href: '/conditions/back-pain' },
        { label: 'Headaches & Migraines',      href: '/conditions/headaches-migraines' },
        { label: 'Spinal Stenosis',            href: '/conditions/spinal-stenosis' },
        { label: 'Tech Neck',                  href: '/conditions/tech-neck' },
        { label: 'Whiplash',                   href: '/conditions/whiplash' },
        { label: 'Upper Back & Shoulder Pain', href: '/conditions/upper-back-shoulder-pain' },
        { label: 'TMJ',                        href: '/conditions/tmj' },
        { label: 'Sports Injuries',            href: '/conditions/sports-injuries' },
        { label: 'Postpartum Back Pain',       href: '/conditions/postpartum-back-pain' },
        { label: 'Chronic Pain',               href: '/conditions/chronic-pain' },
      ],
    },
    { label: 'Team',    href: '/team' },
    { label: 'Contact', href: '/contact' },
  ],
  cta: { label: 'Book Your Visit', href: 'https://summitspine.ca/booking/', external: true },
}

// ── FOOTER CONFIG ─────────────────────────────────────────────
// All footer labels live here — zero text in Footer component

export const footerConfig = {
  sections: {
    navigate: 'Navigate',
    services: 'Services',
    contact:  'Contact',
  },
  services: [
    { label: 'Cox Flexion-Distraction',  href: '/services/cox-flexion-distraction' },
    { label: 'Chiropractic Adjustments', href: '/services/chiropractic-adjustments' },
    { label: 'Summits of Recovery',      href: '/services/summits-of-recovery' },
  ],
  legal: [
    { label: 'Privacy Policy',   href: '/privacy' },
    { label: 'Terms of Service', href: '/terms' },
    { label: 'Accessibility',    href: '/accessibility' },
  ],
} as const
