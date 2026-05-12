import Link from 'next/link'
import { sitemap } from '@/content/sitemap'
import type { PillarPage } from '@/types/content'
import ServicePageTemplate from '@/components/templates/ServicePageTemplate'

interface PillarPageTemplateProps {
  data: PillarPage
}

// Build a slug → { title, path } lookup from the sitemap once at module load
const pillarMap = Object.fromEntries(
  sitemap
    .filter((e) => e.type === 'pillar')
    .map((e) => [e.slug, { title: e.title, path: e.path }])
)

export default function PillarPageTemplate({ data }: PillarPageTemplateProps) {
  const { siblingPillars } = data

  const siblingNav = siblingPillars.length > 0 && (
    <section
      aria-label="Summits of Recovery programme"
      className="bg-hemlock-50 py-8 lg:py-10"
    >
      <div className="mx-auto max-w-screen-xl px-6 md:px-12 lg:px-20">
        <p className="mb-4 text-sm font-semibold uppercase tracking-wider text-hemlock-500">
          Also part of the Summits of Recovery programme
        </p>
        <ul role="list" className="flex flex-wrap gap-3">
          {siblingPillars.map((slug) => {
            const entry = pillarMap[slug]
            if (!entry) return null
            return (
              <li key={slug}>
                <Link
                  href={entry.path}
                  className="inline-flex items-center rounded-md border border-dun bg-neutral-0 px-4 py-2 text-sm font-medium text-eerie-black transition-colors duration-150 hover:border-hemlock-400 hover:bg-hemlock-100 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2"
                >
                  {entry.title}
                </Link>
              </li>
            )
          })}
        </ul>
      </div>
    </section>
  )

  return <ServicePageTemplate data={data} slotAfterHero={siblingNav} />
}
