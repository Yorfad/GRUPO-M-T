import { useState, useEffect } from 'react'
import { Container } from '../ui/Container'
import { Button } from '../ui/Button'
import { useScrollSpy } from '../../hooks/useScrollSpy'
import { useScrollToSection } from '../../hooks/useScrollToSection'
import { NAV_LINKS, SECTION_IDS, SITE_NAME, SITE_SUBTITLE } from '../../utils/constants'

export function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)
  const scrollTo = useScrollToSection()
  const sectionIds = Object.values(SECTION_IDS)
  const activeId = useScrollSpy(sectionIds)

  useEffect(() => {
    const onScroll = () => setIsScrolled(window.scrollY > 20)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const handleNavClick = (href: string) => {
    const id = href.replace('#', '')
    scrollTo(id)
    setIsMenuOpen(false)
  }

  return (
    <header className={`navbar ${isScrolled ? 'navbar--scrolled' : ''}`}>
      <Container>
        <nav className="navbar__inner">
          <button className="navbar__logo" onClick={() => scrollTo(SECTION_IDS.hero)}>
            <span className="navbar__logo-name">{SITE_NAME}</span>
            <span className="navbar__logo-sub">{SITE_SUBTITLE}</span>
          </button>

          <ul className={`navbar__links ${isMenuOpen ? 'navbar__links--open' : ''}`}>
            {NAV_LINKS.map((link) => (
              <li key={link.href}>
                <button
                  className={`navbar__link ${activeId === link.href.replace('#', '') ? 'navbar__link--active' : ''}`}
                  onClick={() => handleNavClick(link.href)}
                >
                  {link.label}
                </button>
              </li>
            ))}
          </ul>

          <div className="navbar__actions">
            <Button size="sm" onClick={() => scrollTo(SECTION_IDS.contact)}>
              Contáctenos
            </Button>
            <button
              className="navbar__menu-toggle"
              onClick={() => setIsMenuOpen((v) => !v)}
              aria-label="Menú"
              aria-expanded={isMenuOpen}
            >
              <span />
              <span />
              <span />
            </button>
          </div>
        </nav>
      </Container>
    </header>
  )
}
