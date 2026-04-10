import { Container } from '../components/ui/Container'
import { Button } from '../components/ui/Button'
import { useScrollToSection } from '../hooks/useScrollToSection'
import { SECTION_IDS, SITE_NAME, SITE_SUBTITLE, SITE_TAGLINE } from '../utils/constants'
import { company } from '../data/company'

export function HeroSection() {
  const scrollTo = useScrollToSection()

  return (
    <section id={SECTION_IDS.hero} className="min-h-screen flex items-center bg-gradient-to-br from-purple-50 via-white to-purple-50 pt-20">
      <Container>
        <div className="max-w-3xl py-20">
          <span className="inline-block mb-4 px-4 py-1.5 bg-purple-100 text-primary text-sm font-semibold rounded-full">
            {SITE_SUBTITLE}
          </span>
          <h1 className="text-4xl md:text-6xl font-bold text-gray-900 leading-tight mb-4">
            {SITE_NAME}
          </h1>
          <p className="text-xl md:text-2xl text-primary font-medium italic mb-6">
            "{SITE_TAGLINE}"
          </p>
          <p className="text-lg text-gray-600 mb-4 leading-relaxed">{company.description}</p>
          <p className="text-base text-gray-500 mb-10 leading-relaxed">{company.about}</p>
          <div className="flex flex-wrap gap-4">
            <Button size="lg" onClick={() => scrollTo(SECTION_IDS.contact)}>
              Contáctenos
            </Button>
            <Button size="lg" variant="outline" onClick={() => scrollTo(SECTION_IDS.services)}>
              Nuestros servicios
            </Button>
          </div>
        </div>
      </Container>
    </section>
  )
}
