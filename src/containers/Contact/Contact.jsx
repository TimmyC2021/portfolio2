import React from 'react';
import styles from './Contact.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope, faFilePdf } from '@fortawesome/free-solid-svg-icons';
import { faGithubSquare, faLinkedin } from '@fortawesome/free-brands-svg-icons'

const faEnvelopeElement = <FontAwesomeIcon icon={faEnvelope} />
const faGithubSquareElement = <FontAwesomeIcon icon={faGithubSquare} />
const faFilePdfElement = <FontAwesomeIcon icon={faFilePdf} />
const faLinkedinElement = <FontAwesomeIcon icon={faLinkedin} />


const contact = () => {
  return (
    <div>
      <div className={styles.heroImage}>
        <div className={styles.navbarSpacer}></div>
        
        <div className={`${styles.vertical_center} ${styles.homePage}`}>
        <h2 className={styles.aboutTitle}>Contact info</h2>
        <div className={styles.contactGrid}>
          <div>Mail</div>
          <div>GitHub</div>
          <div className={styles.gridCV}>CV</div>
          <div className={styles.gridLinkedin}>LinkedIn</div>
          <div>
              <a href="mailto:TimmyC@timcarr.co.uk?subject=Enquiry from portfolio page"
              rel="noreferrer" target="_blank" className={styles.icon}>{faEnvelopeElement}</a>
          </div>
          <div>
              <a href="https://github.com/TimmyC2021" 
              rel="noreferrer" target="_blank" className={styles.icon}>{faGithubSquareElement}</a>
          </div>
          <div>
              <a href="../documents/tim-carr-cv.pdf" 
              rel="noreferrer" target="_blank" className={styles.icon}>{faFilePdfElement}</a>
          </div>
          <div>
              <a href="https://www.linkedin.com/in/tim-carr-b09932107/" 
              rel="noreferrer" target="_blank" className={styles.icon}>{faLinkedinElement}</a>
          </div>

        </div>
      </div>

      </div>
    </div>
  )
}

export default contact
