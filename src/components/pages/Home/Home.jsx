import React from 'react'

import { getImageUrl } from '../../../utils';

import styles from './Home.module.css';

export const Home = () => {
  return (
    <main className={styles.container}>
        <div className={styles.userDataContainer}>
            <div className={styles.userImageContainer}>
                <img className={styles.userImage} src={getImageUrl('hero/hero.png')} alt="My photo" />
            </div>
            <div className={styles.userContent}>
                <h3 className={styles.name}>Hans Diaz</h3>
                <p className={styles.description}>3D Artist - Generalist</p>
            </div>
        </div>
        <div className={styles.imageGalleryContainer}>
            Image Container
        </div>
        <div className={styles.additionalContainer}>
            <button className={styles.showReel}>
                <u>Show Reel</u>
            </button>
            <ul className={styles.links}>
                <li className={styles.link}>
                    <a href="https://www.instagram.com">
                        <img src={getImageUrl('contact/instagram-icon.svg')} alt="Instagram icon" />
                    </a>
                </li>
                <li className={styles.link}>
                    <a href="https://www.linkedin.com">
                        <img src={getImageUrl('contact/linkedin-icon.svg')} alt="LinkedIn icon" />
                    </a>
                </li>
                <li className={styles.link}>
                    <a href="https://artstation.com">                    
                        <img src={getImageUrl('contact/artstation-icon.svg')} alt="ArtStation icon" />
                    </a>
                </li>
            </ul>
        </div>
    </main>
  )
}
