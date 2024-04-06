import { useRef } from 'react';

import { getImageUrl } from '../../utils';

import styles from './Contact.module.css';

export const Contact = () => {
  
    const form = useRef();
    const sendEmail = () => {};

    return (
        <div className={styles.component} id="contact">
            <section id="contact" className={styles.container}>
                <h2 className={styles.title}>Contact</h2>
                <div className={styles.content}>
                    <div className={styles.description}>
                        <p>Please, use this contact form or you can contact me directly with ...</p>
                        <ul className={styles.links}>
                            <li className={styles.link}>
                                <img src={getImageUrl('contact/email-icon.svg')} alt="Email icon" />
                                <a href="mailto:rafaelcg2718@gmail.com">rafaelcg2718@gmail.com</a>
                            </li>
                            <li className={styles.link}>
                                <img src={getImageUrl('contact/phone-icon.svg')} alt="Phone icon" />
                                <a>(+51) 111 111 111</a>
                            </li>
                        </ul>
                    </div>
                    <form 
                        className={styles.formContact}
                        ref={form}
                        onSubmit={sendEmail}
                    >
                        <input type="text" name='name' placeholder='Name or Company' required />
                        <input type="email" name='email' placeholder='Email' required />
                        <input type="text" name='subject' placeholder='Subject' required />
                        <textarea name="message" id="" rows="7" placeholder='Write Your Message Here...' required></textarea>
                        <button className={styles.btnSend} type='submit'>Send Message</button>
                    </form>
                </div>
            </section>
        </div>
    )
}
