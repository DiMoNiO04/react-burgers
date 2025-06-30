import clsx from 'clsx'
import { useDispatch, useSelector } from 'react-redux'

import { BURGER_CATEGORIES } from '../../../data'
import { setCategory, setCurrentPage } from '../../../store/filter/slice'
import styles from './styles.module.scss'

export const Categories = () => {
  const dispatch = useDispatch()

  const { category } = useSelector((state) => state.filter)

  const onChangeCategory = (value) => {
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
