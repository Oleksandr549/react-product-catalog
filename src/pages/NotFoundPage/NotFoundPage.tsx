import { Link } from 'react-router'

export default function NotFoundPage() {
  return (
    <>
      <h1>404</h1>
      <p>Page not found</p>
      <Link to="/">Back to home</Link>
    </>
  )
}
