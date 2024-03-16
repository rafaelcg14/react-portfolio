import React from 'react';
import { createPortal } from 'react-dom';

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
            <div className={styles.container}>
                <div className={styles.closeBtnContainer}>
                    <img 
                    className={styles.closeBtn} 
                    src={getImageUrl('nav/closeMenu.svg')} 
                    onClick={onClose}
                    alt="close-modal-btn"
                    />
                </div>
                <div className={styles.content}>
                    {/* <img src='https://picsum.photos/500/500' alt="image" /> */}
                    <div className={styles.imageItemContainer}>
                        <img className={styles.imageItem} src={getImageUrl('project-samples/sample-4.jpeg')} alt="image" />
                    </div>
                    {/* <img src={getImageUrl('about/aboutImage.png')} alt="image" /> */}
                    <div className={styles.contentItem}>
                        <h2>{details.title}</h2>
                        <p>{details.description}</p>
                        <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Blanditiis distinctio, quos alias dolorum quam, ab omnis, laboriosam nemo voluptas fuga itaque nisi odio expedita hic doloremque eum delectus dolor? Recusandae.</p>
                        <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Blanditiis distinctio, quos alias dolorum quam, ab omnis, laboriosam nemo voluptas fuga itaque nisi odio expedita hic doloremque eum delectus dolor? Recusandae.</p>
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
            </div>
        </div>
    , mountElement)
  
}
