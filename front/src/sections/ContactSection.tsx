import { useState, type FormEvent } from 'react'
import { Container } from '../components/ui/Container'
import { SectionTitle } from '../components/ui/SectionTitle'
import { Button } from '../components/ui/Button'
import { SECTION_IDS, PHONE_PRIMARY, PHONE_SECONDARY } from '../utils/constants'
import { company } from '../data/company'
import { buildWhatsAppUrl } from '../utils/format'

interface FormState {
  name: string
  phone: string
  message: string
}

export function ContactSection() {
  const [form, setForm] = useState<FormState>({ name: '', phone: '', message: '' })
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault()
    const text = `Hola, soy ${form.name}${form.phone ? ` (Tel: ${form.phone})` : ''}.\n\n${form.message}`
    window.open(buildWhatsAppUrl(company.whatsapp, text), '_blank')
    setSubmitted(true)
  }

  return (
    <section id={SECTION_IDS.contact} className="section contact">
      <Container>
        <SectionTitle
          label="Contáctenos"
          title="¿Hablamos sobre su empresa?"
          subtitle="Si su empresa busca modernizar sus procesos y mejorar su eficiencia mediante tecnología, en GRUPO M&T podemos ayudarle."
        />
        <div className="contact__inner">
          <div className="contact__info">
            <p className="contact__info-lead">
              Nuestro equipo analiza el funcionamiento de su negocio y desarrolla soluciones
              tecnológicas diseñadas específicamente para sus necesidades.
            </p>
            <div className="contact__info-item">
              <strong>Teléfono</strong>
              <div>
                <a href={`tel:${PHONE_PRIMARY.replace(/-/g, '')}`}>{PHONE_PRIMARY}</a>
                <span> / </span>
                <a href={`tel:${PHONE_SECONDARY.replace(/-/g, '')}`}>{PHONE_SECONDARY}</a>
              </div>
            </div>
            {company.email && (
              <div className="contact__info-item">
                <strong>Correo electrónico</strong>
                <a href={`mailto:${company.email}`}>{company.email}</a>
              </div>
            )}
            <div className="contact__info-item">
              <strong>Ubicación</strong>
              <span>{company.location}</span>
            </div>
          </div>

          {submitted ? (
            <div className="contact__success">
              <p>
                ¡Gracias por contactarnos! Le redirigimos a WhatsApp para continuar la conversación.
              </p>
              <Button variant="outline" onClick={() => setSubmitted(false)}>
                Enviar otro mensaje
              </Button>
            </div>
          ) : (
            <form className="contact__form" onSubmit={handleSubmit} noValidate>
              <div className="form-group">
                <label htmlFor="contact-name">Nombre / Empresa</label>
                <input
                  id="contact-name"
                  type="text"
                  required
                  placeholder="Su nombre o nombre de la empresa"
                  value={form.name}
                  onChange={(e) => setForm((f) => ({ ...f, name: e.target.value }))}
                />
              </div>
              <div className="form-group">
                <label htmlFor="contact-phone">Teléfono (opcional)</label>
                <input
                  id="contact-phone"
                  type="tel"
                  placeholder="Su número de teléfono"
                  value={form.phone}
                  onChange={(e) => setForm((f) => ({ ...f, phone: e.target.value }))}
                />
              </div>
              <div className="form-group">
                <label htmlFor="contact-message">¿Cómo podemos ayudarle?</label>
                <textarea
                  id="contact-message"
                  required
                  rows={5}
                  placeholder="Cuéntenos sobre su empresa y los procesos que desea mejorar o automatizar..."
                  value={form.message}
                  onChange={(e) => setForm((f) => ({ ...f, message: e.target.value }))}
                />
              </div>
              <Button type="submit" fullWidth>
                Enviar por WhatsApp
              </Button>
            </form>
          )}
        </div>
      </Container>
    </section>
  )
}
