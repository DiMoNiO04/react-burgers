import { EStatus } from '@/utils/enums'
import { ISize } from '@/utils/interfaces'

export interface IBurger {
  id: string
  imageUrl: string
  title: string
  types: number[]
  sizes: ISize[]
}

export interface IBurgersSliceState {
  burgers: IBurger[]
  status: EStatus
}

export interface IFetchBurgersProps {
  apiUrl: string
}
