import React from 'react';

import { VerticalTimeline, VerticalTimelineElement }  from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';

import { getImageUrl } from '../../utils';
import history from '../../data/history.json';

import styles from './Experience.module.css';

export const Experience = () => {
  
    const workIconStyles = { 
        'background': '#06DAA0',
        'display': 'grid',
        'placeContent': 'center',
        'padding': '0'
     };
    const schoolIconStyles = { 
        'background': '#f9c74f',
        'display': 'grid',
        'placeContent': 'center',
        'padding': '0'
     };

    const experienceContent = {
        'background': 'maroon',
        'boxShadow': '0 0.25em 0.5em 0 rgba(0, 0, 0, 0.25), 0 0.4em 1.25em 0 rgba(0, 0, 0, 0.15)',
        'marginBottom': '-50px',
        'borderRadius': '0.5em'
    };
    
    return (
    <section className={styles.container} id="experience">
        <h2 className={styles.title}>Experience</h2>
        <VerticalTimeline lineColor="#aaa" className={styles.verticalTimelineStyles}>
            {
                history.map( (hist, id) => {
                    const iconExperience = hist.icon === 'work';

                    return (
                        <VerticalTimelineElement
                            key={id}
                            date={hist.date}
                            dateClassName="date"
                            contentStyle={experienceContent}
                            className={styles.timelineContent}
                            iconStyle={ iconExperience ? workIconStyles : schoolIconStyles }
                            icon={
                                iconExperience ?
                                <img className={styles.experienceIcon} src={getImageUrl('history/work-icon.svg')} alt='work' /> :
                                <img className={styles.experienceIcon} src={getImageUrl('history/education-icon.svg')} alt='education' />
                            }
                        >
                            <h3 className={styles.experienceTitle}>{hist.role}</h3>
                            <h5 className={styles.experienceLocation}>{hist.location}</h5>
                            <ul className={styles.descriptionList}>
                                {
                                    hist.description.map( (desc, id) => {
                                        return (
                                            <li key={id}>{desc}</li>
                                        );
                                    } )
                                }
                            </ul>
                        </VerticalTimelineElement>
                    );
                } )
            }
        </VerticalTimeline>
    </section>
  )
}
