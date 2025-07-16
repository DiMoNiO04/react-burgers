import clsx from 'clsx'

import { BURGER_CATEGORIES } from '@/data'
import { selectFilter, setCategory, setCurrentPage } from '@/store/filter/slice'
import { useAppDispatch, useAppSelector } from '@/store/store'

import styles from './styles.module.scss'

export const Categories = () => {
  const dispatch = useAppDispatch()

  const { category } = useAppSelector(selectFilter)

  const onChangeCategory = (value: number) => {
    dispatch(setCurrentPage(1))
    dispatch(setCategory(value))
  }

  return (
    <div className={styles.block}>
      <ul className={styles.list}>
        {BURGER_CATEGORIES.map(({ value, name }) => (
          <li key={value}>
            <button type="button" className={clsx(styles.item, value === category && styles.itemActive)} onClick={() => onChangeCategory(value)}>
              {name}
            </button>
          </li>
        ))}
      </ul>
    </div>
  )
}
