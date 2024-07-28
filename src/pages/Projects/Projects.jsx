import { useState } from 'react';

import { ProjectCard } from './ProjectCard';
import { Filter } from '../../components/Filter/Filter';

import projects from '../../data/projects.json';

import styles from './Projects.module.css';

export const Projects = ( ) => {
  
    const projects3D = projects.filter(project => project.typeOfModel === '3D');
    const [ filteredProjects, setFilteredProjects ] = useState( projects3D );
    
    
    const handleFilterChange = ( category ) => {
        if (category === '3D') {
            setFilteredProjects(projects3D);
          } else {
            const projects2D = projects.filter(project => project.typeOfModel === '2D');
            setFilteredProjects(projects2D);
        }
    };

    return (
        <section className={styles.container} id="projects">
            <div>
                <h2 className={styles.title}>Projects</h2>
                <Filter onFilterChange={handleFilterChange} />
                <div className={styles.projects}>
                    {
                        filteredProjects.map( (project, id) => {
                            return (
                                <ProjectCard key={id} project={project} />
                            );
                        } )
                    }
                </div>
            </div>
            <div className={styles.separator}></div>
        </section>
  )
}
