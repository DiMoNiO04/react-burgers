import { Link } from 'react-router'

import { IconCart } from '@/components/icons'
import { selectCart } from '@/store/cart/selectors'
import { useAppSelector } from '@/store/store'
import { EUrls } from '@/utils/enums'

import styles from './styles.module.scss'

export const HeaderCart = () => {
  const { totalPrice, totalCount } = useAppSelector(selectCart)

  return (
    <Link to={EUrls.CART} className={styles.block}>
      <div className={styles.price}>{totalPrice} BYN</div>
      <div className={styles.cartBlock}>
        <IconCart />
        <div className={styles.cartCount}>{totalCount}</div>
      </div>
    </Link>
  )
}
