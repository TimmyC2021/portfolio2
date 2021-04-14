import React from 'react'
import { Router, Link } from "@reach/router";
import MenuButton from '../MenuButton';

import styles from './Navbar.module.scss';


const Navbar = () => {
  return (
      <div>
        {/* <span className={styles.menuButton}><MenuButton /></span> */}
        <div className={styles.navbar}>
            <Link to=''><MenuButton /></Link>
            <Link to='/'>Home</Link>
            <Link to='projects'>Projects</Link>
            <Link to='skills'>Skills</Link>
            <Link to='about'>About</Link>
            <Link to='contact'>Contact</Link>
            </div>
      </div>
    )
}

export default Navbar
