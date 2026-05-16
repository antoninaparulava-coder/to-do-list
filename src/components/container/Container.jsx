import React from 'react'
import styles from "./Container.module.css"

function Container({children, flex, flexcol}) {
  return (
  <div className={flex? styles.flexContainer : flexcol? styles.flexColContainer : styles.container}>
    {children}
  </div>
  )
}

export default Container