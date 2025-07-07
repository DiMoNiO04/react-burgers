import { useSelector } from 'react-redux'
import { Link } from 'react-router'

import { URLS } from '../../../utils/urls'
import { IconCart } from '../../icons'
import styles from './styles.module.scss'

export const HeaderCart = () => {
  const { totalPrice, totalCount } = useSelector((state) => state.cart)

  return (
    <Link to={URLS.CART} className={styles.block}>
      <div className={styles.price}>{totalPrice} BYN</div>
      <div className={styles.cartBlock}>
        <IconCart />
        <div className={styles.cartCount}>{totalCount}</div>
      </div>
    </Link>
  )
}
