import Image from 'next/image'
import type { GallerySection, ColorScheme } from '@/types/content'
import { cn } from '@/lib/utils'

interface GallerySectionProps {
  data: GallerySection
}

const schemeBg: Record<ColorScheme, string> = {
  1: 'bg-scheme-1',
  2: 'bg-scheme-2',
  3: 'bg-scheme-3',
  4: 'bg-scheme-4',
}

const schemeText: Record<ColorScheme, { headline: string; caption: string }> = {
  1: { headline: 'text-neutral-700', caption: 'text-neutral-500' },
  2: { headline: 'text-neutral-700', caption: 'text-neutral-500' },
  3: { headline: 'text-neutral-700', caption: 'text-neutral-500' },
  4: { headline: 'text-neutral-0',   caption: 'text-neutral-0/70' },
}

function gridClass(count: number): string {
  if (count === 1) return 'grid-cols-1 max-w-lg mx-auto'
  if (count === 2) return 'grid-cols-1 sm:grid-cols-2'
  if (count === 3) return 'grid-cols-1 sm:grid-cols-2 lg:grid-cols-3'
  return 'grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4'
}

export default function GallerySection({ data }: GallerySectionProps) {
  const { headline, images, scheme } = data
  if (!images.length) return null

  const colors = schemeText[scheme]

  return (
    <section
      aria-label={headline ?? 'Photo gallery'}
      className={cn(schemeBg[scheme], 'py-section lg:py-section-lg')}
    >
      <div className="mx-auto max-w-screen-xl px-6 md:px-12 lg:px-20">

        {headline && (
          <h2 className={cn(
            'mb-10 text-center font-heading text-h3 font-bold leading-tight tracking-tight md:text-h2',
            colors.headline,
          )}>
            {headline}
          </h2>
        )}

        <ul className={cn('grid gap-4', gridClass(images.length))} role="list">
          {images.map((img, i) => (
            <li key={`${img.src}-${i}`}>
              <figure>
                <div className="relative aspect-[4/3] overflow-hidden rounded-lg">
                  <Image
                    src={img.src}
                    alt={img.alt}
                    fill
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    className="object-cover transition-transform duration-300 hover:scale-105"
                    priority={img.priority}
                  />
                </div>
                {img.caption && (
                  <figcaption className={cn('mt-2 text-center text-sm', colors.caption)}>
                    {img.caption}
                  </figcaption>
                )}
              </figure>
            </li>
          ))}
        </ul>

      </div>
    </section>
  )
}
