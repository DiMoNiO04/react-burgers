import { Link } from 'react-router'

import { EUrls } from '@/utils/enums'

import styles from './styles.module.scss'

export const Logo = () => {
  return (
    <Link to={EUrls.MAIN} className={styles.block}>
      <div className={styles.logoImg}>
        <img src="/logo.png" alt="" />
      </div>
      <div className={styles.titles}>
        <h1 className={styles.title}>Burgly</h1>
        <span className={styles.desc}>самые вкусные бургеры</span>
      </div>
    </Link>
  )
}
