import clsx from 'clsx'
import { useState } from 'react'

import { SORT_OPTIONS } from '../../../data'
import { IconArrow } from '../../icons'
import styles from './styles.module.scss'

export const Sort = ({ valueSort, onChangeSort }) => {
  const [isOpenSort, setIsOpenSort] = useState(false)

  const toggleOpenSort = () => setIsOpenSort((prev) => !prev)

  const onClickSort = (value) => {
    onChangeSort(value)
    toggleOpenSort()
  }

  return (
    <div className={styles.block}>
      <button type="button" className={clsx(styles.label, isOpenSort && styles.labelOpen)} onClick={toggleOpenSort}>
        <IconArrow />
        <b>Сортировать по:</b>
        <span>{valueSort.name}</span>
      </button>

      {isOpenSort && (
        <div className={styles.popup} role="listbox">
          <ul className={styles.popupList}>
            {SORT_OPTIONS.map((item) => (
              <li key={item.value}>
                <button type="button" className={clsx(styles.popupItem, item.value === valueSort.value && styles.itemActive)} onClick={() => onClickSort(item)}>
                  {item.name}
                </button>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  )
}
