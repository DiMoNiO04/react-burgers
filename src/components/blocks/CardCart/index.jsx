import { BURGER_SIZES } from '../../../data'
import { IconClose, IconMinus, IconPlus } from '../../icons'
import styles from './styles.module.scss'

export const CardCart = ({ imageUrl, title, type, count, size }) => {
  return (
    <div className={styles.card}>
      <div className={styles.mainInfo}>
        <div className={styles.img}>
          <img src={imageUrl} alt="" />
        </div>
        <div className={styles.info}>
          <h3>{title}</h3>
          <p>
            {type.name}, {BURGER_SIZES.find((burgerSize) => burgerSize.value === size.id).name}
          </p>
        </div>
      </div>
      <div className={styles.count}>
        <button type="button" className={styles.countBtn} disabled={count === 1}>
          <IconMinus />
        </button>
        <b>{count}</b>
        <button type="button" className={styles.countBtn}>
          <IconPlus />
        </button>
      </div>
      <div className={styles.price}>{(size.price * count).toFixed(2)} BYN</div>
      <div className={styles.remove}>
        <button type="button" className={styles.btnRemove}>
          <IconClose />
        </button>
      </div>
    </div>
  )
}
