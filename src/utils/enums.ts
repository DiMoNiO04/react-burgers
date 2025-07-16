export const EStatus = {
  LOADING: 'loading',
  SUCCESS: 'success',
  ERROR: 'error',
}

export type EStatus = (typeof EStatus)[keyof typeof EStatus]

export const EUrls = {
  MAIN: '/',
  CART: '/cart/',
  SINGLE_BURGER: '/burgers/',
  NOT_FOUND: '*',
}

export type EUrls = (typeof EUrls)[keyof typeof EUrls]
