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
    <section id={SECTION_IDS.contact} className="py-20 bg-white">
      <Container>
        <SectionTitle
          label="Contáctenos"
          title="¿Hablamos sobre su empresa?"
          subtitle="Si busca modernizar sus procesos y mejorar su eficiencia, estamos listos para ayudarle."
        />

        <div className="grid md:grid-cols-2 gap-12 max-w-4xl mx-auto">
          {/* Info */}
          <div>
            <p className="text-gray-600 leading-relaxed mb-8">
              Nuestro equipo analiza el funcionamiento de su negocio y desarrolla soluciones
              tecnológicas diseñadas específicamente para sus necesidades.
            </p>
            <div className="space-y-5">
              <div>
                <p className="text-sm font-semibold text-gray-500 uppercase tracking-wide mb-1">Teléfono</p>
                <a href={`tel:${PHONE_PRIMARY.replace(/-/g, '')}`} className="text-gray-900 font-medium hover:text-primary transition-colors">
                  {PHONE_PRIMARY}
                </a>
                <span className="text-gray-400 mx-2">/</span>
                <a href={`tel:${PHONE_SECONDARY.replace(/-/g, '')}`} className="text-gray-900 font-medium hover:text-primary transition-colors">
                  {PHONE_SECONDARY}
                </a>
              </div>
              {company.email && (
                <div>
                  <p className="text-sm font-semibold text-gray-500 uppercase tracking-wide mb-1">Email</p>
                  <a href={`mailto:${company.email}`} className="text-gray-900 font-medium hover:text-primary transition-colors">
                    {company.email}
                  </a>
                </div>
              )}
              <div>
                <p className="text-sm font-semibold text-gray-500 uppercase tracking-wide mb-1">Ubicación</p>
                <p className="text-gray-900 font-medium">{company.location}</p>
              </div>
            </div>
          </div>

          {/* Formulario */}
          {submitted ? (
            <div className="flex flex-col items-center justify-center text-center bg-green-50 rounded-2xl p-8 border border-green-100">
              <div className="text-4xl mb-4">✅</div>
              <p className="text-gray-700 font-medium mb-4">
                ¡Gracias! Le redirigimos a WhatsApp para continuar la conversación.
              </p>
              <Button variant="outline" onClick={() => setSubmitted(false)}>
                Enviar otro mensaje
              </Button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} noValidate className="space-y-5">
              <div>
                <label htmlFor="contact-name" className="block text-sm font-semibold text-gray-700 mb-1.5">
                  Nombre / Empresa
                </label>
                <input
                  id="contact-name"
                  type="text"
                  required
                  placeholder="Su nombre o nombre de la empresa"
                  value={form.name}
                  onChange={(e) => setForm((f) => ({ ...f, name: e.target.value }))}
                  className="w-full px-4 py-3 rounded-xl border border-gray-200 text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition"
                />
              </div>
              <div>
                <label htmlFor="contact-phone" className="block text-sm font-semibold text-gray-700 mb-1.5">
                  Teléfono <span className="text-gray-400 font-normal">(opcional)</span>
                </label>
                <input
                  id="contact-phone"
                  type="tel"
                  placeholder="Su número de teléfono"
                  value={form.phone}
                  onChange={(e) => setForm((f) => ({ ...f, phone: e.target.value }))}
                  className="w-full px-4 py-3 rounded-xl border border-gray-200 text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition"
                />
              </div>
              <div>
                <label htmlFor="contact-message" className="block text-sm font-semibold text-gray-700 mb-1.5">
                  ¿Cómo podemos ayudarle?
                </label>
                <textarea
                  id="contact-message"
                  required
                  rows={5}
                  placeholder="Cuéntenos sobre su empresa y los procesos que desea mejorar o automatizar..."
                  value={form.message}
                  onChange={(e) => setForm((f) => ({ ...f, message: e.target.value }))}
                  className="w-full px-4 py-3 rounded-xl border border-gray-200 text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition resize-none"
                />
              </div>
              <Button type="submit" fullWidth size="lg">
                Enviar por WhatsApp
              </Button>
            </form>
          )}
        </div>
      </Container>
    </section>
  )
}
