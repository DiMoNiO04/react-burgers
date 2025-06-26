import { Header } from '../Header'
import { Wrapper } from '../Wrapper'

export const Layout = ({ children }) => {
  return (
    <Wrapper>
      <Header />
      <main>{children}</main>
    </Wrapper>
  )
}
