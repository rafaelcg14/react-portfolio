import React from 'react';

import styles from './Reel.module.css';

export const Reel = () => {
  return (
    <section className={styles.container} id="showreel">
        <h2 className={styles.title}>Showreel</h2>
        <div className={styles.videoContainer}>
            <video 
                className={styles.videoItem}
                controls
                controlsList="nodownload noremoteplayback noplaybackrate"
                disablePictureInPicture
                muted
            >
                <source 
                    src="https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerEscapes.mp4"
                    type="video/mp4"
                />
            </video>
        </div>
    </section>
  )
}
