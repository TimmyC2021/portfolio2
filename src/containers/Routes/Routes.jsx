import React from 'react'
import { Router, Link } from "@reach/router";

import styles from './Routes.module.scss'

import About from '../About';
import Contact from '../Contact';
import Home from '../Home';
import Navbar from '../Navbar';
import Notfound from '../Notfound';
import Projects from '../Projects';
import Skills from '../Skills';

const Routes = () => {
  return (
    <div>
      <section className={styles.navbar} >
        <Navbar />
      </section>
      <Router>
        <About path='about' />
        <Contact path='contact' />
        <Home path='/'/>
        <Notfound default />
        <Projects path='projects' />
        <Skills path='skills' />
      </Router>
    </div>
  )
}

export default Routes
