import { Search } from '@/components/blocks'
import { HeaderCart, Logo } from '@/components/ui'

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
