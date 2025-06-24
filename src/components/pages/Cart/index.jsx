import { CardCart } from '../../blocks'
import { CartHeader } from '../../blocks/CartHeader'
import { Header, Wrapper } from '../../layouts'
import styles from './styles.module.scss'

export const CartPageContent = () => {
  return (
    <Wrapper>
      <Header />
      <main>
        <div className={styles.content}>
          <CartHeader />
          <div className={styles.cards}>
            <CardCart />
            <CardCart />
            <CardCart />
            <CardCart />
            <CardCart />
            <CardCart />
          </div>
        </div>
      </main>
    </Wrapper>
  )
}
