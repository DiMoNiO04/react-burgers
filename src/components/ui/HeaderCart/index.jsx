import { IconCart } from '../../icons'
import styles from './styles.module.scss'

export const HeaderCart = () => {
  return (
    <a href="/cart.html" className={styles.block}>
      <div className={styles.price}>520 ₽</div>
      <div className={styles.cartBlock}>
        <IconCart />
        <div className={styles.cartCount}>3</div>
      </div>
    </a>
  )
}
