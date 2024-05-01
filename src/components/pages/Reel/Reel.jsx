import React from 'react';

import { getImageUrl } from '../../../utils';

import styles from './Reel.module.css';

export const Reel = () => {
  return (
    <section className={styles.container} id="showreel">
        <div className={styles.titleContainer}>
            <h3 className={styles.title1}>Show</h3>
            <div className={styles.secondLine}>
                <img className={styles.playIcon} src={getImageUrl('home/play-icon.svg')} alt="play" />
                <h2 className={styles.title2}>Reel</h2>
            </div>
        </div>
        <div className={styles.videoContainer}>
            <video 
                className={styles.videoItem}
                controls
                controlsList="nodownload noremoteplayback noplaybackrate"
                loop
                disablePictureInPicture
                muted
            >
                <source 
                    src="https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerEscapes.mp4"
                    type="video/mp4"
                />
            </video>
        </div>
        <div className={styles.separator}></div>
        {/* <div className={styles.topBlur}>
        </div>
        <div className={styles.bottomBlur}>
        </div> */}
    </section>
  )
}
