import { BrowserRouter, Route, Routes } from 'react-router'

import { Layout } from '@/components/layouts'
import { BurgerSinglePage, CartPage, MainPage, NotFoundPage } from '@/pages'
import { EUrls } from '@/utils/enums'

export const ProviderRouter = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path={EUrls.MAIN} element={<Layout />}>
          <Route index element={<MainPage />} />
          <Route path={EUrls.CART.slice(1)} element={<CartPage />} />
          <Route path={`${EUrls.SINGLE_BURGER}:id`} element={<BurgerSinglePage />} />
          <Route path="*" element={<NotFoundPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}
