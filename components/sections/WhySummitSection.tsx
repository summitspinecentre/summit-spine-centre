import type { WhySummitSection as WhySummitSectionData, ColorScheme, TreatmentBox } from '@/types/content'
import { cn } from '@/lib/utils'

interface Props {
  data: WhySummitSectionData
}

const schemeBg: Record<ColorScheme, string> = {
  1: 'bg-scheme-1',
  2: 'bg-scheme-2',
  3: 'bg-scheme-3',
  4: 'bg-scheme-4',
}

const schemeColors: Record<ColorScheme, {
  eyebrow:    string
  headline:   string
  body:       string
  boxBg:      string
  boxBorder:  string
  boxLabel:   string
  boxHeading: string
  boxBody:    string
}> = {
  1: {
    eyebrow:    'text-cerulean',
    headline:   'text-neutral-700',
    body:       'text-neutral-500',
    boxBg:      'bg-neutral-100',
    boxBorder:  'border-cerulean',
    boxLabel:   'text-cerulean',
    boxHeading: 'text-neutral-700',
    boxBody:    'text-neutral-500',
  },
  2: {
    eyebrow:    'text-cerulean',
    headline:   'text-neutral-700',
    body:       'text-neutral-500',
    boxBg:      'bg-neutral-0',
    boxBorder:  'border-cerulean',
    boxLabel:   'text-cerulean',
    boxHeading: 'text-neutral-700',
    boxBody:    'text-neutral-500',
  },
  3: {
    eyebrow:    'text-cerulean',
    headline:   'text-neutral-700',
    body:       'text-neutral-500',
    boxBg:      'bg-neutral-0',
    boxBorder:  'border-cerulean',
    boxLabel:   'text-cerulean',
    boxHeading: 'text-neutral-700',
    boxBody:    'text-neutral-500',
  },
  4: {
    eyebrow:    'text-neutral-0/70',
    headline:   'text-neutral-0',
    body:       'text-neutral-0/80',
    boxBg:      'bg-hemlock-500',
    boxBorder:  'border-neutral-0/30',
    boxLabel:   'text-neutral-0/70',
    boxHeading: 'text-neutral-0',
    boxBody:    'text-neutral-0/75',
  },
}

function TreatmentBoxCard({ box, colors }: {
  box: TreatmentBox
  colors: typeof schemeColors[ColorScheme]
}) {
  return (
    <div className={cn(
      'rounded-lg border-l-4 px-8 py-8',
      colors.boxBg,
      colors.boxBorder,
    )}>
      <p className={cn(
        'mb-3 text-xs font-semibold uppercase tracking-wider',
        colors.boxLabel,
      )}>
        {box.label}
      </p>

      <h3 className={cn(
        'font-heading text-h4 font-bold leading-snug',
        colors.boxHeading,
      )}>
        {box.subheading}
      </h3>

      <p className={cn('mt-4 text-base leading-relaxed', colors.boxBody)}>
        {box.body}
      </p>
    </div>
  )
}

export default function WhySummitSection({ data }: Props) {
  const { sectionLabel, headline, body, boxes, scheme } = data
  const colors = schemeColors[scheme]

  return (
    <section
      aria-label="Why Summit Spine Centre"
      className={cn(schemeBg[scheme], 'py-section lg:py-section-lg')}
    >
      <div className="mx-auto max-w-screen-xl px-6 md:px-12 lg:px-20">

        <div className="mx-auto max-w-2xl text-center">
          <p className={cn(
            'mb-4 text-xs font-semibold uppercase tracking-wider',
            colors.eyebrow,
          )}>
            {sectionLabel}
          </p>

          <h2 className={cn(
            'font-heading text-h3 font-bold leading-tight tracking-tight md:text-h2',
            colors.headline,
          )}>
            {headline}
          </h2>

          <p className={cn('mt-6 text-lg leading-relaxed', colors.body)}>
            {body}
          </p>
        </div>

        <div className="mt-12 grid grid-cols-1 gap-6 md:grid-cols-2 lg:gap-8">
          {boxes.map((box) => (
            <TreatmentBoxCard key={box.label} box={box} colors={colors} />
          ))}
        </div>

      </div>
    </section>
  )
}
