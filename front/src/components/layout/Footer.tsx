import { Container } from '../ui/Container'
import { SocialLinks } from '../common/SocialLinks'
import { useScrollToSection } from '../../hooks/useScrollToSection'
import { NAV_LINKS, SITE_NAME, SITE_SUBTITLE, PHONE_PRIMARY, PHONE_SECONDARY } from '../../utils/constants'
import { company } from '../../data/company'

export function Footer() {
  const scrollTo = useScrollToSection()
  const year = new Date().getFullYear()

  return (
    <footer className="bg-gray-900 text-gray-300">
      <Container>
        <div className="py-12 grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Brand */}
          <div>
            <p className="font-bold text-white text-lg">{SITE_NAME}</p>
            <p className="text-primary text-sm font-medium mb-3">{SITE_SUBTITLE}</p>
            <p className="text-sm italic text-gray-400 mb-4">"{company.slogan}"</p>
            <SocialLinks />
          </div>

          {/* Nav */}
          <nav aria-label="Footer navigation">
            <p className="font-semibold text-white mb-4">Navegación</p>
            <ul className="space-y-2">
              {NAV_LINKS.map((link) => (
                <li key={link.href}>
                  <button
                    onClick={() => scrollTo(link.href.replace('#', ''))}
                    className="text-sm text-gray-400 hover:text-white transition-colors"
                  >
                    {link.label}
                  </button>
                </li>
              ))}
            </ul>
          </nav>

          {/* Contact */}
          <div>
            <p className="font-semibold text-white mb-4">Contacto</p>
            <ul className="space-y-2 text-sm text-gray-400">
              <li>
                <a href={`tel:${PHONE_PRIMARY.replace(/-/g, '')}`} className="hover:text-white transition-colors">
                  {PHONE_PRIMARY}
                </a>
              </li>
              <li>
                <a href={`tel:${PHONE_SECONDARY.replace(/-/g, '')}`} className="hover:text-white transition-colors">
                  {PHONE_SECONDARY}
                </a>
              </li>
              {company.email && (
                <li>
                  <a href={`mailto:${company.email}`} className="hover:text-white transition-colors">
                    {company.email}
                  </a>
                </li>
              )}
              <li>{company.location}</li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 py-6 text-center text-sm text-gray-500">
          &copy; {year} {SITE_NAME}. Todos los derechos reservados.
        </div>
      </Container>
    </footer>
  )
}
