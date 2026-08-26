import { Container } from '../../components/layout/Container/Container'
import { SectionTitle } from '../../components/common/SectionTitle/SectionTitle'
import { Button } from '../../components/common/Button/Button'
import { contactInfo, professional } from '../../data/professional'
import { whatsappConfig, socialLinks } from '../../data/socialLinks'
import styles from './Contact.module.css'

export function Contact() {
  return (
    <section id="contato" className={styles.contact}>
      <Container>
        <SectionTitle
          title="Entre em Contato"
          subtitle="Solicite seu orçamento ou tire suas dúvidas. Estamos prontos para atendê-lo."
        />

        <div className={styles.grid}>
          {/* Card WhatsApp destacado */}
          <div className={styles.ctaCard}>
            <h3 className={styles.ctaTitle}>Solicite seu orçamento</h3>
            <p className={styles.ctaText}>
              Envie uma mensagem pelo WhatsApp e receba um atendimento personalizado.
            </p>
            <Button
              as="a"
              href={whatsappConfig.url}
              target="_blank"
              rel="noopener noreferrer"
              variant="primary"
            >
              Chamar no WhatsApp
            </Button>
          </div>

          {/* Informações de contato */}
          <div className={styles.infoCard}>
            <h4 className={styles.infoTitle}>Telefone</h4>
            <a
              href={`tel:${contactInfo.phone.replace(/\D/g, '')}`}
              className={styles.infoLink}
            >
              {contactInfo.phone}
            </a>

            <h4 className={styles.infoTitle}>E-mail</h4>
            <a
              href={`mailto:${contactInfo.email}`}
              className={styles.infoLink}
            >
              {contactInfo.email}
            </a>

            <h4 className={styles.infoTitle}>Localização</h4>
            <p className={styles.infoText}>{professional.location}</p>

            <h4 className={styles.infoTitle}>Horário de Atendimento</h4>
            <p className={styles.infoText}>{contactInfo.hours}</p>
          </div>

          {/* Redes Sociais */}
          <div className={styles.socialCard}>
            <h4 className={styles.infoTitle}>Redes Sociais</h4>
            <ul className={styles.socialList}>
              {socialLinks.map((link) => (
                <li key={link.id}>
                  <a
                    href={link.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={styles.socialLink}
                  >
                    <span className={styles.socialPlatform}>{link.platform}</span>
                    <span className={styles.socialLabel}>{link.label}</span>
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </Container>
    </section>
  )
}
