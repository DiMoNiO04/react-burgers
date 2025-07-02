import debounce from 'lodash.debounce'
import { useCallback, useContext, useRef, useState } from 'react'
import { useDispatch } from 'react-redux'

import { ContextSearch } from '../../../context/ContextSearch'
import { setCurrentPage } from '../../../store/filter/slice'
import { IconClose, IconSearch } from '../../icons'
import styles from './styles.module.scss'

export const Search = () => {
  const dispatch = useDispatch()
  const [searchValue, setSearchValue] = useState('')

  const { setSearch } = useContext(ContextSearch)
  const inputRef = useRef()

  const updateSearchValue = useCallback(
    debounce((value) => {
      dispatch(setCurrentPage(1))
      setSearch(value)
    }, 1000),
    [],
  )

  const onChangeSearch = (e) => {
    setSearchValue(e.target.value)
    updateSearchValue(e.target.value)
  }

  const onClearSearch = () => {
    setSearch('')
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
