import { useState } from 'react'

import { IconCart, IconCartClear } from '@/components/icons'
import { ConfirmModal, Title } from '@/components/ui'
import { clearCart } from '@/store/cart/slice'
import { useAppDispatch } from '@/store/store'

import styles from './styles.module.scss'

export const CartHeader = () => {
  const dispatch = useAppDispatch()

  const [openConfirmModalClear, setOpenConfirmModalClear] = useState<boolean>(false)

  const handleOpenModal = () => setOpenConfirmModalClear(true)
  const handleCloseModal = () => setOpenConfirmModalClear(false)
  const handleClearCart = () => {
    dispatch(clearCart())
    handleCloseModal()
  }

  return (
    <div className={styles.block}>
      <div className={styles.title}>
        <IconCart width={32} height={32} color="#000000" />
        <Title title="Корзина" />
      </div>
      <button type="button" className={styles.btnClear} onClick={handleOpenModal}>
        <IconCartClear />
        <span>Очистить корзину</span>
      </button>

      <ConfirmModal isOpen={openConfirmModalClear} title="Очистить корзину?" onCancel={handleCloseModal} onConfirm={handleClearCart} />
    </div>
  )
}
