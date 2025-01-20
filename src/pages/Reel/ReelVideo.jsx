import styles from './Reel.module.css';

export const ReelVideo = (  ) => {
    return (
        // <video 
        //     key={video}
        //     className={styles.videoItem}
        //     controls
        //     controlsList="nodownload noremoteplayback noplaybackrate"
        //     loop
        //     disablePictureInPicture
        // >
        //     <source 
        //         src={video}
        //         type="video/mp4"
        //     />
        // </video>
        <div className={styles.container}>
            <iframe
                src="https://www.youtube.com/embed/bwuPMoGaPKM"
                title="YouTube video player"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
            ></iframe>
        </div>
        
    )
}
