import clsx from 'clsx'

import styles from './styles.module.scss'

interface IConfirmModal {
  isOpen: boolean
  title: string
  onConfirm: () => void
  onCancel: () => void
}

export const ConfirmModal = ({ isOpen, title, onConfirm, onCancel }: IConfirmModal) => {
  if (!isOpen) return null

  return (
    <div className={styles.block}>
      <div className={styles.title}>{title}</div>
      <div className={styles.buttons}>
        <button className={clsx(styles.btn, styles.btnConfirm)} type="button" onClick={onConfirm}>
          Да
        </button>
        <button className={clsx(styles.btn, styles.btnCancel)} type="button" onClick={onCancel}>
          Нет
        </button>
      </div>
    </div>
  )
}
