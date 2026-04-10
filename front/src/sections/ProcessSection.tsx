import { Container } from '../components/ui/Container'
import { SectionTitle } from '../components/ui/SectionTitle'
import { SECTION_IDS } from '../utils/constants'

const steps = [
  {
    number: '01',
    title: 'Análisis del negocio',
    description:
      'Después de contactarnos, realizamos una visita o reunión para analizar los procesos operativos de la empresa y comprender cómo funcionan actualmente.',
  },
  {
    number: '02',
    title: 'Identificación de oportunidades',
    description:
      'Identificamos procesos que pueden optimizarse o automatizarse mediante tecnología, con el objetivo de mejorar la eficiencia y reducir errores.',
  },
  {
    number: '03',
    title: 'Diseño de la solución',
    description:
      'Diseñamos una solución tecnológica adaptada a las necesidades del negocio, definiendo su estructura, funciones y alcance.',
  },
  {
    number: '04',
    title: 'Presupuesto del proyecto',
    description:
      'Presentamos una propuesta clara junto con el presupuesto, con base en la solución definida.',
  },
  {
    number: '05',
    title: 'Desarrollo del sistema',
    description:
      'Desarrollamos un software personalizado enfocado en automatizar procesos y mejorar la gestión de la empresa.',
  },
  {
    number: '06',
    title: 'Implementación y acompañamiento',
    description:
      'Implementamos el sistema dentro de la empresa y brindamos acompañamiento y capacitación para asegurar su correcta operación.',
  },
  {
    number: '07',
    title: 'Soporte, mantenimiento y evolución',
    description:
      'Brindamos servicios de soporte técnico, mantenimiento y evolución del sistema, realizando ajustes, mejoras y nuevas funcionalidades conforme crecen las necesidades del negocio.',
  },
]

export function ProcessSection() {
  return (
    <section id={SECTION_IDS.process} className="section process">
      <Container>
        <SectionTitle
          label="Cómo trabajamos"
          title="Nuestro enfoque se basa en comprender primero el negocio"
          subtitle="y luego desarrollar la tecnología adecuada para optimizar sus procesos."
        />
        <div className="process__steps">
          {steps.map((step) => (
            <div key={step.number} className="process__step">
              <div className="process__step-number">{step.number}</div>
              <div className="process__step-content">
                <h3 className="process__step-title">{step.title}</h3>
                <p className="process__step-description">{step.description}</p>
              </div>
            </div>
          ))}
        </div>
      </Container>
    </section>
  )
}
