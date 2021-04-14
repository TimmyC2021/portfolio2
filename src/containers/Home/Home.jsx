import React from 'react';

import styles from './Home.module.scss';


const home = () => {
  return (
    <div className={styles.heroImage}>
      <div className={styles.navbarSpacer}></div>
      <div className={`${styles.vertical_center} ${styles.homePage}`}>
        <h1>Tim Carr</h1>
        <h2>junior software developer</h2>
      </div>
    </div>
  )
}

export default home
