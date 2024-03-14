import React from 'react'

import { getImageUrl } from '../../utils';

import styles from './Contact.module.css';

export const Contact = () => {
  return (
    <footer id="contact" className={styles.container}>
        <div className={styles.text}>
            <h2>Contact</h2>
            <p>Feel free to reach out!</p>
        </div>
        <ul className={styles.links}>
            <li className={styles.link}>
                <img src={getImageUrl('contact/phone-icon.svg')} alt="Phone icon" />
                <img src={getImageUrl('contact/peru-flag.png')} alt="Peru flag" />
                <a>(+51) 990 427 877</a>
            </li>
            <li className={styles.link}>
                <img src={getImageUrl('contact/email-icon.svg')} alt="Email icon" />
                <a href="mailto:rafaelcg2718@gmail.com">rafaelcg2718@gmail.com</a>
            </li>
            <li className={styles.link}>
                <img src={getImageUrl('contact/instagram-icon.svg')} alt="Instagram icon" />
                <a href="https://www.instagram.com/hans_arte">hans_arte</a>
            </li>
            <li className={styles.link}>
                <img src={getImageUrl('contact/linkedin-icon.svg')} alt="LinkedIn icon" />
                <a href="https://www.linkedin.com/in/rafael-castellanos-guzman">linkedin.com/in/rafael-castellanos-guzman</a>
            </li>
            <li className={styles.link}>
                <img src={getImageUrl('contact/github-icon.svg')} alt="Github icon" />
                <a href="https://github.com/StarLordCG">github.com/StarLordCG</a>
            </li>
        </ul>
    </footer>
  )
}
