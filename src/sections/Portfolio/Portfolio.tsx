import { useState } from 'react'
import { Container } from '../../components/layout/Container/Container'
import { SectionTitle } from '../../components/common/SectionTitle/SectionTitle'
import { ProjectCard } from '../../components/ui/ProjectCard/ProjectCard'
import { projects, projectCategories } from '../../data/projects'
import styles from './Portfolio.module.css'

export function Portfolio() {
  const [activeCategory, setActiveCategory] = useState('Todos')

  const filteredProjects =
    activeCategory === 'Todos'
      ? projects
      : projects.filter((p) => p.category === activeCategory)

  return (
    <section id="projetos" className={styles.portfolio}>
      <Container>
        <SectionTitle
          title="Nossos Projetos"
          subtitle="Conheça alguns dos trabalhos que realizamos com dedicação e excelência"
        />

        <div className={styles.filters} role="group" aria-label="Filtrar por categoria">
          {projectCategories.map((category) => (
            <button
              key={category}
              type="button"
              className={`${styles.filterBtn} ${activeCategory === category ? styles.filterBtnActive : ''}`}
              onClick={() => setActiveCategory(category)}
              aria-pressed={activeCategory === category}
            >
              {category}
            </button>
          ))}
        </div>

        <div className={styles.grid}>
          {filteredProjects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      </Container>
    </section>
  )
}
