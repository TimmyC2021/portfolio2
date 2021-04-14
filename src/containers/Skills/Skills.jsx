import React from 'react'
import styles from './Skills.module.scss';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope, faFilePdf } from '@fortawesome/free-solid-svg-icons';
import { faHtml5, faJsSquare, faSass, faReact, faNode, faAngular, faGithub } from '@fortawesome/free-brands-svg-icons'

import logoXero from '../../assets/images/xero-logo-blue.svg';
// import logoTypeScript from 'https://upload.wikimedia.org/wikipedia/commons/4/4c/Typescript_logo_2020.svg';

const faHtml5Element = <FontAwesomeIcon icon={faHtml5} />
const faJsElement = <FontAwesomeIcon icon={faJsSquare} />
const faReactElement = <FontAwesomeIcon icon={faReact} />
const faSassElement = <FontAwesomeIcon icon={faSass} />
const faNodeElement = <FontAwesomeIcon icon={faNode} />
const faAngularElement = <FontAwesomeIcon icon={faAngular} />
const faGithubElement = <FontAwesomeIcon icon={faGithub} />


const skills = () => {
  return (
    <div className={styles.heroImage}>
      <div className={styles.navbarSpacer}></div>
        <div className={`${styles.vertical_center} ${styles.skillsPage}`}>
          <h2>Skills</h2>
        <div className={styles.skillsGrid}>
          
          <div className={styles.skill}>
            HTML5 
            <br/>
            <span className={styles.icon}>
              {faHtml5Element}
            </span>
          </div>

          <div className={styles.skill}>
            JavaScript 
            <br/>
            <span className={styles.icon}>
              {faJsElement}
            </span>
          </div>

          <div className={styles.skill}>
            Xero 
            <br/>
            <span className={styles.icon}>
              <img src= {logoXero} alt="Xero logo"/>
            </span>
          </div>

          <div className={styles.skill}>
            SASS 
            <br/>
            <span className={styles.icon}>
              {faSassElement}
            </span>
          </div>
          
          <div className={styles.skill}>
          React
            <br/>
            <span className={styles.icon}>
              {faReactElement}
            </span>
          </div>
          
          <div className={styles.skill}>
          Node js
            <br/>
            <span className={styles.icon}>
              {faNodeElement}
            </span>
          </div>

          <div className={styles.skill}>
          TypeScript
            <br/>
            <span className={styles.icon}>
            {/* <img src={logoTypeScript} alt="TypeScript logo"/> */}
            </span>
          </div>
          
          <div className={styles.skill}>
          Angular
            <br/>
            <span className={styles.icon}>
              {faAngularElement}
            </span>
          </div>

          
          <div className={styles.skill}>
          Github
            <br/>
            <span className={styles.icon}>
              {faGithubElement}
            </span>
          </div>

          <div className={styles.skill}>
          Testing with Jest and Cypress
            <br/>
            <span className={styles.icon}>
              {/* {faGithubElement} */}
            </span>
          </div>

          <div className={styles.skill}>
          Sage
            <br/>
            <span className={styles.icon}>
              {/* {faGithubElement} */}
            </span>
          </div>

          <div className={styles.skill}>
          Quickbooks
            <br/>
            <span className={styles.icon}>
              {/* {faGithubElement} */}
            </span>
          </div>

        </div>
      </div>
    </div>
  )
}

export default skills
