import React from 'react'

import { getImageUrl } from '../../utils';

import styles from './Footer.module.css';

export const Footer = () => {
  return (
    <footer className={styles.container}>
        <div className={styles.text}>
            <span className={styles.description}>&copy; 2024. Hans Diaz</span>
            <span className={styles.description}>Collab with <a href="https://www.google.com">Rafael Castellanos</a>.</span>
        </div>
    </footer>
  )
}
