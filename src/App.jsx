import { ProviderRouter, ProviderSearch, ProviderSort } from './providers'

export const App = () => {
  return (
    <ProviderSort>
      <ProviderSearch>
        <ProviderRouter />
      </ProviderSearch>
    </ProviderSort>
  )
}
