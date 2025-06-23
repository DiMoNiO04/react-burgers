import { Categories } from '../../blocks'
import { Header, Wrapper } from '../../layouts'
import { Sort, Title } from '../../ui'
import styles from './styles.module.scss'

export const MainPageContent = () => {
  return (
    <Wrapper>
      <Header />
      <main>
        <div className={styles.filter}>
          <Categories />
          <Sort />
        </div>
        <Title title={'Все пиццы'} />
      </main>
    </Wrapper>
  )
}
