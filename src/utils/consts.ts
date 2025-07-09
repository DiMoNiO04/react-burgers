import { BURGER_TYPES } from '../data'

export const CHEESE_TYPE = BURGER_TYPES.find((item) => item.name === 'Острый')?.value
export const PRICE_CHEESE_TYPE = 0.3

export const API_URL_BURGERS = 'https://685bfb8b89952852c2dbc169.mockapi.io/api/burgers'
