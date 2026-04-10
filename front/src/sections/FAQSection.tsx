import { useState } from 'react'
import { Container } from '../components/ui/Container'
import { SectionTitle } from '../components/ui/SectionTitle'
import { SECTION_IDS } from '../utils/constants'
import { faqs } from '../data/faq'

function FAQItem({ question, answer }: { question: string; answer: string }) {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <div className={`faq-item ${isOpen ? 'faq-item--open' : ''}`}>
      <button
        className="faq-item__question"
        onClick={() => setIsOpen((v) => !v)}
        aria-expanded={isOpen}
      >
        {question}
        <span className="faq-item__icon" aria-hidden="true">
          {isOpen ? '−' : '+'}
        </span>
      </button>
      {isOpen && <div className="faq-item__answer">{answer}</div>}
    </div>
  )
}

export function FAQSection() {
  return (
    <section id={SECTION_IDS.faq} className="section faq">
      <Container narrow>
        <SectionTitle
          label="FAQ"
          title="Preguntas frecuentes"
          subtitle="Todo lo que necesitás saber antes de empezar."
        />
        <div className="faq__list">
          {faqs.map((faq) => (
            <FAQItem key={faq.id} question={faq.question} answer={faq.answer} />
          ))}
        </div>
      </Container>
    </section>
  )
}
