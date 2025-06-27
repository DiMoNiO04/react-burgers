import { useContext, useEffect, useState } from 'react'

import { Card, Categories, Pagination, SkeletonCard, Sort } from '../../components/blocks'
import { Layout } from '../../components/layouts'
import { Title } from '../../components/ui'
import { SearchContext } from '../../context/SearchContext'
import { SORT_OPTIONS } from '../../data'
import { ProviderSearch } from '../../providers'
import { API_URL_BURGERS } from '../../utils/consts'
import styles from './styles.module.scss'

export const MainPage = () => {
  const [burgers, setBurgers] = useState([])
  const [isLoading, setIsLoading] = useState(true)

  const [category, setCategory] = useState(0)
  const [sort, setSort] = useState(SORT_OPTIONS[0])
  const [currentPage, setCurrentPage] = useState(1)
  const { search } = useContext(SearchContext)

  const handleChangeCategory = (value) => {
    setCurrentPage(1)
    setCategory(value)
  }
  const handleChangeSort = (value) => {
    setCurrentPage(1)
    setSort(value)
  }
  const handleChangeCurrentPage = (event) => setCurrentPage(event.selected + 1)

  useEffect(() => {
    setIsLoading(true)

    const categoryValue = category > 0 ? `&category=${category}` : ''
    const sortByValue = sort.value.replace('-', '')
    const sortOrderByValue = sort.value.includes('-') ? 'asc' : 'desc'
    const searchValue = search ? `&search=${search}` : ''

    fetch(`${API_URL_BURGERS}?limit=8&page=${currentPage}${categoryValue}&sortBy=${sortByValue}&order=${sortOrderByValue}${searchValue}`)
      .then((res) => res.json())
      .then((data) => {
        setBurgers(data)
        setIsLoading(false)
      })

    window.scrollTo(0, 0)
  }, [category, sort, search, currentPage])

  const skeletonPizzas = [...new Array(8)].map((_, index) => <SkeletonCard key={index} />)
  const burgerCards = burgers.map((burger) => <Card key={burger.id} {...burger} />)

  return (
    <Layout>
      <div className={styles.filter}>
        <Categories valueCategory={category} onChangeCategory={handleChangeCategory} />
        <Sort valueSort={sort} onChangeSort={handleChangeSort} />
      </div>
      <Title title={'Все пиццы'} />
      <div className={styles.cards}>{isLoading ? skeletonPizzas : burgerCards}</div>
      <Pagination currentPage={currentPage} onChangePage={handleChangeCurrentPage} />
    </Layout>
  )
}
