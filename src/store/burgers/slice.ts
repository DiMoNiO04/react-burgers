import { createSlice, PayloadAction } from '@reduxjs/toolkit'

import { EStatus } from '@/utils/enums'

import { fetchBurgers } from './actions'
import { IBurger, IBurgersSliceState } from './types'

export const initialStateBurgers: IBurgersSliceState = {
  burgers: [],
  status: EStatus.LOADING,
}

export const burgersSlice = createSlice({
  name: 'burgers',
  initialState: initialStateBurgers,
  reducers: {
    setBurgers: (state, action: PayloadAction<IBurger[]>) => {
      state.burgers = action.payload
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchBurgers.pending, (state) => {
        state.status = EStatus.LOADING
        state.burgers = []
      })
      .addCase(fetchBurgers.fulfilled, (state, action: PayloadAction<IBurger[]>) => {
        state.burgers = action.payload
        state.status = EStatus.SUCCESS
      })
      .addCase(fetchBurgers.rejected, (state) => {
        state.status = EStatus.ERROR
        state.burgers = []
      })
  },
})

export const { setBurgers } = burgersSlice.actions
export default burgersSlice.reducer
