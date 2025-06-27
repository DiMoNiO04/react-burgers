import { IconClose, IconSearch } from '../../icons'
import styles from './styles.module.scss'

export const Search = ({ searchValue, setSearchValue }) => {
  const onChangeSearchValue = (e) => setSearchValue(e.target.value)
  const onClearSearchValue = () => setSearchValue('')

  return (
    <div className={styles.block}>
      <div className={styles.iconSearch}>
        <IconSearch />
      </div>
      <input type="text" placeholder="Поиск..." value={searchValue} onChange={onChangeSearchValue} className={styles.input} />
      {searchValue && (
        <button className={styles.btnClear} type="button" onClick={onClearSearchValue}>
          <IconClose />
        </button>
      )}
    </div>
  )
}
