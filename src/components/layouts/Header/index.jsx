import { HeaderCart, Logo } from '../../ui'
import styles from './styles.module.scss'

export const Header = () => {
  return (
    <header className={styles.header}>
      <div className={styles.container}>
        <Logo />
        <HeaderCart />
      </div>
    </header>
  )
}
