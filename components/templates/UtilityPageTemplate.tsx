// components/templates/UtilityPageTemplate.tsx
// Shared layout for Privacy, Terms, and Accessibility pages.
// Server Component — no interactivity needed.

import type { UtilityPage } from '@/types/content'
import { cn } from '@/lib/utils'

interface UtilityPageTemplateProps {
  data: UtilityPage
}

export default function UtilityPageTemplate({ data }: UtilityPageTemplateProps) {
  const { title, lastUpdated, sections } = data

  const formatted = lastUpdated
    ? new Date(lastUpdated).toLocaleDateString('en-CA', {
        year:  'numeric',
        month: 'long',
        day:   'numeric',
      })
    : null

  return (
    <main>
      {/* Page header */}
      <section
        aria-label={title}
        className="bg-neutral-0 pb-10 pt-32 lg:pb-12 lg:pt-40"
      >
        <div className="mx-auto w-full max-w-screen-xl px-6 md:px-12 lg:px-20">
          <div className="mx-auto max-w-3xl">
            <h1
              className={cn(
                'mb-4 font-heading font-bold leading-tight tracking-tighter',
                'text-4xl md:text-5xl lg:text-h1',
                'text-eerie-black',
              )}
            >
              {title}
            </h1>
            {formatted && (
              <p className="text-sm text-text-body">
                Last updated: <time dateTime={lastUpdated}>{formatted}</time>
              </p>
            )}
          </div>
        </div>
      </section>

      {/* Divider */}
      <div className="border-b border-dun" />

      {/* Sections */}
      <section className="bg-neutral-0 py-section lg:py-section-lg">
        <div className="mx-auto w-full max-w-screen-xl px-6 md:px-12 lg:px-20">
          <div className="mx-auto max-w-3xl space-y-12">
            {sections.map(({ heading, body }) => (
              <div key={heading} className="border-b border-dun/40 pb-10 last:border-0 last:pb-0">
                <h2
                  className={cn(
                    'mb-4 font-heading font-bold leading-snug',
                    'text-xl md:text-2xl',
                    'text-eerie-black',
                  )}
                >
                  {heading}
                </h2>
                <div className="space-y-4">
                  {body.split('\n\n').map((paragraph, i) => (
                    <p
                      key={i}
                      className="whitespace-pre-line text-base leading-relaxed text-text-body md:text-lg"
                    >
                      {paragraph}
                    </p>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  )
}
