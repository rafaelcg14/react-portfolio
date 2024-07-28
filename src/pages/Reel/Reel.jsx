import { useEffect, useState } from 'react';

import { Filter } from '../../components/Filter/Filter';

import { getImageUrl } from '../../utils';
import reelData from '../../data/reel.json';

import styles from './Reel.module.css';
import  { ReelVideo }  from './ReelVideo';

export const Reel = () => {
    const reel3D = reelData.filter(reel => reel.typeOfReel === '3D');
    
    const [ filteredReel, setFilteredReel ] = useState( reel3D );

    const handleFilterChange = ( category ) => {
        if (category === '3D') {
            setFilteredReel(reel3D);
        }
        else  {
            const reel2D = reelData.filter(reel => reel.typeOfReel === '2D');
            setFilteredReel(reel2D);
        }
    };

    return (
        <section className={styles.container} id="showreel">
            <div className={styles.titleContainer}>
                <h3 className={styles.title1}>Show</h3>
                <div className={styles.secondLine}>
                    <img className={styles.playIcon} src={getImageUrl('home/play-icon.svg')} alt="play" />
                    <h2 className={styles.title2}>Reel</h2>
                </div>
            </div>
            <Filter onFilterChange={handleFilterChange} />
            <div className={styles.videoContainer}>
                {filteredReel.map((reel, index) => (
                    <ReelVideo key={index} video={reel.video} />
                ))}
            </div>
            <div className={styles.separator}></div>
        </section>
    )
}
