import { IconCart, IconCartClear } from '../../icons'
import { Title } from '../../ui'
import styles from './styles.module.scss'

export const CartHeader = () => {
  return (
    <div className={styles.block}>
      <div className={styles.title}>
        <IconCart width={32} height={32} color="#000000" />
        <Title title={'Корзина'} />
      </div>
      <button type="button" className={styles.btnClear}>
        <IconCartClear />
        <span>Очистить корзину</span>
      </button>
    </div>
  )
}
