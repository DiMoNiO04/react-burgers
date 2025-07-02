import axios from 'axios'
import { useContext, useEffect, useState } from 'react'
import { useSelector } from 'react-redux'

import { Card, Categories, Pagination, SkeletonCard, Sort } from '../../components/blocks'
import { Layout } from '../../components/layouts'
import { Title } from '../../components/ui'
import { API_URL_BURGERS } from '../../utils/consts'
import styles from './styles.module.scss'

export const MainPage = () => {
  const [burgers, setBurgers] = useState([])
  const [isLoading, setIsLoading] = useState(true)

  const { category, sort, currentPage, search } = useSelector((state) => state.filter)

  useEffect(() => {
    setIsLoading(true)

    const categoryValue = category > 0 ? `&category=${category}` : ''
    const sortByValue = sort.value.replace('-', '')
    const sortOrderByValue = sort.value.includes('-') ? 'asc' : 'desc'
    const searchValue = search ? `&search=${search}` : ''

    axios.get(`${API_URL_BURGERS}?limit=8&page=${currentPage}${categoryValue}&sortBy=${sortByValue}&order=${sortOrderByValue}${searchValue}`).then((res) => {
      setBurgers(res.data)
      setIsLoading(false)
    })

    window.scrollTo(0, 0)
  }, [category, sort, search, currentPage])

  const skeletonPizzas = [...new Array(8)].map((_, index) => <SkeletonCard key={index} />)
  const burgerCards = burgers.map((burger) => <Card key={burger.id} {...burger} />)

  return (
    <Layout>
      <div className={styles.filter}>
        <Categories />
        <Sort />
      </div>
      <Title title={'Все пиццы'} />
      <div className={styles.cards}>{isLoading ? skeletonPizzas : burgerCards}</div>
      <Pagination />
    </Layout>
  )
}
