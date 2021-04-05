import React, { useState } from 'react';
import styles from './MenuButton.module.scss';

const MenuButton = () => {

const [menuState, setMenuState] = useState(true);
const [menuClass, setMenuClass] = useState({{styles.container}});


  const toggleMenu = (x) => {
    console.log('toggleMenu');
    setMenuState(!menuState);
    menuState ? setMenuClass(`${styles.container} ${styles.change}`) : setMenuClass(`${styles.container}`);
    console.log(menuState);
    // x.classList.toggle('change');
    // return `${styles.container} ${styles.change}`
  }

  return (
    <div className={styles.container} onClick={toggleMenu}>
      <div className={styles.bar1}></div>
      <div className={styles.bar2}></div>
      <div className={styles.bar3}></div>
    </div>
  )
}

export default MenuButton
