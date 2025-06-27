import { createContext } from 'react'

const defaultValues = {
  search: '',
  setSearch: () => {},
}

export const ContextSearch = createContext(defaultValues)
