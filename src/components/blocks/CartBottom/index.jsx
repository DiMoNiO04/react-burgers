import { useSelector } from 'react-redux'
import { Link } from 'react-router'

import { URLS } from '../../../utils/urls'
import { IconArrowRound } from '../../icons'
import styles from './styles.module.scss'

export const CartBottom = () => {
  const { totalPrice, totalCount } = useSelector((state) => state.cart)

  return (
    <div className={styles.block}>
      <div className={styles.details}>
        <div className={styles.count}>
          Всего пицц: <b>{totalCount} шт.</b>
        </div>
        <div className={styles.price}>
          Сумма заказа: <b>{totalPrice} BYN</b>
        </div>
      </div>
      <div className={styles.btns}>
        <Link to={URLS.MAIN} className={styles.btnBack}>
          <IconArrowRound />
          <span>Вернуться назад</span>
        </Link>
        <button type="button" className={styles.btn}>
          Оплатить сейчас
        </button>
      </div>
    </div>
  )
}
