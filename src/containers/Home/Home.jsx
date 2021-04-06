import React from 'react';

import styles from './Home.module.scss';


const home = () => {
  return (
    <div className={styles.heroImage}>
      <div className={styles.navbarSpacer}></div>
      <div className={`${styles.vertical_center} ${styles.homePage}`}>
        <h2>TimmyC</h2>
        <h3>Tim Carr</h3>
        <h3>junior software developer</h3>
      </div>
    </div>
  )
}

export default home
