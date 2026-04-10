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
    scrollTo(href.replace('#', ''))
    setIsMenuOpen(false)
  }

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? 'bg-white/95 backdrop-blur shadow-sm' : 'bg-transparent'}`}>
      <Container>
        <nav className="flex items-center justify-between h-18 py-4">
          {/* Logo */}
          <button
            onClick={() => scrollTo(SECTION_IDS.hero)}
            className="text-left focus:outline-none"
          >
            <span className="block font-bold text-lg text-gray-900 leading-tight">{SITE_NAME}</span>
            <span className="block text-xs text-primary font-medium">{SITE_SUBTITLE}</span>
          </button>

          {/* Links — desktop */}
          <ul className="hidden lg:flex items-center gap-1">
            {NAV_LINKS.map((link) => {
              const id = link.href.replace('#', '')
              return (
                <li key={link.href}>
                  <button
                    onClick={() => handleNavClick(link.href)}
                    className={`px-3 py-2 text-sm rounded-md transition-colors duration-150 ${
                      activeId === id
                        ? 'text-primary font-semibold'
                        : 'text-gray-600 hover:text-gray-900 hover:bg-gray-100'
                    }`}
                  >
                    {link.label}
                  </button>
                </li>
              )
            })}
          </ul>

          {/* CTA + hamburger */}
          <div className="flex items-center gap-3">
            <Button size="sm" onClick={() => scrollTo(SECTION_IDS.contact)} className="hidden sm:inline-flex">
              Contáctenos
            </Button>
            <button
              onClick={() => setIsMenuOpen((v) => !v)}
              aria-label="Menú"
              aria-expanded={isMenuOpen}
              className="lg:hidden flex flex-col gap-1.5 p-2"
            >
              <span className={`block w-6 h-0.5 bg-gray-700 transition-transform ${isMenuOpen ? 'translate-y-2 rotate-45' : ''}`} />
              <span className={`block w-6 h-0.5 bg-gray-700 transition-opacity ${isMenuOpen ? 'opacity-0' : ''}`} />
              <span className={`block w-6 h-0.5 bg-gray-700 transition-transform ${isMenuOpen ? '-translate-y-2 -rotate-45' : ''}`} />
            </button>
          </div>
        </nav>

        {/* Mobile menu */}
        {isMenuOpen && (
          <div className="lg:hidden border-t border-gray-100 py-4 bg-white">
            <ul className="flex flex-col gap-1">
              {NAV_LINKS.map((link) => (
                <li key={link.href}>
                  <button
                    onClick={() => handleNavClick(link.href)}
                    className="w-full text-left px-4 py-2.5 text-sm text-gray-700 hover:bg-gray-50 rounded-md"
                  >
                    {link.label}
                  </button>
                </li>
              ))}
              <li className="pt-2 px-4">
                <Button fullWidth onClick={() => handleNavClick('#contacto')}>
                  Contáctenos
                </Button>
              </li>
            </ul>
          </div>
        )}
      </Container>
    </header>
  )
}
