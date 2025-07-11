import { IconPlus } from '@/components/icons'

import styles from './styles.module.scss'

interface IAddButtonProps {
  count: number
  onClick: () => void
}

export const AddButton = ({ count = 0, onClick }: IAddButtonProps) => {
  return (
    <button type="button" className={styles.button} onClick={onClick}>
      <IconPlus />
      <span>Добавить</span>
      {count > 0 && <div className={styles.count}>{count}</div>}
    </button>
  )
}
