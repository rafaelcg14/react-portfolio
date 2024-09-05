import { useEffect, useRef, useState } from 'react';
import { createPortal } from 'react-dom';


import { getImageUrl } from '../../../utils';

import styles from './ProjectModal.module.css';

const mountElement = document.getElementById('project-modal');

export const ProjectModal = ( {isOpened, onClose, details} ) => {
    
    const modalRef = useRef(null);
    const [hoveredImage, setHoveredImage] = useState(null);

    useEffect(() => {
        const handleClickOutside = (event) => {
            if (modalRef.current && !modalRef.current.contains(event.target)) {
                onClose();
            }
        };

        document.addEventListener('mousedown', handleClickOutside);

        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, [onClose]);
    
    useEffect(() => {
        const handleEscapeKey = (event) => {
            if (event.code === 'Escape') {
                onClose();
            }
        };
        
        document.addEventListener('keydown', handleEscapeKey);
        
        return () => {
            document.removeEventListener('keydown', handleEscapeKey);
        };
    }, [onClose]);
    
    if ( !isOpened ) {
        return null;
    }

    return createPortal(
        <div className={styles.modal}>
            <section className={styles.container} ref={modalRef}>
                <div className={styles.content} >
                    <div className={styles.closeBtnContainer} onClick={onClose}>
                        <img 
                        className={styles.closeBtn} 
                        src={getImageUrl('nav/closeMenu.svg')} 
                        alt="close-modal-btn"
                        />
                    </div>
                    <div className={styles.presentation}>
                        <div className={styles.contentItem}>
                            <h2 className={styles.titleProject}>{details.title}</h2>
                            <p className={styles.descriptionProject}>{details.description}</p>
                            <a href={details.urlProject} className={styles.linkProject} target="_blank">{details.urlProject}</a>
                            <div className={styles.tools}>
                                { details.tools.map( (tool, id) => {
                                    return (
                                        <div key={id} className={styles.tool}>
                                            <div className={styles.toolImageContainer}>
                                                <img src={getImageUrl(tool.imageSrc)} alt={tool.title} />
                                            </div>
                                            <span className={styles.toolName}>{tool.name}</span>
                                        </div>
                                    );
                                } ) }
                            </div>
                        </div>
                        <div className={styles.imageContainer}>
                            {
                                details.images.map( (image, index) => {
                                    return (
                                        <div 
                                            key={index} 
                                            className={styles.imageItemContainer}
                                            onMouseEnter={() => setHoveredImage(index)}
                                            onMouseLeave={() => setHoveredImage(null)}
                                        >
                                            <img 
                                                className={styles.imageItem}
                                                src={image.urlImage}
                                                alt={image.imageTitle}
                                            />
                                            {hoveredImage === index && (
                                                <div className={styles.btnExpandImg}>
                                                    <a className={styles.expandIcon} href={image.urlImage} target='_blank' rel="noopener noreferrer">
                                                        <img src={getImageUrl('projects/expand.svg')} alt="Expand" />
                                                    </a>
                                                </div>
                                            )}
                                            <span className={styles.imgTitle}>{image.imageTitle}</span>
                                        </div>
                                    )
                                })
                            }
                        </div>
                        <div className={styles.videosContainer}>
                            {
                                details.videos.map( (videoItem, id) => {
                                    return (
                                        videoItem.videoUrl &&
                                        <div className={styles.videosContent} key={id}>
                                            <video 
                                                className={styles.videoItem}
                                                autoPlay
                                                loop
                                                controls
                                                controlsList="nodownload noremoteplayback noplaybackrate"
                                                disablePictureInPicture
                                                muted
                                            >
                                                <source 
                                                    src={videoItem.videoUrl} 
                                                    type="video/mp4"
                                                />
                                            </video>
                                            <span className={styles.videoTitle}>{videoItem.videoName}</span>
                                        </div>
                                    );
                                } )
                            }
                        </div>
                    </div>
                </div>
            </section>
        </div>
    , mountElement)
  
}
