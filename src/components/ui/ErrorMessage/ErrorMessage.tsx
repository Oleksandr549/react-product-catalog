import styles from './ErrorMessage.module.css'

interface ErrorMessageProps {
  title?: string
  message: string
}

export default function ErrorMessage({ title = 'Something went wrong', message }: ErrorMessageProps) {
  return (
    <div className={styles.box} role="alert">
      <h2 className={styles.title}>{title}</h2>
      <p className={styles.message}>{message}</p>
    </div>
  )
}
