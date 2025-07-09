export const URLS = {
  MAIN: '/',
  CART: '/cart/',
  SINGLE_BURGER: '/burgers/',
  NOT_FOUND: '*',
}

export type URLS = (typeof URLS)[keyof typeof URLS]
