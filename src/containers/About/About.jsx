import React from 'react';
import styles from './About.module.scss';

const About = () => {
  return (
    <div className={styles.heroImage}>
      <div className={styles.navbarSpacer}></div>
      <div className={`${styles.vertical_center} ${styles.homePage}`}>
        <h2 className={styles.aboutTitle}>About me:</h2>
        <p>My name is Tim and I have lived and worked all my adult life here in Bristol</p>
        <p>Most of this time I worked for an accountancy firm here in the area. 
          My job roles within that firm included:</p>
          <ul>
            <li>Accountant</li>
            <li>IT Manager</li>
            <li>Practice Manager</li>
          </ul>
      </div>
    </div>
  )
}

export default About;
