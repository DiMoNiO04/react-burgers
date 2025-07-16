import { createSlice, PayloadAction } from '@reduxjs/toolkit'

import { RootState } from '../store'
import { IBurgerCart, ICartSliceState, IChangeBurgerCountPayload, IRemoveBurgerPayload } from './types'

export const initialStateCart: ICartSliceState = {
  totalPrice: 0,
  totalCount: 0,
  burgers: [],
}

const recalculateTotals = (state: ICartSliceState) => {
  state.totalPrice = Number(state.burgers.reduce((sum, burger) => sum + burger.size.price * burger.count, 0).toFixed(2))
  state.totalCount = state.burgers.reduce((count, burger) => count + burger.count, 0)
}

export const cartSlice = createSlice({
  name: 'cart',
  initialState: initialStateCart,
  reducers: {
    addBurgerCart: (state, action: PayloadAction<Omit<IBurgerCart, 'count'>>) => {
      const { id, size, type } = action.payload

      const findItem = state.burgers.find((burger) => burger.id === id && burger.size.id === size.id && burger.type.value === type.value)

      if (findItem) {
        findItem.count++
      } else {
        state.burgers.push({
          ...action.payload,
          count: 1,
        })
      }

      recalculateTotals(state)
    },

    changeBurgerCount: (state, action: PayloadAction<IChangeBurgerCountPayload>) => {
      const { id, sizeId, typeValue, delta } = action.payload

      const findItem = state.burgers.find((burger) => burger.id === id && burger.size.id === sizeId && burger.type.value === typeValue)

      if (findItem) {
        findItem.count += delta
        if (findItem.count < 1) {
          findItem.count = 1
        }
      }

      recalculateTotals(state)
    },

    removeBurgerCart: (state, action: PayloadAction<IRemoveBurgerPayload>) => {
      const { id, sizeId, typeValue } = action.payload

      state.burgers = state.burgers.filter((burger) => !(burger.id === id && burger.size.id === sizeId && burger.type.value === typeValue))

      recalculateTotals(state)
    },

    clearCart: () => initialStateCart,
  },
})

export const { addBurgerCart, removeBurgerCart, changeBurgerCount, clearCart } = cartSlice.actions
export default cartSlice.reducer

export const selectCart = (state: RootState) => state.cart
export const selectCardCart = (id: string) => (state: RootState) =>
  state.cart.burgers.filter((burger: IBurgerCart) => burger.id === id).reduce((sum, burger) => sum + (burger.count || 0), 0)
