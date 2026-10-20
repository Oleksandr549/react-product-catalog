import { Link } from 'react-router'
import type { ReactNode } from 'react'
import styles from './ButtonLink.module.css'

interface ButtonLinkProps {
  to: string
  children: ReactNode
  variant?: 'primary' | 'secondary'
}

export default function ButtonLink({ to, children, variant = 'primary' }: ButtonLinkProps) {
  return (
    <Link to={to} className={`${styles.button} ${styles[variant]}`}>
      {children}
    </Link>
  )
}
