import { CardCart, CartBottom, CartEmpty } from '../../blocks'
import { CartHeader } from '../../blocks/CartHeader'
import { Header, Wrapper } from '../../layouts'
import styles from './styles.module.scss'

export const CartPageContent = () => {
  const isEmpty = true

  return (
    <Wrapper>
      <Header />
      <main>
        <div className={styles.content}>
          {isEmpty ? (
            <CartEmpty />
          ) : (
            <>
              <CartHeader />
              <div className={styles.cards}>
                <CardCart />
                <CardCart />
                <CardCart />
                <CardCart />
                <CardCart />
                <CardCart />
              </div>
              <CartBottom />
            </>
          )}
        </div>
      </main>
    </Wrapper>
  )
}
