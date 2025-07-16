import { createSlice, PayloadAction } from '@reduxjs/toolkit'

import { getCartFromStorage } from '@/utils/cartStorage'
import { recalculateTotals } from '@/utils/recalculateTotals'

import { IBurgerCart, ICartSliceState, IChangeBurgerCountPayload, IRemoveBurgerPayload } from './types'

const { burgers, totalPrice, totalCount } = getCartFromStorage()

export const initialStateCart: ICartSliceState = {
  burgers,
  totalPrice,
  totalCount,
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

      const totals = recalculateTotals(state.burgers)
      state.totalPrice = totals.totalPrice
      state.totalCount = totals.totalCount
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

      const totals = recalculateTotals(state.burgers)
      state.totalPrice = totals.totalPrice
      state.totalCount = totals.totalCount
    },

    removeBurgerCart: (state, action: PayloadAction<IRemoveBurgerPayload>) => {
      const { id, sizeId, typeValue } = action.payload

      state.burgers = state.burgers.filter((burger) => !(burger.id === id && burger.size.id === sizeId && burger.type.value === typeValue))

      const totals = recalculateTotals(state.burgers)
      state.totalPrice = totals.totalPrice
      state.totalCount = totals.totalCount
    },

    clearCart: () => initialStateCart,
  },
})

export const { addBurgerCart, removeBurgerCart, changeBurgerCount, clearCart } = cartSlice.actions
export default cartSlice.reducer
