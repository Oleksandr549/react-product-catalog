import { useCallback } from 'react'
import { Link, useParams } from 'react-router'
import { getProductById } from '../../api/products'
import ProductGallery from '../../components/ProductGallery/ProductGallery'
import ErrorMessage from '../../components/ui/ErrorMessage/ErrorMessage'
import Loader from '../../components/ui/Loader/Loader'
import ProductForm from '../../components/Form/ProductForm' 
import { useFetch } from '../../hooks/useFetch'
import { formatCategory, formatPrice } from '../../utils/format'
import styles from './ProductPage.module.css'

export default function ProductPage() {
  const { id } = useParams()

  const fetchProduct = useCallback(
    (signal: AbortSignal) => {
      if (!id) return Promise.reject(new Error('Product id is missing'))
      return getProductById(id, signal)
    },
    [id],
  )

  const { data: product, loading, error } = useFetch(fetchProduct)

  if (loading) return <Loader label="Loading product" />

  if (error || !product) {
    return (
      <>
        <ErrorMessage
          title="This product does not exist"
          message="It may have been removed, or the link is wrong. Go back to the catalog to pick another one."
        />
        <Link to="/catalog" className={styles.back}>
          Back to catalog
        </Link>
      </>
    )
  }

  const oldPrice = product.price / (1 - product.discountPercentage / 100)
  const inStock = product.stock > 0

  return (
    <article>
      <Link to="/catalog" className={styles.back}>
        Back to catalog
      </Link>

      <div className={styles.layout}>
        <ProductGallery key={product.id} images={product.images} title={product.title} />

        <div className={styles.info}>
          <p className={styles.meta}>
            <Link to="/catalog">{formatCategory(product.category)}</Link>
            {product.brand && <span>{product.brand}</span>}
          </p>

          <h1 className={styles.title}>{product.title}</h1>

          <div className={styles.priceRow}>
            <span className={styles.price}>{formatPrice(product.price)}</span>
            {product.discountPercentage > 0 && (
              <>
                <s className={styles.oldPrice}>{formatPrice(oldPrice)}</s>
                <span className={styles.discount}>
                  {Math.round(product.discountPercentage)}% off
                </span>
              </>
            )}
          </div>

          <dl className={styles.facts}>
            <div>
              <dt>Rating</dt>
              <dd>{product.rating.toFixed(1)} of 5</dd>
            </div>
            <div>
              <dt>Availability</dt>
              <dd className={inStock ? styles.inStock : styles.outOfStock}>
                {inStock ? `${product.stock} in stock` : 'Out of stock'}
              </dd>
            </div>
          </dl>

          <p className={styles.description}>{product.description}</p>
        </div>
        <ProductForm />
      </div>
    </article>
  )
}
