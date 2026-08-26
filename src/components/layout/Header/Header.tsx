import { useState, useEffect, useCallback } from 'react'
import { Container } from '../Container/Container'
import { navItems, whatsappConfig } from '../../../data/socialLinks'
import { professional } from '../../../data/professional'
import styles from './Header.module.css'

export function Header() {
  const [menuOpen, setMenuOpen] = useState(false)

  const toggleMenu = () => setMenuOpen(!menuOpen)
  const closeMenu = useCallback(() => setMenuOpen(false), [])

  // Close menu on Escape key
  useEffect(() => {
    if (!menuOpen) return

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        closeMenu()
      }
    }

    document.addEventListener('keydown', handleKeyDown)
    return () => document.removeEventListener('keydown', handleKeyDown)
  }, [menuOpen, closeMenu])

  // Prevent body scroll when mobile menu is open
  useEffect(() => {
    if (menuOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = ''
    }
    return () => {
      document.body.style.overflow = ''
    }
  }, [menuOpen])

  return (
    <header className={styles.header}>
      <Container>
        <div className={styles.headerInner}>
          <a href="#inicio" className={styles.logo}>
            {professional.company}
          </a>

          <nav
            className={`${styles.nav} ${menuOpen ? styles.navOpen : ''}`}
            aria-label="Navegação principal"
          >
            <ul className={styles.navList}>
              {navItems.map((item) => (
                <li key={item.href}>
                  <a
                    href={item.href}
                    className={styles.navLink}
                    onClick={closeMenu}
                  >
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          <a
            href={whatsappConfig.url}
            target="_blank"
            rel="noopener noreferrer"
            className={styles.cta}
          >
            Solicitar orçamento
          </a>

          <button
            type="button"
            className={`${styles.menuToggle} ${menuOpen ? styles.menuToggleOpen : ''}`}
            onClick={toggleMenu}
            aria-label={menuOpen ? 'Fechar menu' : 'Abrir menu'}
            aria-expanded={menuOpen}
            aria-controls="mobile-nav"
          >
            <span className={styles.menuBar}></span>
            <span className={styles.menuBar}></span>
            <span className={styles.menuBar}></span>
          </button>
        </div>
      </Container>
    </header>
  )
}
