import { getImageUrl } from '../../utils';
import skillsData from '../../data/skillsData.json';
import styles from './About.module.css';
import { CardAbout } from '../../components/CardAbout/CardAbout';

import cv from '../../static/cv.pdf';

export const About = () => {

  return (
    <div className={styles.mainContainer}>
      <section className={styles.container} id="about">
        <h2 className={styles.title}>About</h2>
        <div className={styles.content}>
          <article className={styles.bio}>
            <div className={styles.descriptionCard}>
              <h4 className={styles.name}>Hans Díaz</h4>
              <span className={styles.tagName}>3D Artist | Modeling, Texturing and Lighting</span>
              <p className={styles.description}>Hans Díaz, Artista 3D y egresado de Toulouse Lautrec, destaco en técnicas 3D y VFX para cine, publicidad y videojuegos. Experto en modelado y texturizado en Maya, Blender, ZBrush, Substance Painter, Marmoset Toolbag y Arnold Renderer. Trabajé en Star Toons Animation modelando y texturizando para el cortometraje “Un Vals Así”. Apasionado por crear y dar vida a escenarios y personajes 3D, es meticuloso, detallista y valora el trabajo en equipo, la comunicación asertiva y el liderazgo.</p>
              {/* <div className={styles.cvContainer}>
                <img src={getImageUrl('about/file-icon.svg')} alt="CV icon" />
                <a className={styles.resumeBtn} href={cv} download="CV - Hans Diaz - 3D Artist.pdf">Download CV</a>
              </div> */}
              <a className={styles.resumeBtn} href={cv} download="CV - Hans Diaz - 3D Artist.pdf">
                <img src={getImageUrl('about/file-icon.svg')} alt="CV icon" />
                Download CV
              </a>
            </div>
            <div className={styles.aboutCard}>
              <img className={styles.heroImg} src={getImageUrl('hero/hero.jpg')} alt="Hero image of me" />
              <div className={styles.textCard}>
                <img src={getImageUrl('about/location-icon.svg')} alt="location" />
                <span>Lima, Peru</span>
              </div>
              <div className={styles.textCard}>
                <img src={getImageUrl('contact/email-icon.svg')} alt="location" />
                <span>hansdiaz.hz@gmail.com</span>
              </div>
            </div>
          </article>
          <article className={styles.expertise}>
            {
              skillsData.map((data, index) => {
                return (
                   < CardAbout title={data.title} data={data.skills} key={index} />
                )
              })
            }
          </article>
        </div>
        <div className={styles.separator}></div>  
      </section>
    </div>
  )
}
