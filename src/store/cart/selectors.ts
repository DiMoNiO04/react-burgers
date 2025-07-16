import { RootState } from '../store'
import { IBurgerCart } from './types'

export const selectCart = (state: RootState) => state.cart
export const selectCardCart = (id: string) => (state: RootState) =>
  state.cart.burgers.filter((burger: IBurgerCart) => burger.id === id).reduce((sum, burger) => sum + (burger.count || 0), 0)
