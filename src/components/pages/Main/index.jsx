import { Card, Categories, Sort } from '../../blocks'
import { Header, Wrapper } from '../../layouts'
import { Title } from '../../ui'
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
        <div className={styles.cards}>
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
        </div>
      </main>
    </Wrapper>
  )
}
