import { getProducts } from '../../api/products'
import { useFetch } from '../../hooks/useFetch'

export default function CatalogPage() {
  const { data, loading, error } = useFetch(getProducts)

  if (loading) return <p>Loading...</p>
  if (error) return <p>Error: {error.message}</p>

  return (
    <>
      <h1>Catalog</h1>
      <p>Products loaded: {data?.products.length}</p>
    </>
  )
}
