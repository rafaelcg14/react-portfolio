
import { getImageUrl } from '../../utils';

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
            
            {/* Video */}
            <div className={styles.videoContainer}>
                <iframe
                    src="https://www.youtube.com/embed/bwuPMoGaPKM"
                    title="YouTube video player"
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                ></iframe>
            </div>

            <div className={styles.separator}></div>
        </section>
    )
}
