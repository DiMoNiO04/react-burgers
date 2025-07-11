import { Outlet, useLocation } from 'react-router'

import { BtnScroll } from '@/components/ui'
import { URLS } from '@/utils/urls'

import { Header } from '../Header'
import { Wrapper } from '../Wrapper'

export const Layout = () => {
  const { pathname } = useLocation()

  const isViewContent: boolean = pathname === URLS.MAIN || pathname.startsWith(URLS.SINGLE_BURGER)

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
