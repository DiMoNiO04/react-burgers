import { createContext } from 'react'

const defaultValues = {
  page: '',
  setPage: () => {},
}

export const ContextPagination = createContext(defaultValues)
