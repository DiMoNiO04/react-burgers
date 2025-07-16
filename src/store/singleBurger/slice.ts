import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit'
import axios from 'axios'

import { EStatus } from '@/utils/enums'

import { API_URL_BURGERS } from '../../utils/consts'
import { IBurger } from '../burgers/types'
import { RootState } from '../store'
import { IFetchSingleBurgerProps, ISingleBurgerSliceState } from './types'

export const fetchSingleBurger = createAsyncThunk<IBurger, IFetchSingleBurgerProps>(
  'singleBurger/fetchBurger',
  async ({ id }) => (await axios.get<IBurger>(`${API_URL_BURGERS}/${id}`)).data,
)

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

export const selectSingleBurger = (state: RootState) => state.singleBurger
