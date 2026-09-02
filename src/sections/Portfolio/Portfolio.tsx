import { Container } from '../../components/layout/Container/Container'
import { SectionTitle } from '../../components/common/SectionTitle/SectionTitle'
import { ProjectCard } from '../../components/ui/ProjectCard/ProjectCard'
import { projects } from '../../data/projects'
import styles from './Portfolio.module.css'

export function Portfolio() {
  return (
    <section id="projetos" className={styles.portfolio}>
      <Container>
        <SectionTitle
          title="Nossos Projetos"
          subtitle="Conheça alguns dos trabalhos que realizamos com dedicação e excelência"
        />

        <div className={styles.grid}>
          {projects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      </Container>
    </section>
  )
}
