import { useEffect } from 'react'
import { useParams } from 'react-router'

import { Card, ErrorContent, SkeletonCard } from '@/components/blocks'
import { Title } from '@/components/ui'
import { fetchSingleBurger, selectSingleBurger } from '@/store/singleBurger/slice'
import { useAppDispatch, useAppSelector } from '@/store/store'

import styles from './styles.module.scss'

export const BurgerSinglePage = () => {
  const dispatch = useAppDispatch()
  const { id } = useParams()
  const { burger, status } = useAppSelector(selectSingleBurger)

  useEffect(() => {
    if (id) {
      dispatch(fetchSingleBurger({ id }))
    }
  }, [id])

  return (
    <>
      {status === 'error' ? (
        <ErrorContent />
      ) : burger ? (
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
      ) : null}
    </>
  )
}
