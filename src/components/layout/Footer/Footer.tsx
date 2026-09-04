import { Container } from '../Container/Container'
import { professional, contactInfo } from '../../../data/professional'
import { navItems, whatsappConfig } from '../../../data/socialLinks'
import styles from './Footer.module.css'

export function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className={styles.footer}>
      <Container>
        <div className={styles.footerGrid}>
          {/* Coluna 1: Empresa */}
          <div className={styles.footerCol}>
            <h3 className={styles.footerTitle}>{professional.company}</h3>
            <p className={styles.footerText}>
              {professional.location}
            </p>
          </div>

          {/* Coluna 2: Navegação */}
          <div className={styles.footerCol}>
            <h4 className={styles.footerSubtitle}>Navegação</h4>
            <ul className={styles.footerLinks}>
              {navItems.map((item) => (
                <li key={item.href}>
                  <a href={item.href} className={styles.footerLink}>
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Coluna 3: Contato */}
          <div className={styles.footerCol}>
            <h4 className={styles.footerSubtitle}>Contato</h4>
            <ul className={styles.footerLinks}>
              <li>
                <a
                  href={`tel:${contactInfo.phone.replace(/\D/g, '')}`}
                  className={styles.footerLink}
                >
                  {contactInfo.phone}
                </a>
              </li>
              <li>
                <a
                  href={whatsappConfig.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={styles.footerLink}
                >
                  WhatsApp
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className={styles.footerBottom}>
          <p className={styles.copyright}>
            &copy; {currentYear} {professional.company}. Todos os direitos reservados.
          </p>
        </div>
      </Container>
    </footer>
  )
}
