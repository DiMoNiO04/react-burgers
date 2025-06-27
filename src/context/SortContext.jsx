import { createContext } from 'react'

const defaultValues = {
  sort: '',
  setSort: () => {},
}

export const SortContext = createContext(defaultValues)
