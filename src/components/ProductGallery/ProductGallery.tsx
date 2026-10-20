import { useState } from 'react'
import styles from './ProductGallery.module.css'

interface ProductGalleryProps {
  images: string[]
  title: string
}

export default function ProductGallery({ images, title }: ProductGalleryProps) {
  const [activeIndex, setActiveIndex] = useState(0)

  return (
    <div className={styles.gallery}>
      <div className={styles.stage}>
        <img
          className={styles.main}
          src={images[activeIndex]}
          alt={title}
          width={600}
          height={600}
        />
      </div>

      {images.length > 1 && (
        <ul className={styles.thumbs}>
          {images.map((image, index) => (
            <li key={image}>
              <button
                type="button"
                className={index === activeIndex ? `${styles.thumb} ${styles.active}` : styles.thumb}
                onClick={() => setActiveIndex(index)}
                aria-label={`Show image ${index + 1}`}
                aria-pressed={index === activeIndex}
              >
                <img src={image} alt="" width={80} height={80} loading="lazy" />
              </button>
            </li>
          ))}
        </ul>
      )}
    </div>
  )
}
