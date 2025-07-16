import { IFilterOption, ISize } from '@/utils/interfaces'

export interface IBurgerCart {
  id: string
  imageUrl: string
  title: string
  count: number
  size: ISize
  type: IFilterOption<number>
}

export interface ICartSliceState {
  totalPrice: number
  totalCount: number
  burgers: IBurgerCart[]
}

export interface IChangeBurgerCountPayload {
  id: string
  sizeId: number
  typeValue: number
  delta: number
}

export interface IRemoveBurgerPayload {
  id: string
  sizeId: number
  typeValue: number
}
