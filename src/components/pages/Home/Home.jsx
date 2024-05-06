import React from 'react'

import { getImageUrl } from '../../../utils';

import styles from './Home.module.css';

export const Home = () => {
  return (
    <main className={styles.container} id="home">
        <div className={styles.userDataContainer}>
            <div className={styles.userImageContainer}>
                <img className={styles.userImage} src={getImageUrl('hero/raccoon-logo.svg')} alt="My photo" />
            </div>
            <div className={styles.userContent}>
                <h3 className={styles.name}>Hans Diaz</h3>
                <p className={styles.subtitle}>3D Generalist</p>
            </div>
        </div>
        
        <div className={styles.imageGalleryContainer}>
            {/* Image Container */}
            <video 
                className={styles.videoItem}
                // autoPlay
                loop
                muted
            >
                <source 
                    src={getImageUrl('home/portada_dimension_1920_901.mp4')}
                    type="video/mp4"
                />
            </video>
        </div>

        <div className={styles.additionalContainer}>
            {/* <div className={styles.reelContainer}>
                <img className={styles.playIcon} src={getImageUrl('home/play-icon.svg')} alt="play" />
                <a className={styles.showReel} href="#showreel">Showreel</a>
            </div> */}
            <ul className={styles.links}>
                <li className={styles.link}>
                    <a href="https://www.instagram.com/hans_arte/?hl=es-la">
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
