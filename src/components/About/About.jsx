import { getImageUrl } from '../../utils';
import skillsData from '../../data/skillsData.json';
import styles from './About.module.css';
import { CardAbout } from '../CardAbout/CardAbout';

export const About = () => {

  return (
    <div className={styles.mainContainer}>
      <section className={styles.container} id="about">
        <h2 className={styles.title}>About</h2>
        <div className={styles.content}>
          <article className={styles.bio}>
            <div className={styles.descriptionCard}>
              <h4 className={styles.name}>Hans Diaz</h4>
              <span className={styles.tagName}>3D Generalist</span>
              <p className={styles.description}>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dolorum sed in distinctio ut quam labore illum soluta, veritatis ex! Saepe, sunt! Et aliquid nisi eos quidem fugiat? Corporis, est molestiae?</p>
              <p className={styles.description}>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dolorum sed in distinctio ut quam labore illum soluta, veritatis ex! Saepe, sunt! Et aliquid nisi eos quidem fugiat? Corporis, est molestiae?</p>
              <a className={styles.resumeBtn} href="/">See Resume</a>
            </div>
            <div className={styles.aboutCard}>
              <img className={styles.heroImg} src={getImageUrl('hero/hero.png')} alt="Hero image of me" />
              <div className={styles.textCard}>
                <img src={getImageUrl('about/location-icon.svg')} alt="location" />
                <span>Lima, Peru</span>
              </div>
              <div className={styles.textCard}>
                <img src={getImageUrl('contact/email-icon.svg')} alt="location" />
                <span>hans777@gmail.com</span>
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
      </section>
    </div>
  )
}
