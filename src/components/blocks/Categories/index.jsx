import clsx from 'clsx'
import { useContext } from 'react'

import { CategoryContext, PaginationContext } from '../../../context'
import { BURGER_CATEGORIES } from '../../../data'
import styles from './styles.module.scss'

export const Categories = () => {
  const { category, setCategory } = useContext(CategoryContext)
  const { setPage } = useContext(PaginationContext)

  const onChangeCategory = (value) => {
    setPage(1)
    setCategory(value)
  }

  return (
    <div className={styles.block}>
      <ul className={styles.list}>
        {BURGER_CATEGORIES.map(({ value, name }, index) => (
          <li key={value}>
            <button type="button" className={clsx(styles.item, index === category && styles.itemActive)} onClick={() => onChangeCategory(index)}>
              {name}
            </button>
          </li>
        ))}
      </ul>
    </div>
  )
}
