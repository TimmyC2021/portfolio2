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
              <h3>Game</h3>
              <h3>Minesweeper</h3>
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
              <h2>Game</h2>
              <h3>Minesweeper</h3>
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
              <p>Github: <a href="">ffgfgdfdf</a></p>
              <p>Project: <a href="">thhhghfghfgh</a></p>
            </section>
            <section>
              <h4>Description</h4>
              <p> Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione qui dolor, error cupiditate vero modi ducimus reprehenderit natus voluptatem quae, deserunt ea doloribus architecto autem, eveniet ab. Voluptate, autem officia.</p>
            </section>
          </div>
        </div>
      </div>

    </div>
  )
}

export default projects
