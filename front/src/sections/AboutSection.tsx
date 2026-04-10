import { Container } from '../components/ui/Container'
import { SectionTitle } from '../components/ui/SectionTitle'
import { SECTION_IDS } from '../utils/constants'
import { company } from '../data/company'

export function AboutSection() {
  return (
    <section id={SECTION_IDS.about} className="py-20 bg-white">
      <Container>
        <SectionTitle label="Sobre nosotros" title="¿Quiénes somos?" />

        <p className="text-center text-gray-600 max-w-3xl mx-auto mb-14 leading-relaxed">
          {company.identity}
        </p>

        {/* Misión y Visión */}
        <div className="grid md:grid-cols-2 gap-8 mb-14">
          <div className="bg-purple-50 rounded-2xl p-8 border border-purple-100">
            <div className="text-3xl mb-4">🎯</div>
            <h3 className="text-xl font-bold text-gray-900 mb-3">Misión</h3>
            <p className="text-gray-600 leading-relaxed text-sm">{company.mission}</p>
          </div>
          <div className="bg-purple-50 rounded-2xl p-8 border border-purple-100">
            <div className="text-3xl mb-4">🚀</div>
            <h3 className="text-xl font-bold text-gray-900 mb-3">Visión</h3>
            <p className="text-gray-600 leading-relaxed text-sm">{company.vision}</p>
          </div>
        </div>

        {/* Tipos de clientes */}
        <div className="text-center">
          <h3 className="text-lg font-semibold text-gray-900 mb-6">Empresas a las que servimos</h3>
          <div className="flex flex-wrap justify-center gap-3">
            {company.targetClients.map((client) => (
              <span key={client} className="px-4 py-2 bg-gray-100 text-gray-700 rounded-full text-sm font-medium">
                {client}
              </span>
            ))}
          </div>
        </div>
      </Container>
    </section>
  )
}
