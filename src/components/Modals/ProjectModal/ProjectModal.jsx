import React from 'react';
import { createPortal } from 'react-dom';

import ImageGallery from 'react-image-gallery';
import "react-image-gallery/styles/css/image-gallery.css";
// import image1 from '../../../../assets/project-samples/sample-2.jpeg';
// import image2 from '../../../../assets/project-samples/sample-3.jpeg';
// import image3 from '../../../../assets/project-samples/sample-4.jpeg';

import { getImageUrl } from '../../../utils';

import styles from './ProjectModal.module.css';

const mountElement = document.getElementById('project-modal');

export const ProjectModal = ( {isOpened, onClose, details} ) => {
    
    // console.log(details);

    if ( !isOpened ) {
        return null;
    }
    return createPortal(
        <div className={styles.modal}>
            <section className={styles.container}>
                <div onClick={onClose}>
                    <div className={styles.closeBtnContainer}>
                        <img 
                        className={styles.closeBtn} 
                        src={getImageUrl('nav/closeMenu.svg')} 
                        
                        alt="close-modal-btn"
                        />
                    </div>
                </div>
                <div className={styles.content}>
                    <div className={styles.presentation}>
                        <div className={styles.imageItemContainer}>
                            {/* <img className={styles.imageItem} src={getImageUrl('project-samples/sample-4.jpeg')} alt="image" /> */}
                            <ImageGallery 
                                className={styles.imageItem} 
                                items={details.images}
                                showThumbnails={false}
                                showNav={false}
                                showBullets={true}
                                autoPlay={true}
                                slideDuration={2000}
                                slideInterval={4000}
                            />
                        </div>
                        {/* <img src={getImageUrl('about/aboutImage.png')} alt="image" /> */}
                        <div className={styles.contentItem}>
                            <h2 className={styles.titleProject}>{details.title}</h2>
                            <p className={styles.descriptionProject}>{details.description}</p>
                            <p className={styles.descriptionProject}>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Blanditiis distinctio, quos alias dolorum quam, ab omnis, laboriosam nemo voluptas fuga itaque nisi odio expedita hic doloremque eum delectus dolor? Recusandae.</p>
                            <p className={styles.descriptionProject}>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Blanditiis distinctio, quos alias dolorum quam, ab omnis, laboriosam nemo voluptas fuga itaque nisi odio expedita hic doloremque eum delectus dolor? Recusandae.</p>
                            <ul className={styles.skills}>
                                {
                                    details.skills.map( (skill, id) => {
                                        return <li className={styles.skill} key={id}>{skill}</li>
                                    } )
                                }
                            </ul>
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
                    {/* <div className={styles.videosContainer}>
                        {
                            details.videos.map( (videoItem, id) => {
                                return (
                                    <div className={styles.videosContent} key={id}>
                                        <h4 className={styles.videoTitle}>{videoItem.videoName}</h4>
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
                                    </div>
                                );
                            } )
                        }
                    </div> */}
                </div>
            </section>
        </div>
    , mountElement)
  
}
