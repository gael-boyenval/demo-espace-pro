import React from 'react'

import styles from './MyComponent.scss'

interface IMyComponentProps {

}

const MyComponent = ({}: IMyComponentProps): React.ReactElement => (
  <div className={styles.MyComponent}>
    Hello MyComponent
  </div>
)

export default MyComponent