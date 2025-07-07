import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import axios from 'axios'

export const fetchBurgers = createAsyncThunk('burgers/fetchBurgers', async ({ apiUrl }) => (await axios.get(apiUrl)).data)

export const initialStateBurgers = {
  burgers: [],
  status: 'loading',
}

export const burgersSlice = createSlice({
  name: 'burgers',
  initialState: initialStateBurgers,
  reducers: {
    setBurgers: (state, action) => {
      state.burgers = action.payload
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchBurgers.pending, (state) => {
        state.status = 'loading'
        state.burgers = []
      })
      .addCase(fetchBurgers.fulfilled, (state, action) => {
        state.burgers = action.payload
        state.status = 'success'
      })
      .addCase(fetchBurgers.rejected, (state) => {
        state.status = 'error'
        state.burgers = []
      })
  },
})

export const { setBurgers } = burgersSlice.actions
export default burgersSlice.reducer

export const selectBurgers = (state) => state.burgers
