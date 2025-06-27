import { createContext } from 'react'

const defaultValues = {
  page: '',
  setPage: () => {},
}

export const PaginationContext = createContext(defaultValues)
