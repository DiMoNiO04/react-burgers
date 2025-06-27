import { useState } from 'react'

import { SearchContext } from '../context/SearchContext'

export const ProviderSearch = ({ children }) => {
  const [search, setSearch] = useState('')

  return <SearchContext.Provider value={{ search, setSearch }}>{children}</SearchContext.Provider>
}
