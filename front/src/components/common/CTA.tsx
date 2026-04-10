import { Button } from '../ui/Button'
import { useScrollToSection } from '../../hooks/useScrollToSection'
import { SECTION_IDS } from '../../utils/constants'

interface CTAProps {
  title?: string
  subtitle?: string
  primaryLabel?: string
  secondaryLabel?: string
  className?: string
}

export function CTA({
  title = '¿Listo para modernizar su empresa?',
  subtitle = 'Contáctenos y conversemos sobre cómo la tecnología puede optimizar su operación.',
  primaryLabel = 'Contáctenos',
  secondaryLabel = 'Ver servicios',
  className = '',
}: CTAProps) {
  const scrollTo = useScrollToSection()

  return (
    <div className={`cta ${className}`}>
      <h2 className="cta__title">{title}</h2>
      {subtitle && <p className="cta__subtitle">{subtitle}</p>}
      <div className="cta__actions">
        <Button onClick={() => scrollTo(SECTION_IDS.contact)}>{primaryLabel}</Button>
        <Button variant="outline" onClick={() => scrollTo(SECTION_IDS.services)}>
          {secondaryLabel}
        </Button>
      </div>
    </div>
  )
}
