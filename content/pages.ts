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
  address:     '214 Main St N',
  city:        'Airdrie',
  province:    'AB',
  postalCode:  'T4B 0R6',
  phone:       '403-948-4440',
  email:       'info@summitspine.ca',
  mapEmbedUrl: 'https://maps.google.com/maps?q=214+Main+St+N,+Airdrie,+AB+T4B+0R6,+Canada&output=embed',
  hours: [
    { days: 'Monday',    hours: '8AM – 12PM', hours2: '2PM – 6PM' },
    { days: 'Tuesday',   hours: '8AM – 7PM' },
    { days: 'Wednesday', hours: '8AM – 12PM', hours2: '2PM – 6PM' },
    { days: 'Thursday',  hours: '8AM – 7PM' },
    { days: 'Friday',    hours: '8AM – 5PM' },
    { days: 'Saturday',  hours: '9AM – 2PM' },
    { days: 'Sunday',    hours: 'Closed' },
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
    cta:          { label: 'Get My Personalized Plan', href: 'https://summitspine.ca/booking/' },
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
        cta: { label: 'Get My Personalized Plan', href: 'https://summitspine.ca/booking/' },
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
        cta: { label: 'Get My Personalized Plan', href: 'https://summitspine.ca/booking/' },
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
        cta: { label: 'Get My Personalized Plan', href: 'https://summitspine.ca/booking/' },
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
        cta: { label: 'Get My Personalized Plan', href: 'https://summitspine.ca/booking/' },
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
        cta: { label: 'Get My Personalized Plan', href: 'https://summitspine.ca/booking/' },
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
        cta: { label: 'Get My Personalized Plan', href: 'https://summitspine.ca/booking/' },
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
    cta:      { label: 'Get My Personalized Plan', href: 'https://summitspine.ca/booking/' },
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
    scheme:      4,
    cta:         { label: 'Get My Personalized Plan', href: 'https://summitspine.ca/booking/' },
    bgImage: {
      src: '/images/about/hero.jpg',
      alt: 'Summit Spine Centre clinic interior in Airdrie, Alberta',
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
    cta:         { label: 'Get My Personalized Plan', href: 'https://summitspine.ca/booking/' },
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
    cta:      { label: 'Get My Personalized Plan', href: 'https://summitspine.ca/booking/' },
  },
}

// ── CONTACT ──────────────────────────────────────────────────

export const contactPage: ContactPage = {
  meta: {
    slug:          'contact',
    title:         'Contact Us Airdrie | Summit Spine Centre',
    description:   'Contact Summit Spine Centre in Airdrie, Alberta. Walk-ins welcome — no referral needed. Call 403-948-4440, email us, or book online. Located at 214 Main St N, Airdrie.',
    keywords:      ['contact Summit Spine Centre', 'chiropractic Airdrie contact', 'chiropractor Airdrie phone', 'Summit Spine Centre location', 'chiropractic clinic Airdrie hours'],
    published:     true,
    priority:      'P1',
    type:          'contact',
    canonicalPath: '/contact',
  },
  hero: {
    headline:    'Find Us in Airdrie.',
    subheadline: 'Walk-ins welcome. No referral needed.',
    body:        "We're located in the heart of Airdrie at 214 Main St N. Come in and see us — or give us a call and we'll help you figure out the next step.",
    cta:         { label: 'Book Your Visit', href: 'https://summitspine.ca/booking/' },
    scheme:      4,
    bgImage: {
      src: '/images/contact/hero.jpg',
      alt: 'Summit Spine Centre exterior on Main Street North, Airdrie, Alberta',
    },
  },
  contact: CLINIC_INFO,
  cta: {
    headline:     'Ready to Start Feeling Better?',
    body:         "Take the first step. Book your visit online or call us directly — we'll get you in as soon as possible.",
    cta:          { label: 'Book Your Visit', href: 'https://summitspine.ca/booking/' },
    secondaryCta: { label: 'Call 403-948-4440', href: 'tel:4039484440', variant: 'ghost' },
    scheme:       4,
  },
  faqs: {
    headline: 'Common Questions',
    scheme:   2,
    items: [
      {
        question: 'Do I need a referral to see a chiropractor at Summit Spine Centre?',
        answer:   'No referral is needed. You can book directly online or call us at 403-948-4440. We welcome walk-ins and are able to see most patients the same day or within a day or two.',
      },
      {
        question: 'Do you accept walk-in patients?',
        answer:   'Yes — walk-ins are welcome. We do our best to accommodate you the same day. If you have a preferred time, booking online is the fastest way to secure your spot.',
      },
      {
        question: 'Where exactly are you located, and is there parking?',
        answer:   'We are located at 214 Main St N, Airdrie, AB T4B 0R6 — in a convenient central location with free on-street parking and a parking lot nearby. Look for our signage on Main St.',
      },
      {
        question: 'What should I bring to my first appointment?',
        answer:   'Bring any relevant imaging (X-rays, MRI reports), a list of current medications, and your Alberta Health Care card. Wear comfortable, loose-fitting clothing so we can assess your range of motion easily.',
      },
      {
        question: 'How long is the first appointment?',
        answer:   'Your initial visit typically runs 45–60 minutes. This includes a thorough health history review, physical examination, discussion of your goals, and — in most cases — your first treatment.',
      },
      {
        question: 'How do I cancel or reschedule my appointment?',
        answer:   'You can cancel or reschedule by calling us at 403-948-4440 or emailing info@summitspine.ca. We ask for at least 24 hours notice when possible so we can offer your slot to someone on our wait list.',
      },
    ],
  },
}

// ── BOOK NOW ─────────────────────────────────────────────────

export const bookPage: BookPage = {
  meta: {
    slug:          'book',
    title:         'Book Your Visit Airdrie | Summit Spine Centre',
    description:   'Book a chiropractic appointment at Summit Spine Centre in Airdrie, AB. Walk-ins welcome — no referral needed. Online booking available or call 403-948-4440.',
    keywords:      ['book chiropractor Airdrie', 'chiropractic appointment Airdrie', 'walk-in chiropractor Airdrie', 'Summit Spine Centre booking', 'chiropractic online booking Airdrie'],
    published:     true,
    priority:      'P1',
    type:          'book',
    canonicalPath: '/book',
  },
  hero: {
    headline:    'Book Your Visit.',
    subheadline: 'Quick, easy, and no referral needed.',
    body:        'Select a time that works for you. Your first appointment includes a full assessment and — in most cases — your first treatment. Walk-ins are also welcome.',
    cta:         { label: 'Book Online Now', href: 'https://summitspine.ca/booking/', external: true },
    secondaryCta: { label: 'Call 403-948-4440', href: 'tel:4039484440', variant: 'ghost' },
    scheme:      1,
  },
  bookingEmbedUrl: 'https://summitspine.ca/booking/',
  contact:         CLINIC_INFO,
  faqs: {
    headline: 'Booking Questions',
    scheme:   2,
    items: [
      {
        question: 'How quickly can I get an appointment?',
        answer:   'Most new patients are seen within 1–2 business days. Walk-ins are welcome — call ahead at 403-948-4440 to check same-day availability, or book online to secure your preferred time slot.',
      },
      {
        question: 'Does Alberta Health Care cover chiropractic treatment?',
        answer:   'Alberta Health Care (AHCIP) does not cover chiropractic services. However, most extended health benefit plans cover a portion of chiropractic care. We recommend checking your plan details. We provide a receipt after each visit that you can submit to your insurer.',
      },
      {
        question: 'What if I need to cancel or reschedule?',
        answer:   'Please call us at 403-948-4440 or email info@summitspine.ca at least 24 hours in advance. This allows us to offer your time to another patient who may be waiting. We understand that life happens — just reach out as soon as you can.',
      },
      {
        question: 'Is there anything I need to do before my first appointment?',
        answer:   'No paperwork to fill out in advance — we take care of that when you arrive. Just bring your Alberta Health Care card, any relevant imaging (X-rays, MRI), and wear or bring comfortable, loose-fitting clothing.',
      },
      {
        question: 'Do you offer direct billing to insurance?',
        answer:   'We do not currently offer direct billing. Payment is collected at each visit and we provide a detailed receipt for you to submit to your insurance provider for reimbursement.',
      },
    ],
  },
  cta: {
    headline:     'Still Have Questions?',
    body:         "Call us at 403-948-4440 or send us an email — we're happy to answer anything before you book.",
    cta:          { label: 'Book Your Visit', href: 'https://summitspine.ca/booking/', external: true },
    secondaryCta: { label: 'Contact Us', href: '/contact', variant: 'ghost' },
    scheme:       4,
  },
}

// ── SERVICES HUB ─────────────────────────────────────────────

export const servicesPage: ServicesHubPage = {
  meta: {
    slug:          'services',
    title:         'Chiropractic Services Airdrie | Summit Spine Centre',
    description:   'Chiropractic services in Airdrie, AB — Cox Flexion-Distraction, chiropractic adjustments, and the Summits of Recovery program. Gentle, evidence-informed care for back pain, disc issues, and more.',
    keywords:      ['chiropractic services Airdrie', 'Cox flexion distraction Airdrie', 'chiropractic adjustments Airdrie', 'Summits of Recovery Airdrie', 'spine care Airdrie Alberta'],
    published:     true,
    priority:      'P1',
    type:          'service-hub',
    canonicalPath: '/services',
  },
  hero: {
    headline:     'Care Built Around You.',
    subheadline:  'Comprehensive chiropractic services in Airdrie — from gentle disc decompression to full-body recovery programs.',
    body:         'At Summit Spine Centre, every service starts with one thing: a thorough understanding of what\'s actually going on with you. We don\'t apply generic treatments. We build a plan around your specific diagnosis, history, and goals.',
    cta:          { label: 'Book Your Assessment', href: 'https://summitspine.ca/booking/' },
    secondaryCta: { label: 'See Conditions We Treat', href: '/conditions', variant: 'ghost' },
    scheme:       4,
    bgImage: {
      src: '/images/services/hero.jpg',
      alt: 'Chiropractic treatment session at Summit Spine Centre in Airdrie',
    },
  },
  featuresList: {
    headline:    'What Makes Summit Spine Different',
    subheadline: 'We\'ve been serving Airdrie families for over 35 years. Here\'s what that looks like in practice.',
    scheme:      2,
    items: [
      { icon: 'ClipboardList', title: 'Assessment First',        body: 'Every care plan begins with a thorough assessment — your history, movement patterns, orthopedic tests, and goals. We don\'t guess.' },
      { icon: 'Activity',      title: 'Diagnosis-Led Treatment', body: 'The treatment follows the diagnosis, not the other way around. We choose techniques based on what you actually need.' },
      { icon: 'HandHeart',     title: 'Hands-On Expertise',      body: 'Our chiropractors are trained in advanced manual techniques, including Cox Flexion-Distraction — a specialty not every clinic offers.' },
      { icon: 'TrendingUp',    title: 'Long-Term Results',       body: 'We\'re not just getting you out of pain. We\'re building the capacity for you to stay out of it — through movement, education, and a plan you can sustain.' },
    ],
  },
  featureHighlight: {
    icon:  'Award',
    title: 'Specialized. Proven. Personalized.',
    body:  'When you visit Summit Spine Centre, you\'re not getting a generic chiropractic visit. You\'re getting a clinician who knows your case, a team that knows your name, and a clinic that has been doing this — right here in Airdrie — for over 35 years.',
  },
  services: {
    headline:    'Our Services',
    subheadline: 'Each service is available as a standalone treatment or as part of a coordinated care plan.',
    scheme:      1,
    items: [
      { icon: 'Activity',   title: 'Cox Flexion-Distraction',  body: 'Gentle, specialized disc decompression for herniated discs, sciatica, spinal stenosis, and nerve pain. The gold standard in non-surgical disc care.' },
      { icon: 'HandHeart',  title: 'Chiropractic Adjustments', body: 'Targeted spinal adjustments to restore joint mobility, reduce nerve irritation, and improve the way your body moves and feels day to day.' },
      { icon: 'TrendingUp', title: 'Summits of Recovery',      body: 'A structured, 4-pillar recovery program combining professional adjustments, targeted exercise, lifestyle wisdom, and ergonomic support.' },
    ],
  },
  testimonials: { scheme: 4, items: [] },
  cta: {
    headline:     'Not Sure Which Service Is Right for You?',
    body:         'Start with an assessment. We\'ll help you understand what\'s going on and build a care plan that actually fits your situation.',
    scheme:       4,
    cta:          { label: 'Book Your Assessment', href: 'https://summitspine.ca/booking/' },
    secondaryCta: { label: 'Call Us', href: 'tel:4039484440', variant: 'ghost' },
  },
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
    scheme:      4,
    cta:         { label: 'Get My Personalized Plan', href: 'https://summitspine.ca/booking/' },
    bgImage: {
      src: '/images/services/chiropractic-adjustments/hero.jpg',
      alt: 'Chiropractor performing a spinal adjustment at Summit Spine Centre in Airdrie',
    },
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
    cta:      { label: 'Get My Personalized Plan', href: 'https://summitspine.ca/booking/' },
  },
}

// ── SERVICE: SUMMITS OF RECOVERY (HUB) ───────────────────────

export const summitsPage: ServicePage = {
  meta: {
    slug:          'summits-of-recovery',
    title:         'Summits of Recovery — Spine Health Guide Airdrie | Summit Spine Centre',
    description:   'The Summit Spine Centre recovery guide — four pillars that get you out of pain and keep you there: Professional Adjustments, Targeted Exercise, Lifestyle Wisdom, and Ergonomic Support.',
    keywords:      [
      'summits of recovery Airdrie',
      'chiropractic wellness Airdrie',
      'spine health guide Airdrie',
      'back pain recovery Airdrie',
      'chiropractic home exercises Airdrie Alberta',
    ],
    published:     true,
    priority:      'P2',
    type:          'service',
    canonicalPath: '/services/summits-of-recovery',
  },

  hero: {
    headline:    'Your Path to Lasting Relief: The Summit Spine Recovery Guide',
    subheadline: 'The work we do in our Airdrie clinic is only half the equation. Getting you to 100% — and keeping you there — means focusing on what happens outside the clinic too.',
    scheme:      1,
    cta:         { label: 'Book Your Visit', href: 'https://summitspine.ca/booking/' },
  },

  featureHighlight: {
    title: 'Clinic care gets you out of pain. Habits keep you there.',
    body:  'At Summit Spine Centre, we know that the best results come from combining what we do in the clinic with what you do at home. That\'s why Summits of Recovery is built around four pillars: Professional Adjustments, Targeted Exercise, Lifestyle Wisdom, and Ergonomic Support. Each one plays a specific role in your recovery — and together, they form the complete picture.',
  },

  featuresList: {
    headline: 'The Four Pillars of Recovery',
    scheme:   1,
    items: [
      {
        icon:  'HandHeart',
        title: 'Pillar 1: Professional Adjustments',
        body:  'The foundation of your recovery. Restoring proper joint mechanics allows your nervous system to communicate without interference — reducing inflammation, unlocking stiff joints, and resetting muscle tension. We use a variety of techniques, from traditional adjustments to the gentle Cox Flexion-Distraction, tailored to your comfort level.',
      },
      {
        icon:  'Dumbbell',
        title: 'Pillar 2: Targeted Home Exercises',
        body:  'Adjustments get you moving. Exercises keep you moving. We don\'t believe in busy work — we prescribe specific movements designed to stabilize your unique injury. Core stability work protects your discs. Mobility drills prevent scar tissue and keep your joints lubricated.',
      },
      {
        icon:  'Leaf',
        title: 'Pillar 3: Lifestyle Wisdom',
        body:  'Small daily choices either fuel inflammation or fight it. We provide guidance on sleep positions that support your spine, the role of hydration in disc health, and the power of micro-breaks — getting up every 30 minutes to reset your posture and reduce cumulative spinal load throughout the day.',
      },
      {
        icon:  'Armchair',
        title: 'Pillar 4: Ergonomic Support',
        body:  'If you spend eight hours a day at a desk that strains your neck, a 15-minute adjustment can only do so much. We help you spine-proof your workstation — monitor height, seat position, lumbar support, driving posture — so your environment works with your recovery, not against it.',
      },
    ],
  },

  howItWorks: {
    headline: 'What Your Recovery Looks Like',
    scheme:   1,
    steps: [
      {
        step:  1,
        icon:  'MessageCircle',
        title: 'Comprehensive Assessment',
        body:  'We start by understanding the specific cause of your pain — not just the symptom. This guides every pillar of the recovery plan we build together.',
      },
      {
        step:  2,
        icon:  'HandHeart',
        title: 'Professional Care in the Clinic',
        body:  'Targeted adjustments and Cox Flexion-Distraction restore motion to restricted joints, reduce nerve irritation, and give your body the structural foundation it needs to recover and stay recovered.',
      },
      {
        step:  3,
        icon:  'Dumbbell',
        title: 'Your Exercise & Lifestyle Plan',
        body:  'We send you home with a clear, simple exercise program and practical lifestyle guidance — not a generic handout, but a plan built for your specific problem and daily life.',
      },
      {
        step:  4,
        icon:  'TrendingUp',
        title: 'Progress Checks & Ongoing Support',
        body:  'We track your recovery at every visit. As you improve, the plan evolves. When you\'re ready, we set you up to stay well independently — with the tools to manage your own spinal health long-term.',
      },
    ],
  },

  faqs: {
    scheme: 1,
    items: [
      { question: 'How soon can I start exercising after an adjustment?',   answer: 'Generally, we recommend waiting 24 hours after a significant adjustment before heavy lifting or intense exercise. Gentle mobility work, however, is usually encouraged right away — movement is part of the recovery, not something to avoid.' },
      { question: 'Should I use ice or heat at home?',                      answer: 'As a general rule: ice for new, acute injuries to reduce swelling and calm inflammation in the first 48 to 72 hours; heat for chronic, tight muscles to encourage blood flow and relax tension. When in doubt, ask at your next visit — the right choice depends on what\'s happening in your specific case.' },
      { question: 'Do I need to follow all four pillars?',                  answer: 'The more pillars you engage with, the faster and more durable your recovery tends to be. That said, we always start with what\'s most relevant to your situation and build from there. Not everyone needs the same combination — that\'s what the assessment is for.' },
      { question: 'How long before I see results?',                         answer: 'Many patients notice meaningful improvement within the first 2 to 3 visits. How quickly you progress depends on the nature of your problem, how long it has been present, and how consistently you apply the lifestyle and exercise recommendations between visits. We track this together.' },
      { question: 'Can I use this guide even if I\'m not a current patient?', answer: 'Absolutely. The lifestyle and ergonomic guidance on this page is evidence-informed advice that applies to most people dealing with spinal pain. If you want a plan built specifically for your situation, book an assessment and we\'ll take it from there.' },
    ],
  },

  cta: {
    headline: 'Ready for your progress check-up?',
    scheme:   4,
    cta:      { label: 'Book Your Visit', href: 'https://summitspine.ca/booking/' },
  },
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
  hero:           { headline: '', subheadline: '', scheme: 1, cta: { label: 'Get My Personalized Plan', href: 'https://summitspine.ca/booking/' } },
  benefits:       { headline: '', scheme: 4, items: [] },
  faqs:           { scheme: 1, items: [] },
  cta:            { headline: '', scheme: 4, cta: { label: 'Get My Personalized Plan', href: 'https://summitspine.ca/booking/' } },
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
  hero:           { headline: '', subheadline: '', scheme: 1, cta: { label: 'Get My Personalized Plan', href: 'https://summitspine.ca/booking/' } },
  benefits:       { headline: '', scheme: 4, items: [] },
  testimonials:   { scheme: 4, items: [] },
  faqs:           { scheme: 1, items: [] },
  cta:            { headline: '', scheme: 4, cta: { label: 'Get My Personalized Plan', href: 'https://summitspine.ca/booking/' } },
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
  hero:           { headline: '', subheadline: '', scheme: 1, cta: { label: 'Get My Personalized Plan', href: 'https://summitspine.ca/booking/' } },
  featuresList:   { headline: '', scheme: 1, items: [] },
  benefits:       { headline: '', scheme: 4, items: [] },
  howItWorks:     { headline: '', steps: [], scheme: 1 },
  testimonials:   { scheme: 4, items: [] },
  cta:            { headline: '', scheme: 4, cta: { label: 'Get My Personalized Plan', href: 'https://summitspine.ca/booking/' } },
}

// ── CONDITIONS HUB ───────────────────────────────────────────

export const conditionsPage: ConditionsHubPage = {
  meta: {
    slug:          'conditions',
    title:         'Conditions Treated Airdrie | Summit Spine Centre',
    description:   'Chiropractic care for back pain, sciatica, disc herniation, neck pain, headaches, and more in Airdrie, AB. Summit Spine Centre has served the community for 35+ years.',
    keywords:      ['conditions treated Airdrie chiropractor', 'back pain Airdrie', 'sciatica treatment Airdrie', 'neck pain Airdrie', 'chiropractic conditions Airdrie Alberta'],
    published:     true,
    priority:      'P1',
    type:          'condition-hub',
    canonicalPath: '/conditions',
  },
  hero: {
    headline:     'We Treat the Cause. Not Just the Symptom.',
    subheadline:  'Chiropractic care for spine, nerve, and musculoskeletal conditions in Airdrie — backed by 35+ years of hands-on experience.',
    body:         'Pain and dysfunction show up in different ways for different people. We take the time to figure out what\'s actually driving yours — then build a treatment plan around that.',
    cta:          { label: 'Book Your Assessment', href: 'https://summitspine.ca/booking/' },
    secondaryCta: { label: 'See Our Services', href: '/services', variant: 'ghost' },
    scheme:       4,
    bgImage: {
      src: '/images/conditions/hero.jpg',
      alt: 'Patient consultation at Summit Spine Centre, Airdrie chiropractor',
    },
  },
  conditionsList: {
    headline:    'Conditions We Treat',
    subheadline: 'From common disc problems and nerve pain to chronic conditions and postural issues — if it involves your spine, muscles, or nerves, we\'ve seen it.',
    scheme:      1,
    items:       [],
  },
  educationFeature: {
    title: 'Getting a Diagnosis You Can Actually Use',
    body:  'Many patients come to us having been told their imaging is "normal" or their pain is something they\'ll just have to manage. We approach every case differently. A thorough chiropractic assessment often reveals functional problems — how you move, where you compensate, which structures are loaded — that don\'t show up on scans. Understanding what\'s actually happening is the first step to fixing it. We take the time to explain your diagnosis clearly so you can make informed decisions about your care.',
  },
  faqs: {
    scheme: 1,
    items: [
      { question: 'Do I need a referral to see a chiropractor in Airdrie?',        answer: 'No referral is needed. You can book directly with Summit Spine Centre. If we feel you need imaging or a specialist referral, we\'ll guide you through that process.' },
      { question: 'How do I know if chiropractic care is right for my condition?',  answer: 'The best way is to come in for an assessment. We\'ll tell you honestly whether chiropractic care is the right fit for what you\'re dealing with — and if it\'s not, we\'ll point you in the right direction. We don\'t take cases we can\'t help.' },
      { question: 'What conditions do chiropractors treat?',                        answer: 'Chiropractors are trained to assess and treat a wide range of musculoskeletal and spinal conditions — including disc herniations, sciatica, neck and back pain, headaches, joint problems, nerve compression, and more. At Summit Spine Centre, we specialize in disc conditions and have advanced training in Cox Flexion-Distraction therapy.' },
      { question: 'How many treatments will I need?',                               answer: 'It depends on your condition, how long you\'ve had it, and how your body responds to treatment. After your assessment, we\'ll give you a realistic timeline. We don\'t oversell care — we aim to get you better as efficiently as possible and give you the tools to stay that way.' },
      { question: 'Will chiropractic care be covered by my insurance in Alberta?',  answer: 'Chiropractic care is not covered by Alberta Health Care (AHCIP), but most extended health benefit plans include chiropractic services. We recommend calling your provider before your first visit to confirm your coverage.' },
    ],
  },
  cta: {
    headline: 'Not Sure If We Can Help?',
    body:     'Book an assessment and we\'ll give you a straight answer. We take the time to understand your case — and if chiropractic care is the right fit, we\'ll tell you exactly how we can help.',
    scheme:   4,
    cta:      { label: 'Book Your Assessment', href: 'https://summitspine.ca/booking/' },
  },
}

// ── CONDITION PAGES ───────────────────────────────────────────
// Title format: "[Condition] Airdrie | Summit Spine Centre"

const conditionDefaults = {
  hero:         { headline: '', subheadline: '', scheme: 1 as const, cta: { label: 'Get My Personalized Plan', href: 'https://summitspine.ca/booking/' } },
  treatments:   { headline: '', scheme: 1 as const, items: [] },
  benefits:     { headline: '', scheme: 4 as const, items: [] },
  howItWorks:   { headline: '', steps: [], scheme: 1 as const },
  testimonials: { scheme: 4 as const, items: [] },
  faqs:         { scheme: 1 as const, items: [] },
  cta:          { headline: '', scheme: 4 as const, cta: { label: 'Get My Personalized Plan', href: 'https://summitspine.ca/booking/' } },
}

export const conditionPages: Record<string, ConditionPage> = {
  'low-back-pain': {
    meta: {
      slug:          'low-back-pain',
      title:         'Low Back Pain Treatment Airdrie | Summit Spine Centre',
      description:   'Expert low back pain treatment in Airdrie, Alberta. From chronic stiffness to disc problems and sciatica, Summit Spine Centre has served Airdrie families for 35+ years.',
      keywords:      [
        'low back pain Airdrie',
        'back pain chiropractor Airdrie',
        'low back pain treatment Airdrie',
        'lumbar pain Airdrie Alberta',
        'chiropractic back pain Airdrie',
      ],
      published:     true,
      priority:      'P1',
      type:          'condition',
      canonicalPath: '/conditions/low-back-pain',
    },

    hero: {
      headline:    'Back Pain Relief in Airdrie',
      subheadline: 'Helping Airdrie families with back pain for over 35 years. From chronic stiffness to acute pain, disc problems and more, get expert chiropractic care for your specific needs.',
      cta:         { label: 'Get My Personalized Plan', href: 'https://summitspine.ca/booking/' },
      scheme:      1,
    },

    overview:
      'Low back pain refers to discomfort, stiffness, tension or pain felt between the bottom of the ribs and the hips — your lumbar spine. It can range from a mild ache to sharp, very severe pain and spasms that can be extremely debilitating. ' +
      'Some people may experience pain only in the lower back, while others may notice symptoms travelling into the hips, buttocks, or legs. Low back pain can come on suddenly after a specific activity or injury, or it may gradually develop over time. ' +
      'Because the lower back plays such an important role in supporting movement and absorbing stress throughout the day, many different structures can contribute to pain in this area. ' +
      'The good news: most cases of low back pain improve with the right approach. Even when symptoms have been around for a long time, many people can reduce pain, improve mobility, and return to the activities they enjoy. ' +
      'Low back pain does not always mean serious damage has been done. In many cases, your spine is still strong, adaptable, and capable of recovery when supported with appropriate movement, education, and care.',

    symptoms: [
      'Aching or stiffness in the lower back',
      'Sharp pain with certain movements',
      'Pain when bending, lifting, standing or sitting',
      'Muscle tightness or spasms',
      'Pain that travels into the hips, buttocks or legs',
      'Difficulty standing up straight after sitting',
      'Morning stiffness that improves with movement',
      'Reduced mobility or flexibility',
      'Pain that worsens after prolonged sitting or inactivity',
    ],

    causes: [
      'Disc Problems — the discs between vertebrae can become irritated, bulged, or herniated, sometimes causing pain that travels into the leg (sciatica). Disc problems are usually worse with sitting and better with standing.',
      'Muscle and Joint Strain — overuse, lifting, sudden movements, repetitive tasks, or prolonged positions can irritate muscles, ligaments, and spinal joints',
      'Spinal Narrowing (Stenosis) — as we age, the tunnels our nerves pass through narrow, sometimes pinching the nerves and causing back pain, leg heaviness, or difficulty walking. Pain from stenosis is often worse with standing and better with sitting.',
      'Spinal Joint Restrictions — when the joints in your lower back are not moving as well as they should, surrounding muscles and ligaments can become tight, irritated, or uncomfortable',
      'Arthritis and Degeneration — normal age-related wear and tear can affect the joints and discs in your spine, causing stiffness, inflammation and reduced mobility. Think of it as "wrinkles on the inside."',
      'Weak Core or Glute Muscles — when these muscles are weak, the lower back takes on extra stress with activities like walking, bending, or lifting. Over time, this added strain can contribute to discomfort or injury.',
      'Tight Hamstrings or Hip Flexors — these muscles attach to the pelvis and affect the way you move. With limited mobility, the lower back may take on extra stress and cause discomfort.',
      'Poor Movement and Posture Habits — long hours sitting, repetitive bending, reduced physical activity, and deconditioning place increased stress on the lower back over time',
      'Stress and Lifestyle Factors — sleep quality, stress, physical inactivity, and overall health can all influence how your body experiences and recovers from pain',
    ],

    treatments: {
      headline: 'How Summit Spine Centre Treats Low Back Pain',
      scheme:   1,
      items: [
        {
          icon:  'ClipboardList',
          title: 'Comprehensive History & Exam',
          body:  'First, we listen. We ask questions about your story, your day-to-day, and what may have led to your back pain. We then perform a thorough physical exam — orthopedic, neurological, and movement assessments — to determine what is actually causing your pain.',
        },
        {
          icon:  'Activity',
          title: 'Cox Flexion-Distraction',
          body:  'A gentle, evidence-based technique used to decompress the spine and relieve pressure on nerves and discs. We can move the joints in a way that doesn\'t require the "crack" — making it ideal for sensitive or acute presentations.',
        },
        {
          icon:  'HandHeart',
          title: 'Chiropractic Adjustments',
          body:  'When joints are truly stuck, they need to move. Targeted adjustments restore spinal motion, reduce muscle guarding, and take pressure off irritated structures — sometimes with that satisfying pop.',
        },
        {
          icon:  'Dumbbell',
          title: 'Targeted Exercises',
          body:  'Depending on the cause, we prescribe exercises to build core and glute strength, restore flexibility, and give your spine the support it needs to stay well — not just feel better for a few days.',
        },
        {
          icon:  'Heart',
          title: 'Lifestyle Modifications',
          body:  'Back pain is typically caused by many factors that accumulate over time. We look into your daily routine and suggest practical changes — posture, ergonomics, activity modification — to reduce what\'s loading your spine.',
        },
      ],
    },

    benefits: {
      headline: 'Why Choose Summit Spine Centre for Back Pain',
      scheme:   4,
      items: [
        {
          icon:  'Award',
          title: '35+ Years Serving Airdrie',
          body:  'Decades of experience treating low back pain right here in Airdrie — from acute flare-ups to chronic, long-standing conditions. We\'ve helped patients across all ages and activity levels.',
        },
        {
          icon:  'Activity',
          title: 'Specialized in Disc & Nerve Conditions',
          body:  'Cox Flexion-Distraction is one of the most effective evidence-based techniques for disc-related back pain. We are among the few certified Cox practitioners in Alberta.',
        },
        {
          icon:  'Users',
          title: 'A Plan Built Around You',
          body:  'Our goal is not just temporary relief but to equip you with the skills needed to return to the activities that matter most to you — with confidence and lasting results.',
        },
      ],
    },

    howItWorks: {
      headline: 'What to Expect at Summit Spine Centre',
      scheme:   1,
      steps: [
        {
          step:  1,
          icon:  'MessageCircle',
          title: 'Tell Us Your Story',
          body:  'Your first visit starts with a detailed conversation about your symptoms and health history. We want to understand what\'s going on, how it\'s impacting your life, and where you\'d like to be.',
        },
        {
          step:  2,
          icon:  'Search',
          title: 'Thorough Assessment',
          body:  'Orthopedic, neurological, and movement assessments help us understand the root cause of your back pain — not just where it hurts, but why.',
        },
        {
          step:  3,
          icon:  'ClipboardList',
          title: 'Clear, Personalized Plan',
          body:  'We explain our findings in plain language and recommend a care plan tailored to your goals and preferences. No guesswork, no pressure.',
        },
        {
          step:  4,
          icon:  'TrendingUp',
          title: 'Treatment & Progress',
          body:  'We get to work — and we track your progress. If chiropractic care isn\'t the right fit, we\'ll connect you with another trusted provider in our community.',
        },
      ],
    },

    testimonials: {
      scheme: 4,
      items:  [],
    },

    faqs: {
      scheme: 1,
      items: [
        { question: 'Is low back pain common?',                                      answer: 'Yes. Low back pain is one of the most common health concerns worldwide and affects people of all ages.' },
        { question: 'Should I keep moving if my back hurts?',                        answer: 'In many cases, staying active is helpful. Prolonged rest may actually slow recovery. The right type and amount of movement depends on the individual and cause of pain.' },
        { question: 'When should I seek professional help for low back pain?',        answer: 'If your pain is severe, persistent, worsening, or affecting daily activities, or associated with symptoms like numbness, weakness or pain travelling into the leg. Even with mild problems, seeing a healthcare professional can help get you on the path to recovery faster.' },
        { question: 'Can a disc bulge heal?',                                         answer: 'Many disc-related conditions improve over time, especially when combined with appropriate movement, activity modification, and care. Cox Flexion-Distraction therapy is a gentle and effective way to decompress the discs and help them recover.' },
        { question: 'Is cracking or popping my back harmful?',                        answer: 'Not necessarily. Joint sounds are often simply changes in pressure within the joints. In most cases, occasional popping is normal and not harmful.' },
        { question: 'Can chiropractic care help low back pain?',                      answer: 'Yes. In many cases chiropractic care is a very safe and effective way to manage low back pain.' },
        { question: 'Do I need imaging for low back pain?',                           answer: 'Not always. Most cases of low back pain can be assessed and treated effectively without imaging. X-rays or MRI may be recommended in certain situations depending on your symptoms, history and exam findings.' },
        { question: 'Can pregnancy cause lower back pain?',                           answer: 'Yes. Changes in weight, hormones, and posture may all contribute to low back pain during pregnancy.' },
        { question: 'Can perimenopause cause low back pain?',                         answer: 'Yes. Reduced estrogen levels can cause joint pain, including in the lower back.' },
        { question: 'Will low back pain go away on its own?',                         answer: 'Sometimes low back pain can improve with time, gentle stretching, movement, and therapies like ice or heat. However, if pain persists, worsens, or is impacting your day-to-day, we are here to help.' },
        { question: 'How do I know if my back pain is from muscles or nerves?',       answer: 'Muscle-related pain often feels like a dull ache, tightness, or stiffness that stays in one spot. Nerve pain often feels more sharp, and can cause burning or tingling sensations that travel down the leg.' },
        { question: 'Is it safe to get adjusted if I have arthritis?',                answer: 'In most cases, yes. There are many different treatment approaches our team can use to help you find relief. Many individuals with advanced arthritis benefit from Cox Flexion-Distraction therapy, which is gentle and helps improve movement while reducing pressure on spinal nerves and discs.' },
        { question: 'Can a chiropractor help with low back pain?',                    answer: 'Yes! In most cases our team of chiropractors can help reduce tension, improve mobility, and get you on a path to recovery.' },
      ],
    },

    cta: {
      headline: 'Don\'t live with it — book today.',
      scheme:   4,
      cta:      { label: 'Get My Personalized Plan', href: 'https://summitspine.ca/booking/' },
    },

    relatedConditions: ['sciatica', 'disc-herniation'],

    structuredData: {
      conditionName:     'Low Back Pain',
      description:       'Low back pain refers to discomfort, stiffness, tension or pain felt in the lumbar spine, between the bottom of the ribs and the hips. It can range from a mild ache to severe pain and spasms.',
      possibleTreatment: 'Chiropractic Care, Cox Flexion-Distraction',
    },
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
      cta:         { label: 'Get My Personalized Plan', href: 'https://summitspine.ca/booking/' },
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
      cta:      { label: 'Get My Personalized Plan', href: 'https://summitspine.ca/booking/' },
    },

    relatedConditions: ['low-back-pain', 'disc-herniation'],

    structuredData: {
      conditionName:     'Sciatica',
      description:       'Sciatica is nerve pain caused by irritation or compression of the sciatic nerve, often leading to lower back and leg pain that radiates down one leg.',
      possibleTreatment: 'Chiropractic Care, Cox Flexion-Distraction',
    },
  },
  'disc-herniation': {
    meta: {
      slug:          'disc-herniation',
      title:         'Disc Herniation & Bulging Disc Treatment Airdrie | Summit Spine Centre',
      description:   'Non-surgical disc herniation and bulging disc treatment in Airdrie. Cox Flexion-Distraction gently decompresses discs and relieves nerve pain. Book today.',
      keywords:      [
        'disc herniation Airdrie',
        'bulging disc chiropractor Airdrie',
        'disc bulge treatment Airdrie',
        'Cox Flexion-Distraction disc Airdrie',
        'slipped disc Airdrie Alberta',
      ],
      published:     true,
      priority:      'P1',
      type:          'condition',
      canonicalPath: '/conditions/disc-herniation',
    },

    hero: {
      headline:    'Disc Bulge & Herniation Treatment in Airdrie',
      subheadline: 'Non-surgical treatment for disc bulges, herniations, and pain, numbness or tingling radiating from your back or neck.',
      cta:         { label: 'Get My Personalized Plan', href: 'https://summitspine.ca/booking/' },
      scheme:      1,
    },

    overview:
      'Your spine is made up of bones called vertebrae. Between each vertebra are spinal discs that act as shock absorbers. When they\'re healthy, they give your spine strength and flexibility to help you handle everyday activities like tying your shoes and swinging a golf club. ' +
      'When a disc is damaged, the squishy material in the middle pushes outwards, causing a bulge, rupture, or internal derangement. This can cause a range of symptoms from mild aching in the centre of your back to severe, sharp, shooting pain. If the disc begins to push on nearby nerves or the spinal cord, it can cause numbness, tingling, or weakness. ' +
      'Disc injuries occur most commonly in the lower back and neck, and occasionally in the mid-back. It is important to know that not all disc bulges are painful — many people have disc changes on an MRI without any symptoms at all. Disc injuries often improve over time with appropriate care, and your spine is strong and adaptable. ' +
      'The majority of disc injuries improve without surgery. With proper guidance you can learn how to manage your problem and how to prevent it from recurring — even if your symptoms have been around for a long time.',

    symptoms: [
      'Lower back pain, neck pain, or mid-back pain',
      'Pain travelling into the buttock or leg (sciatica)',
      'Pain travelling down between the shoulder blades, or down the arm',
      'Numbness or tingling in the arms or legs',
      'Muscle weakness such as reduced grip strength or foot drop',
      'Burning, sharp, or electric-type pain',
      'Pain with sitting, bending, lifting, coughing, or sneezing',
      'Stiffness or reduced mobility',
      'Difficulty standing fully upright, especially after sitting for a while',
    ],

    causes: [
      'Repetitive Bending and Lifting — frequent bending, twisting, or being flexed forward for extended periods places increased stress on the discs',
      'Prolonged Sitting — long periods of sitting, especially with poor posture and limited movement, increases the pressure inside the disc',
      'Sudden Heavy Strain — heavy lifting, awkward movements, sports injuries, or unexpected strain can irritate a disc (we\'re talking to you, snow-shovelers and powerlifters!)',
      'Age-Related Changes — as we age, discs naturally lose some hydration and elasticity, which can lead to decreased mobility and stiffness',
      'Deconditioning — when we\'re not physically active, supporting muscles become weaker, making the spine less tolerant to everyday activities',
      'Previous Injuries — past back or neck injuries can increase sensitivity or contribute to recurring flare-ups',
    ],

    treatments: {
      headline: 'Evidence-Based Disc Treatment at Summit Spine Centre',
      scheme:   1,
      items: [
        {
          icon:  'ClipboardList',
          title: 'Comprehensive History & Exam',
          body:  'Why did your disc bulge or herniate? Was it an injury, wear and tear, or a problem that\'s been slowly building? We listen to your story and perform an assessment that tests your capacity and nerve integrity before treating.',
        },
        {
          icon:  'Activity',
          title: 'Cox Flexion-Distraction',
          body:  'A gentle, evidence-based technique used to decompress and move your discs, relieving pressure on nerves while slowly stretching the tissues. This is a unique way to alleviate disc pressure without sudden movements that might cause increased pain.',
        },
        {
          icon:  'HandHeart',
          title: 'Chiropractic Adjustments',
          body:  'When the joints around a disc can\'t move properly, it places stress on the disc. Targeted adjustments restore movement, allow muscles to relax, and reduce the load on the affected area.',
        },
        {
          icon:  'Dumbbell',
          title: 'Targeted Exercises',
          body:  'Disc injuries often require specific movements to take pressure off the discs. We base exercises on what positions are most comfortable for you so you can build strength and prevent future injuries.',
        },
        {
          icon:  'Heart',
          title: 'Lifestyle Modifications',
          body:  'Is most of your day spent sitting at a desk or in a driver\'s seat? We\'ll explore what daily activities may have contributed to your disc injury and offer practical advice to reduce ongoing stress on your spine.',
        },
      ],
    },

    benefits: {
      headline: 'Why Choose Summit Spine Centre for Disc Treatment',
      scheme:   4,
      items: [
        {
          icon:  'Award',
          title: 'One of Few Cox-Certified Clinics in Alberta',
          body:  'Cox Flexion-Distraction is an evidence-based technique specifically designed to relieve pressure on discs. We are among the few certified practitioners of this method in Alberta.',
        },
        {
          icon:  'Activity',
          title: '35+ Years of Spinal Care Experience',
          body:  'Disc-related conditions are among the most common concerns we treat. We\'ve helped hundreds of patients avoid surgery and return to the activities they love.',
        },
        {
          icon:  'Users',
          title: 'A Recovery Plan, Not Just Pain Relief',
          body:  'Your body is capable of adapting and healing. With proper guidance you can learn how to manage your problem and prevent it from recurring — even if symptoms have been around for a long time.',
        },
      ],
    },

    howItWorks: {
      headline: 'What to Expect at Summit Spine Centre',
      scheme:   1,
      steps: [
        {
          step:  1,
          icon:  'MessageCircle',
          title: 'Share Your Story',
          body:  'We begin with a detailed conversation about your symptoms and health history — including what happened, how long it\'s been, and how it\'s affecting your daily life.',
        },
        {
          step:  2,
          icon:  'Search',
          title: 'Nerve & Movement Assessment',
          body:  'Orthopedic, neurological, and movement assessments help confirm the extent of disc involvement and guide the safest, most effective treatment approach.',
        },
        {
          step:  3,
          icon:  'ClipboardList',
          title: 'Tailored Care Plan',
          body:  'We explain our findings in plain language and build a plan around your goals and comfort level — including Cox Flexion-Distraction, adjustments, exercises, and lifestyle guidance as appropriate.',
        },
        {
          step:  4,
          icon:  'TrendingUp',
          title: 'Recovery with Confidence',
          body:  'We track your progress and adjust the plan as you improve. If your needs would be better met elsewhere, we\'ll refer you to the right provider.',
        },
      ],
    },

    testimonials: {
      scheme: 4,
      items:  [],
    },

    faqs: {
      scheme: 1,
      items: [
        { question: 'What is the difference between a disc bulge and a disc herniation?', answer: 'A disc bulge refers to when the disc begins to push outward toward the nerves without rupturing — the "jelly" inside the disc stays inside. A disc herniation occurs when the inner material leaks outside of the disc. Both can cause nerve pain, but herniated discs tend to cause more severe symptoms.' },
        { question: 'Can a disc bulge or disc herniation heal on its own?',               answer: 'Most disc injuries will heal without surgery. With appropriate movement, activity modification, and conservative care, the body is often capable of adapting and calming sensitive tissues naturally.' },
        { question: 'Does a disc bulge always cause pain?',                               answer: 'No. Many people have disc bulges visible on MRI without any pain or symptoms at all. Imaging findings do not always match symptom severity.' },
        { question: 'What does nerve pain from a disc injury feel like?',                 answer: 'Nerve irritation may cause symptoms such as burning, sharp, electric, tingling, numb, or radiating pain into the arm or leg.' },
        { question: 'Is walking good for a disc herniation?',                             answer: 'For many people, gentle walking can help improve circulation, reduce stiffness, and support recovery. The best activities depend on the individual and the stage of irritation.' },
        { question: 'Can chiropractic care help sciatica caused by a disc injury?',       answer: 'Chiropractic care may help improve mobility, reduce irritation around sensitive structures, and support recovery in many cases of disc-related sciatica.' },
        { question: 'When should I seek medical attention for a disc injury?',            answer: 'Immediate medical attention is important if symptoms involve loss of bowel or bladder control, significant or worsening weakness, severe numbness around the groin, or rapidly worsening neurological symptoms.' },
        { question: 'Do all disc herniations require surgery?',                           answer: 'No. Most disc injuries improve with conservative care and do not require surgery. Surgical consultation may be appropriate in certain situations depending on symptom severity, neurological findings, and response to care.' },
        { question: 'How long does recovery from a disc injury take?',                    answer: 'Recovery timelines vary depending on severity and individual factors. Some people improve within weeks, while others may require a longer rehabilitation approach. Severe symptoms may last a number of weeks, but the disc itself may require 3–6 months to fully heal.' },
      ],
    },

    cta: {
      headline: 'Don\'t live with it — book today.',
      scheme:   4,
      cta:      { label: 'Get My Personalized Plan', href: 'https://summitspine.ca/booking/' },
    },

    relatedConditions: ['low-back-pain', 'sciatica'],

    structuredData: {
      conditionName:     'Disc Herniation / Bulging Disc',
      description:       'A disc herniation or bulging disc occurs when the material inside a spinal disc pushes outward, potentially pressing on nearby nerves and causing pain, numbness, or weakness in the back, arms, or legs.',
      possibleTreatment: 'Cox Flexion-Distraction, Chiropractic Care',
    },
  },
  'neck-pain': {
    meta: {
      slug:          'neck-pain',
      title:         'Neck Pain Treatment Airdrie | Summit Spine Centre',
      description:   'Neck pain treatment in Airdrie, Alberta. From stiffness and tech neck to disc problems and nerve pain, Summit Spine Centre provides personalized chiropractic care.',
      keywords:      [
        'neck pain Airdrie',
        'neck pain chiropractor Airdrie',
        'neck pain treatment Airdrie',
        'stiff neck Airdrie Alberta',
        'cervical pain chiropractor Airdrie',
      ],
      published:     true,
      priority:      'P1',
      type:          'condition',
      canonicalPath: '/conditions/neck-pain',
    },

    hero: {
      headline:    'Neck Pain Care in Airdrie',
      subheadline: 'Hours of desk work or driving causing your neck to hurt? Maybe it\'s getting harder to shoulder check. You don\'t have to live with it — we assess and treat neck pain with different approaches.',
      cta:         { label: 'Get My Personalized Plan', href: 'https://summitspine.ca/booking/' },
      scheme:      1,
    },

    overview:
      'Neck pain refers to discomfort, stiffness, tension or pain felt in the cervical spine, which includes the muscles, joints, discs, nerves, and supporting structures of the neck. ' +
      'Some people experience a dull ache or tightness, while others notice sharp pain, headaches, muscle tension, or symptoms traveling into the shoulders or arms. Neck pain may develop after an injury or awkward movement, but it can also build gradually from posture habits, repetitive stress, or age-related changes. ' +
      'Because the neck supports the weight of the head while allowing a large amount of movement, it is especially vulnerable to irritation and strain. ' +
      'The good news is that many cases of neck pain respond well to conservative care and appropriate movement. Even when symptoms have been present for a long time, we have helped many people improve their mobility, reduce discomfort, and begin living life fully again. ' +
      'In many cases, neck pain does not mean serious damage is present. The neck is a strong and adaptable part of the body that often responds well to the right combination of movement, education, and supportive care.',

    symptoms: [
      'Stiffness or tightness in the neck',
      'Pain when turning or tilting the head',
      'Muscle tension or spasms',
      'Headaches that begin in the neck or base of the skull',
      'Pain between the shoulder blades',
      'Pain that travels into the shoulder or arm',
      'Numbness or tingling into the arm or hand',
      'Reduced neck mobility',
      'Difficulty finding a comfortable sleeping position',
      'Increased discomfort after desk work or prolonged screen time',
    ],

    causes: [
      'Muscle Strain and Tension — poor posture, stress, prolonged sitting, repetitive movements, or awkward sleeping positions can irritate muscles and soft tissues around the neck',
      'Joint Restrictions — the joints of the cervical spine can become stiff or irritated, contributing to pain, reduced mobility, and muscle guarding',
      'Disc Problems — discs in the neck can become irritated, bulged, or herniated, sometimes causing pain, numbness, tingling, or weakness into the shoulder or arm',
      'Whiplash and Injuries — motor vehicle accidents, sports injuries, falls, or sudden movements can strain muscles, ligaments, and joints of the neck',
      'Poor Posture and Ergonomics — long hours looking down at phones, working at computers, or sitting without proper support places increased stress on the neck over time',
      'Arthritis and Degeneration — natural age-related changes can affect the joints and discs of the neck, sometimes leading to stiffness, irritation, or reduced mobility',
      'Stress and Tension — emotional stress may contribute to increased muscle tension in the neck and shoulders, especially during busy or demanding periods',
    ],

    treatments: {
      headline: 'How Summit Spine Centre Treats Neck Pain',
      scheme:   1,
      items: [
        {
          icon:  'ClipboardList',
          title: 'Comprehensive History & Exam',
          body:  'We want to know about you, your day-to-day, and what may have happened leading up to the neck pain. Was there an injury? Did it come on suddenly? We\'ll ask the right questions and then perform a thorough exam to figure out the "why" behind your neck pain. Once we know why, we can treat.',
        },
        {
          icon:  'Activity',
          title: 'Cox Flexion-Distraction',
          body:  'A gentle, evidence-based technique used to decompress the neck and relieve pressure on nerves while stretching the tissues. We can move the joints in a way that doesn\'t require the "crack" — perfect if you prefer a gentler approach.',
        },
        {
          icon:  'HandHeart',
          title: 'Chiropractic Adjustments',
          body:  'Sometimes the joints are truly stuck and need to move. This treatment restores motion to restricted cervical joints and can provide fast, effective relief.',
        },
        {
          icon:  'Dumbbell',
          title: 'Targeted Exercises & Stretches',
          body:  'Depending on why you\'re having neck pain, we\'ll choose exercises and stretches to mobilize and support the neck — and help keep the pain from coming back.',
        },
        {
          icon:  'Heart',
          title: 'Lifestyle Modifications',
          body:  'Maybe it\'s a non-optimal ergonomic setup at work, or driving with your head forward. We\'ll identify what\'s loading your neck in daily life and provide practical strategies to reduce that strain.',
        },
      ],
    },

    benefits: {
      headline: 'Why Choose Summit Spine Centre for Neck Pain',
      scheme:   4,
      items: [
        {
          icon:  'Award',
          title: '35+ Years Serving Airdrie',
          body:  'Whether it\'s your first time or the tenth time dealing with neck pain, our goal is to understand why it keeps happening so we can treat appropriately and help prevent it from recurring.',
        },
        {
          icon:  'Activity',
          title: 'Specialized Cervical Care',
          body:  'We use multiple evidence-based approaches — including Cox Flexion-Distraction and targeted adjustments — to address the specific structures contributing to your neck pain.',
        },
        {
          icon:  'Users',
          title: 'Personal to You',
          body:  'Our goal is not just temporary relief but to equip you with the skills needed to return to the activities that matter most — with confidence and lasting results.',
        },
      ],
    },

    howItWorks: {
      headline: 'What to Expect at Summit Spine Centre',
      scheme:   1,
      steps: [
        {
          step:  1,
          icon:  'MessageCircle',
          title: 'Tell Us Your Story',
          body:  'Your first visit starts with a detailed conversation about your symptoms and health history. We want to understand what\'s going on, how it\'s impacting your life, and where you\'d like to be.',
        },
        {
          step:  2,
          icon:  'Search',
          title: 'Thorough Assessment',
          body:  'Orthopedic, neurological, and movement assessments help us identify what is actually causing your neck pain — so we can treat the cause, not just the symptom.',
        },
        {
          step:  3,
          icon:  'ClipboardList',
          title: 'Clear, Personalized Plan',
          body:  'We explain our findings in plain language and recommend a plan tailored to your goals and comfort level.',
        },
        {
          step:  4,
          icon:  'TrendingUp',
          title: 'Treatment & Progress',
          body:  'We get to work and track your progress. If chiropractic care isn\'t the right fit, we\'ll connect you with a trusted provider in our community.',
        },
      ],
    },

    testimonials: {
      scheme: 4,
      items:  [],
    },

    faqs: {
      scheme: 1,
      items: [
        { question: 'Is neck pain common?',                                          answer: 'Yes. Neck pain is extremely common and affects people of all ages and activity levels. It is especially common among people who spend long hours sitting, driving, using computers, or looking down at phones.' },
        { question: 'What is the best way to relieve neck pain?',                    answer: 'The best approach depends on what may be contributing to your symptoms. Many people improve with a combination of gentle movement, posture changes, exercise, activity modification, and conservative care aimed at improving mobility and reducing irritation.' },
        { question: 'Can poor posture cause neck pain?',                             answer: 'Poor posture may increase stress on the muscles and joints of the neck over time, particularly during prolonged sitting or screen use. Forward head posture and repetitive positions can contribute to muscle tension and stiffness.' },
        { question: 'Why does neck pain sometimes cause headaches?',                 answer: 'The muscles, joints, and nerves of the upper neck are closely connected to the head. Irritation or tension in these structures may contribute to headaches that often begin near the base of the skull and spread toward the forehead or behind the eyes.' },
        { question: 'How can I tell if my neck pain is muscular or nerve-related?',  answer: 'Muscular neck pain is often described as tight, sore, stiff, or achy and usually stays localized around the neck and shoulders. Nerve-related symptoms may feel sharp, burning, electric, or radiating into the shoulder, arm, or hand. Numbness, tingling, or weakness may also be present.' },
        { question: 'What exercises may help neck pain?',                            answer: 'Gentle mobility and strengthening exercises are commonly recommended. Depending on the individual, exercises may focus on posture, flexibility, shoulder blade control, and improving the strength and endurance of supporting muscles.' },
        { question: 'What sleeping position is best for neck pain?',                 answer: 'Many people find sleeping on their back or side more comfortable than sleeping on their stomach. Using a supportive pillow that keeps the neck in a more neutral position may also help reduce strain during sleep.' },
        { question: 'When should I seek professional help for neck pain?',           answer: 'It may be helpful to seek an assessment if your neck pain is persistent, worsening, interfering with daily activities, or associated with symptoms such as numbness, tingling, weakness, headaches, dizziness, or pain traveling into the arm.' },
        { question: 'How is neck pain usually treated?',                             answer: 'Treatment often focuses on improving movement, reducing irritation, and supporting recovery. Conservative care may include chiropractic care, mobility work, soft tissue therapy, strengthening exercises, ergonomic changes, and activity modification.' },
        { question: 'Can a bulging disc in the neck heal?',                          answer: 'Many disc-related neck conditions improve over time with appropriate movement, activity modification, and conservative care. Recovery timelines vary depending on the individual and severity of the condition.' },
        { question: 'Is it normal for my neck to crack or pop?',                    answer: 'In many cases, occasional cracking or popping sounds are harmless and related to pressure changes within the joints. These sounds are not always a sign of damage.' },
        { question: 'How long does neck pain usually take to improve?',              answer: 'Recovery time varies depending on the cause and severity. Mild irritation may improve within days or weeks, while more persistent or complex conditions may take longer.' },
        { question: 'Can chiropractic care help neck pain?',                         answer: 'Chiropractic care may help improve mobility, reduce muscle tension, support healthy movement patterns, and improve overall neck function. Treatment is tailored to the individual and their comfort level.' },
        { question: 'Do I need imaging for neck pain?',                              answer: 'Not always. Many cases of neck pain can be assessed effectively through a detailed history and physical examination. Imaging such as X-rays or MRI may be recommended in certain situations depending on symptoms, history, and examination findings.' },
      ],
    },

    cta: {
      headline: 'Don\'t live with it — book today.',
      scheme:   4,
      cta:      { label: 'Get My Personalized Plan', href: 'https://summitspine.ca/booking/' },
    },

    relatedConditions: ['tech-neck', 'headaches-migraines'],

    structuredData: {
      conditionName:     'Neck Pain',
      description:       'Neck pain refers to discomfort, stiffness, tension or pain in the cervical spine. It can range from a dull ache to sharp pain and may travel into the shoulders, arms, or cause headaches.',
      possibleTreatment: 'Chiropractic Care, Cox Flexion-Distraction',
    },
  },
  'back-pain': {
    meta: {
      slug:          'back-pain',
      title:         'Arthritis & Degenerative Disc Disease Airdrie | Summit Spine Centre',
      description:   'Chiropractic care for arthritis, degenerative disc disease, and degenerative joint disease in Airdrie. Stay active and mobile with the right combination of movement, education, and supportive care.',
      keywords:      [
        'arthritis chiropractor Airdrie',
        'degenerative disc disease Airdrie',
        'DDD treatment Airdrie',
        'DJD chiropractor Airdrie',
        'back pain Airdrie',
        'spinal arthritis Airdrie Alberta',
      ],
      published:     true,
      priority:      'P1',
      type:          'condition',
      canonicalPath: '/conditions/back-pain',
    },

    hero: {
      headline:    'Arthritis & Degenerative Disc Disease Treatment in Airdrie',
      subheadline: 'Arthritis and age-related spinal changes are extremely common and often become more noticeable over time. While these terms can sound scary, these problems can be well-managed — you can stay active, mobile, and independent.',
      cta:         { label: 'Get My Personalized Plan', href: 'https://summitspine.ca/booking/' },
      scheme:      1,
    },

    overview:
      'Arthritis is a general term used to describe changes involving the joints of the body. In the spine, these changes often involve the discs, joints, cartilage, and surrounding tissues. ' +
      'Degenerative Disc Disease (DDD) refers to age-related changes in the spinal discs, including reduced hydration and disc height over time. Degenerative Joint Disease (DJD), sometimes called osteoarthritis or spinal arthritis, refers to wear-and-tear changes involving the joints of the spine. ' +
      'These changes are a normal part of aging and are extremely common, especially as people get older. As we increase in wisdom, we gain wrinkles on our skin — and we may also develop "wrinkles on the inside." ' +
      'It is important to know that many people with arthritis have little or no pain, imaging findings do not always match symptom severity, "degeneration" does not necessarily mean damage or disability, and movement and activity are often very helpful for managing symptoms. ' +
      'Many people continue to live active, healthy lives despite having these changes.',

    symptoms: [
      'Stiffness in the neck or back',
      'Aching pain with prolonged sitting or standing',
      'Reduced flexibility or mobility',
      'Morning stiffness that improves with movement',
      'Joint tenderness or soreness',
      'Muscle tightness or tension',
      'Pain during certain movements or activities',
      'Clicking, grinding, or cracking sensations',
      'Pain travelling into the hips, shoulders, arms, or legs in some cases',
      'Symptoms that gradually worsen over time or flare periodically',
    ],

    causes: [
      'Natural Age-Related Changes — the discs and joints of the spine naturally change over time, similar to wrinkles or grey hair. Over time, discs reduce their ability to hold water and begin to flatten and stiffen',
      'Repetitive Stress and Wear — years of bending, lifting, repetitive movement, or physical labour may increase stress on spinal joints and discs',
      'Previous Injuries — past injuries or trauma may contribute to changes in joint mechanics or spinal loading over time',
      'Reduced Mobility and Deconditioning — limited movement, weakness, or reduced physical activity may contribute to stiffness and reduced spinal support',
      'Posture and Movement Habits — poor movement patterns or prolonged positions may place increased stress on certain joints over time',
      'Genetics — some people inherit an increased likelihood of developing arthritic or degenerative changes, similar to the colour of hair and eyes',
      'Inflammation and Lifestyle Factors — sleep quality, stress, activity levels, smoking, and overall health all influence development; even small improvements in any category can help',
    ],

    treatments: {
      headline: 'How Summit Spine Centre Treats Arthritis & Degenerative Disc Disease',
      scheme:   1,
      items: [
        {
          icon:  'ClipboardList',
          title: 'Comprehensive History & Exam',
          body:  'We want to know about your story — how long you\'ve been experiencing symptoms, what makes them better or worse, and how they\'re affecting your daily life. A thorough orthopedic, neurological, and movement assessment helps us understand the degree of change and guide your care appropriately.',
        },
        {
          icon:  'Activity',
          title: 'Cox Flexion-Distraction',
          body:  'A gentle, evidence-based technique that helps decompress the spine and reduce pressure on arthritic joints and irritated nerves. This approach is especially beneficial for those with DDD or DJD as it doesn\'t require forceful movements — making it comfortable even for sensitive spines.',
        },
        {
          icon:  'HandHeart',
          title: 'Chiropractic Adjustments',
          body:  'Targeted adjustments help restore mobility to restricted spinal joints, reduce muscle guarding, and improve overall spinal function. Treatment is always tailored to your comfort level and the specific joints involved.',
        },
        {
          icon:  'Dumbbell',
          title: 'Mobility & Strengthening Exercises',
          body:  'Movement is medicine for arthritic joints. We\'ll prescribe specific exercises focused on improving flexibility, building strength in the supporting muscles, and helping you stay active and independent long-term.',
        },
        {
          icon:  'Heart',
          title: 'Lifestyle & Activity Guidance',
          body:  'Practical recommendations on posture, activity modification, ergonomics, and daily habits that reduce joint irritation and help you get more out of each day — without working against your body.',
        },
      ],
    },

    benefits: {
      headline: 'Why Choose Summit Spine Centre for Arthritis & Degenerative Disc Disease',
      scheme:   4,
      items: [
        {
          icon:  'Award',
          title: '35+ Years of Spinal Care Experience',
          body:  'Arthritis and degenerative disc disease are among the most common conditions we see. Decades of experience means we\'ve helped many people stay active, reduce flare-ups, and maintain their independence.',
        },
        {
          icon:  'Activity',
          title: 'Cox FD — Gentle Care for Sensitive Spines',
          body:  'Cox Flexion-Distraction is one of the most effective and gentle conservative treatments for arthritic and degenerative spinal conditions. We use it to decompress the spine without forceful movements.',
        },
        {
          icon:  'Users',
          title: 'Care Tailored to Your Goals',
          body:  'Your symptoms, your pace, and your goals guide the plan we build together. Whether you want to walk farther, sleep better, or simply move without pain — we\'re here to help you get there.',
        },
      ],
    },

    howItWorks: {
      headline: 'What to Expect at Summit Spine Centre',
      scheme:   1,
      steps: [
        {
          step:  1,
          icon:  'MessageCircle',
          title: 'Tell Us Your Story',
          body:  'Your first visit starts with a detailed conversation about your symptoms and health history. We want to understand what\'s going on, how it\'s impacting your daily life, and where you\'d like to be.',
        },
        {
          step:  2,
          icon:  'Search',
          title: 'Thorough Assessment',
          body:  'Orthopedic, neurological, and movement assessments help us understand the degree of arthritic change and identify the most appropriate approach to care for your situation.',
        },
        {
          step:  3,
          icon:  'ClipboardList',
          title: 'Clear, Personalized Plan',
          body:  'We explain our findings in plain language and recommend a care plan tailored to your goals, comfort level, and the specific nature of your condition.',
        },
        {
          step:  4,
          icon:  'TrendingUp',
          title: 'Treatment & Ongoing Support',
          body:  'We track your progress over time and adjust the plan as you improve. If your needs are better met elsewhere, we\'ll connect you with a trusted provider in the community.',
        },
      ],
    },

    testimonials: {
      scheme: 4,
      items:  [],
    },

    faqs: {
      scheme: 1,
      items: [
        { question: 'What is the difference between arthritis, DDD, and DJD?',    answer: 'These terms all describe age-related changes in the spine or joints. DDD refers primarily to changes involving the spinal discs, while DJD refers more to changes involving the joints. Arthritis is a broader term often used to describe joint degeneration and inflammation.' },
        { question: 'Is arthritis a normal part of aging?',                        answer: 'Some degree of change in our joints is very common as we age. Many people develop arthritic changes over time. It can sometimes be accelerated through lifestyle, genetics, or previous injury.' },
        { question: 'Does arthritis always get worse?',                            answer: 'Not necessarily. Symptoms may fluctuate over time, and many people are very successful at managing their symptoms with movement, exercise, and healthy lifestyle habits.' },
        { question: 'Can arthritis cause nerve pain?',                             answer: 'In some cases, arthritic or degenerative changes may narrow the spaces around nearby nerves, potentially contributing to numbness, tingling, weakness, or radiating pain — a condition called spinal stenosis.' },
        { question: 'Should I avoid exercise if I have arthritis?',                answer: 'In many cases, movement and exercise are some of the best things for arthritic joints. Appropriate exercise may help improve strength, flexibility, circulation, and overall function. Motion is lotion!' },
        { question: 'Is cracking or grinding in my joints dangerous?',             answer: 'Not always. Clicking, cracking, or grinding sounds are common and do not necessarily mean damage is occurring.' },
        { question: 'Can chiropractic care help arthritis?',                       answer: 'Chiropractic care may help improve mobility, reduce stiffness, support movement, and improve overall function in some individuals with arthritic changes.' },
        { question: 'Do I need imaging for arthritis or DDD?',                    answer: 'Not always. Many cases can be assessed through a detailed history and physical examination. Imaging may sometimes help confirm degenerative changes or rule out other conditions depending on the situation.' },
        { question: 'Can disc degeneration heal?',                                answer: 'Age-related disc changes are generally not reversible, but symptoms can often improve significantly. Many people are able to function well and remain active despite degenerative changes.' },
      ],
    },

    cta: {
      headline: 'Don\'t live with it — book today.',
      scheme:   4,
      cta:      { label: 'Get My Personalized Plan', href: 'https://summitspine.ca/booking/' },
    },

    relatedConditions: ['low-back-pain', 'spinal-stenosis'],

    structuredData: {
      conditionName:     'Arthritis / Degenerative Disc Disease',
      description:       'Arthritis, DDD, and DJD describe age-related changes in spinal discs and joints that can cause stiffness, aching pain, and reduced mobility. Many people manage these conditions well with movement, exercise, and conservative care.',
      possibleTreatment: 'Chiropractic Care, Cox Flexion-Distraction',
    },
  },
  'headaches-migraines': {
    meta: {
      slug:          'headaches-migraines',
      title:         'Headache & Migraine Treatment Airdrie | Summit Spine Centre',
      description:   'Chiropractic headache and migraine treatment in Airdrie. We address tension headaches, cervicogenic headaches, and migraines at the source — not just the symptoms.',
      keywords:      [
        'headache chiropractor Airdrie',
        'migraine relief Airdrie',
        'tension headache treatment Airdrie',
        'cervicogenic headache Airdrie',
        'headache migraine Airdrie Alberta',
      ],
      published:     true,
      priority:      'P2',
      type:          'condition',
      canonicalPath: '/conditions/headaches-migraines',
    },

    hero: {
      headline:    'Headache and Migraine Treatment in Airdrie',
      subheadline: 'Stop dealing with headaches or migraines and treat the cause. We provide safe and effective treatment for many types of headaches, migraines, and neck-related pain.',
      cta:         { label: 'Get My Personalized Plan', href: 'https://summitspine.ca/booking/' },
      scheme:      1,
    },

    overview:
      'Headaches and migraines can range from mild to completely debilitating. They can affect much more than just your head, interfering with your relationships, productivity at work, sleep, and overall concentration. Understanding what may be causing them is an important step toward finding relief. ' +
      'While all migraines are considered headaches, not all headaches are migraines. Many common headaches involve pressure, tightness, or aching pain around the head, neck, or forehead — often linked to muscle tension, stress, posture, fatigue, or irritation in the neck and upper back. ' +
      'Migraines are typically more complex and may involve neurological symptoms in addition to head pain, including throbbing or pulsating pain, sensitivity to light or sound, nausea, dizziness, or visual disturbances called "auras." Migraines may last for hours or even days and can significantly interfere with daily life. ' +
      'The good news is that many people experience significant improvement with the right combination of care, lifestyle modifications, and movement strategies. Identifying contributing factors can often help reduce the frequency, intensity, or duration of symptoms.',

    symptoms: [
      'Pressure or tightness around the head',
      'Pain at the base of the skull',
      'Throbbing or pulsating head pain',
      'Pain behind the eyes',
      'Neck stiffness or tension',
      'Sensitivity to light or sound',
      'Nausea or dizziness',
      'Difficulty concentrating',
      'Visual disturbances or "auras"',
      'Pain that worsens with stress, screen time, or physical activity',
      'Tenderness in the neck, shoulders, or scalp',
    ],

    causes: [
      'Muscle Tension and Joint Restrictions — tension in the muscles and joints of the neck and upper back may contribute to headaches, particularly those that begin near the base of the skull',
      'Stress and Fatigue — physical and emotional stress, poor sleep, and fatigue can all increase tension and sensitivity within the nervous system',
      'Poor Posture and Screen Time — long hours at computers, looking down at phones, or prolonged sitting places increased strain on the neck and surrounding muscles',
      'Jaw Tension and Clenching — grinding teeth or clenching the jaw may contribute to tension through the jaw, face, neck, and head',
      'Dehydration and Lifestyle Factors — hydration, nutrition, caffeine intake, stress levels, and changes in routine may all influence headache frequency or intensity',
      'Previous Injuries — concussions, whiplash injuries, and previous trauma may contribute to recurring headaches in some individuals',
      'Sinus and Medical Causes — some headaches may be related to sinus irritation, illness, blood pressure changes, or other medical conditions that may require medical evaluation',
      'Weather Changes and Chinooks — changes in barometric pressure, which are quite common in Southern Alberta, can cause changes in our body\'s systems that result in headaches and migraines',
    ],

    treatments: {
      headline: 'Summit Spine Centre\'s Approach to Headaches and Migraines in Airdrie',
      scheme:   1,
      items: [
        {
          icon:  'ClipboardList',
          title: 'Comprehensive History & Exam',
          body:  'We want to know the details about your headache. We\'ll listen to your story, ask follow-up questions, and then perform a thorough exam that allows us to figure out the "why" behind your headache. Once we know why, we can treat.',
        },
        {
          icon:  'Activity',
          title: 'Cox Flexion-Distraction',
          body:  'A gentle, evidence-based technique used to decompress the spine and relieve pressure on nerves. We can move the joints in a way that doesn\'t require the "crack" — especially helpful for headaches originating from the neck and upper back.',
        },
        {
          icon:  'HandHeart',
          title: 'Chiropractic Adjustments',
          body:  'When cervical joints are stuck, they create inflammation and tension that can radiate into the head. Targeted adjustments restore movement and can significantly reduce headache frequency and severity.',
        },
        {
          icon:  'Dumbbell',
          title: 'Targeted Exercises',
          body:  'Depending on what\'s causing your headaches, exercises can be used to support the neck and reduce both the frequency (how often) and severity (how bad) of your headaches.',
        },
        {
          icon:  'Heart',
          title: 'Lifestyle Modifications',
          body:  'If your headache type has typical triggers you may not be aware of, we\'ll discuss small changes you can implement into your day that over time will aid in relief.',
        },
      ],
    },

    benefits: {
      headline: 'Why Choose Summit Spine Centre for Headache Treatment',
      scheme:   4,
      items: [
        {
          icon:  'Award',
          title: '35+ Years Serving Airdrie',
          body:  'Decades of experience treating headaches, migraines, and neck-related pain right here in Airdrie. We\'ve helped patients reduce the frequency, severity, and duration of their symptoms.',
        },
        {
          icon:  'Search',
          title: 'We Find the Cause',
          body:  'There\'s just treating pain, and there\'s understanding why these headaches keep coming back. Knowing the root cause allows us to help you get rid of them — not just manage them.',
        },
        {
          icon:  'Users',
          title: 'Care Tailored to You',
          body:  'Treatment is always tailored to the individual. Your symptoms, your triggers, and your comfort level all guide the plan we build together.',
        },
      ],
    },

    howItWorks: {
      headline: 'What to Expect at Summit Spine Centre',
      scheme:   1,
      steps: [
        {
          step:  1,
          icon:  'MessageCircle',
          title: 'Tell Us Your Story',
          body:  'Your first visit starts with a detailed conversation about your headaches — what they feel like, how often they occur, what seems to trigger them, and how they\'re affecting your daily life.',
        },
        {
          step:  2,
          icon:  'Search',
          title: 'Thorough Assessment',
          body:  'Orthopedic, neurological, and movement assessments help identify contributing factors — from neck joint restrictions to postural strain — so we can target care appropriately.',
        },
        {
          step:  3,
          icon:  'ClipboardList',
          title: 'Clear Recommendations',
          body:  'We explain our findings in plain language and recommend a care plan focused on reducing your headaches and the factors that drive them.',
        },
        {
          step:  4,
          icon:  'TrendingUp',
          title: 'Treatment & Ongoing Support',
          body:  'We track your progress and adjust the plan as you improve. If your needs would be better met by another specialist, we\'ll make the referral.',
        },
      ],
    },

    testimonials: {
      scheme: 4,
      items:  [],
    },

    faqs: {
      scheme: 1,
      items: [
        { question: 'What is the difference between a headache and a migraine?',        answer: 'Headaches often involve pressure, tightness, or aching pain around the head, face, or neck. Migraines are typically more intense and may include throbbing pain, nausea, dizziness, sensitivity to light or sound, or visual disturbances called "auras." Migraines can also interfere more significantly with daily activities and may last for hours or even days.' },
        { question: 'What are common migraine triggers?',                               answer: 'Migraine triggers can vary from person to person. Common triggers may include stress, poor sleep, dehydration, hormonal changes, skipped meals, certain foods, bright lights, strong smells, weather changes, or prolonged screen time.' },
        { question: 'Can neck tension cause headaches?',                                answer: 'Yes. Tension or irritation in the muscles and joints of the neck and upper back may contribute to headaches, especially those that begin near the base of the skull and spread toward the head or behind the eyes.' },
        { question: 'Can poor posture contribute to headaches?',                        answer: 'Poor posture may place increased strain on the muscles and joints of the neck and shoulders over time. Long periods spent at a computer, looking down at phones, or sitting without proper support can contribute to tension-related headaches.' },
        { question: 'What does a tension headache feel like?',                          answer: 'Tension headaches are often described as a dull ache, pressure, or tight band around the head. Many people also notice tightness in the neck, shoulders, or jaw.' },
        { question: 'What does a migraine feel like?',                                  answer: 'Migraines often involve throbbing or pulsating pain and may occur on one or both sides of the head. Some people also experience nausea, dizziness, visual changes, sensitivity to light or sound, or increased pain with movement.' },
        { question: 'Can stress cause headaches or migraines?',                         answer: 'Stress is one of the most common contributors to headaches and migraines. Physical and emotional stress may increase muscle tension, nervous system sensitivity, and overall symptom intensity.' },
        { question: 'When should I seek professional help for headaches or migraines?', answer: 'It may be helpful to seek an assessment if headaches are frequent, worsening, interfering with daily activities, or associated with symptoms such as numbness, weakness, dizziness, vision changes, balance problems, or persistent neck pain. Sudden severe headaches or headaches following trauma should also be medically evaluated.' },
        { question: 'How are headaches and migraines usually treated?',                 answer: 'Treatment depends on the type and cause. Conservative care may include exercise, stress management, improving sleep and posture, hydration, ergonomic changes, soft tissue therapy, chiropractic care, and movement-based rehabilitation. Some people may also require medical management depending on the severity and frequency of symptoms.' },
        { question: 'Can chiropractic care help headaches and migraines?',              answer: 'Chiropractic care may help some individuals by improving neck and upper back mobility, reducing muscle tension, addressing postural strain, and supporting overall spinal function. Treatment is always tailored to the individual and their comfort level.' },
        { question: 'What exercises may help headaches?',                               answer: 'Exercises focused on posture, neck mobility, shoulder blade control, stretching, and strengthening the supporting muscles of the neck and upper back may help. The best exercises depend on the individual and the contributing factors involved.' },
        { question: 'Do I need imaging for headaches or migraines?',                   answer: 'Not always. Many headaches and migraines can be assessed effectively through a detailed health history and physical examination. Imaging such as MRI or CT scans may be recommended in certain situations depending on symptoms, neurological findings, or medical history.' },
        { question: 'How long does it take for headaches or migraines to improve?',    answer: 'Recovery timelines vary depending on the type and contributing factors. Some people notice improvement quickly, while others require a longer-term approach focused on managing triggers, improving movement, and reducing irritation over time.' },
      ],
    },

    cta: {
      headline: 'Don\'t live with it — book today.',
      scheme:   4,
      cta:      { label: 'Get My Personalized Plan', href: 'https://summitspine.ca/booking/' },
    },

    relatedConditions: ['neck-pain', 'tech-neck'],

    structuredData: {
      conditionName:     'Headache / Migraine',
      description:       'Headaches and migraines can range from mild to completely debilitating, affecting relationships, productivity, sleep, and concentration. Many are related to neck tension, posture, and lifestyle factors.',
      possibleTreatment: 'Chiropractic Care, Cox Flexion-Distraction',
    },
  },
  'spinal-stenosis': {
    meta: {
      slug:          'spinal-stenosis',
      title:         'Spinal Stenosis Treatment Airdrie | Summit Spine Centre',
      description:   'Non-surgical spinal stenosis treatment in Airdrie. Cox Flexion-Distraction gently decompresses the spine, creating more space for nerves so you can walk farther and live more fully.',
      keywords:      [
        'spinal stenosis Airdrie',
        'spinal stenosis chiropractor Airdrie',
        'spinal stenosis treatment Airdrie',
        'lumbar stenosis Airdrie Alberta',
        'spinal canal narrowing Airdrie',
      ],
      published:     true,
      priority:      'P2',
      type:          'condition',
      canonicalPath: '/conditions/spinal-stenosis',
    },

    hero: {
      headline:    'Spinal Stenosis Treatment in Airdrie',
      subheadline: 'Do you find that you can only walk so far before your back or legs start to ache, and when you sit down it goes away quite quickly? Don\'t let stenosis get in the way of living your life.',
      cta:         { label: 'Get My Personalized Plan', href: 'https://summitspine.ca/booking/' },
      scheme:      1,
    },

    overview:
      'Spinal stenosis refers to a narrowing of the tunnels within the spine that protect your nerves and spinal cord. When these spaces are narrowed, it can place pressure on the nerves and disrupt how they function, leading to pain, numbness, tingling and weakness. ' +
      'Stenosis most commonly develops gradually over time as discs, joints, and surrounding tissues naturally change with age. In many cases, the body adapts well, and some people have stenosis on imaging without significant symptoms. However, in other cases it can cause a wide array of symptoms including numbness, burning, weakness, and challenges with balance. ' +
      'Spinal stenosis is most common in the lower back (lumbar stenosis), though it can also occur in the neck (cervical stenosis). Many people with spinal stenosis notice symptoms during walking or standing that improve when sitting, leaning forward, or resting. ' +
      'The good news is that many people with spinal stenosis improve without surgery. While the structural narrowing itself may not fully reverse, symptoms and function can often improve significantly — with the right combination of movement, education, exercise, and conservative care.',

    symptoms: [
      'Lower back or neck pain',
      'Pain traveling into the buttocks or legs',
      'Numbness or tingling into the legs or arms',
      'Heaviness, fatigue, or weakness in the legs while walking',
      'Cramping or burning pain with prolonged standing or walking',
      'Symptoms that improve with sitting or bending forward',
      'Reduced walking tolerance',
      'Trouble with balance',
      'Stiffness or reduced spinal mobility',
    ],

    causes: [
      'Arthritis and Degeneration — changes involving the joints, discs, and surrounding tissues may gradually narrow the spaces around nearby nerves',
      'Disc Bulges or Herniations — bulging or thickened discs may contribute to narrowing within the spinal canal or around nerve openings',
      'Bone Spurs — the body may develop extra bone around arthritic joints over time, which can reduce the space available for nerves',
      'Thickened Ligaments — supporting ligaments within the spine may thicken with age and contribute to narrowing',
      'Degenerative Disc Disease — loss of disc height over time may change how forces move through the spine and reduce available space for nerves',
      'Previous Injuries or Surgeries — past spinal injuries or surgeries may contribute to structural changes in some individuals',
      'Congenital Narrowing — some people are naturally born with a narrower spinal canal, which may make symptoms more likely later in life',
    ],

    treatments: {
      headline: 'How Summit Spine Centre Treats Spinal Stenosis',
      scheme:   1,
      items: [
        {
          icon:  'ClipboardList',
          title: 'Comprehensive History & Exam',
          body:  'We begin with a detailed conversation about your symptoms — how far you can walk, what makes it better or worse, and how it\'s affecting your daily life. A thorough orthopedic, neurological, and movement assessment helps us understand the extent of nerve involvement and guide treatment.',
        },
        {
          icon:  'Activity',
          title: 'Cox Flexion-Distraction',
          body:  'Our primary approach for spinal stenosis. This gentle technique works by decompressing your spine, increasing the space for your spinal cord and nerves to function, reducing blood congestion, and improving mobility — without forceful movements or cracking.',
        },
        {
          icon:  'HandHeart',
          title: 'Chiropractic Adjustments',
          body:  'When appropriate, targeted adjustments help restore mobility to restricted spinal joints, reduce muscle guarding, and support the overall function of the spine alongside decompression therapy.',
        },
        {
          icon:  'Dumbbell',
          title: 'Flexibility, Mobility & Strengthening',
          body:  'Specific exercises focused on improving posture, strengthening supporting muscles, and building walking tolerance — so you can stay active and independent long-term.',
        },
        {
          icon:  'Heart',
          title: 'Activity & Lifestyle Guidance',
          body:  'Practical recommendations on walking strategies, posture positions, activity modification, and daily habits that reduce nerve irritation and help you get more out of each day.',
        },
      ],
    },

    benefits: {
      headline: 'Why Choose Summit Spine Centre for Spinal Stenosis',
      scheme:   4,
      items: [
        {
          icon:  'Award',
          title: 'Cox FD — The Gold Standard for Stenosis',
          body:  'Cox Flexion-Distraction is one of the most effective conservative treatments for spinal stenosis. We are among the few certified Cox practitioners in Alberta, making us uniquely equipped to treat this condition.',
        },
        {
          icon:  'Activity',
          title: '35+ Years Serving Airdrie',
          body:  'We commonly work with patients experiencing spinal stenosis and nerve-related symptoms. Decades of experience means we\'ve helped many people walk farther, move better, and stay independent.',
        },
        {
          icon:  'Users',
          title: 'Care Tailored to Your Goals',
          body:  'Your care is always tailored to your goals, your symptoms, and your comfort level. We want you walking farther, living more fully, and managing your stenosis with confidence.',
        },
      ],
    },

    howItWorks: {
      headline: 'What to Expect at Summit Spine Centre',
      scheme:   1,
      steps: [
        {
          step:  1,
          icon:  'MessageCircle',
          title: 'Tell Us Your Story',
          body:  'Your first visit starts with a detailed conversation about your symptoms and health history. We want to understand what\'s going on, how it\'s impacting your life, and where you\'d like to be.',
        },
        {
          step:  2,
          icon:  'Search',
          title: 'Thorough Assessment',
          body:  'Orthopedic, neurological, and movement assessments help us evaluate the degree of nerve involvement and identify the best, safest approach to care for your specific presentation.',
        },
        {
          step:  3,
          icon:  'ClipboardList',
          title: 'Clear, Personalized Plan',
          body:  'We explain our findings in plain language and recommend a plan tailored to your goals and preferences. No guesswork, no pressure.',
        },
        {
          step:  4,
          icon:  'TrendingUp',
          title: 'Treatment & Progress',
          body:  'We get to work — tracking your walking tolerance, pain levels, and function as you improve. If your needs would be better met elsewhere, we\'ll connect you with the right provider.',
        },
      ],
    },

    testimonials: {
      scheme: 4,
      items:  [],
    },

    faqs: {
      scheme: 1,
      items: [
        { question: 'What does spinal stenosis mean?',                            answer: 'Spinal stenosis refers to a narrowing of the spaces within the spine that may place pressure or irritation on nearby nerves or the spinal cord.' },
        { question: 'Is spinal stenosis a normal part of aging?',                 answer: 'Age-related spinal changes are very common, and some degree of narrowing may occur over time. Many people have stenosis visible on imaging without significant symptoms.' },
        { question: 'What does spinal stenosis pain feel like?',                  answer: 'Symptoms may include aching, heaviness, numbness, tingling, weakness, or burning pain in the back, buttocks, or legs (lumbar stenosis) or in the neck, arms, or hands (cervical stenosis). Many people find symptoms improve when sitting or bending forward.' },
        { question: 'Why do my symptoms improve when I sit down?',               answer: 'Many people with lumbar stenosis feel better when bending forward or sitting because these positions may temporarily create more space around irritated nerves, reducing pressure and discomfort.' },
        { question: 'Can spinal stenosis improve without surgery?',               answer: 'Yes. Many people manage spinal stenosis successfully with conservative care, exercise, movement strategies, and lifestyle modifications. Surgery is typically considered when conservative approaches haven\'t provided adequate relief.' },
        { question: 'Is walking good for spinal stenosis?',                       answer: 'For many people, walking is helpful, though tolerance may vary depending on symptom severity. Gradual and consistent movement is often beneficial. We can help you build a walking strategy that works for your current level.' },
        { question: 'Can chiropractic care help spinal stenosis?',                answer: 'Chiropractic care — particularly Cox Flexion-Distraction — may help improve mobility, reduce stiffness, support walking tolerance, and improve overall function in some individuals with spinal stenosis.' },
        { question: 'When should I seek medical attention for spinal stenosis?',  answer: 'Immediate medical attention is important if symptoms involve severe weakness, loss of bowel or bladder control, worsening balance problems, or rapidly progressing neurological symptoms.' },
        { question: 'Do I need imaging for spinal stenosis?',                     answer: 'Imaging such as a CT scan or MRI may sometimes help confirm stenosis and evaluate the degree of narrowing, particularly if symptoms are persistent, progressive, or nerve-related. Many cases can be initially assessed through a detailed history and physical examination.' },
      ],
    },

    cta: {
      headline: 'Don\'t live with it — book today.',
      scheme:   4,
      cta:      { label: 'Get My Personalized Plan', href: 'https://summitspine.ca/booking/' },
    },

    relatedConditions: ['low-back-pain', 'disc-herniation'],

    structuredData: {
      conditionName:     'Spinal Stenosis',
      description:       'Spinal stenosis refers to a narrowing of the tunnels within the spine that protect the nerves and spinal cord. It commonly causes pain, heaviness, numbness, or weakness that worsens with walking or standing and improves with sitting.',
      possibleTreatment: 'Cox Flexion-Distraction, Chiropractic Care',
    },
  },
  'tech-neck': {
    meta: {
      slug:          'tech-neck',
      title:         'Tech Neck Treatment Airdrie | Summit Spine Centre',
      description:   'Chiropractic treatment for tech neck in Airdrie. We restore cervical alignment, relieve muscle tension, and correct forward head posture caused by prolonged screen use.',
      keywords:      [
        'tech neck Airdrie',
        'text neck chiropractor Airdrie',
        'forward head posture Airdrie',
        'neck pain screen Airdrie',
        'tech neck treatment Airdrie Alberta',
      ],
      published:     true,
      priority:      'P2',
      type:          'condition',
      canonicalPath: '/conditions/tech-neck',
    },

    hero: {
      headline:    'Tech Neck Treatment in Airdrie',
      subheadline: 'Your devices shouldn\'t dictate your posture. Whether scrolling your phone, working from home, or catching up on emails — let\'s un-hunch your spine.',
      cta:         { label: 'Get My Personalized Plan', href: 'https://summitspine.ca/booking/' },
      scheme:      1,
    },

    overview:
      'Tech neck describes the repetitive strain injury caused by prolonged forward head posture — most commonly from looking down at screens for extended periods. ' +
      'Your head weighs roughly 11 pounds in neutral alignment. Tilting it forward at just 60 degrees increases the effective load on your neck to up to 60 pounds of pressure. This constant strain causes joint irritation, muscle fatigue, and structural changes in the cervical spine over time. ' +
      'The good news is that tech neck is highly treatable. Up to 75% of young adults experience some form of digital posture strain, and targeted care can quickly restore movement to restricted joints and help your natural neck curve return. ' +
      'Whether you\'re a remote worker, a student, or anyone who spends significant time looking at a screen — this is a modern postural challenge we help people overcome every day.',

    symptoms: [
      'Persistent soreness across the upper back and shoulders',
      'Intense, localized ache at the base of the skull',
      'Stiffness when turning the head',
      'Frequent upper trapezius muscle spasms',
      'Dull tension headaches',
      'Numbness or tingling down the arms',
      'Reduced grip strength',
      'Rounded shoulders and forward posture',
    ],

    causes: [
      'Forward Head Posture Loading — for every inch the head shifts forward, the effective weight it places on the neck increases significantly. Sustained screen use holds the head in this position for hours',
      'Ligament Overstretch — sustained downward or forward head positioning stretches the ligaments that support the cervical spine. Over time, they lose their natural elasticity',
      'Loss of Cervical Curve — the neck requires a healthy "C-shaped" curve to absorb shock. Chronic forward hunching gradually flattens this natural curve and accelerates joint degeneration',
      'Nerve Root Compression — altered posture narrows the spaces where nerves exit the spine, causing symptoms that can travel into the hands and mimic carpal tunnel syndrome',
      'Muscle Fatigue and Imbalance — the posterior neck muscles must work continuously to support the forward-shifted head, while the deep cervical flexors weaken from underuse',
    ],

    treatments: {
      headline: 'How Summit Spine Centre Treats Tech Neck',
      scheme:   1,
      items: [
        {
          icon:  'ClipboardList',
          title: 'Comprehensive History & Exam',
          body:  'We map your posture and assess your cervical spine to identify the exact areas of restriction and muscle imbalance. Understanding why your neck is struggling is the first step to fixing it.',
        },
        {
          icon:  'Activity',
          title: 'Cox Flexion-Distraction',
          body:  'A gentle technique that decompresses the cervical spine, reduces nerve pressure, and helps restore the natural curve of the neck — without any forceful movements.',
        },
        {
          icon:  'HandHeart',
          title: 'Chiropractic Adjustments',
          body:  'Gentle cervical adjustments safely unlock stiff spinal segments, restore joint motion, and relieve the muscle tension that builds from prolonged forward head positioning.',
        },
        {
          icon:  'Dumbbell',
          title: 'Targeted Exercises & Posture Retraining',
          body:  'Specific movements to strengthen the deep neck flexors, improve posture, and encourage the natural cervical curve to return. We\'ll also give you daily movement strategies to keep pain from coming back.',
        },
        {
          icon:  'Heart',
          title: 'Workstation & Ergonomic Advice',
          body:  'If your setup is driving your neck forward all day, we\'ll show you how to optimize it. Practical changes to your monitor height, chair position, and movement habits can make a significant difference.',
        },
      ],
    },

    benefits: {
      headline: 'Why Choose Summit Spine Centre for Tech Neck',
      scheme:   4,
      items: [
        {
          icon:  'Award',
          title: '35+ Years Serving Airdrie',
          body:  'We treat tech neck and postural strain daily. Our experience across decades of practice means we\'ve helped many people restore their cervical alignment and move comfortably again.',
        },
        {
          icon:  'Activity',
          title: 'We Address Root Causes',
          body:  'Rather than just treating soreness, we identify which joints are restricted, which muscles are overworked, and what in your daily environment is loading your neck — then we fix it.',
        },
        {
          icon:  'Users',
          title: 'Care Tailored to You',
          body:  'Whether you\'re a student, office worker, or tradesperson, your care plan is built around your posture, your symptoms, and your goals. Not a one-size-fits-all approach.',
        },
      ],
    },

    howItWorks: {
      headline: 'What to Expect at Summit Spine Centre',
      scheme:   1,
      steps: [
        {
          step:  1,
          icon:  'MessageCircle',
          title: 'Tell Us Your Story',
          body:  'We start with a detailed conversation about your symptoms, your daily screen habits, and how your neck is affecting your life.',
        },
        {
          step:  2,
          icon:  'Search',
          title: 'Postural & Cervical Assessment',
          body:  'We assess your cervical range of motion, posture, joint mobility, and muscle function to identify the exact structures contributing to your tech neck.',
        },
        {
          step:  3,
          icon:  'ClipboardList',
          title: 'Clear, Personalized Plan',
          body:  'We explain our findings in plain language and recommend a plan that addresses both your in-clinic treatment and the everyday habits driving your symptoms.',
        },
        {
          step:  4,
          icon:  'TrendingUp',
          title: 'Treatment & Progress',
          body:  'We work on restoring joint motion and posture while tracking your progress. We\'ll know we\'re winning when you can look up comfortably again.',
        },
      ],
    },

    testimonials: {
      scheme: 4,
      items:  [],
    },

    faqs: {
      scheme: 1,
      items: [
        { question: 'What exactly causes tech neck?',                    answer: 'Tech neck is caused by holding the head forward and down while viewing screens for extended periods. This strains the muscles, loads the joints, and weakens the ligaments that support the cervical spine.' },
        { question: 'Can a chiropractor fix tech neck?',                 answer: 'Chiropractic care can help restore joint motion, relieve muscle tension, and address the structural causes of tech neck. Studies show that customized cervical care can successfully support the return of a healthy neck curve.' },
        { question: 'What does tech neck pain feel like?',               answer: 'It usually feels like a deep ache across the upper back and shoulders, a stiff or sore neck, tension headaches, or a localized ache at the base of the skull. Some people also notice tingling into the arms.' },
        { question: 'Can tech neck cause dizziness or arm tingling?',    answer: 'Yes. Significant postural strain can irritate nerve roots and muscles. This may cause arm tingling, hand numbness, or mild dizziness depending on which structures are affected.' },
        { question: 'How should I set up my desk to prevent tech neck?', answer: 'Raise your primary screen so your eyes hit the top third of the monitor. Keep elbows at roughly 90 degrees. Take a brief movement break every 20 to 30 minutes to reset your posture.' },
        { question: 'Will tech neck go away if I just rest?',            answer: 'Rest may provide temporary relief but does not correct the underlying structural changes or postural habits. Professional assessment and targeted care are usually needed to resolve it fully.' },
      ],
    },

    cta: {
      headline: 'Don\'t live with it — book today.',
      scheme:   4,
      cta:      { label: 'Get My Personalized Plan', href: 'https://summitspine.ca/booking/' },
    },

    relatedConditions: ['neck-pain', 'headaches-migraines'],

    structuredData: {
      conditionName:     'Tech Neck',
      description:       'Tech neck is a repetitive strain injury caused by prolonged forward head posture during screen use. It causes neck pain, upper back soreness, headaches, and structural changes to the cervical spine over time.',
      possibleTreatment: 'Chiropractic Care, Ergonomic Support',
    },
  },
  'whiplash': {
    meta: {
      slug:          'whiplash',
      title:         'Whiplash Treatment Airdrie | Summit Spine Centre',
      description:   'Chiropractic whiplash treatment in Airdrie. We evaluate cervical soft-tissue damage and use gentle, low-force techniques to restore motion and support recovery after a neck injury.',
      keywords:      [
        'whiplash Airdrie',
        'whiplash chiropractor Airdrie',
        'neck injury treatment Airdrie',
        'car accident neck pain Airdrie',
        'whiplash treatment Airdrie Alberta',
      ],
      published:     true,
      priority:      'P2',
      type:          'condition',
      canonicalPath: '/conditions/whiplash',
    },

    hero: {
      headline:    'Whiplash Treatment in Airdrie',
      subheadline: 'Whiplash can disrupt your entire life in a fraction of a second — whether from a rear-end collision, a sports hit, or a slip on ice. Let\'s steady your spine and calm the pain.',
      cta:         { label: 'Get My Personalized Plan', href: 'https://summitspine.ca/booking/' },
      scheme:      1,
    },

    overview:
      'Whiplash is a traumatic neck injury caused by a rapid, forceful back-and-forth movement of the head — similar to the crack of a whip. This sudden acceleration-deceleration force damages the soft tissues of the cervical spine, including ligaments, muscles, and joints. ' +
      'Symptoms frequently begin as a dull neck ache before developing into intense, restricted stiffness — and they often take 24 to 48 hours to fully manifest following the trauma. ' +
      'The good news is that whiplash is highly treatable with conservative care. Up to 88% of patients see significant symptom resolution within two months. Early, controlled movement prevents long-term scar tissue buildup, and gentle chiropractic techniques can support your healing alignment without forceful twisting. ' +
      'At Summit Spine Centre, we specialize in evaluating accident-related spine conditions and work alongside you to restore safe, pain-free range of motion.',

    symptoms: [
      'Severe, localized neck pain',
      'Deep shoulder or upper back soreness',
      'Persistent tension headaches starting at the base of the skull',
      'Radiating numbness or tingling into the arms',
      'Unexplained dizziness or loss of balance',
      'Muscle spasms across the upper trapezius',
      'Cognitive fatigue, brain fog, or sleep disturbances',
      'Neck stiffness or restricted range of motion',
    ],

    causes: [
      'Rear-End Motor Vehicle Collisions — the most frequent cause of whiplash. Even a low-speed impact transfers significant kinetic energy through your seat into your neck',
      'Contact Sports Injuries — football tackles, hockey checks, or martial arts training simulate high-impact forces that violently hyper-extend and flex the cervical spine',
      'Sudden Slips and Falls — losing footing on winter ice can cause the head to snap backward violently, with the protective muscle bracing that follows often worsening the soft-tissue strain',
      'Physical Assault or Trauma — forceful shaking or impact inflicts rapid motion that can damage delicate spinal support structures, clinically classified under Whiplash-Associated Disorders (WAD)',
    ],

    treatments: {
      headline: 'How Summit Spine Centre Treats Whiplash',
      scheme:   1,
      items: [
        {
          icon:  'ClipboardList',
          title: 'Detailed Neurological & Structural Screening',
          body:  'We begin by mapping your specific injury — asking the right questions about mechanism, onset, and symptoms, then performing a thorough neurological and orthopedic examination to evaluate the full extent of the injury.',
        },
        {
          icon:  'Activity',
          title: 'Cox Flexion-Distraction',
          body:  'A gentle, low-force technique that reduces joint inflammation, decompresses the cervical spine, and restores movement without any aggressive twisting. Ideal for the sensitive, inflamed tissues common after whiplash.',
        },
        {
          icon:  'HandHeart',
          title: 'Gentle Chiropractic Care',
          body:  'We prioritize low-force techniques to restore joint mobility and support nervous system recovery — protecting your healing alignment while reducing muscle spasm and guarding.',
        },
        {
          icon:  'Dumbbell',
          title: 'Progressive Stability Exercises',
          body:  'Isometric and progressive neck stability exercises to gently rebuild your cervical support system, prevent scar tissue accumulation, and restore your natural movement patterns.',
        },
        {
          icon:  'Heart',
          title: 'Activity & Recovery Guidance',
          body:  'Practical advice on movement strategies, positioning, and daily activity modification — because early, controlled movement is one of the most important factors in whiplash recovery.',
        },
      ],
    },

    benefits: {
      headline: 'Why Choose Summit Spine Centre for Whiplash',
      scheme:   4,
      items: [
        {
          icon:  'Award',
          title: '35+ Years of Cervical Spine Care',
          body:  'We have extensive experience evaluating and treating whiplash and accident-related neck injuries. Early intervention with the right care significantly improves long-term outcomes.',
        },
        {
          icon:  'Activity',
          title: 'Gentle Techniques First',
          body:  'We never use aggressive or forceful techniques on an acutely injured spine. Our approach prioritizes gentle, low-force care that works with your body\'s healing process — not against it.',
        },
        {
          icon:  'Users',
          title: 'Personalized Recovery Plan',
          body:  'Your injury, your symptoms, and your recovery timeline are unique. We tailor every aspect of care to your specific presentation and comfort level so you heal as efficiently as possible.',
        },
      ],
    },

    howItWorks: {
      headline: 'What to Expect at Summit Spine Centre',
      scheme:   1,
      steps: [
        {
          step:  1,
          icon:  'MessageCircle',
          title: 'Tell Us What Happened',
          body:  'We want to understand the full picture — the mechanism of injury, when symptoms started, what they feel like, and how they\'re affecting your daily life.',
        },
        {
          step:  2,
          icon:  'Search',
          title: 'Thorough Neurological Assessment',
          body:  'We perform detailed orthopedic and neurological testing to evaluate the extent of soft-tissue damage and identify any nerve involvement before beginning treatment.',
        },
        {
          step:  3,
          icon:  'ClipboardList',
          title: 'Clear, Personalized Plan',
          body:  'We explain our findings in plain language and recommend a recovery plan based on your injury severity, symptoms, and goals.',
        },
        {
          step:  4,
          icon:  'TrendingUp',
          title: 'Treatment & Monitored Recovery',
          body:  'We begin gentle care and monitor your progress carefully, adjusting the plan as you heal. If your needs require additional specialists, we\'ll connect you with the right providers.',
        },
      ],
    },

    testimonials: {
      scheme: 4,
      items:  [],
    },

    faqs: {
      scheme: 1,
      items: [
        { question: 'How long does it take for whiplash to heal?',                      answer: 'Mild whiplash cases often resolve within 2 to 6 weeks with appropriate care. More severe soft-tissue injuries may take several months to fully stabilize. Early intervention with controlled movement significantly improves recovery timelines.' },
        { question: 'Can a chiropractor help with whiplash?',                           answer: 'Yes. Chiropractic care can help restore motion to restricted cervical joints, reduce muscle spasm, and support soft-tissue healing. Early multimodal care has been shown to significantly improve functional recovery after whiplash.' },
        { question: 'Why do whiplash symptoms sometimes take days to appear?',          answer: 'Adrenaline and delayed inflammatory responses often mask symptoms initially. The muscles surrounding the injury tighten to protect the area, with deeper pain surfacing once that guarding begins to ease over the following 24 to 48 hours.' },
        { question: 'What happens if whiplash goes untreated?',                         answer: 'Untreated whiplash may leave disorganized scar tissue in the injured structures. Over time, this can increase the risk of chronic neck pain, persistent headaches, premature joint degeneration, and long-term loss of flexibility.' },
        { question: 'Is it better to rest or keep moving after a whiplash injury?',     answer: 'Gentle, pain-free active movement is generally recommended over rigid immobilization. Prolonged use of a hard neck collar can weaken supporting muscles and slow the natural healing process.' },
        { question: 'Can whiplash cause headaches or dizziness?',                       answer: 'Yes. Damage to the upper cervical joints and deep suboccipital muscles can irritate local nerve pathways, contributing to tension headaches and disrupting spatial orientation signals — which may cause dizziness or balance disturbances.' },
      ],
    },

    cta: {
      headline: 'Don\'t live with it — book today.',
      scheme:   4,
      cta:      { label: 'Get My Personalized Plan', href: 'https://summitspine.ca/booking/' },
    },

    relatedConditions: ['neck-pain', 'upper-back-shoulder-pain'],

    structuredData: {
      conditionName:     'Whiplash',
      description:       'Whiplash is a traumatic neck injury caused by rapid back-and-forth movement of the head, most commonly from motor vehicle collisions or sports injuries. It damages the soft tissues of the cervical spine and can cause neck pain, headaches, stiffness, and nerve symptoms.',
      possibleTreatment: 'Chiropractic Care, Cox Flexion-Distraction',
    },
  },
  'upper-back-shoulder-pain': {
    meta: {
      slug:          'upper-back-shoulder-pain',
      title:         'Upper Back & Shoulder Pain Airdrie | Summit Spine Centre',
      description:   'Chiropractic treatment for upper back and shoulder blade pain in Airdrie. We address thoracic joint restrictions, rib dysfunction, and postural strain to relieve the knot between your shoulder blades.',
      keywords:      [
        'upper back pain Airdrie',
        'shoulder blade pain Airdrie',
        'shoulder pain chiropractor Airdrie',
        'thoracic spine Airdrie',
        'upper back pain treatment Airdrie Alberta',
      ],
      published:     true,
      priority:      'P2',
      type:          'condition',
      canonicalPath: '/conditions/upper-back-shoulder-pain',
    },

    hero: {
      headline:    'Upper Back & Shoulder Pain Treatment in Airdrie',
      subheadline: 'That nagging ache between your shoulders shouldn\'t dictate your day. Whether you\'re hunching over a desk, driving your commute, or carrying your children — let\'s release the knot and restore your posture.',
      cta:         { label: 'Get My Personalized Plan', href: 'https://summitspine.ca/booking/' },
      scheme:      1,
    },

    overview:
      'Upper back pain, clinically known as thoracic spine pain, refers to discomfort anywhere between the base of the neck and the bottom of the rib cage — most frequently concentrating right between the shoulder blades in the interscapular region. ' +
      'The thoracic spine is uniquely designed for stability, connecting directly to the rib cage to protect vital organs. Because this area is built to be sturdy, when joints lock up or muscles become overworked, the pain can feel deep, restrictive, and incredibly stubborn. ' +
      'The good news is that mid-back and rib pain respond very well to specific manual care. Restoring joint motion quickly reduces the tight muscle "knot" feeling many people describe, and proper thoracic alignment instantly unburdens both the neck and the lower back. ' +
      'Simple ergonomic changes can also help prevent this pain from returning — a fact we\'ll make sure you walk away with after your first visit.',

    symptoms: [
      'A constant, dull burn or sudden, sharp catch when rotating the torso',
      'An intense, pinpoint "knot" that feels tight to the touch between the shoulder blades',
      'Sharp, catching pain when taking a deep breath',
      'Stiffness that spreads upward into the lower neck',
      'A deep ache that worsens after prolonged sitting',
      'Radiating discomfort that wraps around the ribs',
      'Inability to comfortably pull the shoulders back',
    ],

    causes: [
      'Postural Exhaustion (Upper Crossed Syndrome) — slouching forward forces the rhomboids and mid-trapezius to stay stretched and tense for hours, creating a chronic, burning ache between the shoulder blades',
      'Rib Joint Dysfunction (Costovertebral Joints) — ribs attach to the spine at small joints; if one becomes restricted from a sudden twist or cough, it can cause sharp, stabbing pain right beside the shoulder blade',
      'Thoracic Joint Restrictions — individual vertebrae in the mid-back can lose their natural tracking and become "locked," limiting rotation and causing local inflammation and protective muscle spasms',
      'Repetitive Overhead Strain — reaching overhead repeatedly during home renovations, lifting, or racket sports can strain the supportive muscle tendons around the shoulder blade',
    ],

    treatments: {
      headline: 'How Summit Spine Centre Treats Upper Back & Shoulder Pain',
      scheme:   1,
      items: [
        {
          icon:  'ClipboardList',
          title: 'Comprehensive History & Exam',
          body:  'We look closely at how your neck, mid-back, and rib cage are moving together to identify exactly what is triggering your symptoms — whether it\'s a postural issue, a joint restriction, or rib dysfunction.',
        },
        {
          icon:  'Activity',
          title: 'Cox Flexion-Distraction',
          body:  'A gentle decompression technique that helps relieve pressure on thoracic joints and nerves. Particularly useful for postural fatigue and mid-back tension that has been building over time.',
        },
        {
          icon:  'HandHeart',
          title: 'Chiropractic Adjustments',
          body:  'Targeted thoracic adjustments open restricted joints and take immediate mechanical stress off overworked back muscles. For restricted rib joints, we use highly specific, low-force techniques — often providing immediate relief with breathing.',
        },
        {
          icon:  'Dumbbell',
          title: 'Targeted Exercises',
          body:  'Exercises to break up stubborn muscle tension and retrain the postural muscles — the ones that should keep your shoulders back but have been stretched out and weakened from long hours of forward positioning.',
        },
        {
          icon:  'Heart',
          title: 'Ergonomic & Postural Guidance',
          body:  'Simple desk exercises and workstation changes to help you maintain a healthy upright posture automatically throughout your day. We give you the tools to stop this from coming back.',
        },
      ],
    },

    benefits: {
      headline: 'Why Choose Summit Spine Centre for Upper Back & Shoulder Pain',
      scheme:   4,
      items: [
        {
          icon:  'Award',
          title: '35+ Years Serving Airdrie',
          body:  'Upper back and shoulder blade pain are among the most common conditions we treat. Decades of experience means we quickly identify what\'s causing your specific pain pattern and address it directly.',
        },
        {
          icon:  'Activity',
          title: 'Rib & Thoracic Spine Specialists',
          body:  'Rib joint dysfunction is often missed or misunderstood. We are skilled at identifying and treating this common but frequently overlooked cause of upper back and breathing-related pain.',
        },
        {
          icon:  'Users',
          title: 'Care Tailored to Your Lifestyle',
          body:  'Whether your pain comes from a desk job, driving, nursing, or overhead work — we build your plan around the demands of your life so the relief you get actually lasts.',
        },
      ],
    },

    howItWorks: {
      headline: 'What to Expect at Summit Spine Centre',
      scheme:   1,
      steps: [
        {
          step:  1,
          icon:  'MessageCircle',
          title: 'Tell Us Your Story',
          body:  'We start with a detailed conversation about your symptoms — what triggers them, what makes them better, and how they\'re impacting your posture and daily activities.',
        },
        {
          step:  2,
          icon:  'Search',
          title: 'Spinal & Rib Assessment',
          body:  'We assess how your thoracic spine, ribs, neck, and shoulder blades are moving together. This helps us identify the specific structures contributing to your pain.',
        },
        {
          step:  3,
          icon:  'ClipboardList',
          title: 'Clear, Personalized Plan',
          body:  'We explain our findings and recommend a plan that addresses your symptoms, your posture, and the habits in your daily life that may be perpetuating the problem.',
        },
        {
          step:  4,
          icon:  'TrendingUp',
          title: 'Treatment & Progress',
          body:  'We work to restore joint motion and muscular balance while tracking your progress. Most acute joint and rib issues improve significantly within a few treatments.',
        },
      ],
    },

    testimonials: {
      scheme: 4,
      items:  [],
    },

    faqs: {
      scheme: 1,
      items: [
        { question: 'Why does the pain between my shoulder blades hurt when I breathe?', answer: 'This is frequently caused by restriction in a costovertebral joint — where a rib attaches to the spine. When your lungs expand, the ribs must move; if a rib joint is restricted, that expansion causes a sharp, pinching sensation.' },
        { question: 'Can a chiropractor fix the knot between my shoulder blades?',       answer: 'Yes. Those stubborn "knots" are often trigger points caused by muscles staying chronically tight to protect a stiff, restricted joint underneath. Adjusting the joint and addressing the soft tissue allows the overlying muscle to finally relax.' },
        { question: 'Is upper back pain usually connected to neck posture?',             answer: 'Absolutely. The lower neck and upper back form a functional unit. A forward-head posture pulls directly on the muscle groups anchoring into the mid-back, which can make upper back pain a secondary symptom of neck strain.' },
        { question: 'How long does it take for upper back pain to heal?',                answer: 'Most acute joint restrictions and rib issues improve significantly within 2 to 4 treatments. Chronic postural strains may take a few weeks of consistent care and ergonomic adjustments to fully stabilize.' },
        { question: 'What can I do at home to relieve mid-back stiffness?',              answer: 'Using a foam roller to gently extend your mid-back can help open a hunched spine. Taking a movement break every 45 minutes at work to stretch your chest and squeeze your shoulder blades together helps prevent postural fatigue.' },
        { question: 'Can upper back pain wrap around to the front of my chest?',         answer: 'Yes. Because intercostal nerves travel along your ribs from the spine to the front of the body, irritation in a thoracic or rib joint can mimic chest wall pain. Any sudden, unexplained chest pain or shortness of breath should always be medically evaluated first to rule out cardiac causes.' },
      ],
    },

    cta: {
      headline: 'Don\'t live with it — book today.',
      scheme:   4,
      cta:      { label: 'Get My Personalized Plan', href: 'https://summitspine.ca/booking/' },
    },

    relatedConditions: ['neck-pain', 'whiplash'],

    structuredData: {
      conditionName:     'Upper Back & Shoulder Pain',
      description:       'Upper back and shoulder blade pain, or thoracic spine pain, often involves joint restrictions, rib dysfunction, or postural strain. It can cause a deep, stubborn ache between the shoulder blades that worsens with sitting, breathing, or rotation.',
      possibleTreatment: 'Chiropractic Care, Cox Flexion-Distraction',
    },
  },
  'tmj': {
    meta: { slug: 'tmj', title: 'TMJ Treatment Airdrie | Summit Spine Centre', description: '', keywords: ['TMJ Airdrie', 'jaw pain chiropractor Airdrie'], published: true, priority: 'P3', type: 'condition', canonicalPath: '/conditions/tmj' },
    overview: '', relatedConditions: ['headaches-migraines', 'neck-pain'],
    structuredData: { conditionName: 'TMJ Dysfunction', description: '', possibleTreatment: 'Chiropractic Care' },
    ...conditionDefaults,
  },
  'sports-injuries': {
    meta: {
      slug:          'sports-injuries',
      title:         'Sports Injury Treatment Airdrie | Summit Spine Centre',
      description:   'Chiropractic sports injury treatment in Airdrie. We address the biomechanical root cause of your injury and build a recovery plan that gets you back to full performance — not just out of pain.',
      keywords:      [
        'sports injury chiropractor Airdrie',
        'sports rehab Airdrie',
        'athletic injury treatment Airdrie',
        'sports injury Airdrie Alberta',
        'chiropractic sports care Airdrie',
      ],
      published:     true,
      priority:      'P3',
      type:          'condition',
      canonicalPath: '/conditions/sports-injuries',
    },

    hero: {
      headline:    'Sports Injury Treatment in Airdrie',
      subheadline: 'An injury shouldn\'t keep you on the sidelines forever. Whether you\'re a weekend warrior, competitive athlete, or active parent staying fit — let\'s rebuild your strength and get you back in the game.',
      cta:         { label: 'Get My Personalized Plan', href: 'https://summitspine.ca/booking/' },
      scheme:      1,
    },

    overview:
      'A sports injury refers to musculoskeletal damage sustained during athletic training, competitive sports, or fitness activities — whether from a single traumatic event or the cumulative stress of repetitive movement. ' +
      'Physical activity pushes muscles, tendons, ligaments, and joints to their limits. When the demands exceed what those structures can handle, the resulting tissue damage triggers localized inflammation, protective muscle guarding, and restricted mobility. ' +
      'The good news is that sports injuries respond exceptionally well to conservative care. Early therapeutic intervention cuts recovery times significantly, most athletic conditions resolve completely without surgery, and targeted rehabilitation prevents scar tissue from creating chronic performance limitations. ' +
      'At Summit Spine Centre, we help athletes of all skill levels overcome setbacks every day — identifying the biomechanical cause of pain and building a path back to peak performance.',

    symptoms: [
      'Localized swelling, bruising, or heat around a joint',
      'Sharp, stabbing pain during explosive movements',
      'A deep, persistent ache that worsens with activity',
      'Joint instability, clicking, or a feeling of giving way',
      'Severe stiffness and reduced range of motion',
      'Compensatory pain in neighbouring joints or muscles',
    ],

    causes: [
      'Sudden Macro-Trauma — high-velocity impacts, awkward landings, or rapid changes of direction place extreme force on joints, causing immediate structural issues like sprains, strains, or tears',
      'Repetitive Overuse — performing identical movements thousands of times without adequate rest creates micro-trauma that accumulates into chronic conditions like tennis elbow, shin splints, or tendinitis',
      'Biomechanical Faults and Muscle Imbalances — when certain muscle groups are weak or tight, the body compensates by overloading other areas, altering joint mechanics and increasing injury risk',
      'Suboptimal Training Parameters — increasing intensity too quickly, skipping warm-ups, using improper footwear, or training with poor form strains tissues and accelerates joint wear',
    ],

    treatments: {
      headline: 'How Summit Spine Centre Treats Sports Injuries',
      scheme:   1,
      items: [
        {
          icon:  'ClipboardList',
          title: 'Full Kinetic Chain Assessment',
          body:  'We look beyond the site of pain to evaluate your entire kinetic chain. Understanding how your body moves as a whole helps us identify the biomechanical root cause — not just the symptom — of your injury.',
        },
        {
          icon:  'Activity',
          title: 'Cox Flexion-Distraction',
          body:  'For spinal or nerve-related sports injuries, Cox Flexion-Distraction gently decompresses the affected structures and restores movement without forceful loading — ideal for athletes whose injuries involve disc or nerve irritation.',
        },
        {
          icon:  'HandHeart',
          title: 'Chiropractic Adjustments',
          body:  'Precise, targeted adjustments to correct restricted joint tracking, reduce nervous system irritation, and restore the full range of motion needed for athletic performance.',
        },
        {
          icon:  'Dumbbell',
          title: 'Corrective Exercises & Rehabilitation',
          body:  'Custom corrective exercises designed to resolve muscle imbalances, rebuild strength through the injured area, and retrain movement patterns that protect you from reinjury.',
        },
        {
          icon:  'Heart',
          title: 'Performance & Injury Prevention Advice',
          body:  'Practical guidance on training load, warm-up strategies, and movement habits that protect your body long-term — so you can keep doing what you love without the setbacks.',
        },
      ],
    },

    benefits: {
      headline: 'Why Choose Summit Spine Centre for Sports Injuries',
      scheme:   4,
      items: [
        {
          icon:  'Award',
          title: '35+ Years of Musculoskeletal Experience',
          body:  'We have extensive experience treating both spinal and extremity sports injuries — from weekend hockey players to competitive athletes. We understand how the body moves under athletic demand.',
        },
        {
          icon:  'Activity',
          title: 'Root Cause Focus',
          body:  'We don\'t just treat the painful spot — we analyze the full biomechanical picture to find out why the injury happened and correct the underlying patterns that led to it.',
        },
        {
          icon:  'Users',
          title: 'Care Built for Your Sport',
          body:  'Your recovery plan is built around the specific demands of your sport, your fitness goals, and your timeline. We want to get you back — and keep you there.',
        },
      ],
    },

    howItWorks: {
      headline: 'What to Expect at Summit Spine Centre',
      scheme:   1,
      steps: [
        {
          step:  1,
          icon:  'MessageCircle',
          title: 'Tell Us What Happened',
          body:  'We start with a detailed conversation about the injury — how it occurred, how it\'s progressed, and how it\'s impacting your training or daily activity.',
        },
        {
          step:  2,
          icon:  'Search',
          title: 'Movement & Biomechanical Assessment',
          body:  'We evaluate your functional movement patterns, joint mobility, and muscle balance to accurately pinpoint the affected structures and contributing factors.',
        },
        {
          step:  3,
          icon:  'ClipboardList',
          title: 'Clear Recovery Plan',
          body:  'We explain our findings and lay out a clear plan — what we\'re treating, why, and what you need to do between visits to get back to full performance as efficiently as possible.',
        },
        {
          step:  4,
          icon:  'TrendingUp',
          title: 'Treatment & Performance Tracking',
          body:  'We work through the recovery progressively — from pain reduction to movement restoration to performance optimization — tracking your progress at every stage.',
        },
      ],
    },

    testimonials: {
      scheme: 4,
      items:  [],
    },

    faqs: {
      scheme: 1,
      items: [
        { question: 'How long does a typical sports injury take to heal?',  answer: 'Mild muscle strains or ligament sprains often resolve within 2 to 4 weeks. Chronic overuse injuries or more significant structural damage may require 6 to 12 weeks of structured rehabilitation to achieve full stability and return to sport.' },
        { question: 'Can a chiropractor help treat sports injuries?',       answer: 'Yes. Chiropractors are trained to assess and treat both spinal and non-spinal extremity injuries. Integrating chiropractic care into sports recovery has been shown to improve recovery timelines and enhance athletic function.' },
        { question: 'Should I apply ice or heat to a fresh injury?',        answer: 'Apply ice to acute injuries in the first 48 to 72 hours to manage inflammation and limit swelling. Transition to heat afterward to improve circulation, relax tight muscles, and promote tissue recovery.' },
        { question: 'What happens if I play through the pain?',             answer: 'Ignoring pain signals forces other joints to compensate, which alters mechanics and can turn a simple strain into a chronic or secondary injury. Early assessment usually means a faster, more complete recovery.' },
        { question: 'Is gentle movement helpful during recovery?',          answer: 'Yes. Pain-free active recovery — like light walking or gentle mobility work — keeps joints lubricated and improves circulation. Avoid any movement that provokes sharp pain or causes you to compensate in your gait or form.' },
        { question: 'Can chiropractic care improve athletic performance?',  answer: 'Correcting joint restrictions and muscle imbalances allows your body to move through its full, natural range of motion. This can improve power output, movement efficiency, and overall injury resilience.' },
      ],
    },

    cta: {
      headline: 'Don\'t let the injury win — book today.',
      scheme:   4,
      cta:      { label: 'Get My Personalized Plan', href: 'https://summitspine.ca/booking/' },
    },

    relatedConditions: ['low-back-pain', 'upper-back-shoulder-pain'],

    structuredData: {
      conditionName:     'Sports Injury',
      description:       'Sports injuries involve musculoskeletal damage from athletic training or competition — whether from acute trauma or repetitive overuse. They can affect joints, muscles, tendons, ligaments, and the spine, limiting athletic performance and daily function.',
      possibleTreatment: 'Chiropractic Care, Targeted Exercise',
    },
  },
  'postpartum-back-pain': {
    meta: {
      slug:          'postpartum-back-pain',
      title:         'Postpartum Back Pain Airdrie | Summit Spine Centre',
      description:   'Gentle chiropractic care for postpartum back pain in Airdrie. We help new moms recover from lower back, pelvic, and mid-back pain with safe, low-force techniques designed for postpartum bodies.',
      keywords:      [
        'postpartum back pain Airdrie',
        'postnatal chiropractor Airdrie',
        'postpartum pelvic pain Airdrie',
        'new mom back pain Airdrie',
        'postpartum chiropractic Airdrie Alberta',
      ],
      published:     true,
      priority:      'P3',
      type:          'condition',
      canonicalPath: '/conditions/postpartum-back-pain',
    },

    hero: {
      headline:    'Postpartum Back Pain Treatment in Airdrie',
      subheadline: 'Your body just completed an incredible journey — but the physical demands are far from over. Whether navigating night feedings, lifting car seats, or soothing a newborn. Let\'s help you heal, rebuild, and move comfortably again.',
      cta:         { label: 'Get My Personalized Plan', href: 'https://summitspine.ca/booking/' },
      scheme:      1,
    },

    overview:
      'Postpartum back pain refers to the persistent lower back, pelvic girdle, or mid-back discomfort experienced by mothers following childbirth — affecting up to 50% of new mothers in the months after delivery. ' +
      'During pregnancy, the body undergoes massive biomechanical shifts. The centre of gravity moves forward, the abdominal muscles stretch significantly, and the hormone relaxin softens ligaments in preparation for birth. Once the baby arrives, those stretched muscles and loose ligaments do not instantly recover — leaving spinal joints vulnerable to mechanical strain during everyday baby care. ' +
      'The good news is that postpartum back pain is highly treatable with gentle, targeted conservative care. Addressing structural issues early prevents long-term chronic problems, gentle treatments are entirely safe while breastfeeding and recovering from birth, and simple postural changes can dramatically speed up recovery. ' +
      'At Summit Spine Centre, we help new moms find relief and regain their physical footing every day — so they can focus on enjoying their growing families.',

    symptoms: [
      'A deep ache in the lower back that worsens after prolonged standing or walking',
      'Sharp pain in the buttocks or pelvis (SI joints) when rolling over in bed',
      'Burning tension between the shoulder blades from nursing or rocking',
      'A feeling of core weakness or instability when lifting a child',
      'Morning stiffness that takes time to loosen up',
      'Radiating discomfort or a pulling sensation into the hips or thighs',
    ],

    causes: [
      'Lingering Ligament Laxity — relaxin remains in the system for several months after birth (and longer while breastfeeding), keeping ligaments loose and spinal joints less supported than usual',
      'Altered Posture and Muscle Imbalances — the stretched abdominal muscles lose their ability to support the spine postpartum; the lower back and hip muscles compensate by tightening and pulling the pelvis out of alignment',
      'Newborn Biomechanics Strain — bending over a crib hundreds of times daily, lifting car seats, and hunching forward during nursing place repetitive, asymmetrical stress on the spine',
      'Core Separation (Diastasis Recti) — when the front abdominal muscles separate during pregnancy, it weakens the body\'s natural support system, forcing the lower back to do extra work',
    ],

    treatments: {
      headline: 'How Summit Spine Centre Treats Postpartum Back Pain',
      scheme:   1,
      items: [
        {
          icon:  'ClipboardList',
          title: 'Gentle, Postpartum-Focused Assessment',
          body:  'We recognize that a postpartum body requires a uniquely careful approach. We begin with a thorough but gentle assessment of your pelvic alignment, lower back, and mid-back to understand exactly what is contributing to your pain.',
        },
        {
          icon:  'Activity',
          title: 'Cox Flexion-Distraction',
          body:  'A low-force decompression technique that gently addresses lumbar and thoracic joint irritation without any aggressive twisting or force — appropriate for the sensitive, recovering postpartum spine.',
        },
        {
          icon:  'HandHeart',
          title: 'Low-Force Pelvic & Spinal Adjustments',
          body:  'Specific, gentle adjustments to safely realign the pelvis and lower back, restore normal joint mobility, and relieve the muscle tension that builds from the physical demands of newborn care.',
        },
        {
          icon:  'Dumbbell',
          title: 'Safe Core Rebuilding Exercises',
          body:  'Guided exercises to safely reactivate and rebuild the core muscles — without aggravating diastasis recti or placing inappropriate load on healing tissues.',
        },
        {
          icon:  'Heart',
          title: 'Postpartum Lifestyle & Ergonomic Coaching',
          body:  'Ergonomic advice on how to lift your baby and car seat, support your spine during feeding sessions, and set up your nursing station — practical tools that make a real difference in your daily comfort.',
        },
      ],
    },

    benefits: {
      headline: 'Why Choose Summit Spine Centre for Postpartum Back Pain',
      scheme:   4,
      items: [
        {
          icon:  'Award',
          title: '35+ Years Serving Airdrie Families',
          body:  'We have helped many new mothers in Airdrie recover from postpartum back pain and return to the physical demands of motherhood with confidence and comfort.',
        },
        {
          icon:  'Activity',
          title: 'Gentle Techniques for Recovering Bodies',
          body:  'We use highly modified, low-force techniques specifically appropriate for postpartum tissue recovery. There is no aggressive twisting, no forceful adjusting — just careful, effective care.',
        },
        {
          icon:  'Users',
          title: 'A Plan That Fits Your Life',
          body:  'We understand that new motherhood is demanding, unpredictable, and often exhausting. Your care plan is built to be realistic, efficient, and centred on getting you feeling your best as quickly as possible.',
        },
      ],
    },

    howItWorks: {
      headline: 'What to Expect at Summit Spine Centre',
      scheme:   1,
      steps: [
        {
          step:  1,
          icon:  'MessageCircle',
          title: 'Tell Us Your Story',
          body:  'We want to understand your delivery experience, when your symptoms started, and how they\'re affecting your daily life as a new parent.',
        },
        {
          step:  2,
          icon:  'Search',
          title: 'Gentle Postpartum Assessment',
          body:  'We evaluate your pelvic alignment, spinal mobility, and core function with a careful, modified examination appropriate for the postpartum body.',
        },
        {
          step:  3,
          icon:  'ClipboardList',
          title: 'Clear, Realistic Plan',
          body:  'We explain our findings in plain language and recommend a recovery plan that is safe, effective, and designed around the realities of new parenthood.',
        },
        {
          step:  4,
          icon:  'TrendingUp',
          title: 'Treatment & Progress',
          body:  'We begin gentle care and track your progress — adjusting the plan as your body recovers and your capacity to participate in rehabilitation increases.',
        },
      ],
    },

    testimonials: {
      scheme: 4,
      items:  [],
    },

    faqs: {
      scheme: 1,
      items: [
        { question: 'How long does back pain usually last after giving birth?',       answer: 'For many women, mild structural strain resolves naturally within 6 weeks. However, due to lingering ligament looseness and the physical demands of childcare, it is common for back pain to persist for several months if the underlying alignment issues are not addressed.' },
        { question: 'Is it safe to see a chiropractor after having a baby?',          answer: 'Yes. Chiropractic care is safe and beneficial postpartum. Chiropractors use highly modified, gentle techniques tailored specifically for postpartum tissues. Conservative care is an effective, non-pharmacological option for managing postpartum musculoskeletal pain.' },
        { question: 'Why does my mid-back hurt so much when nursing?',                answer: 'This is often called "nursing back," caused by rounding the shoulders and looking down at the baby for extended periods. This sustained posture overstretches the upper back muscles and locks the spinal joints of the thoracic spine.' },
        { question: 'Can a chiropractor help if I had a C-section or an epidural?',   answer: 'Absolutely. We completely bypass the abdominal incision area and use gentle, specific techniques to address pelvic and lower back mechanics. We can also assess the joints near the epidural site, as local muscle guarding can occur there following delivery.' },
        { question: 'What can I do at home to ease postpartum back pain?',            answer: 'Use pillows to bring your baby up to breast or bottle level so you don\'t have to hunch over. When lifting your baby or car seat, bend at the knees and keep your child close to your chest rather than reaching forward with your arms.' },
        { question: 'Should I use ice or heat on my back after delivery?',            answer: 'If your back feels sharp, inflamed, or sore after a long day of carrying your baby, apply ice for 15 to 20 minutes to calm the area. If your muscles feel tight and overworked, use a heating pad to encourage blood flow and relaxation.' },
      ],
    },

    cta: {
      headline: 'You deserve to feel good — book today.',
      scheme:   4,
      cta:      { label: 'Get My Personalized Plan', href: 'https://summitspine.ca/booking/' },
    },

    relatedConditions: ['low-back-pain', 'upper-back-shoulder-pain'],

    structuredData: {
      conditionName:     'Postpartum Back Pain',
      description:       'Postpartum back pain affects up to 50% of new mothers in the months following childbirth. It involves lower back, pelvic girdle, or mid-back discomfort caused by lingering ligament laxity, postural changes, core weakness, and the physical demands of newborn care.',
      possibleTreatment: 'Chiropractic Care, Postural Rehabilitation',
    },
  },
  'chronic-pain': {
    meta: {
      slug:          'chronic-pain',
      title:         'Chronic Pain Relief Airdrie | Summit Spine Centre',
      description:   'Chiropractic care for chronic pain in Airdrie. We identify the mechanical and structural causes keeping your nervous system in overdrive and provide gentle, effective care to help you regain control.',
      keywords:      [
        'chronic pain Airdrie',
        'chronic pain chiropractor Airdrie',
        'long-term back pain Airdrie',
        'chronic spine pain Airdrie',
        'chronic pain treatment Airdrie Alberta',
      ],
      published:     true,
      priority:      'P3',
      type:          'condition',
      canonicalPath: '/conditions/chronic-pain',
    },

    hero: {
      headline:    'Chronic Pain Treatment in Airdrie',
      subheadline: 'Pain that sticks around for months or years doesn\'t just hurt your body — it rewrites how you live your life. Whether missing out on family walks or fighting through the workday. Let\'s quiet the alarm system and restore your path forward.',
      cta:         { label: 'Get My Personalized Plan', href: 'https://summitspine.ca/booking/' },
      scheme:      1,
    },

    overview:
      'Chronic pain is clinically defined as pain that persists continuously or keeps coming back for longer than three months. Unlike acute pain — which acts as a temporary warning signal from a fresh injury — chronic pain shifts into a complex condition of its own. ' +
      'When structural problems are left unaddressed, the central nervous system can undergo a process called central sensitization. The spinal cord and brain become hypersensitive, keeping the body\'s alarm system active even long after an initial injury has healed — like a volume knob stuck at maximum. ' +
      'The good news is that your body retains the ability to change, adapt, and heal at any age. Chiropractic care has been shown to significantly reduce long-standing pain scores, and targeted manual therapies can directly influence how the brain processes pain signals. Conservative management also helps many patients reduce their reliance on pain medications. ' +
      'At Summit Spine Centre, we understand that your pain is real, frustrating, and entirely unique to you. We focus on identifying the physical, mechanical root causes keeping your system stuck — so you can gradually regain control.',

    symptoms: [
      'A deep, persistent ache or burning sensation in specific joints',
      'Progressive muscle tightness and widespread physical tension',
      'Disrupted sleep patterns and profound daily fatigue',
      'Shooting or electric discomfort that travels down the limbs',
      'Brain fog, irritability, or elevated everyday stress',
      'Loss of joint flexibility and fear of simple movements',
    ],

    causes: [
      'Advanced Joint Degeneration — over time, protective cartilage inside joints wears down, creating localized inflammation, stiff bone-on-bone friction, and a persistent ache that limits everyday movement',
      'Untreated Old Injuries — poorly healed soft tissues from past strains, accidents, or collisions leave behind weak, disorganized scar tissue that limits movement and continually irritates surrounding nerves',
      'Ongoing Mechanical Nerve Compression — long-standing disc herniations or spinal stenosis put continuous pressure on nerve roots, keeping local tissues highly inflamed month after month',
      'Central Nervous System Sensitization — when pain signals travel through the spinal cord for too long, the brain adapts by building more "pain pathways," causing the body to misinterpret normal movement or light touch as severe discomfort',
    ],

    treatments: {
      headline: 'How Summit Spine Centre Treats Chronic Pain',
      scheme:   1,
      items: [
        {
          icon:  'ClipboardList',
          title: 'Comprehensive Structural Evaluation',
          body:  'We perform thorough evaluations to understand the specific mechanical sources that may be keeping your pain system activated — separating old scar tissue restrictions from active nervous system irritation.',
        },
        {
          icon:  'Activity',
          title: 'Cox Flexion-Distraction',
          body:  'We use the Cox Flexion-Distraction table to provide exceptionally gentle, low-force decompression to compressed spinal joints and irritated nerves. This targeted approach introduces safe movement back into restricted areas without any forceful twisting or cracking.',
        },
        {
          icon:  'HandHeart',
          title: 'Chiropractic Adjustments',
          body:  'Precise spinal adjustments help restore lost joint mechanics, reduce nervous system irritation, and gradually work to lower the overall volume of your pain signals.',
        },
        {
          icon:  'Dumbbell',
          title: 'Graduated Therapeutic Exercise',
          body:  'Gentle home exercise routines designed to progressively rebuild movement tolerance and support sensitive joints — helping your nervous system recalibrate without pushing through pain that aggravates the system.',
        },
        {
          icon:  'Heart',
          title: 'Lifestyle & Nervous System Guidance',
          body:  'Customized advice on activity pacing, sleep, stress, and movement strategies that help reduce central sensitization over time — building toward a life where pain no longer runs the show.',
        },
      ],
    },

    benefits: {
      headline: 'Why Choose Summit Spine Centre for Chronic Pain',
      scheme:   4,
      items: [
        {
          icon:  'Award',
          title: '35+ Years of Complex Case Experience',
          body:  'Chronic pain is one of the most challenging conditions we treat — and one of the most rewarding when we get it right. Decades of experience means we understand the long-term mechanical patterns that underlie persistent pain.',
        },
        {
          icon:  'Activity',
          title: 'Gentle, Targeted Decompression',
          body:  'Cox Flexion-Distraction allows us to treat sensitive, irritated spines without force. For people in chronic pain, this gentleness is not a compromise — it\'s often the most effective approach available.',
        },
        {
          icon:  'Users',
          title: 'We See You as a Person, Not a Pain Score',
          body:  'Chronic pain changes lives. We approach every patient with that understanding — building plans that acknowledge your full situation and work toward what matters most to you.',
        },
      ],
    },

    howItWorks: {
      headline: 'What to Expect at Summit Spine Centre',
      scheme:   1,
      steps: [
        {
          step:  1,
          icon:  'MessageCircle',
          title: 'Tell Us Your Full Story',
          body:  'Chronic pain has history. We take the time to understand your full timeline — what started the pain, what has been tried, and what your life looks like now. This context shapes everything we do.',
        },
        {
          step:  2,
          icon:  'Search',
          title: 'Thorough Structural Assessment',
          body:  'We evaluate joint mobility, nerve function, and movement patterns to identify the specific mechanical contributors to your ongoing pain.',
        },
        {
          step:  3,
          icon:  'ClipboardList',
          title: 'Honest, Personalized Plan',
          body:  'We explain our findings clearly and set realistic expectations. Our goal is meaningful progress — a path toward a life where you have more good days than bad.',
        },
        {
          step:  4,
          icon:  'TrendingUp',
          title: 'Gradual Treatment & Progress',
          body:  'We begin gently and build progressively. Chronic pain responds best to consistency and patience — and we track your progress carefully at every stage.',
        },
      ],
    },

    testimonials: {
      scheme: 4,
      items:  [],
    },

    faqs: {
      scheme: 1,
      items: [
        { question: 'When does pain officially become chronic?',                         answer: 'Pain is considered chronic when it persists continuously or recurs frequently for more than three months, outlasting the normal biological healing timeline for most tissue injuries.' },
        { question: 'Can a chiropractor help with long-standing chronic pain?',          answer: 'Yes. Chiropractic care can help manage chronic pain by restoring movement to restricted joints, reducing local muscle guarding, and supporting the nervous system. Spinal manipulation and manual therapies are recommended as effective non-pharmacological options for chronic musculoskeletal conditions.' },
        { question: 'Why does my pain flare up during times of high stress?',            answer: 'The brain uses shared pathways to process psychological stress and physical pain. When stress levels increase, the nervous system releases chemicals that amplify central sensitization — making the body more sensitive to pain signals.' },
        { question: 'Will I need adjustments forever for chronic conditions?',           answer: 'Not necessarily. While some chronic structural conditions require periodic maintenance care, many people are able to reduce the frequency of care significantly as they improve. The goal is always greater independence.' },
        { question: 'Is walking safe when dealing with chronic back pain?',              answer: 'Yes. Gentle, controlled walking is beneficial for most chronic conditions. It stimulates blood circulation, provides safe movement to stiff joints, and helps prevent the muscular deconditioning associated with reduced activity.' },
        { question: 'Can chiropractic adjustments affect how my brain processes pain?', answer: 'Research suggests that spinal manipulation may directly influence the central nervous system and how the brain receives and processes pain signals. This can contribute to improved pain regulation over time.' },
      ],
    },

    cta: {
      headline: 'Don\'t live with it — book today.',
      scheme:   4,
      cta:      { label: 'Get My Personalized Plan', href: 'https://summitspine.ca/booking/' },
    },

    relatedConditions: ['low-back-pain', 'spinal-stenosis'],

    structuredData: {
      conditionName:     'Chronic Pain',
      description:       'Chronic pain is defined as persistent or recurring pain lasting longer than three months. It involves central sensitization, structural degeneration, and mechanical nerve compression that keeps the nervous system in a heightened state of alert.',
      possibleTreatment: 'Chiropractic Care, Cox Flexion-Distraction',
    },
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
  hero:       { headline: '', subheadline: '', scheme: 1, cta: { label: 'Get My Personalized Plan', href: 'https://summitspine.ca/booking/' } },
  categories: { headline: '', scheme: 1, items: [] },
  resources:  [],
  newsletter: { headline: '', scheme: 4 },
  cta:        { headline: '', scheme: 4, cta: { label: 'Get My Personalized Plan', href: 'https://summitspine.ca/booking/' } },
}

// ── UTILITY PAGES ────────────────────────────────────────────

export const privacyPage: UtilityPage = {
  meta: {
    slug:          'privacy',
    title:         'Privacy Policy | Summit Spine Centre',
    description:   'Privacy Policy for Summit Spine Centre, Airdrie, AB. Learn how we collect, use, and protect your personal health information under Alberta PIPA and PIPEDA.',
    keywords:      ['Summit Spine Centre privacy policy', 'chiropractic privacy Airdrie'],
    published:     true,
    priority:      'P3',
    type:          'utility',
    canonicalPath: '/privacy',
  },
  title:       'Privacy Policy',
  lastUpdated: '2026-05-13',
  sections: [
    {
      heading: 'Introduction',
      body: 'Summit Spine Centre ("we," "us," or "our") is committed to protecting the privacy of your personal and health information. This policy explains what information we collect, how we use it, and the choices you have. We operate in accordance with Alberta\'s Personal Information Protection Act (PIPA) and Canada\'s Personal Information Protection and Electronic Documents Act (PIPEDA).',
    },
    {
      heading: 'Information We Collect',
      body: 'We collect personal and health information that is necessary to provide chiropractic care and communicate with you. This includes:\n\nContact details (name, phone number, email address, mailing address), health history and clinical notes gathered during assessments and treatments, insurance and billing information you provide, appointment records and correspondence with our clinic, and website usage data collected automatically through cookies and analytics tools.',
    },
    {
      heading: 'How We Use Your Information',
      body: 'We use your information to provide, coordinate, and follow up on chiropractic care; to process billing and insurance claims; to send appointment reminders and health updates you have consented to receive; to comply with our legal and regulatory obligations as a regulated health profession in Alberta; and to improve our website and services through anonymized analytics data.\n\nWe do not sell, rent, or trade your personal information to third parties for marketing purposes.',
    },
    {
      heading: 'How We Protect Your Information',
      body: 'Your information is stored in secure, access-controlled systems. Physical records are kept in locked storage accessible only to authorized clinic staff. Digital records are protected by password controls, encryption, and regular security reviews. Staff are trained on privacy obligations and bound by confidentiality agreements.',
    },
    {
      heading: 'Sharing Your Information',
      body: 'We share your information only when necessary: with other healthcare providers involved in your care (with your consent), with insurers or third-party payers as required to process claims, with regulatory bodies or law enforcement when required by law, and with trusted service providers (such as our booking system) who are bound by confidentiality agreements and may not use your data for any other purpose.',
    },
    {
      heading: 'Your Rights',
      body: 'You have the right to access the personal information we hold about you, request corrections to inaccurate or incomplete information, withdraw consent to certain uses of your information (subject to legal or contractual restrictions), and ask questions about how your information is handled.\n\nTo exercise these rights, contact our Privacy Officer at info@summitspine.ca or call 403-948-4440.',
    },
    {
      heading: 'Cookies and Website Analytics',
      body: 'Our website uses cookies and Google Analytics to understand how visitors use the site. This data is anonymized and does not identify individual users. You can disable cookies in your browser settings; doing so will not affect your ability to access our services.',
    },
    {
      heading: 'Changes to This Policy',
      body: 'We may update this policy from time to time. The most recent version will always be posted on this page with an updated date. Continued use of our services after any changes constitutes acceptance of the revised policy.',
    },
    {
      heading: 'Contact Us',
      body: 'For any privacy questions or concerns, please contact:\n\nSummit Spine Centre — Privacy Officer\n214 Main St N, Airdrie, AB T4B 0R6\nPhone: 403-948-4440\nEmail: info@summitspine.ca',
    },
  ],
}

export const termsPage: UtilityPage = {
  meta: {
    slug:          'terms',
    title:         'Terms of Service | Summit Spine Centre',
    description:   'Terms of Service for Summit Spine Centre, Airdrie, AB. Appointment policies, payment terms, and important disclaimers for chiropractic care.',
    keywords:      ['Summit Spine Centre terms', 'chiropractic clinic policies Airdrie'],
    published:     true,
    priority:      'P3',
    type:          'utility',
    canonicalPath: '/terms',
  },
  title:       'Terms of Service',
  lastUpdated: '2026-05-13',
  sections: [
    {
      heading: 'Acceptance of Terms',
      body: 'By booking an appointment, using our website, or receiving services at Summit Spine Centre, you agree to these Terms of Service. If you do not agree, please do not use our services or website. These terms apply to all patients, visitors, and anyone who accesses our site.',
    },
    {
      heading: 'Our Services',
      body: 'Summit Spine Centre provides chiropractic assessment and treatment services in Airdrie, Alberta. Services are delivered by or under the supervision of licensed Doctors of Chiropractic registered with the Alberta College and Association of Chiropractors (ACAC). We reserve the right to decline to provide services in our professional discretion.',
    },
    {
      heading: 'Appointments and Cancellations',
      body: 'We ask that you provide at least 24 hours notice if you need to cancel or reschedule an appointment. This allows us to offer your time to other patients who need care. Late cancellations or no-shows may result in a cancellation fee at our discretion.\n\nWalk-in appointments are welcome subject to availability. We cannot guarantee same-day walk-in availability without calling ahead.',
    },
    {
      heading: 'Payment and Fees',
      body: 'Payment is due at the time of each visit. We accept major debit and credit cards and cash. We do not offer direct billing to insurance plans — we provide a detailed receipt after each visit for you to submit to your insurer for reimbursement.\n\nAlberta Health Care (AHCIP) does not cover chiropractic services. Fees are set by our clinic and are available upon request.',
    },
    {
      heading: 'Not a Medical Emergency Service',
      body: 'Summit Spine Centre is not an emergency medical service. If you are experiencing a medical emergency, call 911 or go to your nearest emergency room immediately. Our services are not a substitute for emergency care, and nothing on this website should be interpreted as medical advice for acute or emergency conditions.',
    },
    {
      heading: 'Website and Content Disclaimer',
      body: 'The content on our website is provided for general informational purposes only. It does not constitute medical advice and should not be used as a substitute for professional healthcare guidance. Always consult a qualified healthcare provider for questions about your specific health condition.\n\nWe make reasonable efforts to keep website information accurate and up to date, but we make no warranty — express or implied — about the completeness, accuracy, or reliability of any content.',
    },
    {
      heading: 'Limitation of Liability',
      body: 'To the fullest extent permitted by law, Summit Spine Centre and its staff are not liable for any indirect, incidental, or consequential damages arising from your use of our website or services. Our total liability for any claim shall not exceed the amount paid by you for the specific service giving rise to the claim.',
    },
    {
      heading: 'Changes to These Terms',
      body: 'We may update these terms from time to time. The most recent version will be posted on this page with an updated date. Your continued use of our services after any changes constitutes acceptance of the revised terms.',
    },
    {
      heading: 'Governing Law',
      body: 'These terms are governed by the laws of the Province of Alberta and the federal laws of Canada applicable therein. Any disputes shall be resolved in the courts of Alberta.',
    },
    {
      heading: 'Contact Us',
      body: 'For questions about these terms, contact us at:\n\nSummit Spine Centre\n214 Main St N, Airdrie, AB T4B 0R6\nPhone: 403-948-4440\nEmail: info@summitspine.ca',
    },
  ],
}

export const accessibilityPage: UtilityPage = {
  meta: {
    slug:          'accessibility',
    title:         'Accessibility | Summit Spine Centre',
    description:   'Summit Spine Centre is committed to digital accessibility for all users. Learn about our WCAG 2.1 AA conformance and how to report accessibility issues.',
    keywords:      ['Summit Spine Centre accessibility', 'accessible chiropractic website Airdrie'],
    published:     true,
    priority:      'P3',
    type:          'utility',
    canonicalPath: '/accessibility',
  },
  title:       'Accessibility Statement',
  lastUpdated: '2026-05-13',
  sections: [
    {
      heading: 'Our Commitment',
      body: 'Summit Spine Centre is committed to ensuring that our website is accessible to all people, including those with disabilities. We believe that everyone deserves equal access to healthcare information and the ability to book care online without barriers.',
    },
    {
      heading: 'Standards We Follow',
      body: 'We aim to conform to the Web Content Accessibility Guidelines (WCAG) 2.1 Level AA. These guidelines explain how to make web content more accessible to people with disabilities, including those with visual, auditory, physical, speech, cognitive, and neurological disabilities.',
    },
    {
      heading: 'Accessibility Features of This Website',
      body: 'This website is built with the following accessibility practices:\n\nSemantic HTML5 structure with appropriate landmark regions for screen reader navigation. All images include descriptive alt text. Interactive elements include visible focus indicators and ARIA labels. Color contrast ratios meet or exceed WCAG 2.1 AA minimums. Navigation is fully operable by keyboard alone. The site does not use auto-playing media or time-limited interactions. Font sizes are responsive and can be scaled using browser zoom.',
    },
    {
      heading: 'Known Limitations',
      body: 'Our online booking calendar is provided by a third-party platform. While we have chosen a provider that prioritizes accessibility, we cannot fully control the accessibility of third-party content. If you experience difficulty booking online, please contact us directly by phone or email and we will be happy to assist.',
    },
    {
      heading: 'Feedback and Contact',
      body: 'We welcome your feedback on the accessibility of our website. If you encounter any barriers, experience difficulties, or have suggestions for improvement, please let us know:\n\nPhone: 403-948-4440\nEmail: info@summitspine.ca\n\nWe take all accessibility feedback seriously and will work to address issues promptly. If you need information in an alternative format, please contact us and we will do our best to accommodate your request.',
    },
    {
      heading: 'Formal Complaints',
      body: 'If you are not satisfied with our response to an accessibility concern, you may contact the Canadian Human Rights Commission at www.chrc-ccdp.gc.ca or the Alberta Human Rights Commission at www.albertahumanrights.ab.ca.',
    },
  ],
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
  cta: { label: 'Book My Visit', href: 'https://summitspine.ca/booking/', external: true },
  stickyCtaLabel: 'Start Feeling Better Now',
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
