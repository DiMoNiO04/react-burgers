import clsx from 'clsx'

import { AddButton } from '../../ui'
import styles from './styles.module.scss'

export const Card = () => {
  return (
    <div className={styles.block}>
      <img className={styles.image} src="https://burger-king.by/api/v1/files/path/1_CategoryItem_1066354_D820F7D11E073DD67D30B8CFC937B2CA.webp" alt="Pizza" />
      <h3 className={styles.title}>Чикен Тар-Тар</h3>
      <div className={styles.selector}>
        <ul className={styles.selectorList}>
          <li className={clsx(styles.selectorItem, styles.selectorItemActive)}>тонкое</li>
          <li className={styles.selectorItem}>традиционное</li>
        </ul>
        <ul className={styles.selectorList}>
          <li className={clsx(styles.selectorItem, styles.selectorItemActive)}>26 см.</li>
          <li className={styles.selectorItem}>30 см.</li>
          <li className={styles.selectorItem}>40 см.</li>
        </ul>
      </div>
      <div className={styles.bottom}>
        <div className={styles.price}>
          от <span>395 ₽</span>
        </div>
        <AddButton count={2} />
      </div>
    </div>
  )
}
