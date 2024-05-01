import React from 'react'

import { getImageUrl } from '../../utils';

import styles from './Footer.module.css';

export const Footer = () => {
  return (
    <footer className={styles.container}>
        <div className={styles.text}>
            <span className={styles.description}>&copy; 2024 by Hans Diaz</span>
            <span className={styles.description}>Made by Rafael Castellanos</span>
        </div>
    </footer>
  )
}
