import { Search } from '../../blocks'
import { HeaderCart, Logo } from '../../ui'
import styles from './styles.module.scss'

interface IHeaderProps {
  isViewContent: boolean
}

export const Header = ({ isViewContent }: IHeaderProps) => {
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
