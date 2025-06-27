import { ProviderContexts, ProviderRouter } from './providers'

export const App = () => {
  return (
    <ProviderContexts>
      <ProviderRouter />
    </ProviderContexts>
  )
}
