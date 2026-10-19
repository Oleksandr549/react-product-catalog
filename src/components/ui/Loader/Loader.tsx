import styles from './Loader.module.css'

interface LoaderProps {
  label?: string
}

export default function Loader({ label = 'Loading...' }: LoaderProps) {
  return (
    <div className={styles.wrapper} role="status">
      <span className={styles.spinner} aria-hidden="true" />
      <span>{label}</span>
    </div>
  )
}
