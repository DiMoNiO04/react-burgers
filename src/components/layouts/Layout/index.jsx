import { Outlet, useLocation } from 'react-router'

import { URLS } from '../../../utils/urls'
import { BtnScroll } from '../../ui'
import { Header } from '../Header'
import { Wrapper } from '../Wrapper'

export const Layout = () => {
  const { pathname } = useLocation()

  const isViewContent = pathname === URLS.MAIN || pathname.startsWith(URLS.SINGLE_BURGER)

  return (
    <Wrapper>
      <Header isViewContent={isViewContent} />
      <main>
        <Outlet />
        <BtnScroll />
      </main>
    </Wrapper>
  )
}
