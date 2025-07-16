import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit'
import axios from 'axios'

import { EStatus } from '@/utils/enums'

import { RootState } from '../store'
import { IBurger, IBurgersSliceState, IFetchBurgersProps } from './types'

export const fetchBurgers = createAsyncThunk<IBurger[], IFetchBurgersProps>('burgers/fetchBurgers', async ({ apiUrl }) => (await axios.get<IBurger[]>(apiUrl)).data)

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

export const selectBurgers = (state: RootState) => state.burgers
