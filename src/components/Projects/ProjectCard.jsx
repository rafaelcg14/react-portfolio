import React from 'react'
import { useState, useEffect } from 'react';

import { ProjectModal } from '../Modals/ProjectModal/ProjectModal';

import { getImageUrl } from '../../utils';

import styles from './ProjectCard.module.css';

export const ProjectCard = ({project: {title, imageSrc, description, skills, tools, images, videos, urlProject}}) => {
    const [isModalOpened, setisModalOpened] = useState(false);
    // console.log('isModalOpened', isModalOpened);

    useEffect(() => {
        const body = document.querySelector('body');
        body.style.overflow = isModalOpened ? 'hidden' : 'auto';
      }, [isModalOpened])
    
      
    return (
        <div>
            <ProjectModal 
                className={styles.projectModal} 
                isOpened={isModalOpened} 
                onClose={ () => setisModalOpened(false) }
                details={{title, description, skills, tools, images, videos, urlProject}}
            />
            <div 
                className={styles.container}
                onClick={ () => setisModalOpened(!isModalOpened) }
            >
                <div className={styles.imageContainer}>
                    <img className={styles.image} src={imageSrc} alt={`Image of ${title}`} />
                    <h3 className={styles.title}>{title}</h3>
                </div>
            </div>
        </div>
  )
}
