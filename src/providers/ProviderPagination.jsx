import { useState } from 'react'

import { PaginationContext } from '../context'

export const ProviderPagination = ({ children }) => {
  const [page, setPage] = useState(1)

  return <PaginationContext.Provider value={{ page, setPage }}>{children}</PaginationContext.Provider>
}
