import { useSelector } from 'react-redux'

import { CardCart, CartBottom, CartEmpty, CartHeader } from '../../components/blocks'
import { Layout } from '../../components/layouts'
import styles from './styles.module.scss'

export const CartPage = () => {
  const { burgers, totalCount } = useSelector((state) => state.cart)

  return (
    <Layout>
      <div className={styles.content}>
        {totalCount === 0 ? (
          <CartEmpty />
        ) : (
          <>
            <CartHeader />
            <div className={styles.cards}>
              {burgers.map((burger) => (
                <CardCart key={burger.id} {...burger} />
              ))}
            </div>
            <CartBottom />
          </>
        )}
      </div>
    </Layout>
  )
}
