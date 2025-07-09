import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useParams } from 'react-router'

import { Card, ErrorContent, SkeletonCard } from '../../components/blocks'
import { Title } from '../../components/ui'
import { fetchSingleBurger, selectSingleBurger } from '../../store/singleBurger/slice'
import styles from './styles.module.scss'

export const BurgerSinglePage = () => {
  const dispatch = useDispatch()
  const { id } = useParams()
  const { burger, status } = useSelector(selectSingleBurger)

  useEffect(() => {
    if (id) {
      dispatch(fetchSingleBurger({ id }))
    }
  }, [id])

  return (
    <>
      {status === 'error' ? (
        <ErrorContent />
      ) : (
        <div>
          <Title title={burger?.title} />
          {status === 'loading' ? (
            <SkeletonCard />
          ) : (
            <div className={styles.content}>
              <Card {...burger} />
            </div>
          )}
        </div>
      )}
    </>
  )
}
