import { Container } from '../components/ui/Container'
import { SectionTitle } from '../components/ui/SectionTitle'
import { Card } from '../components/ui/Card'
import { SECTION_IDS } from '../utils/constants'
import { services } from '../data/services'

export function ServicesSection() {
  return (
    <section id={SECTION_IDS.services} className="section services">
      <Container>
        <SectionTitle
          label="Servicios"
          title="¿Qué podemos hacer por vos?"
          subtitle="Ofrecemos soluciones completas para llevar tu proyecto del concepto al lanzamiento."
        />
        <div className="services__grid">
          {services.map((service) => (
            <Card key={service.id} hoverable className="service-card">
              <div className="service-card__icon">{service.icon}</div>
              <h3 className="service-card__title">{service.title}</h3>
              <p className="service-card__description">{service.description}</p>
              <ul className="service-card__features">
                {service.features.map((f) => (
                  <li key={f}>{f}</li>
                ))}
              </ul>
            </Card>
          ))}
        </div>
      </Container>
    </section>
  )
}
