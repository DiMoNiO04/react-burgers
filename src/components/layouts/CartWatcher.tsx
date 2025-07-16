import { useEffect } from 'react'

import { selectCart } from '@/store/cart/selectors'
import { useAppSelector } from '@/store/store'
import { KEY_STORAGE_CART } from '@/utils/cartStorage'

export const CartWatcher = () => {
  const { burgers } = useAppSelector(selectCart)

  useEffect(() => {
    localStorage.setItem(KEY_STORAGE_CART, JSON.stringify(burgers))
  }, [burgers])

  return null
}
