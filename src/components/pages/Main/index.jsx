import { useEffect, useState } from 'react'

import { API_URL_BURGERS } from '../../../utils/consts'
import { Card, Categories, Sort } from '../../blocks'
import { Header, Wrapper } from '../../layouts'
import { Title } from '../../ui'
import styles from './styles.module.scss'

export const MainPageContent = () => {
  const [burgers, setBurgers] = useState([])

  useEffect(() => {
    fetch(API_URL_BURGERS)
      .then((res) => res.json())
      .then((data) => setBurgers(data))
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
          {burgers.map((burger) => (
            <Card key={burger.id} {...burger} />
          ))}
        </div>
      </main>
    </Wrapper>
  )
}
