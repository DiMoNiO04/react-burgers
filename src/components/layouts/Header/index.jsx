import { Search } from '../../blocks'
import { HeaderCart, Logo } from '../../ui'
import styles from './styles.module.scss'

export const Header = ({ isMainPage }) => {
  return (
    <header className={styles.header}>
      <Logo />
      {isMainPage && (
        <>
          <Search />
          <HeaderCart />
        </>
      )}
    </header>
  )
}
