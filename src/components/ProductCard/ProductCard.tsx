import { Link } from 'react-router'
import type { Product } from '../../types/product'
import styles from './ProductCard.module.css'

interface ProductCardProps {
  product: Product
}

export default function ProductCard({ product }: ProductCardProps) {
  return (
    <Link to={`/item/${product.id}`} className={styles.card}>
      <img
        className={styles.image}
        src={product.thumbnail}
        alt={product.title}
        width={300}
        height={300}
        loading="lazy"
      />
      <div className={styles.body}>
        <span className={styles.category}>{product.category}</span>
        <h3 className={styles.title}>{product.title}</h3>
        <div className={styles.footer}>
          <span className={styles.price}>${product.price.toFixed(2)}</span>
          <span className={styles.rating}>★ {product.rating.toFixed(1)}</span>
        </div>
      </div>
    </Link>
  )
}
