import clsx from 'clsx'
import { useEffect, useRef, useState } from 'react'

import { IconArrow } from '@/components/icons'
import { SORT_OPTIONS } from '@/data'
import { selectFilter, setCurrentPage, setSort } from '@/store/filter/slice'
import { useAppDispatch, useAppSelector } from '@/store/store'
import { IFilterOption } from '@/utils/interfaces'

import styles from './styles.module.scss'

export const Sort = () => {
  const dispatch = useAppDispatch()

  const sortRef = useRef<HTMLDivElement>(null)

  const [isOpenSort, setIsOpenSort] = useState<boolean>(false)

  const toggleOpenSort = () => setIsOpenSort((prev) => !prev)

  const { sort } = useAppSelector(selectFilter)

  const onClickSort = (value: IFilterOption<string>) => {
    dispatch(setCurrentPage(1))
    dispatch(setSort(value))
    toggleOpenSort()
  }

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (sortRef.current && !event.composedPath().includes(sortRef.current)) {
        setIsOpenSort(false)
      }
    }

    document.body.addEventListener('click', handleClickOutside)
    return () => document.body.removeEventListener('click', handleClickOutside)
  }, [])

  return (
    <div className={styles.block} ref={sortRef}>
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
