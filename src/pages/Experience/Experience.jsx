import React from 'react';

import { VerticalTimeline, VerticalTimelineElement }  from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';

import { getImageUrl } from '../../utils';
import history from '../../data/history.json';

import styles from './Experience.module.css';

export const Experience = () => {
  
    const workIconStyles = { 
        'background': 'var(--color-primary)',
        'display': 'grid',
        'placeContent': 'center',
        'padding': '0'
     };
    const schoolIconStyles = { 
        'background': 'var(--color-primary)',
        'display': 'grid',
        'placeContent': 'center',
        'padding': '0'
     };

    const experienceContent = {
        'background': '#14181b',
        'boxShadow': '0 0.5em 0.5em 0 rgba(0, 0, 0, 0.25), 0 0.4em 1.25em 0 rgba(0, 0, 0, 0.45)',
        'marginBottom': '-50px',
        'padding-inline': '2rem',
        'borderRadius': '0.5em'
    };
    
    return (
        <div className={styles.mainContainer}>
            <section className={styles.container} id="experience">
                <h2 className={styles.title}>Experience</h2>
                <div className={styles.content}>
                    <VerticalTimeline 
                        lineColor="#aaa" 
                        className={styles.verticalTimelineStyles}
                    >
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
                                        <div className={styles.contentExperience}>
                                            <div className={styles.headerExperience}>
                                                <div className={styles.imageContainer}>
                                                    <img className={styles.imageLogo} src={getImageUrl(hist.imageSrc)} alt="Experience logo" />
                                                </div>
                                                <div className={styles.experienceTitleContainer}>
                                                    <h3 className={styles.experienceTitle}>{hist.role}</h3>
                                                    <h5 className={styles.experienceOrganization}>{hist.organization}</h5>
                                                </div>
                                            </div>
                                            <p className={styles.descriptionExperience}>{hist.description}</p>
                                            <ul className={styles.achievementsList}>
                                                {
                                                    hist.achievements.map( (desc, id) => {
                                                        return (
                                                            <li key={id} className={styles.achievementItem}>{desc}</li>
                                                        );
                                                    } )
                                                }
                                            </ul>
                                        </div>
                                    </VerticalTimelineElement>
                                );
                            } )
                        }
                    </VerticalTimeline>
                </div>
            </section>
            <div className={styles.separator}></div>
        </div>
    )
}
