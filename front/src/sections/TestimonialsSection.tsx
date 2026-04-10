import { Container } from '../components/ui/Container'
import { SectionTitle } from '../components/ui/SectionTitle'
import { Card } from '../components/ui/Card'
import { SECTION_IDS } from '../utils/constants'
import { testimonials } from '../data/testimonials'

function StarRating({ rating }: { rating: number }) {
  return (
    <div className="star-rating" aria-label={`${rating} de 5 estrellas`}>
      {Array.from({ length: 5 }, (_, i) => (
        <span key={i} className={`star ${i < rating ? 'star--filled' : ''}`}>
          ★
        </span>
      ))}
    </div>
  )
}

export function TestimonialsSection() {
  return (
    <section id={SECTION_IDS.testimonials} className="section testimonials">
      <Container>
        <SectionTitle
          label="Testimonios"
          title="Lo que dicen nuestros clientes"
          subtitle="La satisfacción de nuestros clientes es nuestro mayor logro."
        />
        <div className="testimonials__grid">
          {testimonials.map((t) => (
            <Card key={t.id} className="testimonial-card">
              <StarRating rating={t.rating} />
              <blockquote className="testimonial-card__quote">"{t.content}"</blockquote>
              <footer className="testimonial-card__footer">
                {t.avatar && (
                  <img src={t.avatar} alt={t.name} className="testimonial-card__avatar" />
                )}
                <div>
                  <strong className="testimonial-card__name">{t.name}</strong>
                  <span className="testimonial-card__role">
                    {t.role} · {t.company}
                  </span>
                </div>
              </footer>
            </Card>
          ))}
        </div>
      </Container>
    </section>
  )
}
