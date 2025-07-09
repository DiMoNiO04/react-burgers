import { BURGER_TYPES } from '../data'

export const CHEESE_TYPE: number | undefined = BURGER_TYPES.find((item) => item.name === 'Острый')?.value
export const PRICE_CHEESE_TYPE: number = 0.3

export const API_URL_BURGERS: string = 'https://685bfb8b89952852c2dbc169.mockapi.io/api/burgers'
