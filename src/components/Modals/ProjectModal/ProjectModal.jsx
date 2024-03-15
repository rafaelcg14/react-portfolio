import React from 'react';
import { createPortal } from 'react-dom';

import { getImageUrl } from '../../../utils';

import styles from './ProjectModal.module.css';

const mountElement = document.getElementById('project-modal');

export const ProjectModal = ( {isOpened, onClose, children} ) => {
    if ( !isOpened ) {
        return null;
    }
    return (
    createPortal(
        <div className={styles.modal}>
            {/* <div className={styles.overlay}></div> */}
            <div className={styles.container}>
                {/* <span className={styles.closeBtn} onClick={onClose}>X</span> */}
                <img 
                className={styles.closeBtn} 
                src={getImageUrl('nav/closeMenu.svg')} 
                onClick={onClose}
                alt="menu-button"
                />
                <div className={styles.children}>
                    {children}
                </div>
            </div>
        </div>
    , mountElement)
  )
}
