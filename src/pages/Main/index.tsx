import qs from 'qs'
import { useEffect, useRef } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router'

import { ICardProps } from '@/components/blocks/Card'

import { Card, Categories, ErrorContent, Pagination, SkeletonCard, Sort } from '../../components/blocks'
import { Title } from '../../components/ui'
import { SORT_OPTIONS } from '../../data'
import { fetchBurgers, selectBurgers } from '../../store/burgers/slice'
import { initialStateFilter, selectFilter, setFilters } from '../../store/filter/slice'
import { API_URL_BURGERS } from '../../utils/consts'
import styles from './styles.module.scss'

export const MainPage = () => {
  const dispatch = useDispatch()
  const navigate = useNavigate()

  const isSearch = useRef<boolean>(false)
  const isMounted = useRef<boolean>(false)

  const { burgers, status } = useSelector((state) => selectBurgers(state))
  const { category, sort, currentPage, search } = useSelector((state) => selectFilter(state))

  const getBurgers = async () => {
    const categoryValue: string = category > 0 ? `&category=${category}` : ''
    const sortByValue: string = sort.value.replace('-', '')
    const sortOrderByValue: string = sort.value.includes('-') ? 'asc' : 'desc'
    const searchValue: string = search ? `&search=${search}` : ''

    const apiUrl: string = `${API_URL_BURGERS}?limit=8&page=${currentPage}${categoryValue}&sortBy=${sortByValue}&order=${sortOrderByValue}${searchValue}`

    dispatch(fetchBurgers({ apiUrl }))
  }

  useEffect(() => {
    if (window.location.search) {
      const params = qs.parse(window.location.search.substring(1)) as {
        sort?: string
        category?: string
        page?: string
        search?: string
      }

      const sortOption = SORT_OPTIONS.find((item) => item.value === params.sort) ?? SORT_OPTIONS[0]

      dispatch(
        setFilters({
          category: Number(params.category) || 0,
          sort: sortOption,
          currentPage: Number(params.page) || 1,
          search: params.search || '',
        }),
      )

      isSearch.current = true
    }
  }, [dispatch])

  useEffect(() => {
    if (isMounted.current) {
      const query: Record<string, string | number> = {}

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
      getBurgers()
    }

    isSearch.current = false
  }, [category, sort, currentPage, search])

  const skeletonBurgers = [...new Array(8)].map((_, index) => <SkeletonCard key={index} />)
  const burgerCards = burgers.map((burger: ICardProps) => <Card key={burger.id} {...burger} />)

  return (
    <>
      {status === 'error' ? (
        <ErrorContent />
      ) : (
        <>
          <div className={styles.filter}>
            <Categories />
            <Sort />
          </div>
          <Title title="Все бургеры" />
          <div className={styles.cards}>{status === 'loading' ? skeletonBurgers : burgerCards}</div>
          <Pagination />
        </>
      )}
    </>
  )
}
