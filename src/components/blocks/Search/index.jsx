import debounce from 'lodash.debounce'
import { useCallback, useEffect, useRef, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'

import { selectFilter, setCurrentPage, setSearch } from '../../../store/filter/slice'
import { IconClose, IconSearch } from '../../icons'
import styles from './styles.module.scss'

export const Search = () => {
  const dispatch = useDispatch()

  const { search } = useSelector(selectFilter)
  const [searchValue, setSearchValue] = useState(search)

  const inputRef = useRef()

  useEffect(() => {
    setSearchValue(search)
  }, [search])

  const updateSearchValue = useCallback(
    debounce((value) => {
      dispatch(setCurrentPage(1))
      dispatch(setSearch(value))
    }, 1000),
    [],
  )

  const onChangeSearch = (e) => {
    setSearchValue(e.target.value)
    updateSearchValue(e.target.value)
  }

  const onClearSearch = () => {
    dispatch(setSearch(''))
    inputRef.current.focus()
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
