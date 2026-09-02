import { useEffect, useRef, useState } from 'react'
import { useGLTF } from '@react-three/drei'
import { Container } from '../../components/layout/Container/Container'
import { SectionTitle } from '../../components/common/SectionTitle/SectionTitle'
import { ServiceStage } from '../../components/ui/ServiceModel/ServiceStage'
import { tools3D } from '../../data/tools3D'
import type { Tool3D } from '../../data/tools3D'
import styles from './Services.module.css'

interface ServiceBlockProps {
  service: Tool3D
  index: number
}

function ServiceBlock({ service, index }: ServiceBlockProps) {
  const blockRef = useRef<HTMLElement>(null)
  const [visible, setVisible] = useState(false)
  // Layout alternado: modelo à esquerda nos blocos pares.
  const reversed = index % 2 === 1

  // Reveal ao entrar na viewport (fade-in premium).
  useEffect(() => {
    const el = blockRef.current
    if (!el || typeof IntersectionObserver === 'undefined') {
      setVisible(true)
      return
    }
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true)
          observer.disconnect()
        }
      },
      { threshold: 0.25 },
    )
    observer.observe(el)
    return () => observer.disconnect()
  }, [])

  return (
    <article
      ref={blockRef}
      className={`${styles.block} ${reversed ? styles.reversed : ''} ${
        visible ? styles.visible : ''
      }`.trim()}
    >
      {/* Palco 3D em tela cheia com o texto sobreposto, próximo à ferramenta */}
      <div className={styles.stage}>
        <span className={styles.index} aria-hidden="true">
          {String(index + 1).padStart(2, '0')}
        </span>

        <ServiceStage
          url={service.model}
          scale={service.scale}
          progressTargetRef={blockRef}
        />

        {/* Texto descritivo sobreposto, colado à ferramenta */}
        <div className={styles.overlay}>
          <p className={styles.tagline}>{service.tagline}</p>
          <h3 className={styles.title}>{service.title}</h3>
          <p className={styles.description}>{service.description}</p>
          <ul className={styles.highlights}>
            {service.highlights.map((item) => (
              <li key={item} className={styles.highlightItem}>
                {item}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </article>
  )
}

export function Services() {
  return (
    <section id="servicos" className={styles.services}>
      <Container>
        <SectionTitle
          title="Nossos Serviços"
          subtitle="Do assentamento ao acabamento fino"
        />
      </Container>

      <div className={styles.blocks}>
        {tools3D.map((service, index) => (
          <Container key={service.id}>
            <ServiceBlock service={service} index={index} />
          </Container>
        ))}
      </div>
    </section>
  )
}

// Pré-carrega os modelos para transições suaves entre os blocos.
tools3D.forEach((tool) => useGLTF.preload(tool.model))

// Export default para carregamento sob demanda via React.lazy.
export default Services
