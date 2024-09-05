import { useRef, useState, useEffect } from 'react';

import emailjs from '@emailjs/browser';

import { getImageUrl } from '../../utils';

import styles from './Contact.module.css';

export const Contact = () => {
  
    const form = useRef();
    const [ emailStatus, setEmailStatus ] = useState( null );
    const [ emailError, setEmailError ] = useState( false );
    const [ emailMessage, setEmailMessage ] = useState('');
    const [ isEmailValid, setIsEmailValid ] = useState( true );

    const isValidEmail = ( email ) => {
        const pattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
        return pattern.test( email );
    }

    const handleEmailBlur = (e) => {
        const email = e.target.value;

        if (email === '') {
            setEmailError(false);
            setEmailMessage('');
        } else if (!isValidEmail(email)) {
            setEmailError(true);
            setEmailMessage('* Invalid email address');
        } else {
            setEmailError(false);
            setEmailMessage('');
        }
    }

    const sendEmail = (e) => {
        e.preventDefault();
    
        if ( !isValidEmail(e.target.user_email.value) ) {
            setIsEmailValid( false );
            setEmailError( '* Invalid email address' );
            return
        }

        // Emailjs
        emailjs
            .sendForm('service_yv7kr7u', 'template_ztf46el', form.current, {
                publicKey: 'WnHeWLovNjpadeRcG',
            })
            .then(
                () => {
                    // console.log('SUCCESS!');
                    setEmailStatus('success');
                },
                () => {
                    // console.log('FAILED...', error.text);
                    setEmailStatus('error');
                },
            );
        
        e.target.reset();
    };

    useEffect(() => {
        if (emailStatus) {
            const timer = setTimeout(() => {
                setEmailStatus(null);
            }, 3000);

            return () => clearTimeout(timer);
        }
    }, [emailStatus]);

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
                                <a href="mailto:hansdiaz.hz@gmail.com">hansdiaz.hz@gmail.com</a>
                            </li>
                            <li className={styles.link}>
                                <img src={getImageUrl('contact/phone-icon.svg')} alt="Phone icon" />
                                <a className={styles.phoneNumber}>(+51) 950 482 999</a>
                            </li>
                        </ul>
                    </div>
                    <form 
                        className={styles.formContact}
                        ref={form}
                        onSubmit={sendEmail}
                    >
                        <input type="text" name='user_name' placeholder='Your Name or Company' required />
                        <input 
                            type="email" 
                            name='user_email' 
                            placeholder='Your Email' 
                            onBlur={handleEmailBlur}
                            style={{ borderColor: isEmailValid ? 'initial' : 'red' }}
                            required
                        />
                        { emailError && <div className={styles.emailError}>{emailMessage}</div> }
                        <input type="text" name='subject' placeholder='Your Subject' required />
                        <textarea name="message" id="" rows="7" placeholder='Write Your Message Here...' required></textarea>
                        <button className={styles.btnSend} type='submit'>Send Message</button>
                    </form>
                </div>
            </section>
            <div
                className={`${styles.sentEmail} ${emailStatus === 'success' ? styles.show : ''}`}
            >
                Perfect! Hans Díaz has received your email.
            </div>
            <div
                className={`${styles.errorEmail} ${emailStatus === 'error' ? styles.show : ''}`}
            >
                An error has occurred. Try to send the form again.
            </div>
        </div>
    )
}
