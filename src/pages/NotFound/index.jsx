import { Link } from 'react-router'

import { Layout } from '../../components/layouts'
import { BtnBack, Title } from '../../components/ui'
import { URLS } from '../../utils/urls'
import styles from './styles.module.scss'

export const NotFoundPage = () => {
  return (
    <Layout>
      <div className={styles.content}>
        <div className={styles.notFound}>😕 404</div>
        <Title title={'Ничего не найдено'} />
        <p className={styles.desc}>К сожалению данная страница отсутствует в нашем интернет-магазине</p>
        <div className={styles.btns}>
          <BtnBack />
          <Link href={URLS.MAIN} className={styles.btn}>
            На главную
          </Link>
        </div>
      </div>
    </Layout>
  )
}
