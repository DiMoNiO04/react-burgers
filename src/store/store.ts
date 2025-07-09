import { configureStore } from '@reduxjs/toolkit'

import burgersReducer from './burgers/slice'
import cartReducer from './cart/slice'
import filterReducer from './filter/slice'
import singleBurgerReducer from './singleBurger/slice'

export const store = configureStore({
  reducer: {
    filter: filterReducer,
    cart: cartReducer,
    burgers: burgersReducer,
    singleBurger: singleBurgerReducer,
  },
})
