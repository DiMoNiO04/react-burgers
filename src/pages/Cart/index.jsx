import { CardCart, CartEmpty, CartHeader } from '../../components/blocks'
import { Header, Wrapper } from '../../components/layouts'
import styles from './styles.module.scss'

export const CartPage = () => {
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
