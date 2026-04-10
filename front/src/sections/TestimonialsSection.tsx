import { Container } from '../components/ui/Container'
import { SectionTitle } from '../components/ui/SectionTitle'
import { SECTION_IDS } from '../utils/constants'
import { testimonials } from '../data/testimonials'

export function TestimonialsSection() {
  return (
    <section id={SECTION_IDS.testimonials} className="py-20 bg-white">
      <Container>
        <SectionTitle
          label="Testimonios"
          title="Lo que dicen nuestros clientes"
          subtitle="La satisfacción de nuestros clientes es nuestro mayor logro."
        />
        <div className="grid sm:grid-cols-2 lg:grid-cols-2 gap-6">
          {testimonials.map((t) => (
            <div key={t.id} className="bg-gray-50 rounded-2xl p-8 border border-gray-100">
              <div className="flex gap-1 mb-4">
                {Array.from({ length: t.rating }, (_, i) => (
                  <span key={i} className="text-yellow-400 text-lg">★</span>
                ))}
              </div>
              <blockquote className="text-gray-700 italic leading-relaxed mb-6">
                "{t.content}"
              </blockquote>
              <footer>
                <p className="font-semibold text-gray-900">{t.name}</p>
                <p className="text-sm text-gray-500">{t.role} · {t.company}</p>
              </footer>
            </div>
          ))}
        </div>
      </Container>
    </section>
  )
}
