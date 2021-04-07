import React from 'react';
import styles from './Notfound.module.scss';

const Notfound = () => {
  return (
    <div>
      <div className={styles.heroImage}>
        <div className={styles.navbarSpacer}></div>
          <div className={`${styles.vertical_center} ${styles.homePage}`}>
            <h2 className={styles.aboutTitle}>NOT FOUND 404</h2>
          </div>
      </div>
    </div>
  )
}

export default Notfound
