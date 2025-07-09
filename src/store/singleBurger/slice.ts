import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import axios from 'axios'

import { API_URL_BURGERS } from '../../utils/consts'

export const fetchSingleBurger = createAsyncThunk('singleBurger/fetchBurger', async ({ id }) => (await axios.get(`${API_URL_BURGERS}/${id}`)).data)

export const initialStateSingleBurger = {
  burger: null,
  status: 'loading',
}

export const singleBurgerSlice = createSlice({
  name: 'singleBurger',
  initialState: initialStateSingleBurger,
  reducers: {
    setBurger: (state, action) => {
      state.burger = action.payload
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchSingleBurger.pending, (state) => {
        state.status = 'loading'
        state.burger = null
      })
      .addCase(fetchSingleBurger.fulfilled, (state, action) => {
        state.burger = action.payload
        state.status = 'success'
      })
      .addCase(fetchSingleBurger.rejected, (state) => {
        state.status = 'error'
        state.burger = null
      })
  },
})

export const { setBurger } = singleBurgerSlice.actions
export default singleBurgerSlice.reducer

export const selectSingleBurger = (state) => state.singleBurger
