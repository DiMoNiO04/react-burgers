import { BtnScroll } from '../../ui'
import { Header } from '../Header'
import { Wrapper } from '../Wrapper'

export const Layout = ({ children, searchValue, setSearchValue }) => {
  const isMainPage = !window.location.pathname.slice(1)

  return (
    <Wrapper>
      <Header isMainPage={isMainPage} searchValue={searchValue} setSearchValue={setSearchValue} />
      <main>
        {children}
        <BtnScroll />
      </main>
    </Wrapper>
  )
}
