import { useEffect, useState } from 'react'

import { Card, Categories, SkeletonCard, Sort } from '../../components/blocks'
import { Layout } from '../../components/layouts'
import { Title } from '../../components/ui'
import { SORT_OPTIONS } from '../../data'
import { API_URL_BURGERS } from '../../utils/consts'
import styles from './styles.module.scss'

export const MainPage = () => {
  const [burgers, setBurgers] = useState([])
  const [isLoading, setIsLoading] = useState(true)

  const [category, setCategory] = useState(0)
  const [sort, setSort] = useState(SORT_OPTIONS[0])

  const handleChangeCategory = (value) => setCategory(value)
  const handleChangeSort = (value) => setSort(value)

  useEffect(() => {
    setIsLoading(true)

    const categoryValue = category > 0 ? `category=${category}` : ''
    const sortByValue = sort.value.replace('-', '')
    const sortOrderByValue = sort.value.includes('-') ? 'asc' : 'desc'

    fetch(`${API_URL_BURGERS}?${categoryValue}&sortBy=${sortByValue}&order=${sortOrderByValue}`)
      .then((res) => res.json())
      .then((data) => {
        setBurgers(data)
        setIsLoading(false)
      })

    window.scrollTo(0, 0)
  }, [category, sort])

  return (
    <Layout>
      <div className={styles.filter}>
        <Categories valueCategory={category} onChangeCategory={handleChangeCategory} />
        <Sort valueSort={sort} onChangeSort={handleChangeSort} />
      </div>
      <Title title={'Все пиццы'} />
      <div className={styles.cards}>
        {isLoading ? [...new Array(8)].map((_, index) => <SkeletonCard key={index} />) : burgers.map((burger) => <Card key={burger.id} {...burger} />)}
      </div>
    </Layout>
  )
}
