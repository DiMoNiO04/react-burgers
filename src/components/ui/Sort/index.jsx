import clsx from 'clsx'
import { useState } from 'react'

import { DATA_SORT } from '../../../data'
import { IconArrow } from '../../icons'
import styles from './styles.module.scss'

export const Sort = () => {
  const [isOpenSort, setIsOpenSort] = useState(false)
  const [sortItem, setSortItem] = useState(0)

  const changeSortItem = (index) => setSortItem(index)
  const toggleOpenSort = () => setIsOpenSort(!isOpenSort)

  return (
    <div className={styles.block} onClick={toggleOpenSort}>
      <div className={clsx(styles.label, isOpenSort && styles.labelOpen)}>
        <IconArrow />
        <b>Сортировать по:</b>
        <span>{DATA_SORT[sortItem].name}</span>
      </div>
      {isOpenSort && (
        <div className={styles.popup}>
          <ul className={styles.popupList}>
            {DATA_SORT.map(({ name, value }) => (
              <li key={name} className={clsx(styles.popupItem, sortItem === value && styles.itemActive)} onClick={() => changeSortItem(value)}>
                {name}
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  )
}
