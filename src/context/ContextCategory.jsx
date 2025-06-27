import { createContext } from 'react'

const defaultValues = {
  category: '',
  setCategory: () => {},
}

export const ContextCategory = createContext(defaultValues)
