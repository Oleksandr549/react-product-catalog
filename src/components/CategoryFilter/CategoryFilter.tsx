import type { ChangeEvent } from 'react'
import { formatCategory } from '../../utils/format'
import styles from './CategoryFilter.module.css'

interface CategoryFilterProps {
  categories: string[]
  value: string
  onChange: (value: string) => void
}

export default function CategoryFilter({ categories, value, onChange }: CategoryFilterProps) {
  function handleChange(event: ChangeEvent<HTMLSelectElement>) {
    onChange(event.target.value)
  }

  return (
    <label className={styles.field}>
      <span className={styles.label}>Category</span>
      <select className={styles.select} value={value} onChange={handleChange}>
        <option value="">All categories</option>
        {categories.map((category) => (
          <option key={category} value={category}>
            {formatCategory(category)}
          </option>
        ))}
      </select>
    </label>
  )
}
