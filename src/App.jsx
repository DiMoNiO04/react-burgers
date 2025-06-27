import { ProviderCategory, ProviderRouter, ProviderSearch, ProviderSort } from './providers'

export const App = () => {
  return (
    <ProviderCategory>
      <ProviderSort>
        <ProviderSearch>
          <ProviderRouter />
        </ProviderSearch>
      </ProviderSort>
    </ProviderCategory>
  )
}
