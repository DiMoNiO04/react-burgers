import { createSlice, PayloadAction } from '@reduxjs/toolkit'

import { EStatus } from '@/utils/enums'

import { IBurger } from '../burgers/types'
import { fetchSingleBurger } from './actions'
import { ISingleBurgerSliceState } from './types'

export const initialStateSingleBurger: ISingleBurgerSliceState = {
  burger: null,
  status: EStatus.LOADING,
}

export const singleBurgerSlice = createSlice({
  name: 'singleBurger',
  initialState: initialStateSingleBurger,
  reducers: {
    setBurger: (state, action: PayloadAction<IBurger>) => {
      state.burger = action.payload
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchSingleBurger.pending, (state) => {
        state.status = EStatus.LOADING
        state.burger = null
      })
      .addCase(fetchSingleBurger.fulfilled, (state, action: PayloadAction<IBurger>) => {
        state.burger = action.payload
        state.status = EStatus.SUCCESS
      })
      .addCase(fetchSingleBurger.rejected, (state) => {
        state.status = EStatus.ERROR
        state.burger = null
      })
  },
})

export const { setBurger } = singleBurgerSlice.actions
export default singleBurgerSlice.reducer
