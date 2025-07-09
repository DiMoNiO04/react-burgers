import { Search } from '../../blocks'
import { HeaderCart, Logo } from '../../ui'
import styles from './styles.module.scss'

export const Header = ({ isViewContent }) => {
  return (
    <header className={styles.header}>
      <Logo />
      {isViewContent && (
        <>
          <Search />
          <HeaderCart />
        </>
      )}
    </header>
  )
}
