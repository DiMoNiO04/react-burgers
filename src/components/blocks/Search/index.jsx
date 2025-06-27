import { IconClose, IconSearch } from '../../icons'
import styles from './styles.module.scss'

export const Search = () => {
  return (
    <div className={styles.block}>
      <div className={styles.iconSearch}>
        <IconSearch />
      </div>
      <input type="text" placeholder="Поиск..." className={styles.input} />
      <button className={styles.btnClear} type="button">
        <IconClose />
      </button>
    </div>
  )
}
