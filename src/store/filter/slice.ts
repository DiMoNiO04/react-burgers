import { createSlice } from '@reduxjs/toolkit'

import { BURGER_CATEGORIES, SORT_OPTIONS } from '../../data/filters'

export const initialStateFilter = {
  category: BURGER_CATEGORIES[0].value,
  sort: SORT_OPTIONS[0],
  currentPage: 1,
  search: '',
}

export const filterSlice = createSlice({
  name: 'filter',
  initialState: initialStateFilter,
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
    setFilters: (state, action) => {
      state.sort = action.payload.sort
      state.currentPage = Number(action.payload.currentPage)
      state.category = Number(action.payload.category)
      state.search = action.payload.search
    },
  },
})

export const { setCategory, setSort, setCurrentPage, setSearch, setFilters } = filterSlice.actions
export default filterSlice.reducer

export const selectFilter = (state) => state.filter
