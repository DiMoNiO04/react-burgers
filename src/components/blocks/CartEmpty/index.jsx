import { Title } from '../../ui'
import styles from './styles.module.scss'

export const CartEmpty = () => {
  return (
    <div className={styles.block}>
      <Title title={'Корзина пустая 😕'} />
      <p className={styles.desc}>
        Вероятней всего, вы не заказывали ещё пиццу. <br />
        Для того, чтобы заказать пиццу, перейди на главную страницу.
      </p>
      <div className={styles.img}>
        <img src="/img/emptyCart.webp" alt="" />
      </div>
      <a href="/" className={styles.btn}>
        Вернуться назад
      </a>
    </div>
  )
}
