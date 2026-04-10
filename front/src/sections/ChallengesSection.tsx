import { Container } from '../components/ui/Container'
import { SectionTitle } from '../components/ui/SectionTitle'
import { Button } from '../components/ui/Button'
import { useScrollToSection } from '../hooks/useScrollToSection'
import { SECTION_IDS } from '../utils/constants'
import { company } from '../data/company'

export function ChallengesSection() {
  const scrollTo = useScrollToSection()

  return (
    <section id={SECTION_IDS.challenges} className="py-20 bg-gray-50">
      <Container>
        <SectionTitle
          label="Desafíos operativos"
          title="Problemas que ayudamos a resolver"
          subtitle="Muchas empresas enfrentan problemas operativos que afectan su eficiencia y crecimiento."
        />

        <div className="grid sm:grid-cols-2 gap-4 mb-12">
          {company.challenges.map((challenge) => (
            <div key={challenge} className="flex items-start gap-3 bg-white rounded-xl p-4 border border-gray-100">
              <span className="flex-shrink-0 w-6 h-6 rounded-full bg-primary/10 text-primary flex items-center justify-center text-xs font-bold mt-0.5">
                ✓
              </span>
              <p className="text-gray-700 text-sm">{challenge}</p>
            </div>
          ))}
        </div>

        <div className="bg-primary rounded-2xl p-8 md:p-12 text-center text-white">
          <p className="text-lg md:text-xl font-medium mb-6 leading-relaxed">
            Mediante software personalizado y automatización de procesos, ayudamos a las empresas a
            transformar estos desafíos en operaciones más eficientes, organizadas y preparadas para crecer.
          </p>
          <Button
            variant="outline"
            size="lg"
            onClick={() => scrollTo(SECTION_IDS.contact)}
            className="border-white text-white hover:bg-white hover:text-primary"
          >
            Conversemos sobre su empresa
          </Button>
        </div>
      </Container>
    </section>
  )
}
