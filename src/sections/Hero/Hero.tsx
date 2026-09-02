import { professional } from '../../data/professional'
import styles from './Hero.module.css'

export function Hero() {
  return (
    <section id="inicio" className={styles.hero}>
      <div className={styles.overlay}></div>
      <div className={styles.content}>
        <span className={styles.brandmark}>{professional.company}</span>
        <span className={styles.location}>{professional.location}</span>
      </div>
      <a href="#sobre" className={styles.scrollHint} aria-label="Rolar para conteúdo">
        <span className={styles.scrollDot}></span>
      </a>
    </section>
  )
}
