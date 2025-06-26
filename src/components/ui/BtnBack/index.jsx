import { useNavigate } from 'react-router'

import styles from './styles.module.scss'

export const BtnBack = () => {
  const navigate = useNavigate()

  const handleGoBack = () => navigate(-1)

  return (
    <button type="button" onClick={handleGoBack} className={styles.btn}>
      Вернуться назад
    </button>
  )
}
