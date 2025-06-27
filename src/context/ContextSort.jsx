import { createContext } from 'react'

const defaultValues = {
  sort: '',
  setSort: () => {},
}

export const ContextSort = createContext(defaultValues)
