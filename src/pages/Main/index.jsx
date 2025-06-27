import { useContext, useEffect, useState } from 'react'

import { Card, Categories, Pagination, SkeletonCard, Sort } from '../../components/blocks'
import { Layout } from '../../components/layouts'
import { Title } from '../../components/ui'
import { ContextCategory, ContextPagination, ContextSearch, ContextSort } from '../../context'
import { API_URL_BURGERS } from '../../utils/consts'
import styles from './styles.module.scss'

export const MainPage = () => {
  const [burgers, setBurgers] = useState([])
  const [isLoading, setIsLoading] = useState(true)

  const { search } = useContext(ContextSearch)
  const { sort } = useContext(ContextSort)
  const { category } = useContext(ContextCategory)
  const { page } = useContext(ContextPagination)

  useEffect(() => {
    setIsLoading(true)

    const categoryValue = category > 0 ? `&category=${category}` : ''
    const sortByValue = sort.value.replace('-', '')
    const sortOrderByValue = sort.value.includes('-') ? 'asc' : 'desc'
    const searchValue = search ? `&search=${search}` : ''

    fetch(`${API_URL_BURGERS}?limit=8&page=${page}${categoryValue}&sortBy=${sortByValue}&order=${sortOrderByValue}${searchValue}`)
      .then((res) => res.json())
      .then((data) => {
        setBurgers(data)
        setIsLoading(false)
      })

    window.scrollTo(0, 0)
  }, [category, sort, search, page])

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
