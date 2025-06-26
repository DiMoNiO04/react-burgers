import clsx from 'clsx'
import { useState } from 'react'

import { BURGER_SIZES, BURGER_TYPES } from '../../../data/filters'
import { CHEESE_TYPE, PRICE_CHEESE_TYPE } from '../../../utils/consts'
import { AddButton } from '../../ui'
import styles from './styles.module.scss'

export const Card = ({ imageUrl, title, sizes, types }) => {
  const [count, setCount] = useState(0)
  const [burgerType, setBurgerType] = useState(types[0] || 0)
  const [burgerSize, setBurgerSize] = useState(sizes[0].id || 0)

  const handleCountChange = () => setCount((prev) => prev + 1)
  const handleBurgerTypeChange = (value) => setBurgerType(value)
  const handleBurgerSizeChange = (value) => setBurgerSize(value)

  const basePrice = sizes.find((size) => size.id === burgerSize)?.price || 0
  const price = burgerType === CHEESE_TYPE ? Number((basePrice + PRICE_CHEESE_TYPE).toFixed(2)) : Number(basePrice.toFixed(2))

  return (
    <div className={styles.block}>
      <img className={styles.image} src={imageUrl} alt="" />
      <h3 className={styles.title}>{title}</h3>
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
        <AddButton count={count} onClick={handleCountChange} />
      </div>
    </div>
  )
}
