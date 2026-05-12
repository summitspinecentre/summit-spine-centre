import type { CTASection, ColorScheme } from '@/types/content'
import Button from '@/components/ui/Button'
import { cn } from '@/lib/utils'

interface CTASectionProps {
  data: CTASection
}

const schemeBg: Record<ColorScheme, string> = {
  1: 'bg-scheme-1',
  2: 'bg-scheme-2',
  3: 'bg-scheme-3',
  4: 'bg-scheme-4',
}

const schemeText: Record<ColorScheme, { headline: string; body: string }> = {
  1: { headline: 'text-neutral-700', body: 'text-neutral-500' },
  2: { headline: 'text-neutral-700', body: 'text-neutral-500' },
  3: { headline: 'text-neutral-700', body: 'text-neutral-500' },
  4: { headline: 'text-neutral-0',   body: 'text-neutral-0/75' },
}

// On scheme 4 (dark bg), override ghost Button to white text so it passes contrast
const schemeGhostOverride: Record<ColorScheme, string | undefined> = {
  1: undefined,
  2: undefined,
  3: undefined,
  4: 'text-neutral-0 hover:text-neutral-0/80 focus-visible:ring-neutral-0',
}

export default function CTASection({ data }: CTASectionProps) {
  const { headline, body, cta, secondaryCta, scheme } = data
  const colors = schemeText[scheme]
  const ghostOverride = schemeGhostOverride[scheme]

  return (
    <section
      aria-label="Call to action"
      className={cn(schemeBg[scheme], 'py-section lg:py-section-lg')}
    >
      <div className="mx-auto max-w-screen-xl px-6 md:px-12 lg:px-20">
        <div className="mx-auto max-w-2xl text-center">

          <h2 className={cn(
            'font-heading text-h3 font-bold leading-tight tracking-tight md:text-h2',
            colors.headline,
          )}>
            {headline}
          </h2>

          {body && (
            <p className={cn('mt-4 text-lg leading-relaxed', colors.body)}>
              {body}
            </p>
          )}

          <div className="mt-8 flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
            <Button
              label={cta.label}
              href={cta.href}
              variant={cta.variant ?? 'primary'}
              size="lg"
              external={cta.external}
            />

            {secondaryCta && (
              <Button
                label={secondaryCta.label}
                href={secondaryCta.href}
                variant={secondaryCta.variant ?? 'ghost'}
                size="lg"
                external={secondaryCta.external}
                className={ghostOverride}
              />
            )}
          </div>

        </div>
      </div>
    </section>
  )
}
