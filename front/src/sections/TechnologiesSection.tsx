import { useState } from 'react'
import { Container } from '../components/ui/Container'
import { SectionTitle } from '../components/ui/SectionTitle'
import { Badge } from '../components/ui/Badge'
import { SECTION_IDS } from '../utils/constants'
import { technologies, techCategories } from '../data/technologies'

export function TechnologiesSection() {
  const [activeCategory, setActiveCategory] = useState<string>('all')

  const filtered =
    activeCategory === 'all'
      ? technologies
      : technologies.filter((t) => t.category === activeCategory)

  return (
    <section id={SECTION_IDS.technologies} className="section technologies">
      <Container>
        <SectionTitle
          label="Tecnologías"
          title="Herramientas que dominamos"
          subtitle="Trabajamos con las tecnologías más modernas y demandadas del mercado."
        />
        <div className="technologies__filters">
          <button
            className={`tech-filter ${activeCategory === 'all' ? 'tech-filter--active' : ''}`}
            onClick={() => setActiveCategory('all')}
          >
            Todas
          </button>
          {techCategories.map((cat) => (
            <button
              key={cat.key}
              className={`tech-filter ${activeCategory === cat.key ? 'tech-filter--active' : ''}`}
              onClick={() => setActiveCategory(cat.key)}
            >
              {cat.label}
            </button>
          ))}
        </div>
        <div className="technologies__grid">
          {filtered.map((tech) => (
            <Badge key={tech.name} variant="default" className="tech-badge">
              {tech.name}
            </Badge>
          ))}
        </div>
      </Container>
    </section>
  )
}
