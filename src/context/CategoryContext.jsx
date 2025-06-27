import { createContext } from 'react'

const defaultValues = {
  category: '',
  setCategory: () => {},
}

export const CategoryContext = createContext(defaultValues)
