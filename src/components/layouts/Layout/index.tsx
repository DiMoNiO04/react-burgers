import { Outlet, useLocation } from 'react-router'

import { BtnScroll } from '@/components/ui'
import { EUrls } from '@/utils/enums'

import { Header } from '../Header'
import { Wrapper } from '../Wrapper'

export const Layout = () => {
  const { pathname } = useLocation()

  const isViewContent: boolean = pathname === EUrls.MAIN || pathname.startsWith(EUrls.SINGLE_BURGER)

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
