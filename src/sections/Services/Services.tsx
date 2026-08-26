import { Container } from '../../components/layout/Container/Container'
import { SectionTitle } from '../../components/common/SectionTitle/SectionTitle'
import { ServiceCard } from '../../components/ui/ServiceCard/ServiceCard'
import { services } from '../../data/services'
import styles from './Services.module.css'

export function Services() {
  return (
    <section id="servicos" className={styles.services}>
      <Container>
        <SectionTitle
          title="Nossos Serviços"
          subtitle="Soluções completas em marcenaria para transformar cada ambiente da sua casa"
        />
        <div className={styles.grid}>
          {services.map((service) => (
            <ServiceCard key={service.id} service={service} />
          ))}
        </div>
      </Container>
    </section>
  )
}
