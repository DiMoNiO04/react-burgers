import clsx from 'clsx'

import { BURGER_CATEGORIES } from '../../../data'
import styles from './styles.module.scss'

export const Categories = ({ valueCategory, onChangeCategory }) => {
  return (
    <div className={styles.block}>
      <ul className={styles.list}>
        {BURGER_CATEGORIES.map(({ value, name }, index) => (
          <li key={value}>
            <button type="button" className={clsx(styles.item, index === valueCategory && styles.itemActive)} onClick={() => onChangeCategory(index)}>
              {name}
            </button>
          </li>
        ))}
      </ul>
    </div>
  )
}
