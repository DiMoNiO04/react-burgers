import { configureStore } from '@reduxjs/toolkit'
import { TypedUseSelectorHook, useDispatch, useSelector } from 'react-redux'

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

export type RootState = ReturnType<typeof store.getState>
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector

export type AppDispatch = typeof store.dispatch
export const useAppDispatch = useDispatch.withTypes<AppDispatch>()
