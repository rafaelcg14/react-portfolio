import React from 'react'
import { getImageUrl } from '../../utils';
import styles from './About.module.css';

export const About = () => {
  return (
    <section className={styles.container} id="about">
      <h2 className={styles.title}>About</h2>
      <div className={styles.content}>
        <img className={styles.aboutImage} src={getImageUrl('about/aboutImage.png')} alt="Something here" />
        <ul className={styles.aboutItems}>
          <li className={styles.aboutItem}>
            <img src={getImageUrl('about/bars.svg')} alt="something" />
            <div className={styles.aboutItemText}>
              <h3>Frontend Developer</h3>
              <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Asperiores voluptate modi.</p>
            </div>
          </li>
          <li className={styles.aboutItem}>
            <img src={getImageUrl('about/bars.svg')} alt="something" />
            <div className={styles.aboutItemText}>
              <h3>Backend Developer</h3>
              <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Asperiores voluptate modi.</p>
            </div>
          </li>
          <li className={styles.aboutItem}>
            <img src={getImageUrl('about/bars.svg')} alt="something" />
            <div className={styles.aboutItemText}>
              <h3>UX/UI Designer</h3>
              <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Asperiores voluptate modi.</p>
            </div>
          </li>
        </ul>
      </div>
    </section>
  )
}
