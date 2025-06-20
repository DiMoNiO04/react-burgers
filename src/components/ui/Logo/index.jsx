import styles from './styles.module.scss'

export const Logo = () => {
  return (
    <a href="/" className={styles.block}>
      <div className={styles.logoImg}>
        <img src="/logo.png" alt="" />
      </div>
      <div className={styles.titles}>
        <h1 className={styles.title}>Burgly</h1>
        <span className={styles.desc}>самые вкусные бургеры во вселенной</span>
      </div>
    </a>
  )
}
