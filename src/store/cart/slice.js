import { createSlice } from '@reduxjs/toolkit'

export const initialStateCart = {
  totalPrice: 0,
  totalCount: 0,
  burgers: [],
}

export const cartSlice = createSlice({
  name: 'cart',
  initialState: initialStateCart,
  reducers: {
    addBurgerCart: (state, action) => {
      const findItem = state.burgers.find(
        (burger) => burger.id === action.payload.id && burger.size.id === action.payload.size.id && burger.type.value === action.payload.type.value,
      )

      if (findItem) {
        findItem.count++
      } else {
        state.burgers.push({
          ...action.payload,
          count: 1,
        })
      }

      state.totalPrice = Number(state.burgers.reduce((sum, burger) => sum + burger.size.price * burger.count, 0).toFixed(2))

      state.totalCount = Number(state.burgers.reduce((count, burger) => count + burger.count, 0))
    },
    removeBurgerCart: (state, action) => {},
    clearCart: () => initialStateCart,
  },
})

export const { addBurgerCart, removeBurgerCart, clearCart } = cartSlice.actions
export default cartSlice.reducer
