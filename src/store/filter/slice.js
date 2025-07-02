import { createSlice } from '@reduxjs/toolkit'

import { BURGER_CATEGORIES, SORT_OPTIONS } from '../../data/filters'

const initialState = {
  category: BURGER_CATEGORIES[0].value,
  sort: SORT_OPTIONS[0],
  currentPage: 1,
  search: '',
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
    setSearch: (state, action) => {
      state.search = action.payload
    },
    setCurrentPage: (state, action) => {
      state.currentPage = action.payload
    },
  },
})

export const { setCategory, setSort, setCurrentPage, setSearch } = filterSlice.actions
export default filterSlice.reducer
