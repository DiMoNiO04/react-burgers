import { useState } from 'react'

import { ContextSort } from '../context'
import { SORT_OPTIONS } from '../data'

export const ProviderSortContext = ({ children }) => {
  const [sort, setSort] = useState(SORT_OPTIONS[0])

  return <ContextSort.Provider value={{ sort, setSort }}>{children}</ContextSort.Provider>
}
