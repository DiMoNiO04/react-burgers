import { CardCart, CartBottom, CartEmpty, CartHeader } from '../../components/blocks'
import { Layout } from '../../components/layouts'
import styles from './styles.module.scss'

export const CartPage = () => {
  const isEmpty = false

  return (
    <Layout>
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
    </Layout>
  )
}
