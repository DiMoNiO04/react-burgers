import { useState } from 'react'

import { ContextPagination } from '../context'

export const ProviderPaginationContext = ({ children }) => {
  const [page, setPage] = useState(1)

  return <ContextPagination.Provider value={{ page, setPage }}>{children}</ContextPagination.Provider>
}
