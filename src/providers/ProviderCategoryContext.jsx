import { useState } from 'react'

import { ContextCategory } from '../context'

export const ProviderCategoryContext = ({ children }) => {
  const [category, setCategory] = useState(0)

  return <ContextCategory.Provider value={{ category, setCategory }}>{children}</ContextCategory.Provider>
}
