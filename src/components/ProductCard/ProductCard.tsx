import { Link } from 'react-router'
import type { Product } from '../../types/product'
import { formatCategory, formatPrice } from '../../utils/format'
import styles from './ProductCard.module.css'

interface ProductCardProps {
  product: Product
}

export default function ProductCard({ product }: ProductCardProps) {
  return (
    <Link to={`/item/${product.id}`} className={styles.card}>
      <div className={styles.tile}>
        <img
          className={styles.image}
          src={product.thumbnail}
          alt=""
          width={300}
          height={300}
          loading="lazy"
        />
      </div>
      <div className={styles.row}>
        <h3 className={styles.title}>{product.title}</h3>
        <span className={styles.price}>{formatPrice(product.price)}</span>
      </div>
      <p className={styles.meta}>
        {formatCategory(product.category)}, rated {product.rating.toFixed(1)}
      </p>
    </Link>
  )
}
