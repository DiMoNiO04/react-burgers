import { BtnScroll } from '../../ui'
import { Header } from '../Header'
import { Wrapper } from '../Wrapper'

export const Layout = ({ children }) => {
  const isMainPage = !window.location.pathname.slice(1)

  return (
    <Wrapper>
      <Header isMainPage={isMainPage} />
      <main>
        {children}
        <BtnScroll />
      </main>
    </Wrapper>
  )
}
