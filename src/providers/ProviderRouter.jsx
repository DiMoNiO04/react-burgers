import { BrowserRouter, Route, Routes } from 'react-router'

import { CartPage, MainPage } from '../pages'
import { URLS } from '../utils/urls'

export const ProviderRouter = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path={URLS.MAIN} element={<MainPage />} index />
        <Route path={URLS.CART} element={<CartPage />} />
      </Routes>
    </BrowserRouter>
  )
}
