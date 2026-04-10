import { Container } from '../components/ui/Container'
import { SectionTitle } from '../components/ui/SectionTitle'
import { SECTION_IDS } from '../utils/constants'
import { services } from '../data/services'

export function ServicesSection() {
  return (
    <section id={SECTION_IDS.services} className="py-20 bg-gray-50">
      <Container>
        <SectionTitle
          label="Servicios"
          title="¿Qué podemos hacer por su empresa?"
          subtitle="Ofrecemos soluciones completas para modernizar y automatizar la operación de su negocio."
        />
        <div className="grid sm:grid-cols-2 lg:grid-cols-2 gap-6">
          {services.map((service) => (
            <div key={service.id} className="bg-white rounded-2xl p-8 border border-gray-100 shadow-sm hover:shadow-md transition-shadow duration-200">
              <div className="text-4xl mb-4">{service.icon}</div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">{service.title}</h3>
              <p className="text-gray-600 mb-5 leading-relaxed text-sm">{service.description}</p>
              <ul className="space-y-2">
                {service.features.map((f) => (
                  <li key={f} className="flex items-center gap-2 text-sm text-gray-600">
                    <span className="w-1.5 h-1.5 rounded-full bg-primary flex-shrink-0" />
                    {f}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </Container>
    </section>
  )
}
