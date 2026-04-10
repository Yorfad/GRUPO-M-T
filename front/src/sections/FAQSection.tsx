import { useState } from 'react'
import { Container } from '../components/ui/Container'
import { SectionTitle } from '../components/ui/SectionTitle'
import { SECTION_IDS } from '../utils/constants'
import { faqs } from '../data/faq'

function FAQItem({ question, answer }: { question: string; answer: string }) {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <div className={`border border-gray-200 rounded-xl overflow-hidden ${isOpen ? 'border-purple-200' : ''}`}>
      <button
        onClick={() => setIsOpen((v) => !v)}
        aria-expanded={isOpen}
        className="w-full flex items-center justify-between px-6 py-4 text-left bg-white hover:bg-gray-50 transition-colors"
      >
        <span className="font-semibold text-gray-900 pr-4">{question}</span>
        <span className={`flex-shrink-0 w-6 h-6 rounded-full border-2 border-primary text-primary flex items-center justify-center text-sm font-bold transition-transform ${isOpen ? 'rotate-45' : ''}`}>
          +
        </span>
      </button>
      {isOpen && (
        <div className="px-6 py-4 text-gray-600 text-sm leading-relaxed border-t border-gray-100 bg-white">
          {answer}
        </div>
      )}
    </div>
  )
}

export function FAQSection() {
  return (
    <section id={SECTION_IDS.faq} className="py-20 bg-gray-50">
      <Container narrow>
        <SectionTitle label="FAQ" title="Preguntas frecuentes" subtitle="Todo lo que necesita saber antes de comenzar." />
        <div className="space-y-3">
          {faqs.map((faq) => (
            <FAQItem key={faq.id} question={faq.question} answer={faq.answer} />
          ))}
        </div>
      </Container>
    </section>
  )
}
