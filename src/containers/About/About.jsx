import React from 'react';
import styles from './About.module.scss';

const About = () => {
  return (
    <div className={styles.heroImage}>
      <div className={styles.navbarSpacer}></div>
      <div className={`${styles.vertical_center} ${styles.homePage}`}>
        <h2 className={styles.aboutTitle}>About me:</h2>
        <p>My name is Tim and I have lived and worked in Bristol since leaving university here.</p>
        <p>Most of this time I worked for an accountancy firm here in the local area. 
          My job roles within that firm included:</p>
          <ul>
            <li>Accountant</li>
            <li>IT Manager</li>
            <li>Practice Manager</li>
          </ul>
          <p>
            The move to IT Manager was inevitable despite no formal training. I had a knack (persistance) 
            to study things until I could make them work. This meant that for several years I had free reign to
            explore and learn many aspects of technology.
          </p>
          <p>
            Outside of work I have been known to do the odd bit of running. A love/hate relationship! I like the 
            social side of it plus it justifies being able to eat and drink more. I don't enjoy the actual 
            running part so much, especially if it involves getting my feet wet.
          </p>
      </div>
    </div>
  )
}

export default About;
