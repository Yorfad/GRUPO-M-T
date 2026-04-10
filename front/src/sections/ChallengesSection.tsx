import { Container } from '../components/ui/Container'
import { SectionTitle } from '../components/ui/SectionTitle'
import { Button } from '../components/ui/Button'
import { useScrollToSection } from '../hooks/useScrollToSection'
import { SECTION_IDS } from '../utils/constants'
import { company } from '../data/company'

export function ChallengesSection() {
  const scrollTo = useScrollToSection()

  return (
    <section id={SECTION_IDS.challenges} className="section challenges">
      <Container>
        <SectionTitle
          label="Desafíos operativos"
          title="Problemas que ayudamos a resolver"
          subtitle="Muchas empresas enfrentan problemas operativos que afectan su eficiencia y crecimiento. En GRUPO M&T ayudamos a resolver situaciones como:"
        />
        <ul className="challenges__list">
          {company.challenges.map((challenge) => (
            <li key={challenge} className="challenges__item">
              <span className="challenges__icon" aria-hidden="true">✓</span>
              {challenge}
            </li>
          ))}
        </ul>
        <p className="challenges__closing">
          Mediante software personalizado y automatización de procesos, ayudamos a las empresas a
          transformar estos desafíos en operaciones más eficientes, organizadas y preparadas para
          crecer.
        </p>
        <div className="challenges__cta">
          <Button onClick={() => scrollTo(SECTION_IDS.contact)}>
            Conversemos sobre su empresa
          </Button>
        </div>
      </Container>
    </section>
  )
}
