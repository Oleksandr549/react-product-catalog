import { useState } from 'react'
import { getProducts } from '../../api/products'
import CategoryFilter from '../../components/CategoryFilter/CategoryFilter'
import ProductGrid from '../../components/ProductGrid/ProductGrid'
import SearchBar from '../../components/SearchBar/SearchBar'
import EmptyState from '../../components/ui/EmptyState/EmptyState'
import ErrorMessage from '../../components/ui/ErrorMessage/ErrorMessage'
import Loader from '../../components/ui/Loader/Loader'
import { useFetch } from '../../hooks/useFetch'
import styles from './CatalogPage.module.css'

export default function CatalogPage() {
  const { data, loading, error } = useFetch(getProducts)
  const [query, setQuery] = useState('')
  const [category, setCategory] = useState('')

  if (loading) return <Loader label="Loading products" />
  if (error) return <ErrorMessage title="Could not load products" message={error.message} />
  if (!data) return null

  const categories = [...new Set(data.products.map((product) => product.category))]

  const normalizedQuery = query.trim().toLowerCase()
  const filteredProducts = data.products.filter((product) => {
    const matchesQuery = product.title.toLowerCase().includes(normalizedQuery)
    const matchesCategory = category === '' || product.category === category
    return matchesQuery && matchesCategory
  })

  function resetFilters() {
    setQuery('')
    setCategory('')
  }

  return (
    <>
      <div className={styles.heading}>
        <h1>Catalog</h1>
        <p className={styles.count}>
          {filteredProducts.length} of {data.products.length} products
        </p>
      </div>

      <div className={styles.toolbar}>
        <SearchBar value={query} onChange={setQuery} />
        <CategoryFilter categories={categories} value={category} onChange={setCategory} />
      </div>

      {filteredProducts.length > 0 ? (
        <ProductGrid products={filteredProducts} />
      ) : (
        <EmptyState
          title="Nothing matches your search"
          description="Check the spelling or choose another category."
          action={
            <button type="button" className={styles.resetButton} onClick={resetFilters}>
              Reset filters
            </button>
          }
        />
      )}
    </>
  )
}
