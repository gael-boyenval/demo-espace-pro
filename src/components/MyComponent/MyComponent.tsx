import React from 'react'

import styles from './MyComponent.scss'

interface IMyComponentProps {

}

const MyComponent = ({}: IMyComponentProps): React.ReactElement => (
  <div className={MyComponent}>
    Hello MyComponent
  </div>
)

export default MyComponent