import { usePageMeta } from '../hooks/usePageMeta'
import { HeroSection } from '../sections/HeroSection'
import { AboutSection } from '../sections/AboutSection'
import { ServicesSection } from '../sections/ServicesSection'
import { ProcessSection } from '../sections/ProcessSection'
import { ChallengesSection } from '../sections/ChallengesSection'
import { TestimonialsSection } from '../sections/TestimonialsSection'
import { FAQSection } from '../sections/FAQSection'
import { ContactSection } from '../sections/ContactSection'
import { SITE_NAME, SITE_SUBTITLE, SITE_TAGLINE } from '../utils/constants'

export function Home() {
  usePageMeta({
    title: `${SITE_NAME} — ${SITE_TAGLINE}`,
    description: `${SITE_NAME} | ${SITE_SUBTITLE}. Automatización de procesos empresariales mediante software personalizado en Guatemala.`,
  })

  return (
    <>
      <HeroSection />
      <AboutSection />
      <ServicesSection />
      <ProcessSection />
      <ChallengesSection />
      <TestimonialsSection />
      <FAQSection />
      <ContactSection />
    </>
  )
}
