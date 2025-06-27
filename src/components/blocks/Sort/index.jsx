import clsx from 'clsx'
import { useContext, useState } from 'react'

import { ContextPagination, ContextSort } from '../../../context'
import { SORT_OPTIONS } from '../../../data'
import { IconArrow } from '../../icons'
import styles from './styles.module.scss'

export const Sort = () => {
  const { sort, setSort } = useContext(ContextSort)
  const { setPage } = useContext(ContextPagination)

  const [isOpenSort, setIsOpenSort] = useState(false)

  const toggleOpenSort = () => setIsOpenSort((prev) => !prev)

  const onClickSort = (value) => {
    setPage(1)
    setSort(value)
    toggleOpenSort()
  }

  return (
    <div className={styles.block}>
      <button type="button" className={clsx(styles.label, isOpenSort && styles.labelOpen)} onClick={toggleOpenSort}>
        <IconArrow />
        <b>Сортировать по:</b>
        <span>{sort.name}</span>
      </button>

      {isOpenSort && (
        <div className={styles.popup} role="listbox">
          <ul className={styles.popupList}>
            {SORT_OPTIONS.map((item) => (
              <li key={item.value}>
                <button type="button" className={clsx(styles.popupItem, item.value === sort.value && styles.itemActive)} onClick={() => onClickSort(item)}>
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
