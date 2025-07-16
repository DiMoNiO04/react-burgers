import { CartWatcher } from './components/layouts'
import { ProviderRouter, ProviderStore } from './providers'

export const App = () => {
  return (
    <ProviderStore>
      <CartWatcher />
      <ProviderRouter />
    </ProviderStore>
  )
}
