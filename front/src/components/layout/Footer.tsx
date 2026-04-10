import { Container } from '../ui/Container'
import { SocialLinks } from '../common/SocialLinks'
import { useScrollToSection } from '../../hooks/useScrollToSection'
import { NAV_LINKS, SITE_NAME, SITE_SUBTITLE, PHONE_PRIMARY, PHONE_SECONDARY } from '../../utils/constants'
import { company } from '../../data/company'

export function Footer() {
  const scrollTo = useScrollToSection()
  const year = new Date().getFullYear()

  return (
    <footer className="footer">
      <Container>
        <div className="footer__top">
          <div className="footer__brand">
            <span className="footer__logo">{SITE_NAME}</span>
            <span className="footer__subtitle">{SITE_SUBTITLE}</span>
            <p className="footer__slogan">"{company.slogan}"</p>
            <SocialLinks />
          </div>

          <nav className="footer__nav" aria-label="Footer navigation">
            <h3 className="footer__nav-title">Navegación</h3>
            <ul>
              {NAV_LINKS.map((link) => (
                <li key={link.href}>
                  <button
                    className="footer__nav-link"
                    onClick={() => scrollTo(link.href.replace('#', ''))}
                  >
                    {link.label}
                  </button>
                </li>
              ))}
            </ul>
          </nav>

          <div className="footer__contact">
            <h3 className="footer__nav-title">Contacto</h3>
            <ul>
              <li>
                <a href={`tel:${PHONE_PRIMARY.replace(/-/g, '')}`}>{PHONE_PRIMARY}</a>
              </li>
              <li>
                <a href={`tel:${PHONE_SECONDARY.replace(/-/g, '')}`}>{PHONE_SECONDARY}</a>
              </li>
              {company.email && (
                <li>
                  <a href={`mailto:${company.email}`}>{company.email}</a>
                </li>
              )}
              <li>{company.location}</li>
            </ul>
          </div>
        </div>

        <div className="footer__bottom">
          <p>
            &copy; {year} {SITE_NAME}. Todos los derechos reservados.
          </p>
        </div>
      </Container>
    </footer>
  )
}
