import { useParams } from 'react-router'

export default function ProductPage() {
  const { id } = useParams()

  return <h1>Product {id}</h1>
}
