import type { ChangeEvent } from 'react'
import styles from './SearchBar.module.css'

interface SearchBarProps {
  value: string
  onChange: (value: string) => void
}

export default function SearchBar({ value, onChange }: SearchBarProps) {
  function handleChange(event: ChangeEvent<HTMLInputElement>) {
    onChange(event.target.value)
  }

  return (
    <label className={styles.field}>
      <span className={styles.label}>Search</span>
      <input
        className={styles.input}
        type="search"
        placeholder="Search products..."
        value={value}
        onChange={handleChange}
      />
    </label>
  )
}
