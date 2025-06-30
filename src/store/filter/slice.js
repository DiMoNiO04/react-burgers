import { createSlice } from '@reduxjs/toolkit'

import { BURGER_CATEGORIES, SORT_OPTIONS } from '../../data/filters'

const initialState = {
  category: BURGER_CATEGORIES[0].value,
  sort: SORT_OPTIONS[0],
  currentPage: 1,
}

export const filterSlice = createSlice({
  name: 'filter',
  initialState,
  reducers: {
    setCategory: (state, action) => {
      state.category = action.payload
    },
    setSort: (state, action) => {
      state.sort = action.payload
    },
    setCurrentPage: (state, action) => {
      state.currentPage = action.payload
    },
  },
})

export const { setCategory, setSort, setCurrentPage } = filterSlice.actions
export default filterSlice.reducer
