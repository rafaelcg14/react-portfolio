import React from 'react';
import { useEffect, useRef } from 'react';
import { createPortal } from 'react-dom';

import ImageGallery from 'react-image-gallery';
import "react-image-gallery/styles/css/image-gallery.css";

import { getImageUrl } from '../../../utils';

import styles from './ProjectModal.module.css';

const mountElement = document.getElementById('project-modal');

export const ProjectModal = ( {isOpened, onClose, details} ) => {
    
    const modalRef = useRef(null);

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
            <section className={styles.container}>
                <div className={styles.content} ref={modalRef}>
                    <div className={styles.closeBtnContainer} onClick={onClose}>
                        <img 
                        className={styles.closeBtn} 
                        src={getImageUrl('nav/closeMenu.svg')} 
                        alt="close-modal-btn"
                        />
                    </div>
                    <div className={styles.presentation}>
                        <div className={styles.imageItemContainer}>
                            {/* <img className={styles.imageItem} src={getImageUrl('project-samples/sample-4.jpeg')} alt="image" /> */}
                            <ImageGallery 
                                className={styles.imageItem} 
                                items={details.images}
                                showThumbnails={false}
                                // showNav={false}
                                showBullets={true}
                                autoPlay={false}
                                slideDuration={750}
                                slideInterval={4000}
                                showIndex={true}
                            />
                        </div>
                        {/* <img src={getImageUrl('about/aboutImage.png')} alt="image" /> */}
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
                                            {/* <p>{ tool.name }</p> */}
                                        </div>
                                    );
                                } ) }
                            </div>
                        </div>
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
                                        <h4 className={styles.videoTitle}>{videoItem.videoName}</h4>
                                    </div>
                                );
                            } )
                        }
                    </div>
                </div>
            </section>
        </div>
    , mountElement)
  
}
