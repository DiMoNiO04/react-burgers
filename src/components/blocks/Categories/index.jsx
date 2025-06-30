import clsx from 'clsx'
import { useContext } from 'react'
import { useDispatch, useSelector } from 'react-redux'

import { ContextPagination } from '../../../context'
import { BURGER_CATEGORIES } from '../../../data'
import { setCategory } from '../../../store/filter/slice'
import styles from './styles.module.scss'

export const Categories = () => {
  const dispatch = useDispatch()

  const { category } = useSelector((state) => state.filter)
  const { setPage } = useContext(ContextPagination)

  const onChangeCategory = (value) => {
    setPage(1)
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
