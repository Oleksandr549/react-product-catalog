import ButtonLink from '../../components/ButtonLink/ButtonLink'
import styles from './NotFoundPage.module.css'

export default function NotFoundPage() {
  return (
    <div className={styles.wrapper}>
      <p className={styles.code}>404</p>
      <h1 className={styles.title}>This shelf is empty</h1>
      <p className={styles.text}>
        There is no page at this address. Check the link or start again from the catalog.
      </p>
      <ButtonLink to="/catalog">Browse the catalog</ButtonLink>
    </div>
  )
}
