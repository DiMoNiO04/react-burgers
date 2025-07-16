import clsx from 'clsx'
import { useState } from 'react'
import { Link } from 'react-router'

import { AddButton } from '@/components/ui'
import { BURGER_SIZES, BURGER_TYPES } from '@/data'
import { IBurger } from '@/store/burgers/types'
import { addBurgerCart, selectCardCart } from '@/store/cart/slice'
import { IBurgerCart } from '@/store/cart/types'
import { useAppDispatch, useAppSelector } from '@/store/store'
import { CHEESE_TYPE, PRICE_CHEESE_TYPE } from '@/utils/consts'
import { EUrls } from '@/utils/enums'

import styles from './styles.module.scss'

export const Card = ({ id, imageUrl, title, sizes, types }: IBurger) => {
  const dispatch = useAppDispatch()

  const count = useAppSelector(selectCardCart(id))

  const [burgerType, setBurgerType] = useState<number>(types[0] || 0)
  const [burgerSize, setBurgerSize] = useState<number>(sizes[0].id || 0)

  const handleBurgerTypeChange = (value: number) => setBurgerType(value)
  const handleBurgerSizeChange = (value: number) => setBurgerSize(value)

  const basePrice: number = sizes.find((size) => size.id === burgerSize)?.price || 0
  const price: number = burgerType === CHEESE_TYPE ? Number((basePrice + PRICE_CHEESE_TYPE).toFixed(2)) : Number(basePrice.toFixed(2))

  const onAddBurgerCart = () => {
    const burgerCart = {
      id,
      imageUrl,
      title,
      type: BURGER_TYPES.find((t) => t.value === burgerType),
      size: sizes.find((s) => s.id === burgerSize),
    }

    dispatch(addBurgerCart(burgerCart as IBurgerCart))
  }

  return (
    <div className={styles.block}>
      <Link to={`${EUrls.SINGLE_BURGER}${id}`}>
        <img className={styles.image} src={imageUrl} alt="" />
        <h3 className={styles.title}>{title}</h3>
      </Link>
      <div className={styles.selector}>
        <ul className={styles.selectorList}>
          {BURGER_TYPES.filter(({ value }) => types.includes(value)).map(({ value, name }) => (
            <li key={value} className={clsx(styles.selectorItem, burgerType === value && styles.selectorItemActive)} onClick={() => handleBurgerTypeChange(value)}>
              {name}
            </li>
          ))}
        </ul>
        <ul className={clsx(styles.selectorList, styles.selectorListSizes)}>
          {BURGER_SIZES.map(({ name, value }) => (
            <li key={value} className={clsx(styles.selectorItem, burgerSize === value && styles.selectorItemActive)} onClick={() => handleBurgerSizeChange(value)}>
              {name}
            </li>
          ))}
        </ul>
      </div>
      <div className={styles.bottom}>
        <div className={styles.price}>{price} BYN</div>
        <AddButton count={count} onClick={onAddBurgerCart} />
      </div>
    </div>
  )
}
