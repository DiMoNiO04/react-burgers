import { ReactNode } from 'react'

export interface IFilterOption<T> {
  name: string
  value: T
}

export interface IChildrenProps {
  children: ReactNode
}
