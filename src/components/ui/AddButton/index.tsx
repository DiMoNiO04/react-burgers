import { IconPlus } from '../../icons'
import styles from './styles.module.scss'

export const AddButton = ({ count = 0, onClick }) => {
  return (
    <button type="button" className={styles.button} onClick={onClick}>
      <IconPlus />
      <span>Добавить</span>
      {count > 0 && <div className={styles.count}>{count}</div>}
    </button>
  )
}
