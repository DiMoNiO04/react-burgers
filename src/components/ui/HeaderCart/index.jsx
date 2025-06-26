import { Link } from 'react-router'

import { URLS } from '../../../utils/urls'
import { IconCart } from '../../icons'
import styles from './styles.module.scss'

export const HeaderCart = () => {
  return (
    <Link to={URLS.CART} className={styles.block}>
      <div className={styles.price}>520 ₽</div>
      <div className={styles.cartBlock}>
        <IconCart />
        <div className={styles.cartCount}>3</div>
      </div>
    </Link>
  )
}
