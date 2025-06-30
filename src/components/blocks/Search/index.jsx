import { useContext, useRef } from 'react'

import { ContextPagination } from '../../../context'
import { ContextSearch } from '../../../context/ContextSearch'
import { IconClose, IconSearch } from '../../icons'
import styles from './styles.module.scss'

export const Search = () => {
  const { search, setSearch } = useContext(ContextSearch)
  const { setPage } = useContext(ContextPagination)
  const inputRef = useRef()

  const onChangeSearch = (e) => {
    setPage(1)
    setSearch(e.target.value)
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
      <input ref={inputRef} type="text" placeholder="Поиск..." value={search} onChange={onChangeSearch} className={styles.input} />
      {search && (
        <button className={styles.btnClear} type="button" onClick={onClearSearch}>
          <IconClose />
        </button>
      )}
    </div>
  )
}
