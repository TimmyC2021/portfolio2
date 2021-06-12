import React from 'react';
import styles from './Projects.module.scss';

const projects = () => {
  return (
    <div className={styles.heroImage}>
      <div className={styles.navbarSpacer}></div>
      <div className={`${styles.vertical_center} ${styles.projectsPage}`}>
        <div className={styles.projects}>
          <div className={styles.project}>
            <section>
              <h3>Information</h3>
              <h4>This portfolio</h4>
            </section>
            <section>
              <h3>Skills:</h3>
              <ul>
                <li>HTML</li>
                <li>Javascript</li>
                <li>SCSS</li>
                <li>React</li>
              </ul>
            </section>
            <section>
              <h3>Links</h3>
              <p></p>
              <a href="https://github.com/TimmyC2021/portfolio2" target='_blank'>Github</a>
              <br/><br/>
              <a href="https://timmyc.dev" target='_blank'>Website</a>
            </section>
            <section>
              <h3>Description</h3>
              <p>This is a second incarnation of my portfolio website built using React.</p>
            </section>
          </div>

          <div className={styles.project}>
            <section>
              <h3>Game</h3>
              <h4>Minesweeper</h4>
            </section>
            <section>
              <h3>Skills:</h3>
              <ul>
                <li>HTML</li>
                <li>Javascript</li>
                <li>SCSS</li>
              </ul>
            </section>
            <section>
              <h3>Links</h3>
              <p></p>
              <a href="https://github.com/TimmyC2021/2021-02-16-Minesweeper" target='_blank'>Github</a>
              <br/><br/>
              <a href="https://timmyc2021.github.io/2021-02-16-Minesweeper/" target='_blank'>Website</a>
            </section>
            <section>
              <h3>Description</h3>
              <p>A project started early on in the course to practice our HTML, JavaScript and SCSS skills.</p>
            </section>
          </div>

          <div className={styles.project}>
            <section>
              <h3>Functional</h3>
              <h4>(not) parkrun</h4>
            </section>
            <section>
              <h4>Skills:</h4>
              <ul>
                <li>HTML</li>
                <li>Javascript</li>
                <li>SCSS</li>
              </ul>
            </section>
            <section>
              <h4>Links</h4>
              <p>Github: <a href="https://github.com/timmyc-dev/not_parkrun_calculator/" target="_blank">Github</a></p>
              <p>Project: <a href="https://notparkrun.timmyc.dev/" target="_blank">Website</a></p>
            </section>
            <section>
              <h4>Description</h4>
              <p>During the Covid lockdown parkrun introduced (not) parkrun. You could record a daily 5k time. 
                Your best time of the week would then be entered into the weekly results table for your home parkrun.
                As most of my times are more than 5k I needed to work out the time for 5k using my average pace each day.</p>
            </section>
          </div>
        </div>
      </div>

    </div>
  )
}

export default projects
