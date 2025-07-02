import axios from 'axios'
import qs from 'qs'
import { useEffect, useRef, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router'

import { Card, Categories, Pagination, SkeletonCard, Sort } from '../../components/blocks'
import { Layout } from '../../components/layouts'
import { Title } from '../../components/ui'
import { SORT_OPTIONS } from '../../data'
import { initialStateFilter, setFilters } from '../../store/filter/slice'
import { API_URL_BURGERS } from '../../utils/consts'
import styles from './styles.module.scss'

export const MainPage = () => {
  const dispatch = useDispatch()
  const navigate = useNavigate()

  const isSearch = useRef(false)
  const isMounted = useRef(false)

  const [burgers, setBurgers] = useState([])
  const [isLoading, setIsLoading] = useState(true)

  const { category, sort, currentPage, search } = useSelector((state) => state.filter)

  const fetchBurgers = () => {
    setIsLoading(true)

    const categoryValue = category > 0 ? `&category=${category}` : ''
    const sortByValue = sort.value.replace('-', '')
    const sortOrderByValue = sort.value.includes('-') ? 'asc' : 'desc'
    const searchValue = search ? `&search=${search}` : ''

    axios.get(`${API_URL_BURGERS}?limit=8&page=${currentPage}${categoryValue}&sortBy=${sortByValue}&order=${sortOrderByValue}${searchValue}`).then((res) => {
      setBurgers(res.data)
      setIsLoading(false)
    })
  }

  useEffect(() => {
    if (window.location.search) {
      const params = qs.parse(window.location.search.substring(1))

      const sortOption = SORT_OPTIONS.find((item) => item.value === params.sort)

      dispatch(
        setFilters({
          category: Number(params.category) || 0,
          sort: sortOption || SORT_OPTIONS[0],
          currentPage: Number(params.page) || 1,
          search: params.search || '',
        }),
      )

      isSearch.current = true
    }
  }, [dispatch])

  useEffect(() => {
    if (isMounted.current) {
      const query = {}

      if (sort.value !== initialStateFilter.sort.value) {
        query.sort = sort.value
      }
      if (category !== initialStateFilter.category) {
        query.category = category
      }
      if (currentPage !== initialStateFilter.currentPage) {
        query.page = currentPage
      }
      if (search !== initialStateFilter.search) {
        query.search = search
      }

      const queryString = qs.stringify(query)
      navigate(queryString ? `?${queryString}` : '')
    }
    isMounted.current = true
  }, [category, sort, currentPage, search, navigate])

  useEffect(() => {
    window.scrollTo(0, 0)

    if (!isSearch.current) {
      fetchBurgers()
    }

    isSearch.current = false
  }, [category, sort, currentPage, search])

  const skeletonBurgers = [...new Array(8)].map((_, index) => <SkeletonCard key={index} />)
  const burgerCards = burgers.map((burger) => <Card key={burger.id} {...burger} />)

  return (
    <Layout>
      <div className={styles.filter}>
        <Categories />
        <Sort />
      </div>
      <Title title="Все бургеры" />
      <div className={styles.cards}>{isLoading ? skeletonBurgers : burgerCards}</div>
      <Pagination />
    </Layout>
  )
}
