import { ProviderContexts, ProviderRouter, ProviderStore } from './providers'

export const App = () => {
  return (
    <ProviderStore>
      <ProviderContexts>
        <ProviderRouter />
      </ProviderContexts>
    </ProviderStore>
  )
}
