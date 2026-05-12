import {
  Activity, HandHeart, Dumbbell, Armchair,
  DoorOpen, CreditCard, Heart, Zap, TrendingUp,
  Smile, ClipboardList, Award, Stethoscope,
  Users, Leaf, Shield, Clock, MapPin, CheckCircle,
  type LucideIcon,
} from 'lucide-react'
import type { ServicePage } from '@/types/content'
import Hero from '@/components/sections/Hero'
import FeaturesListSection from '@/components/sections/FeaturesListSection'
import BenefitsSection from '@/components/sections/BenefitsSection'
import HowItWorksSection from '@/components/sections/HowItWorksSection'
import TestimonialsSection from '@/components/sections/TestimonialsSection'
import FAQSection from '@/components/sections/FAQSection'
import GallerySection from '@/components/sections/GallerySection'
import CTASection from '@/components/sections/CTASection'

interface ServicePageTemplateProps {
  data: ServicePage
  // Optional slot rendered between the Hero and FeatureHighlight — used by PillarPageTemplate
  slotAfterHero?: React.ReactNode
}

const iconMap: Record<string, LucideIcon> = {
  Activity, HandHeart, Dumbbell, Armchair,
  DoorOpen, CreditCard, Heart, Zap, TrendingUp,
  Smile, ClipboardList, Award, Stethoscope,
  Users, Leaf, Shield, Clock, MapPin, CheckCircle,
}

export default function ServicePageTemplate({ data, slotAfterHero }: ServicePageTemplateProps) {
  const {
    hero, featureHighlight, featuresList,
    benefits, howItWorks, testimonials, faqs, gallery, cta,
  } = data

  const Icon = featureHighlight?.icon ? iconMap[featureHighlight.icon] ?? null : null
  const showHighlight  = !!featureHighlight?.title
  const showFeatures   = !!featuresList   && featuresList.items.length   > 0
  const showBenefits   = !!benefits       && benefits.items.length       > 0
  const showHowItWorks = !!howItWorks     && howItWorks.steps.length     > 0
  const showGallery    = !!gallery        && gallery.images.length       > 0

  return (
    <>

      {/* ── Hero ───────────────────────────────────────────── */}
      <Hero data={hero} />

      {/* ── Injected slot (sibling nav for pillar pages) ───── */}
      {slotAfterHero}

      {/* ── Feature Highlight ──────────────────────────────── */}
      {showHighlight && (
        <section
          aria-label={featureHighlight!.title}
          className="bg-neutral-100 py-section lg:py-section-lg"
        >
          <div className="mx-auto max-w-screen-xl px-6 md:px-12 lg:px-20">
            <div className="mx-auto max-w-3xl text-center">

              {Icon && (
                <div
                  aria-hidden="true"
                  className="mx-auto mb-6 flex h-16 w-16 items-center justify-center rounded-xl bg-hemlock-50"
                >
                  <Icon size={32} strokeWidth={1.5} className="text-hemlock-500" />
                </div>
              )}

              <h2 className="font-heading text-h3 font-bold leading-tight tracking-tight text-eerie-black md:text-h2">
                {featureHighlight!.title}
              </h2>
              <p className="mt-4 text-lg leading-relaxed text-text-muted">
                {featureHighlight!.body}
              </p>

            </div>
          </div>
        </section>
      )}

      {/* ── Features List ──────────────────────────────────── */}
      {showFeatures && (
        <FeaturesListSection
          headline={featuresList!.headline}
          subheadline={featuresList!.subheadline}
          items={featuresList!.items}
          scheme={featuresList!.scheme}
          columns={featuresList!.items.length <= 2 ? 2 : 3}
        />
      )}

      {/* ── Benefits ───────────────────────────────────────── */}
      {showBenefits && <BenefitsSection data={benefits!} />}

      {/* ── How It Works ───────────────────────────────────── */}
      {showHowItWorks && <HowItWorksSection data={howItWorks!} />}

      {/* ── Testimonials ───────────────────────────────────── */}
      {testimonials && <TestimonialsSection data={testimonials} />}

      {/* ── Gallery ────────────────────────────────────────── */}
      {showGallery && <GallerySection data={gallery!} />}

      {/* ── FAQs ───────────────────────────────────────────── */}
      {faqs && <FAQSection data={faqs} />}

      {/* ── CTA ────────────────────────────────────────────── */}
      <CTASection data={cta} />

    </>
  )
}
