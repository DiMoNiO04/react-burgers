import { BURGER_TYPES } from '../data'

export const CHEESE_TYPE = BURGER_TYPES.find((item) => item.name === 'Сырный')?.value
export const PRICE_CHEESE_TYPE = 0.5
