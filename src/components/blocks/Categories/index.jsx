import clsx from 'clsx'
import { useState } from 'react'

import { DATA_CATEGORIES } from '../../../data/categories'
import styles from './styles.module.scss'

export const Categories = () => {
  const [activeCategory, setActiveCategory] = useState(0)

  const handleClickCategory = (index) => setActiveCategory(index)

  return (
    <div className={styles.block}>
      <ul className={styles.list}>
        {DATA_CATEGORIES.map(({ value, name }, index) => (
          <li key={value}>
            <button
              type="button"
              className={clsx(styles.item, index === activeCategory && styles.itemActive)}
              onClick={() => handleClickCategory(index)}
              aria-pressed={index === activeCategory}
            >
              {name}
            </button>
          </li>
        ))}
      </ul>
    </div>
  )
}
