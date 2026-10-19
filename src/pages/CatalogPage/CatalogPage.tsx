import { getProducts } from '../../api/products'
import ProductGrid from '../../components/ProductGrid/ProductGrid'
import { useFetch } from '../../hooks/useFetch'

export default function CatalogPage() {
  const { data, loading, error } = useFetch(getProducts)

  if (loading) return <p>Loading...</p>
  if (error) return <p>Error: {error.message}</p>
  if (!data) return null

  return (
    <>
      <h1>Catalog</h1>
      <ProductGrid products={data.products} />
    </>
  )
}
