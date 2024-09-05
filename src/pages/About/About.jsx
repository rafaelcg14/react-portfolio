import { getImageUrl } from '../../utils';
import skillsData from '../../data/skillsData.json';
import styles from './About.module.css';
import { CardAbout } from '../../components/CardAbout/CardAbout';

import cv from '../../static/cv.pdf';
import resume from '../../static/resume.pdf';

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
              <p className={styles.description}>Hans Díaz, 3D Artist and graduated from Toulouse Lautrec, stands out in 3D and VFX techniques for film, advertising and video games. Expert in modeling and texturing in Maya, Blender, ZBrush, Substance Painter, Marmoset Toolbag and Arnold Renderer. I worked at Star Toons Animation modeling and texturing for the short film “Un Vals Así”. Passionate about creating and bringing 3D scenes and characters to life, he is meticulous, detail-oriented and values teamwork, assertive communication and leadership.</p>
              {/* <div className={styles.cvContainer}>
                <img src={getImageUrl('about/file-icon.svg')} alt="CV icon" />
                <a className={styles.resumeBtn} href={cv} download="CV - Hans Diaz - 3D Artist.pdf">Download CV</a>
              </div> */}
              <div className={styles.resumeContainer}>
                <a className={styles.resumeBtn} href={resume} download="Resume - Hans Diaz - 3D Artist.pdf">
                  <img src={getImageUrl('about/file-icon.svg')} alt="Resume icon" />
                  Download CV (EN)
                </a>
                <a className={styles.resumeBtn} href={cv} download="CV - Hans Diaz - 3D Artist.pdf">
                  <img src={getImageUrl('about/file-icon.svg')} alt="CV icon" />
                  Download CV (ES)
                </a>
              </div>
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
