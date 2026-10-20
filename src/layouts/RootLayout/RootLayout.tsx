import { Link, NavLink, Outlet } from 'react-router'
import styles from './RootLayout.module.css'

const navItems = [
  { to: '/', label: 'Home', end: true },
  { to: '/catalog', label: 'Catalog', end: false },
  { to: '/about', label: 'About', end: false },
]

export default function RootLayout() {
  return (
    <div className={styles.page}>
      <header className={styles.header}>
        <Link to="/" className={styles.logo}>
          Shelf
        </Link>

        <nav aria-label="Main">
          <ul className={styles.nav}>
            {navItems.map((item) => (
              <li key={item.to}>
                <NavLink
                  to={item.to}
                  end={item.end}
                  className={({ isActive }) =>
                    isActive ? `${styles.link} ${styles.active}` : styles.link
                  }
                >
                  {item.label}
                </NavLink>
              </li>
            ))}
          </ul>
        </nav>
      </header>

      <main className={styles.main}>
        <Outlet />
      </main>

      <footer className={styles.footer}>
        <p>Built by Oleksandr Vyshnevskyi in {new Date().getFullYear()}</p>
        <p>
          Product data from{' '}
          <a href="https://dummyjson.com" target="_blank" rel="noreferrer">
            DummyJSON
          </a>
        </p>
      </footer>
    </div>
  )
}
