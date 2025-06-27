import { ProviderCategoryContext } from './ProviderCategoryContext'
import { ProviderPaginationContext } from './ProviderPaginationContext'
import { ProviderSearchContext } from './ProviderSearchContext'
import { ProviderSortContext } from './ProviderSortContext'

export const ProviderContexts = ({ children }) => {
  return (
    <ProviderPaginationContext>
      <ProviderCategoryContext>
        <ProviderSortContext>
          <ProviderSearchContext>{children}</ProviderSearchContext>
        </ProviderSortContext>
      </ProviderCategoryContext>
    </ProviderPaginationContext>
  )
}
