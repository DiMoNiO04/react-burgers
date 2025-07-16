import { IFilterOption } from '@/utils/interfaces'

export interface IFilterSliceState {
  category: number
  sort: IFilterOption<string>
  currentPage: number
  search: string
}
