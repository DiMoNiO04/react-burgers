import { IBurgerCart } from '@/store/cart/types'

export const recalculateTotals = (burgers: IBurgerCart[]) => {
  const totalPrice = Number(burgers.reduce((sum, burger) => sum + burger.size.price * burger.count, 0).toFixed(2))
  const totalCount = burgers.reduce((count, burger) => count + burger.count, 0)

  return {
    totalPrice,
    totalCount,
  }
}
