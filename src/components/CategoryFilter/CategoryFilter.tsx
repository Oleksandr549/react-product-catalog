import styles from './CategoryFilter.module.css'

interface CategoryFilterProps {
  categories: string[]
  value: string
  onChange: (value: string) => void
}

export default function CategoryFilter({ categories, value, onChange }: CategoryFilterProps) {
  return (
    <label className={styles.field}>
      <span className={styles.label}>Category</span>
      <select
        className={styles.select}
        value={value}
        onChange={(event) => onChange(event.target.value)}
      >
        <option value="">All categories</option>
        {categories.map((category) => (
          <option key={category} value={category}>
            {category}
          </option>
        ))}
      </select>
    </label>
  )
}
