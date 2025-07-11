import debounce from 'lodash.debounce'
import { ChangeEvent, useCallback, useEffect, useRef, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'

import { IconClose, IconSearch } from '@/components/icons'
import { selectFilter, setCurrentPage, setSearch } from '@/store/filter/slice'

import styles from './styles.module.scss'

export const Search = () => {
  const dispatch = useDispatch()

  const { search } = useSelector(selectFilter)
  const [searchValue, setSearchValue] = useState(search)

  const inputRef = useRef<HTMLInputElement>(null)

  useEffect(() => {
    setSearchValue(search)
  }, [search])

  const updateSearchValue = useCallback(
    debounce((value: string) => {
      dispatch(setCurrentPage(1))
      dispatch(setSearch(value))
    }, 1000),
    [],
  )

  const onChangeSearch = (e: ChangeEvent<HTMLInputElement>) => {
    setSearchValue(e.target.value)
    updateSearchValue(e.target.value)
  }

  const onClearSearch = () => {
    dispatch(setSearch(''))
    inputRef.current?.focus()
  }

  return (
    <div className={styles.block}>
      <div className={styles.iconSearch}>
        <IconSearch />
      </div>
      <input ref={inputRef} type="text" placeholder="Поиск..." value={searchValue} onChange={onChangeSearch} className={styles.input} />
      {searchValue && (
        <button className={styles.btnClear} type="button" onClick={onClearSearch}>
          <IconClose />
        </button>
      )}
    </div>
  )
}
