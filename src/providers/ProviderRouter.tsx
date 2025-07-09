import { BrowserRouter, Route, Routes } from 'react-router'

import { Layout } from '@/components/layouts'
import { BurgerSinglePage, CartPage, MainPage, NotFoundPage } from '@/pages'
import { URLS } from '@/utils/urls'

export const ProviderRouter = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path={URLS.MAIN} element={<Layout />}>
          <Route index element={<MainPage />} />
          <Route path={URLS.CART.slice(1)} element={<CartPage />} />
          <Route path={`${URLS.SINGLE_BURGER}:id`} element={<BurgerSinglePage />} />
          <Route path="*" element={<NotFoundPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}
