import styles from './styles.module.scss'

export const ErrorContent = () => {
  const handleReload = () => window.location.reload()

  return (
    <div className={styles.content}>
      <h2 className={styles.title}>Произошла ошибка!</h2>
      <p className={styles.desc}>Попробуйте обновить страницу или повторить попытку позже.</p>
      <button className={styles.retryButton} onClick={handleReload}>
        Перезагрузить страницу
      </button>
    </div>
  )
}
