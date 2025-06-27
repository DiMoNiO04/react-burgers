import { ProviderCategory, ProviderPagination, ProviderRouter, ProviderSearch, ProviderSort } from './providers'

export const App = () => {
  return (
    <ProviderPagination>
      <ProviderCategory>
        <ProviderSort>
          <ProviderSearch>
            <ProviderRouter />
          </ProviderSearch>
        </ProviderSort>
      </ProviderCategory>
    </ProviderPagination>
  )
}
