import { Provider } from 'react-redux'

import { store } from '@/store/store'
import { IChildrenProps } from '@/utils/interfaces'

export const ProviderStore = ({ children }: IChildrenProps) => {
  return <Provider store={store}>{children}</Provider>
}
