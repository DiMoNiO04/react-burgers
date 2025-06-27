import { useState } from 'react'

import { SortContext } from '../context'
import { SORT_OPTIONS } from '../data'

export const ProviderSort = ({ children }) => {
  const [sort, setSort] = useState(SORT_OPTIONS[0])

  return <SortContext.Provider value={{ sort, setSort }}>{children}</SortContext.Provider>
}
