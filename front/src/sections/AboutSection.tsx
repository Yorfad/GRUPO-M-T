import { Container } from '../components/ui/Container'
import { SectionTitle } from '../components/ui/SectionTitle'
import { SECTION_IDS } from '../utils/constants'
import { company } from '../data/company'

export function AboutSection() {
  return (
    <section id={SECTION_IDS.about} className="section about">
      <Container>
        <SectionTitle label="Sobre nosotros" title="¿Quiénes somos?" align="center" />

        <p className="about__intro">{company.identity}</p>

        <div className="about__mv">
          <div className="about__mv-item">
            <h3 className="about__mv-title">Misión</h3>
            <p>{company.mission}</p>
          </div>
          <div className="about__mv-item">
            <h3 className="about__mv-title">Visión</h3>
            <p>{company.vision}</p>
          </div>
        </div>

        <div className="about__clients">
          <h3 className="about__clients-title">Empresas a las que servimos</h3>
          <ul className="about__clients-list">
            {company.targetClients.map((client) => (
              <li key={client}>{client}</li>
            ))}
          </ul>
        </div>
      </Container>
    </section>
  )
}
