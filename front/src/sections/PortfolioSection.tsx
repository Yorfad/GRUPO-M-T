import { Container } from '../components/ui/Container'
import { SectionTitle } from '../components/ui/SectionTitle'
import { Card } from '../components/ui/Card'
import { Badge } from '../components/ui/Badge'
import { SECTION_IDS } from '../utils/constants'

// TODO: move to data/portfolio.ts and create Portfolio type
const projects = [
  {
    id: '1',
    title: 'E-Commerce Fashion',
    description: 'Tienda online completa con catálogo, carrito y pagos integrados.',
    tags: ['React', 'Node.js', 'Stripe'],
    image: '',
  },
  {
    id: '2',
    title: 'App de Gestión Interna',
    description: 'Panel de administración para gestión de inventario y pedidos.',
    tags: ['Next.js', 'PostgreSQL', 'Docker'],
    image: '',
  },
  {
    id: '3',
    title: 'Landing Page SaaS',
    description: 'Landing de alto rendimiento con métricas de conversión optimizadas.',
    tags: ['React', 'TypeScript', 'Vite'],
    image: '',
  },
]

export function PortfolioSection() {
  return (
    <section id={SECTION_IDS.portfolio} className="section portfolio">
      <Container>
        <SectionTitle
          label="Portafolio"
          title="Proyectos que hablan por nosotros"
          subtitle="Una selección de trabajos que demuestran lo que podemos construir juntos."
        />
        <div className="portfolio__grid">
          {projects.map((project) => (
            <Card key={project.id} hoverable className="portfolio-card">
              <div className="portfolio-card__image">
                {project.image ? (
                  <img src={project.image} alt={project.title} />
                ) : (
                  <div className="portfolio-card__placeholder" />
                )}
              </div>
              <div className="portfolio-card__body">
                <h3 className="portfolio-card__title">{project.title}</h3>
                <p className="portfolio-card__description">{project.description}</p>
                <div className="portfolio-card__tags">
                  {project.tags.map((tag) => (
                    <Badge key={tag} variant="primary">
                      {tag}
                    </Badge>
                  ))}
                </div>
              </div>
            </Card>
          ))}
        </div>
      </Container>
    </section>
  )
}
