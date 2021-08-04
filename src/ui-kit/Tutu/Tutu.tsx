import React from 'react'

import styles from './Tutu.scss'

interface ITutuProps {

}

const Tutu = ({}: ITutuProps): React.ReactElement => (
  <div className={styles.Tutu}>
    Hello Tutu
  </div>
)

export default Tutu