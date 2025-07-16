import { IBurgerCart } from '@/store/cart/types'

import { recalculateTotals } from './recalculateTotals'

export const KEY_STORAGE_CART: string = 'cart'

export const getCartFromStorage = () => {
  const data = localStorage.getItem(KEY_STORAGE_CART)
  const burgers: IBurgerCart[] = data ? JSON.parse(data) : []

  const totals = recalculateTotals(burgers)
  const totalPrice = totals.totalPrice
  const totalCount = totals.totalCount

  return {
    burgers,
    totalPrice,
    totalCount,
  }
}
