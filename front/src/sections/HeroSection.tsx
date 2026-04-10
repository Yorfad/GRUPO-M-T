import { Container } from '../components/ui/Container'
import { Button } from '../components/ui/Button'
import { useScrollToSection } from '../hooks/useScrollToSection'
import { SECTION_IDS, SITE_NAME, SITE_SUBTITLE, SITE_TAGLINE } from '../utils/constants'
import { company } from '../data/company'

export function HeroSection() {
  const scrollTo = useScrollToSection()

  return (
    <section id={SECTION_IDS.hero} className="hero">
      <Container>
        <div className="hero__content">
          <span className="hero__badge">{SITE_SUBTITLE}</span>
          <h1 className="hero__title">{SITE_NAME}</h1>
          <p className="hero__slogan">"{SITE_TAGLINE}"</p>
          <p className="hero__description">{company.description}</p>
          <p className="hero__description">{company.about}</p>
          <div className="hero__actions">
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
