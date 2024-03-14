import React from 'react'
import { getImageUrl } from '../../utils';
import styles from './Hero.module.css';

export const Hero = () => {
  return (
    <section className={styles.container}>
        <div className={styles.content}>
            <h1 className={styles.title}>Hi, I am Rafael</h1>
            <p className={styles.description}>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dolorum sed in distinctio ut quam labore illum soluta, veritatis ex! Saepe, sunt! Et aliquid nisi eos quidem fugiat? Corporis, est molestiae?</p>
            <a className={styles.contactBtn} href="mailto:rafaelcg2718@gmail.com">Contact Me</a>
        </div>
        <img className={styles.heroImg} src={getImageUrl('hero/hero.png')} alt="Hero image of me" />
        <div className={styles.topBlur}>
        </div>
        <div className={styles.bottomBlur}>
        </div>
    </section>
  )
}