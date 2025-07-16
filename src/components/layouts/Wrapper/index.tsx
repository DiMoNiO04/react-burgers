import { IChildrenProps } from '@/utils/interfaces'

import styles from './styles.module.scss'

export const Wrapper = ({ children }: IChildrenProps) => {
  return <div className={styles.container}>{children}</div>
}
