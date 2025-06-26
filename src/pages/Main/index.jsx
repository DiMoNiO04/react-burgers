import { useEffect, useState } from 'react'

import { Card, Categories, SkeletonCard, Sort } from '../../components/blocks'
import { Header, Wrapper } from '../../components/layouts'
import { Title } from '../../components/ui'
import { API_URL_BURGERS } from '../../utils/consts'
import styles from './styles.module.scss'

export const MainPage = () => {
  const [burgers, setBurgers] = useState([])
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    fetch(API_URL_BURGERS)
      .then((res) => res.json())
      .then((data) => {
        setBurgers(data)
        setIsLoading(false)
      })
  }, [])

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
          {isLoading ? [...new Array(8)].map((_, index) => <SkeletonCard key={index} />) : burgers.map((burger) => <Card key={burger.id} {...burger} />)}
        </div>
      </main>
    </Wrapper>
  )
}
