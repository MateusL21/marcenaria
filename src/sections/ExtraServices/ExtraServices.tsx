import { Container } from '../../components/layout/Container/Container'
import { SectionTitle } from '../../components/common/SectionTitle/SectionTitle'
import { extraServices } from '../../data/extraServices'
import styles from './ExtraServices.module.css'

export function ExtraServices() {
  return (
    <section id="outros-servicos" className={styles.extraServices}>
      <Container>
        <SectionTitle
          title="Também Fazemos"
          subtitle="Serviços adicionais para cuidar de cada detalhe do seu espaço"
        />
        <div className={styles.grid}>
          {extraServices.map((service) => (
            <article key={service.id} className={styles.card}>
              <div className={styles.imageWrapper}>
                <img
                  src={service.image}
                  alt={service.alt}
                  className={styles.image}
                  loading="lazy"
                />
              </div>
              <div className={styles.content}>
                <h3 className={styles.title}>{service.title}</h3>
                <p className={styles.description}>{service.description}</p>
              </div>
            </article>
          ))}
        </div>
      </Container>
    </section>
  )
}
