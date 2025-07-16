import { createSlice, PayloadAction } from '@reduxjs/toolkit'

import { IFilterOption } from '@/utils/interfaces'

import { BURGER_CATEGORIES, SORT_OPTIONS } from '../../data/filters'
import { IFilterSliceState } from './types'

export const initialStateFilter: IFilterSliceState = {
  category: BURGER_CATEGORIES[0].value,
  sort: SORT_OPTIONS[0],
  currentPage: 1,
  search: '',
}

export const filterSlice = createSlice({
  name: 'filter',
  initialState: initialStateFilter,
  reducers: {
    setCategory: (state, action: PayloadAction<number>) => {
      state.category = action.payload
    },
    setSort: (state, action: PayloadAction<IFilterOption<string>>) => {
      state.sort = action.payload
    },
    setSearch: (state, action: PayloadAction<string>) => {
      state.search = action.payload
    },
    setCurrentPage: (state, action: PayloadAction<number>) => {
      state.currentPage = action.payload
    },
    setFilters: (state, action: PayloadAction<IFilterSliceState>) => {
      state.sort = action.payload.sort
      state.currentPage = Number(action.payload.currentPage)
      state.category = Number(action.payload.category)
      state.search = action.payload.search
    },
  },
})

export const { setCategory, setSort, setCurrentPage, setSearch, setFilters } = filterSlice.actions
export default filterSlice.reducer
