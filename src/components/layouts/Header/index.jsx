import { Search } from '../../blocks'
import { HeaderCart, Logo } from '../../ui'
import styles from './styles.module.scss'

export const Header = () => {
  return (
    <header className={styles.header}>
      <Logo />
      <Search />
      <HeaderCart />
    </header>
  )
}
