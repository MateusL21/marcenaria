import { Container } from '../../components/layout/Container/Container'
import { SectionTitle } from '../../components/common/SectionTitle/SectionTitle'
import { professional } from '../../data/professional'
import styles from './About.module.css'

export function About() {
  return (
    <section id="sobre" className={styles.about}>
      <Container>
        <SectionTitle
          title="Sobre Nós"
          subtitle="Conheça a história e a dedicação por trás de cada projeto"
        />
        <div className={styles.content}>
          <div className={styles.imageWrapper}>
            <img
              src="/images/placeholders/professional.jpg"
              alt={`${professional.name} - ${professional.role}`}
              className={styles.image}
              loading="lazy"
            />
          </div>
          <div className={styles.text}>
            <h3 className={styles.name}>{professional.name}</h3>
            <p className={styles.role}>{professional.role}</p>
            <p className={styles.description}>{professional.description}</p>

            <ul className={styles.highlights}>
              {professional.highlights.map((item) => (
                <li key={item} className={styles.highlightItem}>
                  <span className={styles.checkIcon}>✓</span>
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </Container>
    </section>
  )
}
