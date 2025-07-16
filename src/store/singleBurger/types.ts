import { EStatus } from '@/utils/enums'

import { IBurger } from '../burgers/types'

export interface ISingleBurgerSliceState {
  burger: IBurger | null
  status: EStatus
}

export interface IFetchSingleBurgerProps {
  id: string
}
