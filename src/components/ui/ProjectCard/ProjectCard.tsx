import type { Project } from '../../../types'
import styles from './ProjectCard.module.css'

interface ProjectCardProps {
  project: Project
}

export function ProjectCard({ project }: ProjectCardProps) {
  return (
    <article className={styles.card}>
      <div className={styles.imageWrapper}>
        <img
          src={project.image}
          alt={project.alt}
          className={styles.image}
          loading="lazy"
        />
        <div className={styles.overlay}>
          <h3 className={styles.title}>{project.title}</h3>
          <p className={styles.description}>{project.description}</p>
        </div>
      </div>
    </article>
  )
}
