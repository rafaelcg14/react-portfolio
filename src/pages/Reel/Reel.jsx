import { useEffect, useState } from 'react';

import { getImageUrl } from '../../utils';
import reelData from '../../data/reel.json';

import styles from './Reel.module.css';
import  { ReelVideo }  from './ReelVideo';

export const Reel = () => {
    const reel3D = reelData.filter(reel => reel.typeOfReel === '3D');

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
                {reel3D.map((reel, index) => (
                    <ReelVideo key={index} video={reel.video} />
                ))}
            </div>
            <div className={styles.separator}></div>
        </section>
    )
}
