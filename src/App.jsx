import { Categories } from './components/blocks'
import { Header, Wrapper } from './components/layouts'

export const App = () => {
  return (
    <Wrapper>
      <Header />
      <main>
        <Categories />
      </main>
    </Wrapper>
  )
}
