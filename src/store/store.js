import { configureStore } from '@reduxjs/toolkit'

import cartReducer from './cart/slice'
import filterReducer from './filter/slice'

export const store = configureStore({
  reducer: {
    filter: filterReducer,
    cart: cartReducer,
  },
})
