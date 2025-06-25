import { IconClose, IconMinus, IconPlus } from '../../icons'
import styles from './styles.module.scss'

export const CardCart = () => {
  return (
    <div className={styles.card}>
      <div className={styles.img}>
        <img src="https://burger-king.by/api/v1/files/path/1_CategoryItem_1066354_D820F7D11E073DD67D30B8CFC937B2CA.webp" alt="Burger" />
      </div>
      <div className={styles.info}>
        <h3>Острый цыпленок</h3>
        <p>тонкое тесто, 26 см.</p>
      </div>
      <div className={styles.count}>
        <button type="button" className={styles.countBtn}>
          <IconMinus />
        </button>
        <b>2</b>
        <button type="button" className={styles.countBtn}>
          <IconPlus />
        </button>
      </div>
      <div className={styles.price}>770 ₽</div>
      <div className={styles.remove}>
        <button type="button" className={styles.btnRemove}>
          <IconClose />
        </button>
      </div>
    </div>
  )
}
