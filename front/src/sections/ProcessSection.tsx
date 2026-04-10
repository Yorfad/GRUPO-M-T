import { Container } from '../components/ui/Container'
import { SectionTitle } from '../components/ui/SectionTitle'
import { SECTION_IDS } from '../utils/constants'

const steps = [
  { number: '01', title: 'Análisis del negocio', description: 'Después de contactarnos, realizamos una visita o reunión para analizar los procesos operativos de la empresa y comprender cómo funcionan actualmente.' },
  { number: '02', title: 'Identificación de oportunidades', description: 'Identificamos procesos que pueden optimizarse o automatizarse mediante tecnología, con el objetivo de mejorar la eficiencia y reducir errores.' },
  { number: '03', title: 'Diseño de la solución', description: 'Diseñamos una solución tecnológica adaptada a las necesidades del negocio, definiendo su estructura, funciones y alcance.' },
  { number: '04', title: 'Presupuesto del proyecto', description: 'Presentamos una propuesta clara junto con el presupuesto, con base en la solución definida.' },
  { number: '05', title: 'Desarrollo del sistema', description: 'Desarrollamos un software personalizado enfocado en automatizar procesos y mejorar la gestión de la empresa.' },
  { number: '06', title: 'Implementación y acompañamiento', description: 'Implementamos el sistema dentro de la empresa y brindamos acompañamiento y capacitación para asegurar su correcta operación.' },
  { number: '07', title: 'Soporte, mantenimiento y evolución', description: 'Brindamos servicios de soporte técnico, mantenimiento y evolución del sistema, realizando ajustes, mejoras y nuevas funcionalidades conforme crecen las necesidades del negocio.' },
]

export function ProcessSection() {
  return (
    <section id={SECTION_IDS.process} className="py-20 bg-white">
      <Container>
        <SectionTitle
          label="Cómo trabajamos"
          title="Nuestro proceso"
          subtitle="Comprendemos primero el negocio y luego desarrollamos la tecnología adecuada."
        />
        <div className="relative">
          {/* Línea vertical */}
          <div className="absolute left-6 md:left-8 top-0 bottom-0 w-px bg-purple-100 hidden sm:block" />

          <div className="space-y-8">
            {steps.map((step) => (
              <div key={step.number} className="flex gap-6 md:gap-8">
                {/* Número */}
                <div className="flex-shrink-0 w-12 h-12 md:w-16 md:h-16 rounded-full bg-primary text-white flex items-center justify-center font-bold text-sm md:text-base z-10">
                  {step.number}
                </div>
                {/* Contenido */}
                <div className="pb-2 pt-1 md:pt-2">
                  <h3 className="text-lg font-bold text-gray-900 mb-1">{step.title}</h3>
                  <p className="text-gray-600 text-sm leading-relaxed">{step.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </Container>
    </section>
  )
}
