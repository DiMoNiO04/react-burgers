import { useState } from 'react'

import { CategoryContext } from '../context'

export const ProviderCategory = ({ children }) => {
  const [category, setCategory] = useState(0)

  return <CategoryContext.Provider value={{ category, setCategory }}>{children}</CategoryContext.Provider>
}
