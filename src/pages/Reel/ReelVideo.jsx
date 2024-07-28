import styles from './Reel.module.css';

export const ReelVideo = ( { video} ) => {
    return (
        <video 
            key={video}
            className={styles.videoItem}
            controls
            controlsList="nodownload noremoteplayback noplaybackrate"
            loop
            disablePictureInPicture
            muted
        >
            <source 
                src={video}
                type="video/mp4"
            />
        </video>
    )
}
