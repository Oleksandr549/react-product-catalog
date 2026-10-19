import { useState } from 'react'
import { getProducts } from '../../api/products'
import CategoryFilter from '../../components/CategoryFilter/CategoryFilter'
import ProductGrid from '../../components/ProductGrid/ProductGrid'
import SearchBar from '../../components/SearchBar/SearchBar'
import { useFetch } from '../../hooks/useFetch'
import styles from './CatalogPage.module.css'

export default function CatalogPage() {
  const { data, loading, error } = useFetch(getProducts)
  const [query, setQuery] = useState('')
  const [category, setCategory] = useState('')

  if (loading) return <p>Loading...</p>
  if (error) return <p>Error: {error.message}</p>
  if (!data) return null

  const categories = [...new Set(data.products.map((product) => product.category))]

  const normalizedQuery = query.trim().toLowerCase()
  const filteredProducts = data.products.filter((product) => {
    const matchesQuery = product.title.toLowerCase().includes(normalizedQuery)
    const matchesCategory = category === '' || product.category === category
    return matchesQuery && matchesCategory
  })

  return (
    <>
      <h1>Catalog</h1>

      <div className={styles.toolbar}>
        <SearchBar value={query} onChange={setQuery} />
        <CategoryFilter categories={categories} value={category} onChange={setCategory} />
      </div>

      <p className={styles.count}>Found: {filteredProducts.length}</p>

      {filteredProducts.length > 0 ? (
        <ProductGrid products={filteredProducts} />
      ) : (
        <p>No products found</p>
      )}
    </>
  )
}
