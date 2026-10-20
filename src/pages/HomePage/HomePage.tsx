import { getProducts } from '../../api/products'
import ButtonLink from '../../components/ButtonLink/ButtonLink'
import ProductGrid from '../../components/ProductGrid/ProductGrid'
import ErrorMessage from '../../components/ui/ErrorMessage/ErrorMessage'
import Loader from '../../components/ui/Loader/Loader'
import { useFetch } from '../../hooks/useFetch'
import styles from './HomePage.module.css'

export default function HomePage() {
  const { data, loading, error } = useFetch(getProducts)

  const topRated = data
    ? [...data.products].sort((a, b) => b.rating - a.rating).slice(0, 4)
    : []

  return (
    <>
      <section className={styles.hero}>
        <h1 className={styles.title}>Everyday things, neatly shelved.</h1>
        <div className={styles.side}>
          <p className={styles.text}>
            Almost two hundred products, from mascara to sofas. Search by name, narrow it down by
            category and open any item for the details.
          </p>
          <div className={styles.actions}>
            <ButtonLink to="/catalog">Browse the catalog</ButtonLink>
            <ButtonLink to="/about" variant="secondary">
              About the project
            </ButtonLink>
          </div>
        </div>
      </section>

      <section className={styles.section}>
        <h2 className={styles.sectionTitle}>Highest rated right now</h2>
        {loading && <Loader />}
        {error && <ErrorMessage message={error.message} />}
        {data && <ProductGrid products={topRated} />}
      </section>
    </>
  )
}
