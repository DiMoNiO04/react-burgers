import { ProviderRouter, ProviderStore } from './providers'

export const App = () => {
  return (
    <ProviderStore>
      <ProviderRouter />
    </ProviderStore>
  )
}
