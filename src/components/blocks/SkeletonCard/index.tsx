import React from 'react'
import ContentLoader from 'react-content-loader'

import styles from './styles.module.scss'

export const SkeletonCard = (props) => (
  <div className={styles.block}>
    <ContentLoader viewBox="0 0 300 462" preserveAspectRatio="none" backgroundColor="#f3f3f3" foregroundColor="#fdfcfc" className={styles.card} {...props}>
      <rect x="0" y="12" rx="8" ry="8" width="300" height="230" />
      <rect x="0" y="258" rx="10" ry="10" width="300" height="24" />
      <rect x="0" y="298" rx="10" ry="10" width="300" height="84" />
      <rect x="165" y="400" rx="10" ry="10" width="133" height="44" />
      <rect x="0" y="409" rx="10" ry="10" width="100" height="24" />
    </ContentLoader>
  </div>
)
