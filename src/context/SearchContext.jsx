import { createContext } from 'react'

const defaultValues = {
  search: '',
  setSearch: () => {},
}

export const SearchContext = createContext(defaultValues)
