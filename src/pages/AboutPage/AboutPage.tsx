import styles from './AboutPage.module.css'

const features = [
  'Products load from a public REST API',
  'Search by name and filter by category',
  'Product page with an image gallery',
  'A reusable useFetch hook that cancels outdated requests',
  'Clear loading, error and empty states',
  'Responsive layout written in plain CSS',
]

const stack = ['React 19', 'TypeScript', 'Vite', 'React Router', 'CSS Modules', 'Vercel']

export default function AboutPage() {
  return (
    <div className={styles.about}>
      <h1 className={styles.title}>About Shelf</h1>
      <p className={styles.lead}>
        Shelf is a small product catalog I built while learning React. It is a single-page app:
        every page is rendered in the browser, and product data comes from the DummyJSON API.
      </p>

      <div className={styles.columns}>
        <section>
          <h2 className={styles.heading}>What it does</h2>
          <ul className={styles.list}>
            {features.map((feature) => (
              <li key={feature}>{feature}</li>
            ))}
          </ul>
        </section>

        <section>
          <h2 className={styles.heading}>Built with</h2>
          <ul className={styles.list}>
            {stack.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </section>
      </div>

      <a
        className={styles.source}
        href="https://github.com/Oleksandr549/react-product-catalog"
        target="_blank"
        rel="noreferrer"
      >
        View the source code on GitHub
      </a>
    </div>
  )
}
