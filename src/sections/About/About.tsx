import { Container } from '../../components/layout/Container/Container'
import styles from './About.module.css'

export function About() {
  return (
    <section id="sobre" className={styles.about}>
      <Container>
        {/* Composição editorial: retrato dos donos */}
        <figure className={styles.composition}>
          <div
            className={styles.photo}
            role="img"
            aria-label="Pai e filho trabalhando juntos na marcenaria"
          >
            <span className={styles.grain} aria-hidden="true" />
          </div>

          <p className={styles.intro}>
            Pai e filho, especialistas no trabalho há mais de 10 anos, satisfazem
            muitos clientes com a qualidade do serviço.
          </p>
        </figure>
      </Container>
    </section>
  )
}
