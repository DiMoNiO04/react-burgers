import { BtnBack, Title } from '@/components/ui'

import styles from './styles.module.scss'

export const CartEmpty = () => {
  return (
    <div className={styles.block}>
      <Title title={'Корзина пустая 😕'} />
      <p className={styles.desc}>
        Вероятней всего, вы не заказывали ещё бургеры. <br />
        Для того, чтобы заказать бургер, перейди на главную страницу.
      </p>
      <div className={styles.img}>
        <img src="/img/emptyCart.webp" alt="" />
      </div>
      <BtnBack />
    </div>
  )
}
