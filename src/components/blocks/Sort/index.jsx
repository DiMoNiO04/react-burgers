import clsx from 'clsx'
import { useState } from 'react'

import { DATA_SORT } from '../../../data'
import { IconArrow } from '../../icons'
import styles from './styles.module.scss'

export const Sort = () => {
  const [isOpenSort, setIsOpenSort] = useState(false)
  const [sortItem, setSortItem] = useState(0)

  const toggleOpenSort = () => setIsOpenSort((prev) => !prev)

  const changeSortItem = (index) => {
    setSortItem(index)
    setIsOpenSort(false)
  }

  return (
    <div className={styles.block}>
      <button type="button" className={clsx(styles.label, isOpenSort && styles.labelOpen)} onClick={toggleOpenSort}>
        <IconArrow />
        <b>Сортировать по:</b>
        <span>{DATA_SORT[sortItem].name}</span>
      </button>

      {isOpenSort && (
        <div className={styles.popup} role="listbox">
          <ul className={styles.popupList}>
            {DATA_SORT.map(({ name, value }) => (
              <li key={value}>
                <button type="button" className={clsx(styles.popupItem, sortItem === value && styles.itemActive)} onClick={() => changeSortItem(value)}>
                  {name}
                </button>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  )
}
