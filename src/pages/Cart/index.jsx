import { useSelector } from 'react-redux'

import { CardCart, CartBottom, CartEmpty, CartHeader } from '../../components/blocks'
import { selectCart } from '../../store/cart/slice'
import styles from './styles.module.scss'

export const CartPage = () => {
  const { burgers, totalCount } = useSelector(selectCart)

  return (
    <>
      <div className={styles.content}>
        {totalCount === 0 ? (
          <CartEmpty />
        ) : (
          <>
            <CartHeader />
            <div className={styles.cards}>
              {burgers.map((burger, index) => (
                <CardCart key={`${burger.id}-${index}`} {...burger} />
              ))}
            </div>
            <CartBottom />
          </>
        )}
      </div>
    </>
  )
}
