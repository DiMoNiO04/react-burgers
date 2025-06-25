import clsx from 'clsx'
import { useState } from 'react'

import { BURGER_CATEGORIES } from '../../../data'
import styles from './styles.module.scss'

export const Categories = () => {
  const [activeCategory, setActiveCategory] = useState(0)

  const handleClickCategory = (index) => setActiveCategory(index)

  return (
    <div className={styles.block}>
      <ul className={styles.list}>
        {BURGER_CATEGORIES.map(({ value, name }, index) => (
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
