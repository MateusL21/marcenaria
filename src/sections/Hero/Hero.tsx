import { Button } from '../../components/common/Button/Button'
import { professional } from '../../data/professional'
import { whatsappConfig } from '../../data/socialLinks'
import styles from './Hero.module.css'

export function Hero() {
  return (
    <section id="inicio" className={styles.hero}>
      <div className={styles.overlay}></div>
      <div className={styles.content}>
        <h1 className={styles.title}>{professional.slogan}</h1>
        <p className={styles.subtitle}>
          Projetos personalizados de marcenaria feitos para aproveitar cada espaço da sua casa.
        </p>
        <div className={styles.actions}>
          <Button as="a" href="#projetos" variant="secondary">
            Conheça nossos projetos
          </Button>
          <Button
            as="a"
            href={whatsappConfig.url}
            target="_blank"
            rel="noopener noreferrer"
            variant="outline"
          >
            Solicitar orçamento
          </Button>
        </div>
      </div>
    </section>
  )
}
