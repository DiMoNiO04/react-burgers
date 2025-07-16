import { Link } from 'react-router'

import { IconClose, IconMinus, IconPlus } from '@/components/icons'
import { BURGER_SIZES } from '@/data'
import { changeBurgerCount, removeBurgerCart } from '@/store/cart/slice'
import { IBurgerCart } from '@/store/cart/types'
import { useAppDispatch } from '@/store/store'
import { EUrls } from '@/utils/enums'

import styles from './styles.module.scss'

export const CardCart = ({ id, imageUrl, title, type, count, size }: IBurgerCart) => {
  const dispatch = useAppDispatch()

  const handleIncrease = () => {
    dispatch(
      changeBurgerCount({
        id,
        sizeId: size.id,
        typeValue: type.value,
        delta: 1,
      }),
    )
  }

  const handleDecrease = () => {
    dispatch(
      changeBurgerCount({
        id,
        sizeId: size.id,
        typeValue: type.value,
        delta: -1,
      }),
    )
  }

  const handleRemove = () => {
    dispatch(
      removeBurgerCart({
        id,
        sizeId: size.id,
        typeValue: type.value,
      }),
    )
  }

  return (
    <div className={styles.card}>
      <Link to={`${EUrls.SINGLE_BURGER}${id}`} className={styles.mainInfo}>
        <div className={styles.img}>
          <img src={imageUrl} alt="" />
        </div>
        <div className={styles.info}>
          <h3>{title}</h3>
          <p>
            {type.name}, {BURGER_SIZES.find((burgerSize) => burgerSize.value === size.id)?.name}
          </p>
        </div>
      </Link>
      <div className={styles.count}>
        <button type="button" className={styles.countBtn} disabled={count === 1} onClick={handleDecrease}>
          <IconMinus />
        </button>
        <b>{count}</b>
        <button type="button" className={styles.countBtn} onClick={handleIncrease}>
          <IconPlus />
        </button>
      </div>
      <div className={styles.price}>{(size.price * count).toFixed(2)} BYN</div>
      <div className={styles.remove}>
        <button type="button" className={styles.btnRemove} onClick={handleRemove}>
          <IconClose />
        </button>
      </div>
    </div>
  )
}
