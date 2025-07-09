import styles from './styles.module.scss'

export const Wrapper = ({ children }) => {
  return <div className={styles.container}>{children}</div>
}
