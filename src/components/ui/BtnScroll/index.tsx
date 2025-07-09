import { IconArrowRound } from '../../icons/IconArrowRound'
import styles from './styles.module.scss'

export const BtnScroll = () => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    })
  }

  return (
    <button type="button" onClick={scrollToTop} className={styles.btn}>
      <IconArrowRound />
    </button>
  )
}
