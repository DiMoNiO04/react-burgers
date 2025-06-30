import { ProviderPaginationContext } from './ProviderPaginationContext'
import { ProviderSearchContext } from './ProviderSearchContext'

export const ProviderContexts = ({ children }) => {
  return (
    <ProviderPaginationContext>
      <ProviderSearchContext>{children}</ProviderSearchContext>
    </ProviderPaginationContext>
  )
}
