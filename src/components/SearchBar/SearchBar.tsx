import styles from './SearchBar.module.css'

interface SearchBarProps {
  value: string
  onChange: (value: string) => void
}

export default function SearchBar({ value, onChange }: SearchBarProps) {
  return (
    <label className={styles.field}>
      <span className={styles.label}>Search</span>
      <input
        className={styles.input}
        type="search"
        placeholder="Search products..."
        value={value}
        onChange={(event) => onChange(event.target.value)}
      />
    </label>
  )
}
