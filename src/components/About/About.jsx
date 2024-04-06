import React from 'react'
import { getImageUrl } from '../../utils';
import about from '../../data/about.json';
import styles from './About.module.css';

export const About = () => {
  
  const skills = about[0].skills;
  const tools = about[0].tools;
  const softSkills = about[0].softSkills;

  return (
    <div className={styles.mainContainer}>
      <section className={styles.container} id="about">
        <h2 className={styles.title}>About</h2>
        <div className={styles.content}>
          <article className={styles.bio}>
            <div className={styles.descriptionCard}>
              <h4 className={styles.name}>Hans Diaz</h4>
              <span className={styles.tagName}>3D Generalist</span>
              <p className={styles.description}>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dolorum sed in distinctio ut quam labore illum soluta, veritatis ex! Saepe, sunt! Et aliquid nisi eos quidem fugiat? Corporis, est molestiae?</p>
              <p className={styles.description}>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dolorum sed in distinctio ut quam labore illum soluta, veritatis ex! Saepe, sunt! Et aliquid nisi eos quidem fugiat? Corporis, est molestiae?</p>
              <a className={styles.resumeBtn} href="/">See Resume</a>
            </div>
            <div className={styles.aboutCard}>
              <img className={styles.heroImg} src={getImageUrl('hero/hero.png')} alt="Hero image of me" />
              <div className={styles.textCard}>
                <img src={getImageUrl('about/location-icon.svg')} alt="location" />
                <span>Lima, Peru</span>
              </div>
              <div className={styles.textCard}>
                <img src={getImageUrl('contact/email-icon.svg')} alt="location" />
                <span>hans777@gmail.com</span>
              </div>
            </div>
          </article>
          <article className={styles.expertise}>
            <div className={styles.card}>
              <h3 className={styles.titleCard}>Skills</h3>
              <ul className={styles.list}>
                {
                  skills.map( (skill, id) => {
                    return (
                      <li key={id} className={styles.item}>
                        {skill}
                      </li>
                    )
                  } )
                }
              </ul>
            </div>
            <div className={styles.card}>
              <h3 className={styles.titleCard}>Tools</h3>
              <ul className={styles.list}>
                {
                  tools.map( (tool, id) => {
                    return (
                      <li key={id} className={styles.item}>
                        {tool}
                      </li>
                    )
                  } )
                }
              </ul>
            </div>
            <div className={styles.card}>
              <h3 className={styles.titleCard}>Soft Skills</h3>
              <ul className={styles.list}>
                {
                  softSkills.map( (softSkill, id) => {
                    return (
                      <li key={id} className={styles.item}>
                        {softSkill}
                      </li>
                    )
                  } )
                }
              </ul>
            </div>
          </article>
        </div>
      </section>
    </div>
  )
}
