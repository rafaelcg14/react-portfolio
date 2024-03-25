import React from 'react'
import { getImageUrl } from '../../utils';
import skills from '../../data/skills.json';
import styles from './About.module.css';

export const About = () => {
  return (
    <section className={styles.container} id="about">
      <h2 className={styles.title}>About</h2>
      <div className={styles.presentation}>
        <div className={styles.description}>
          <h4 className={styles.name}>Hi, I am Hans</h4>
          <p className={styles.description}>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dolorum sed in distinctio ut quam labore illum soluta, veritatis ex! Saepe, sunt! Et aliquid nisi eos quidem fugiat? Corporis, est molestiae?</p>
          <p className={styles.description}>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dolorum sed in distinctio ut quam labore illum soluta, veritatis ex! Saepe, sunt! Et aliquid nisi eos quidem fugiat? Corporis, est molestiae?</p>
          <a className={styles.resumeBtn} href="/">See Resume</a>
        </div>
        <div className={styles.imgContainer}>
          <img className={styles.heroImg} src={getImageUrl('hero/hero.png')} alt="Hero image of me" />
        </div>
      </div>
      <div className={styles.skills}>
            { skills.map( (skill, id) => {
                return (
                    <div key={id} className={styles.skill}>
                        <div className={styles.skillImageContainer}>
                            <img src={getImageUrl(skill.imageSrc)} alt={skill.title} />
                        </div>
                        <p>{ skill.title }</p>
                    </div>
                );
            } ) }
        </div>
    </section>
  )
}
