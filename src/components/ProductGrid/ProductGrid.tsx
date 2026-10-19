import type { Product } from '../../types/product'
import ProductCard from '../ProductCard/ProductCard'
import styles from './ProductGrid.module.css'

interface ProductGridProps {
  products: Product[]
}

export default function ProductGrid({ products }: ProductGridProps) {
  return (
    <ul className={styles.grid}>
      {products.map((product) => (
        <li key={product.id}>
          <ProductCard product={product} />
        </li>
      ))}
    </ul>
  )
}
