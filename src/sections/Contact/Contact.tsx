import { Container } from '../../components/layout/Container/Container'
import { SectionTitle } from '../../components/common/SectionTitle/SectionTitle'
import { Button } from '../../components/common/Button/Button'
import { contactInfo, professional } from '../../data/professional'
import { whatsappConfig } from '../../data/socialLinks'
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

            <h4 className={styles.infoTitle}>Localização</h4>
            <p className={styles.infoText}>{professional.location}</p>
          </div>
        </div>
      </Container>
    </section>
  )
}
