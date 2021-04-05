import React from 'react';
import classNames from 'classnames/bind';

import styles from './Home.module.scss';

const stylesCombined = () => {
  let res;
  res = classNames.bind(styles);
  console.log(res);
  // return styles.homePage
}

const home = () => {
  return (
    <div className={styles.heroImage}>
      <div className={styles.navbarSpacer}></div>
      <div className={stylesCombined}>
        <h2>Tim Carr</h2>
        <h3>TimmyC</h3>
        <h4>junior software developer</h4>
      </div>
    </div>
  )
}

export default home
