import React from 'react'
import { useState } from 'react';

import { ProjectModal } from '../Modals/ProjectModal/ProjectModal';

import { getImageUrl } from '../../utils';

import styles from './ProjectCard.module.css';

export const ProjectCard = ({project: {title, imageSrc, description, skills, demo, source}}) => {
    const [isModalOpened, setisModalOpened] = useState(false);
    console.log('isModalOpened', isModalOpened);

    return (
    <div className={styles.container}>
        <img className={styles.image} src={getImageUrl(imageSrc)} alt={`Image of ${title}`} />
        <h3 className={styles.title}>{title}</h3>
        <p className={styles.description}>{description}</p>
        <ul className={styles.skills}>
            {
                skills.map( (skill, id) => {
                    return <li className={styles.skill} key={id}>{skill}</li>
                } )
            }
        </ul>
        <div className={styles.links}>
            <a className={styles.link} href={demo}>Demo</a>
            <button onClick={ () => setisModalOpened(true) }>Sample</button>
            <ProjectModal className={styles.projectModal} isOpened={isModalOpened} onClose={ () => setisModalOpened(false) }>
                <div class="abc">
                    <img src='https://picsum.photos/500/500' alt="image" />
                    <div>
                        <h2>{title}</h2>
                        <p>{description}</p>
                        <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Blanditiis distinctio, quos alias dolorum quam, ab omnis, laboriosam nemo voluptas fuga itaque nisi odio expedita hic doloremque eum delectus dolor? Recusandae.</p>
                    </div>
                </div>
            </ProjectModal>
            <a className={styles.link} href={source}>Source</a>
        </div>
    </div>
  )
}
