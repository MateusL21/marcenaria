import type { PortfolioVideo } from '../../../types'
import styles from './VideoCard.module.css'

interface VideoCardProps {
  video: PortfolioVideo
}

export function VideoCard({ video }: VideoCardProps) {
  return (
    <article className={styles.card}>
      <div className={styles.mediaWrapper}>
        {video.src ? (
          <video
            className={styles.video}
            poster={video.poster}
            controls
            preload="none"
          >
            <source src={video.src} type="video/mp4" />
            Seu navegador não suporta o elemento de vídeo.
          </video>
        ) : (
          <div className={styles.placeholder}>
            <img
              src={video.poster}
              alt={video.title}
              className={styles.posterImage}
              loading="lazy"
            />
            <div className={styles.playOverlay}>
              <span className={styles.playIcon} aria-hidden="true">
                ▶
              </span>
              <span className={styles.comingSoon}>Em breve</span>
            </div>
          </div>
        )}
      </div>
      <div className={styles.info}>
        <h3 className={styles.title}>{video.title}</h3>
        <p className={styles.description}>{video.description}</p>
      </div>
    </article>
  )
}
