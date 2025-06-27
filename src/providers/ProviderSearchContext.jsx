import { useState } from 'react'

import { ContextSearch } from '../context'

export const ProviderSearchContext = ({ children }) => {
  const [search, setSearch] = useState('')

  return <ContextSearch.Provider value={{ search, setSearch }}>{children}</ContextSearch.Provider>
}
